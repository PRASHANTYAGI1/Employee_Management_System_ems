import {
    getEmployeeForLogin, saveTokens, getRefreshSession, rotateTokens, revokeByRefresh,
} from "../models/authModel.js";
import { comparePassword, hashToken } from "../helper/hash.js";
import { signAccessToken, signRefreshToken, verifyRefreshToken, getExpiry } from "../helper/jwt.js";
import { setAuthCookies, clearAuthCookies } from "../helper/cookie.js";

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const employee = await getEmployeeForLogin(email);
        const passwordOk = employee && (await comparePassword(password, employee.password_hash));

        if (!passwordOk) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        if (employee.status !== "ACTIVE") {
            return res.status(403).json({ message: "Your account is inactive. Contact your admin." });
        }
        if (employee.org_status === "BLOCKED") {
            return res.status(403).json({ message: "Your organisation is blocked. Contact support." });
        }

        const payload = {
            employeeId: employee.id,
            organizationId: employee.organization_id,
            roleId: employee.role_id,
            accessType: employee.access_type,
        };
        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);

        await saveTokens(
            employee.id, employee.organization_id,
            hashToken(accessToken), hashToken(refreshToken),
            getExpiry(accessToken), getExpiry(refreshToken),
            req.headers["user-agent"] || null, req.ip
        );

        setAuthCookies(res, accessToken, refreshToken);

        return res.json({
            message: "Login successful",
            user: {
                id: employee.id,
                name: employee.name,
                email: employee.email,
                role: employee.role_name,
                accessType: employee.access_type,
                organizationId: employee.organization_id,
                organizationName: employee.organization_name,
                mustChangePassword: employee.must_change_password,
            },
        });
    } catch (e) {
        next(e);
    }
};

export const refresh = async (req, res, next) => {
    try {
        const oldToken = req.cookies.refreshToken;
        if (!oldToken) return res.status(401).json({ message: "Not logged in" });

        try {
            verifyRefreshToken(oldToken);
        } catch {
            clearAuthCookies(res);
            return res.status(401).json({ message: "Session expired, please login again" });
        }

        const oldHash = hashToken(oldToken);
        const session = await getRefreshSession(oldHash);

        // not present in DB (revoked / logged out / deleted) -> login again
        if (!session) {
            clearAuthCookies(res);
            return res.status(401).json({ message: "Session not found, please login again" });
        }
        if (session.employee_status !== "ACTIVE" || session.org_status === "BLOCKED") {
            clearAuthCookies(res);
            return res.status(403).json({ message: "Account or organisation is not active" });
        }

        // role data comes fresh from the DB, so role changes apply on refresh
        const payload = {
            employeeId: session.employee_id,
            organizationId: session.organization_id,
            roleId: session.role_id,
            accessType: session.access_type,
        };
        const accessToken = signAccessToken(payload);
        const refreshToken = signRefreshToken(payload);

        const newId = await rotateTokens(
            oldHash, hashToken(accessToken), hashToken(refreshToken),
            getExpiry(accessToken), getExpiry(refreshToken),
            req.headers["user-agent"] || null, req.ip
        );
        if (!newId) {
            clearAuthCookies(res);
            return res.status(401).json({ message: "Session already used, please login again" });
        }

        setAuthCookies(res, accessToken, refreshToken);
        return res.json({ message: "Token refreshed" });
    } catch (e) {
        next(e);
    }
};

export const logout = async (req, res, next) => {
    try {
        const token = req.cookies.refreshToken;
        if (token) await revokeByRefresh(hashToken(token));
        clearAuthCookies(res);
        return res.json({ message: "Logged out" });
    } catch (e) {
        next(e);
    }
};

export const me = (req, res) => {
    res.json({ user: req.user });
};
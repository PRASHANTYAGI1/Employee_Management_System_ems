import { verifyAccessToken } from "../helper/jwt.js";
import { hashToken } from "../helper/hash.js";
import { getSessionState } from "../models/authModel.js";

export const authenticate = async (req, res, next) => {
    try {
        const token = req.cookies.accessToken;
        if (!token) return res.status(401).json({ message: "Not logged in", code: "NO_TOKEN" });

        let payload;
        try {
            payload = verifyAccessToken(token);
        } catch (err) {
            const expired = err.name === "TokenExpiredError";
            return res.status(401).json({
                message: expired ? "Token expired" : "Invalid token",
                code: expired ? "TOKEN_EXPIRED" : "INVALID_TOKEN",
            });
        }

        // must be present in the DB, not revoked, not expired
        const state = await getSessionState(hashToken(token));
        if (!state) {
            return res.status(401).json({ message: "Session not found", code: "SESSION_INVALID" });
        }
        if (state.employee_status !== "ACTIVE") {
            return res.status(403).json({ message: "Account is inactive" });
        }
        if (state.org_status === "BLOCKED") {
            return res.status(403).json({ message: "Your organisation is blocked" });
        }

        req.user = payload;
        next();
    } catch (e) {
        next(e);
    }
};

export const allowRoles = (...types) => (req, res, next) => {
    if (!types.includes(req.user.accessType)) {
        return res.status(403).json({ message: "You do not have permission" });
    }
    next();
};
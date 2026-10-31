import { comparePassword,hashPassword, generatePassword } from "../helper/hash.js";
import { signPlatformToken } from "../helper/jwt.js";
import { setPlatformCookie, clearPlatformCookie } from "../helper/cookie.js";
import { createOrganizationWithAdmin } from "../models/platformModel.js";


export const platformLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const emailOk = email === (process.env.SUPER_ADMIN_EMAIL || "").trim().toLowerCase();
        // always run the password check, so a wrong email doesn't answer faster
        const passOk = await comparePassword(password, process.env.SUPER_ADMIN_PASSWORD_HASH || "");

        if (!emailOk || !passOk) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        setPlatformCookie(res, signPlatformToken());
        return res.json({ message: "Platform login successful", user: { email, role: "SUPER_ADMIN" } });
    } catch (e) {
        next(e);
    }
};

export const platformLogout = (req, res) => {
    clearPlatformCookie(res);
    res.json({ message: "Logged out" });
};

export const platformMe = (req, res) => {
    res.json({ user: { role: "SUPER_ADMIN" } });
};




// this creates organisation ok super admin creates organisation then organisation further do what tehy want ok 
export const createOrganization = async (req, res, next) => {
    try {
        const tempPassword = generatePassword();
        const adminPasswordHash = await hashPassword(tempPassword);

        const result = await createOrganizationWithAdmin({
            ...req.body,
            adminPasswordHash,
        });

        // TODO: send tempPassword to adminEmail with nodemailer (later)
        return res.status(201).json({
            message: "Organisation created",
            organization: { id: result.new_org_id, name: req.body.name, plan: req.body.plan },
            admin: {
                id: result.new_admin_id,
                email: req.body.adminEmail,
                temporaryPassword: tempPassword, // shown only this one time
            },
        });
    } catch (e) {
        if (e.message === "EMAIL_EXISTS") {
            return res.status(409).json({ message: "This admin email is already registered" });
        }
        if (e.message === "ORG_EXISTS") {
            return res.status(409).json({ message: "An organisation with this name already exists" });
        }
        next(e);
    }
};
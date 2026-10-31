import { verifyPlatformToken } from "../helper/jwt.js";

export const authenticatePlatform = (req, res, next) => {
    const token = req.cookies.platformToken;
    if (!token) return res.status(401).json({ message: "Not logged in" });

    try {
        const payload = verifyPlatformToken(token);
        if (payload.type !== "platform") throw new Error("wrong token type");
        req.platformUser = payload;
        next();
    } catch {
        return res.status(401).json({ message: "Token expired or invalid" });
    }
};
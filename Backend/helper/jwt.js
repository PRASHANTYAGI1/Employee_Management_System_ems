import jwt from "jsonwebtoken";
import crypto from "crypto";

export const signAccessToken = (payload) =>
    jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES,
        jwtid: crypto.randomUUID(),
    });

export const signRefreshToken = (payload) =>
    jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: `${process.env.REFRESH_TOKEN_DAYS}d`,
        jwtid: crypto.randomUUID(),
    });

export const verifyAccessToken = (t) => jwt.verify(t, process.env.ACCESS_TOKEN_SECRET);
export const verifyRefreshToken = (t) => jwt.verify(t, process.env.REFRESH_TOKEN_SECRET);

export const getExpiry = (token) => new Date(jwt.decode(token).exp * 1000);

export const signPlatformToken = () =>
    jwt.sign({ type: "platform", role: "SUPER_ADMIN" }, process.env.PLATFORM_TOKEN_SECRET, {
        expiresIn: process.env.PLATFORM_TOKEN_EXPIRES || "1h",
    });

export const verifyPlatformToken = (t) => jwt.verify(t, process.env.PLATFORM_TOKEN_SECRET);
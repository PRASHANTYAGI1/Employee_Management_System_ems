
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const jwt_expire = process.env.ACCESS_TOKEN_EXPIRE;
const jwt_secret = process.env.JWT_SECRET_KEY;


// ACCESS TOKEN
export const createJWT = async (id, role_id) => {
    return jwt.sign(
        { id, role_id },
        jwt_secret,
        { expiresIn: jwt_expire }
    );
};


// REFRESH TOKEN
export const createRefreshJWT = async (id, role_id) => {
    return jwt.sign(
        { id, role_id },
        jwt_secret,
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRE }
    );
};


// HASH PASSWORD
export const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};


// REFRESH TOKEN COOKIE
export const createCookie = (res, token) => {
    res.cookie("refreshToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: parseInt(process.env.COOKIE_EXPIRATION) *
            24 * 60 * 60 * 1000
    });
};

import bcrypt from "bcrypt";
import crypto from "crypto";

// passwords
export const hashPassword = (plain) => bcrypt.hash(plain, 10);
export const comparePassword = (plain, hash) => bcrypt.compare(plain, hash);

// access/refresh tokens are stored in the tokens table as SHA-256 hashes
export const hashToken = (token) =>
    crypto.createHash("sha256").update(token).digest("hex");

// random password for new employees (emailed to them)
export const generatePassword = (len = 10) =>
    crypto.randomBytes(len).toString("base64url").slice(0, len) + "@1A";
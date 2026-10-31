const isProd = process.env.NODE_ENV === "production";
const refreshDays = Number(process.env.REFRESH_TOKEN_DAYS) || 7;
const refreshMaxAge = refreshDays * 24 * 60 * 60 * 1000;

const base = {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? "strict" : "lax",
};

export const setAuthCookies = (res, accessToken, refreshToken) => {
    // the cookie lives as long as the refresh token, the JWT inside expires on its own
    res.cookie("accessToken", accessToken, { ...base, maxAge: refreshMaxAge });

    res.cookie("refreshToken", refreshToken, {
        ...base,
        path: "/api/auth", // sent only to /api/auth/* routes
        maxAge: refreshMaxAge,
    });
};

export const clearAuthCookies = (res) => {
    res.clearCookie("accessToken", base);
    res.clearCookie("refreshToken", { ...base, path: "/api/auth" });
};


export const setPlatformCookie = (res, token) => {
    res.cookie("platformToken", token, {
        ...base,
        path: "/api/platform", // sent only to platform routes
        maxAge: 60 * 60 * 1000,
    });
};

export const clearPlatformCookie = (res) => {
    res.clearCookie("platformToken", { ...base, path: "/api/platform" });
};
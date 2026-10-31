import { callFn } from "../config/db.js";

export const getEmployeeForLogin = async (email) => {
    const rows = await callFn("get_employee_for_login", [email]);
    return rows[0];
};

export const saveTokens = async (employeeId, orgId, accessHash, refreshHash, accessExp, refreshExp, userAgent, ip) => {
    const rows = await callFn("save_tokens", [
        employeeId, orgId, accessHash, refreshHash, accessExp, refreshExp, userAgent, ip,
    ]);
    return rows[0];
};

export const getSessionState = async (accessHash) => {
    const rows = await callFn("get_session_state", [accessHash]);
    return rows[0];
};

export const getRefreshSession = async (refreshHash) => {
    const rows = await callFn("get_refresh_session", [refreshHash]);
    return rows[0];
};

export const rotateTokens = async (oldRefreshHash, accessHash, refreshHash, accessExp, refreshExp, userAgent, ip) => {
    const rows = await callFn("rotate_tokens", [
        oldRefreshHash, accessHash, refreshHash, accessExp, refreshExp, userAgent, ip,
    ]);
    return rows[0]?.rotate_tokens; // null if the old token was already used
};

export const revokeByRefresh = async (refreshHash) => {
    await callFn("revoke_by_refresh", [refreshHash]);
};
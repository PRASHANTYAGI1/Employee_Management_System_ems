import { callFn } from "../config/db.js";

export const createOrganizationWithAdmin = async (d) => {
    const rows = await callFn("create_organization_with_admin", [
        d.name, d.address ?? null, d.ownerName, d.plan,
        d.adminName, d.adminEmail, d.adminPhone ?? null, d.adminPasswordHash,
    ]);
    return rows[0];
};
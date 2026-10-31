import { z } from "zod";

export const createOrganizationSchema = z.object({
    name: z.string().trim().min(2, "Organisation name is required").max(200),
    address: z.string().trim().max(500).optional(),
    ownerName: z.string().trim().min(2, "Owner name is required").max(150),
    plan: z.enum(["NORMAL", "PRO"]).default("NORMAL"),
    adminName: z.string().trim().min(2, "Admin name is required").max(150),
    adminEmail: z.string().trim().toLowerCase().email("Valid admin email is required"),
    adminPhone: z
        .string()
        .trim()
        .regex(/^[0-9]{10,15}$/, "Phone must be 10 to 15 digits")
        .optional(),
});
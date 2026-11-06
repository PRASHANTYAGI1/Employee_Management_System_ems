
import { z } from "zod";

const employeeLoginSchema = z.object({
    email: z.string().email({
        error: "Invalid email address"
    }),

    password: z.string().min(6, {
        error: "Password must be at least 6 characters long"
    })
});

const employeeRegisterSchema = z.object({
    employee_code: z.string().min(1, {
        error: "Employee code is required"
    }),

    full_name: z.string().min(1, {
        error: "Full name is required"
    }),

    email: z.string().email({
        error: "Invalid email address"
    }),

    password: z.string().min(6, {
        error: "Password must be at least 6 characters long"
    }),

    password_confirmation: z.string().min(6, {
        error: "Password must be at least 6 characters long"
    }).optional(),

    role_id: z.coerce.number().int().positive({
        error: "Valid role is required"
    }),

    gender: z.string().min(1, {
        error: "Gender is required"
    }),

    employment_status: z.enum(
        ["active", "inactive", "terminated"],
        {
            error: "Invalid employment status"
        }
    )
});

const deleteEmployeeSchema = z.object({
    employee_id: z.coerce.number().int().positive({
        error: "Valid employee ID is required please provide a valid employee ID"
    })
});

const updateEmployeeSchema = z.object({
    employee_id: z.coerce.number().int().positive({
        error: "Valid employee ID is required please provide a valid employee ID"
    }),

    full_name: z.string().min(1, {
        error: "Full name is required" 
    }),
    password: z.string().min(6, {
        error: "Password must be at least 6 characters long"
    }).optional(),
    role_id: z.coerce.number().int().positive({
        error: "Valid role is required"
    }),
    gender: z.string().min(1, {
        error: "Gender is required"
    }),
    employment_status: z.enum(
        ["active", "inactive", "terminated"],
        {    
            error: "Invalid employment status"
        }
    ).optional()
});



export { employeeLoginSchema, employeeRegisterSchema, deleteEmployeeSchema, updateEmployeeSchema };

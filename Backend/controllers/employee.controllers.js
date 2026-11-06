
import bcrypt from "bcrypt";

import {
    createJWT,
    createRefreshJWT,
    createCookie,
    hashPassword
} from "../helper/jwtCreate.js";

import manage_Employee from "../models/employee.model.js";

import {
    employeeLoginSchema,
    employeeRegisterSchema
} from "../validations/employee.validation.js";


// EMPLOYEE LOGIN


const loginEmployee = async (req, res) => {
    try {

        // 1. Validate input
        const validationResult = employeeLoginSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                errors: validationResult.error.issues.map(
                    (err) => err.message
                )
            });
        }

        const { email, password } = validationResult.data;

        const normalizedEmail = email.trim().toLowerCase();

        // 2. Find employee through stored procedure
        let employee = await manage_Employee.loginEmployee(
            normalizedEmail
        );

        // 3. Bootstrap SuperAdmin if not registered
        if (
            !employee &&
            normalizedEmail === process.env.SUPERUSER_EMAIL?.trim().toLowerCase()
        ) {

            const superuserPassword = process.env.SUPERUSER_PASSWORD;

            // Verify credentials from .env before creating account
            if (!superuserPassword || password !== superuserPassword) {
                return res.status(401).json({
                    success: false,
                    message: "Invalid email or password"
                });
            }

            if (
                !process.env.SUPERUSER_EMPLOYEE_CODE ||
                !process.env.SUPERUSER_ROLE_ID
            ) {
                throw new Error("SuperAdmin environment configuration missing");
            }

            const hashedPassword = await hashPassword(superuserPassword);

            try {

                // Create SuperAdmin in database
                await manage_Employee.createEmployee({
                    employee_code: process.env.SUPERUSER_EMPLOYEE_CODE,
                    full_name: "Super Administrator",
                    email: normalizedEmail,
                    password_hash: hashedPassword,
                    role_id: Number(process.env.SUPERUSER_ROLE_ID),
                    gender: null,
                    employment_status: "active"
                });

            } catch (error) {

                // Handle simultaneous first-login requests
                if (error.code !== "23505") {
                    throw error;
                }
            }

            // Fetch newly created SuperAdmin
            employee = await manage_Employee.loginEmployee(
                normalizedEmail
            );
        }

        // 4. Check employee existence
        if (!employee) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // 5. Check account status
        if (employee.employment_status !== "active") {
            return res.status(403).json({
                success: false,
                message: "Your account is not active"
            });
        }

        // 6. Compare password with database hash
        const passwordMatch = await bcrypt.compare(
            password,
            employee.password_hash
        );

        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        // 7. Generate JWT tokens
        const accessToken = await createJWT(
            employee.id,
            employee.role_id
        );

        const refreshToken = await createRefreshJWT(
            employee.id,
            employee.role_id
        );

        // 8. Set refresh token cookie
        createCookie(res, refreshToken);

        // 9. Send response
        return res.status(200).json({
            success: true,
            message: "Login successful",
            access_token: accessToken,
            employee: {
                id: employee.id,
                employee_code: employee.employee_code,
                full_name: employee.full_name,
                email: employee.email,
                role_id: employee.role_id
            }
        });

    } catch (error) {

        console.error("Employee login error:", error);

        if (error.code === "23503") {
            return res.status(500).json({
                success: false,
                message: "SuperAdmin role configuration is invalid"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error during login"
        });
    }
};


const logoutEmployee = (req, res) => {
    jwt.destroy(req.cookies.refreshToken);

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
    });

    return res.status(200).json({
        success: true,
        message: "Logout successful"
    });
};

const registerEmployee = async (req, res) => {
    try {

        // 1. Validate input
        const validationResult = employeeRegisterSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                errors: validationResult.error.issues.map(
                    (err) => err.message
                )
            });
        }

        const {
            employee_code,
            full_name,
            email,
            password,
            password_confirmation,
            role_id,
            gender,
            employment_status
        } = validationResult.data;

        // 2. Check password confirmation
        if (password !== password_confirmation) {
            return res.status(400).json({
                success: false,
                message: "Password confirmation does not match"
            });
        }

        // 3. Hash password
        const hashedPassword = await hashPassword(password);

        // 4. Prepare employee data
        const employeeData = {
            employee_code,
            full_name,
            email: email.trim().toLowerCase(),
            password_hash: hashedPassword,
            role_id,
            gender,
            employment_status
        };

        // 5. Create employee through stored procedure
        const employee = await manage_Employee.createEmployee(
            employeeData
        );

        return res.status(201).json({
            success: true,
            message: "Employee registered successfully",
            employee
        });

    } catch (error) {

        console.error("Employee registration error:", error);

        if (error.code === "23505") {
            return res.status(409).json({
                success: false,
                message: "Email or employee code already exists"
            });
        }

        if (error.code === "23503") {
            return res.status(400).json({
                success: false,
                message: "Invalid role ID"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Internal server error during registration"
        });
    }
};

const getAllEmployees = async (req, res) => {
    try {
        const employees = await manage_Employee.getAllEmployees();
        return res.status(200).json({
            success: true,
            message: "Employees fetched successfully",
            employees
        });
    } catch (error) {
        console.error("Error fetching employees:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const getEmployeeById = async (req, res) => {
    try {
        const { employee_id } = req.params;
        const employee = await manage_Employee.getEmployeeById(employee_id);
        return res.status(200).json({
            success: true,
            message: "Employee fetched successfully",
            employee
        });
    } catch (error) {
        console.error("Error fetching employee:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const updateEmployee = async (req, res) => {
    try {
        const { employee_id } = req.params;
        const validationResult = updateEmployeeSchema.safeParse(req.body);

        if (!validationResult.success) {
            return res.status(400).json({
                success: false,
                errors: validationResult.error.issues.map(
                    (err) => err.message
                )
            });
        }

        const {
            full_name, password, role_id, gender, employment_status } = validationResult.data;

        const employee = await manage_Employee.updateEmployee(employee_id, {
            full_name,
            password,
            role_id,
            gender,
            employment_status
        });
        return res.status(200).json({
            success: true,
            message: "Employee updated successfully",
            employee
        });
    } catch (error) {
        console.error("Error updating employee:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const { employee_id } = req.params;
        const employee = await manage_Employee.deleteEmployee(employee_id);
        return res.status(200).json({
            success: true,
            message: "Employee deleted successfully",
            employee
        });
    } catch (error) {
        console.error("Error deleting employee:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
}

export {
    loginEmployee,
    logoutEmployee,
    registerEmployee,
    getAllEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee
};

 




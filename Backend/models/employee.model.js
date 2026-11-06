
import db from "../config/db.js";

const manage_Employee = {

    // CREATE EMPLOYEE
    createEmployee: async (data) => {
        const {
            employee_code,
            full_name,
            email,
            password_hash,
            role_id,
            gender,
            employment_status
        } = data;

        const query = `
            CALL manage_employees(
                $1, $2, $3, $4, $5,
                $6, $7, $8, $9, $10
            );
        `;

        const values = [
            "CREATE",
            null,
            employee_code,
            full_name,
            email,
            password_hash,
            role_id,
            gender,
            employment_status || "active",
            null
        ];

        const result = await db.query(query, values);

        return result.rows[0]?.p_result;
    },


    // LOGIN EMPLOYEE
    loginEmployee: async (email) => {

        const query = `
            CALL manage_employees(
                $1, $2, $3, $4, $5,
                $6, $7, $8, $9, $10
            );
        `;

        const values = [
            "LOGIN",
            null,
            null,
            null,
            email,
            null,
            null,
            null,
            null,
            null
        ];

        const result = await db.query(query, values);

        return result.rows[0]?.p_result ?? null;
    },


    // GET ALL EMPLOYEES
    getAllEmployees: async () => {

        const query = `
            CALL manage_employees(
                'READ',
                NULL, NULL, NULL, NULL,
                NULL, NULL, NULL, NULL, NULL
            );
        `;

        const result = await db.query(query);

        return result.rows[0]?.p_result ?? [];
    },


    // GET EMPLOYEE BY ID
    getEmployeeById: async (id) => {

        const query = `
            CALL manage_employees(
                'READ',
                $1,
                NULL, NULL, NULL, NULL,
                NULL, NULL, NULL, NULL
            );
        `;

        const result = await db.query(query, [id]);

        return result.rows[0]?.p_result ?? [];
    },


    // UPDATE EMPLOYEE
    updateEmployee: async (id, data) => {

        const {
            full_name,
            email,
            password_hash,
            role_id,
            gender,
            employment_status
        } = data;

        const query = `
            CALL manage_employees(
                'UPDATE',
                $1,
                NULL,
                $2, $3, $4, $5,
                $6, $7,
                NULL
            );
        `;

        const values = [
            id,
            full_name ?? null,
            email ?? null,
            password_hash ?? null,
            role_id ?? null,
            gender ?? null,
            employment_status ?? null
        ];

        const result = await db.query(query, values);

        return result.rows[0]?.p_result;
    },


    // DELETE EMPLOYEE
    deleteEmployee: async (id) => {

        const query = `
            CALL manage_employees(
                'DELETE',
                $1,
                NULL, NULL, NULL, NULL,
                NULL, NULL, NULL,
                NULL
            );
        `;

        const result = await db.query(query, [id]);

        return result.rows[0]?.p_result;
    }

};

export default manage_Employee;

import dotenv from "dotenv";
import pg from "pg";
dotenv.config();

const DB_string = process.env.DB_string;

export const pool = new pg.Pool({ connectionString: DB_string });

const connectDB = async () => {
    try {
        const client = await pool.connect();
        await client.query("SELECT 1");
        client.release();
        console.log("PostgreSQL connected");
    } catch (e) {
        console.error("DB connection failed:", e.message);
        process.exit(1);
    }
};

// calls a DB procedure/function: SELECT * FROM fn($1, $2, ...)
// pass only function names written in your own code, never user input
export const callFn = async (fnName, params = []) => {
    const placeholders = params.map((_, i) => `$${i + 1}`).join(", ");
    const { rows } = await pool.query(
        `SELECT * FROM ${fnName}(${placeholders})`,
        params
    );
    return rows;
};

export default connectDB;
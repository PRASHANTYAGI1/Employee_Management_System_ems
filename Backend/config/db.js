
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const { Pool } = pg;

const pool = new Pool({
    connectionString: process.env.DB_STRING,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000,
});


pool.on("connect", () => {
    console.log("PostgreSQL connected successfully");
});

pool.on("error", (err) => {
    console.error("Unexpected PostgreSQL pool error:", err);
});

export default pool;

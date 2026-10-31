import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import platformRoutes from "./routes/platformRoutes.js";

const app = express();


// middleware
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());
app.use(cookieParser());


app.get("/", (req, res) => res.json({ message: "Hello World from EMS Backend build by Prashant Tyagi (personal)" }));


// routes
app.use("/api/auth", authRoutes);
app.use("/api/platform", platformRoutes);


// error handler (keep this last)
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ message: err.message || "Server error" });
});



// db connection and server listening
await connectDB();
app.listen(process.env.PORT, () => console.log(`Server on ${process.env.PORT}`));
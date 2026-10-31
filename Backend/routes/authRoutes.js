import { Router } from "express";
import { login, refresh, logout, me } from "../controller/authController.js";
import { validate } from "../middlewares/validate.js";
import { authenticate } from "../middlewares/auth.js";
import { loginSchema } from "../validation/authValidator.js";

const router = Router();

router.post("/login", validate(loginSchema), login);
router.post("/refresh", refresh);
router.post("/logout", logout);
router.get("/me", authenticate, me);

export default router;
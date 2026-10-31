import { Router } from "express";
import {
    platformLogin, platformLogout, platformMe, createOrganization,
} from "../controller/platformController.js";
import { validate } from "../middlewares/validate.js";
import { authenticatePlatform } from "../middlewares/platformAuth.js";
import { loginSchema } from "../validation/authValidator.js";
import { createOrganizationSchema } from "../validation/platformValidator.js";

const router = Router();

router.post("/login", validate(loginSchema), platformLogin);
router.post("/logout", platformLogout);
router.get("/me", authenticatePlatform, platformMe);

router.post(
    "/organizations",
    authenticatePlatform,
    validate(createOrganizationSchema),
    createOrganization
);

export default router;
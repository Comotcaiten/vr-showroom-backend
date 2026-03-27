import express from "express";
import { successResponse } from "../utils/response.js";
import HttpStatus from "../constants/httpStatus.js";

import categoryRoutes from "./categoryRoutes.js";
import brandRoutes from "./brandRoutes.js"
import furnitureRoutes from "./furnitureRoutes.js";
import usersRoutes from "./userRoutes.js";
import model3dRoutes from "./model3dRoutes.js"


const router = express.Router();

router.use("/categories", categoryRoutes);
router.use("/brands", brandRoutes);
router.use("/users", usersRoutes);
router.use("/furnitures", furnitureRoutes);
router.use("/models", model3dRoutes);

router.get("/", (req, res) => {
  successResponse(res,undefined, "API running", HttpStatus.Ok);
});

export default router;
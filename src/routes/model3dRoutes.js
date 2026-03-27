import express from "express";
import Model3DController from "../controllers/model3dController.js";
import { createUploadMiddleware } from "../middlewares/uploadMiddlewareHandler.js";
import { uploadConfigs } from "../configs/uploadConfig.js";

const router = express.Router();

const uploadModel = createUploadMiddleware(uploadConfigs.model3d);

router.get("/", Model3DController.getAll);

router.get("/:id", Model3DController.getById);

router.post(
  "/",
  uploadModel.single("file"),
  Model3DController.create
);

// SOFT DELETE
router.delete("/:id", Model3DController.delete);

// // HARD DELETE
router.delete(
  "/destroy/:id",
  Model3DController.destroy
);

export default router;
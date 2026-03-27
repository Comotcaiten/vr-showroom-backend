import express from "express";
import FurnitureController from "../controllers/furnitureController.js";
import FurnitureValidation from "../validations/furnitureValidation.js";

import validate from "../middlewares/validateHandler.js";
import validateParams from "../middlewares/validateParamsHandler.js";

const router = express.Router();

router.get("/", FurnitureController.getAllFurniture);

router.get("/:id", 
    validateParams(FurnitureValidation.id), 
    FurnitureController.getFurnitureById
);

router.post("/", 
    validate(FurnitureValidation.create), 
    FurnitureController.createFurniture
);

router.put("/:id",
    validateParams(FurnitureValidation.id),
    validate(FurnitureValidation.update), 
    FurnitureController.updateFurniture

);

// SOFT DELETE
router.delete(
  "/:id",
  validateParams(FurnitureValidation.id),
  FurnitureController.deleteFurniture
);

// HARD DELETE
router.delete(
  "/destroy/:id",
  validateParams(FurnitureValidation.id),
  FurnitureController.destroyFurniture
);

export default router;
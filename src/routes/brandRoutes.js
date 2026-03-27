import express from "express";
import BrandController from "../controllers/BrandController.js";
import BrandValidation from "../validations/BrandValidation.js";

import validate from "../middlewares/validateHandler.js";
import validateParams from "../middlewares/validateParamsHandler.js"


const router = express.Router();

router.get("/", BrandController.getAllBrand);

router.get("/:id", 
    validateParams(BrandValidation.id), 
    BrandController.getBrandById
);

router.post("/", 
    validate(BrandValidation.create), 
    BrandController.createBrand
);

router.put("/:id",
    validateParams(BrandValidation.id),
    validate(BrandValidation.update), 
    BrandController.updateBrand

);

// SOFT DELETE
router.delete(
  "/:id",
  validateParams(BrandValidation.id),
  BrandController.deleteBrand
);

// HARD DELETE
router.delete(
  "/destroy/:id",
  validateParams(BrandValidation.id),
  BrandController.destroyBrand
);

export default router;
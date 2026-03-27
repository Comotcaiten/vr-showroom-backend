import express from "express";
import CategoryController from "../controllers/categoryController.js";
import CategoryValidation from "../validations/categoryValidation.js";

import validate from "../middlewares/validateHandler.js";
import validateParams from "../middlewares/validateParamsHandler.js"

import { verifyAccessToken } from "../middlewares/authorization.js";


const router = express.Router();

// router.use(verifyAccessToken);

router.get("/", CategoryController.getAllCategory);

router.get("/:id", 
    validateParams(CategoryValidation.id), 
    CategoryController.getCategoryById
);

router.post("/", 
    validate(CategoryValidation.create), 
    CategoryController.createCategory
);

router.put("/:id",
    validateParams(CategoryValidation.id),
    validate(CategoryValidation.update), 
    CategoryController.updateCategory

);

// SOFT DELETE
router.delete(
  "/:id",
  validateParams(CategoryValidation.id),
  CategoryController.deleteCategory
);

// HARD DELETE
router.delete(
  "/destroy/:id",
  validateParams(CategoryValidation.id),
  CategoryController.destroyCategory
);

export default router;
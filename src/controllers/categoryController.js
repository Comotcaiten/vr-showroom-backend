import HttpStatus from "../constants/httpStatus.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import CategoryService from "../services/categoryService.js";
import AppError from "../utils/AppError.js";
import { successResponse } from "../utils/response.js";

class CategoryController {

  getAllCategory = asyncHandler(async (req, res) => {
    const categories = await CategoryService.getAll();

    successResponse(
      res,
      categories,
      "Get categories success",
      HttpStatus.Ok
    );
  });

  getCategoryById = asyncHandler(async (req, res) => {
    const category = await CategoryService.getById(req.params.id);

    console.log(`category get by id: ${category}`);

    if (!category) {
      throw new AppError("Category not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      category,
      "Get category by id success",
      HttpStatus.Ok
    );
  });

  createCategory = asyncHandler(async (req, res) => {
    const newCategory = await CategoryService.create(req.body);

    successResponse(
      res,
      newCategory,
      "Category created successfully",
      HttpStatus.Created
    );
  });

  updateCategory = asyncHandler(async (req, res) => {
    const updatedCategory = await CategoryService.update(
      req.params.id,
      req.body
    );

    if (!updatedCategory) {
      throw new AppError("Category not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      updatedCategory,
      "Category updated successfully",
      HttpStatus.Ok
    );
  });

  deleteCategory = asyncHandler(async (req, res) => {
    const deletedCategory = await CategoryService.delete(req.params.id);

    if (!deletedCategory) {
      throw new AppError("Category not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      null,
      "Category deleted successfully",
      HttpStatus.Ok
    );
  });

  destroyCategory = asyncHandler(async (req, res) => {
    const deletedCategory = await CategoryService.destroy(req.params.id);

    if (!deletedCategory) {
      throw new AppError("Category not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      null,
      "Category permanently deleted",
      HttpStatus.Ok
    );
  });

}

export default new CategoryController();
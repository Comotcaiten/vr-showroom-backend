import FurnitureService from "../services/furnitureService.js";

import HttpStatus from "../constants/httpStatus.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import AppError from "../utils/AppError.js";
import { successResponse } from "../utils/response.js";

class FurnitureController {
  getAllFurniture = asyncHandler(async (req, res) => {
    const furnitures = await FurnitureService.getAll();

    successResponse(res, furnitures, "Get Furniture success", HttpStatus.Ok);
  });

  getFurnitureById = asyncHandler(async (req, res) => {
    const Furniture = await FurnitureService.getById(req.params.id);

    console.log(`Furniture get by id: ${Furniture}`);

    if (!Furniture) {
      throw new AppError("Furniture not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      Furniture,
      "Get Furniture by id success",
      HttpStatus.Ok,
    );
  });

  createFurniture = asyncHandler(async (req, res) => {
    const newFurniture = await FurnitureService.create(req.body);

    successResponse(
      res,
      newFurniture,
      "Furniture created successfully",
      HttpStatus.Created,
    );
  });

  updateFurniture = asyncHandler(async (req, res) => {
    const updatedFurniture = await FurnitureService.update(
      req.params.id,
      req.body,
    );

    if (!updatedFurniture) {
      throw new AppError("Furniture not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      updatedFurniture,
      "Furniture updated successfully",
      HttpStatus.Ok,
    );
  });

  deleteFurniture = asyncHandler(async (req, res) => {
    const deletedFurniture = await FurnitureService.delete(req.params.id);

    if (!deletedFurniture) {
      throw new AppError("Furniture not found", HttpStatus.NotFound);
    }

    successResponse(res, null, "Furniture deleted successfully", HttpStatus.Ok);
  });

  destroyFurniture = asyncHandler(async (req, res) => {
    const deletedFurniture = await FurnitureService.destroy(req.params.id);

    if (!deletedFurniture) {
      throw new AppError("Furniture not found", HttpStatus.NotFound);
    }

    successResponse(res, null, "Furniture permanently deleted", HttpStatus.Ok);
  });
}

export default new FurnitureController();

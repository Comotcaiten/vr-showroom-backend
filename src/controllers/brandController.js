import BrandService from "../services/brandService.js";

import HttpStatus from "../constants/httpStatus.js";
import asyncHandler from "../middlewares/asyncHandler.js";
import AppError from "../utils/AppError.js";
import { successResponse } from "../utils/response.js";


class BrandsController {

  getAllBrand = asyncHandler(async (req, res) => {
    const brands = await BrandService.getAll();

    successResponse(
      res,
      brands,
      "Get Brands success",
      HttpStatus.Ok
    );
  });

  getBrandById = asyncHandler(async (req, res) => {
    const brand = await BrandService.getById(req.params.id);

    console.log(`Brand get by id: ${Brand}`);

    if (!brand) {
      throw new AppError("Brand not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      Brand,
      "Get Brand by id success",
      HttpStatus.Ok
    );
  });

  createBrand = asyncHandler(async (req, res) => {
    const newBrand = await BrandService.create(req.body);

    successResponse(
      res,
      newBrand,
      "Brand created successfully",
      HttpStatus.Created
    );
  });

  updateBrand = asyncHandler(async (req, res) => {
    const updatedBrand = await BrandService.update(
      req.params.id,
      req.body
    );

    if (!updatedBrand) {
      throw new AppError("Brand not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      updatedBrand,
      "Brand updated successfully",
      HttpStatus.Ok
    );
  });

  deleteBrand = asyncHandler(async (req, res) => {
    const deletedBrand = await BrandService.delete(req.params.id);

    if (!deletedBrand) {
      throw new AppError("Brand not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      null,
      "Brand deleted successfully",
      HttpStatus.Ok
    );
  });

  destroyBrand = asyncHandler(async (req, res) => {
    const deletedBrand = await BrandService.destroy(req.params.id);

    if (!deletedBrand) {
      throw new AppError("Brand not found", HttpStatus.NotFound);
    }

    successResponse(
      res,
      null,
      "Brand permanently deleted",
      HttpStatus.Ok
    );
  });

}

export default new BrandsController();
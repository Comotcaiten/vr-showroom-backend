import Model3DService from "../services/model3dService.js";
import UploadService from "../services/uploadService.js";

import asyncHandler from "../middlewares/asyncHandler.js";
import { successResponse } from "../utils/response.js";
import HttpStatus from "../constants/httpStatus.js";
import AppError from "../utils/AppError.js";

class Model3DController {

  getAll = asyncHandler(async (req, res) => {
    const models = await Model3DService.getAll();
    successResponse(res, models, "Get models success", HttpStatus.Ok);
  });

  getById = asyncHandler(async (req, res) => {
    const model = await Model3DService.getById(req.params.id);

    if (!model) {
      throw new AppError("Model not found", HttpStatus.NotFound);
    }

    successResponse(res, model, "Get model success", HttpStatus.Ok);
  });

  create = asyncHandler(async (req, res) => {

    if (!req.file) {
      throw new AppError("File is required", HttpStatus.BadRequest);
    }

    // upload file
    const fileUrl = await UploadService.uploadModel(req.file);

    // save DB
    const model = await Model3DService.create({
      fileUrl,
      fileFormat: req.file.mimetype,
      fileSize: req.file.size
    });

    successResponse(res, model, "Model created", HttpStatus.Created);
  });

  delete = asyncHandler(async (req, res) => {

    const model = await Model3DService.getById(req.params.id);

    if (!model) {
      throw new AppError("Model not found", HttpStatus.NotFound);
    }
    await Model3DService.delete(req.params.id);

    successResponse(res, null, "Model deleted", HttpStatus.Ok);
  });

  destroy = asyncHandler(async (req, res) => {

    const model = await Model3DService.getById(req.params.id);

    if (!model) {
      throw new AppError("Model not found", HttpStatus.NotFound);
    }

    // check đang dùng không (optional nhưng nên có)
    // TODO: check furniture

    // xóa file
    await UploadService.deleteFile(model.fileUrl);

    // xóa DB
    await Model3DService.destroy(req.params.id);

    successResponse(res, null, "Model deleted", HttpStatus.Ok);
  });

}

export default new Model3DController();
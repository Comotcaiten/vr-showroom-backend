import HttpStatus from "../constants/httpStatus.js";
import { errorResponse } from "../utils/response.js";

const errorHandler = (err, req, res, next) => {

  console.log("Error Handler:");
  console.error(err);

  const statusCode =
    err.statusCode ||
    (res.statusCode !== HttpStatus.Ok
      ? res.statusCode
      : HttpStatus.InternalServerError);

  const message = err?.details
    ? err.details.map((e) => e.message)
    : err.message || "Internal Server Error";

  errorResponse(res, message, statusCode);

};

export default errorHandler;
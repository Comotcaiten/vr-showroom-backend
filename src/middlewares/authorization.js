import jwt from "jsonwebtoken";
import AppError from "../utils/appError.js";
import HttpStatus from "../constants/httpStatus.js";

const verifyAccessToken = (req, res, next) => {

  const authHeader = req.headers.authorization;

  if (!authHeader) {
   throw new AppError("Access token missing - 1", HttpStatus.Unauthorized);
  }

  const token = authHeader.split(" ")[1];

  try {
    console.log(process.env.ACCESS_TOKEN_SECRET);
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    req.user = decoded;

    next();

  } catch (error) {

    throw new AppError("Access token missing - 2", HttpStatus.Unauthorized);

  }

};

export { verifyAccessToken };
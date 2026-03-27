import HttpStatus from "../constants/httpStatus.js"

const notFound = (req, res, next) => {
  const error = new Error(`Route not found: ${req.originalUrl}`);
  res.status(HttpStatus.NotFound);
  next(error);
};

export default notFound;
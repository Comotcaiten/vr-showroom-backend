export const successResponse = (res, data, message = "Success", status = 200) => {
  return res.status(status).json({
    status,
    success: true,
    message,
    data
  });
};

export const errorResponse = (res, message, status = 500) => {
  return res.status(status).json({
    status,
    success: false,
    message
  });
};
class AppError extends Error {

  constructor(message, statusCode) {
    console.log("Throw new app error");
    super(message);

    this.statusCode = statusCode;
    this.success = false;

    Error.captureStackTrace(this, this.constructor);
  }

}

export default AppError;
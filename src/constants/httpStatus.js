class HttpStatus {

  // Success
  static Ok = 200;
  static Created = 201;
  static NoContent = 204;

  // Client errors
  static BadRequest = 400;
  static Unauthorized = 401;
  static Forbidden = 403;
  static NotFound = 404;
  static Conflict = 409;

  // Server errors
  static InternalServerError = 500;
  static NotImplemented = 501;
  static BadGateway = 502;
  static ServiceUnavailable = 503;

}

export default HttpStatus;
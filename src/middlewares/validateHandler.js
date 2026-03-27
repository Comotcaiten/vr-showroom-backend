const validate = (schema) => {

  return async (req, res, next) => {

    try {

      const value = await schema.validateAsync(req.body, {
        abortEarly: false,
        convert: false
      });

      req.body = value;

      next();

    } catch (err) {
      next(err);

    }

  };

};

export default validate;
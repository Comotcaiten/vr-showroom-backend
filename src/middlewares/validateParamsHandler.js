const validateParams = (schema) => {

  return async (req, res, next) => {

    try {

      const value = await schema.validateAsync(req.params, {
        abortEarly: false
      });

      req.params = value;

      next();

    } catch (err) {

      next(err);

    }

  };

};

export default validateParams;
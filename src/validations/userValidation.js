import Joi from "joi";

class UsersValidation {

  base = Joi.object({

    name: Joi.string()
      .trim()
      .min(2)
      .max(100),

    username: Joi.string()
      .trim()
      .min(3)
      .max(30)
      .pattern(/^[a-zA-Z0-9_]+$/),

    email: Joi.string()
      .trim()
      .email()
      .max(255),

    password: Joi.string()
      .min(6)
      .max(100),

    role: Joi.string()
      .valid("user", "admin"),

    _delete: Joi.boolean()
  });

  // CREATE USER
  create = this.base.fork(
    ["name", "username", "email", "password"],
    (field) => field.required()
  );

  // UPDATE USER
  update = this.base;

  // LOGIN VALIDATION
  login = Joi.object({
    username: Joi.string().trim().required(),
    password: Joi.string().required()
  });

  // PARAM ID
  id = Joi.object({
    id: Joi.string().required()
  });

}

export default new UsersValidation();
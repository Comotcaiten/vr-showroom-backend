import Joi from "joi";

class BrandValidation {

  base = Joi.object({
    name: Joi.string().trim().min(2).max(50),
    description: Joi.string().trim().max(500).allow(""),
    logoUrl: Joi.string().trim().max(255).allow("")
  });

  create = this.base.fork(["name"], (field) => field.required());

  update = this.base;

  id = Joi.object({
    id: Joi.string().required()
  });
}

export default new BrandValidation();
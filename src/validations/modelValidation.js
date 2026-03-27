import Joi from "joi";

class ModelValidation {

  base = Joi.object({
    fileUrl: Joi.string().required(),
    format: Joi.string().required(),
    fileSize: Joi.number().min(0)
  });

  create = this.base;

  update = this.base;

  id = Joi.object({
    id: Joi.string().required()
  });
}

export default new ModelValidation();
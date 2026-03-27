import Joi from "joi";

  class CategoryValidation {

  base = Joi.object({
    name: Joi.string().trim().min(3).max(50),
    description: Joi.string().trim().max(500).allow(""),
    categoryUrl: Joi.string().trim().max(255).allow("")
  });

  // CREATE -> bắt buộc ở name
  create = this.base.fork(["name"], (field) => field.required());
    
  // UPDATE -> tất cả optional
  update = this.base;

  // PARAMS ID
  id = Joi.object({
    id: Joi.string().required(),
  });
}

export default new CategoryValidation();

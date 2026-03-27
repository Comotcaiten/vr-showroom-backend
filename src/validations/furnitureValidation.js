import Joi from "joi";

class FurnitureValidation {

  base = Joi.object({

    name: Joi.string().trim().min(3).max(100),

    description: Joi.string().trim().max(1000).allow(""),

    categoryId: Joi.string(),

    brandId: Joi.string(),

    price: Joi.number().min(0),

    quantity: Joi.number().min(0),

    dimensions: Joi.object({
      width: Joi.number().min(0),
      height: Joi.number().min(0),
      depth: Joi.number().min(0)
    }),

    modelId: Joi.string().allow(""),

    thumbnailUrl: Joi.string().trim().max(255).allow("")
  });

  create = this.base.fork(
    ["name", "categoryId", "brandId", "price"],
    (field) => field.required()
  );

  update = this.base;

  id = Joi.object({
    id: Joi.string().required()
  });

}

export default new FurnitureValidation();
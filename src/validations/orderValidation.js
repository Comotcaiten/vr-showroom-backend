import Joi from "joi";

class OrderValidation {

  base = Joi.object({

    userId: Joi.string(),

    items: Joi.array().items(
      Joi.object({
        furnitureId: Joi.string().required(),
        quantity: Joi.number().min(1).required(),
        price: Joi.number().min(0).required()
      })
    ),

    totalPrice: Joi.number().min(0)
  });

  create = this.base.fork(
    ["userId", "items", "totalPrice"],
    (field) => field.required()
  );

  update = this.base;

  id = Joi.object({
    id: Joi.string().required()
  });
}

export default new OrderValidation();
import mongoose from "mongoose";

const OrdersSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },

    items: [
      {
        furnitureId: {
          type: String,
          required: true
        },

        quantity: {
          type: Number,
          required: true,
          min: 1
        },

        price: {
          type: Number,
          required: true,
          min: 0
        }
      }
    ],

    totalPrice: {
      type: Number,
      required: true,
      min: 0
    },

    _delete: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const OrdersModel = mongoose.model("Orders", OrdersSchema);

export default OrdersModel;
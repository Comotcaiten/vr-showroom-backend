import mongoose from "mongoose";

const BrandsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true,
      default: ""
    },

    logoUrl: {
      type: String,
      trim: true,
      default: ""
    },

    _delete: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const BrandsModel = mongoose.model("Brands", BrandsSchema);

export default BrandsModel;
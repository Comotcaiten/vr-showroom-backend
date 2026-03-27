import mongoose from "mongoose";

const FurnituresSchema = new mongoose.Schema(
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

    categoryId: {
      type: String,
      required: true
    },

    brandId: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    quantity: {
      type: Number,
      default: 0,
      min: 0
    },

    // dimensions: {
    //   width: Number,
    //   height: Number,
    //   depth: Number
    // },

    modelId: {
      type: String
    },

    thumbnailUrl: {
      type: String,
      trim: true
    },

    _delete: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const FurnituresModel = mongoose.model("Furnitures", FurnituresSchema);

export default FurnituresModel;
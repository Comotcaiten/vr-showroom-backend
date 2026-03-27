import mongoose from "mongoose";

const CategoriesSchema = new mongoose.Schema(
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

    categoryUrl: {
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

const CategoriesModel = mongoose.model("Categories", CategoriesSchema);

export default CategoriesModel;
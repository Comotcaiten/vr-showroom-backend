import mongoose from "mongoose";

const ModelsSchema = new mongoose.Schema(
  {
    fileUrl: {
      type: String,
      required: true
    },

    fileFormat: {
      type: String,
      enum: ["model/gltf-binary", "model/glb-binary", ""],
      default: "",
      required: true
    },

    fileSize: {
      type: Number,
      min: 0
    },

    _delete: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const ModelsModel = mongoose.model("Models", ModelsSchema);

export default ModelsModel;
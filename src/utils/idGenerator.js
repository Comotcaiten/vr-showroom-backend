import mongoose from "mongoose";

const generateObjectId = () => {
  return new mongoose.Types.ObjectId().toString();
};

export default generateObjectId;
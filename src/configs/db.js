
import mongoose from "mongoose";

import { ENV } from "./env.js";

const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_DB);

    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database error:", error);
    process.exit(1);
  }
};

export default connectDB;
import dotenv from "dotenv";

dotenv.config();

export const ENV = {
  PORT: process.env.PORT,
  JWT_SECRET: process.env.ACCESS_TOKEN_SECRET,
  MONGO_DB: process.env.MONGO_URI,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY
};
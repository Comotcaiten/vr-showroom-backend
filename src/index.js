import { ENV } from "./configs/env.js";

import connectDB from "./configs/db.js";
connectDB();

console.log("ACCESS_TOKEN_SECRET:", ENV.JWT_SECRET);
console.log("SUPABASE_URL:", ENV.SUPABASE_URL);
console.log("SUPABASE_SERVICE_KEY:", ENV.SUPABASE_SERVICE_KEY);

import app from "./app.js";

const PORT = ENV.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on localhost:${PORT}`);
});
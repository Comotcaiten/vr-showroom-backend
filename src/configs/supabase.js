import { ENV } from "./env.js";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = ENV.SUPABASE_URL;
const supabaseKey = ENV.SUPABASE_SERVICE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://mgxcpsxsckbucockawpy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1neGNwc3hzY2tidWNvY2thd3B5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ2NzQwMDcsImV4cCI6MjA0MDI1MDAwN30.88TKy6isWIFFQsBpIxElBZ0glvPht5A41zBU2H6ioUI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

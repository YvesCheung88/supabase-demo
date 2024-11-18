import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://bhcfibneycgapyizmwhk.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJoY2ZpYm5leWNnYXB5aXptd2hrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1NzUxMDMsImV4cCI6MjA0NzE1MTEwM30.Ybrtsrh1d8Qp1jdFlCUWVBaHTqGgs5GMfrD9_6c0e9k";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

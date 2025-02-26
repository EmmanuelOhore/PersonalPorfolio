import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://nwusjxvedgiwjlaootux.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53dXNqeHZlZGdpd2psYW9vdHV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAxODU3NzcsImV4cCI6MjA1NTc2MTc3N30.oLEY6DFJzXM5EOsOuoN6pihuwqSJrjXfV1o1KaxGCSM";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

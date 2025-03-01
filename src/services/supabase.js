import { createClient } from "@supabase/supabase-js";
const SUPABASE_URL = "https://cictebuhfvietxhhkwxn.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpY3RlYnVoZnZpZXR4aGhrd3huIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA2MDY0OTgsImV4cCI6MjA1NjE4MjQ5OH0.ZFuk2N3zYqTkR7nLg36zUA9hCoNWc5YJt0sMqEqE6jM";
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

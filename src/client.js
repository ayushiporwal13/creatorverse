import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const URL = 'https://hsmjxdxmixpmpkskobwd.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhzbWp4ZHhtaXhwbXBrc2tvYndkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjM3NjMwOTMsImV4cCI6MjAzOTMzOTA5M30.YWgnUZcqE362xo_halsnr1AjJTgZu9hsmCVkYmZHdVM';
export const supabase = createClient(URL, API_KEY);

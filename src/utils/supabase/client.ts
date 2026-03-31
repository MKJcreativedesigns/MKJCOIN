import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || "https://oqpaxjzehttebjonrinm.supabase.co",
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9xcGF4anplaHR0ZWJqb25yaW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ5MTQyNzgsImV4cCI6MjA5MDQ5MDI3OH0.MkqnI51fzPgRCczC-3huad_OMrEnzpEfiO3ZJSYtEEA"
  )
}

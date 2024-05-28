import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vxitllncvfyiozcpfzgs.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ4aXRsbG5jdmZ5aW96Y3BmemdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzODQzMjYsImV4cCI6MjAzMTk2MDMyNn0.a088hUhrFv8bLkro2PLpkkpscCnsRDKu7nKXu5r2BRo'

export const supabase = createClient(supabaseUrl, supabaseKey)

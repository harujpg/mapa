import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vhrbapnoppdwrhxajfpg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZocmJhcG5vcHBkd3JoeGFqZnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyNzQwMTIsImV4cCI6MjA3Nzg1MDAxMn0.BG4b4lNnkCjD3D93rXEplMTvPsbb_iCBW9Wh_NhZ_Sw'

export const supabase = createClient(supabaseUrl, supabaseKey)

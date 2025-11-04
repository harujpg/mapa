import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lyoakfcebclmglqohmku.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5b2FrZmNlYmNsbWdscW9obWt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2NzQ5NTUsImV4cCI6MjA3NzI1MDk1NX0.mY6nuimRcXm8Aop7_Z4ZKX47qvqUqHKpVYenncOXO0o'

export const supabase = createClient(supabaseUrl, supabaseKey)
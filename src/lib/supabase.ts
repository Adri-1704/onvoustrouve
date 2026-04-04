import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Client unique utilisable cote serveur et cote client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

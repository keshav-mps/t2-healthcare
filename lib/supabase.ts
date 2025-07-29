import { createClient } from '@supabase/supabase-js'

let supabaseClient: any = null

try {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  console.log('Environment variables check:')
  console.log('NEXT_PUBLIC_SUPABASE_URL:', supabaseUrl ? 'Set' : 'Not set')
  console.log('NEXT_PUBLIC_SUPABASE_ANON_KEY:', supabaseKey ? 'Set' : 'Not set')

  if (supabaseUrl && supabaseKey) {
    supabaseClient = createClient(supabaseUrl, supabaseKey)
    console.log('✅ Supabase client initialized successfully')
  } else {
    console.warn('❌ Supabase environment variables are not set. Using fallback to local data.')
  }
} catch (error) {
  console.error('❌ Error initializing Supabase client:', error)
  console.warn('Using fallback to local data.')
}

export const supabase = supabaseClient 
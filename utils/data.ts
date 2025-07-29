import { supabase } from '../lib/supabase'
import localTemplateData from '../template-data.json'

export async function getTemplateData(clientId: string) {
  console.log(`Fetching template data for client ID: ${clientId}`)
  
  try {
    // If Supabase is not configured, use local data
    if (!supabase) {
      console.log('Supabase not configured, using local template')
      return { data: localTemplateData, fromSupabase: false }
    }

    console.log('Attempting to fetch from Supabase...')
    
    // Fetch file_url from Supabase based on client ID
    const { data, error } = await supabase
      .from('company_template_data')
      .select('file_url')
      .eq('id', clientId)
      .single()

    if (error) {
      console.log('Supabase error:', error.message)
      console.log('Using local template as fallback')
      return { data: localTemplateData, fromSupabase: false }
    }

    if (!data?.file_url) {
      console.log('No file_url found in Supabase data, using local template')
      return { data: localTemplateData, fromSupabase: false }
    }

    console.log('Found file_url in Supabase, fetching JSON...')

    // Fetch JSON data from the file_url
    const response = await fetch(data.file_url)
    
    if (!response.ok) {
      console.log(`Failed to fetch from file_url (${response.status}), using local template`)
      return { data: localTemplateData, fromSupabase: false }
    }

    const jsonData = await response.json()
    console.log('Successfully fetched JSON data from file_url')
    return { data: jsonData, fromSupabase: true }
  } catch (error) {
    console.error('Error fetching template data:', error)
    return { data: localTemplateData, fromSupabase: false }
  }
} 
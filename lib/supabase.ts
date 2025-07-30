import { createClient } from '@supabase/supabase-js';
import localTemplateData from '../data/template-data.json';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// Check if this is a published template (read-only mode)
const isPublish = process.env.IS_PUBLISH === 'true';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getCompanyTemplateById(id: string) {
  try {
    // If this is a published template, always use local data
    if (isPublish) {
      console.log('Published mode: Using local template data');
      return localTemplateData;
    }

    // Development/dashboard mode: fetch from Supabase
    console.log(`Fetching template for ID: ${id} from Supabase`);
    
    // Get the client_data JSON directly from company_template_data table
    const { data: templateRecord, error: templateError } = await supabase
      .from('company_template_data')
      .select('client_data')
      .eq('id', id)
      .single();

    if (templateError) {
      console.error(`Company ID "${id}" not found in database.`);
      console.error('Supabase error:', templateError);
      return null;
    }

    if (!templateRecord || !templateRecord.client_data) {
      console.error(`Company ID "${id}" found but no client data.`);
      return null;
    }

    return templateRecord.client_data;
  } catch (error) {
    console.error(`Error fetching company template for ID "${id}":`, error);
    return null;
  }
} 
import { createClient } from '@supabase/supabase-js';
import localTemplateData from '../template-data.json';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function getCompanyTemplateById(id: string) {
  try {
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
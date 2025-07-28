import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { templateData } = body

    if (!templateData) {
      return NextResponse.json(
        { error: 'Template data is required' },
        { status: 400 }
      )
    }

    // Insert template data into Supabase
    const { data, error } = await supabase
      .from('templates')
      .insert([{ json_data: templateData }])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save template' },
        { status: 500 }
      )
    }

    const templateId = data[0].id
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-project.vercel.app'
    const previewUrl = `${siteUrl}/preview?id=${templateId}`

    return NextResponse.json({
      success: true,
      templateId,
      previewUrl
    })

  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 
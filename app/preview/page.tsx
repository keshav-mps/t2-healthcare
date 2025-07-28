'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Team from '../../components/Team'
import Stats from '../../components/Stats'
import Testimonials from '../../components/Testimonials'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function PreviewPage() {
  const searchParams = useSearchParams()
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTemplate = async () => {
      const id = searchParams.get('id')
      
      if (!id) {
        setError('No template ID provided')
        setLoading(false)
        return
      }

      try {
        const { data, error } = await supabase
          .from('templates')
          .select('json_data')
          .eq('id', id)
          .single()

        if (error) {
          setError('Template not found')
          setLoading(false)
          return
        }

        setData(data.json_data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load template')
        setLoading(false)
      }
    }

    fetchTemplate()
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🏥</div>
          <div className="text-xl text-gray-600">Loading preview...</div>
        </div>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">❌</div>
          <div className="text-xl text-red-600 mb-2">Error</div>
          <div className="text-gray-600">{error || 'Template not found'}</div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      <Header company={data.company} />
      <Hero company={data.company} />
      <Services services={data.services} />
      <Stats stats={data.stats} />
      <Team team={data.team} />
      <Testimonials testimonials={data.testimonials} />
      <Contact contact={data.contact} social={data.social} />
      <Footer company={data.company} contact={data.contact} social={data.social} />
    </main>
  )
} 
'use client'

import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

// Fallback data (your original template-data.json)
import fallbackData from '../template-data.json'

export default function Home() {
  const searchParams = useSearchParams()
  const [data, setData] = useState<any>(fallbackData)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const templateUrl = searchParams.get('templateUrl')
    
    if (templateUrl) {
      setLoading(true)
      
      fetch(templateUrl)
        .then(res => {
          if (!res.ok) {
            throw new Error('Failed to fetch template')
          }
          return res.json()
        })
        .then(jsonData => {
          setData(jsonData)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching template:', error)
          setData(fallbackData) // Fallback to original data
          setLoading(false)
        })
    }
  }, [searchParams])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">🏥</div>
          <div className="text-xl text-gray-600">Loading template...</div>
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
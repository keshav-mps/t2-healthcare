import { redirect } from 'next/navigation'
import { getTemplateData } from '../../utils/data'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Services from '../../components/Services'
import Team from '../../components/Team'
import Stats from '../../components/Stats'
import Testimonials from '../../components/Testimonials'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

interface PreviewPageProps {
  params: {
    clientId: string
  }
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { clientId } = params

  if (!clientId) {
    redirect('/')
  }

  try {
    const result = await getTemplateData(clientId)
    
    // If data didn't come from Supabase, redirect to home
    if (!result.fromSupabase) {
      console.log('Template not found in Supabase, redirecting to home')
      redirect('/')
    }

    const data = result.data

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
  } catch (error) {
    console.error('Error loading template:', error)
    redirect('/')
  }
} 
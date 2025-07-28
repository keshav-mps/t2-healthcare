import data from '../template-data.json'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Team from '../components/Team'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
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
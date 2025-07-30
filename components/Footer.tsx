interface Company {
  name: string
  tagline: string
}

interface Contact {
  phone: string
  email: string
  address: string
}

interface Social {
  facebook: string
  twitter: string
  linkedin: string
  instagram: string
}

interface FooterProps {
  company: Company
  contact: Contact
  social: Social
}

export default function Footer({ company, contact, social }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="text-3xl mr-3">🏥</div>
              <div>
                <h3 className="text-xl font-bold">{company.name}</h3>
                <p className="text-gray-300">{company.tagline}</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading healthcare provider committed to delivering exceptional medical care with cutting-edge technology and compassionate service.
            </p>
            <div className="flex space-x-4">
              <a href={social.facebook} className="text-white hover:text-primary-400 transition-colors underline">Facebook</a>
              <a href={social.twitter} className="text-white hover:text-primary-400 transition-colors underline">Twitter</a>
              <a href={social.linkedin} className="text-white hover:text-primary-400 transition-colors underline">LinkedIn</a>
              <a href={social.instagram} className="text-white hover:text-primary-400 transition-colors underline">Instagram</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Book Appointment</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div>
                <div className="text-sm text-gray-300 mb-1">Phone</div>
                <div className="text-white">{contact.phone}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">Email</div>
                <div className="text-white">{contact.email}</div>
              </div>
              <div>
                <div className="text-sm text-gray-300 mb-1">Address</div>
                <div className="text-white text-sm">{contact.address}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {company.name}. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
} 
interface Company {
  name: string
  tagline: string
  description: string
}

interface HeroProps {
  company: Company
}

export default function Hero({ company }: HeroProps) {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-50 section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {company.tagline}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {company.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary text-lg px-8 py-4">
                Book Your Appointment
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Available 24/7
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Emergency Care
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Telemedicine
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-8 text-white">
              <div className="text-center space-y-4">
                <div className="text-6xl mb-4">🏥</div>
                <h3 className="text-2xl font-bold">Expert Medical Care</h3>
                <p className="text-primary-100">
                  Trust our experienced team of healthcare professionals for all your medical needs
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-primary-100">Medical Staff</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">25+</div>
                    <div className="text-sm text-primary-100">Locations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
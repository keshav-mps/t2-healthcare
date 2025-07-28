interface Service {
  id: number
  name: string
  description: string
  icon: string
}

interface ServicesProps {
  services: Service[]
}

export default function Services({ services }: ServicesProps) {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Healthcare Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive healthcare services to meet all your medical needs with the highest standards of care and professionalism.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.name}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
              <button className="mt-6 text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
} 
interface Stat {
  number: string
  label: string
}

interface StatsProps {
  stats: Stat[]
}

export default function Stats({ stats }: StatsProps) {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Trusted by thousands of patients across multiple locations with exceptional care and service.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-primary-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-white font-medium">24/7 Emergency Care Available</span>
          </div>
        </div>
      </div>
    </section>
  )
} 
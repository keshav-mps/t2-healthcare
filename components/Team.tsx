interface TeamMember {
  id: number
  name: string
  position: string
  specialty: string
  experience: string
  image: string
}

interface TeamProps {
  team: TeamMember[]
}

export default function Team({ team }: TeamProps) {
  return (
    <section id="team" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our experienced healthcare professionals are dedicated to providing you with the highest quality medical care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-6xl mb-4">{member.image}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium mb-1">
                {member.position}
              </p>
              <p className="text-gray-600 text-sm mb-3">
                {member.specialty}
              </p>
              <div className="inline-flex items-center px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                {member.experience}
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Our team of healthcare professionals is committed to your well-being
          </p>
          <button className="btn-secondary">
            Meet the Full Team
          </button>
        </div>
      </div>
    </section>
  )
} 
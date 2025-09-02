const Programs = () => {
  const programs = [
    {
      title: "Little Explorers (4-6)",
      age: "Ages 4-6",
      description: "Gentle breathing, fun stories, and interactive activities that help children understand emotions and develop self-awareness.",
      features: ["Story-Based Learning", "Gentle Breathing", "Emotional Recognition"],
      image: "👶",
      bgColor: "from-blue-100 to-cyan-100"
    },
    {
      title: "Brave Thinkers (7-10)",
      age: "Ages 7-10", 
      description: "Building confidence through mindful exercises that help children manage stress and develop problem-solving skills.",
      features: ["Confidence Building", "Stress Management", "Problem Solving"],
      image: "🧒",
      bgColor: "from-green-100 to-emerald-100"
    },
    {
      title: "Calm & Focused (11-14)",
      age: "Ages 11-14",
      description: "Teaching teens advanced techniques that help navigate school pressures, enhance focus, and build emotional intelligence.",
      features: ["Advanced Techniques", "Focus Enhancement", "Emotional Intelligence"],
      image: "👦",
      bgColor: "from-purple-100 to-pink-100"
    }
  ]

  return (
    <section id="programs" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Programs for Every Age
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Age-appropriate mindfulness programs that grow with your child's developmental needs and learning capacity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index}
              className="card overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Program Image */}
              <div className={`h-48 bg-gradient-to-br ${program.bgColor} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {program.image}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {program.age}
                </div>
              </div>
              
              {/* Program Content */}
              <div className="p-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                {/* Features */}
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full btn-secondary">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Built for Kids, Loved by Parents
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our programs are designed with child development experts and backed by research to ensure 
              age-appropriate content that engages and educates.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-primary-500 text-3xl mb-2">🏆</div>
                <h4 className="font-semibold text-gray-900">Award Winning</h4>
                <p className="text-sm text-gray-600">Recognized by education experts</p>
              </div>
              <div>
                <div className="text-primary-500 text-3xl mb-2">👨‍👩‍👧‍👦</div>
                <h4 className="font-semibold text-gray-900">Family Friendly</h4>
                <p className="text-sm text-gray-600">Designed for family participation</p>
              </div>
              <div>
                <div className="text-primary-500 text-3xl mb-2">📱</div>
                <h4 className="font-semibold text-gray-900">Multi-Device Access</h4>
                <p className="text-sm text-gray-600">Available on all your devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs

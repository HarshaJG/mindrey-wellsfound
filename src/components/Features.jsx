const Features = () => {
  const features = [
    {
      icon: "🧠",
      title: "Mental Awareness",
      description: "Help kids understand their thoughts and emotions better through guided exercises"
    },
    {
      icon: "❤️",
      title: "Good for the Heart",
      description: "Promote emotional well-being and develop healthy coping mechanisms"
    },
    {
      icon: "😊",
      title: "Creates a Positive Mindset",
      description: "Build confidence, optimism, and resilience through positive thinking practices"
    },
    {
      icon: "🧘",
      title: "Peace & Mindfulness",
      description: "Teaching kids to find calm and peace in their busy lives through meditation"
    }
  ]

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Why Mindery Kids?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Research shows that mindfulness helps children become more self-aware, emotionally resilient, 
            and socially connected while improving focus and academic performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card p-8 text-center group hover:bg-gradient-to-br hover:from-primary-50 hover:to-purple-50 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">85%</div>
              <div className="text-primary-100">Improved Focus</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">92%</div>
              <div className="text-primary-100">Better Sleep Quality</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">78%</div>
              <div className="text-primary-100">Reduced Anxiety</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

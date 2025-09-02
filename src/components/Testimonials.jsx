const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent of 8-year-old",
      avatar: "SJ",
      rating: 5,
      text: "My daughter loves the daily mindfulness sessions! She's become so much calmer and more focused at school. The breathing exercises have been a game-changer for our bedtime routine."
    },
    {
      name: "Michael Chen",
      role: "Parent of 6-year-old",
      avatar: "MC", 
      rating: 5,
      text: "The storytelling approach is brilliant! My son actually asks to do his 'calm time' now. I've noticed such improvement in how he handles frustration and big emotions."
    },
    {
      name: "Emma Rodriguez",
      role: "Parent of twins (age 10)",
      avatar: "ER",
      rating: 5,
      text: "Having programs tailored for different ages is perfect for our family. Both twins engage with the content differently but both have benefited enormously from the mindfulness practices."
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            What Families Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Mindery is helping families build stronger emotional connections and 
            create more peaceful homes.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card p-8 relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-primary-100 text-4xl opacity-50 group-hover:opacity-70 transition-opacity">
                "
              </div>
              
              {/* Rating */}
              <div className="flex text-yellow-400 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-8">Trusted by families worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-2xl font-bold text-gray-400">2000+ Families</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">4.9★ Rating</div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="text-2xl font-bold text-gray-400">50+ Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

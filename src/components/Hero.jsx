const Hero = ({ onStartTrial }) => {
  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full opacity-20 animate-bounce-gentle"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              ✨ Powered by Science
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6 leading-tight">
              Mindfulness &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">
                Meditation
              </span>{' '}
              for Kids (4-14)
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Help your child develop emotional intelligence, focus, calmness, and resilience through 
              our scientifically-backed mindfulness programs designed specifically for young minds.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={onStartTrial}
                className="btn-primary text-lg px-8 py-4"
              >
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Watch Demo
              </button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-primary-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-secondary-300 rounded-full border-2 border-white"></div>
                  <div className="w-8 h-8 bg-purple-300 rounded-full border-2 border-white"></div>
                </div>
                <span>2000+ Happy Families</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary-100 to-purple-100 flex items-center justify-center">
                {/* Placeholder for hero image */}
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <svg className="w-16 h-16 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Interactive Mindfulness Session</p>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-secondary-300 rounded-full opacity-80 animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-primary-300 rounded-full opacity-80 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}></div>
            </div>
            
            {/* Floating testimonial card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs animate-slide-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-200 rounded-full flex items-center justify-center">
                  <span className="text-primary-700 font-bold text-sm">SL</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">Sarah, Parent</p>
                  <div className="flex text-yellow-400 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-xs mt-2">
                "My daughter loves the daily mindfulness sessions!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

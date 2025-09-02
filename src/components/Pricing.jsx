const Pricing = ({ onStartTrial }) => {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      period: "forever",
      description: "Perfect for trying out our mindfulness programs",
      features: [
        "Access to 3 meditation sessions",
        "Basic breathing exercises", 
        "Progress tracking",
        "Mobile app access",
        "Community support"
      ],
      cta: "Get Started",
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Premium", 
      price: "₹399",
      period: "/mo",
      description: "Most popular choice for growing families",
      features: [
        "Unlimited meditation sessions",
        "All age-appropriate programs",
        "Advanced progress analytics",
        "Family sharing (up to 4 kids)",
        "Priority support",
        "Offline content access",
        "Expert guidance sessions"
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "border-primary-500 ring-2 ring-primary-200"
    },
    {
      name: "Family",
      price: "₹599",
      period: "/mo", 
      description: "Perfect solution for larger families",
      features: [
        "Everything in Premium",
        "Unlimited family members",
        "Personal meditation coach",
        "Custom family programs",
        "1-on-1 expert consultations",
        "Early access to new content",
        "Dedicated family success manager"
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "border-purple-200"
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start with our free plan and upgrade when you're ready. All plans include our core mindfulness 
            programs designed for children's development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`card p-8 relative overflow-hidden ${plan.color} ${plan.popular ? 'transform scale-105' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-display font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-500">{plan.period}</span>}
                </div>
                <p className="text-gray-600 text-sm">
                  {plan.description}
                </p>
              </div>
              
              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={onStartTrial}
                className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-primary-500 to-purple-500 hover:from-primary-600 hover:to-purple-600 text-white transform hover:scale-105 shadow-lg hover:shadow-xl' 
                    : 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50'
                }`}
              >
                {plan.cta}
              </button>
              
              {plan.popular && (
                <p className="text-center text-xs text-gray-500 mt-3">
                  14-day free trial • Cancel anytime
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Money back guarantee */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-gray-700 font-medium">30-day money-back guarantee</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

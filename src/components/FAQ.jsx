import { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What ages is this for?",
      answer: "Our programs are designed for children ages 4-14, with age-appropriate content and activities tailored to different developmental stages."
    },
    {
      question: "How long are the sessions?",
      answer: "Sessions range from 5-15 minutes depending on the age group and activity type. We believe in short, engaging sessions that fit into your family's routine."
    },
    {
      question: "Is it safe and kid-friendly?",
      answer: "Absolutely! All our content is created by child development experts and is completely safe, age-appropriate, and designed specifically for children's learning styles."
    },
    {
      question: "Can multiple kids use one account?",
      answer: "Yes! Our Premium and Family plans support multiple children with individual progress tracking and personalized content recommendations for each child."
    },
    {
      question: "What devices can we use?",
      answer: "Our platform works on all devices - smartphones, tablets, computers, and smart TVs. Content is available both online and offline for convenience."
    },
    {
      question: "Do you offer a free trial?",
      answer: "Yes! We offer a 14-day free trial for our Premium and Family plans, plus a forever-free Starter plan to get you started."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about our mindfulness programs? We've got answers to help you get started.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="card overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-6 h-6 flex items-center justify-center transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Start Your Child's Mindfulness Journey
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of families who are already experiencing the benefits of mindfulness. 
              Start with our free plan today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">
                Start Free Trial
              </button>
              <button className="btn-secondary text-lg px-8 py-4">
                Download Sample Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

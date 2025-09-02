import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header onStartTrial={openModal} />
      <Hero onStartTrial={openModal} />
      <Features />
      <Programs />
      <Testimonials />
      <Pricing onStartTrial={openModal} />
      <FAQ />
      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App

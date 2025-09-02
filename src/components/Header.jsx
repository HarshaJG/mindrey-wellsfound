import { useState } from 'react'

const Header = ({ onStartTrial }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="text-2xl font-display font-bold text-gray-800">Mindery</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#programs" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Programs
            </a>
            <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              For Kids
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              FAQ
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
              Login
            </a>
            <button 
              onClick={onStartTrial}
              className="btn-primary"
            >
              Start Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <a href="#programs" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                Programs
              </a>
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                For Kids
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                FAQ
              </a>
              <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors font-medium">
                Login
              </a>
              <button 
                onClick={onStartTrial}
                className="btn-primary w-full"
              >
                Start Free Trial
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header

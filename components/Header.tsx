'use client'

import { useState } from 'react'

interface Company {
  name: string
  tagline: string
}

interface HeaderProps {
  company: Company
}

export default function Header({ company }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl mr-2">🏥</div>
            <div>
              <h1 className="text-xl font-bold text-primary-600">{company.name}</h1>
              <p className="text-xs text-gray-500">{company.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
            <a href="#team" className="text-gray-700 hover:text-primary-600 transition-colors">Our Team</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Testimonials</a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-primary">Book Appointment</button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-primary-600 transition-colors">Services</a>
              <a href="#team" className="text-gray-700 hover:text-primary-600 transition-colors">Our Team</a>
              <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-colors">Contact</a>
              <button className="btn-primary w-full">Book Appointment</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 
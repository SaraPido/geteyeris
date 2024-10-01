"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { MessageSquare, FileText, Camera, Phone, Menu, ChevronRight } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Industries', href: '#industries' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mw0YDEi8wYToFfFMl45JSCVp0Bxfx6.png#logo"
              alt="Eyeris Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-purple-400">Eyeris</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 p-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block py-2 text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">Eyeris</h1>
        <p className="text-xl mb-8">
          Empower your hands-on profession with smart glasses
        </p>
        <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
          Discover Eyeris <ChevronRight className="inline-block ml-2" />
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="space-y-12">
            {[
              { 
                icon: MessageSquare,
                title: "AI-Powered Assistance", 
                description: "Ask short questions and receive instant vocal answers, enhancing your decision-making process on the job."
              },
              { 
                icon: FileText,
                title: "Speech-to-Text & Summarization", 
                description: "Automatically convert recordings into structured documentation, saving time on report writing and improving accuracy."
              },
              { 
                icon: Camera,
                title: "Photo/Video Integration", 
                description: "Capture and integrate visual data into your documentation using advanced computer vision techniques for comprehensive reports."
              },
              { 
                icon: Phone,
                title: "Live Consultation", 
                description: "Initiate video calls for real-time expert advice, with the ability to record and save consultation details for future reference."
              }
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <feature.icon className="h-8 w-8 mr-4 text-purple-400 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Healthcare", description: "Improve patient care with hands-free access to medical records and expert consultations." },
              { name: "Manufacturing", description: "Enhance quality control and streamline processes with AI-assisted visual inspections." },
              { name: "Construction", description: "Boost on-site safety and efficiency with real-time project documentation and expert guidance." },
              { name: "Field Service", description: "Provide superior customer service with instant access to technical information and remote support." },
              { name: "Logistics", description: "Optimize inventory management and order fulfillment with computer vision and AI assistance." },
              { name: "Education", description: "Facilitate immersive learning experiences and hands-on training with augmented reality." }
            ].map((industry, index) => (
              <div key={index} className="bg-black p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-purple-400">{industry.name}</h3>
                <p className="text-gray-400">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Eyeris. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

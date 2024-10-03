"use client"

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Menu } from 'lucide-react'

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/eyeris2.png"
              alt="Eyeris Logo"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>
          <nav className="hidden md:flex space-x-6">
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
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 md:hidden">
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-purple-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <button
              className="mt-4 text-white hover:text-purple-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="mb-8">
            <Image
              src="/images/eyeris2.png"
              alt="Eyeris Logo"
              width={300}
              height={100}
              className="object-contain mx-auto"
            />
          </div>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Empower your hands-on profession with smart glasses
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-full flex items-center mx-auto hover:bg-gray-200 transition-colors text-lg font-semibold">
            Discover Eyeris <ChevronRight className="ml-2" />
          </button>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {[
                { 
                  icon: "💬",
                  title: "AI-Powered Assistance", 
                  description: "Ask short questions and receive instant vocal answers, enhancing your decision-making process on the job."
                },
                { 
                  icon: "📝",
                  title: "Speech-to-Text & Summarization", 
                  description: "Automatically convert recordings into structured documentation, saving time on report writing and improving accuracy."
                },
                { 
                  icon: "📷",
                  title: "Photo/Video Integration", 
                  description: "Capture and integrate visual data into your documentation using advanced computer vision techniques for comprehensive reports."
                },
                { 
                  icon: "📞",
                  title: "Live Consultation", 
                  description: "Initiate video calls for real-time expert advice, with the ability to record and save consultation details for future reference."
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-4xl mr-4 text-purple-400">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section id="industries" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: "Healthcare", description: "Improve patient care with hands-free access to medical records and expert consultations." },
                { name: "Manufacturing", description: "Enhance quality control and streamline processes with AI-assisted visual inspections." },
                { name: "Construction", description: "Boost on-site safety and efficiency with real-time project documentation and expert guidance." },
                { name: "Field Service", description: "Provide superior customer service with instant access to technical information and remote support." },
                { name: "Logistics", description: "Optimize inventory management and order fulfillment with computer vision and AI assistance." },
                { name: "Education", description: "Facilitate immersive learning experiences and hands-on training with augmented reality." }
              ].map((industry, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">{industry.name}</h3>
                  <p className="text-gray-400">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Eyeris. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
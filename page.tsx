import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, MessageSquare, FileText, Camera, Phone, Menu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', { email, message })
    // Reset form fields
    setEmail('')
    setMessage('')
  }

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '#features' },
    { name: 'Industries', href: '#industries' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Mw0YDEi8wYToFfFMl45JSCVp0Bxfx6.png#logo"
              alt="Eyeris Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-gray-800">Eyeris</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 mt-16 text-center">
        <motion.h1 
          className="text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower Your Hands-On Profession with Eyeris
        </motion.h1>
        <motion.p 
          className="text-xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Smart glasses that revolutionize the way you work with AI-powered assistance and seamless documentation
        </motion.p>
        <Button size="lg">
          Discover Eyeris <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <feature.icon className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20">
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
              <motion.div 
                key={index} 
                className="bg-gray-100 p-6 rounded-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="mb-4">
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <Textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Eyeris. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
"use client"

import { useState } from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

export default function PrelaunchPage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement subscription logic
    console.log('Subscribed:', email)
    setEmail('')
  }

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement contact form submission logic
    console.log('Contact form submitted:', { name, email, message })
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <div className="mb-12">
            <Image
              src="/images/eyeris.png"
              alt="Eyeris Logo"
              width={400}
              height={133}
              className="object-contain mx-auto"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Coming Soon</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Empower your hands-on profession with smart glasses
          </p>
          <div className="mb-12">
            <Image
              src="/placeholder.svg?height=300&width=600"
              alt="Eyeris Smart Glasses"
              width={600}
              height={300}
              className="object-cover mx-auto rounded-lg"
            />
          </div>
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">Be the first!</h2>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-md bg-gray-800 text-white"
                required
              />
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-sm text-gray-400 mt-2">
              You will be kept updated on the news and details
            </p>
          </div>
        </section>
      </main>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <form onSubmit={handleContact} className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Eyeris. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

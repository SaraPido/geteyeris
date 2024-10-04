"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    <div className="min-h-screen bg-[#010b19] text-[#7e8eff] flex flex-col">
      <header className="p-4 flex justify-between items-center">
        <div className="w-12 h-12">
          <Image
            src="/images/eyeris_noback.png"
            alt="Eyeris Logo"
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-[#a0acff] transition-colors">Home</Link></li>
            <li><Link href="#contact" className="hover:text-[#a0acff] transition-colors">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <div className="inline-block">
              <Image
                src="/images/eyeris_noback.png"
                alt="Eyeris Logo"
                width={300}
                height={100}
                className="object-contain"
              />
              <h2 className="text-xl mt-2">
                Empower your hands-on profession with smart glasses
              </h2>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Eyeris Smart Glasses"
                width={500}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8 flex flex-col items-center justify-center">
              <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold mb-4 text-center">Be the first!</h2>
                <form onSubmit={handleSubscribe} className="mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 rounded-md bg-[#021a3a] mb-4 border border-[#7e8eff] focus:outline-none focus:border-[#a0acff]"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#7e8eff] text-[#010b19] px-6 py-2 rounded-md hover:bg-[#a0acff] transition-colors"
                  >
                    Get the latest news
                  </button>
                </form>
                <p className="text-sm text-center">
                  You will be kept updated on the news and details
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <form onSubmit={handleContact} className="max-w-lg mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-[#021a3a] border border-[#7e8eff] focus:outline-none focus:border-[#a0acff]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-md bg-[#021a3a] border border-[#7e8eff] focus:outline-none focus:border-[#a0acff]"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-[#021a3a] border border-[#7e8eff] focus:outline-none focus:border-[#a0acff]"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#7e8eff] text-[#010b19] px-6 py-2 rounded-md hover:bg-[#a0acff] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Eyeris. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

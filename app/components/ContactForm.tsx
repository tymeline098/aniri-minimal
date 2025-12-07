'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded-lg text-center text-black">
          ✓ Thank you! I'll get back to you soon.
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-medium-gray rounded-lg bg-white text-black placeholder-secondary focus:outline-none focus:border-black transition"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-medium-gray rounded-lg bg-white text-black placeholder-secondary focus:outline-none focus:border-black transition"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-medium-gray rounded-lg bg-white text-black placeholder-secondary focus:outline-none focus:border-black transition"
            placeholder="Commission inquiry, custom art, etc."
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-medium-gray rounded-lg bg-white text-black placeholder-secondary focus:outline-none focus:border-black transition resize-none"
            placeholder="Tell me about your vision..."
          />
        </div>

        <button
          type="submit"
          className="w-full btn-primary flex items-center justify-center gap-2 py-4"
        >
          <Send size={20} />
          Send Message
        </button>
      </form>
    </div>
  )
}

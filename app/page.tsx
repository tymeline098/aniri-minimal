'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import ContactForm from './components/ContactForm'
import SocialFooter from './components/SocialFooter'

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        <div className="absolute inset-0 bg-black/5 z-0" />
        
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto text-black"
        >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6"
            >
              Aniri
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light text-gray-700"
            >
              Gaze from Bali
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg max-w-2xl mx-auto text-gray-600 mb-10"
            >
              Original artwork and commissions exploring sacred geometry and contemporary art
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a href="#portfolio" className="btn btn-primary">
                View Portfolio
              </a>
              <a href="#contact" className="btn btn-secondary">
                Commission Work
              </a>
            </motion.div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display font-bold text-black mb-4">
              Artistic Practice
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Creating from the heart of Bali, exploring the intersection of sacred geometry, emotion, and visual storytelling through multiple mediums.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Sacred Mandalas',
                description: 'Hand-crafted geometric patterns exploring spiritual symbolism and sacred proportion.',
              },
              {
                title: 'Contemporary Art',
                description: 'Original paintings and digital works bridging traditional and modern artistic expression.',
              },
              {
                title: 'Custom Commissions',
                description: 'Personalized artwork tailored to your vision and space.',
              },
              {
                title: 'Limited Editions',
                description: 'Exclusive pieces available for collectors seeking unique, authentic artwork.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card-box"
              >
                <div className="flex items-start gap-4">
                  <Sparkles size={24} className="text-black flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-light-gray">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-black mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
              Interested in a custom piece or want to discuss your artistic vision? Let's connect.
            </p>
          </motion.div>

          <ContactForm />
        </div>
      </section>

      {/* Social Footer */}
      <SocialFooter />
    </>
  )
}

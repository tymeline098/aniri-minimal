'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Instagram } from 'lucide-react'
import { ParallaxSection } from './components/ParallaxSection'
import { ArtCard } from './components/ArtCard'
import { ALL_MANDALAS } from '@/data/mandalas'

const featuredMandalas = ALL_MANDALAS.slice(0, 4).map(m => ({
  id: m.number,
  title: m.title,
  category: 'Sacred Mandala',
  image: m.imageUrl,
  price: m.printPrice,
}))

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
      {/* Hero Section with Peacock */}
      <section
        ref={heroRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-white"
      >
        <img 
          src="/images/hero-peacock.webp"
          alt="Hero Peacock"
          className="absolute inset-0 w-full h-full object-cover md:object-contain md:object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/20" />
        
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white drop-shadow-xl"
          >
            Aniri
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 text-white drop-shadow-lg tracking-wide"
          >
            Gaze from Bali
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto font-light text-gray-100 drop-shadow-md"
          >
            Sacred art and mandalas inspired by the spiritual beauty of Bali
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4"
          >
            <a href="#contact" className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-black font-medium text-sm sm:text-base hover:bg-gray-100 transition-colors rounded">
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-4 md:mb-6">
                An Artist's Vision
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed">
                Inspired by the spiritual essence of Bali, Aniri creates sacred mandalas and contemporary art that celebrates the divine geometry found in nature. Each piece is a meditation, a journey into mindfulness and beauty.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-8"
            >
              <div className="relative w-full h-auto flex items-center justify-center bg-gradient-to-b from-gray-50 to-white rounded-xl p-6">
                <img 
                  src="/images/mandalas/005 Harmony.webp"
                  alt="Featured Artwork"
                  className="w-full h-auto object-contain drop-shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commission Section */}
      <ParallaxSection className="py-8 sm:py-12 md:py-16 bg-white text-center relative overflow-hidden" speed={0.25}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url(/images/mandalas/005 Harmony.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-black mb-2 md:mb-3">
              Custom Commissions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
              Dreaming of a unique piece? Aniri creates custom mandalas and artwork tailored to your vision and spiritual journey.
            </p>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-24 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-8 md:mb-12">
                Connect with Aniri
              </h2>

              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl w-full space-y-4 mb-8"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-black placeholder-gray-600 rounded text-sm sm:text-base focus:outline-none focus:border-black transition"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-black placeholder-gray-600 rounded text-sm sm:text-base focus:outline-none focus:border-black transition"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-black placeholder-gray-600 rounded text-sm sm:text-base focus:outline-none focus:border-black transition resize-none"
                ></textarea>
                <button className="w-full px-6 py-2 sm:py-3 bg-black text-white font-medium text-sm sm:text-base hover:bg-gray-800 transition-colors rounded">
                  Send Message
                </button>
              </motion.form>

              <div className="flex justify-center items-center gap-2">
                <p className="text-gray-600 text-base">Follow: </p>
                <a href="https://instagram.com/aniribali" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-600 transition">
                  <Instagram size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center text-gray-600 text-xs sm:text-sm">
          <p>© 2024 Aniri. Gaze from Bali. All works protected by copyright.</p>
        </div>
      </footer>
    </>
  )
}

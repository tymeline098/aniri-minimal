'use client'

import { Instagram, PinIcon, Youtube, Music2 } from 'lucide-react'

const socials = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Pinterest', icon: PinIcon, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'TikTok', icon: Music2, href: '#' },
]

export default function SocialFooter() {
  return (
    <footer className="bg-light-gray border-t border-medium-gray">
      <div className="container-custom py-16">
        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center items-center gap-8 mb-12">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  aria-label={social.name}
                >
                  <Icon
                    size={32}
                    className="text-black hover:text-secondary transition-colors duration-200 group-hover:scale-110 transform"
                  />
                </a>
              )
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-secondary text-sm border-t border-medium-gray pt-8">
            <p>© {new Date().getFullYear()} Aniri. All rights reserved.</p>
            <p className="mt-2">Gaze from Bali</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

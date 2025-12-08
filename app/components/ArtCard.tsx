'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Eye, ShoppingBag } from 'lucide-react'

interface ArtCardProps {
  id: number
  title: string
  category: string
  image: string
  price?: number
  slug?: string
}

export function ArtCard({ id, title, category, image, price, slug }: ArtCardProps) {
  const href = slug ? `/gallery/${slug}` : `/gallery/${id}`

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group card"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-background-alt">
        {/* Placeholder gradient if no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/30 flex items-center justify-center">
          <span className="text-4xl opacity-30">🎨</span>
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-secondary/0 group-hover:bg-secondary/60 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex items-center gap-3">
            <Link
              href={href}
              className="p-3 rounded-full bg-background text-secondary hover:bg-accent hover:text-secondary transition-colors"
              aria-label="View artwork"
            >
              <Eye size={20} />
            </Link>
            {price && (
              <button
                className="p-3 rounded-full bg-background text-secondary hover:bg-accent hover:text-secondary transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingBag size={20} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-accent text-xs font-medium uppercase tracking-wider">
          {category}
        </span>
        <h3 className="font-display text-lg mt-1 group-hover:text-accent transition-colors">
          <Link href={href}>{title}</Link>
        </h3>
        {price && (
          <p className="text-foreground-muted mt-2">
            ${price.toLocaleString()}
          </p>
        )}
      </div>
    </motion.article>
  )
}

// Smaller variant for grid layouts
export function ArtCardCompact({ id, title, category, image }: Omit<ArtCardProps, 'price'>) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group relative aspect-square overflow-hidden rounded-soft cursor-pointer"
    >
      {/* Placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/30 flex items-center justify-center">
        <span className="text-3xl opacity-30">🎨</span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
        <div>
          <span className="text-accent text-xs font-medium uppercase tracking-wider">
            {category}
          </span>
          <h4 className="text-background font-display text-sm mt-1">
            {title}
          </h4>
        </div>
      </div>
    </motion.div>
  )
}

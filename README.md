# Aniri - Minimal Portfolio & Commission Site

A clean, minimal portfolio website for Aniri's artwork with focus on commissions and social media engagement.

**Live:** `aniri.tymelinestudios.com`

## Features

- ✨ Minimal black & white design
- 🎨 Hero section with tagline "Gaze from Bali"
- 📋 Portfolio showcase sections
- 📧 Contact form for inquiries
- 🔗 Social media footer (Instagram, Pinterest, YouTube, TikTok)
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 & Tailwind CSS

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Deployment

This site is deployed to Cloudflare Pages and accessible at `aniri.tymelinestudios.com`.

### Deploy to Cloudflare Pages

1. Push to GitHub repository
2. Connect repo to Cloudflare Pages
3. Set build command: `npm run build`
4. Set output directory: `.next`

### Environment Variables (if needed)
Create `.env.local` with any required variables.

## Customize

### Update Social Links
Edit `app/components/SocialFooter.tsx` to update social media URLs:
```tsx
const socials = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/aniri' },
  // ...
]
```

### Update Contact Form
Edit `app/components/ContactForm.tsx` to integrate with your email service (Formspree, EmailJS, etc.)

### Change Content
Edit `app/page.tsx` to modify:
- Hero headline/tagline
- Portfolio sections
- Contact section text

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Cloudflare Pages

## Project Structure

```
aniri-minimal/
├── app/
│   ├── components/
│   │   ├── ContactForm.tsx
│   │   └── SocialFooter.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   └── images/
├── package.json
└── tailwind.config.js
```

---

Keep portfolio site separate in `/Users/thomas/PUZZZELD/ANIRIART`

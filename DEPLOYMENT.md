# Deployment Guide - Aniri Minimal Site

## Domain Setup: aniri.tymelinestudios.com

### Step 1: GitHub Repository Setup

1. Create a new GitHub repository named `aniri-minimal`
2. Initialize git in your local project:

```bash
cd /Users/thomas/PUZZZELD/aniri-minimal
git init
git add .
git commit -m "Initial commit: Minimal Aniri portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/aniri-minimal.git
git push -u origin main
```

### Step 2: Cloudflare Pages Deployment

**Option A: Using Cloudflare Pages (Recommended)**

1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Pages** → **Create a project**
3. Select GitHub and authorize
4. Choose `aniri-minimal` repository
5. Configure build settings:
   - **Framework preset:** Next.js
   - **Build command:** `npm run build`
   - **Build output directory:** `.next`
   - **Node version:** 18
6. Click **Save and Deploy**
7. Wait for deployment to complete (~2-3 minutes)

**Option B: Using Vercel**

1. Log into [Vercel](https://vercel.com/)
2. Click **New Project**
3. Import GitHub repository `aniri-minimal`
4. Vercel auto-detects Next.js configuration
5. Click **Deploy** (settings should auto-configure)

### Step 3: Domain Configuration

Once deployed to Cloudflare or Vercel, connect your custom domain:

**In Cloudflare Dashboard:**
1. Go to your site settings
2. Add custom domain: `aniri.tymelinestudios.com`
3. Update DNS records at your domain registrar to point to Cloudflare

**DNS Records to Update:**
```
Type: CNAME
Name: aniri
Value: [Your Cloudflare Pages/Vercel domain]
TTL: Auto
```

### Step 4: Social Media Links

Update social media URLs in `app/components/SocialFooter.tsx`:

```tsx
const socials = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/aniri' },
  { name: 'Pinterest', icon: PinIcon, href: 'https://pinterest.com/aniri' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@aniri' },
  { name: 'TikTok', icon: Music2, href: 'https://tiktok.com/@aniri' },
]
```

### Step 5: Contact Form Integration

Update `app/components/ContactForm.tsx` to connect to an email service:

**Option A: Formspree (Free)**
```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  // Handle response...
}
```

**Option B: EmailJS**
```bash
npm install @emailjs/browser
```

Then integrate in the form component.

### Step 6: SSL/HTTPS Certificate

Both Cloudflare Pages and Vercel provide free SSL certificates automatically.

### Local Testing

Before deploying, test locally:

```bash
npm run dev
# Visit http://localhost:3000
```

Build test:
```bash
npm run build
npm start
```

## Monitoring & Updates

- **Cloudflare Pages:** Automatic deploys on git push to main branch
- **Vercel:** Automatic deploys on git push
- Check deployment status in your platform's dashboard
- View build logs if something fails

## Rollback

If something breaks after deployment:

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or specify a previous commit
git reset --hard <commit-hash>
git push origin main --force
```

## SSL Certificate

Both platforms provide free SSL. Your site will be accessible at:
- `https://aniri.tymelinestudios.com`

## Performance Tips

- Images in `/public/images/` should be optimized before uploading
- Use Next.js Image component for automatic optimization
- Monitor Core Web Vitals in Cloudflare Analytics

---

**Questions?** Check the main README.md for tech stack and project structure.

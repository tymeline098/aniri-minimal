# Aniri Minimal - Setup Checklist

## ✅ Completed

- [x] Project structure created
- [x] Next.js 14 configured
- [x] Tailwind CSS with black/white theme
- [x] Home page built (based on Aniri's original)
- [x] Contact form component
- [x] Social media footer component
- [x] npm dependencies installed
- [x] Build tested successfully
- [x] Deployment documentation created

## 📋 Next Steps to Deploy

### 1. **Update Social Media Links** (5 min)
   - File: `app/components/SocialFooter.tsx`
   - Add actual URLs for Instagram, Pinterest, YouTube, TikTok

### 2. **Setup Email for Contact Form** (10 min)
   - Option A: Use Formspree (easiest, free)
   - Option B: Use EmailJS
   - File: `app/components/ContactForm.tsx`
   - Update form submission handler

### 3. **Push to GitHub** (5 min)
   ```bash
   cd /Users/thomas/PUZZZELD/aniri-minimal
   git init
   git add .
   git commit -m "Initial commit: Aniri minimal portfolio"
   git remote add origin https://github.com/YOUR_USERNAME/aniri-minimal.git
   git push -u origin main
   ```

### 4. **Deploy to Cloudflare Pages or Vercel** (5 min)
   - See `DEPLOYMENT.md` for detailed steps
   - Build command: `npm run build`
   - Output directory: `.next`

### 5. **Configure Domain** (5 min)
   - Connect `aniri.tymelinestudios.com` to your deployment

### 6. **Test Live Site** (5 min)
   - Visit `https://aniri.tymelinestudios.com`
   - Test contact form
   - Check social links

## 📂 Project Location

```
/Users/thomas/PUZZZELD/aniri-minimal/
```

**Keep separate from:**
```
/Users/thomas/PUZZZELD/ANIRIART/
```

## 🚀 Local Development

```bash
# Start dev server
cd /Users/thomas/PUZZZELD/aniri-minimal
npm run dev

# Visit http://localhost:3000
```

## 📝 Files to Customize

| File | Purpose | What to Change |
|------|---------|---------------|
| `app/page.tsx` | Home page content | Headline, descriptions, sections |
| `app/components/SocialFooter.tsx` | Social media links | Instagram, Pinterest, YouTube, TikTok URLs |
| `app/components/ContactForm.tsx` | Contact form | Email service integration, recipient email |
| `app/layout.tsx` | Page metadata | Title, description, favicon |
| `tailwind.config.js` | Colors/styling | Already set to black/white (no changes needed) |

## 🎨 Design Notes

- **Color Scheme:** Black text (#1a1a1a), white background (#ffffff), light grey boxes (#f0f0f0)
- **Typography:** Playfair Display (headings), Inter (body)
- **Responsive:** Mobile-first design, works on all devices
- **No animations:** Clean, minimal feel (no heavy effects)

## 🔐 Keep Safe

- Never commit `.env` files with secrets
- Use environment variables for API keys
- Keep GitHub repository private if sensitive

## 📞 Support Files

- `README.md` - Project overview
- `DEPLOYMENT.md` - Detailed deployment guide
- `package.json` - Dependencies

---

**Status:** ✅ Ready for deployment!

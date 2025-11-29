# 🚀 Deployment Checklist

## Pre-Deployment

- ✅ Build passes: `npm run build`
- ✅ No linting errors: `npm run lint`
- ✅ All assets in `/public` directory
- ✅ Environment variables configured (if needed)
- ✅ SEO meta tags added
- ✅ Custom 404 page created

## Deployment Options

### Vercel (Recommended - Zero Config)

1. **Via CLI:**
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Via GitHub:**
   - Push to GitHub
   - Import project at [vercel.com](https://vercel.com)
   - Vercel auto-detects Next.js

3. **Environment Variables:**
   - Add any needed in Vercel dashboard
   - No env vars required for basic deployment

### Netlify

1. **Via CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

2. **Via GitHub:**
   - Connect repo in Netlify dashboard
   - Build command: `npm run build`
   - Publish directory: `.next`

### Other Platforms

- **AWS Amplify** - Connect GitHub repo
- **Railway** - Connect GitHub repo
- **DigitalOcean App Platform** - Connect GitHub repo

## Post-Deployment

- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Check mobile responsiveness
- [ ] Test 404 page
- [ ] Verify SEO meta tags (use [metatags.io](https://metatags.io))
- [ ] Check Google Fonts loading
- [ ] Test smooth scroll behavior
- [ ] Verify contact email link works

## Performance Optimization

- ✅ Images optimized with Next.js Image component
- ✅ Fonts loaded with `next/font` for optimization
- ✅ Static page generation enabled
- ✅ CSS minified automatically
- ✅ JavaScript code-split automatically

## Custom Domain

1. Add domain in Vercel/Netlify dashboard
2. Update DNS records as instructed
3. SSL certificate auto-provisioned

## Analytics (Optional)

Consider adding:
- Vercel Analytics (built-in)
- Google Analytics
- Plausible Analytics

---

**Ready to deploy!** 🎉


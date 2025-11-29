# SanForge Studio - Aurora Forge Brand Refresh

A cinematic, space-forged landing page for SanForge Studio — where games and technology collide.

## 🚀 Quick Start

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

Visit [http://localhost:3000](http://localhost:3000) to see the site.

## 🎨 Design System

### Aurora Forge Color Palette

- `--forge-red`: `#E10600` - Primary brand color
- `--forge-crimson`: `#A00000` - Hover/active states
- `--forge-ember`: `#FF3D30` - Accent details
- `--forge-night`: `#0A0A0D` - Primary background
- `--forge-space`: `#111117` - Elevated dark sections
- `--forge-ice`: `#ECEFF4` - Primary text
- `--forge-steel`: `#7D828C` - Supporting text

### Typography

- **Headings**: Montserrat/Exo 2 (700-800 weight)
- **Body**: Inter (400-500 weight)
- **Code/Tools**: Monospace (400 weight)

## 📁 Project Structure

```
src/
  components/
    Layout.tsx          # Header, footer, and page wrapper
    Hero.tsx            # Cinematic hero section
    ToolsStrip.tsx      # Developer tools showcase
    ProjectGrid.tsx     # Game portfolio grid
    PartnerLogos.tsx    # Technology partners
    StudioIdentity.tsx  # Studio mission and stats
    CTAFooter.tsx       # Contact call-to-action
  pages/
    _app.tsx           # App wrapper with global styles
    index.tsx          # Home page
  styles/
    globals.css        # Global styles and animations
public/
  # All image assets
```

## 🛠 Tech Stack

- **Next.js 16** - React framework with pages router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Next/Image** - Optimized image handling

## 📝 Features

- ✅ Cinematic hero section with parallax-ready background
- ✅ Responsive grid layouts (mobile → tablet → desktop)
- ✅ Aurora-themed color system with red glow effects
- ✅ Smooth scroll animations and hover effects
- ✅ Accessible navigation and semantic HTML
- ✅ Optimized images with Next.js Image component
- ✅ Google Fonts (Montserrat + Inter) with optimized loading
- ✅ Mobile-responsive hamburger menu
- ✅ Custom 404 page
- ✅ SEO optimized with Open Graph and Twitter cards
- ✅ Smooth scroll behavior with proper anchor offsets

## 🎯 Sections

1. **Hero** - Full-viewport cinematic introduction
2. **Tools** - Developer tools showcase (3-tile layout)
3. **Projects** - Game portfolio grid (4-6 projects)
4. **Partners** - Technology partner logos
5. **Studio Identity** - Mission statement and stats
6. **CTA Footer** - Contact call-to-action

## 🔧 Customization

All colors, spacing, and animations are defined in:
- `tailwind.config.ts` - Theme extensions
- `src/styles/globals.css` - Global styles and animations

Edit these files to customize the design system.

## 📦 Deployment

This site is ready to deploy on:
- **Vercel** (recommended) - `vercel deploy`
- **Netlify** - Connect your Git repository
- **Any Node.js host** - Build and serve the `out` directory

## 📄 License

© 2025 SanForge Studio. All Rights Reserved.


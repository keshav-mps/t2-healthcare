# HealthCare Pro Landing Page

A modern, responsive healthcare company landing page built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏥 **Healthcare-focused design** with medical-themed content and styling
- 📱 **Fully responsive** - works perfectly on all devices
- ⚡ **Fast performance** with Next.js 14 and optimized components
- 🎨 **Modern UI** with beautiful gradients and smooth animations
- 📊 **Data-driven** - all content comes from `template-data.json`
- 🧩 **Modular components** for easy customization

## Sections

1. **Header** - Navigation with company logo and mobile menu
2. **Hero** - Compelling headline with call-to-action buttons
3. **Services** - Healthcare services with icons and descriptions
4. **Stats** - Key metrics and achievements
5. **Team** - Medical professionals and their specialties
6. **Testimonials** - Patient reviews with star ratings
7. **Contact** - Contact form and information
8. **Footer** - Company info and quick links

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Data Structure

All content is managed through `template-data.json`:

```json
{
  "company": {
    "name": "HealthCare Pro",
    "tagline": "Your Health, Our Priority",
    "description": "..."
  },
  "services": [...],
  "team": [...],
  "testimonials": [...],
  "stats": [...],
  "contact": {...},
  "social": {...}
}
```

## Customization

### Changing Content
Edit `template-data.json` to update:
- Company information
- Services offered
- Team members
- Testimonials
- Contact details
- Social media links

### Styling
- Colors: Modify `tailwind.config.js` primary color palette
- Components: Edit individual component files in `/components`
- Global styles: Update `app/globals.css`

### Adding New Sections
1. Create new component in `/components`
2. Add data to `template-data.json`
3. Import and use in `app/page.tsx`

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Latest React features
- **PostCSS** - CSS processing
- **ESLint** - Code linting

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Stats.tsx
│   ├── Team.tsx
│   ├── Testimonials.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── template-data.json
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for healthcare professionals and patients 
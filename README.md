# VISWARAJ SECURE SOLUTIONS PVT. LTD. - Website

A modern, multi-page React application for VISWARAJ SECURE SOLUTIONS PVT. LTD. - a leading provider of comprehensive security and facility management services.

## Tech Stack

- **React 18** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS v3** - Styling
- **React Router DOM** - Routing
- **Lucide React** - Icons

## Project Structure

```
src/
├── components/
│   ├── Layout.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ui/
│       ├── SectionHeader.jsx
│       ├── ServiceCard.jsx
│       ├── FeatureCard.jsx
│       ├── StatCard.jsx
│       └── PageHero.jsx
├── data/
│   └── companyData.js
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Contact.jsx
│   └── services/
│       ├── SecurityServices.jsx
│       ├── FacilityServices.jsx
│       └── RiskServices.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## Pages

- `/` - Home
- `/about` - About Us
- `/services` - All Services
- `/services/security` - Security Services Detail
- `/services/facility` - Facility Management Detail
- `/services/risk` - Corporate & Risk Solutions Detail
- `/contact` - Contact Us

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

## Customization

### Colors

The color scheme is defined in `tailwind.config.js`. To update colors:

```js
// tailwind.config.js
colors: {
  primary: {
    DEFAULT: '#1e40af',  // Change this
    // ... other shades
  },
  accent: {
    DEFAULT: '#f97316',  // Change this
    // ... other shades
  },
  dark: '#111827',
  light: '#f9fafb',
}
```

### Company Data

All company information is centralized in `src/data/companyData.js`. Update this file to change:
- Company name and tagline
- Contact information
- Services descriptions
- About content
- Statistics

## Features

- ✅ Fully responsive design
- ✅ Smooth scrolling
- ✅ Hover animations
- ✅ Mobile hamburger menu
- ✅ Services dropdown navigation
- ✅ Contact form with validation
- ✅ Professional corporate styling
- ✅ SEO-friendly structure

## License

© 2024 VISWARAJ SECURE SOLUTIONS PVT. LTD. All rights reserved.

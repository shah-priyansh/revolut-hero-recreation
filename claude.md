# iLock Website

A modern React website for iLock - a luxury watch trading platform with end-to-end global trading capabilities.

## Project Overview

This project is a recreation of a hero section design with animations, built with React, Vite, and GSAP for smooth animations.

## Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Animations**: GSAP (GreenSock Animation Platform)
- **Styling**: CSS (custom styles)
- **Routing**: React Router DOM
- **UI Components**: React Bootstrap, Framer Motion

## Project Structure

```
ilockwebsite/
├── public/
│   └── images/          # Image assets including logos
├── src/
│   ├── components/
│   │   ├── AboutUs/
│   │   ├── Footer/
│   │   ├── Header/      # Navigation header
│   │   ├── LandingPage/
│   │   ├── Logo/        # Logo component (Figma design)
│   │   ├── LuxryFrame/
│   │   └── RevolutHero/ # Main hero section with animations
│   ├── pages/
│   │   ├── About.jsx
│   │   └── ContactUs.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## Routes

- `/` - Landing page
- `/home` - Main hero section with RevolutHero component
- `/about` - About Us page
- `/contact` - Contact & Support page

## Development

### Setup
```bash
npm install
```

### Run Development Server
```bash
npm run dev
```

The dev server will start at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Features

### Hero Section (`/home`)
- Scroll-triggered GSAP animations
- Responsive design (mobile & desktop)
- Card animations with image zoom effects
- Custom logo component from Figma design

### Logo Component
- Created from Figma design
- Proper SVG aspect ratios
- Drop shadow styling
- Responsive sizing

## Design System

### Logo Assets
- `logo-icon.svg` - Hexagonal iLock icon
- `logo-text.svg` - iLock text with "SECURE" tagline

### Typography & Colors
- Primary: Teal/Cyan (#6AC5D6, #8ACFDC)
- Accent: Green (#41B6A2, #36B083)
- Secondary: Blue (#0098CA, #0181B6)

## Browser Support

Modern browsers with ES6+ support

## Notes

- Animations are disabled on mobile devices for better performance
- Uses GSAP ScrollTrigger for scroll-based animations
- Framer Motion for component-level animations

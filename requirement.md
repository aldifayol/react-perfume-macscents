# Macscents - Perfume Landing Page Requirements

## Project Overview
Build a modern, responsive perfume brand landing page using React with TypeScript. The application should feature a modular component architecture, dark mode support, scroll-triggered animations, and a mobile-friendly navigation system.

## Tech Stack
- React 19 with TypeScript
- Vite as build tool
- Tailwind CSS 4 (with `@theme` directive)
- React Router DOM for routing
- FontAwesome for icons

## Features

### 1. Theme System
- Light/dark mode toggle
- System preference detection
- localStorage persistence for user preference
- Smooth color transitions between themes

### 2. Responsive Navigation
- Sticky header with logo and navigation links
- Desktop: horizontal nav with theme toggle
- Mobile: hamburger menu that opens a full-screen overlay
- Smooth scroll to sections when clicking nav links
- Body scroll lock when mobile menu is open

### 3. Page Sections
- **Hero Section**: Brand tagline, description, CTA button, and hero image
- **About Section**: Brand story and mission
- **Products Section**: Grid of 3 featured perfumes with images and descriptions
- **Testimonials Section**: Customer reviews with star ratings
- **CTA Section**: WhatsApp contact call-to-action
- **Footer**: Contact info, social media links, copyright

### 4. Animations
- Scroll-triggered animations using Intersection Observer
- Animation types: fade-in, fade-in-up, slide-in-left/right, scale-in, bounce-in
- Staggered delays for grid items
- Hover effects on cards and buttons

### 5. Component Architecture

```
src/
  components/
    layout/
      Header.tsx          # Sticky navbar + mobile hamburger + theme toggle
      Footer.tsx          # Contact info + social links
      Layout.tsx          # Wrapper with Header/Footer
      MobileMenu.tsx      # Full-screen mobile navigation overlay
    sections/
      HeroSection.tsx
      AboutSection.tsx
      ProductsSection.tsx
      TestimonialsSection.tsx
      CTASection.tsx
    ui/
      Button.tsx          # Primary/secondary/ghost variants
      ProductCard.tsx     # Product display with hover effects
      TestimonialCard.tsx # Review with star rating
      ThemeToggle.tsx     # Sun/moon icon toggle
      AnimatedSection.tsx # Intersection observer wrapper
  hooks/
    useTheme.ts
    useMobileMenu.ts
    useScrollTo.ts
    useIntersectionObserver.ts
  types/
    index.ts
  constants/
    products.ts
    testimonials.ts
    navigation.ts
    contact.ts
  contexts/
    ThemeContext.tsx
  pages/
    HomePage.tsx
  App.tsx
  main.tsx
  index.css
```

## Design Specifications

### Color Palette
- Pastel Pink: `#f8e1e7` (primary background)
- Pastel Purple: `#9b59b6` (accent/brand color)
- Pastel Blue: `#a8d8ea` (secondary accent)
- Pastel Green: `#a8e6cf` (highlight)
- Pastel Yellow: `#ffeaa7` (accent)
- Dark Background: `#1a1a2e`
- Dark Surface: `#16213e`

### Typography
- Font Family: Inter (Google Fonts)
- Headings: Bold/Extrabold
- Body: Regular weight

### Spacing & Layout
- Mobile-first responsive design
- Container max-width for content sections
- Consistent padding: `px-6 md:px-8`, `py-12 md:py-16`

## Content Data

### Products (3 items)
```typescript
{
  id: string;
  name: string;        // e.g., "Aurora Bliss", "Velvet Night", "Citrus Muse"
  description: string; // Indonesian description
  image: string;       // Unsplash perfume images
}
```

### Testimonials (3 items)
```typescript
{
  id: string;
  name: string;
  review: string;
  rating: number; // 1-5
}
```

### Navigation Links
- Home (#home)
- Products (#products)
- About Us (#about)
- Contact (#contact)

### Contact Info
- Email: macscents@email.com
- Phone: +62 812-3456-7890
- WhatsApp: wa.me/6281234567890
- Instagram: @macscents
- Facebook: /macscents

## Technical Requirements

### Tailwind CSS 4 Configuration
Use the `@theme` directive in `index.css` for custom colors and animations:

```css
@import "tailwindcss";

@theme {
  --color-pastel-pink: #f8e1e7;
  --color-pastel-purple: #9b59b6;
  /* ... more colors */

  --animate-fade-in-up: fade-in-up 0.6s ease-out forwards;
  /* ... more animations */

  @keyframes fade-in-up {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
}
```

### Dark Mode Implementation
- Add `dark` class to `<html>` element via ThemeContext
- Use CSS selectors: `.dark .bg-white { background-color: var(--color-dark-surface); }`
- Tailwind dark variant classes: `dark:bg-dark-surface`, `dark:text-pastel-blue`

### Animation Strategy
- Pure CSS keyframes (no external animation library)
- Intersection Observer hook for scroll detection
- `freezeOnceVisible` option to prevent re-animation
- Animation delay utilities for staggered effects

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Focus visible states
- Keyboard navigation support (Escape to close mobile menu)

## Deliverables
1. Fully functional React application
2. All components properly typed with TypeScript
3. Responsive design (mobile, tablet, desktop)
4. Working dark mode toggle with persistence
5. Smooth scroll animations
6. Mobile hamburger menu with overlay
7. WhatsApp integration for CTAs
8. Build passes without errors (`npm run build`)

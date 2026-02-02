# MacScents - Perfume Landing Page

A modern, responsive perfume landing page built with **React**, **Vite**, and **TypeScript**, integrated with **Contentful CMS** for dynamic product management. Designed using the **AIDA** (Attention, Interest, Desire, Action) marketing framework to maximize conversions.

## 🌟 Key Features

### 1. 🧠 AIDA Copywriting Framework
The website flow is psychologically engineered for sales:
- **Attention**: Captivating Hero Section with a clear value proposition.
- **Interest**: "Why Us" section highlighting unique selling points (Long Lasting, Premium Quality).
- **Desire**: Dynamic Product Showcase displaying real-time data from Contentful.
- **Action**: Strong Call-to-Actions (CTAs) directing users to purchase via WhatsApp.

### 2. 🎨 Design & UI/UX
- **Modern Aesthetic**: Clean, pastel-themed design (Green/Purple) suitable for a premium fragrance brand.
- **Responsive Layout**: Fully optimized for Mobile, Tablet, and Desktop.
- **Dark Mode Support**: Seamless theme switching for better user experience.
- **Animations**: Smooth scroll-reveal animations using CSS and custom hooks.

### 3. 🛍️ Dynamic E-commerce Engine
- **Contentful Integration**: Products are fetched in real-time from Contentful CMS. No hardcoded data.
- **WhatsApp Integration**: Direct-to-consumer sales model. Clicking "Buy" opens a pre-filled WhatsApp message.
- **Rich Media**: High-quality product imagery and dynamic price formatting (IDR).

---

## 🏗️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Contentful (Headless CMS)
- **Icons**: FontAwesome
- **State Management**: React Hooks (useState, useEffect, Custom Hooks)

---

## 🚀 Getting Started

Follow these steps to set up the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/macscents.git
cd macscents
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env` file in the root directory and add your Contentful credentials:
```env
VITE_CONTENTFUL_SPACE_ID=your_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=your_access_token
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

---

## 🗃️ Contentful Data Model

To make the dynamic fetching work, create a Content Type in Contentful with the ID **`macscents`** and the following fields:

| Field Name | Field ID | Type | Description |
|------------|----------|------|-------------|
| Name | `name` | Text | Product Name |
| Description | `description` | Rich Text | Product Description |
| Image | `imageUrl` | Text (Url) | URL to the product image |
| Price | `price` | Number | Price in IDR (numeric) |
| Category | `category` | Text | E.g., Floral, Woody, Fresh |
| Featured | `featured` | Text | "yes" or "no" (for highlighting) |

---

## 📱 Page Structure

1. **Hero Section**: Eyecatching headline and primary CTA.
2. **About Section**: Brand story and values.
3. **Products Section**: Dynamic grid of perfumes fetched from Contentful.
4. **Testimonials**: Social proof to build trust.
5. **CTA Section**: Final push for conversion.
6. **Footer**: Quick links and social media.

---

## 📞 Contact & Support

- **WhatsApp**: [Chat with us](https://wa.me/6281234567890)
- **Email**: macscents@email.com
- **Instagram**: [@macscents](https://instagram.com/macscents)

---

© 2026 MacScents. All rights reserved.

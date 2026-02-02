export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price?: string;
  category?: string;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  review: string;
  rating: number;
  avatar?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
}

export interface SocialLink {
  id: string;
  platform: 'instagram' | 'facebook' | 'whatsapp' | 'twitter';
  url: string;
  label: string;
}

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

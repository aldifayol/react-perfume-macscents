import type { ContactInfo, SocialLink } from '../types';

export const contactInfo: ContactInfo = {
  email: 'macscents@email.com',
  phone: '+62 812-3456-7890',
  whatsapp: '6281234567890',
  instagram: 'https://instagram.com/macscents',
  facebook: 'https://facebook.com/macscents',
};

export const socialLinks: SocialLink[] = [
  {
    id: 'instagram',
    platform: 'instagram',
    url: 'https://instagram.com/macscents',
    label: 'Follow us on Instagram',
  },
  {
    id: 'facebook',
    platform: 'facebook',
    url: 'https://facebook.com/macscents',
    label: 'Like us on Facebook',
  },
  {
    id: 'whatsapp',
    platform: 'whatsapp',
    url: 'https://wa.me/6281234567890',
    label: 'Chat with us on WhatsApp',
  },
];

export const whatsappOrderLink = 'https://wa.me/6281234567890';

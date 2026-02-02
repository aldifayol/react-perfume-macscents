import { createClient } from 'contentful';
import type { Product } from '../types';

const space = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({
  space: space || '',
  accessToken: accessToken || '',
});

// Define types that match the actual API response structure
interface RichTextContent {
  data: any;
  content: any[];
  nodeType: string;
}

interface ContentfulProductFields {
  name: string;
  description: RichTextContent | string; // Can be rich text or fall back to string
  imageUrl: string;
  price: number; // API returns number (e.g., 1750000)
  category?: string;
  featured?: 'yes' | 'no' | boolean; // API returns string "yes"/"no", handling fallback
}

// Simple helper to extract text from Contentful Rich Text
const extractTextFromRichText = (document: RichTextContent): string => {
  if (!document || !document.content) return '';

  return document.content
    .map(block => {
      if (block.nodeType === 'paragraph') {
        return block.content
          .map((textNode: any) => textNode.value || '')
          .join('');
      }
      return '';
    })
    .filter(text => text.trim() !== '')
    .join(' ');
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(price);
};

// Helper to capitalize first letter
const capitalizeFirstLetter = (string: string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getProducts = async (): Promise<Product[]> => {
  if (!space || !accessToken) {
    console.error('Contentful credentials are missing');
    return [];
  }

  try {
    const response = await client.getEntries({
      content_type: 'macscents',
    });

    return response.items.map((item) => {
      const fields = item.fields as unknown as ContentfulProductFields;

      // Handle description: check if it's an object (rich text) or string
      let description = '';
      if (typeof fields.description === 'string') {
        description = fields.description;
      } else if (fields.description && fields.description.nodeType === 'document') {
        description = extractTextFromRichText(fields.description);
      }

      // Handle featured: map "yes"/"no" string to boolean
      const isFeatured = fields.featured === 'yes' || fields.featured === true;

      return {
        id: item.sys.id,
        name: capitalizeFirstLetter(fields.name),
        description: description,
        image: fields.imageUrl,
        price: fields.price ? formatPrice(fields.price) : undefined, // Format number to currency string
        rawValue: fields.price, // Store raw numeric value for logic ops
        category: fields.category ? capitalizeFirstLetter(fields.category) : undefined,
        featured: isFeatured,
      };
    });
  } catch (error) {
    console.error('Error fetching products from Contentful:', error);
    throw error;
  }
};

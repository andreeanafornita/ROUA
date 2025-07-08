import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity configuration
export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Use false for dynamic content
});

// Image URL builder pentru optimizarea imaginilor
const builder = imageUrlBuilder(sanityClient);

export const urlFor = (source: any) => builder.image(source);

// Types pentru Sanity
export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface SanityDocument {
  _id: string;
  _type: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
}

// Content types
export interface Service extends SanityDocument {
  title: string;
  slug: { current: string };
  description: string;
  content: any; // Rich text content
  featuredImage: SanityImage;
  gallery: SanityImage[];
  features: string[];
  pricing: {
    title: string;
    price: string;
    features: string[];
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Event extends SanityDocument {
  title: string;
  slug: { current: string };
  eventType: 'wedding' | 'baptism' | 'corporate' | 'private';
  description: string;
  content: any;
  featuredImage: SanityImage;
  gallery: SanityImage[];
  date: string;
  location: string;
  testimonial?: {
    name: string;
    message: string;
    image: SanityImage;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Article extends SanityDocument {
  title: string;
  slug: { current: string };
  excerpt: string;
  content: any;
  featuredImage: SanityImage;
  author: {
    name: string;
    image: SanityImage;
  };
  category: {
    title: string;
    slug: { current: string };
  };
  tags: string[];
  publishedAt: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Room extends SanityDocument {
  title: string;
  slug: { current: string };
  description: string;
  capacity: number;
  features: string[];
  images: SanityImage[];
  price: string;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Testimonial extends SanityDocument {
  name: string;
  message: string;
  image: SanityImage;
  rating: number;
  eventType: string;
  date: string;
}

export interface HomePage extends SanityDocument {
  hero: {
    title: string;
    subtitle: string;
    backgroundImage: SanityImage;
    ctaText: string;
    ctaLink: string;
  };
  sections: {
    _type: string;
    title: string;
    content: any;
    image?: SanityImage;
    images?: SanityImage[];
    items?: any[];
  }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
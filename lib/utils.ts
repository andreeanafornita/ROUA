import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date utility
export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Truncate text utility
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

// Generate schema.org structured data
export const generateStructuredData = (type: string, data: any) => {
  const baseSchema = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
  
  return JSON.stringify(baseSchema);
};

// SEO metadata generator
export const generateMetadata = (
  title: string,
  description: string,
  keywords: string[] = [],
  image?: string,
  url?: string
) => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rouaevents.ro';
  
  return {
    title,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title,
      description,
      url: url ? `${siteUrl}${url}` : siteUrl,
      images: image ? [{ url: image }] : [],
      type: 'website',
      locale: 'ro_RO',
      siteName: 'Roua Events'
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : []
    },
    alternates: {
      canonical: url ? `${siteUrl}${url}` : siteUrl
    }
  };
};
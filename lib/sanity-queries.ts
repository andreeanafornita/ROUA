import { sanityClient } from './sanity';

// Homepage query
export const getHomePage = async () => {
  const query = `
    *[_type == "homePage"][0] {
      _id,
      hero {
        title,
        subtitle,
        backgroundImage {
          asset->{
            _id,
            url
          },
          alt
        },
        ctaText,
        ctaLink
      },
      sections[] {
        _type,
        title,
        content,
        image {
          asset->{
            _id,
            url
          },
          alt
        },
        images[] {
          asset->{
            _id,
            url
          },
          alt
        },
        items[]
      },
      seo {
        title,
        description,
        keywords
      }
    }
  `;
  
  return await sanityClient.fetch(query);
};

// Services queries
export const getServices = async () => {
  const query = `
    *[_type == "service"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      description,
      featuredImage {
        asset->{
          _id,
          url
        },
        alt
      },
      features,
      pricing[] {
        title,
        price,
        features
      }
    }
  `;
  
  return await sanityClient.fetch(query);
};

export const getService = async (slug: string) => {
  const query = `
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      description,
      content,
      featuredImage {
        asset->{
          _id,
          url
        },
        alt
      },
      gallery[] {
        asset->{
          _id,
          url
        },
        alt
      },
      features,
      pricing[] {
        title,
        price,
        features
      },
      seo {
        title,
        description,
        keywords
      }
    }
  `;
  
  return await sanityClient.fetch(query, { slug });
};

// Events queries
export const getEvents = async (eventType?: string) => {
  const typeFilter = eventType ? `&& eventType == "${eventType}"` : '';
  const query = `
    *[_type == "event" ${typeFilter}] | order(date desc) {
      _id,
      title,
      slug,
      eventType,
      description,
      featuredImage {
        asset->{
          _id,
          url
        },
        alt
      },
      date,
      location,
      testimonial {
        name,
        message,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      }
    }
  `;
  
  return await sanityClient.fetch(query);
};

export const getEvent = async (slug: string) => {
  const query = `
    *[_type == "event" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      eventType,
      description,
      content,
      featuredImage {
        asset->{
          _id,
          url
        },
        alt
      },
      gallery[] {
        asset->{
          _id,
          url
        },
        alt
      },
      date,
      location,
      testimonial {
        name,
        message,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      },
      seo {
        title,
        description,
        keywords
      }
    }
  `;
  
  return await sanityClient.fetch(query, { slug });
};

// Articles queries
export const getArticles = async (limit?: number) => {
  const limitClause = limit ? `[0...${limit}]` : '';
  const query = `
    *[_type == "article"] | order(publishedAt desc) ${limitClause} {
      _id,
      title,
      slug,
      excerpt,
      featuredImage {
        asset->{
          _id,
          url
        },
        alt
      },
      author {
        name,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      },
      category {
        title,
        slug
      },
      tags,
      publishedAt
    }
  `;
  
  return await sanityClient.fetch(query);
};

export const getArticle = async (slug: string) => {
  const query = `
    *[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      featuredImage {
        asset->{
          _id,
          url
        },
        alt
      },
      author {
        name,
        image {
          asset->{
            _id,
            url
          },
          alt
        }
      },
      category {
        title,
        slug
      },
      tags,
      publishedAt,
      seo {
        title,
        description,
        keywords
      }
    }
  `;
  
  return await sanityClient.fetch(query, { slug });
};

// Rooms queries
export const getRooms = async () => {
  const query = `
    *[_type == "room"] | order(capacity asc) {
      _id,
      title,
      slug,
      description,
      capacity,
      features,
      images[] {
        asset->{
          _id,
          url
        },
        alt
      },
      price
    }
  `;
  
  return await sanityClient.fetch(query);
};

// Testimonials query
export const getTestimonials = async (limit?: number) => {
  const limitClause = limit ? `[0...${limit}]` : '';
  const query = `
    *[_type == "testimonial"] | order(date desc) ${limitClause} {
      _id,
      name,
      message,
      image {
        asset->{
          _id,
          url
        },
        alt
      },
      rating,
      eventType,
      date
    }
  `;
  
  return await sanityClient.fetch(query);
};
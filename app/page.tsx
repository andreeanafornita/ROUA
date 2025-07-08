import { Suspense } from 'react';
import { Hero } from '@/components/sections/hero';
import { ServicesOverview } from '@/components/sections/services-overview';
import { Testimonials } from '@/components/sections/testimonials';
import { GalleryPreview } from '@/components/sections/gallery-preview';
import { ContactCTA } from '@/components/sections/contact-cta';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { getHomePage, getServices, getTestimonials } from '@/lib/sanity-queries';
import { generateMetadata as generateMetadataUtil } from '@/lib/utils';

export async function generateMetadata() {
  const homepage = await getHomePage();
  
  return generateMetadataUtil(
    homepage?.seo?.title || 'Roua Events - Evenimente Memorabile în Brașov',
    homepage?.seo?.description || 'Roua Events organizează evenimente memorabile în Brașov. Servicii complete pentru nunți, botezuri, evenimente corporate și private.',
    homepage?.seo?.keywords || ['evenimente Brașov', 'nunți Brașov', 'restaurant Brașov'],
    undefined,
    '/'
  );
}

export default async function HomePage() {
  const [homepage, services, testimonials] = await Promise.all([
    getHomePage(),
    getServices(),
    getTestimonials(6)
  ]);

  // Mock gallery images for demo
  const galleryImages = [
    { asset: { url: 'https://images.pexels.com/photos/265909/pexels-photo-265909.jpeg' } },
    { asset: { url: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg' } },
    { asset: { url: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg' } },
    { asset: { url: 'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg' } },
    { asset: { url: 'https://images.pexels.com/photos/1395964/pexels-photo-1395964.jpeg' } },
    { asset: { url: 'https://images.pexels.com/photos/1024992/pexels-photo-1024992.jpeg' } },
    { asset: { url: 'https://images.pexels.com/photos/1395965/pexels-photo-1395965.jpeg' } },
    { asset: { url: 'https://images.pexels.com/photos/1024995/pexels-photo-1024995.jpeg' } },
  ];

  return (
    <>
      <Suspense fallback={<LoadingSpinner className="min-h-screen" />}>
        <Hero
          title={homepage?.hero?.title || 'Evenimente Memorabile cu Roua Events'}
          subtitle={homepage?.hero?.subtitle || 'Creăm momente magice pentru cele mai importante evenimente din viața ta'}
          backgroundImage={homepage?.hero?.backgroundImage?.asset?.url || 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg'}
          ctaText={homepage?.hero?.ctaText || 'Solicită Ofertă'}
          ctaLink={homepage?.hero?.ctaLink || '/contact'}
        />
      </Suspense>

      <Suspense fallback={<LoadingSpinner className="py-20" />}>
        <ServicesOverview services={services || []} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner className="py-20" />}>
        <Testimonials testimonials={testimonials || []} />
      </Suspense>

      <Suspense fallback={<LoadingSpinner className="py-20" />}>
        <GalleryPreview images={galleryImages} />
      </Suspense>

      <ContactCTA />
    </>
  );
}
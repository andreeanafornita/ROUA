import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { getService } from '@/lib/sanity-queries';
import { generateMetadata as generateMeta } from '@/lib/utils';
import { ArrowRight, Check, Star, Phone, Mail } from 'lucide-react';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);
  
  if (!service) {
    return {
      title: 'Serviciu Negăsit - Roua Events'
    };
  }

  return generateMeta(
    service.seo?.title || service.title,
    service.seo?.description || service.description,
    service.seo?.keywords || [],
    service.featuredImage?.asset?.url,
    `/servicii/${params.slug}`
  );
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.featuredImage.asset.url}
            alt={service.featuredImage.alt || service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900 font-playfair">
                Caracteristici Principale
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-6 w-6 text-gold-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-navy-900 font-playfair">
                Pachete și Prețuri
              </h2>
              <div className="space-y-4">
                {service.pricing?.map((pkg, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-navy-900">{pkg.title}</h3>
                        <span className="text-2xl font-bold text-gold-600">{pkg.price}</span>
                      </div>
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <Check className="h-4 w-4 text-gold-600 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {service.gallery && service.gallery.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-navy-900 font-playfair">
              Galeria Serviciului
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {service.gallery.map((image, index) => (
                <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                  <Image
                    src={image.asset.url}
                    alt={image.alt || `${service.title} ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 font-playfair">
            Gata să Comenzi?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru a discuta despre nevoile tale și a primi o ofertă personalizată.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gold-600 hover:bg-gold-700">
              <Link href="/contact">
                Solicită Ofertă
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
              <Link href="tel:+40123456789">
                <Phone className="mr-2 h-5 w-5" />
                Sună Acum
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
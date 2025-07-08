import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { getServices } from '@/lib/sanity-queries';
import { generateMetadata } from '@/lib/utils';
import { ArrowRight, Star, Check } from 'lucide-react';

export async function generateMetadata() {
  return generateMetadata(
    'Servicii - Roua Events',
    'Descoperă gama completă de servicii oferite de Roua Events: restaurant, hotel, organizare evenimente, catering și multe altele.',
    ['servicii evenimente', 'restaurant Brașov', 'hotel Brașov', 'catering', 'organizare nunți'],
    undefined,
    '/servicii'
  );
}

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-navy-900 to-navy-800">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-playfair">
              Serviciile Noastre
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Oferim servicii complete pentru a face evenimentul tău perfect și memorabil
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <Suspense fallback={<LoadingSpinner className="py-20" />}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services?.map((service, index) => (
                <Card key={service._id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/2 relative h-64 md:h-auto">
                      <Image
                        src={service.featuredImage.asset.url}
                        alt={service.featuredImage.alt || service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <h3 className="text-2xl font-bold mb-4 text-navy-900 font-playfair">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-navy-900">Caracteristici:</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center text-gray-600">
                              <Check className="h-4 w-4 text-gold-600 mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button asChild className="w-full bg-gold-600 hover:bg-gold-700">
                        <Link href={`/servicii/${service.slug.current}`}>
                          Află Mai Mult
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Suspense>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-navy-900 font-playfair">
              De Ce Să Ne Alegi?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiența noastră și atenția la detalii fac diferența în organizarea evenimentelor tale.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🏆',
                title: 'Experiență de 15+ ani',
                description: 'Am organizat peste 1000 de evenimente de succes'
              },
              {
                icon: '⭐',
                title: 'Calitate Premium',
                description: 'Folosim doar ingrediente și materiale de cea mai bună calitate'
              },
              {
                icon: '🎯',
                title: 'Personalizare Completă',
                description: 'Fiecare eveniment este adaptat perfect dorințelor tale'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-navy-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
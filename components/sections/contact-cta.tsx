'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gold-600 to-gold-700">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
            Gata să Începem?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Contactează-ne astăzi pentru a discuta despre evenimentul tău și să primești o ofertă personalizată.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-white text-gold-700 hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <Link href="/contact">
                Solicită Ofertă
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gold-700 px-8 py-4 text-lg"
            >
              <Link href="tel:+40123456789">
                <Phone className="mr-2 h-5 w-5" />
                Sună Acum
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+40 123 456 789</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>contact@rouaevents.ro</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
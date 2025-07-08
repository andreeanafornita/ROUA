import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Roua Events</h3>
            <p className="text-gray-300 mb-4">
              Creăm evenimente memorabile cu atenție la detalii și un serviciu excepțional.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-gold-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicii</h4>
            <ul className="space-y-2">
              <li><Link href="/servicii/restaurant" className="text-gray-300 hover:text-gold-400 transition-colors">Restaurant</Link></li>
              <li><Link href="/servicii/hotel" className="text-gray-300 hover:text-gold-400 transition-colors">Hotel</Link></li>
              <li><Link href="/servicii/evenimente" className="text-gray-300 hover:text-gold-400 transition-colors">Evenimente</Link></li>
              <li><Link href="/servicii/catering" className="text-gray-300 hover:text-gold-400 transition-colors">Catering</Link></li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Evenimente</h4>
            <ul className="space-y-2">
              <li><Link href="/evenimente/nunti" className="text-gray-300 hover:text-gold-400 transition-colors">Nunți</Link></li>
              <li><Link href="/evenimente/botezuri" className="text-gray-300 hover:text-gold-400 transition-colors">Botezuri</Link></li>
              <li><Link href="/evenimente/corporate" className="text-gray-300 hover:text-gold-400 transition-colors">Corporate</Link></li>
              <li><Link href="/evenimente/private" className="text-gray-300 hover:text-gold-400 transition-colors">Evenimente Private</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-400" />
                <span className="text-gray-300">+40 123 456 789</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-400" />
                <span className="text-gray-300">contact@rouaevents.ro</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gold-400" />
                <span className="text-gray-300">Brașov, România</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Roua Events. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};
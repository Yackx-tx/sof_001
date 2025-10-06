import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Sprout } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-accent p-2 rounded-lg">
                <Sprout className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold">Seeds of the Future</span>
            </div>
            <p className="text-gray-300 mb-4">
              Empowering youth, helping the needy, and strengthening communities across Rwanda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/chapters" className="text-gray-300 hover:text-accent transition-colors">Our Chapters</Link></li>
              <li><Link to="/programs" className="text-gray-300 hover:text-accent transition-colors">Programs</Link></li>
              <li><Link to="/events" className="text-gray-300 hover:text-accent transition-colors">Events</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/get-involved" className="text-gray-300 hover:text-accent transition-colors">Volunteer</Link></li>
              <li><Link to="/get-involved" className="text-gray-300 hover:text-accent transition-colors">Donate</Link></li>
              <li><Link to="/news" className="text-gray-300 hover:text-accent transition-colors">News & Updates</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-gray-300">Kigali, Rwanda</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <a href="mailto:info@seedsofthefuture.rw" className="text-gray-300 hover:text-accent transition-colors">
                  info@seedsofthefuture.rw
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <a href="tel:+250788000000" className="text-gray-300 hover:text-accent transition-colors">
                  +250 788 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Seeds of the Future. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

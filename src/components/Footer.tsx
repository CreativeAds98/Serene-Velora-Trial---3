import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tour Packages', path: '/tour-packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-[#09221E] text-white py-10 border-t border-[#133F39]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Logo on Left */}
          <div className="flex items-center">
            <Link to="/" className="inline-block py-1">
              <img
                src="/assets/logo.png"
                alt="Serene Velora Holidays"
                className="h-16 sm:h-20 w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-[13px] tracking-wide text-white/80 hover:text-[#B68D40] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Location on Right */}
          <div className="flex items-center gap-3.5 border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-8 text-left">
            <div className="w-8 h-8 rounded-full bg-[#133F39] flex items-center justify-center text-[#B68D40] flex-shrink-0">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-white/90">Coimbatore, Tamil Nadu, India</p>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#B68D40] font-semibold mt-0.5">
                YOUR JOURNEY BEGINS HERE
              </p>
            </div>
          </div>

        </div>

        {/* Bottom subtle copyright */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-2">
          <p>© {new Date().getFullYear()} Serene Velora Holidays. All rights reserved.</p>
          <p>Curated holiday planning from Coimbatore to the world.</p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenPlanModal: (destination?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlanModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tour Packages', path: '/tour-packages' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5]/70 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[80px] sm:min-h-[96px] py-2">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1">
            <img
              src="/assets/logo.png"
              alt="Serene Velora Holidays"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform group-hover:scale-105 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[14px] font-medium tracking-wide transition-all duration-200 pb-1 relative ${
                    isActive
                      ? 'text-[#0D3832] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#B68D40]'
                      : 'text-[#4A5754] hover:text-[#0D3832]'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => onOpenPlanModal()}
              className="inline-flex items-center gap-2 bg-[#0D3832] hover:bg-[#144C44] text-white px-5 py-2.5 rounded-md text-[13.5px] font-medium tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.99]"
            >
              <span>Plan My Holiday</span>
              <ArrowRight className="w-4 h-4 text-white/90" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0D3832] hover:text-[#B68D40] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D5] px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium rounded-md ${
                  isActive
                    ? 'text-[#0D3832] font-semibold bg-[#E8E2D5]/40 border-l-4 border-[#B68D40]'
                    : 'text-[#4A5754] hover:text-[#0D3832] hover:bg-white'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-[#0D3832] text-white py-3 rounded-md text-sm font-medium tracking-wide"
            >
              <span>Plan My Holiday</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

import React, { useState } from 'react';
import { 
  ArrowRight, LayoutGrid, Landmark, Globe, Heart, Users, ChevronDown, Bed, Compass, Headphones 
} from 'lucide-react';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface TourPackagesPageProps {
  onOpenPlanModal: (destination?: string) => void;
}

export const TourPackagesPage: React.FC<TourPackagesPageProps> = ({ onOpenPlanModal }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'india' | 'international' | 'honeymoon' | 'family'>('all');
  const [selectedDestination, setSelectedDestination] = useState('');

  const packages = [
    {
      id: 'kerala-backwater-escape',
      category: 'INDIA',
      type: 'india',
      honeymoon: true,
      family: true,
      destinationName: 'Kerala',
      title: 'Kerala Backwater Escape',
      description: 'Unwind beside tranquil waters and lush green landscapes.',
      tags: ['Backwaters', 'Nature', 'Relaxation'],
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      badge: 'Kerala',
      badgeSub: 'BACKWATERS • NATURE • TIMELESS BEAUTY',
      imageLeft: true,
    },
    {
      id: 'bali-island-discovery',
      category: 'INTERNATIONAL',
      type: 'international',
      honeymoon: true,
      family: false,
      destinationName: 'Bali',
      title: 'Bali Island Discovery',
      description: 'A beautiful blend of culture, coastline and island living.',
      tags: ['Culture', 'Beaches', 'Scenic stays'],
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
      badge: 'Bali',
      badgeSub: 'CULTURE • COASTLINE • ISLAND LIVING',
      imageLeft: false,
    },
    {
      id: 'maldives-island-retreat',
      category: 'INTERNATIONAL',
      type: 'international',
      honeymoon: true,
      family: false,
      destinationName: 'Maldives',
      title: 'Maldives Island Retreat',
      description: 'Slow days, crystal waters and space to reconnect.',
      tags: ['Island stay', 'Beach', 'Honeymoon'],
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
      badge: 'Maldives',
      badgeSub: 'ISLAND STAYS • CRYSTAL WATERS • PURE ESCAPE',
      imageLeft: true,
    },
    {
      id: 'dubai-city-desert',
      category: 'INTERNATIONAL',
      type: 'international',
      honeymoon: false,
      family: true,
      destinationName: 'Dubai',
      title: 'Dubai City & Desert',
      description: 'Discover vibrant city life and unforgettable desert scenery.',
      tags: ['City', 'Desert', 'Family'],
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
      badge: 'Dubai',
      badgeSub: 'ICONIC CITY • DESERT ADVENTURES • ENDLESS POSSIBILITIES',
      imageLeft: false,
    },
  ];

  const filteredPackages = packages.filter((pkg) => {
    if (selectedDestination && pkg.destinationName.toLowerCase() !== selectedDestination.toLowerCase()) {
      return false;
    }
    if (activeFilter === 'all') return true;
    if (activeFilter === 'india') return pkg.type === 'india';
    if (activeFilter === 'international') return pkg.type === 'international';
    if (activeFilter === 'honeymoon') return pkg.honeymoon;
    if (activeFilter === 'family') return pkg.family;
    return true;
  });

  return (
    <div className="bg-[#FAF8F5] text-[#1C2826]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B68D40]">
                  CURATED TOUR PACKAGES
                </span>
                <span className="h-[1px] w-10 bg-[#B68D40]"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal text-[#1C2826] leading-[1.12]">
                Beautiful places<br />
                <span className="italic font-serif text-[#B68D40]">Thoughtfully planned</span>
              </h1>

              <p className="text-[16px] sm:text-[17px] text-[#4A5754] leading-relaxed max-w-md">
                Discover inspiring holiday ideas, shaped around you.
              </p>

              <div className="pt-2">
                <a
                  href="#featured-packages"
                  className="inline-flex items-center gap-3 bg-[#0D3832] hover:bg-[#144C44] text-white px-7 py-3.5 rounded-md text-[14px] font-medium tracking-wide transition-all shadow-sm hover:shadow"
                >
                  <span>Explore Tour Packages</span>
                  <ArrowRight className="w-4 h-4 text-white/90" />
                </a>
              </div>

              {/* Tagline */}
              <div className="pt-6 flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-[#7A8784] font-medium">
                <span>DISCOVER</span>
                <span className="w-1 h-1 rounded-full bg-[#B68D40]"></span>
                <span className="text-[#B68D40] text-xs">🪶</span>
                <span className="w-1 h-1 rounded-full bg-[#B68D40]"></span>
                <span>EXPLORE</span>
                <span className="w-1 h-1 rounded-full bg-[#B68D40]"></span>
                <span>BELONG</span>
              </div>
            </div>

            {/* Right Visual: Maldives + Dubai Card */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11] sm:aspect-[16/10] bg-[#E8E2D5]">
                <img
                  src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1600&q=85"
                  alt="Maldives turquoise sea and water villas"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 right-6 text-right text-white">
                  <span className="font-script text-3xl sm:text-4xl text-white block">
                    Maldives
                  </span>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/90 font-medium">
                    CRYSTAL WATERS, ENDLESS HORIZONS
                  </p>
                </div>
              </div>

              {/* Floating Inset Card: Dubai */}
              <div className="absolute -bottom-8 -left-4 sm:left-6 w-[220px] sm:w-[260px] rounded-xl overflow-hidden shadow-2xl border-2 border-white bg-black">
                <div className="relative aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
                    alt="Dubai skyline"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="font-script text-2xl text-white block leading-tight">
                      Dubai
                    </span>
                    <p className="text-[8.5px] tracking-[0.16em] uppercase text-white/90 font-medium">
                      MODERN WONDERS, TIMELESS EXPERIENCES
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. FILTER BAR */}
      <section className="relative z-20 -mt-2 mb-16 sm:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-[#E8E2D5] shadow-md p-3 sm:p-4 flex flex-col lg:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-2 sm:gap-6 w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0">
              <button
                onClick={() => { setActiveFilter('all'); setSelectedDestination(''); }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold tracking-wide transition whitespace-nowrap ${
                  activeFilter === 'all'
                    ? 'bg-[#FAF5EA] text-[#0D3832] border border-[#B68D40]/30'
                    : 'text-[#525C5A] hover:text-[#0D3832]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>All Holidays</span>
              </button>

              <button
                onClick={() => { setActiveFilter('india'); setSelectedDestination(''); }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold tracking-wide transition whitespace-nowrap ${
                  activeFilter === 'india'
                    ? 'bg-[#FAF5EA] text-[#0D3832] border border-[#B68D40]/30'
                    : 'text-[#525C5A] hover:text-[#0D3832]'
                }`}
              >
                <Landmark className="w-3.5 h-3.5" />
                <span>India</span>
              </button>

              <button
                onClick={() => { setActiveFilter('international'); setSelectedDestination(''); }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold tracking-wide transition whitespace-nowrap ${
                  activeFilter === 'international'
                    ? 'bg-[#FAF5EA] text-[#0D3832] border border-[#B68D40]/30'
                    : 'text-[#525C5A] hover:text-[#0D3832]'
                }`}
              >
                <Globe className="w-3.5 h-3.5" />
                <span>International</span>
              </button>

              <button
                onClick={() => { setActiveFilter('honeymoon'); setSelectedDestination(''); }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold tracking-wide transition whitespace-nowrap ${
                  activeFilter === 'honeymoon'
                    ? 'bg-[#FAF5EA] text-[#0D3832] border border-[#B68D40]/30'
                    : 'text-[#525C5A] hover:text-[#0D3832]'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Honeymoon</span>
              </button>

              <button
                onClick={() => { setActiveFilter('family'); setSelectedDestination(''); }}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-md text-xs font-semibold tracking-wide transition whitespace-nowrap ${
                  activeFilter === 'family'
                    ? 'bg-[#FAF5EA] text-[#0D3832] border border-[#B68D40]/30'
                    : 'text-[#525C5A] hover:text-[#0D3832]'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Family</span>
              </button>
            </div>

            {/* Destination Dropdown */}
            <div className="w-full lg:w-72 flex items-center justify-between px-3.5 py-2 rounded-md border border-[#E8E2D5] bg-[#FAF8F5]/60 text-xs">
              <span className="text-[#525C5A]">Destination:</span>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="bg-transparent border-none text-[#1C2826] font-medium focus:outline-none focus:ring-0 text-xs cursor-pointer ml-2"
              >
                <option value="">Where do you want to go?</option>
                <option value="Kerala">Kerala</option>
                <option value="Bali">Bali</option>
                <option value="Maldives">Maldives</option>
                <option value="Dubai">Dubai</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-[#7A8784]" />
            </div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED TOUR PACKAGES */}
      <section id="featured-packages" className="py-8 sm:py-14 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  FEATURED TOUR PACKAGES
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1C2826] leading-tight">
                Choose your <span className="italic font-serif text-[#B68D40]">next chapter.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 text-[15px] sm:text-[16px] text-[#4A5754] leading-relaxed">
              <p>
                From serene backwaters to vibrant cities, our tour packages are thoughtfully designed to give you meaningful travel experiences.
              </p>
            </div>
          </div>

          {/* Alternating Package Rows */}
          <div className="space-y-12 sm:space-y-16">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E2D5] shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Image Component */}
                <div className={`lg:col-span-6 ${pkg.imageLeft ? 'order-1' : 'order-1 lg:order-2'}`}>
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] shadow-md group">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-5 left-5 text-white">
                      <span className="font-script text-3xl sm:text-4xl text-white block">
                        {pkg.badge}
                      </span>
                      <p className="text-[10px] tracking-[0.2em] uppercase text-white/90 font-medium mt-0.5">
                        {pkg.badgeSub}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Component */}
                <div className={`lg:col-span-6 space-y-5 ${pkg.imageLeft ? 'order-2' : 'order-2 lg:order-1'}`}>
                  
                  {/* Category Pill */}
                  <div className="flex items-center gap-2">
                    <span className="h-[1px] w-6 bg-[#B68D40]"></span>
                    <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B68D40]">
                      {pkg.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-serif font-normal text-[#1C2826] leading-snug">
                    {pkg.title}
                  </h3>

                  <p className="text-[15px] text-[#4A5754] leading-relaxed">
                    {pkg.description}
                  </p>

                  {/* Pills */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {pkg.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded border border-[#E5D7BE] bg-[#FAF5EA] text-[#69542E]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <button
                      onClick={() => onOpenPlanModal(pkg.title)}
                      className="inline-flex items-center gap-2 bg-[#0D3832] hover:bg-[#144C44] text-white px-5 py-2.5 rounded-md text-[13.5px] font-medium tracking-wide transition shadow-sm"
                    >
                      <span>Request a Quote</span>
                      <ArrowRight className="w-4 h-4 text-white/90" />
                    </button>

                    <button
                      onClick={() => onOpenPlanModal(pkg.title)}
                      className="inline-flex items-center gap-2 border border-[#B68D40] text-[#B68D40] hover:bg-[#B68D40] hover:text-white px-5 py-2.5 rounded-md text-[13.5px] font-medium tracking-wide transition"
                    >
                      <span>View Itinerary</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. WHY TRAVEL WITH US (Dark Teal Section) */}
      <section className="bg-[#0D3832] text-white py-16 sm:py-20 my-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <div className="inline-flex items-center gap-2.5">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                WHY TRAVEL WITH US
              </span>
              <span className="h-[1px] w-8 bg-[#B68D40]"></span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-white">
              Made for your <span className="italic font-serif text-[#B68D40]">kind of holiday.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Card 1 */}
            <div className="text-center px-4 space-y-3">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40]">
                <Bed className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Handpicked stays
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Carefully selected properties for comfort and authentic experiences.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center px-4 space-y-3">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40]">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Thoughtful itineraries
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                Well-planned journeys that balance iconic sights with meaningful moments.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center px-4 space-y-3">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40]">
                <Headphones className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Personal support
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                A dedicated team with you from planning to your return journey.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PRE-FOOTER BANNER */}
      <PreFooterBanner
        titlePrimary="Have a different"
        titleSecondary="journey in mind?"
        description="Let us create a holiday around your interests."
        buttonText="Create My Holiday"
        onButtonClick={() => onOpenPlanModal()}
      />

    </div>
  );
};

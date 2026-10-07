import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Search, MapPin, Calendar, Users, ChevronDown 
} from 'lucide-react';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface HomePageProps {
  onOpenPlanModal: (destination?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenPlanModal }) => {
  const navigate = useNavigate();

  // Quick Search Bar state
  const [destination, setDestination] = useState('');
  const [travelMonth, setTravelMonth] = useState('');
  const [travellers, setTravellers] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination) {
      navigate(`/destinations?search=${encodeURIComponent(destination)}`);
    } else {
      navigate('/tour-packages');
    }
  };

  return (
    <div className="bg-[#FAF8F5] text-[#1C2826]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Overline with line */}
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B68D40]">
                  CURATED HOLIDAYS FROM COIMBATORE
                </span>
                <span className="h-[1px] w-10 bg-[#B68D40]/80"></span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal text-[#1C2826] leading-[1.12] tracking-tight">
                Some journeys<br />
                <span className="italic font-serif text-[#B68D40]">stay with you.</span>
              </h1>

              {/* Subtitles */}
              <div className="space-y-1 text-[16px] sm:text-[17px] text-[#4A5754] font-normal leading-relaxed">
                <p>Thoughtfully planned escapes.</p>
                <p>Beautifully lived moments.</p>
              </div>

              {/* Action Button */}
              <div className="pt-2">
                <Link
                  to="/tour-packages"
                  className="inline-flex items-center gap-3 bg-[#0D3832] hover:bg-[#144C44] text-white px-7 py-3.5 rounded-md text-[14px] font-medium tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.98]"
                >
                  <span>Explore Holidays</span>
                  <ArrowRight className="w-4 h-4 text-white/90" />
                </Link>
              </div>

              {/* Brand Tagline */}
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

            {/* Right Visual Column (Phuket hero + Kerala inset card) */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11] sm:aspect-[16/10] bg-[#E8E2D5]">
                {/* Main Image: Phuket Thailand */}
                <img
                  src="https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1600&q=85"
                  alt="Phuket Thailand karst limestone island and turquoise sea"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay Text: Experiences Beyond Boundaries */}
                <div className="absolute top-6 right-6 text-right select-none pointer-events-none drop-shadow-md">
                  <span className="font-script text-white text-3xl sm:text-4xl lg:text-5xl tracking-wide block rotate-[-4deg] leading-none text-shadow">
                    Experiences<br />Beyond<br />Boundaries
                  </span>
                </div>

                {/* Bottom Label: PHUKET, THAILAND */}
                <div className="absolute bottom-6 right-6 select-none pointer-events-none">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-white/95 uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
                    PHUKET, THAILAND
                  </span>
                </div>
              </div>

              {/* Floating Inset Card: Kerala Houseboat */}
              <div className="absolute -bottom-8 -left-4 sm:left-6 w-[220px] sm:w-[260px] rounded-xl overflow-hidden shadow-2xl border-2 border-white bg-black/90 transform hover:scale-[1.02] transition-transform">
                <div className="relative aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
                    alt="Kerala Houseboat on Backwaters"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="font-script text-2xl text-white block leading-tight">
                      Kerala
                    </span>
                    <p className="text-[8.5px] tracking-[0.16em] uppercase text-white/90 font-medium">
                      A SLOWER KINDER WAY TO TRAVEL
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. QUICK SEARCH / BOOKING BAR */}
      <section className="relative z-20 -mt-2 mb-16 sm:mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <form 
            onSubmit={handleSearchSubmit}
            className="bg-white rounded-xl border border-[#E8E2D5] shadow-md p-3 sm:p-4 grid grid-cols-1 md:grid-cols-4 gap-3 sm:gap-4 items-center"
          >
            {/* Destination */}
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-[#E8E2D5]">
              <MapPin className="w-5 h-5 text-[#B68D40] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider">
                  Destination
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full text-xs text-[#525C5A] bg-transparent border-none focus:outline-none focus:ring-0 p-0 cursor-pointer"
                >
                  <option value="">Where do you want to go?</option>
                  <option value="Kerala">Kerala, India</option>
                  <option value="Bali">Bali, Indonesia</option>
                  <option value="Switzerland">Swiss Alps, Switzerland</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Dubai">Dubai, UAE</option>
                  <option value="Thailand">Thailand</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-[#7A8784]" />
            </div>

            {/* Travel Month */}
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-[#E8E2D5]">
              <Calendar className="w-5 h-5 text-[#B68D40] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider">
                  Travel Month
                </label>
                <select
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  className="w-full text-xs text-[#525C5A] bg-transparent border-none focus:outline-none focus:ring-0 p-0 cursor-pointer"
                >
                  <option value="">When are you planning?</option>
                  <option value="October">October 2026</option>
                  <option value="November">November 2026</option>
                  <option value="December">December 2026</option>
                  <option value="January">January 2027</option>
                  <option value="Summer">Summer 2027</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-[#7A8784]" />
            </div>

            {/* Travellers */}
            <div className="flex items-center gap-3 px-3 py-2 border-b md:border-b-0 md:border-r border-[#E8E2D5]">
              <Users className="w-5 h-5 text-[#B68D40] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider">
                  Travellers
                </label>
                <select
                  value={travellers}
                  onChange={(e) => setTravellers(e.target.value)}
                  className="w-full text-xs text-[#525C5A] bg-transparent border-none focus:outline-none focus:ring-0 p-0 cursor-pointer"
                >
                  <option value="">How many are travelling?</option>
                  <option value="1">1 Solo Explorer</option>
                  <option value="2">2 Travellers (Couple)</option>
                  <option value="3-5">3 - 5 (Family / Group)</option>
                  <option value="6+">6+ (Large Group)</option>
                </select>
              </div>
              <ChevronDown className="w-4 h-4 text-[#7A8784]" />
            </div>

            {/* Find My Escape Button */}
            <div className="px-2">
              <button
                type="submit"
                className="w-full bg-[#0D3832] hover:bg-[#144C44] text-white py-3 px-4 rounded-md text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition shadow-sm hover:shadow"
              >
                <Search className="w-4 h-4" />
                <span>Find My Escape</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 3. ICONIC DESTINATIONS */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  ICONIC DESTINATIONS
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1C2826] leading-tight">
                Where will your <span className="italic font-serif text-[#B68D40]">story begin?</span>
              </h2>
              <p className="text-[15px] text-[#4A5754] mt-3 leading-relaxed">
                From tropical shores to snow-capped peaks, we craft journeys that stay with you long after you return.
              </p>
            </div>
            
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 border border-[#B68D40] text-[#B68D40] hover:bg-[#B68D40] hover:text-white px-5 py-2.5 rounded-md text-[13.5px] font-medium tracking-wide transition-all self-start md:self-end"
            >
              <span>Explore All Destinations</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* 3 Vertical Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Bali */}
            <div 
              onClick={() => navigate('/destinations')}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#E8E2D5] shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80"
                  alt="Bali, Indonesia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-serif text-[#1C2826] font-medium">Bali, Indonesia</h3>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#7A8784] font-semibold mt-1">
                  TEMPLES, BEACHES & TIMELESS BEAUTY
                </p>
              </div>
            </div>

            {/* Swiss Alps */}
            <div 
              onClick={() => navigate('/destinations')}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#E8E2D5] shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80"
                  alt="Swiss Alps, Switzerland"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-serif text-[#1C2826] font-medium">Swiss Alps, Switzerland</h3>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#7A8784] font-semibold mt-1">
                  BREATHTAKING VIEWS, A BRIGHTER YOU
                </p>
              </div>
            </div>

            {/* Kerala */}
            <div 
              onClick={() => navigate('/destinations')}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#E8E2D5] shadow-sm hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/5] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80"
                  alt="Kerala, India"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-center">
                <h3 className="text-xl font-serif text-[#1C2826] font-medium">Kerala, India</h3>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#7A8784] font-semibold mt-1">
                  BACKWATERS, CULTURE & CALM HORIZONS
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. SIGNATURE JOURNEYS (Teal Banner Section) */}
      <section className="bg-[#0D3832] text-white py-16 sm:py-20 relative overflow-hidden my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Sri Lanka Nine Arch Bridge Train Photo */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl relative aspect-[16/10] sm:aspect-[16/9]">
                <img
                  src="https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=1400&q=80"
                  alt="Sri Lanka scenic blue train crossing Nine Arch Bridge"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="font-script text-3xl sm:text-4xl text-white block">
                    Sri Lanka
                  </span>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/90 font-medium">
                    SCENIC ROUTES • BRIGHTER STORIES
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Signature Journeys text & CTA */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  SIGNATURE JOURNEYS
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal leading-tight">
                A little closer to<br />
                <span className="italic font-serif text-[#B68D40]">extraordinary.</span>
              </h2>

              <p className="text-[15px] text-white/80 leading-relaxed max-w-md">
                Tailored journeys, handpicked experiences and destinations that inspire a deeper you.
              </p>

              <div className="pt-2">
                <Link
                  to="/tour-packages"
                  className="inline-flex items-center gap-2.5 bg-transparent border border-[#B68D40] text-white hover:bg-[#B68D40] px-6 py-3 rounded-md text-[13.5px] font-medium tracking-wide transition-all"
                >
                  <span>Discover Our Journeys</span>
                  <ArrowRight className="w-4 h-4 text-[#B68D40] group-hover:text-white" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CURATED HOLIDAYS */}
      <section className="py-14 sm:py-18">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-2">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  CURATED HOLIDAYS
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1C2826]">
                Handpicked escapes<br />
                <span className="italic font-serif text-[#B68D40]">for unforgettable moments.</span>
              </h2>
            </div>

            <Link
              to="/tour-packages"
              className="text-[12px] font-semibold tracking-[0.18em] uppercase text-[#B68D40] hover:text-[#0D3832] inline-flex items-center gap-1.5 transition pb-1"
            >
              <span>VIEW ALL PACKAGES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* 2 Wide Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Maldives */}
            <div 
              onClick={() => onOpenPlanModal('Maldives')}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md relative aspect-[16/10] bg-black"
            >
              <img
                src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80"
                alt="Maldives Island Retreat"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-script text-3xl sm:text-4xl text-white block">
                    Maldives
                  </span>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/90 font-medium mt-1">
                    CRYSTAL WATERS, PEACEFUL DAYS
                  </p>
                </div>

                <span className="text-[12px] font-medium text-white/90 group-hover:text-[#B68D40] inline-flex items-center gap-1 transition">
                  <span>View Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

            {/* Dubai */}
            <div 
              onClick={() => onOpenPlanModal('Dubai')}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md relative aspect-[16/10] bg-black"
            >
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80"
                alt="Dubai Skyline Sunset"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-script text-3xl sm:text-4xl text-white block">
                    Dubai
                  </span>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-white/90 font-medium mt-1">
                    MODERN WONDERS, ENDLESS EXPERIENCES
                  </p>
                </div>

                <span className="text-[12px] font-medium text-white/90 group-hover:text-[#B68D40] inline-flex items-center gap-1 transition">
                  <span>View Itinerary</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. PRE-FOOTER BANNER */}
      <PreFooterBanner
        titlePrimary="Your next chapter"
        titleSecondary="starts here."
        description="Let us plan a holiday that feels made for you. From Coimbatore to the world, we're with you at every step."
        buttonText="Plan My Holiday"
        onButtonClick={() => onOpenPlanModal()}
      />

    </div>
  );
};

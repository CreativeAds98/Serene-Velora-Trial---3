import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  ArrowRight, Search, Palmtree, Mountain, Landmark, Users 
} from 'lucide-react';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface DestinationsPageProps {
  onOpenPlanModal: (destination?: string) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({ onOpenPlanModal }) => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [activeTab, setActiveTab] = useState<'All' | 'India' | 'International'>('All');
  const [searchQuery, setSearchQuery] = useState(initialSearch);

  const destinations = [
    {
      id: 'kerala',
      name: 'Kerala',
      subtitle: 'BACKWATERS & SLOW ESCAPES',
      type: 'India',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'bali',
      name: 'Bali',
      subtitle: 'ISLANDS & CULTURE',
      type: 'International',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'switzerland',
      name: 'Switzerland',
      subtitle: 'ALPINE VIEWS & SCENIC JOURNEYS',
      type: 'International',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'dubai',
      name: 'Dubai',
      subtitle: 'CITY LIGHTS & DESERT ADVENTURES',
      type: 'International',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'thailand',
      name: 'Thailand',
      subtitle: 'BEACHES & VIBRANT DISCOVERIES',
      type: 'International',
      image: 'https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?auto=format&fit=crop&w=1000&q=80',
    },
    {
      id: 'maldives',
      name: 'Maldives',
      subtitle: 'TURQUOISE WATERS & ISLAND STAYS',
      type: 'International',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80',
    },
  ];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesTab = activeTab === 'All' || dest.type === activeTab;
    const matchesQuery = 
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <div className="bg-[#FAF8F5] text-[#1C2826]">
      
      {/* 1. HERO SECTION WITH PANORAMIC ALPINE BACKDROP */}
      <section className="relative min-h-[480px] lg:min-h-[520px] flex items-center overflow-hidden">
        {/* Scenic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2200&q=85"
            alt="Scenic Swiss Alps mountain and lake landscape"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
          <div className="max-w-xl space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B68D40]">
                DESTINATIONS
              </span>
              <span className="h-[1px] w-10 bg-[#B68D40]"></span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-serif font-normal text-white leading-[1.12]">
              Find your<br />
              somewhere<br />
              <span className="italic font-serif text-[#B68D40]">extraordinary.</span>
            </h1>

            <p className="text-[16px] sm:text-[17px] text-white/85 leading-relaxed pt-2">
              Breathtaking places, meaningful journeys and experiences that stay with you.
            </p>
          </div>
        </div>
      </section>

      {/* 2. FILTER & SEARCH BAR */}
      <section className="relative z-20 -mt-6 sm:-mt-8 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl border border-[#E8E2D5] shadow-md p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Filter Tabs */}
            <div className="flex items-center space-x-6 sm:space-x-8 px-2 w-full md:w-auto overflow-x-auto">
              {(['All', 'India', 'International'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-[13.5px] font-medium tracking-wide pb-1.5 transition whitespace-nowrap relative ${
                    activeTab === tab
                      ? 'text-[#0D3832] font-semibold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#B68D40]'
                      : 'text-[#525C5A] hover:text-[#0D3832]'
                  }`}
                >
                  {tab === 'All' ? 'All Destinations' : tab}
                </button>
              ))}
            </div>

            {/* Search Input + Button */}
            <div className="flex items-center gap-2 w-full md:w-auto flex-1 max-w-xl md:justify-end">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-[#7A8784] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search destinations, countries or experiences..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-md border border-[#E8E2D5] text-xs text-[#1C2826] bg-[#FAF8F5]/60 focus:bg-white focus:outline-none focus:border-[#B68D40] transition"
                />
              </div>

              <button
                onClick={() => {}}
                className="bg-[#0D3832] hover:bg-[#144C44] text-white px-5 py-2.5 rounded-md text-xs font-medium tracking-wide transition shadow-sm whitespace-nowrap"
              >
                Find My Escape
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CURATED DESTINATIONS GRID */}
      <section className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-12">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                CURATED DESTINATIONS
              </span>
              <span className="h-[1px] w-8 bg-[#B68D40]"></span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1C2826]">
              A world of <span className="italic font-serif text-[#B68D40]">beautiful possibilities.</span>
            </h2>
            <p className="text-[15px] text-[#4A5754] mt-2 max-w-2xl leading-relaxed">
              From iconic landmarks to hidden gems, explore destinations that inspire, renew and stay with you long after you return.
            </p>
          </div>

          {/* 6 Grid Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <div
                key={dest.id}
                onClick={() => onOpenPlanModal(dest.name)}
                className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-[#E8E2D5] shadow-sm hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="aspect-[16/11] overflow-hidden relative">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-medium text-[#1C2826]">
                    {dest.name}
                  </h3>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#7A8784] font-semibold mt-1">
                    {dest.subtitle}
                  </p>
                  
                  <div className="mt-5 pt-3 border-t border-[#F0EBE0] flex items-center gap-2 text-xs font-semibold text-[#B68D40] group-hover:text-[#0D3832] transition">
                    <span>Explore {dest.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TRAVEL YOUR WAY (Dark Teal Section) */}
      <section className="bg-[#0D3832] text-white py-16 sm:py-20 my-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2.5 mb-2">
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
              TRAVEL YOUR WAY
            </span>
            <span className="h-[1px] w-8 bg-[#B68D40]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-white">
            Travel the way <span className="italic font-serif text-[#B68D40]">you love.</span>
          </h2>

          <p className="text-[15px] text-white/80 mt-2 max-w-lg mx-auto leading-relaxed">
            Meaningful escapes for every kind of traveller.
          </p>

          {/* 4 Category Icons */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mt-14">
            
            {/* 1. Beach */}
            <div className="space-y-3 px-2 group cursor-pointer" onClick={() => onOpenPlanModal('Beach Escapes')}>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40] group-hover:border-[#B68D40] group-hover:scale-105 transition">
                <Palmtree className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Beach Escapes
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/60 font-medium">
                SUN, SAND & SERENITY
              </p>
            </div>

            {/* 2. Mountain */}
            <div className="space-y-3 px-2 group cursor-pointer" onClick={() => onOpenPlanModal('Mountain Retreats')}>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40] group-hover:border-[#B68D40] group-hover:scale-105 transition">
                <Mountain className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Mountain Retreats
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/60 font-medium">
                NATURE, PEACE & PERSPECTIVE
              </p>
            </div>

            {/* 3. Cultural */}
            <div className="space-y-3 px-2 group cursor-pointer" onClick={() => onOpenPlanModal('Cultural Journeys')}>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40] group-hover:border-[#B68D40] group-hover:scale-105 transition">
                <Landmark className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Cultural Journeys
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/60 font-medium">
                PEOPLE, PLACES & HERITAGE
              </p>
            </div>

            {/* 4. Family */}
            <div className="space-y-3 px-2 group cursor-pointer" onClick={() => onOpenPlanModal('Family Holidays')}>
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40] group-hover:border-[#B68D40] group-hover:scale-105 transition">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Family Holidays
              </h3>
              <p className="text-[10px] tracking-[0.2em] uppercase text-white/60 font-medium">
                TOGETHER, FURTHER
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PRE-FOOTER BANNER */}
      <PreFooterBanner
        titlePrimary="Can't choose your"
        titleSecondary="next escape?"
        description="Tell us what you love. We will help shape the journey."
        buttonText="Plan My Holiday"
        onButtonClick={() => onOpenPlanModal()}
      />

    </div>
  );
};

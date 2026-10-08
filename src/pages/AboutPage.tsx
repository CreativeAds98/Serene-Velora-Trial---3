import React from 'react';
import { 
  User, Compass, Headphones, MessageSquare, FileText, Send 
} from 'lucide-react';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface AboutPageProps {
  onOpenPlanModal: (destination?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenPlanModal }) => {
  return (
    <div className="bg-[#FAF8F5] text-[#1C2826]">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#B68D40]">
                  ABOUT SERENE VELORA
                </span>
                <span className="h-[1px] w-10 bg-[#B68D40]"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal text-[#1C2826] leading-[1.12]">
                Every journey<br />
                begins with a<br />
                <span className="italic font-serif text-[#B68D40]">little wonder</span>
              </h1>

              <p className="text-[16px] sm:text-[17px] text-[#4A5754] leading-relaxed max-w-md">
                We create thoughtfully planned holidays that turn travel dreams into beautifully lived moments.
              </p>
            </div>

            {/* Right Visual (Couple over bay + Inset Coimbatore Card) */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11] sm:aspect-[16/10] bg-[#E8E2D5]">
                <img
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=85"
                  alt="Couple sitting on scenic viewpoint overlooking tropical islands and sea"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Inset Card: Based in Coimbatore */}
              <div className="absolute -bottom-6 right-2 sm:right-6 w-[200px] sm:w-[240px] rounded-xl overflow-hidden shadow-2xl border-2 border-white bg-black">
                <div className="relative aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80"
                    alt="Coimbatore hills and tea landscape"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="font-script text-2xl text-white block leading-tight">
                      Based in Coimbatore
                    </span>
                    <p className="text-[8.5px] tracking-[0.18em] uppercase text-white/90 font-medium">
                      INSPIRED BY THE WORLD.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. THOUGHTFUL TRAVEL. LASTING MEMORIES. */}
      <section className="py-14 sm:py-20 border-t border-[#E8E2D5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Text Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-start">
            <div className="lg:col-span-6">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1C2826] leading-tight">
                Thoughtful travel.<br />
                <span className="italic font-serif text-[#B68D40]">Lasting memories.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 space-y-4 text-[15px] sm:text-[16px] text-[#4A5754] leading-relaxed">
              <p>
                We bring together beautiful destinations, carefully planned itineraries and personal attention to help you travel with confidence.
              </p>
              <p>
                Whether it's a serene beach, a charming mountain town or a vibrant new culture, we craft journeys that stay with you long after you return.
              </p>
            </div>
          </div>

          {/* 2 Featured Destinations Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Kerala, India */}
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[16/10] group">
              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
                alt="Kerala India backwaters"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="font-script text-3xl sm:text-4xl text-white block">
                  Kerala, India
                </span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/90 font-medium mt-1">
                  BACKWATERS, CULTURE AND CALM HORIZONS
                </p>
              </div>
            </div>

            {/* Swiss Alps, Switzerland */}
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[16/10] group">
              <img
                src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80"
                alt="Swiss Alps Switzerland alpine village"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <span className="font-script text-3xl sm:text-4xl text-white block">
                  Swiss Alps, Switzerland
                </span>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/90 font-medium mt-1">
                  BREATHTAKING VIEWS, A BRIGHTER YOU
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. OUR APPROACH (Dark Teal Section) */}
      <section className="bg-[#0D3832] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  OUR APPROACH
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal leading-tight">
                The details make<br />
                <span className="italic font-serif text-[#B68D40]">the difference.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 text-[15px] sm:text-[16px] text-white/80 leading-relaxed">
              <p>
                From the first conversation to the moment you return home, we focus on what truly matters — meaningful experiences, seamless planning and a journey that feels uniquely yours.
              </p>
            </div>
          </div>

          {/* 3 Feature Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            
            {/* Feature 1 */}
            <div className="text-center px-4 space-y-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40]">
                <User className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Personalized planning
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We take the time to understand your interests and create itineraries that suit your style of travel.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center px-4 space-y-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40]">
                <Compass className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Handpicked experiences
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                We curate stays, activities and destinations that offer authenticity, comfort and lasting memories.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center px-4 space-y-4">
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mx-auto text-[#B68D40]">
                <Headphones className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-serif font-medium text-white">
                Support along the way
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                From planning to travel and beyond, we're here to make your journey smooth and worry-free.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-end">
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  HOW IT WORKS
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-[#1C2826] leading-tight">
                From your first idea<br />
                to your <span className="italic font-serif text-[#B68D40]">final memory.</span>
              </h2>
            </div>
            <div className="lg:col-span-6 text-[15px] sm:text-[16px] text-[#4A5754] leading-relaxed">
              <p>
                Planning a holiday should feel exciting, not overwhelming. We keep it simple, personal and stress-free.
              </p>
            </div>
          </div>

          {/* 3 Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
            
            {/* Step 1 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-[#B68D40] tracking-widest border border-[#B68D40] rounded-full w-8 h-8 flex items-center justify-center">
                  01
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FAF5EA] flex items-center justify-center text-[#B68D40]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div className="hidden md:block flex-1 h-[1px] bg-[#E8E2D5]"></div>
              </div>
              <h3 className="text-xl font-serif font-medium text-[#1C2826]">
                Tell us your dream
              </h3>
              <p className="text-sm text-[#4A5754] leading-relaxed">
                Share your travel ideas, preferences and the kind of experiences you love.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-[#B68D40] tracking-widest border border-[#B68D40] rounded-full w-8 h-8 flex items-center justify-center">
                  02
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FAF5EA] flex items-center justify-center text-[#B68D40]">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="hidden md:block flex-1 h-[1px] bg-[#E8E2D5]"></div>
              </div>
              <h3 className="text-xl font-serif font-medium text-[#1C2826]">
                Shape your itinerary
              </h3>
              <p className="text-sm text-[#4A5754] leading-relaxed">
                We design a personalized plan with handpicked destinations, stays and experiences.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-xs font-semibold text-[#B68D40] tracking-widest border border-[#B68D40] rounded-full w-8 h-8 flex items-center justify-center">
                  03
                </span>
                <div className="w-10 h-10 rounded-full bg-[#FAF5EA] flex items-center justify-center text-[#B68D40]">
                  <Send className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-serif font-medium text-[#1C2826]">
                Enjoy the journey
              </h3>
              <p className="text-sm text-[#4A5754] leading-relaxed">
                Sit back, travel with confidence and create memories that last a lifetime.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. PRE-FOOTER BANNER */}
      <PreFooterBanner
        overline="YOUR NEXT JOURNEY"
        titlePrimary="Let us plan"
        titleSecondary="something wonderful."
        description="From Coimbatore to the world, we're with you at every step."
        buttonText="Plan My Holiday"
        onButtonClick={() => onOpenPlanModal()}
      />

    </div>
  );
};

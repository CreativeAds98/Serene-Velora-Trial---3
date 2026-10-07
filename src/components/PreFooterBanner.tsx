import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PreFooterBannerProps {
  overline?: string;
  titlePrimary: string;
  titleSecondary: string;
  description: string;
  buttonText?: string;
  onButtonClick: () => void;
}

export const PreFooterBanner: React.FC<PreFooterBannerProps> = ({
  overline,
  titlePrimary,
  titleSecondary,
  description,
  buttonText = 'Plan My Holiday',
  onButtonClick,
}) => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden bg-[#EAE2D3]">
      {/* Background Mountain Atmosphere Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80"
          alt="Scenic mountain panorama"
          className="w-full h-full object-cover object-bottom opacity-40 mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/90 via-[#FAF8F5]/80 to-[#FAF8F5]/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-white/70 backdrop-blur-sm border border-[#E8E2D5] rounded-xl p-8 sm:p-10 shadow-sm">
          
          {/* Left Title */}
          <div className="max-w-xl">
            {overline && (
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  {overline}
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif text-[#1C2826] leading-tight font-normal">
              {titlePrimary}{' '}
              <span className="italic font-serif text-[#B68D40] block sm:inline">
                {titleSecondary}
              </span>
            </h2>
          </div>

          {/* Right Subtitle & CTA Button */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 border-t sm:border-t-0 sm:border-l border-[#DCD3C3] pt-6 sm:pt-0 sm:pl-8">
            <p className="text-[14px] text-[#4A5754] max-w-xs leading-relaxed">
              {description}
            </p>
            <button
              onClick={onButtonClick}
              className="inline-flex items-center gap-2.5 bg-[#0D3832] hover:bg-[#144C44] text-white px-6 py-3 rounded-md text-[13.5px] font-medium tracking-wide transition-all shadow-sm hover:shadow active:scale-[0.98] whitespace-nowrap"
            >
              <span>{buttonText}</span>
              <ArrowRight className="w-4 h-4 text-white/90" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

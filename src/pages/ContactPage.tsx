import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, ArrowRight, ChevronDown, CheckCircle, Send, Globe 
} from 'lucide-react';
import { PreFooterBanner } from '../components/PreFooterBanner';

interface ContactPageProps {
  onOpenPlanModal: (destination?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenPlanModal }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: '',
    travelMonth: '',
    travellers: '',
    ideas: '',
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Can you customize my holiday?',
      a: 'Share your preferences and we can shape a holiday around your interests.',
    },
    {
      q: 'Can I enquire before choosing a destination?',
      a: 'Absolutely! If you are not sure where you would like to go, tell us about what you enjoy — tranquil beaches, misty hills, vibrant culture or wildlife — and our travel team will suggest the perfect journeys.',
    },
    {
      q: 'Do you plan family and honeymoon holidays?',
      a: 'Yes, we curate both family-focused itineraries with comfortable pacing and romantic honeymoon retreats with intimate stays and private experiences.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

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
                  GET IN TOUCH
                </span>
                <span className="h-[1px] w-10 bg-[#B68D40]"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-normal text-[#1C2826] leading-[1.12]">
                Let's turn your<br />
                <span className="italic font-serif text-[#B68D40]">travel dreams</span><br />
                <span className="italic font-serif text-[#B68D40]">into plans</span>
              </h1>

              <p className="text-[16px] sm:text-[17px] text-[#4A5754] leading-relaxed max-w-md">
                Share your ideas. We will help create a journey that feels like you.
              </p>

              <div className="pt-2">
                <a
                  href="#contact-form-section"
                  className="inline-flex items-center gap-3 bg-[#0D3832] hover:bg-[#144C44] text-white px-7 py-3.5 rounded-md text-[14px] font-medium tracking-wide transition-all shadow-sm hover:shadow"
                >
                  <span>Plan My Holiday</span>
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

            {/* Right Visual: Beach + Inset Kerala Card */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[16/11] sm:aspect-[16/10] bg-[#E8E2D5]">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85"
                  alt="Tropical palm beach and crystal blue waters"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Script: More Journeys, Brighter Stories */}
                <div className="absolute top-6 right-6 text-right select-none pointer-events-none drop-shadow-md">
                  <span className="font-script text-[#1C2826] text-3xl sm:text-4xl lg:text-5xl tracking-wide block rotate-[-4deg] leading-none">
                    More<br />Journeys<br />Brighter<br />Stories
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 text-right">
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.25em] text-white/95 uppercase bg-black/30 backdrop-blur-sm px-3 py-1 rounded">
                    KERALA, INDIA
                  </span>
                </div>
              </div>

              {/* Floating Inset Card: Kerala */}
              <div className="absolute -bottom-8 -left-4 sm:left-6 w-[220px] sm:w-[260px] rounded-xl overflow-hidden shadow-2xl border-2 border-white bg-black">
                <div className="relative aspect-[16/10]">
                  <img
                    src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80"
                    alt="Kerala Backwaters"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="font-script text-2xl text-white block leading-tight">
                      Kerala
                    </span>
                    <p className="text-[8.5px] tracking-[0.16em] uppercase text-white/90 font-medium">
                      BACKWATERS, CALM HORIZONS, TIMELESS MOMENTS
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. SPLIT CONTACT SECTION (Dark Teal info card + Cream Enquiry form) */}
      <section id="contact-form-section" className="py-12 sm:py-16 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-lg border border-[#E8E2D5]">
            
            {/* Left Column: Dark Teal Container */}
            <div className="lg:col-span-5 bg-[#0D3832] text-white p-8 sm:p-12 flex flex-col justify-between">
              
              <div className="space-y-8">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                      CONTACT SERENE VELORA
                    </span>
                    <span className="h-[1px] w-6 bg-[#B68D40]"></span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif font-normal leading-tight">
                    Your journey<br />
                    starts with<br />
                    <span className="italic font-serif text-[#B68D40]">a conversation.</span>
                  </h2>

                  <p className="text-sm text-white/80 mt-4 leading-relaxed">
                    We are here to plan, personalise and create meaningful travel experiences, just for you.
                  </p>
                </div>

                {/* Contact List */}
                <div className="space-y-6 pt-2">
                  
                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#13443D] flex items-center justify-center text-[#B68D40] flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Coimbatore, Tamil Nadu, India</p>
                      <p className="text-[10px] tracking-[0.18em] uppercase text-[#B68D40] font-semibold mt-0.5">
                        OUR HOME BASE
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#13443D] flex items-center justify-center text-[#B68D40] flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Call our travel team</p>
                      <p className="text-xs text-white/60 mt-0.5">
                        Contact details to be added
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-full bg-[#13443D] flex items-center justify-center text-[#B68D40] flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">Email us</p>
                      <p className="text-xs text-white/60 mt-0.5">
                        Contact details to be added
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Bottom Image: Tea Hills */}
              <div className="mt-12 pt-6 border-t border-white/10">
                <div className="rounded-xl overflow-hidden relative aspect-[16/9] shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=80"
                    alt="Scenic hills"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="font-script text-2xl text-white block leading-tight">
                      From Coimbatore<br />to the World
                    </span>
                    <p className="text-[9px] tracking-[0.18em] uppercase text-white/80 font-medium mt-1">
                      CURATED JOURNEYS FOR EVERY EXPLORER
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-12">
              
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10.5px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                    SEND US A MESSAGE
                  </span>
                  <span className="h-[1px] w-6 bg-[#B68D40]"></span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1C2826]">
                  Tell us about <span className="italic font-serif text-[#B68D40]">your holiday.</span>
                </h2>

                <p className="text-sm text-[#4A5754] mt-2 leading-relaxed">
                  Fill in a few details and we'll get back to you with personalised suggestions for your perfect trip.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-[#0D3832]/10 text-[#0D3832] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="w-10 h-10 text-[#0D3832]" />
                  </div>
                  <h3 className="text-2xl font-serif text-[#1C2826]">Thank You, {formData.fullName || 'Traveller'}!</h3>
                  <p className="text-sm text-[#4A5754] max-w-md mx-auto leading-relaxed">
                    We have received your holiday enquiry. Our travel advisors in Coimbatore will get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-[#0D3832] text-white px-6 py-2.5 rounded-md text-xs font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C2826] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-[#E8E2D5] bg-[#FAF8F5]/50 text-sm text-[#1C2826] focus:bg-white focus:outline-none focus:border-[#B68D40] transition"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2826] uppercase tracking-wider mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-[#E8E2D5] bg-[#FAF8F5]/50 text-sm text-[#1C2826] focus:bg-white focus:outline-none focus:border-[#B68D40] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2826] uppercase tracking-wider mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-[#E8E2D5] bg-[#FAF8F5]/50 text-sm text-[#1C2826] focus:bg-white focus:outline-none focus:border-[#B68D40] transition"
                      />
                    </div>
                  </div>

                  {/* Destination & Travel Month */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2826] uppercase tracking-wider mb-1.5">
                        Preferred Destination
                      </label>
                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-[#E8E2D5] bg-[#FAF8F5]/50 text-sm text-[#1C2826] focus:bg-white focus:outline-none focus:border-[#B68D40] transition cursor-pointer"
                      >
                        <option value="">Select a destination</option>
                        <option value="Kerala">Kerala</option>
                        <option value="Bali">Bali</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Other">Other / Multiple</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#1C2826] uppercase tracking-wider mb-1.5">
                        Travel Month
                      </label>
                      <select
                        value={formData.travelMonth}
                        onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-md border border-[#E8E2D5] bg-[#FAF8F5]/50 text-sm text-[#1C2826] focus:bg-white focus:outline-none focus:border-[#B68D40] transition cursor-pointer"
                      >
                        <option value="">Select a month</option>
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                  </div>

                  {/* Travellers */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C2826] uppercase tracking-wider mb-1.5">
                      Number of Travellers
                    </label>
                    <select
                      value={formData.travellers}
                      onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-[#E8E2D5] bg-[#FAF8F5]/50 text-sm text-[#1C2826] focus:bg-white focus:outline-none focus:border-[#B68D40] transition cursor-pointer"
                    >
                      <option value="">Select number of travellers</option>
                      <option value="1">1 Solo Traveller</option>
                      <option value="2">2 Travellers (Couple / Honeymoon)</option>
                      <option value="3-5">3 - 5 Travellers (Family / Friends)</option>
                      <option value="6+">6+ Travellers (Group)</option>
                    </select>
                  </div>

                  {/* Holiday Ideas */}
                  <div>
                    <label className="block text-xs font-semibold text-[#1C2826] uppercase tracking-wider mb-1.5">
                      Your Holiday Ideas <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your travel ideas, interests or any special requests..."
                      value={formData.ideas}
                      onChange={(e) => setFormData({ ...formData, ideas: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-[#E8E2D5] bg-[#FAF8F5]/50 text-sm text-[#1C2826] focus:bg-white focus:outline-none focus:border-[#B68D40] transition resize-none"
                    ></textarea>
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-center gap-2 pt-1">
                    <input
                      type="checkbox"
                      id="contact-agree"
                      checked={formData.agreed}
                      onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                      className="rounded border-[#E8E2D5] text-[#0D3832] focus:ring-[#B68D40]"
                    />
                    <label htmlFor="contact-agree" className="text-xs text-[#525C5A]">
                      I agree to be contacted about my holiday enquiry.
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2.5 bg-[#0D3832] hover:bg-[#144C44] text-white px-7 py-3 rounded-md text-sm font-medium tracking-wide transition shadow-sm active:scale-[0.98]"
                    >
                      <span>{submitting ? 'Sending...' : 'Send Enquiry'}</span>
                      <ArrowRight className="w-4 h-4 text-white/90" />
                    </button>
                    <p className="text-xs text-[#7A8784] mt-3">
                      We will be in touch to discuss your plans.
                    </p>
                  </div>
                </form>
              )}

            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR LOCATION */}
      <section className="py-14 sm:py-20 border-t border-[#E8E2D5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Text */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  OUR LOCATION
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1C2826] leading-tight">
                Based in Coimbatore.<br />
                <span className="italic font-serif text-[#B68D40]">Planning journeys worldwide.</span>
              </h2>

              <p className="text-[15px] text-[#4A5754] leading-relaxed pt-2">
                While our home is in Coimbatore, Tamil Nadu, we craft and operate holidays to beautiful destinations across India and around the world.
              </p>
            </div>

            {/* Right Map Visual with Coimbatore Hub */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl p-8 sm:p-12 bg-[#F3EDE2]/60 border border-[#E8E2D5] overflow-hidden flex items-center justify-center min-h-[300px]">
                
                {/* SVG Route Map Graphic */}
                <svg className="w-full h-full max-h-[260px]" viewBox="0 0 600 260" fill="none">
                  {/* Stylized continent contours */}
                  <path d="M50 120 C100 80, 180 70, 240 100 C280 120, 310 80, 360 90 C420 100, 480 70, 550 110" stroke="#DFCFB3" strokeWidth="1.5" strokeDasharray="4 4" />
                  <path d="M80 160 C140 190, 200 150, 280 170 C340 180, 400 150, 500 180" stroke="#DFCFB3" strokeWidth="1.5" strokeDasharray="4 4" />
                  
                  {/* Radiating flight paths from Coimbatore (around center-left) */}
                  {/* To Europe/Swiss */}
                  <path d="M280 150 Q230 60, 180 80" stroke="#B68D40" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.75" />
                  {/* To Dubai */}
                  <path d="M280 150 Q220 120, 150 130" stroke="#B68D40" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.75" />
                  {/* To Kerala / South India */}
                  <path d="M280 150 Q270 170, 260 190" stroke="#B68D40" strokeWidth="1.5" opacity="0.9" />
                  {/* To Bali / Southeast Asia */}
                  <path d="M280 150 Q380 170, 460 200" stroke="#B68D40" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.75" />
                  {/* To Maldives */}
                  <path d="M280 150 Q290 200, 300 230" stroke="#B68D40" strokeWidth="1.5" strokeDasharray="5 5" opacity="0.75" />

                  {/* Little flight plane markers */}
                  <circle cx="180" cy="80" r="3" fill="#B68D40" />
                  <circle cx="150" cy="130" r="3" fill="#B68D40" />
                  <circle cx="260" cy="190" r="3" fill="#B68D40" />
                  <circle cx="460" cy="200" r="3" fill="#B68D40" />
                  <circle cx="300" cy="230" r="3" fill="#B68D40" />

                  {/* Hub Pin at 280, 150 */}
                  <circle cx="280" cy="150" r="10" fill="#B68D40" opacity="0.2" />
                  <circle cx="280" cy="150" r="6" fill="#0D3832" />
                  <circle cx="280" cy="150" r="2.5" fill="#FFFFFF" />
                </svg>

                {/* Pin Badge */}
                <div className="absolute top-1/2 left-1/2 -translate-x-[20%] -translate-y-[10%] text-center pointer-events-none">
                  <div className="bg-white/95 backdrop-blur-sm border border-[#E8E2D5] px-3.5 py-1.5 rounded-full shadow-sm">
                    <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#0D3832]">
                      COIMBATORE
                    </p>
                    <p className="text-[8.5px] text-[#7A8784]">TAMIL NADU, INDIA</p>
                  </div>
                </div>

                {/* Script Badge on Right */}
                <div className="absolute top-6 right-6 select-none pointer-events-none">
                  <span className="font-script text-2xl sm:text-3xl text-[#1C2826] block leading-tight rotate-[-4deg]">
                    Different Destinations<br />
                    <span className="text-[#B68D40]">A Brighter You</span>
                  </span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-14 sm:py-20 border-t border-[#E8E2D5]/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Header */}
            <div className="lg:col-span-5 space-y-3">
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
                  FREQUENTLY ASKED QUESTIONS
                </span>
                <span className="h-[1px] w-8 bg-[#B68D40]"></span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-[#1C2826] leading-tight">
                A few things<br />
                <span className="italic font-serif text-[#B68D40]">you may be wondering.</span>
              </h2>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-[#E8E2D5] rounded-xl bg-white overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-serif text-lg text-[#1C2826] hover:text-[#0D3832] transition"
                    >
                      <span className="font-medium">{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#B68D40] flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm text-[#4A5754] leading-relaxed border-t border-[#F0EBE0] animate-fadeIn">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* 5. PRE-FOOTER BANNER */}
      <PreFooterBanner
        titlePrimary="Beautiful journeys"
        titleSecondary="begin with a hello."
        description="Let's plan a holiday that feels made for you. From Coimbatore to the world, we're with you at every step."
        buttonText="Plan My Holiday"
        onButtonClick={() => onOpenPlanModal()}
      />

    </div>
  );
};

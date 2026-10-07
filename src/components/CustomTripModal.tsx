import React, { useState } from 'react';
import { X, CheckCircle, Send, PhoneCall, Sparkles, MapPin, Calendar, Users } from 'lucide-react';

interface CustomTripModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialDestination?: string;
}

export const CustomTripModal: React.FC<CustomTripModalProps> = ({
  isOpen,
  onClose,
  initialDestination = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    destination: initialDestination || 'Kerala',
    travelMonth: 'Upcoming 30-60 Days',
    travellers: '2 Travellers (Couple)',
    ideas: '',
    agreed: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Update destination if passed
  React.useEffect(() => {
    if (initialDestination) {
      setFormData(prev => ({ ...prev, destination: initialDestination }));
    }
  }, [initialDestination]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeIn">
      <div 
        className="relative bg-[#FAF8F5] rounded-xl max-w-lg w-full max-h-[92vh] flex flex-col border border-[#E8E2D5] shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0D3832] text-white px-5 py-3.5 sm:px-6 sm:py-4 relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B68D40]">
              PLAN YOUR JOURNEY
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-serif font-normal leading-tight">
            Tell us about <span className="italic text-[#B68D40]">your holiday.</span>
          </h3>
          <p className="text-[11px] sm:text-xs text-white/70 mt-0.5 max-w-md">
            Fill in a few details and our Coimbatore travel team will get in touch with personalised recommendations.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto">
          {submitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="w-12 h-12 bg-[#0D3832]/10 text-[#0D3832] rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-7 h-7 text-[#0D3832]" />
              </div>
              <h4 className="text-xl font-serif text-[#1C2826]">Thank You, {formData.fullName || 'Traveller'}!</h4>
              <p className="text-xs sm:text-sm text-[#4A5754] max-w-md mx-auto leading-relaxed">
                Your holiday enquiry for <strong className="text-[#0D3832]">{formData.destination}</strong> has been received. Our Coimbatore specialists are reviewing your request and will contact you shortly.
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="bg-[#0D3832] text-white px-5 py-2 rounded-md text-xs sm:text-sm font-medium hover:bg-[#144C44] transition"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1: Full Name & Phone Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-md border border-[#E8E2D5] bg-white text-xs sm:text-sm text-[#1C2826] focus:outline-none focus:border-[#B68D40] transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-md border border-[#E8E2D5] bg-white text-xs sm:text-sm text-[#1C2826] focus:outline-none focus:border-[#B68D40] transition"
                  />
                </div>
              </div>

              {/* Row 2: Email Address & Preferred Destination */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-md border border-[#E8E2D5] bg-white text-xs sm:text-sm text-[#1C2826] focus:outline-none focus:border-[#B68D40] transition"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider mb-1">
                    Preferred Destination
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-md border border-[#E8E2D5] bg-white text-xs sm:text-sm text-[#1C2826] focus:outline-none focus:border-[#B68D40] transition"
                  >
                    <option value="Kerala">Kerala (Backwaters & Hills)</option>
                    <option value="Bali">Bali, Indonesia</option>
                    <option value="Switzerland">Switzerland (Swiss Alps)</option>
                    <option value="Maldives">Maldives (Island Retreat)</option>
                    <option value="Dubai">Dubai (City & Desert)</option>
                    <option value="Thailand">Thailand (Phuket & Krabi)</option>
                    <option value="Sri Lanka">Sri Lanka (Scenic Train)</option>
                    <option value="Other">Custom / Multiple Destinations</option>
                  </select>
                </div>
              </div>

              {/* Row 3: Travel Month & Number of Travellers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider mb-1">
                    Travel Month
                  </label>
                  <select
                    value={formData.travelMonth}
                    onChange={(e) => setFormData({ ...formData, travelMonth: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-md border border-[#E8E2D5] bg-white text-xs sm:text-sm text-[#1C2826] focus:outline-none focus:border-[#B68D40] transition"
                  >
                    <option value="Upcoming 30-60 Days">Upcoming 30-60 Days</option>
                    <option value="Next 3-6 Months">Next 3-6 Months</option>
                    <option value="December / Year-End">December / Festive Season</option>
                    <option value="Summer Holidays">Summer Holidays</option>
                    <option value="Flexible">Dates are Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider mb-1">
                    Number of Travellers
                  </label>
                  <select
                    value={formData.travellers}
                    onChange={(e) => setFormData({ ...formData, travellers: e.target.value })}
                    className="w-full px-3 py-1.5 rounded-md border border-[#E8E2D5] bg-white text-xs sm:text-sm text-[#1C2826] focus:outline-none focus:border-[#B68D40] transition"
                  >
                    <option value="1 Traveller (Solo)">1 Traveller (Solo)</option>
                    <option value="2 Travellers (Couple)">2 Travellers (Couple / Honeymoon)</option>
                    <option value="3-5 Travellers (Family)">3-5 Travellers (Family / Group)</option>
                    <option value="6+ Travellers (Large Group)">6+ Travellers (Large Group)</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Holiday Ideas */}
              <div>
                <label className="block text-[11px] font-semibold text-[#1C2826] uppercase tracking-wider mb-1">
                  Your Holiday Ideas <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="Tell us about your travel ideas, interests or any special requests..."
                  value={formData.ideas}
                  onChange={(e) => setFormData({ ...formData, ideas: e.target.value })}
                  className="w-full px-3 py-1.5 rounded-md border border-[#E8E2D5] bg-white text-xs sm:text-sm text-[#1C2826] focus:outline-none focus:border-[#B68D40] transition resize-none"
                ></textarea>
              </div>

              {/* Row 5: Agreement Checkbox */}
              <div className="flex items-center gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="modal-agree"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="rounded border-[#E8E2D5] text-[#0D3832] focus:ring-[#B68D40] w-3.5 h-3.5 cursor-pointer"
                />
                <label htmlFor="modal-agree" className="text-[11px] text-[#525C5A] cursor-pointer">
                  I agree to be contacted about my holiday enquiry.
                </label>
              </div>

              {/* Row 6: Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#0D3832] hover:bg-[#144C44] text-white py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2 transition shadow-sm hover:shadow"
              >
                <span>{submitting ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
                <Send className="w-3.5 h-3.5 text-white/90" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

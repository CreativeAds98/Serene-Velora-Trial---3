export type HolidayStyle = 'Romantic Escapes' | 'Family Holidays' | 'Friends & Group Trips' | 'Short Getaways';

export type DestinationCategory = 'Domestic' | 'International';

export interface DayItinerary {
  day: number;
  title: string;
  description: string;
  activities?: string[];
}

export interface HolidayPackage {
  id: string;
  title: string;
  slug: string;
  tagline: string;
  category: DestinationCategory;
  destination: string;
  locationStateOrCountry: string;
  duration: string;
  nights: number;
  days: number;
  style: HolidayStyle;
  audience: string;
  teaser: string;
  image: string;
  galleryImages: string[];
  highlights: string[];
  itinerary: DayItinerary[];
  inclusions: string[];
  exclusions: string[];
  pricingBasis: string;
  ctaText: string;
}

export interface DestinationItem {
  id: string;
  name: string;
  slug: string;
  region: DestinationCategory;
  subtitle: string;
  description: string;
  image: string;
  packageId: string;
  transitFromCoimbatore: string;
  bestTimeToVisit: string;
  idealDuration: string;
  climate: string;
  highlights: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  teaser: string;
  image: string;
  content: string[];
  keyTips: string[];
}

export interface EnquiryFormData {
  fullName: string;
  mobileNumber: string;
  email: string;
  destination: string;
  travelMonth: string;
  adults: number;
  children: number;
  budgetRange: string;
  holidayStyle: string;
  notes: string;
  consent: boolean;
}

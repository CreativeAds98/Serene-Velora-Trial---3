import { HolidayPackage, JournalArticle, DestinationItem } from '../types';

export const BRAND_INFO = {
  name: "Serene Velora Holidays",
  tagline: "Journey Beyond Dream",
  subTagline: "Journeys Beyond Your Dreams",
  city: "Coimbatore",
  state: "Tamil Nadu",
  country: "India",
  primaryPhone: "+91 94880 12345",
  whatsappNumber: "+919488012345",
  email: "connect@serenevelora.com",
  officeAddress: "Race Course Road / Avinashi Road Corridor, Coimbatore, Tamil Nadu 641018, India",
  operatingHours: "Monday – Saturday: 9:30 AM – 7:00 PM IST",
  departureHub: "Coimbatore International Airport (CJB) & Central Railway Station",
};

export const HOLIDAY_PACKAGES: HolidayPackage[] = [
  {
    id: "kerala-slow-escape",
    title: "Kerala Slow Escape",
    slug: "kerala-slow-escape",
    tagline: "Backwaters, green landscapes and a gentler pace for your next break",
    category: "Domestic",
    destination: "Kerala (Kumarakom & Alleppey)",
    locationStateOrCountry: "Kerala, India",
    duration: "5 Days / 4 Nights",
    nights: 4,
    days: 5,
    style: "Romantic Escapes",
    audience: "Couples & Families seeking calm waters & lush tranquility",
    teaser: "Backwaters, green landscapes and a gentler pace for your next break. Trade the everyday rush for green views, relaxed moments and a holiday at your own pace.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Scenic backwater luxury resort stay along Lake Vembanad",
      "Private traditional houseboat day experience through quiet canals",
      "Aromatic spice plantation walks & authentic Ayurvedic rejuvenation",
      "Gentle sunset canoe rides and farm-to-table coastal cuisine"
    ],
    itinerary: [
      {
        day: 1,
        title: "Coimbatore Departure & Arrival in Kumarakom",
        description: "Scenic road transfer or express train from Coimbatore into the serene backwaters of Kumarakom. Check-in to your lakeside retreat and unwind with a quiet sunset overlooking Vembanad Lake.",
        activities: ["Comfortable private transit", "Welcome refreshments", "Evening lake stroll"]
      },
      {
        day: 2,
        title: "Kumarakom Sanctuary & Village Life",
        description: "Wake to calls of migratory birds at Kumarakom Bird Sanctuary. Experience a slow afternoon cycling through coconut groves and experiencing local artisan craft.",
        activities: ["Morning birdwatching canoe", "Village culture trail", "Traditional Kerala Sadhya lunch"]
      },
      {
        day: 3,
        title: "Alleppey Houseboat Cruise",
        description: "Embark on an exclusive private houseboat through the palm-fringed waterways of Alleppey. Watch tranquil village life unfold along the banks as fresh meals are prepared onboard.",
        activities: ["Private houseboat cruise", "Chef-prepared regional delicacies", "Quiet canal anchorage"]
      },
      {
        day: 4,
        title: "Marari Coastal Sanctuary",
        description: "Transfer to the serene beaches of Marari for barefoot relaxation on pristine golden sands. Enjoy optional Ayurvedic oil massages and quiet seaside dinners.",
        activities: ["Beachfront leisure", "Ayurvedic wellness session", "Candlelit seafood dinner"]
      },
      {
        day: 5,
        title: "Leisurely Morning & Return to Coimbatore",
        description: "Enjoy a relaxed breakfast by the palms before a seamless return transfer to Coimbatore, feeling deeply recharged.",
        activities: ["Breakfast at leisure", "Souvenir spice shopping", "Private chauffeur return transfer"]
      }
    ],
    inclusions: [
      "4 nights premium boutique accommodation (Lakeside Resort & Beach Retreat)",
      "Daily gourmet breakfasts and specially curated regional dining",
      "Exclusive private backwater cruise with dedicated crew",
      "All chauffeur-driven private vehicle transfers door-to-door from/to Coimbatore",
      "Personalised travel concierge support throughout your journey"
    ],
    exclusions: [
      "Airfare or train tickets (available on request based on preferred timing)",
      "Personal expenses, specialty spa treatments and optional water sports",
      "Travel insurance (recommended & arranged upon request)"
    ],
    pricingBasis: "Custom tailored quotation based on your preferred travel dates, room category, and group size.",
    ctaText: "Explore Kerala"
  },
  {
    id: "nilgiris-weekend",
    title: "Nilgiris Weekend",
    slug: "nilgiris-weekend",
    tagline: "Fresh mountain air and scenic moments for a refreshing short escape",
    category: "Domestic",
    destination: "Nilgiris (Coonoor & Ooty)",
    locationStateOrCountry: "Tamil Nadu, India",
    duration: "3 Days / 2 Nights",
    nights: 2,
    days: 3,
    style: "Short Getaways",
    audience: "Coimbatore residents, couples & small groups needing a quick mountain reset",
    teaser: "Fresh mountain air and scenic moments for a refreshing short escape. Step away from the routine and make room for a refreshing change of scene right in Coimbatore's neighbouring hills.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Heritage colonial tea estate bungalow stay amidst rolling mist",
      "Scenic Nilgiri Mountain Railway (Toy Train) journey through tunnels",
      "Private tea factory tour and bespoke high-tea tasting session",
      "Panoramic views from Lamb's Rock, Dolphin's Nose and quiet pine forests"
    ],
    itinerary: [
      {
        day: 1,
        title: "Coimbatore Ascent to Coonoor",
        description: "Short, comfortable 2-hour drive from Coimbatore ascending through the scenic Mettupalayam ghats into Coonoor. Check-in to a heritage tea plantation estate with sweeping valley views.",
        activities: ["Ghat road drive", "Estate check-in", "Sunset tea tasting on private verandah"]
      },
      {
        day: 2,
        title: "Heritage Toy Train & Botanical Exploration",
        description: "Board the UNESCO-listed Nilgiri Mountain Toy Train between Coonoor and Ooty. Explore peaceful nature trails, Sims Park, and private viewpoints away from crowded tourist centers.",
        activities: ["Heritage Toy Train ride", "Sims Park botanical walk", "Evening fireplace gathering"]
      },
      {
        day: 3,
        title: "Tea Craft & Smooth Return to Coimbatore",
        description: "Participate in a morning tea-plucking workshop. Enjoy a slow organic lunch before a relaxed afternoon descent back into Coimbatore.",
        activities: ["Artisan tea craft walk", "Boutique Nilgiri chocolates & honey pickup", "Chauffeur descent to Coimbatore"]
      }
    ],
    inclusions: [
      "2 nights stay in a heritage tea bungalow or luxury hillside resort",
      "Daily breakfast and curated hill-station dinner",
      "Heritage Nilgiri Toy Train reservation",
      "Private vehicle with experienced hill chauffeur from/to Coimbatore",
      "Private tea estate tour with senior tea master"
    ],
    exclusions: [
      "Extra meals and personal laundry",
      "Entry fees to non-itinerary attractions",
      "GST / standard government taxes"
    ],
    pricingBasis: "Transparent per-room or couple basis quoted for weekend or weekday departures.",
    ctaText: "Plan a Hill Escape"
  },
  {
    id: "goa-together",
    title: "Goa Together",
    slug: "goa-together",
    tagline: "Beach time, easy evenings and experiences to enjoy with your favourite people",
    category: "Domestic",
    destination: "Goa (Mandrem, Assagao & Fontainhas)",
    locationStateOrCountry: "Goa, India",
    duration: "4 Days / 3 Nights",
    nights: 3,
    days: 4,
    style: "Friends & Group Trips",
    audience: "Friends, small groups and families seeking relaxed beaches, cafes & culture",
    teaser: "Beach time, easy evenings and experiences to enjoy with your favourite people. Turn a shared travel idea into a journey you can enjoy together without the stress of coordinating logistics.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Private boutique villa or beachside resort in peaceful North Goa",
      "Sunset catamaran cruise along the scenic Chapora or Mandovi river",
      "Walking discovery of colourful Portuguese heritage in Fontainhas",
      "Curated dining experiences at Goa's acclaimed culinary courtyards"
    ],
    itinerary: [
      {
        day: 1,
        title: "Flight from Coimbatore & Coastal Welcome",
        description: "Direct or convenient transit flight from Coimbatore to Goa. Private airport greeting and check-in to your boutique coastal property. Sunset cocktails by the beach.",
        activities: ["Airport meet & greet", "Villa / Resort check-in", "Sunset beach gathering"]
      },
      {
        day: 2,
        title: "Latin Quarter Heritage & Culinary Trail",
        description: "Explore the pastel-coloured streets of Panjim's Latin Quarter (Fontainhas). Indulge in artisanal Goan bakeries, art galleries, and an authentic culinary tasting.",
        activities: ["Guided Fontainhas walk", "Artisanal bakery visit", "Dinner at an Assagao courtyard restaurant"]
      },
      {
        day: 3,
        title: "Sailing & Beachside Relaxation",
        description: "Spend a lazy morning on the peaceful sands of Mandrem or Morjim. In the late afternoon, embark on a private sunset catamaran cruise with music and refreshments.",
        activities: ["Beach cabana time", "Private sunset catamaran sailing", "Live acoustic beachside dinner"]
      },
      {
        day: 4,
        title: "Leisure Brunch & Flight Back",
        description: "Enjoy a relaxed poolside breakfast and last-minute local feni and spice shopping before your scheduled airport transfer.",
        activities: ["Morning swim", "Artisanal souvenir browsing", "Airport drop-off"]
      }
    ],
    inclusions: [
      "3 nights boutique group-friendly villa or luxury coastal resort stay",
      "Daily breakfast spread",
      "Private catamaran sunset cruise with onboard beverages",
      "Air-conditioned private van for all airport and sightseeing transfers",
      "Curated restaurant bookings & local insider itinerary"
    ],
    exclusions: [
      "Flights (we provide group flight ticketing upon request)",
      "Alcoholic beverages outside of cruise inclusions",
      "Optional adventure water sports"
    ],
    pricingBasis: "Custom group quote per person based on villa configuration and group size.",
    ctaText: "Explore Goa"
  },
  {
    id: "bali-for-two",
    title: "Bali for Two",
    slug: "bali-for-two",
    tagline: "A romantic holiday idea blending nature, culture and time to unwind",
    category: "International",
    destination: "Bali (Ubud & Uluwatu)",
    locationStateOrCountry: "Indonesia",
    duration: "6 Days / 5 Nights",
    nights: 5,
    days: 6,
    style: "Romantic Escapes",
    audience: "Honeymooners, couples celebrating anniversaries or looking for peaceful romance",
    teaser: "A romantic holiday idea blending nature, culture and time to unwind. Make time for just the two of you, with beautiful settings and moments to remember.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Private pool villa in the lush jungle valley of Ubud",
      "Clifftop ocean-view resort in dramatic Uluwatu",
      "Romantic floating breakfast & couples Balinese flower bath spa",
      "Sunset dinner overlooking the Indian Ocean at Jimbaran or Uluwatu cliffs"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Denpasar & Ubud Jungle Retreat",
        description: "Warm Balinese welcome at Denpasar International Airport. Private transfer to your secluded private pool villa in Ubud. Welcome flower petals and candlelight dinner.",
        activities: ["VIP airport greeting", "Scenic drive to Ubud", "Private villa romantic dinner"]
      },
      {
        day: 2,
        title: "Tegallalang Terraces & Sacred Water Temple",
        description: "Early morning gentle walk through the green Tegallalang rice terraces. Visit a serene water temple for a gentle blessing ritual, followed by a romantic valley lunch.",
        activities: ["Rice terrace walk", "Traditional blessing ritual", "Coffee plantation visit"]
      },
      {
        day: 3,
        title: "Floating Breakfast & Balinese Spa Day",
        description: "Delight in an iconic floating breakfast in your private pool. Indulge in a 2-hour signature couple's massage and floral herbal bath overlooking river canyons.",
        activities: ["Private floating breakfast", "Couple's Balinese wellness ritual", "Free evening for Ubud cafe strolls"]
      },
      {
        day: 4,
        title: "Scenic Transfer to Clifftop Uluwatu",
        description: "Travel south toward the dramatic limestone cliffs of Uluwatu. Check-in to your cliff-edge resort with endless horizon ocean views.",
        activities: ["Southern coastal transfer", "Cliff-edge resort check-in", "Sunset cocktail lounge"]
      },
      {
        day: 5,
        title: "Uluwatu Clifftop Temple & Jimbaran Sunset Feast",
        description: "Visit the iconic Uluwatu Temple perched high above crashing waves. Conclude with an intimate candlelit seafood dinner on the soft sands of Jimbaran Bay.",
        activities: ["Uluwatu cliff walk", "Sunset photography moment", "Candlelit Jimbaran beach dinner"]
      },
      {
        day: 6,
        title: "Morning Ocean Breeze & Homeward Flight",
        description: "Relaxed morning swimming in the infinity pool before your private transfer to Denpasar Airport for your return flight.",
        activities: ["Leisurely breakfast with sea view", "Late checkout (subject to availability)", "Private airport transfer"]
      }
    ],
    inclusions: [
      "3 nights Private Pool Villa in Ubud + 2 nights Luxury Cliff Resort in Uluwatu",
      "Daily gourmet breakfasts, including 1 private floating breakfast",
      "Signature 2-hour couple's spa ritual",
      "Private dedicated air-conditioned vehicle and English-speaking chauffeur-guide",
      "Special honeymoon welcome amenity and floral decoration"
    ],
    exclusions: [
      "International flights (custom quotes available with best connections)",
      "Visa on Arrival fee (payable at airport)",
      "Discretionary driver tips and personal purchases"
    ],
    pricingBasis: "Custom quote based on preferred travel month, room grade, and flight availability.",
    ctaText: "Plan a Romantic Trip"
  },
  {
    id: "singapore-discovery",
    title: "Singapore Discovery",
    slug: "singapore-discovery",
    tagline: "A city holiday idea with memorable sights and experiences for different ages",
    category: "International",
    destination: "Singapore",
    locationStateOrCountry: "Singapore",
    duration: "5 Days / 4 Nights",
    nights: 4,
    days: 5,
    style: "Family Holidays",
    audience: "Families with children, multi-generational travellers and city explorers",
    teaser: "A city holiday idea with memorable sights and experiences for different ages. Bring everyone together with experiences and a comfortable pace that suit your family.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Gardens by the Bay with Flower Dome, Cloud Forest & Supertree Light Show",
      "Sentosa Island fun including S.E.A. Aquarium & Universal Studios option",
      "Mandai Wildlife Reserve (Night Safari or Singapore Zoo with tram)",
      "Comfortable central 4-star / 5-star family accommodation near transit"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival at Changi Jewel & City Check-in",
        description: "Arrive at world-renowned Changi Airport and marvel at the Rain Vortex waterfall at Jewel. Private transfer to your centrally located family-friendly hotel.",
        activities: ["Jewel Changi photo stop", "Private family transfer", "Evening walk along Marina Bay"]
      },
      {
        day: 2,
        title: "Gardens by the Bay & Marina Bay Sands View",
        description: "Discover the climate-controlled Cloud Forest with its indoor waterfall and the exotic Flower Dome. In the evening, witness the enchanting Supertree sound and light show.",
        activities: ["Cloud Forest & Flower Dome", "Supertree Grove night walk", "Spectra water show viewing"]
      },
      {
        day: 3,
        title: "Sentosa Island Adventure",
        description: "Cross over to Sentosa by scenic cable car. Visit the vast S.E.A. Aquarium, explore Siloso beach, and enjoy interactive attractions suitable for all ages.",
        activities: ["Sentosa Cable Car ride", "S.E.A. Aquarium exploration", "Sentosa beach stroll & dining"]
      },
      {
        day: 4,
        title: "Mandai Wildlife & River Wonders",
        description: "Experience River Wonders to see giant pandas or embark on the world's first open-air Night Safari tram tour through distinct global geographical zones.",
        activities: ["River Wonders / Zoo tram tour", "Cultural dining at Lau Pa Sat food hall", "Evening shopping on Orchard Road"]
      },
      {
        day: 5,
        title: "Little India, Chinatown & Airport Return",
        description: "Spend your final morning visiting historic Chinatown and colourful Little India for souvenirs and treats before your smooth departure transfer.",
        activities: ["Cultural district walk", "Souvenir shopping", "Private airport transfer to Changi"]
      }
    ],
    inclusions: [
      "4 nights premium family-friendly hotel accommodation with interconnecting or twin rooms",
      "Daily international breakfast buffet",
      "Gardens by the Bay double conservatory tickets & Supertree admission",
      "Sentosa cable car and S.E.A. Aquarium admission passes",
      "All airport and attraction private transfers in spacious air-conditioned vehicle"
    ],
    exclusions: [
      "International flights (assisted ticketing available from Coimbatore / Chennai / Bengaluru)",
      "Singapore tourist visa processing fee",
      "Meals other than specified breakfasts"
    ],
    pricingBasis: "Custom quotation per family unit according to children's ages and bedding requirements.",
    ctaText: "Explore Singapore"
  },
  {
    id: "thailand-escape",
    title: "Thailand Escape",
    slug: "thailand-escape",
    tagline: "A proposed mix of city discovery and coastal relaxation, tailored to your interests",
    category: "International",
    destination: "Thailand (Bangkok & Krabi/Phuket)",
    locationStateOrCountry: "Thailand",
    duration: "6 Days / 5 Nights",
    nights: 5,
    days: 6,
    style: "Friends & Group Trips",
    audience: "Travellers seeking vibrant night markets, rich temples and emerald island waters",
    teaser: "A proposed mix of city discovery and coastal relaxation, tailored to your interests. Experience bustling river life, ancient golden temples, and serene limestone beach retreats.",
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80"
    ],
    highlights: [
      "Chao Phraya evening dinner cruise past illuminated Bangkok temples",
      "Scenic speedboat trip to pristine Phi Phi or Hong Islands with snorkelling",
      "Charming coastal resort in Krabi overlooking dramatic limestone karsts",
      "Curated street food exploration and vibrant night market culture"
    ],
    itinerary: [
      {
        day: 1,
        title: "Bangkok Arrival & Riverside Sunset",
        description: "Arrive at Suvarnabhumi Airport and transfer to your riverside Bangkok hotel. Take in the bustling skyline as evening arrives with a dinner cruise on the Chao Phraya.",
        activities: ["Private airport greeting", "Hotel check-in", "Chao Phraya River dinner cruise"]
      },
      {
        day: 2,
        title: "Grand Palace & Bangkok Culture",
        description: "Visit the iconic Grand Palace and the Temple of the Emerald Buddha (Wat Phra Kaew). Discover colourful flower markets and contemporary riverside lifestyle hubs.",
        activities: ["Grand Palace guided visit", "Wat Pho Reclining Buddha", "Asiatique / ICONSIAM riverside evening"]
      },
      {
        day: 3,
        title: "Flight to Krabi & Beachfront Check-in",
        description: "Short domestic flight south to tropical Krabi. Check-in to your resort nestled between limestone cliffs and turquoise Andaman waters.",
        activities: ["Bangkok to Krabi flight transfer", "Resort check-in", "Sunset cocktail on Ao Nang beach"]
      },
      {
        day: 4,
        title: "Four Islands or Phi Phi Speedboat Excursion",
        description: "Embark on an exhilarating island-hopping tour. Swim in emerald lagoons, snorkel amongst vibrant marine life, and lounge on powdered white sand.",
        activities: ["Speedboat island tour", "Snorkelling equipment & safety crew", "Picnic lunch on tropical island"]
      },
      {
        day: 5,
        title: "Limestone Kayaking & Traditional Thai Spa",
        description: "Paddle through tranquil mangrove forests and hidden sea caves at Ao Thalane. Wind down with an authentic traditional Thai herbal massage.",
        activities: ["Sea kayaking in mangroves", "Authentic Thai wellness session", "Seafood barbecue dinner by the beach"]
      },
      {
        day: 6,
        title: "Tropical Morning & Return Journey",
        description: "Enjoy a final breakfast with views of the Andaman Sea before transfer to Krabi Airport for your return flight home.",
        activities: ["Morning beach walk", "Souvenir shopping", "Airport departure transfer"]
      }
    ],
    inclusions: [
      "2 nights in Bangkok central/riverside 4-star hotel + 3 nights in Krabi beachfront resort",
      "Daily buffet breakfasts",
      "Chao Phraya luxury dinner cruise ticket",
      "Full-day 4-Islands speedboat excursion with snorkelling gear & national park fees",
      "All airport and inter-city private vehicle transfers"
    ],
    exclusions: [
      "International and domestic flights (packaged on request)",
      "Thailand visa fees (visa exemption or VoA as applicable)",
      "Personal water sport rentals and discretionary tips"
    ],
    pricingBasis: "Custom quotation built around your requested travel dates and accommodation preference.",
    ctaText: "Build My Itinerary"
  }
];

export const HOLIDAY_STYLES = [
  {
    id: "romantic",
    title: "Romantic Escapes",
    subtitle: "Make time for just the two of you, with beautiful settings and moments to remember.",
    description: "Whether planning an unforgettable honeymoon, celebrating a milestone anniversary, or simply seeking quiet time away together, we design private villa sanctuaries, gentle pacing, and thoughtful surprises.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    tags: ["Privacy", "Private Pool Villas", "Sunset Cruises", "Couples Wellness"],
    packagesAvailable: ["Bali for Two", "Kerala Slow Escape"]
  },
  {
    id: "family",
    title: "Family Holidays",
    subtitle: "Bring everyone together with experiences and a pace that suit your family.",
    description: "Multigenerational holidays need comfort, sensible transit times, spacious rooms, and activities that captivate both children and grandparents. We make sure the itinerary never feels rushed.",
    image: "https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=80",
    tags: ["Kid-Friendly Pacing", "Spacious Suites", "Theme Parks & Nature", "Zero Stress"],
    packagesAvailable: ["Singapore Discovery", "Kerala Slow Escape"]
  },
  {
    id: "friends",
    title: "Friends & Group Trips",
    subtitle: "Turn a shared travel idea into a journey you can enjoy together.",
    description: "Planning with friends often comes with differing budgets, interests, and schedules. We handle all group transport, villa bookings, sailing charters, and reservations so everyone enjoys the trip seamlessly.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    tags: ["Private Villas", "Shared Memories", "Flexible Schedules", "Group Concierge"],
    packagesAvailable: ["Goa Together", "Thailand Escape"]
  },
  {
    id: "getaways",
    title: "Short Getaways",
    subtitle: "Step away from the routine and make room for a refreshing change of scene.",
    description: "When you have just 2 to 4 days, every hour counts. We arrange quick, direct departures from Coimbatore into nearby misty hills, tea plantations, and beachside escapes with zero logistics friction.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    tags: ["Coimbatore Departure", "Scenic Hill Drives", "Rejuvenating Weekends", "Fast Turnaround"],
    packagesAvailable: ["Nilgiris Weekend", "Kerala Slow Escape"]
  }
];

export const PLANNING_STEPS = [
  {
    number: "01",
    title: "Share your idea",
    description: "Tell us where you want to go, when you would like to travel, and who is joining you. Even if you only have a rough destination idea, we start from where you are."
  },
  {
    number: "02",
    title: "Shape your journey",
    description: "Explore a custom itinerary crafted around your pacing, stay preferences, and budget. Refine the details together with our Coimbatore travel specialist."
  },
  {
    number: "03",
    title: "Get ready to explore",
    description: "Confirm the agreed arrangements with clear documentation, 24/7 travel support, and peace of mind before you take off."
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: "coimbatore-holiday-guide",
    title: "How to choose your next holiday from Coimbatore",
    category: "Departure Guide",
    readTime: "4 min read",
    teaser: "Navigating direct flights from CJB, scenic hill road trips, and smart international connections via Bengaluru and Chennai.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    content: [
      "Travelling from Coimbatore offers distinct regional advantages. For quick mountain air, the Nilgiris (Ooty and Coonoor) are just a 2 to 3 hour scenic drive away, while the serene backwaters of Kerala can be reached comfortably by road or rail within half a day.",
      "For international departures, Coimbatore International Airport (CJB) provides direct Middle Eastern links and seamless one-stop connections through Chennai, Bengaluru, and Singapore. The key to effortless planning is matching your available days with realistic transit times so you arrive relaxed rather than exhausted.",
      "When planning family or group getaways, starting your trip with private door-to-door vehicle transfers eliminates the stress of early-morning airport rushes for destinations in South India."
    ],
    keyTips: [
      "Check weekend hill departure road timings to beat ghat road traffic",
      "Look for direct connecting transit via Chennai/Singapore for Southeast Asia",
      "Allow at least 2 nights for Nilgiris to experience true tea estate tranquility"
    ]
  },
  {
    id: "family-trip-checklist",
    title: "A simple checklist for planning a family trip",
    category: "Planning Tips",
    readTime: "5 min read",
    teaser: "Comfort, pacing, kid-friendly meal planning, and ensuring multi-generational comfort without itinerary burnout.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80",
    content: [
      "The most common pitfall in family holiday planning is over-scheduling. Packing four major attractions into a single day inevitably leads to tired children and stressed adults.",
      "Instead, follow the 'one anchor activity per day' principle. Plan one major morning experience—such as visiting Singapore's Cloud Forest or a private morning canoe in Kerala—and leave afternoons open for pool leisure, snacks, or spontaneous walks.",
      "Always verify interconnecting room options in advance and ensure transfer vehicles have ample luggage space for strollers and family bags."
    ],
    keyTips: [
      "Limit daily transfer drives to under 3.5 hours when travelling with seniors or toddlers",
      "Request family suites or guaranteed interconnecting rooms early",
      "Build in flexible rest buffers between morning sight-seeing and evening dinners"
    ]
  },
  {
    id: "honeymoon-planning-questions",
    title: "Honeymoon planning: questions to ask before you book",
    category: "Romantic Escapes",
    readTime: "4 min read",
    teaser: "Balancing private villa downtime with meaningful couple excursions and avoiding tourist-trap resorts.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    content: [
      "A honeymoon shouldn't feel like an endurance race. While it is tempting to check off every famous landmark in Bali or Europe, the memories couples cherish most are unhurried morning coffees overlooking misty ravines, private pool swims, and quiet candlelit dinners.",
      "Before confirming your trip, ask yourself whether the property offers genuine seclusion or is situated in a crowded tourist corridor. In destinations like Ubud or Kumarakom, choosing an estate setback into the rice paddies or backwaters makes all the difference.",
      "Ensure your travel planner coordinates honeymoon amenities in writing with the hotel management so you enjoy genuine complimentary perks rather than generic welcomes."
    ],
    keyTips: [
      "Prioritise room quality and privacy over having too many destinations in one trip",
      "Opt for split stays: e.g. 3 nights in cultural Ubud jungle followed by 2 nights clifftop Uluwatu",
      "Verify that private pool villas are not overlooked by neighbouring balconies"
    ]
  },
  {
    id: "short-vs-long-holiday",
    title: "Short escape or longer holiday: choosing the right pace",
    category: "Travel Strategy",
    readTime: "3 min read",
    teaser: "How to decide between a rejuvenating 3-day weekend and a transformative multi-week journey.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=800&q=80",
    content: [
      "Understanding your personal exhaustion level is the first step in holiday planning. If you are mentally drained from work routines, taking a fast 3-day retreat to the Nilgiris tea hills provides immediate restoration with minimal packing and zero jet lag.",
      "Conversely, if you seek deep cultural discovery and memory-making with children, invest in a 5-to-7 day immersive itinerary like Singapore or Thailand where you have time to settle into the local rhythm.",
      "Our team at Serene Velora Holidays helps you calculate the ratio of travel hours to relaxation hours so you pick the right format."
    ],
    keyTips: [
      "For trips under 4 days, keep total one-way transit time under 3 hours",
      "For international itineraries, budget at least 5 nights to offset travel tiredness",
      "Alternate high-energy adventure days with slow resort relaxation days"
    ]
  }
];

export const FAQ_ITEMS = [
  {
    question: "Can I request a customised holiday?",
    answer: "Yes, absolutely. Share your preferred destination, approximate dates, number of travellers, and budget expectations. We will listen to your ideas and discuss the bespoke options available to shape an itinerary that fits you perfectly."
  },
  {
    question: "I have not chosen a destination. Can I still enquire?",
    answer: "Yes! You don't need a finalized destination to reach out. Tell us the kind of holiday you would enjoy—whether misty hills, quiet backwaters, family attractions, or beachside relaxation—and our Coimbatore planning team will guide you with curated ideas."
  },
  {
    question: "Does sending an enquiry confirm my booking?",
    answer: "No. Your enquiry starts an unhurried planning conversation. We will provide detailed itinerary proposals, discuss options, and confirm arrangements only when you are completely satisfied with the plan."
  },
  {
    question: "How does planning work for Coimbatore travellers?",
    answer: "We are proudly based in Coimbatore. We understand local departure points—including Coimbatore International Airport (CJB), Coimbatore Junction railway links, and private vehicle ghat routes to the Nilgiris, Valparai, and Kerala. You can consult with us digitally or meet with our team locally."
  }
];

export const DESTINATIONS_LIST: DestinationItem[] = [
  {
    id: "kerala",
    name: "Kerala",
    slug: "kerala",
    region: "Domestic",
    subtitle: "Lush backwaters, spice hills & tranquil houseboats",
    description: "Kerala offers an antidote to the fast pace of modern life. Glide along the quiet canals of Alleppey and Kumarakom in traditional kettuvallam houseboats, wander fragrant cardamom plantations, and savour exquisite coastal cuisine.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    packageId: "kerala-slow-escape",
    transitFromCoimbatore: "3.5 to 5 hours scenic road journey or direct express rail from Coimbatore Junction",
    bestTimeToVisit: "September to March (Pleasant) & June to August (Ayurvedic Monsoon)",
    idealDuration: "4 to 7 Days",
    climate: "Tropical, humid & gentle coastal breeze",
    highlights: [
      "Lake Vembanad luxury water retreats",
      "Private traditional day houseboats with dedicated chef",
      "Ayurvedic wellness & therapeutic spa therapies",
      "Pristine quiet sands at Marari beach"
    ]
  },
  {
    id: "nilgiris",
    name: "Nilgiris (Coonoor & Ooty)",
    slug: "nilgiris",
    region: "Domestic",
    subtitle: "Heritage tea bungalows, mountain railways & crisp hill air",
    description: "Nestled right in Coimbatore's neighbouring Western Ghats, the Nilgiris provide immediate sanctuary. Ascend through misty ghat passes into century-old colonial tea estates, heritage steam railway tunnels, and pine-scented mountain ridges.",
    image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    packageId: "nilgiris-weekend",
    transitFromCoimbatore: "1.5 to 2.5 hours scenic mountain drive via Mettupalayam",
    bestTimeToVisit: "Year-round (Crisp winters October–February, pleasant summers March–June)",
    idealDuration: "2 to 4 Days",
    climate: "Cool temperate mountain climate (10°C – 22°C)",
    highlights: [
      "UNESCO-listed Nilgiri Mountain Toy Train journey",
      "Private heritage colonial tea plantation bungalow stays",
      "Artisan high-tea tastings & hand-rolled estate teas",
      "Panoramic views from Lamb's Rock and hidden forest viewpoints"
    ]
  },
  {
    id: "goa",
    name: "Goa",
    slug: "goa",
    region: "Domestic",
    subtitle: "Private beach villas, Latin quarters & sunset catamarans",
    description: "Beyond the crowded party strips lies a soulful, historic, and coastal paradise. Experience quiet sands in North Goa, pastel heritage mansions in Panjim's Latin Quarter (Fontainhas), and private river catamaran cruises.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    packageId: "goa-together",
    transitFromCoimbatore: "1 hour direct or convenient transit flight from Coimbatore (CJB) to GOI/GOX",
    bestTimeToVisit: "October to April (Sunny & vibrant coastal weather)",
    idealDuration: "4 to 5 Days",
    climate: "Warm coastal sunshine with sea breezes",
    highlights: [
      "Private boutique pool villas in tranquil Assagao and Mandrem",
      "Exclusive private sunset catamaran sailing with refreshments",
      "Guided architectural and culinary walks in Fontainhas",
      "World-class courtyard dining and artisanal Goan cafes"
    ]
  },
  {
    id: "bali",
    name: "Bali",
    slug: "bali",
    region: "International",
    subtitle: "Secluded jungle pool villas & clifftop ocean horizons",
    description: "An island infused with spiritual beauty, ancient terraced valleys, and extraordinary private hospitality. Bali pairs secluded pool retreats nestled into Ubud's emerald ravines with the dramatic ocean horizons of Uluwatu.",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
    packageId: "bali-for-two",
    transitFromCoimbatore: "Convenient one-stop connection via Chennai/Kuala Lumpur/Singapore to Denpasar (DPS)",
    bestTimeToVisit: "April to October (Dry season with clear blue skies)",
    idealDuration: "6 to 8 Days",
    climate: "Tropical warm temperatures with gentle ocean winds",
    highlights: [
      "Secluded private pool villas overlooking Ubud river valleys",
      "Clifftop infinity pool resorts in dramatic Uluwatu",
      "Signature 2-hour Balinese flower bath couples rituals",
      "Candlelit fresh seafood dining barefoot on Jimbaran sands"
    ]
  },
  {
    id: "singapore",
    name: "Singapore",
    slug: "singapore",
    region: "International",
    subtitle: "Futuristic gardens, family discovery & world-class dining",
    description: "A garden city that delights travellers of all generations. Marvel at the indoor waterfalls of Gardens by the Bay, ride the Sentosa cable car, discover nocturnal wildlife at Mandai, and indulge in legendary food halls.",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
    packageId: "singapore-discovery",
    transitFromCoimbatore: "Convenient direct/one-stop international link from CJB via Chennai or Colombo into Changi (SIN)",
    bestTimeToVisit: "Year-round (November to January offers festive celebrations)",
    idealDuration: "4 to 6 Days",
    climate: "Tropical, warm and consistent year-round",
    highlights: [
      "Gardens by the Bay Supertree Grove and Cloud Forest conservatory",
      "Sentosa Island S.E.A. Aquarium and cable car skyline views",
      "Night Safari tram ride through wildlife habitats",
      "Seamless family transit and luxury marina-side hotels"
    ]
  },
  {
    id: "thailand",
    name: "Thailand",
    slug: "thailand",
    region: "International",
    subtitle: "Chao Phraya river life, golden temples & emerald coastal islands",
    description: "Thailand combines royal heritage and modern vitality with some of the most striking coastal sceneries on earth. Drift down Bangkok's historic river by night and unwind on the soft sands of Krabi framed by limestone cliffs.",
    image: "https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=1200&q=80",
    packageId: "thailand-escape",
    transitFromCoimbatore: "Seamless connecting flight from Coimbatore via Chennai or Bangkok hubs",
    bestTimeToVisit: "November to April (Dry, cool and ideal for island hopping)",
    idealDuration: "6 to 8 Days",
    climate: "Tropical and balmy",
    highlights: [
      "Chao Phraya luxury evening dinner cruise past illuminated temples",
      "Private speedboat island hopping to emerald bays in Krabi",
      "Authentic Thai herbal massage and wellness sanctuaries",
      "World-renowned street gastronomy and vibrant artisan night markets"
    ]
  }
];


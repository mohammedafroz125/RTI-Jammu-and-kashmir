/**
 * ============================================================================
 * STATE DATA CONFIGURATION
 * ============================================================================
 * 
 * Purpose: Central configuration file containing static data for all states.
 *          Provides fallback data when backend API is unavailable.
 * 
 * State Usage: All states (Jammu and Kashmir, Telangana, Delhi, etc.)
 * 
 * Architecture:
 * - Static data ensures zero blocking time
 * - Backend API enhances this data when available
 * - Each state has complete configuration (hero, departments, FAQs, etc.)
 * 
 * Key Data Structures:
 * - StateData: Complete state configuration
 * - StateHero: Hero section content
 * - StateFAQ: Frequently asked questions
 * 
 * Usage:
 * - Imported by useStateData hook
 * - Used as fallback when API fails
 * - Provides immediate data for SSR/SSG
 * 
 * Used by: useStateData hook, all state pages
 * ============================================================================
 */

// ====== TYPE DEFINITIONS ======
export interface StateHero {
  title: string;
  subtitle: string;
  image: string;
  cta: string;
}

export interface StateFAQ {
  q: string;
  a: string;
}

export interface StateData {
  name: string;
  slug: string;
  languages: string[];
  hero: StateHero;
  departments: string[];
  highlights: string[];
  faqs: StateFAQ[];
  description?: string;
  rtiPortalUrl?: string;
  process?: {
    steps: Array<{
      step: number;
      title: string;
      description: string;
    }>;
  };
  commission?: string;
  fee?: string;
  designTheme?: 'telangana' | 'default'; // Design theme for different layouts
}

export const states: Record<string, StateData> = {
  'telangana': {
    name: "Telangana",
    slug: "telangana",
    languages: ["English", "Telugu", "Urdu"],
    designTheme: "telangana",
    hero: {
      title: "File RTI Online in Telangana — Simplest Way to Get Government Information",
      subtitle: "Draft and file RTI applications to Telangana Government departments and offices without visiting in person.",
      image: "/images/telangana-banner.jpg",
      cta: "Start RTI for Telangana",
    },
    departments: [
      "Telangana Secretariat",
      "Telangana Revenue Department",
      "Telangana Police Department",
      "Telangana Education Department",
      "Telangana Health & Family Welfare Department",
      "Telangana Transport Department",
      "Telangana Public Works Department (PWD)",
      "Telangana Irrigation & CAD Department",
      "Telangana Rural Development Department",
      "Telangana Municipal Administration & Urban Development Department",
      "Telangana Registration & Stamps Department",
      "Telangana Commercial Taxes Department",
      "Telangana Labour Department",
      "Telangana Social Welfare Department",
      "Telangana Scheduled Castes Development Department",
      "Telangana Scheduled Tribes Welfare Department",
      "Telangana Women & Child Development Department",
      "Telangana Backward Classes Welfare Department",
      "Telangana Minority Welfare Department",
      "Telangana Youth & Sports Department",
      "Telangana Information & Public Relations Department",
      "Telangana Finance Department",
      "Telangana Planning Department",
      "Telangana Home Department",
      "Telangana Law Department",
      "Telangana Forest Department",
      "Telangana Environment Department",
      "Telangana Mines & Geology Department",
      "Telangana Industries & Commerce Department",
      "Telangana Information Technology Department",
      "Telangana Tourism & Culture Department",
      "Telangana Housing Department",
      "Telangana Water Resources Department",
      "Telangana Energy Department",
      "Telangana Agriculture & Cooperation Department",
      "Telangana Food & Civil Supplies Department",
      "Telangana Panchayat Raj & Rural Development Department",
      "Telangana Urban Development Department",
      "Telangana Medical & Health Department",
      "Telangana School Education Department",
      "Telangana Higher Education Department",
      "Telangana Technical Education Department",
      "Telangana Animal Husbandry Department",
      "Telangana Fisheries Department",
      "Telangana Horticulture Department",
      "Telangana Sericulture Department",
      "Telangana Handlooms & Textiles Department",
      "Telangana Endowments Department",
      "Telangana BC Welfare Department",
    ],
    highlights: [
      "Covered: Telangana Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
    ],
    faqs: [
      { q: "Can I file RTI to Telangana Secretariat online?", a: "Yes, you can file RTI applications to Telangana Secretariat and all state departments online through FileMyRTI. We handle drafting, submission, and tracking for you." },
      { q: "How long does RTI reply take in Telangana?", a: "As per RTI Act 2005, government departments in Telangana must respond within 30 days. In case of information concerning life or liberty, the response must be provided within 48 hours." },
      { q: "Can I file RTI for land records and property disputes in Telangana?", a: "Yes, you can file RTI applications for land records, property documents, and related information from Telangana Revenue Department, Registration & Stamps Department, and other relevant authorities." },
      { q: "Can I file RTI without visiting Meeseva or government offices?", a: "Yes, with FileMyRTI, you can file RTI applications completely online without visiting Meeseva centers or government offices. We handle all the paperwork and submission for you." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Telangana department or office",
          description: "Tell us what information you need from any Telangana Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Telangana rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Telangana state rules.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals if needed.",
        },
      ],
    },
    commission: "Telangana State Information Commission (TSIC)",
    fee: "₹10",
  },
  'jammu-and-kashmir': {
    name: "Jammu and Kashmir",
    slug: "jammu-and-kashmir",
    languages: ["English", "Hindi", "Urdu"],
    designTheme: "default",
    hero: {
      title: "File RTI Online for Jammu and Kashmir Government Departments",
      subtitle: "Get expert-drafted RTI applications for Revenue, Police, Education, Transport and more – without visiting offices.",
      image: "/images/kashmir.webp",
      cta: "File RTI for Jammu and Kashmir",
    },
    departments: [
      "RTI Jammu and Kashmir General Administration Department",
      "RTI Jammu and Kashmir Home Department",
      "RTI Jammu and Kashmir Police Department",
      "RTI Jammu and Kashmir Prisons Department",
      "RTI Jammu and Kashmir Law, Justice & Parliamentary Affairs Department",
      "RTI Jammu and Kashmir Disaster Management, Relief, Rehabilitation & Reconstruction Department",
      "RTI Jammu and Kashmir Election Department",
      "RTI Jammu and Kashmir Finance Department",
      "RTI Jammu and Kashmir Planning, Development & Monitoring Department",
      "RTI Jammu and Kashmir Revenue Department",
      "RTI Jammu and Kashmir Excise & Taxation Department",
      "RTI Jammu and Kashmir Registration & Stamps Department",
      "RTI Jammu and Kashmir Treasuries & Accounts Department",
      "RTI Jammu and Kashmir Estates Department",
      "RTI Jammu and Kashmir School Education Department",
      "RTI Jammu and Kashmir Higher Education Department",
      "RTI Jammu and Kashmir Technical Education Department",
      "RTI Jammu and Kashmir Skill Development Department",
      "RTI Jammu and Kashmir Youth Services & Sports Department",
      "RTI Jammu and Kashmir Science & Technology Department",
      "RTI Jammu and Kashmir Health & Medical Education Department",
      "RTI Jammu and Kashmir AYUSH Department",
      "RTI Jammu and Kashmir Food, Civil Supplies & Consumer Affairs Department",
      "RTI Jammu and Kashmir Public Works (R&B) Department",
      "RTI Jammu and Kashmir Housing & Urban Development Department",
      "RTI Jammu and Kashmir Transport Department",
      "RTI Jammu and Kashmir Power Development Department",
      "RTI Jammu and Kashmir Jal Shakti Department",
      "RTI Jammu and Kashmir Rural Development Department",
      "RTI Jammu and Kashmir Panchayati Raj Department",
      "RTI Jammu and Kashmir Agriculture Production & Farmer Welfare Department",
      "RTI Jammu and Kashmir Horticulture Department",
      "RTI Jammu and Kashmir Animal & Sheep Husbandry Department",
      "RTI Jammu and Kashmir Cooperative Department",
      "RTI Jammu and Kashmir Fisheries Department",
      "RTI Jammu and Kashmir Industries & Commerce Department",
      "RTI Jammu and Kashmir Handloom & Handicrafts Department",
      "RTI Jammu and Kashmir Tourism Department",
      "RTI Jammu and Kashmir Geology & Mining Department",
      "RTI Jammu and Kashmir Forest, Ecology & Environment Department",
      "RTI Jammu and Kashmir Wildlife Protection Department",
      "RTI Jammu and Kashmir Social Welfare Department",
      "RTI Jammu and Kashmir Labour & Employment Department",
      "RTI Jammu and Kashmir Tribal Affairs Department",
      "RTI Jammu and Kashmir Backward Classes & Minorities Department",
      "RTI Jammu and Kashmir Information Technology Department",
      "RTI Jammu and Kashmir e-Governance Department",
      "RTI Jammu and Kashmir Information & Public Relations Department",
      "RTI Jammu and Kashmir Culture Department",
      "RTI Jammu and Kashmir Archives, Archaeology & Museums Department",
    ],
    highlights: [
      "Covered: Jammu and Kashmir Secretariat & State Departments",
      "Expert-drafted RTI questions",
      "Online filing and tracking support",
      "Service across all districts of Jammu and Kashmir",
    ],
    faqs: [
      { q: "Can I file RTI online in Jammu and Kashmir?", a: "Yes, you can file RTI applications for Jammu and Kashmir state departments online through FileMyRTI without visiting government offices." },
      { q: "Do I need to visit any government office to file RTI?", a: "No. The RTI filing process can be completed fully online with assistance from FileMyRTI." },
      { q: "What is the fee for filing an RTI application?", a: "The RTI application fee in Jammu and Kashmir is ₹10 for state departments. BPL cardholders are exempted from paying fees." },
      { q: "How long does it take to receive a response?", a: "As per the RTI Act, the Public Information Officer must provide information within 30 days from the date of receipt. For matters concerning life and liberty, the response must be given within 48 hours." },
      { q: "Can RTI be filed for state government departments in Jammu and Kashmir?", a: "Yes, RTI can be filed for Jammu and Kashmir state government departments and public authorities." },
      { q: "Is RTI filing available for individual citizens?", a: "Yes, any Indian citizen can file an RTI application." },
    ],
    process: {
      steps: [
        {
          step: 1,
          title: "Share your RTI details for Jammu and Kashmir department or office",
          description: "Tell us what information you need from any Jammu and Kashmir Government department or office.",
        },
        {
          step: 2,
          title: "Our team drafts your RTI as per RTI Act, 2005 and Jammu and Kashmir rules",
          description: "Our experts draft a professional RTI application compliant with RTI Act 2005 and Jammu and Kashmir Information Commission guidelines.",
        },
        {
          step: 3,
          title: "We file, track, and help you with replies or appeals",
          description: "We handle submission, fee payment, tracking, and assist with first/second appeals to Jammu and Kashmir Information Commission if needed.",
        },
      ],
    },
    commission: "Jammu and Kashmir Information Commission",
    fee: "₹10",
  },
};

export const getStateBySlug = (slug: string): StateData | undefined => {
  return states[slug.toLowerCase()];
};

export const getAllStateSlugs = (): string[] => {
  return Object.keys(states);
};

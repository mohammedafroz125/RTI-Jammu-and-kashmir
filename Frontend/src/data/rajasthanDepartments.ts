/**
 * Jammu and Kashmir Departments organized by sections
 * Used for RTI department listing page
 * Structure matches Telangana/Delhi format for consistent rendering
 */

export interface JammuAndKashmirDepartmentSection {
  category: string;
  items: string[];
}

export const jammuAndKashmirDepartments: JammuAndKashmirDepartmentSection[] = [
  {
    category: 'RTI Jammu and Kashmir General Administration & Home Affairs',
    items: [
      'RTI Jammu and Kashmir General Administration Department',
      'RTI Jammu and Kashmir Home Department',
      'RTI Jammu and Kashmir Police Department',
      'RTI Jammu and Kashmir Prisons Department',
      'RTI Jammu and Kashmir Law, Justice & Parliamentary Affairs Department',
      'RTI Jammu and Kashmir Disaster Management, Relief, Rehabilitation & Reconstruction Department',
      'RTI Jammu and Kashmir Election Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Finance, Planning & Revenue',
    items: [
      'RTI Jammu and Kashmir Finance Department',
      'RTI Jammu and Kashmir Planning, Development & Monitoring Department',
      'RTI Jammu and Kashmir Revenue Department',
      'RTI Jammu and Kashmir Excise & Taxation Department',
      'RTI Jammu and Kashmir Registration & Stamps Department',
      'RTI Jammu and Kashmir Treasuries & Accounts Department',
      'RTI Jammu and Kashmir Estates Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Education & Skill Development',
    items: [
      'RTI Jammu and Kashmir School Education Department',
      'RTI Jammu and Kashmir Higher Education Department',
      'RTI Jammu and Kashmir Technical Education Department',
      'RTI Jammu and Kashmir Skill Development Department',
      'RTI Jammu and Kashmir Youth Services & Sports Department',
      'RTI Jammu and Kashmir Science & Technology Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Health & Medical Services',
    items: [
      'RTI Jammu and Kashmir Health & Medical Education Department',
      'RTI Jammu and Kashmir AYUSH Department',
      'RTI Jammu and Kashmir Food, Civil Supplies & Consumer Affairs Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Infrastructure & Development',
    items: [
      'RTI Jammu and Kashmir Public Works (R&B) Department',
      'RTI Jammu and Kashmir Housing & Urban Development Department',
      'RTI Jammu and Kashmir Transport Department',
      'RTI Jammu and Kashmir Power Development Department',
      'RTI Jammu and Kashmir Jal Shakti Department',
      'RTI Jammu and Kashmir Rural Development Department',
      'RTI Jammu and Kashmir Panchayati Raj Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Agriculture & Rural Economy',
    items: [
      'RTI Jammu and Kashmir Agriculture Production & Farmer Welfare Department',
      'RTI Jammu and Kashmir Horticulture Department',
      'RTI Jammu and Kashmir Animal & Sheep Husbandry Department',
      'RTI Jammu and Kashmir Cooperative Department',
      'RTI Jammu and Kashmir Fisheries Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Industries, Commerce & Tourism',
    items: [
      'RTI Jammu and Kashmir Industries & Commerce Department',
      'RTI Jammu and Kashmir Handloom & Handicrafts Department',
      'RTI Jammu and Kashmir Tourism Department',
      'RTI Jammu and Kashmir Geology & Mining Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Environment & Forest',
    items: [
      'RTI Jammu and Kashmir Forest, Ecology & Environment Department',
      'RTI Jammu and Kashmir Wildlife Protection Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Social Welfare & Employment',
    items: [
      'RTI Jammu and Kashmir Social Welfare Department',
      'RTI Jammu and Kashmir Labour & Employment Department',
      'RTI Jammu and Kashmir Tribal Affairs Department',
      'RTI Jammu and Kashmir Backward Classes & Minorities Department',
    ],
  },
  {
    category: 'RTI Jammu and Kashmir Information Technology & Culture',
    items: [
      'RTI Jammu and Kashmir Information Technology Department',
      'RTI Jammu and Kashmir e-Governance Department',
      'RTI Jammu and Kashmir Information & Public Relations Department',
      'RTI Jammu and Kashmir Culture Department',
      'RTI Jammu and Kashmir Archives, Archaeology & Museums Department',
    ],
  },
];


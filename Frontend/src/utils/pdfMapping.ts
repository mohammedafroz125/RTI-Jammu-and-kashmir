/**
 * Maps department names to their corresponding PDF file paths
 * Handles variations in PDF file naming conventions
 */

interface PDFMapping {
  [key: string]: string;
}

// Helper function to create PDF path from state, category and department
// Returns the relative path that can be used with import.meta.url or fetch
const createPDFPath = (state: string, category: string, fileName: string): string => {
  // For Vite, we'll use the path relative to src/assets
  return `${state}/${category}/${fileName}`;
};

// Helper function for Jammu and Kashmir PDFs (organized in subfolders)
// Maps department name to actual PDF filename in RTI_Jammu_and_Kashmir_FULL_CERTIFIED_FINAL folder
const createJammuAndKashmirPDFPath = (subfolder: string, pdfFileName: string): string => {
  // Jammu and Kashmir PDFs are in public folder at /assets/PDF/RTI_Jammu_and_Kashmir_FULL_CERTIFIED_FINAL/
  return `RTI_Jammu_and_Kashmir_FULL_CERTIFIED_FINAL/${subfolder}/${pdfFileName}`;
};

// Helper function to detect state from department name
const detectState = (departmentName: string): string => {
  if (departmentName.toLowerCase().includes('telangana')) {
    return 'telangana';
  }
  if (departmentName.toLowerCase().includes('jammu') || departmentName.toLowerCase().includes('kashmir')) {
    return 'jammu-and-kashmir';
  }
  return 'delhi'; // Default to delhi
};

// Mapping of department display names to PDF file names
const departmentToPDFMap: PDFMapping = {
  // RTI Delhi Police & Security
  'RTI Delhi Police': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Police.pdf'),
  'RTI Delhi Fire Services Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Fire Services Department.pdf'),
  'RTI Delhi Prisons Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Prisoners Department.pdf'),
  'RTI Delhi Home Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Home Department.pdf'),
  'RTI Delhi Judicial Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Judicial Department.pdf'),
  'RTI Delhi Law, Justice & Legislative Affairs Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For Delhi Law, Justice & Legislative Affairs Department.pdf'),
  'RTI Delhi Disaster Management Department': createPDFPath('delhi', 'RTI Delhi Police & Security', 'RTI Template For  Delhi Disaster Management Department.pdf'),

  // RTI Delhi Municipal & Housing
  'RTI Delhi Municipal Corporation (MCD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Municipal Corporation (MCD).pdf'),
  'RTI Delhi Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Urban Development Department.pdf'),
  'RTI Delhi Housing & Urban Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For  Delhi Housing & Urban Development Department.pdf'),
  'RTI Delhi Public Works Department (PWD)': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Public Works Department (PWD).pdf'),
  'RTI Delhi Rural Development Department': createPDFPath('delhi', 'RTI Delhi Municipal & Housing', 'RTI Template For Delhi Rural Development Department.pdf'),

  // RTI Delhi Utilities & Infrastructure
  'RTI Delhi Jal Board (DJB)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Templare For Delhi Jal Board (DJB).pdf'),
  'RTI Delhi Transco Limited (DTL)': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Transco Limited (DTL).pdf'),
  'RTI Delhi Power Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Delhi Power Department.pdf'),
  'RTI Delhi Water Supply Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template For Delhi Water Supply Department.pdf'),
  'RTI Delhi Ground Water Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Ground Water Department.pdf'),
  'RTI Delhi Irrigation & Flood Control Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Irrigation & Flood Control Department.pdf'),
  'RTI Delhi Renewable Energy Department': createPDFPath('delhi', 'RTI Delhi Utilities & Infrastructure', 'RTI Template for Delhi Renewable Energy Department.pdf'),

  // RTI Delhi Government Services
  'RTI Delhi Revenue Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Revenue Department.pdf'),
  'RTI Delhi Education Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Education Department.pdf'),
  'RTI Delhi Health & Family Welfare Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Health & Family Welfare.pdf'),
  'RTI Delhi Transport Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Transport Department.pdf'),
  'RTI Delhi Finance Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Finance Department.pdf'),
  'RTI Delhi Registration & Stamps Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Registration & Stamps Department.pdf'),
  'RTI Delhi Planning Department': createPDFPath('delhi', 'RTI Delhi Government Services', 'RTI Template for Delhi Planning Department.pdf'),

  // RTI Delhi Social Welfare
  'RTI Delhi Social Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Social Welfare Department.pdf'),
  'RTI Delhi Scheduled Castes & Scheduled Tribes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Scheduled Castes & Scheduled Tribes Welfare Department.pdf'),
  'RTI Delhi Women & Child Development Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Women & Child Development Department.pdf'),
  'RTI Delhi Backward Classes Welfare Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Backward Classes Welfare Department.pdf'),
  'RTI Delhi Minority Affairs Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Minority Affairs Department.pdf'),
  'RTI Delhi Youth & Sports Department': createPDFPath('delhi', 'RTI Delhi Social Welfare', 'RTI Template for Delhi Youth & Sports Department.pdf'),

  // RTI Delhi Commerce & Industry
  'RTI Delhi Labour Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Labour Department.pdf'),
  'RTI Delhi Industries Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Industries Department.pdf'),
  'RTI Delhi Value Added Tax Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Value Added Tax Department.pdf'),
  'RTI Delhi Food, Civil Supplies & Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Food, Civil Supplies & Consumer Affairs Department.pdf'),
  'RTI Delhi Consumer Affairs Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Consumer Affairs Department.pdf'),
  'RTI Delhi Cooperation Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Cooperation Department.pdf'),
  'RTI Delhi Agricultural Marketing Department': createPDFPath('delhi', 'RTI Delhi Commerce & Industry', 'RTI Template for Delhi Agricultural Marketing Department.pdf'),

  // RTI Delhi Environment & Resources
  'RTI Delhi Environment Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Environment Department.pdf'),
  'RTI Delhi Forest & Wildlife Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Forest & Wildlife Department.pdf'),
  'RTI Delhi Mines & Geology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Mines & Geology Department.pdf'),
  'RTI Delhi Science & Technology Department': createPDFPath('delhi', 'RTI Delhi Environment & Resources', 'RTI Template for Delhi Science & Technology Department.pdf'),

  // RTI Delhi Culture & Tourism
  'RTI Delhi Tourism Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Tourism Department.pdf'),
  'RTI Delhi Art, Culture & Languages Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Art, Culture & Languages Department.pdf'),
  'RTI Delhi Archaeology Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Archaeology Department.pdf'),
  'RTI Delhi Handloom & Handicrafts Department': createPDFPath('delhi', 'RTI Delhi Culture & Tourism', 'RTI Template for Delhi Handloom & Handicrafts Department.pdf'),

  // RTI Delhi Information & Technology
  'RTI Delhi Information & Publicity Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information & Publicity Department.pdf'),
  'RTI Delhi Information Technology Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Information Technology Department.pdf'),
  'RTI Delhi Telecommunications Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Telecommunications Department.pdf'),
  'RTI Delhi Postal Services Department': createPDFPath('delhi', 'RTI Delhi Information & Technology', 'RTI Template for Delhi Postal Services Department.pdf'),

  // RTI Delhi Financial Services
  'RTI Delhi Banking & Financial Services Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Banking & Financial Services Department.pdf'),
  'RTI Delhi Insurance Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Insurance Department.pdf'),
  'RTI Delhi Pension Department': createPDFPath('delhi', 'RTI Delhi Financial Services', 'RTI Template for Delhi Pension Department.pdf'),

  // ========== TELANGANA DEPARTMENTS ==========
  // RTI Telangana Police & Security
  'RTI Telangana Police Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Police Department.pdf'),
  'RTI Telangana Fire Services Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Fire Services Department.pdf'),
  'RTI Telangana Prisons Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Prisons Department.pdf'),
  'RTI Telangana Home Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Home Department.pdf'),
  'RTI Telangana Law Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Law Department.pdf'),
  'RTI Telangana Disaster Management Department': createPDFPath('telangana', 'RTI Telangana Police & Security', 'RTI Template for Telangana Disaster Management Department.pdf'),

  // RTI Telangana Municipal & Housing (Note: folder name has typo "Muncipal")
  'RTI Greater Hyderabad Municipal Corporation (GHMC)': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Greater Hyderabad Municipal Corporation (GHMC).pdf'),
  'RTI Telangana Municipal Administration & Urban Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Municipal Administration & Urban Development Department (MA&UD).pdf'),
  'RTI Telangana Housing Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Housing Department.pdf'),
  'RTI Telangana Public Works Department (PWD)': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Public Works Department (PWD).pdf'),
  'RTI Telangana Panchayat Raj & Rural Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Panchayat Raj & Rural Development Department.pdf'),
  'RTI Telangana Urban Development Department': createPDFPath('telangana', 'RTI Telangana Muncipal & Housing', 'RTI Template for Telangana Urban Development Department.pdf'),

  // RTI Telangana Utilities & Infrastructure
  'RTI Telangana Energy Department': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana Energy Department.pdf'),
  'RTI Telangana State Transmission Corporation (TSTRANSCO)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Transmission Corporation (TSTRANSCO).pdf'),
  'RTI Telangana State Power Generation Corporation (TSGENCO)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Power Generation Corporation (TSGENCO).pdf'),
  'RTI Telangana State Southern Power Distribution Company (TSSPDCL)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Southern Power Distribution Company (TSSPDCL).pdf'),
  'RTI Telangana State Northern Power Distribution Company (TSNPDCL)': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana State Northern Power Distribution Company (TSNPDCL).pdf'),
  'RTI Telangana Irrigation & CAD Department': createPDFPath('telangana', 'RTI Telangana Utilities & Infrastructure', 'RTI Template for Telangana Irrigation & CAD Department.pdf'),

  // RTI Telangana Government Services
  'RTI Telangana Secretariat': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Secretariat.pdf'),
  'RTI Telangana Revenue Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Revenue Department.pdf'),
  'RTI Telangana Education Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Education Department.pdf'),
  'RTI Telangana Health & Family Welfare Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Health & Family Welfare Department.pdf'),
  'RTI Telangana Transport Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Transport Department.pdf'),
  'RTI Telangana Finance Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Finance Department.pdf'),
  'RTI Telangana Registration & Stamps Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Registration & Stamps Department.pdf'),
  'RTI Telangana Planning Department': createPDFPath('telangana', 'RTI Telangana Government Services', 'RTI Template for Telangana Planning Department.pdf'),

  // RTI Telangana Social Welfare (Note: folder name has typo "Telanganga")
  'RTI Telangana Social Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Social Welfare Department.pdf'),
  'RTI Telangana Scheduled Castes Development Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Scheduled Castes Development Department.pdf'),
  'RTI Telangana Scheduled Tribes Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Scheduled Tribes Welfare Department.pdf'),
  'RTI Telangana Women & Child Development Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Women & Child Development Department.pdf'),
  'RTI Telangana Backward Classes Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Backward Classes Welfare Department.pdf'),
  'RTI Telangana Minority Welfare Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Minority Welfare Department.pdf'),
  'RTI Telangana Youth & Sports Department': createPDFPath('telangana', 'RTI Telanganga Social Welfare', 'RTI Template for Telangana Youth & Sports Department.pdf'),

  // RTI Telangana Commerce & Industry
  'RTI Telangana Labour Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA LABOUR DEPARTMENT.pdf'),
  'RTI Telangana Industries & Commerce Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA INDUSTRIES & COMMERCE DEPARTMENT.pdf'),
  'RTI Telangana Commercial Taxes Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA COMMERCIAL TAXES DEPARTMENT.pdf'),
  'RTI Telangana Food & Civil Supplies Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA FOOD & CIVIL SUPPLIES DEPARTMENT.pdf'),
  'RTI Telangana Agriculture & Cooperation Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA AGRICULTURE & COOPERATION DEPARTMENT.pdf'),
  'RTI Telangana Handlooms & Textiles Department': createPDFPath('telangana', 'RTI Telangana Commerce & Industry', 'RTI TEMPLATE FOR TELANGANA HANDLOOMS & TEXTILES DEPARTMENT.pdf'),

  // RTI Telangana Environment & Resources
  'RTI Telangana Environment Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA ENVIRONMENT DEPARTMENT.pdf'),
  'RTI Telangana Forest Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA FOREST DEPARTMENT.pdf'),
  'RTI Telangana Mines & Geology Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA MINES & GEOLOGY DEPARTMENT.pdf'),
  'RTI Telangana Water Resources Department': createPDFPath('telangana', 'RTI Telangana Environment & Resources', 'RTI TEMPLATE FOR TELANGANA WATER RESOURCES DEPARTMENT.pdf'),

  // RTI Telangana Culture & Tourism
  'RTI Telangana Tourism & Culture Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA TOURISM & CULTURE DEPARTMENT.pdf'),
  'RTI Telangana Information & Public Relations Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA INFORMATION & PUBLIC RELATIONS DEPARTMENT.pdf'),
  'RTI Telangana Archaeology Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA ARCHAEOLOGY DEPARTMENT.pdf'),
  'RTI Telangana Endowments Department': createPDFPath('telangana', 'RTI Telangana Culture & Tourism', 'RTI TEMPLATE FOR TELANGANA ENDOWMENTS DEPARTMENT.pdf'),

  // RTI Telangana Information & Technology
  'RTI Telangana Information Technology Department': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA INFORMATION TECHNOLOGY DEPARTMENT.pdf'),
  'RTI Telangana State Technology Services (TSTS)': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE TECHNOLOGY SERVICES (TSTS).pdf'),
  'RTI Telangana State FibreNet Limited': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE FIBRENET LIMITED.pdf'),
  'RTI Telangana State Innovation Cell': createPDFPath('telangana', 'RTI Telangana Information & Technology', 'RTI TEMPLATE FOR TELANGANA STATE INNOVATION CELL.pdf'),

  // RTI Telangana Education & Health
  'RTI Telangana School Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA SCHOOL EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Higher Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA HIGHER EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Technical Education Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA TECHNICAL EDUCATION DEPARTMENT.pdf'),
  'RTI Telangana Medical & Health Department': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA MEDICAL & HEALTH DEPARTMENT.pdf'),
  'RTI Telangana State Medical Services & Infrastructure Development Corporation (TSMSIDC)': createPDFPath('telangana', 'RTI Telangana Education & Health', 'RTI TEMPLATE FOR TELANGANA STATE MEDICAL SERVICES & INFRASTRUCTURE DEVELOPMENT CORPORATION (TSMSIDC).pdf'),

  // ========== JAMMU AND KASHMIR DEPARTMENTS ==========
  // All Jammu and Kashmir PDFs are in: /assets/PDF/RTI_Jammu_and_Kashmir_FULL_CERTIFIED_FINAL/
  // Organized in subfolders by category
  
  // RTI Jammu and Kashmir General Administration & Home Affairs
  'RTI Jammu and Kashmir General Administration Department': createJammuAndKashmirPDFPath('General Administration & Home Affairs', 'RTI_Jammu_and_Kashmir_General_Administration_Department.pdf'),
  'RTI Jammu and Kashmir Home Department': createJammuAndKashmirPDFPath('General Administration & Home Affairs', 'RTI_Jammu_and_Kashmir_Home_Department.pdf'),
  'RTI Jammu and Kashmir Police Department': createJammuAndKashmirPDFPath('General Administration & Home Affairs', 'RTI_Jammu_and_Kashmir_Police_Department.pdf'),
  'RTI Jammu and Kashmir Prisons Department': createJammuAndKashmirPDFPath('General Administration & Home Affairs', 'RTI_Jammu_and_Kashmir_Prisons_Department.pdf'),
  'RTI Jammu and Kashmir Law, Justice & Parliamentary Affairs Department': createJammuAndKashmirPDFPath('General Administration & Home Affairs', 'RTI_Jammu_and_Kashmir_Law_Justice_and_Parliamentary_Affairs_Department.pdf'),
  'RTI Jammu and Kashmir Disaster Management, Relief, Rehabilitation & Reconstruction Department': createJammuAndKashmirPDFPath('General Administration & Home Affairs', 'RTI_Jammu_and_Kashmir_Disaster_Management_Relief_Rehabilitation_and_Reconstruction_Department.pdf'),
  'RTI Jammu and Kashmir Election Department': createJammuAndKashmirPDFPath('General Administration & Home Affairs', 'RTI_Jammu_and_Kashmir_Election_Department.pdf'),

  // RTI Jammu and Kashmir Finance, Planning & Revenue
  'RTI Jammu and Kashmir Finance Department': createJammuAndKashmirPDFPath('Finance, Planning & Revenue', 'RTI_Jammu_and_Kashmir_Finance_Department.pdf'),
  'RTI Jammu and Kashmir Planning, Development & Monitoring Department': createJammuAndKashmirPDFPath('Finance, Planning & Revenue', 'RTI_Jammu_and_Kashmir_Planning_Development_and_Monitoring_Department.pdf'),
  'RTI Jammu and Kashmir Revenue Department': createJammuAndKashmirPDFPath('Finance, Planning & Revenue', 'RTI_Jammu_and_Kashmir_Revenue_Department.pdf'),
  'RTI Jammu and Kashmir Excise & Taxation Department': createJammuAndKashmirPDFPath('Finance, Planning & Revenue', 'RTI_Jammu_and_Kashmir_Excise_and_Taxation_Department.pdf'),
  'RTI Jammu and Kashmir Registration & Stamps Department': createJammuAndKashmirPDFPath('Finance, Planning & Revenue', 'RTI_Jammu_and_Kashmir_Registration_and_Stamps_Department.pdf'),
  'RTI Jammu and Kashmir Treasuries & Accounts Department': createJammuAndKashmirPDFPath('Finance, Planning & Revenue', 'RTI_Jammu_and_Kashmir_Treasuries_and_Accounts_Department.pdf'),
  'RTI Jammu and Kashmir Estates Department': createJammuAndKashmirPDFPath('Finance, Planning & Revenue', 'RTI_Jammu_and_Kashmir_Estates_Department.pdf'),

  // RTI Jammu and Kashmir Education & Skill Development
  'RTI Jammu and Kashmir School Education Department': createJammuAndKashmirPDFPath('Education & Skill Development', 'RTI_Jammu_and_Kashmir_School_Education_Department.pdf'),
  'RTI Jammu and Kashmir Higher Education Department': createJammuAndKashmirPDFPath('Education & Skill Development', 'RTI_Jammu_and_Kashmir_Higher_Education_Department.pdf'),
  'RTI Jammu and Kashmir Technical Education Department': createJammuAndKashmirPDFPath('Education & Skill Development', 'RTI_Jammu_and_Kashmir_Technical_Education_Department.pdf'),
  'RTI Jammu and Kashmir Skill Development Department': createJammuAndKashmirPDFPath('Education & Skill Development', 'RTI_Jammu_and_Kashmir_Skill_Development_Department.pdf'),
  'RTI Jammu and Kashmir Youth Services & Sports Department': createJammuAndKashmirPDFPath('Education & Skill Development', 'RTI_Jammu_and_Kashmir_Youth_Services_and_Sports_Department.pdf'),
  'RTI Jammu and Kashmir Science & Technology Department': createJammuAndKashmirPDFPath('Education & Skill Development', 'RTI_Jammu_and_Kashmir_Science_and_Technology_Department.pdf'),

  // RTI Jammu and Kashmir Health & Medical Services
  'RTI Jammu and Kashmir Health & Medical Education Department': createJammuAndKashmirPDFPath('Health & Medical Services', 'RTI_Jammu_and_Kashmir_Health_and_Medical_Education_Department.pdf'),
  'RTI Jammu and Kashmir AYUSH Department': createJammuAndKashmirPDFPath('Health & Medical Services', 'RTI_Jammu_and_Kashmir_AYUSH_Department.pdf'),
  'RTI Jammu and Kashmir Food, Civil Supplies & Consumer Affairs Department': createJammuAndKashmirPDFPath('Health & Medical Services', 'RTI_Jammu_and_Kashmir_Food_Civil_Supplies_and_Consumer_Affairs_Department.pdf'),

  // RTI Jammu and Kashmir Infrastructure & Development
  'RTI Jammu and Kashmir Public Works (R&B) Department': createJammuAndKashmirPDFPath('Infrastructure & Development', 'RTI_Jammu_and_Kashmir_Public_Works_(RandB)_Department.pdf'),
  'RTI Jammu and Kashmir Housing & Urban Development Department': createJammuAndKashmirPDFPath('Infrastructure & Development', 'RTI_Jammu_and_Kashmir_Housing_and_Urban_Development_Department.pdf'),
  'RTI Jammu and Kashmir Transport Department': createJammuAndKashmirPDFPath('Infrastructure & Development', 'RTI_Jammu_and_Kashmir_Transport_Department.pdf'),
  'RTI Jammu and Kashmir Power Development Department': createJammuAndKashmirPDFPath('Infrastructure & Development', 'RTI_Jammu_and_Kashmir_Power_Development_Department.pdf'),
  'RTI Jammu and Kashmir Jal Shakti Department': createJammuAndKashmirPDFPath('Infrastructure & Development', 'RTI_Jammu_and_Kashmir_Jal_Shakti_Department.pdf'),
  'RTI Jammu and Kashmir Rural Development Department': createJammuAndKashmirPDFPath('Infrastructure & Development', 'RTI_Jammu_and_Kashmir_Rural_Development_Department.pdf'),
  'RTI Jammu and Kashmir Panchayati Raj Department': createJammuAndKashmirPDFPath('Infrastructure & Development', 'RTI_Jammu_and_Kashmir_Panchayati_Raj_Department.pdf'),

  // RTI Jammu and Kashmir Agriculture & Rural Economy
  'RTI Jammu and Kashmir Agriculture Production & Farmer Welfare Department': createJammuAndKashmirPDFPath('Agriculture & Rural Economy', 'RTI_Jammu_and_Kashmir_Agriculture_Production_and_Farmer_Welfare_Department.pdf'),
  'RTI Jammu and Kashmir Horticulture Department': createJammuAndKashmirPDFPath('Agriculture & Rural Economy', 'RTI_Jammu_and_Kashmir_Horticulture_Department.pdf'),
  'RTI Jammu and Kashmir Animal & Sheep Husbandry Department': createJammuAndKashmirPDFPath('Agriculture & Rural Economy', 'RTI_Jammu_and_Kashmir_Animal_and_Sheep_Husbandry_Department.pdf'),
  'RTI Jammu and Kashmir Cooperative Department': createJammuAndKashmirPDFPath('Agriculture & Rural Economy', 'RTI_Jammu_and_Kashmir_Cooperative_Department.pdf'),
  'RTI Jammu and Kashmir Fisheries Department': createJammuAndKashmirPDFPath('Agriculture & Rural Economy', 'RTI_Jammu_and_Kashmir_Fisheries_Department.pdf'),

  // RTI Jammu and Kashmir Industries, Commerce & Tourism
  'RTI Jammu and Kashmir Industries & Commerce Department': createJammuAndKashmirPDFPath('Industries, Commerce & Tourism', 'RTI_Jammu_and_Kashmir_Industries_and_Commerce_Department.pdf'),
  'RTI Jammu and Kashmir Handloom & Handicrafts Department': createJammuAndKashmirPDFPath('Industries, Commerce & Tourism', 'RTI_Jammu_and_Kashmir_Handloom_and_Handicrafts_Department.pdf'),
  'RTI Jammu and Kashmir Tourism Department': createJammuAndKashmirPDFPath('Industries, Commerce & Tourism', 'RTI_Jammu_and_Kashmir_Tourism_Department.pdf'),
  'RTI Jammu and Kashmir Geology & Mining Department': createJammuAndKashmirPDFPath('Industries, Commerce & Tourism', 'RTI_Jammu_and_Kashmir_Geology_and_Mining_Department.pdf'),

  // RTI Jammu and Kashmir Environment & Forest
  'RTI Jammu and Kashmir Forest, Ecology & Environment Department': createJammuAndKashmirPDFPath('Environment & Forest', 'RTI_Jammu_and_Kashmir_Forest_Ecology_and_Environment_Department.pdf'),
  'RTI Jammu and Kashmir Wildlife Protection Department': createJammuAndKashmirPDFPath('Environment & Forest', 'RTI_Jammu_and_Kashmir_Wildlife_Protection_Department.pdf'),

  // RTI Jammu and Kashmir Social Welfare & Employment
  'RTI Jammu and Kashmir Social Welfare Department': createJammuAndKashmirPDFPath('Social Welfare & Employment', 'RTI_Jammu_and_Kashmir_Social_Welfare_Department.pdf'),
  'RTI Jammu and Kashmir Labour & Employment Department': createJammuAndKashmirPDFPath('Social Welfare & Employment', 'RTI_Jammu_and_Kashmir_Labour_and_Employment_Department.pdf'),
  'RTI Jammu and Kashmir Tribal Affairs Department': createJammuAndKashmirPDFPath('Social Welfare & Employment', 'RTI_Jammu_and_Kashmir_Tribal_Affairs_Department.pdf'),
  'RTI Jammu and Kashmir Backward Classes & Minorities Department': createJammuAndKashmirPDFPath('Social Welfare & Employment', 'RTI_Jammu_and_Kashmir_Backward_Classes_and_Minorities_Department.pdf'),

  // RTI Jammu and Kashmir Information Technology & Culture
  'RTI Jammu and Kashmir Information Technology Department': createJammuAndKashmirPDFPath('Information Technology & Culture', 'RTI_Jammu_and_Kashmir_Information_Technology_Department.pdf'),
  'RTI Jammu and Kashmir e-Governance Department': createJammuAndKashmirPDFPath('Information Technology & Culture', 'RTI_Jammu_and_Kashmir_e-Governance_Department.pdf'),
  'RTI Jammu and Kashmir Information & Public Relations Department': createJammuAndKashmirPDFPath('Information Technology & Culture', 'RTI_Jammu_and_Kashmir_Information_and_Public_Relations_Department.pdf'),
  'RTI Jammu and Kashmir Culture Department': createJammuAndKashmirPDFPath('Information Technology & Culture', 'RTI_Jammu_and_Kashmir_Culture_Department.pdf'),
  'RTI Jammu and Kashmir Archives, Archaeology & Museums Department': createJammuAndKashmirPDFPath('Information Technology & Culture', 'RTI_Jammu_and_Kashmir_Archives_Archaeology_and_Museums_Department.pdf'),
};

/**
 * Get the state from a department name
 * @param departmentName - The display name of the department
 * @returns The state name ('telangana', 'jammu-and-kashmir', or 'delhi')
 */
export const getStateFromDepartment = (departmentName: string): string => {
  return detectState(departmentName);
};

/**
 * Get the PDF path for a given department name
 * @param departmentName - The display name of the department
 * @returns The path to the PDF file, or null if not found
 */
export const getPDFPath = (departmentName: string): string | null => {
  return departmentToPDFMap[departmentName] || null;
};

/**
 * Check if a PDF exists for a given department
 * @param departmentName - The display name of the department
 * @returns True if PDF mapping exists, false otherwise
 */
export const hasPDF = (departmentName: string): boolean => {
  return departmentName in departmentToPDFMap;
};


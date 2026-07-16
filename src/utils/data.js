// ─── Meenakshi Pharma — Central Static Data Store ────────────────────────────
// All static content for every page and component is stored here.
// Import only what you need in each file. Never hardcode content elsewhere.

// ─── SITE META ────────────────────────────────────────────────────────────────
export const SITE = {
  name: "Meenakshi Pharma",
  fullName: "Meenakshi Pharma Distributors",
  tagline: "PHARMA DISTRIBUTORS",
  shortTagline: "Trichy's Trusted Pharma Partner",
  description:
    "Leading pharmaceutical distributor in Trichy, Tamil Nadu. Committed to delivering genuine, temperature-controlled medicines with efficiency and absolute trust.",
  yearFounded: 2004,
};

// ─── NAVIGATION LINKS ────────────────────────────────────────────────────────
export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Brands", path: "/brands" },
  { name: "Achievements", path: "/achievements" },
  {
    name: "Web Order",
    path: "https://meenakshipharma.wondersoft.in/ro13.html",
    isExternal: true,
  },
  {
    name: "Stock & Sales",
    path: "http://meenakshipharma.wsweborder.com/StockAndSales/DistributorPages/Login4StockNSales.aspx",
    isExternal: true,
  },
  { name: "Career", path: "/career" },
  { name: "Contact", path: "/contact" },
];

// ─── FOOTER QUICK LINKS ───────────────────────────────────────────────────────
export const FOOTER_QUICK_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Brands We Deal", to: "/brands" },
  { label: "Achievements", to: "/achievements" },
  { label: "Careers", to: "/career" },
  { label: "Contact", to: "/contact" },
];

// ─── FOOTER SERVICES LINKS ────────────────────────────────────────────────────
export const FOOTER_SERVICE_LINKS = [
  { label: "Pharmaceutical Distribution", to: "/services#distribution" },
  { label: "Hospital Supplies", to: "/services#hospital" },
  { label: "Retail Chemists Logistics", to: "/services#retail" },
  { label: "Cold Chain Logistics", to: "/services#logistics" },
];

// ─── HOME: HERO SLIDES ────────────────────────────────────────────────────────
export const HERO_SLIDES = [
  {
    id: 1,
    badge: "Meenakshi Pharma",
    heading: "Trichy's Leading Pharma Distributor",
    headingHighlight: "Pharma",
    type: "illustration-1",
  },
  {
    id: 2,
    badge: "Quick Logistics",
    heading: "Get Your Medicines Now In a Fast, Secure & Safe Way",
    type: "illustration-2",
  },
  {
    id: 3,
    badge: "Genuine Sourcing",
    heading: "100% Genuine Healthcare Brands & Verified Cold Chain",
    type: "illustration-3",
  },
];

// ─── HOME: COMPANY STATS ─────────────────────────────────────────────────────
export const COMPANY_STATS = [
  { val: "20", suffix: "+", label: "Years of Experience" },
  { val: "1000", suffix: "+", label: "Customers Served" },
  { val: "5000", suffix: "+", label: "Medicines Distributed" },
  { val: "300", suffix: "+", label: "Partner Pharmacies" },
];

// ─── HOME / ABOUT: FEATURE CHECKLIST ─────────────────────────────────────────
export const ABOUT_CHECKLIST = [
  { label: "100% Genuine Sourcing" },
  { label: "2C - 8C Cold Storage" },
];

// ─── ABOUT PAGE CONTENT ───────────────────────────────────────────────────────
export const ABOUT_CONTENT = {
  badge: "About Meenakshi Pharma",
  heading: "Two Decades of Absolute Integrity & Healing Trust",
  shortDescription1:
    "Founded in 2004, Meenakshi Pharma has evolved into the premier wholesale pharmaceutical distributor in Trichy, Tamil Nadu. Being recognized as one of the region's top trusted distributors, we bridge global manufacturers with local medical setups.",
  shortDescription2:
    "Under strict WHO-GDP compliance protocols, our secure cold chain systems guarantee safe and clean logistics for vaccines, life-saving therapeutics, and emergency disposables. We serve 1,000+ chemists and nursing units daily with absolute trust.",
  image:
    "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop",
  imageAlt:
    "Professional physician with stethoscope representing clinical excellence",
  imageBadgeText: "GDP CERTIFIED",
  expandedDescription1:
    "Our operations utilize a state-of-the-art 15,000+ square foot heavy-duty warehouse infrastructure equipped with computer-assisted barcode scanning, real-time telemetry stock audits, and temperature-controlled biological chambers. This eliminates fulfillment errors and guarantees immediate item checks.",
  expandedDescription2:
    "By partnering with 86+ global pharmaceutical manufacturing giants (including Cipla, Abbott, Lupin, and Dr. Reddy's), we maintain a consistent catalog of 5,000+ therapeutic drugs, generic tablets, critical care injectables, and surgical consumables to address Tamil Nadu's medical needs. Our delivery fleet operates on strict routes to ensure uncompromised healthcare continuity.",
};

// ─── ABOUT: VISION & MISSION ──────────────────────────────────────────────────
export const VISION_MISSION = {
  vision: {
    heading: "Our Vision",
    text: "To establish ourselves as the most reliable, tech-integrated healthcare logistics and pharmaceutical distribution network in South India. We aim to ensure that every patient, clinic, and pharmacy has immediate access to genuine life-saving therapeutics, without supply chain delays.",
  },
  mission: {
    heading: "Our Mission",
    points: [
      "Provide uncompromised medicine quality by enforcing 100% genuine sourcing directly from certified global brand manufacturers.",
      "Preserve critical cold chains (vaccines, serums) using continuous temperature tracking telemetry protocols.",
      "Optimize client orders through modern automated invoice fulfillment and prompt regional delivery dispatch loops.",
    ],
  },
};

// ─── INFRASTRUCTURE (used in About page masonry gallery) ────────────────────
export const INFRASTRUCTURE = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000",
    title: "Advanced Racking Warehouse",
    description:
      "15,000+ sq ft clean, temperature-regulated environment utilizing modern heavy-duty storage infrastructure.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1000",
    title: "State-of-the-Art Cold Room",
    description:
      "Uncompromised cold-chain maintenance for life-saving vaccines, insulins, and temperature-sensitive biologics (2C to 8C).",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1553413719-87587a29173f?q=80&w=1000",
    title: "Organized Loading Bays",
    description:
      "Dedicated sorting and express logistics loading bays ensuring seamless incoming supply audits and fast dispatches.",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1000",
    title: "Logistics & Delivery Fleet",
    description:
      "Equipped temperature-monitored vehicles and professional delivery crew ensuring swift healthcare supply chain services.",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000",
    title: "Advanced Inventory Systems",
    description:
      "Automated billing and real-time stock-tracking operations to eliminate fulfillment delays and ensure stock availability.",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1579165466521-35b91b9e247b?q=80&w=1000",
    title: "Quality Assurance Laboratory",
    description:
      "Rigorous incoming goods audit protocols to verify packaging integrity, batch numbers, and manufacturer test parameters.",
  },
];

// ─── GROWTH TIMELINE (used in About page) ────────────────────────────────────
export const TIMELINE = [
  {
    year: "2004",
    title: "Establishment",
    description:
      "Founded in Trichy with a team of 3 members and partnerships with 5 pharmaceutical manufacturers, delivering locally.",
  },
  {
    year: "2008",
    title: "Regional Expansion",
    description:
      "Expanded delivery services to neighboring regions, onboarding 20+ healthcare brands and serving 50+ pharmacies.",
  },
  {
    year: "2012",
    title: "Tech Implementation",
    description:
      "Introduced advanced billing, automated batch-tracking systems, and inventory operations to serving over 200+ clients.",
  },
  {
    year: "2016",
    title: "Cold Chain Logistics Setup",
    description:
      "Constructed dedicated cold room systems to distribute temperature-critical biological serums, vaccines, and insulin.",
  },
  {
    year: "2020",
    title: "Emergency Response Network",
    description:
      "Established 24/7 supply lines to major emergency wards and local critical-care clinics during healthcare lockdowns.",
  },
  {
    year: "2024",
    title: "Modern 15k sq.ft Warehouse",
    description:
      "Inaugurated state-of-the-art facility partnering with 86 premium brands, distributing 5000+ medicines to 1000+ clients.",
  },
];

// ─── FOUR CORE SERVICES (used in Services & Home pages) ──────────────────────
export const SERVICES = [
  {
    id: "distribution",
    icon: "Truck",
    title: "Pharmaceutical Distribution",
    tagline: "Uncompromised Supply Security",
    description:
      "Reliable distribution channels of essential tablets, capsules, injectables, and medical formulations from 86 leading pharmaceutical manufacturers directly to regional pharmacies and hospital grids.",
    benefits: [
      "Authenticity assurance straight from manufacturer",
      "Robust batch verification and quality control audits",
      "Immediate stock availability check and online booking",
      "Specialized handling of generic and critical care drugs",
    ],
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "hospital",
    icon: "ShieldCheck",
    title: "Hospital & Clinic Supplies",
    tagline: "Critical Care Logistics Support",
    description:
      "Dedicated supply chains catering to ICU stocks, medical consumables, IV fluids, surgery packs, and diagnostic reagents. Operating under prompt schedules to prevent critical hospital inventory stock-outs.",
    benefits: [
      "Priority order placement and fast-track processing",
      "Comprehensive hospital formulary support",
      "Dedicated account managers for institutions",
      "24/7 emergency dispatch support during critical requirements",
    ],
    image:
      "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "retail",
    icon: "Store",
    title: "Retail Pharmacy Supply",
    tagline: "Empowering Local Pharmacies",
    description:
      "Consistent daily replenishment cycles serving over 1,000+ local retail chemists. We keep shelves fully stocked with verified medications, wellness supplies, and popular OTC pharmaceuticals.",
    benefits: [
      "Flexible order quantities and payment systems",
      "User-friendly web ordering portal integration",
      "Comprehensive selection of over 5,000+ active brands",
      "Prompt credit and returns management systems",
    ],
    image:
      "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "logistics",
    icon: "ThermometerSnowflake",
    title: "Cold Chain Logistics",
    tagline: "Temperature-Sensitive Integrity",
    description:
      "Advanced active and passive refrigeration systems maintaining uncompromised temperature controls for sensitive vaccines, life-saving biological serums, and high-value insulin distributions.",
    benefits: [
      "Rigid continuous temperature data logging (2C to 8C)",
      "Redundant cold-room generator backup installations",
      "Specialized insulated transport boxes with telemetry tracking",
      "Trained clinical handling crew following global WHO guidelines",
    ],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop",
  },
];

// ─── HOME PAGE: 3-CARD SERVICES PREVIEW ──────────────────────────────────────
export const HOME_SERVICES_CARDS = [
  {
    id: 1,
    number: "01",
    icon: "Syringe",
    title: "Vaccines",
    description:
      "Injectibles, mainly vaccines are kept in adequate stock with us. Supplied on regular orders from retailers or dispatched by Institutional delivery staff on urgent basis.",
  },
  {
    id: 2,
    number: "02",
    icon: "Pill",
    title: "Other Speciality Medicines",
    description:
      "All speciality medicines like for nephrology, neurology, neuropsychiatry, urology, etc., and hormonal medicines which are promoted to medical professionals are available at all times.",
  },
  {
    id: 3,
    number: "03",
    icon: "Sparkles",
    title: "Cosmetic Products",
    description:
      "All ethically promoted Dermatologicals and Cosmetologicals from renowned companies. Skin, Hair, and Nail Doctor clinics/hospitals with own dispensing can approach for regular supplies.",
  },
];

// ─── SERVICES PAGE: FLANKED MINDMAP NODES ────────────────────────────────────
export const FLANKED_SERVICES = [
  { id: 1, side: "left", title: "Oncology Products", tagline: "Anti-Cancer Care", description: "Catering to specialized oncology requirements with genuine anti-cancer molecules and emergency sourcing protocols.", icon: "Activity", stats: "S.O.S Procured" },
  { id: 2, side: "left", title: "Vaccines", tagline: "Cold Chain Logistics", description: "Adequate stock of vital pediatric, adult, and travel vaccines kept under rigid temperature parameters.", icon: "Syringe", stats: "2C - 8C Monitored" },
  { id: 3, side: "left", title: "General Medicines", tagline: "450+ Brand Partners", description: "Over 100,000+ SKUs readily available in our temperature-controlled warehouse for prompt retail orders.", icon: "Pill", stats: "100k+ SKUs Stocked" },
  { id: 4, side: "right", title: "Speciality Medicines", tagline: "Super-Specialty Care", description: "Hormonal, nephrology, neurology, neuropsychiatry, and urology therapeutics promoted to professionals.", icon: "Sparkles", stats: "Specialist Approved" },
  { id: 5, side: "right", title: "Cosmetic Products", tagline: "Dermato-Cosmetic", description: "Ethically promoted dermatological solutions supplied directly to specialist doctors and skin clinics.", icon: "Heart", stats: "Direct Brand Sourced" },
  { id: 6, side: "right", title: "Import & Export", tagline: "Global Logistics Corridor", description: "International distribution supply channels facilitating imports and exports of vital pharmaceutical items.", icon: "Truck", stats: "Global Reach Ready" },
];

// ─── BRANDS: 86 pharmaceutical companies ─────────────────────────────────────
export const BRANDS = [
  "Abbott Laboratories","Cipla Limited","Sun Pharmaceutical Industries","Dr. Reddy's Laboratories",
  "Pfizer India","Lupin Limited","Glenmark Pharmaceuticals","Torrent Pharmaceuticals",
  "Alkem Laboratories","Zydus Lifesciences","Biocon Limited","Mankind Pharma",
  "Aurobindo Pharma","Intas Pharmaceuticals","Ipca Laboratories","FDC Limited",
  "Micro Labs","USV Private Limited","Macleods Pharmaceuticals","Alembic Pharmaceuticals",
  "Wockhardt","Sanofi India","GlaxoSmithKline (GSK)","Novartis India",
  "AstraZeneca India","Roche India","Merck (MSD) India","Bayer India",
  "Boehringer Ingelheim","Eli Lilly India","AbbVie India","Johnson & Johnson",
  "Takeda India","Astellas Pharma","Daiichi Sankyo India","Eisai India",
  "Otsuka Pharmaceutical","Shionogi India","Chugai Pharmaceutical","Kyowa Kirin",
  "Ono Pharmaceutical","Mitsubishi Tanabe","Santen Pharmaceutical","Kissei Pharmaceutical",
  "Kaken Pharmaceutical","Torii Pharmaceutical","Nichi-Iko Pharmaceutical","Sawai Pharmaceutical",
  "Towa Pharmaceutical","Mochida Pharmaceutical","Nippon Shinyaku","Zeria Pharmaceutical",
  "Senju Pharmaceutical","Rohto Pharmaceutical","Meiji Seika Pharma","Panacea Biotec",
  "Jubilant Pharmova","Syngene International","Piramal Enterprises","Natco Pharma",
  "Hikal Limited","Laurus Labs","Granules India","Strides Pharma Science",
  "Suven Life Sciences","Ajanta Pharma","Caplin Point Laboratories","Dishman Carbogen Amcis",
  "Eris Lifesciences","J. B. Chemicals & Pharmaceuticals","Indoco Remedies","Marksans Pharma",
  "SMS Pharmaceuticals","Suven Pharmaceuticals","Unichem Laboratories","Blue Cross Laboratories",
  "Albert David","RPG Life Sciences","Morepen Laboratories","Lincoln Pharmaceuticals",
  "Jagsonpal Pharmaceuticals","Themis Medicare","Kopran Limited","Solara Active Pharma Sciences",
  "Shilpa Medicare","Venus Remedies",
];

// ─── BRANDS: Row sizes for staggered marquee (must sum to BRANDS.length = 86) ─
export const BRAND_ROW_SIZES = [10, 11, 10, 11, 10, 11, 11, 10, 2];

// ─── ACHIEVEMENTS (25 milestones gallery) ────────────────────────────────────
export const ACHIEVEMENTS = [
  { id: 1, url: "https://images.unsplash.com/photo-1582750433449-64c382817dea?q=80&w=600&auto=format&fit=crop", title: "ISO 9001:2015 Quality Management Certificate" },
  { id: 2, url: "https://images.unsplash.com/photo-1579165466521-35b91b9e247b?q=80&w=600&auto=format&fit=crop", title: "Best Distributor Award 2024 - South India region" },
  { id: 3, url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop", title: "Outstanding Services in Cold Chain Distribution" },
  { id: 4, url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop", title: "20 Years of Trusted Healthcare Partnerships Milestone" },
  { id: 5, url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=600&auto=format&fit=crop", title: "WHO Good Distribution Practice (GDP) Compliance" },
  { id: 6, url: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?q=80&w=600&auto=format&fit=crop", title: "Top Growth Partner Award - Cipla Pharma" },
  { id: 7, url: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=600&auto=format&fit=crop", title: "Fastest Delivering Distributor recognition - Trichy District" },
  { id: 8, url: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?q=80&w=600&auto=format&fit=crop", title: "Quality Excellence in Vaccine Supply Chain Management" },
  { id: 9, url: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=600&auto=format&fit=crop", title: "Special Recognition for 24/7 COVID-19 Emergency Supply Grid" },
  { id: 10, url: "https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?q=80&w=600&auto=format&fit=crop", title: "Life-Saving Drug Distribution Excellence Badge" },
  { id: 11, url: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop", title: "Pharma Logistics Innovation Award" },
  { id: 12, url: "https://images.unsplash.com/photo-1553413719-87587a29173f?q=80&w=600&auto=format&fit=crop", title: "Best-in-class Temperature Control Systems Installation" },
  { id: 13, url: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=600&auto=format&fit=crop", title: "Authorized Stockist Gold Partner - Abbott Laboratories" },
  { id: 14, url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=600&auto=format&fit=crop", title: "Leading supplier to Top 10 Hospitals in Trichy region" },
  { id: 15, url: "https://images.unsplash.com/photo-1508962914676-134849a727f0?q=80&w=600&auto=format&fit=crop", title: "Zero-Defect Quality Check Certificate" },
  { id: 16, url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop", title: "Outstanding Performance in Generic Medicine Supplies" },
  { id: 17, url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=600&auto=format&fit=crop", title: "Healthcare Community Support Recognition" },
  { id: 18, url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop", title: "Customer Support Excellence Certificate - 24/7 Operations" },
  { id: 19, url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop", title: "Leading Tech-Driven Supply Chain Integrator Award" },
  { id: 20, url: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?q=80&w=600&auto=format&fit=crop", title: "Cleanest Warehouse Facility Audit Rating" },
  { id: 21, url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop", title: "Trusted Partner Award - Dr. Reddy's Laboratories" },
  { id: 22, url: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop", title: "Annual Safety Compliance Award" },
  { id: 23, url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop", title: "Skill Training & Pharmacist Workshops Facilitator Award" },
  { id: 24, url: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=600&auto=format&fit=crop", title: "Green Logistics & Sustainable Operations Citation" },
  { id: 25, url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=600&auto=format&fit=crop", title: "Best Pharmaceutical Distributor in Trichy Region 2025" },
];


// ─── CAREER PAGE CONTENT ──────────────────────────────────────────────────────
export const CAREER_CONTENT = {
  badge: "Join Our Team",
  heading: "Apply at Meenakshi Pharma",
  description: 'Fill in your basic details and click "Send Application". Your email client opens pre-filled — just attach your resume and send.',
};

// ─── CONTACT PAGE CONTENT ─────────────────────────────────────────────────────
export const CONTACT_PAGE_CONTENT = {
  badge: "Inquiries",
  heading: "Get in Touch Directly",
  subheading: "Our customer service relations officers are standing by to process your healthcare inventory requirements. Select your preferred channel below.",
  formBadge: "Direct message",
  formHeading: "Send an Inquiry Message",
  successMessage: "We have logged your query. A pharmaceutical coordinator will contact you via email or phone within the next 24 business hours.",
  mobileBarLabel: "Emergency Supply Line",
};

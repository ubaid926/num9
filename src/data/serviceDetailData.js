// ─── Service Detail Page Data ─────────────────────────────────────────────────
// Each key maps to a URL segment: service/ui-ux-design → serviceDetailData['ui-ux-design']
// Add new service entries here to make them available as pages automatically.

import img1  from "../assets/Fintech Dashboard at Sunset 1.webp";
import img2  from "../assets/Fintech Dashboard at Sunset 1 (1).webp";
import img3  from "../assets/Metallic Blue Lexus in a Warehouse 1.webp";
import img4  from "../assets/homeHeroSectionImages/Sunlit Sentral Education Workspace 1.webp";
import img5  from "../assets/data-analysis.jpg";
import img6  from "../assets/digital-experience.jpg";
import img7  from "../assets/interactive-tech.jpg";
import img8  from "../assets/workLaptop.webp";
import img9  from "../assets/workCar.webp";
import img10 from "../assets/workEmirates.webp";
import img11 from "../assets/bussinesAcltImage.webp";
import img12 from "../assets/homeHeroSectionImages/PwC_Enterprise_Dashboard_in_Executive_Office 1.webp";
import img13 from "../assets/homeHeroSectionImages/PwC_Enterprise_Dashboard_in_Executive_Office 1.webp";
import img14 from "../assets/homeHeroSectionImages/PwC_Enterprise_Dashboard_in_Executive_Office 1.webp";
import img15 from "../assets/homeHeroSectionImages/PwC_Enterprise_Dashboard_in_Executive_Office 1.webp";
import img16 from "../assets/trade-show-activation.jpg";
import img17 from "../assets/aboutus3rdSect.webp";
import img18 from "../assets/homeHeroSectionImages/LifeGive Mediterranean Supplement Showcase 1.webp";
import empireCinemasImg from "../assets/homeHeroSectionImages/Empire Cinemas Grand Lobby 1 (1).webp";

export const serviceDetailData = {

  "ui-ux-design": {
    slug: "ui-ux-design",
    heading: "UI/UX Design",
    description:
      "We create intuitive, user-centered interfaces that turn ideas into impactful digital experiences. Our UI/UX design work combines research, creativity and technology to build products that are simple, engaging and built for real people.",
    industries: ["Healthcare", "Finance", "Retail", "Technology", "Automotive", "Entertainment"],
    locations: ["New York", "Texas", "California"],
  
works: [
  {
    title: "Safeway",
    image: img2,
    category: "Responsive UI/UX Experience",
    description:
      "A seamless and intuitive shopping experience designed to simplify the customer journey across desktop and mobile.",
  },
  {
    title: "CitiBank",
    image: img1,
    category: "Data Visualization Dashboards",
    description:
      "A modern financial dashboard experience that transforms complex data into clear, actionable insights.",
  },
  {
    title: "Lexus",
    image: img9,
    category: "Automotive Digital Experience",
    description:
      "A premium digital experience designed to showcase vehicles through intuitive and engaging interfaces.",
  },
  {
    title: "YMCA",
    image: img13,
    category: "Digital Platform Design",
    description:
      "An accessible digital platform designed to make everyday interactions simpler and more efficient.",
  },
  {
    title: "Sentral Education",
    image: img4,
    category: "Education Platform UI/UX",
    description:
      "A user-focused learning experience that simplifies navigation and improves digital engagement.",
  },
  {
    title: "B2B Dashboard",
    image: img5,
    category: "Enterprise Dashboard Design",
    description:
      "A structured dashboard that helps businesses understand data and manage workflows efficiently.",
  },
  {
    title: "Ticket Reservation",
    image: empireCinemasImg,
    category: "Booking Experience Design",
    description:
      "An intuitive ticket reservation experience designed to make booking fast and effortless.",
  },
  {
    title: "LifeGive",
    image: img18,
    category: "Healthcare Digital Experience",
    description:
      "A clean and engaging digital experience focused on usability and customer interaction.",
  },
  {
    title: "Fairview",
    image: img17,
    category: "Digital Product Design",
    description:
      "A modern interface that simplifies complex user journeys.",
  },
  {
    title: "Almaza",
    image: img15,
    category: "Brand Digital Experience",
    description:
      "A visually engaging digital experience that connects brand storytelling with intuitive design.",
  },
],

  },

  "interactive-experience": {
    slug: "interactive-experience",
    heading: "Interactive Experience",
    description:
      "Immersive digital experiences that captivate and convert. We build engaging interactive platforms — from vehicle configurators and product explorers to multimedia hubs — that bring brands to life online.",
    industries: ["Automotive", "Retail", "Entertainment", "Technology"],
    locations: ["Texas", "New York", "California"],
    works: [
      { title: "Lexus Configurator", image: img9  },
      { title: "Emirates Digital",   image: img10 },
      { title: "Microsoft 365",      image: img8  },
      { title: "PwC Dashboard",      image: img15 },
      { title: "Sentral Platform",   image: img4  },
      { title: "CitiBank Analytics", image: img1  },
    ],
  },

  "vehicle-customization": {
    slug: "vehicle-customization",
    heading: "Vehicle Customization",
    description:
      "Real-time 3D vehicle configurators built for luxury automotive brands. We design and engineer platforms that let customers explore, customize and fall in love with their next vehicle — before they ever visit a dealership.",
    industries: ["Automotive"],
    locations: ["Texas", "California"],
    works: [
      { title: "Lexus Build & Price",       image: img9  },
      { title: "Lexus Accessories Explorer",image: img3  },
      { title: "Lexus Multimedia Hub",      image: img7  },
    ],
  },

  "digital-experience": {
    slug: "digital-experience",
    heading: "Digital Experience",
    description:
      "End-to-end digital platforms that connect brands with their audiences. From enterprise portals and data dashboards to consumer-facing web apps, we build digital experiences that are fast, beautiful and purposeful.",
    industries: ["Finance", "Healthcare", "Retail", "Technology", "Aviation"],
    locations: ["New York", "Texas", "California"],
    works: [
      { title: "CitiBank Dashboard",  image: img1  },
      { title: "Microsoft Enterprise",image: img8  },
      { title: "Emirates Platform",   image: img10 },
      { title: "PwC Analytics",       image: img15 },
      { title: "Safeway Commerce",    image: img2  },
      { title: "Sentral Education",   image: img4  },
      { title: "LifeGive Portal",     image: img18 },
      { title: "Fairview System",     image: img17 },
    ],
  },

  "multimedia-experience": {
    slug: "multimedia-experience",
    heading: "Multimedia Experience",
    description:
      "Rich, content-driven experiences across video, interactive media and brand storytelling. We craft multimedia platforms that engage audiences and deliver brand narratives with impact.",
    industries: ["Entertainment", "Automotive", "Retail", "Media"],
    locations: ["New York", "Texas"],
    works: [
      { title: "Lexus Short Films",    image: img3  },
      { title: "Empire Cinemas",       image: img13 },
      { title: "ZEE5 Streaming",       image: img11 },
      { title: "Shan Brand Story",     image: img16 },
      { title: "Neon Stage Activation",image: img11 },
    ],
  },

  // ── Generic fallback (also used for unmatched slugs) ───────────────────────
  "cloud-architecture": {
    slug: "cloud-architecture",
    heading: "Cloud Architecture",
    description:
      "Scalable, resilient cloud platforms engineered for enterprise performance. We design and build cloud-native systems that give organizations the speed, reliability and security they need to operate at scale.",
    industries: ["Technology", "Finance", "Healthcare"],
    locations: ["New York", "Texas", "California"],
    works: [
      { title: "Microsoft Azure",    image: img8  },
      { title: "CitiBank Cloud",     image: img1  },
      { title: "PwC Infrastructure", image: img15 },
    ],
  },

  "design-systems": {
    slug: "design-systems",
    heading: "Design Systems",
    description:
      "Unified design languages built for scale. We create comprehensive design systems — tokens, component libraries, documentation and governance — that enable teams to build consistently and ship faster.",
    industries: ["Technology", "Finance", "Healthcare", "Retail"],
    locations: ["New York", "Texas", "California"],
    works: [
      { title: "Microsoft Design System", image: img8  },
      { title: "CitiBank UI Library",     image: img1  },
      { title: "Sentral Component Kit",   image: img4  },
      { title: "Safeway Commerce Kit",    image: img2  },
    ],
  },

  "enterprise-workflows": {
    slug: "enterprise-workflows",
    heading: "Enterprise Workflows",
    description:
      "Streamlined business processes powered by thoughtful technology. We map, redesign and automate enterprise workflows to reduce friction, improve collaboration and accelerate output.",
    industries: ["Technology", "Finance", "Healthcare"],
    locations: ["New York", "Texas"],
    works: [
      { title: "Microsoft 365 Workflows", image: img8  },
      { title: "PwC Process Hub",         image: img15 },
      { title: "MedImpact Systems",       image: img13 },
    ],
  },

  "retail-strategy": {
    slug: "retail-strategy",
    heading: "Retail Strategy",
    description:
      "Data-driven retail experiences that convert browsers into buyers. We combine shopper insights, creative strategy and technology to help retail brands grow in-store and online.",
    industries: ["Retail", "Consumer Goods"],
    locations: ["New York", "Texas", "California"],
    works: [
      { title: "Safeway Retail",    image: img2  },
      { title: "JCPenney Commerce", image: img12 },
      { title: "PepsiCo Shopper",   image: img11 },
    ],
  },

  "brand-activation": {
    slug: "brand-activation",
    heading: "Brand Activation",
    description:
      "High-impact campaigns that bring brands to life in the real world. From trade shows and experiential pop-ups to retail activations and sponsorships, we create moments that audiences remember.",
    industries: ["Consumer Goods", "Retail", "Entertainment"],
    locations: ["New York", "Texas", "California"],
    works: [
      { title: "PepsiCo Activation",  image: img11 },
      { title: "Trade Show Execution",image: img16 },
      { title: "Shan Launch Event",   image: img17 },
      { title: "LifeGive Campaign",   image: img18 },
    ],
  },

  "omnichannel-marketing": {
    slug: "omnichannel-marketing",
    heading: "Omnichannel Marketing",
    description:
      "Seamless customer journeys across every channel. We design and execute integrated marketing strategies that connect digital and physical touchpoints to deliver consistent, compelling brand experiences.",
    industries: ["Retail", "Consumer Goods", "Technology"],
    locations: ["New York", "Texas", "California"],
    works: [
      { title: "Safeway Omnichannel",  image: img2  },
      { title: "PepsiCo Digital",      image: img11 },
      { title: "JCPenney Experience",  image: img12 },
      { title: "Snacks.com Platform",  image: img14 },
    ],
  },

  "developer-velocity": {
    slug: "developer-velocity",
    heading: "Developer Velocity",
    description:
      "Empowering engineering teams with streamlined developer workflows, modern design systems, and rapid delivery pipelines that reduce cycle times and scale output.",
    industries: ["Technology", "Enterprise", "Cloud Services"],
    locations: ["New York", "Texas", "California"],
    works: [
      { title: "Microsoft 365 Workflows", image: img8 },
      { title: "Azure DevOps",            image: img8 },
      { title: "CitiBank CI/CD",          image: img1 },
      { title: "PwC Process Hub",         image: img15 },
    ],
  },

  "ai-tooling": {
    slug: "ai-tooling",
    heading: "AI Tooling",
    description:
      "Next-generation AI integrations, intelligent copilots, and machine learning interfaces designed to supercharge productivity and automate complex enterprise decision-making.",
    industries: ["Technology", "Enterprise", "Finance", "Healthcare"],
    locations: ["New York", "Texas", "California"],
    works: [
      { title: "Microsoft Copilot Tools", image: img8 },
      { title: "CitiBank AI Analytics",   image: img1 },
      { title: "PwC Intelligence",        image: img15 },
    ],
  },

  "fintech": {
    slug: "fintech",
    heading: "FinTech",
    description:
      "Modern financial technology platforms engineered for security, speed, and trust. From real-time payment rails to institutional analytics dashboards.",
    industries: ["Finance", "Banking", "Enterprise"],
    locations: ["New York", "California", "Texas"],
    works: [
      { title: "CitiBank Dashboard",      image: img1 },
      { title: "Standard Chartered Hub",  image: img1 },
      { title: "PwC Financial Core",      image: img15 },
    ],
  },

  "digital-banking": {
    slug: "digital-banking",
    heading: "Digital Banking",
    description:
      "Customer-centric digital banking experiences that transform everyday money management into intuitive, frictionless interactions across mobile and web.",
    industries: ["Finance", "Banking"],
    locations: ["New York", "California"],
    works: [
      { title: "CitiBank Mobile",         image: img1 },
      { title: "Standard Chartered App",  image: img1 },
      { title: "Fintech Core Banking",    image: img2 },
    ],
  },

  "healthtech-ux": {
    slug: "healthtech-ux",
    heading: "HealthTech UX",
    description:
      "Intuitive, accessible, and HIPAA-compliant digital health interfaces designed for clinicians, patients, and care administrators to improve health outcomes.",
    industries: ["Healthcare", "Life Sciences", "Telemedicine"],
    locations: ["California", "Texas", "New York"],
    works: [
      { title: "MedImpact Portal",        image: img13 },
      { title: "LifeGive Health",         image: img18 },
      { title: "Magellan Care Platform",  image: img5 },
    ],
  },

  "aviation-technology": {
    slug: "aviation-technology",
    heading: "Aviation Technology",
    description:
      "High-reliability flight systems, passenger experience platforms, and inflight digital services built for world-class global airlines.",
    industries: ["Aviation", "Travel & Hospitality"],
    locations: ["California", "New York"],
    works: [
      { title: "Emirates Experience",     image: img10 },
      { title: "Global Flight Booking",   image: img10 },
      { title: "In-Flight Entertainment", image: img10 },
    ],
  },

  "agtech-innovation": {
    slug: "agtech-innovation",
    heading: "AgTech Innovation",
    description:
      "Data-driven agricultural platforms, precision farming dashboards, and supply chain management tools that empower growers and agribusiness leaders.",
    industries: ["Agriculture", "Enterprise", "Supply Chain"],
    locations: ["Texas", "California"],
    works: [
      { title: "Nutrien Digital Core",    image: img14 },
      { title: "Supply Chain Insights",   image: img5 },
      { title: "Operational Dashboards",  image: img8 },
    ],
  },

};

/* Map of standard slugs to exact display titles */
export const TAG_TITLE_MAP = {
  "ui-ux-design": "UI/UX Design",
  "ux-ui-design": "UX/UI Design",
  "interactive-experience": "Interactive Experience",
  "vehicle-customization": "Vehicle Customization",
  "digital-experience": "Digital Experience",
  "multimedia-experience": "Multimedia Experience",
  "cloud-architecture": "Cloud Architecture",
  "design-systems": "Design Systems",
  "enterprise-workflows": "Enterprise Workflows",
  "developer-velocity": "Developer Velocity",
  "ai-tooling": "AI Tooling",
  "retail-strategy": "Retail Strategy",
  "brand-activation": "Brand Activation",
  "shopper-experience": "Shopper Experience",
  "interactive-campaigns": "Interactive Campaigns",
  "omnichannel-marketing": "Omnichannel Marketing",
  "aviation-technology": "Aviation Technology",
  "digital-hospitality": "Digital Hospitality",
  "journey-mapping": "Journey Mapping",
  "mobile-experience": "Mobile Experience",
  "omnichannel-booking": "Omnichannel Booking",
  "mobile-app": "Mobile App",
  "web-development": "Web Development",
  "e-commerce": "E-Commerce",
  "e-commerce-ux": "E-Commerce UX",
  "agtech-innovation": "AgTech Innovation",
  "supply-chain-ux": "Supply Chain UX",
  "enterprise-intelligence": "Enterprise Intelligence",
  "operational-dashboards": "Operational Dashboards",
  "data-integration": "Data Integration",
  "saas-architecture": "SaaS Architecture",
  "product-design": "Product Design",
  "api-ecosystems": "API Ecosystems",
  "high-performance-web": "High-Performance Web",
  "system-scalability": "System Scalability",
  "healthtech-ux": "HealthTech UX",
  "hipaa-compliance": "HIPAA Compliance",
  "patient-portals": "Patient Portals",
  "claims-automation": "Claims Automation",
  "healthcare-analytics": "Healthcare Analytics",
  "omnichannel-retail": "Omnichannel Retail",
  "customer-loyalty": "Customer Loyalty",
  "in-store-digital": "In-Store Digital",
  "promotional-systems": "Promotional Systems",
  "behavioral-health": "Behavioral Health",
  "clinical-care-optimization": "Clinical Care Optimization",
  "data-driven-healthcare": "Data-Driven Healthcare",
  "provider-portals": "Provider Portals",
  "patient-outcomes": "Patient Outcomes",
  "digital-platform": "Digital Platform",
  "network-design": "Network Design",
  "cultural-innovation": "Cultural Innovation",
  "community": "Community",
  "exhibit-design": "Exhibit Design",
  "brand-experience": "Brand Experience",
  "trade-show": "Trade Show",
  "experiential-marketing": "Experiential Marketing",
  "3d-visualization": "3D Visualization",
  "fintech": "FinTech",
  "digital-banking": "Digital Banking",
  "mobile-platform": "Mobile Platform",
  "enterprise": "Enterprise",
  "data-visualization": "Data Visualization",
};

/** Convert any raw tag or text into a clean URL-friendly slug */
export function slugify(text) {
  if (!text) return "";
  return String(text)
    .trim()
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const WORK_CATALOG = [
  { title: "Safeway", image: img2, category: "Responsive UI/UX Experience" },
  { title: "CitiBank", image: img1, category: "Data Visualization Dashboards" },
  { title: "Lexus", image: img9, category: "Automotive Digital Experience" },
  { title: "YMCA", image: img13, category: "Digital Platform Design" },
  { title: "Sentral Education", image: img4, category: "Education Platform UI/UX" },
  { title: "Microsoft", image: img8, category: "Enterprise Dashboard Design" },
  { title: "Empire Cinemas", image: empireCinemasImg, category: "Booking Experience Design" },
  { title: "LifeGive", image: img18, category: "Healthcare Digital Experience" },
  { title: "Fairview", image: img17, category: "Digital Product Design" },
  { title: "Emirates", image: img10, category: "Brand Digital Experience" },
];

function padWorks(works, count = 10) {
  const result = [...(works || [])];
  const seen = new Set(result.map((work) => work.title.toLowerCase()));

  for (const extra of WORK_CATALOG) {
    if (result.length >= count) break;
    const key = extra.title.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    result.push({ ...extra });
  }

  return result.slice(0, count);
}

export function getServiceDetail(slug, customTitle) {
  if (!slug) return null;
  const normalizedSlug = slugify(slug);

  // 1. Direct match in serviceDetailData
  const found = serviceDetailData[normalizedSlug] || serviceDetailData[slug];
  if (found) {
    const heading = customTitle || found.heading;
    return {
      ...found,
      heading,
      works: padWorks(found.works, 10),
    };
  }

  // 2. Synthesize dynamically with exact title match
  const heading =
    customTitle ||
    TAG_TITLE_MAP[normalizedSlug] ||
    TAG_TITLE_MAP[slug] ||
    slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  return {
    slug: normalizedSlug,
    heading,
    description: `We design and deliver impactful ${heading.toLowerCase()} solutions that turn visionary concepts into scalable digital reality. Our multidisciplinary team combines engineering rigor with intuitive user experiences to solve complex business challenges.`,
    industries: ["Technology", "Enterprise", "Healthcare", "Finance", "Retail", "Automotive"],
    locations: ["New York", "Texas", "California"],
    works: padWorks([], 10),
  };
}

// All slugs that have a registered service detail page
export const allServiceSlugs = Object.keys(serviceDetailData);


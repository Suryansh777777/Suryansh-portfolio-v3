/* All copy extracted 1:1 from the Framer project (Emili Hearth portfolio). */

export const profile = {
  name: "Emili",
  fullName: "Emili Hearth",
  role: "Framer Designer",
  experienceLabel: "Experience",
  experience: ["5-year Product Design", "2-year Motion Design", "1-year Graphic Design"],
  toolsLabel: "Tools that I use",
  tools: ["Framer", "Sketch", "Figma"],
  cta: { label: "Get In Touch", href: "/contact-page" },
};

export const navLinks = [
  { label: "Portfolio", href: "#works" },
  { label: "FAQs", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact-section" },
];

export const works = {
  tag: "#Portfolio Pieces",
  heading: "Check Out My Latest Works",
  body: "Check Out My Latest Works",
  cta: { label: "Get In Touch", href: "#contact-section" },
  projects: [
    { tag: "#Webdesign", title: "Portfolio Website", href: "/projects/designer-portfolio", image: "/framer/work-portfolio.png" },
    { tag: "#Webdesign", title: "E-commerce Website", href: "/projects/e-commerce-website", image: "/framer/work-ecommerce.png" },
    { tag: "#Webdesign", title: "AI Website", href: "/projects/ai-website", image: "/framer/work-ai.png" },
    { tag: "#Webdesign", title: "SaaS Website", href: "/projects/saas-website", image: "/framer/work-saas.png" },
  ],
};

export const about = {
  tag: "#Stack and Process",
  heading: "About My Work and Expertise",
  toolStackLabel: "My Tool Stack",
  tools: ["Figma", "Framer", "Sketch", "OpenAI"],
  processLabel: "Work Process",
  process: [
    {
      step: "#Step 1",
      title: "Research & Discovery",
      body: "Define project goals, audience needs, market insights, and key opportunities before starting design work.",
    },
    {
      step: "#Step 2",
      title: "Structure & Wireframing",
      body: "Create user flows, page structures, and simple layouts to organize content and website interactions.",
    },
    {
      step: "#Step 3",
      title: "UI Design & Prototyping",
      body: "Design responsive visuals, reusable components, and interactive prototypes for smooth user journeys.",
    },
    {
      step: "#Step 4",
      title: "Development & Testing",
      body: "Develop the website, optimize for all devices, test usability and performance, then refine before launch.",
    },
  ],
  profileGreeting: "Hi :)",
};

export const ticker = ["MY LIFE IS ABOUT DESIGN", "#Product Design", "#WEB Design"];

export const faqs = {
  tag: "#Questions",
  heading: "What Can I do For You",
  body: "Most common questions others asked",
  items: [
    {
      q: "What kinds of designs can you create?",
      a: "It can be app design, dashboard design, or web design, whatever you need. I can help you with the full process from ideas and layout concepts to visual style, structure, and user experience. You can count on me to support your project and create clean, modern, and functional designs tailored to your needs.",
    },
    {
      q: "Do you design complete websites?",
      a: "Yes, I manage the entire website design process from the initial concept and strategy to the final polished UI. This includes research, wireframing, UX planning, visual design, responsive layouts, and developer-ready design delivery.",
    },
    {
      q: "What does your design process look like?",
      a: "My process usually starts with understanding your goals, audience, and project requirements. From there, I move into research, wireframes, and structure planning, followed by visual design and interactive prototypes. After feedback rounds and refinements, I deliver the final responsive UI files ready for development.",
    },
    {
      q: "Can you redesign existing websites or UIs?",
      a: "Absolutely. I can redesign existing websites and interfaces to improve usability, visual consistency, user experience, and overall performance while keeping your brand identity and business goals in focus.",
    },
    {
      q: "Do you create wireframes and prototypes?",
      a: "Yes, wireframes and prototypes are an important part of the process. They help define the structure, user flow, and functionality early on, ensuring the final design is both user-friendly and aligned with your goals before moving into high-fidelity UI design.",
    },
  ],
};

export const pricing = {
  tag: "#Pricing",
  heading: "Find the pricing that fits you best",
  body: "Get your website or product design ready in under a month.",
  cards: [
    {
      badge: "Website Design",
      title: "Website Design",
      price: "$2000",
      cta: { label: "Get In Touch", href: "#contact-section" },
      features: ["1-12 Pages", "2 Full Design Concepts", "Illustrations-Animations", "Framer Development", "Support"],
    },
    {
      badge: "Product Design",
      title: "UI/UX Design",
      price: "$4000",
      cta: { label: "Get In Touch", href: "#contact-section" },
      features: ["Mobile App or Dashboard", "Design Concepts", "UX Research", "Development", "Support"],
    },
  ],
};

export const contact = {
  tag: "#Contact Me",
  heading: "Get In Touch",
  body: "We discussed your project in detail, including your goals and requirements.",
  bookingUrl: "https://cal.com/framer-placeholder/default",
  testimonials: [
    { quote: "Outstanding service and rapid delivery. The completed website looked exactly perfect.", name: "Adam K.", role: "Business Owner" },
    { quote: "Great communication and fast delivery. The final design matched exactly what we wanted.", name: "Edward D.", role: "Creative Strategist" },
    { quote: "Very helpful team and super fast updates. The final graphics came out beautifully. Thanks", name: "Anna E.", role: "Entrepreneur" },
    { quote: "Amazing quality and excellent timing. The finished project was exactly as requested.", name: "Edward D.", role: "Creative Strategist" },
  ],
};

export const footer = {
  name: "Emili Hearth",
  subtitle: "Designer Portfolio",
  credit: "Designed by @ItsPeterDesign",
  navLinks,
  socials: [{ label: "Instagram", href: "https://instagram.com" }],
};

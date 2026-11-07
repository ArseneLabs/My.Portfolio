export type Project = {
  id: string;
  title: string;
  shortTitle: string;
  category: 'Full-Stack' | 'E-Commerce & Logistics' | 'Enterprise & Management';
  role: string;
  duration: string;
  status: 'Live Production' | 'Client System' | 'Case Study';
  badge?: string;
  url?: string;
  repo?: string;
  accent: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: 'eatts',
    title: 'East African Transport & Tourism Services',
    shortTitle: 'EATTS',
    category: 'E-Commerce & Logistics',
    role: 'Lead Full-Stack Developer & System Architect',
    duration: '2024 — Present',
    status: 'Live Production',
    badge: '⭐ Production Live',
    url: 'https://eastafricantts.com',
    accent: 'crimson',
    summary:
      'Flagship live booking platform for international tourists and business travelers across East Africa. Architected end-to-end reservation workflows, administrative dispatch portals, and real-time flight monitoring.',
    highlights: [
      'Real-time airport transfer reservation workflows with live availability',
      'Flight-delay monitoring integration for automatic schedule reshuffling',
      'Administrative management portal for booking dispatch & fleet tracking',
      'Secure relational transactions across multi-service booking pipelines',
      'REST API layer connecting React frontend with Django business logic',
    ],
    stack: ['React.js', 'Django', 'Python', 'MySQL', 'REST APIs', 'Tailwind CSS'],
  },
  {
    id: 'ino-discovery',
    title: 'Ino Discovery — Tourism, Logistics & Automotive',
    shortTitle: 'Ino Discovery',
    category: 'E-Commerce & Logistics',
    role: 'Backend & Full-Stack Developer',
    duration: '2023 — 2024',
    status: 'Client System',
    accent: 'emerald',
    summary:
      'Multi-service ecosystem combining automotive sales, rental pipelines, and real-time event booking & ticketing into one secure, unified platform.',
    highlights: [
      'Unified automotive sales + rental pipeline management',
      'Real-time event booking & ticketing with QR confirmation',
      'Secure relational transactions across mixed service types',
      'Modular Django REST architecture enabling rapid service extension',
      'Admin dashboard for cross-service revenue reconciliation',
    ],
    stack: ['React.js', 'Django', 'MySQL', 'REST Framework'],
  },
  {
    id: 'jna-furniture',
    title: 'J & A Furniture — Modern E-Commerce Platform',
    shortTitle: 'J & A Furniture',
    category: 'E-Commerce & Logistics',
    role: 'Full-Stack Developer & UI/UX Designer',
    duration: '2023',
    status: 'Client System',
    accent: 'amber',
    summary:
      'Scalable online storefront with dynamic catalog filtering, cart state management, secure authentication, and a conversion-optimized checkout flow.',
    highlights: [
      'Dynamic catalog filtering by category, price & material',
      'Persistent shopping cart with synchronized state management',
      'User authentication & order history tracking',
      'Optimized checkout UX reducing abandonment friction',
      'Responsive product gallery with micro-interaction hover states',
    ],
    stack: ['React.js', 'Django REST Framework', 'MySQL', 'Tailwind CSS'],
  },
  {
    id: 'wmtss',
    title: 'WMTSS Automated School Management System',
    shortTitle: 'WMTSS',
    category: 'Enterprise & Management',
    role: 'Frontend Developer Intern & System Analyst',
    duration: '2022 — 2023',
    status: 'Case Study',
    accent: 'sky',
    summary:
      'Complete institutional digitization platform covering student registration, automated grading, attendance registers, and dynamic transcript generation.',
    highlights: [
      'Student registration & academic record management',
      'Automated course grade calculation engine',
      'Digital attendance registers with exportable reports',
      'Dynamic transcript generator with institutional branding',
      'Role-based dashboards for staff, students & administrators',
    ],
    stack: ['React.js', 'Relational DB', 'Tailwind CSS'],
  },
  {
    id: 'me-enterprise',
    title: 'M & E Enterprise — Stock & Supply Chain System',
    shortTitle: 'M & E Enterprise',
    category: 'Enterprise & Management',
    role: 'Full-Stack Developer',
    duration: '2022',
    status: 'Client System',
    accent: 'violet',
    summary:
      'Real-time stock audit, purchase/sales logging, inventory threshold alerts, and automated financial ledger generation for a trading enterprise.',
    highlights: [
      'Real-time stock audit management dashboard',
      'Purchase & sales transaction loggers with audit trails',
      'Inventory threshold notifications & low-stock alerts',
      'Automated financial ledger & report generation',
      'Role-based access for warehouse & finance teams',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'HTML5/CSS3'],
  },
  {
    id: 'b-mis',
    title: 'B-MIS — Boutique Management Information System',
    shortTitle: 'B-MIS',
    category: 'Enterprise & Management',
    role: 'Full-Stack Developer (WMTSS Club)',
    duration: '2022',
    status: 'Client System',
    accent: 'rose',
    summary:
      'Retail management software engineered for daily boutique operations, point-of-sale receipting, and real-time sales reporting.',
    highlights: [
      'Point-of-sale receipting with printable thermal receipts',
      'Real-time daily sales reporting & revenue tracking',
      'Inventory item management with SKU & stock levels',
      'Cashier shift open/close reconciliation workflow',
      'Clean POS UI optimized for fast retail counter operation',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL'],
  },
  {
    id: 'pixel-inc',
    title: 'Pixel Inc — E-Commerce Web Experience',
    shortTitle: 'Pixel Inc',
    category: 'Full-Stack',
    role: 'Frontend Developer Intern',
    duration: '2021',
    status: 'Case Study',
    accent: 'cyan',
    summary:
      'Fluid, conversion-focused e-commerce layouts engineered to maximize product discovery on mobile viewports with crisp responsive interactions.',
    highlights: [
      'Mobile-first responsive e-commerce layout system',
      'Conversion-optimized product discovery flows',
      'Smooth scroll & micro-interaction UI polish',
      'Semantic HTML5 structure with accessible navigation',
      'Performance-tuned asset loading for mobile networks',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
  },
  {
    id: 'auca-library',
    title: 'AUCA University Library Barcode System',
    shortTitle: 'AUCA Library',
    category: 'Enterprise & Management',
    role: 'System Analyst & Software Designer',
    duration: '2022',
    status: 'Case Study',
    accent: 'indigo',
    summary:
      'Modernized university library circulation & book management with a computerized barcode tracking proposal integrating hardware with a relational database.',
    highlights: [
      'Barcode-based book circulation tracking workflow',
      'Hardware integration proposal for barcode scanners',
      'Relational database architecture for catalog & loans',
      'Circulation workflow modernization & reporting',
      'Systems analysis documentation for institutional rollout',
    ],
    stack: ['Systems Analysis', 'Barcode Hardware Integration', 'Database Architecture'],
  },
];

export type SkillCategory = {
  id: string;
  label: string;
  icon: string;
  accent: string;
  skills: { name: string; level: 'Core' | 'Advanced' | 'Expert' | 'Proficient' }[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend & UI/UX',
    icon: 'Layout',
    accent: 'crimson',
    skills: [
      { name: 'React.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Advanced' },
      { name: 'JavaScript', level: 'Expert' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'HTML5 / CSS3', level: 'Expert' },
      { name: 'Bootstrap', level: 'Advanced' },
      { name: 'Figma & Wireframing', level: 'Advanced' },
      { name: 'Responsive Design', level: 'Expert' },
      { name: 'Micro-Interactions', level: 'Advanced' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend & APIs',
    icon: 'Server',
    accent: 'emerald',
    skills: [
      { name: 'Django', level: 'Expert' },
      { name: 'Laravel', level: 'Advanced' },
      { name: 'Python', level: 'Advanced' },
      { name: 'PHP', level: 'Advanced' },
      { name: 'C / C++', level: 'Proficient' },
      { name: 'RESTful API Architecture', level: 'Expert' },
      { name: 'Authentication & JWT', level: 'Advanced' },
      { name: 'MVC Patterns', level: 'Expert' },
    ],
  },
  {
    id: 'database',
    label: 'Databases & Cloud',
    icon: 'Database',
    accent: 'sky',
    skills: [
      { name: 'MySQL', level: 'Expert' },
      { name: 'Oracle DB', level: 'Advanced' },
      { name: 'SQL Optimization', level: 'Advanced' },
      { name: 'Linux Server Management', level: 'Advanced' },
      { name: 'Apache / Nginx', level: 'Proficient' },
      { name: 'Git & GitHub Actions', level: 'Advanced' },
      { name: 'AWS Hosting', level: 'Proficient' },
    ],
  },
  {
    id: 'business',
    label: 'Business & IT Operations',
    icon: 'Briefcase',
    accent: 'amber',
    skills: [
      { name: 'Tender & Bid Documentation', level: 'Advanced' },
      { name: 'IT Infrastructure Support', level: 'Advanced' },
      { name: 'LAN/WAN Networking', level: 'Proficient' },
      { name: 'Computer Systems Diagnostics', level: 'Advanced' },
    ],
  },
];

export type Experience = {
  id: string;
  role: string;
  org: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  icon: string;
  accent: string;
};

export const experiences: Experience[] = [
  {
    id: 'eatts',
    role: 'Lead Web Application Developer & System Architect',
    org: 'East African Transport and Tourism Services Ltd (EATTS)',
    period: '2024 — Present',
    location: 'Kigali, Rwanda',
    description:
      'Leading full-stack architecture and delivery of the EATTS digital booking platform serving international tourists and business travelers.',
    achievements: [
      'Architected & shipped the live production platform at eastafricantts.com',
      'Engineered real-time reservation workflows & flight-delay monitoring',
      'Built administrative dispatch portal for fleet & booking management',
    ],
    icon: 'Rocket',
    accent: 'crimson',
  },
  {
    id: 'ino',
    role: 'Backend & Full-Stack Developer',
    org: 'Ino Discovery & Freelance Client Platforms',
    period: '2023 — 2024',
    location: 'Remote / Kigali',
    description:
      'Delivered multi-service booking & logistics platforms for clients, owning backend architecture and full-stack integration end-to-end.',
    achievements: [
      'Designed modular Django REST architecture for multi-service ecosystems',
      'Integrated automotive, rental & event ticketing into unified platforms',
      'Shipped secure relational transaction layers for client systems',
    ],
    icon: 'Code2',
    accent: 'emerald',
  },
  {
    id: 'bid',
    role: 'Bid Manager (Tenders & Proposals)',
    org: 'NIMEN General Business',
    period: '2022 — 2023',
    location: 'Kigali, Rwanda',
    description:
      'Prepared high-stakes technical bids and compliance proposals for enterprise tenders, aligning technical capability with strict procurement standards.',
    achievements: [
      'Authored technical proposals for enterprise tender submissions',
      'Ensured bid compliance with multi-vendor procurement requirements',
      'Bridged engineering capability with business-grade documentation',
    ],
    icon: 'FileText',
    accent: 'amber',
  },
  {
    id: 'frontdesk',
    role: 'Front Desk Operations & Client Coordinator',
    org: 'NIMEN General Business',
    period: '2022',
    location: 'Kigali, Rwanda',
    description:
      'Coordinated front-desk operations and client communications, ensuring smooth day-to-day business flow and stakeholder satisfaction.',
    achievements: [
      'Streamlined front-desk client intake & communication workflows',
      'Coordinated cross-team scheduling and documentation handoffs',
    ],
    icon: 'Users',
    accent: 'violet',
  },
  {
    id: 'it',
    role: 'IT Systems & Network Support Specialist',
    org: 'NGB Ltd & IIC',
    period: '2021 — 2022',
    location: 'Kigali, Rwanda',
    description:
      'Managed network routing, LAN/WAN diagnostics, and hardware maintenance across organizational IT infrastructure.',
    achievements: [
      'Diagnosed and resolved LAN/WAN routing & connectivity incidents',
      'Maintained computer hardware & peripheral infrastructure',
      'Standardized IT support response procedures',
    ],
    icon: 'Network',
    accent: 'sky',
  },
];

export type Credential = {
  id: string;
  title: string;
  issuer: string;
  period: string;
  type: 'Education' | 'Certification';
  verified: boolean;
  icon: string;
  accent: string;
};

export const credentials: Credential[] = [
  {
    id: 'auca',
    title: 'Bachelor in Software Engineering',
    issuer: 'AUCA — Adventist University of Central Africa',
    period: 'Expected 2027',
    type: 'Education',
    verified: true,
    icon: 'GraduationCap',
    accent: 'crimson',
  },
  {
    id: 'wmhs',
    title: 'Software Development Diploma',
    issuer: 'World Mission High School',
    period: '2020 — 2023',
    type: 'Education',
    verified: true,
    icon: 'BookOpen',
    accent: 'emerald',
  },
  {
    id: 'simplilearn',
    title: 'Full Stack Web Development Certification',
    issuer: 'Simplilearn',
    period: 'Certified',
    type: 'Certification',
    verified: true,
    icon: 'BadgeCheck',
    accent: 'sky',
  },
  {
    id: 'gemini',
    title: 'AI & Gemini Academy Certification',
    issuer: 'Google Gemini',
    period: 'Certified',
    type: 'Certification',
    verified: true,
    icon: 'Sparkles',
    accent: 'amber',
  },
  {
    id: 'hackerrank',
    title: 'Advanced SQL Certification',
    issuer: 'HackerRank',
    period: 'Certified',
    type: 'Certification',
    verified: true,
    icon: 'Database',
    accent: 'violet',
  },
  {
    id: 'oracle',
    title: 'Oracle DB Certification',
    issuer: 'Oracle Dev GYM',
    period: 'Certified',
    type: 'Certification',
    verified: true,
    icon: 'Server',
    accent: 'rose',
  },
  {
    id: 'cybrary',
    title: 'Introduction to IT & Cybersecurity',
    issuer: 'Cybrary',
    period: 'Certified',
    type: 'Certification',
    verified: true,
    icon: 'ShieldCheck',
    accent: 'cyan',
  },
  {
    id: 'twb',
    title: 'Data Validation Certification',
    issuer: 'TWB',
    period: 'Certified',
    type: 'Certification',
    verified: true,
    icon: 'CheckCircle2',
    accent: 'indigo',
  },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certificates', href: '#credentials' },
  { label: 'Contact', href: '#contact' },
];

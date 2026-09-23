export const company = {
  name: "KloudEra Technologies",
  short: "Kloudera",
  domain: "kloudera.ai",
  email: "info@kloudera.ai",
  phones: ["+91 9899822926", "+91 9390484180"],
  tagline: "Architecting Zero-Trust Digital Enterprises",
  intro:
    "Empowering Fortune 500 infrastructure with 24/7 Security Operations Surveillance, custom GPU AI compute clusters, and seamless Microsoft Cloud ecosystem governance.",
};

export const offices = [
  {
    city: "Pune Office",
    kind: "HQ",
    address:
      "412, Tower B City Vista DownTown, Kharadi Pune - 411014 | Maharashtra | India",
    hours: "Monday - Friday 10am - 6pm",
  },
  {
    city: "Bengaluru Office",
    kind: "BRANCH",
    address:
      "35/36, Shri Durga Kurupa, Thanisandra, Raechanhalli, Bengaluru, Karnataka - 560045",
    hours: "Monday - Friday 10am - 6pm",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/partners", label: "Partners" },
  { to: "/clienteles", label: "Clienteles" },
  { to: "/achievements", label: "Achievements" },
  { to: "/certifications", label: "Certifications" },
  { to: "/about", label: "About" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export const heroPillars = [
  {
    kicker: "CYBERSECURITY",
    title: "Protect. Detect. Respond.",
    body: "vCISO, vDPO, 24/7 Monitoring, VAPT, and proactive security strategy.",
  },
  {
    kicker: "CLOUD & INFRA",
    title: "Simplified Multi-Cloud",
    body: "Cloud migration, serverless management, and cost optimization.",
  },
  {
    kicker: "AI COE & AUTOMATION",
    title: "Custom LLM Rigs",
    body: "Gen-AI pipelines, RPA process automation, and MLSecOps workflows.",
  },
  {
    kicker: "NEXT-GEN HARDWARE",
    title: "AI-Ready Compute",
    body: "Enterprise GPU systems, servers, storage, and datacenter hardware.",
  },
];

export const capabilities = [
  {
    id: "soc",
    tab: "🛡️ Cyber Security SOC",
    title: "24/7 Security Operations Center (SOC)",
    meta: "ZERO-TRUST AUDITING • PENETRATION AUDITS • VAPT",
    body: "Our continuous telemetry surveillance engine monitors global IP networks, detecting and neutralizing zero-day intrusions before they compromise critical database clusters.",
    features: [
      {
        title: "Continuous Threat Deflection",
        body: "Real-time deep packet inspection with automated AI firewall countermeasures.",
      },
      {
        title: "Vulnerability & Penetration Testing",
        body: "Rigorous ethical hacking simulations against web applications, APIs, and cloud networks.",
      },
    ],
  },
  {
    id: "ai",
    tab: "⚡ AI Compute & Rigs",
    title: "AI Compute Clusters & Custom Rigs",
    meta: "GPU BENCHMARKING • MLSECOPS • GEN-AI PIPELINES",
    body: "We architect and benchmark enterprise GPU systems for deep learning inference and training, from single workstations to full HGX cluster deployments.",
    features: [
      {
        title: "Gen-AI & AI/ML Pipelines",
        body: "Custom LLM development through our AI Center of Excellence, tuned to your data estate.",
      },
      {
        title: "Hardware Rig Procurement",
        body: "Enterprise servers, workstations, HCI, and high-performance storage with lifecycle management.",
      },
    ],
  },
  {
    id: "cloud",
    tab: "☁️ Microsoft Cloud Suite",
    title: "Microsoft Cloud & Identity Governance",
    meta: "ENTRA ID • M365 MIGRATION • POWER AUTOMATE",
    body: "As a direct Microsoft Tier-1 Solutions Partner we design Entra ID security policies, M365 migrations, and automated Power RPA workflows across the enterprise.",
    features: [
      {
        title: "Identity & Access Governance",
        body: "IAM / IGA / PAM design with Just-In-Time and Just-Enough-Access enforcement.",
      },
      {
        title: "Cloud GRC & Cost Control",
        body: "Compliance guardrails, multi-cloud governance, and continuous cost optimization.",
      },
    ],
  },
  {
    id: "vault",
    tab: "🔐 Data Vault & Storage",
    title: "Data Vault, Backup & Resiliency",
    meta: "IMMUTABLE BACKUPS • DR-AS-A-SERVICE • ENCRYPTION",
    body: "High-assurance data protection with immutable snapshots, air-gapped ransomware shields, and disaster recovery orchestration for cloud and on-prem estates.",
    features: [
      {
        title: "Zero-Data-Loss Recovery",
        body: "Sub-second delta recovery with automated integrity verification across sites.",
      },
      {
        title: "High-Performance Storage",
        body: "Secure data clusters, backup appliances, and datacenter-grade storage fabrics.",
      },
    ],
  },
];

export const benefits = [
  {
    title: "Favourable terms",
    body: "Each project we work on is tailored to the particular client's exact needs, not the other way around.",
  },
  {
    title: "Quality for value",
    body: "Our motto is to provide only the highest quality to our clients, no matter the circumstances.",
  },
  {
    title: "Global experience",
    body: "We have worked with multinational companies, as well as smaller businesses from all continents.",
  },
  {
    title: "High standards",
    body: "We take data seriously, meaning that we only deliver work that we can be proud of.",
  },
];

export const zeroTrustPrinciples = [
  {
    n: "1",
    title: "Explicit Verification",
    body: "Always authenticate and authorize based on all available data points.",
  },
  {
    n: "2",
    title: "Least Privilege Access",
    body: "Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA) policies.",
  },
  {
    n: "3",
    title: "Assume Breach Mindset",
    body: "Minimize blast radius and segment access. Verify end-to-end encryption.",
  },
];

export const aboutHighlights = [
  "ISO 27001 & SOC2 Type II Certified Infrastructure",
  "Dedicated Hardware Rig Procurement & Benchmarking",
  "Direct Microsoft Tier-1 Solutions Partner",
];

export const serviceGroups = [
  {
    title: "Managed Cybersecurity services",
    body: "Protect your business from evolving threats with our managed cybersecurity services. We provide real-time monitoring, threat detection, and risk management strategies to safeguard your data, infrastructure, and digital assets, ensuring compliance and business continuity.",
    items: [
      "vCISO (Virtual CISO)",
      "vDPO (Virtual Data Protection Officer)",
      "VAPT / Red Teaming",
      "IAM / IGA / PAM (Identity & Access Management)",
      "EDR / XDR / MDR / SoC as a Service / VMDR",
      "Cloud GRC (Governance, Risk & Compliance)",
      "Email Security",
      "OT Security (Operational Technology)",
      "DC / On-Prem IT Infrastructure Security",
      "DevSecOps – Application Security",
      "DFIR (Digital Forensics & Incident Response)",
      "Cyber Resilience",
      "AI/ML Security – MLSecOps",
      "Cloud Security",
      "Data Security",
      "Network Security",
    ],
  },
  {
    title: "Automation services",
    body: "Our managed IT services ensure seamless operations by providing proactive monitoring, maintenance, and support. We help businesses reduce downtime, enhance efficiency, and stay ahead with the latest technology solutions, allowing you to focus on growth while we handle the complexities of IT management.",
    items: [
      "Process Automation",
      "Robotic Process Automation (RPA)",
      "IT Automation",
      "DevOps Automation",
      "Monitoring Automation",
      "Cloud Automation",
      "Infrastructure as Code (IaC)",
      "Security Automation",
    ],
  },
  {
    title: "Digital Technology Services",
    body: "Empower your business with end-to-end technology solutions that combine custom software development with managed IT infrastructure. We design, build, deploy, secure, and manage scalable digital environments to help your business innovate, improve operational efficiency, and ensure business continuity.",
    items: [
      "Data Center & Communication Management",
      "Network Management",
      "Cloud & Virtualization Services",
      "Database Design & Optimization",
      "Custom Software Development",
      "Microservices Architecture",
      "Data Center Management",
      "DevOps & CI/CD Automation",
      "Web & Mobile App Development",
    ],
  },
  {
    title: "Managed Cloud services",
    body: "Optimize your cloud infrastructure with our managed cloud services. We provide end-to-end support for cloud migration, monitoring, and security, ensuring scalability, performance, and cost efficiency while keeping your business operations running smoothly.",
    items: [
      "Cloud Migration",
      "Serverless Computing Management",
      "Performance Monitoring & Optimisation",
      "Cloud Native Application Development Management",
      "Compliance & Governance",
      "Cloud Cost Management",
      "Cloud Infrastructure Management",
      "Cloud Security Management",
      "Multi-Cloud & Hybrid Cloud Management",
      "Cloud Resiliency / DR as a Service",
    ],
  },
  {
    title: "AI CoE Custom LLM Development",
    body: "Leverage the power of AI with our Center of Excellence (CoE) for custom LLM (Large Language Model) development. We create tailored AI solutions that enhance automation, decision-making, and customer experiences, helping businesses innovate and stay ahead in a rapidly evolving digital landscape.",
    items: ["Gen-AI Pipeline", "AI/ML Pipeline"],
  },
  {
    title: "Additional services",
    body: "Beyond our core offerings, we provide a range of specialized services tailored to your unique business needs. Whether it's IT consulting, infrastructure optimization, or industry-specific solutions, we deliver expertise and innovation to drive success.",
    items: [
      "Digital Transformation Consulting",
      "Hybrid Directory / Identity Management",
      "ERP - SAP, Oracle, MS Dynamics 365 - All modules",
      "ACM (Application Lifecycle Management)",
      "Quantum Computing",
      "Blockchain Consulting and Application",
      "ITSM Tools - ServiceNow, Zoho",
      "Enterprise Application Management",
      "CRM - Salesforce",
    ],
  },
  {
    title: "Next Generation Hardware",
    body: "Accelerate your digital transformation with cutting-edge hardware solutions designed for performance, scalability, and reliability. From AI-ready infrastructure and enterprise servers to networking, storage, and endpoint devices, we deliver modern hardware ecosystems that empower businesses to operate securely and efficiently.",
    items: [
      "Enterprise Servers & Workstations",
      "AI & GPU Computing Systems",
      "High-Performance Storage Solutions",
      "Network Infrastructure & Switches",
      "Edge Computing Devices",
      "Hyperconverged Infrastructure (HCI)",
      "Data Center Hardware",
      "Endpoint Devices & Thin Clients",
      "Backup & Disaster Recovery Appliances",
      "Hardware Installation & Configuration",
      "Hardware Lifecycle Management",
      "Preventive Maintenance & Technical Support",
      "Hardware Upgrades & Performance Optimization",
      "Warranty & Asset Management Optimization",
    ],
  },
];

export const team = [
  {
    name: "Ratnesh Pandey",
    role: "CEO | Co-Founder | vCISO | Director",
    image: "/team/ratnesh.jpg",
  },
  { name: "Deepa", role: "Director | Co-Founder | CHRO", image: "/team/deepa.jpg" },
  {
    name: "Utkarsh",
    role: "Sr. Cyber Security SME | Partner Success Mgr",
    image: "/team/about_team_2_image.png",
  },
  {
    name: "Abhay",
    role: "AI Developer",
    image: "/team/about_team_3_image.jpg",
  },
  {
    name: "Manan",
    role: "Full-stack Developer",
    image: "/team/manan.jpeg",
  },
  {
    name: "Mrunal",
    role: "Cybersecurity Analyst",
    image: "/team/about_team_6_image.jpg",
  },
];

export const achievements = [
  {
    kicker: "GOVERNMENT ACCREDITATION",
    title: "MSME Certified Enterprise",
    subtitle: "सूक्ष्म, लघु एवं मध्यम उद्यम",
    body: "Officially certified enterprise under the Ministry of Micro, Small and Medium Enterprises, Government of India.",
    logo: "/logos/msme.jpg",
    emoji: "🇮🇳",
  },
  {
    kicker: "DPIIT RECOGNITION",
    title: "#startupindia",
    subtitle: "#startupindia Recognized Venture",
    body: "Recognized technology startup by the Government of India under the flagship Startup India initiative.",
    logo: "/logos/startupindia.jpg",
    emoji: "",
  },
  {
    kicker: "CII MEMBERSHIP",
    title: "Confederation of Indian Industry (CII) Membership",
    subtitle: "Industry Association & Business Networking",
    body: "Membership with CII, India's premier industry association, fostering business growth, collaboration, innovation, and industry engagement.",
    logo: "/logos/cii.jpg",
    emoji: "",
  },
];

export const clienteles = [
  {
    name: "IndiaCapital",
    sector: "FinTech",
    tag: "FINANCIAL SERVICES",
    body: "Enterprise financial technology and capital management solutions.",
    logo: "",
  },
  {
    name: "Fin Chikitsak",
    sector: "FinTech",
    tag: "FINANCIAL WELLNESS",
    body: "Comprehensive financial wellness and advisory platform.",
    logo: "",
  },
  {
    name: "gleeds",
    sector: "Construction Consultancy",
    tag: "GLOBAL INFRASTRUCTURE",
    body: "International property and construction management consultancy.",
    logo: "/logos/gleeds.jpg",
  },
  {
    name: "StatusNeo",
    sector: "MNC IT",
    tag: "ENTERPRISE IT CONSULTING",
    body: "Global digital transformation and enterprise IT consultancy.",
    logo: "/logos/statusneo.jpg",
  },
  {
    name: "SIT PUNE",
    sector: "Academic Institution",
    tag: "EDUCATION & RESEARCH",
    body: "Premier engineering and technological research institute.",
    logo: "/logos/sitpune.jpg",
  },
];

export const complianceStandards = [
  "ISO 27001:2022",
  "SOC 2 TYPE II",
  "NIST CSF 2.0",
  "CMMI LEVEL 5",
  "HIPAA COMPLIANT",
  "PCI-DSS v4.0",
];

export { certifications } from "./certifications-data";

export const jobs = [
  {
    dept: "SECURITY",
    location: "Remote",
    level: "Mid-level",
    title: "Cyber Security Auditor",
    body: "Lead VAPT penetration tests and threat vector assessments across client cloud environments.",
  },
  {
    dept: "HARDWARE",
    location: "Remote",
    level: "Mid-level",
    title: "AI Compute Pipeline Lead",
    body: "Architect Nvidia HGX H100 cluster deployments and benchmark deep learning model inference speed.",
  },
  {
    dept: "MICROSOFT",
    location: "Remote",
    level: "Mid-level",
    title: "MS Solutions Architect",
    body: "Design Microsoft Entra ID security policies, M365 migrations, and automated Power RPA workflows.",
  },
];

export const hiringSteps = [
  {
    step: "STEP_01 // APPLICATION",
    body: "Submit your resume and engineering portfolio for review.",
  },
  {
    step: "STEP_02 // TECH EVALUATION",
    body: "Deep dive technical interview with senior engineering leads.",
  },
  {
    step: "STEP_03 // LEADERSHIP MATCH",
    body: "Culture alignment and leadership discussion.",
  },
  {
    step: "STEP_04 // ONBOARDING",
    body: "Welcome to KloudEra Technologies engineering core.",
  },
];

export const products = [
  {
    kicker: "// REMOTE WORKSPACE",
    name: "Remote Desk",
    status: "LIVE",
    subtitle: "Virtual Desktop & Remote Access Environment",
    body: "Secure, high-performance remote desktop infrastructure allowing teams to access their workstations from anywhere.",
    highlights: [
      "Low Latency Streaming",
      "End-to-End Encryption",
      "Multi-Monitor Support",
      "Zero-Trust Access",
    ],
    link: "https://remotedesk-psi.vercel.app/",
    linkText: "Launch Remote Desk →",
  },
  {
    kicker: "// WORKSPACE & COLLABORATION",
    name: "Kloudera Meet Scheduler",
    status: "UNDER DEVELOPMENT",
    subtitle: "Enterprise Meeting & Calendar Orchestration System",
    body: "Automated meeting scheduling, multi-timezone synchronization, and encrypted virtual room access governance for enterprise teams.",
    highlights: [
      "End-to-End Encrypted Invites",
      "Multi-Timezone Auto Sync",
      "Granular Access Authorization",
      "Instant Calendar Integration",
    ],
  },
  {
    kicker: "// DISASTER RECOVERY & BACKUP",
    name: "Klodera Data Recovery Tool",
    status: "IN STAGING",
    subtitle: "High-Assurance Disaster Recovery & Data Restoration",
    body: "Enterprise snapshot restoration, zero-data-loss ransomware recovery, and sector-level disk imaging for cloud and local infrastructure.",
    highlights: [
      "Immutable Storage Backups",
      "Sub-Second Delta Recovery",
      "Ransomware Air-Gap Shield",
      "Automated Integrity Verification",
    ],
  },
  {
    kicker: "// DEVICE MANAGEMENT & MDM",
    name: "Kloudera Remote Device Controller",
    status: "BETA TESTING",
    subtitle: "Zero-Trust Endpoint Management & Remote Telemetry",
    body: "Centralized remote device administration, automated endpoint patch deployment, and real-time security telemetry monitoring.",
    highlights: [
      "Zero-Trust Remote Access",
      "Automated Endpoint Patching",
      "Real-Time Telemetry Stream",
      "Remote Kill-Switch & Lock",
    ],
  },
];
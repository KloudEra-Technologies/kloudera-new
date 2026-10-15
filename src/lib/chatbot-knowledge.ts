import {
  company,
  offices,
  socialLinks,
  team,
  achievements,
  clienteles,
  complianceStandards,
  jobs,
  hiringSteps,
  products,
  serviceGroups,
  zeroTrustPrinciples,
  benefits,
} from "./site-data";

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
  links?: Array<{ label: string; href: string; isExternal?: boolean }>;
  suggestions?: string[];
}

export const initialSuggestions = [
  "💡 What can you answer me?",
  "⭐ What is KloudEra good at?",
  "🛡️ 24/7 SOC & Cyber Security",
  "⚡ Custom GPU & AI Compute Rigs",
  "💻 Proprietary Software Products",
  "📍 Office Locations & Timings",
];

export interface KnowledgeTopic {
  id: string;
  name: string;
  keywords: string[];
  patterns?: RegExp[];
  reply: string;
  links?: Array<{ label: string; href: string; isExternal?: boolean }>;
  suggestions?: string[];
}

// Common conversational words that shouldn't inflate keyword scores
const STOP_WORDS = new Set([
  "a", "an", "the", "and", "or", "but", "is", "are", "was", "were", "be", "been", "being",
  "in", "on", "at", "to", "for", "from", "with", "by", "about", "into", "through",
  "of", "that", "this", "these", "those", "it", "its", "you", "your", "me", "my",
  "we", "our", "us", "he", "she", "they", "them", "what", "which", "who", "whom",
  "tell", "can", "could", "would", "should", "do", "does", "did", "something", "ok", "okay",
  "please", "just", "get", "got", "give", "know", "how", "why", "when", "where", "there",
]);

export const knowledgeBase: KnowledgeTopic[] = [
  // 1. Core Strengths & "What is KloudEra good at / specialize in?"
  {
    id: "strengths",
    name: "Core Strengths & Specializations",
    keywords: [
      "good at",
      "what is kloudera good at",
      "what are you good at",
      "best at",
      "what are your strengths",
      "strengths",
      "specialization",
      "specialise",
      "speciality",
      "specialities",
      "what do you specialize in",
      "core competencies",
      "why kloudera",
      "expertise",
      "what are you best at",
      "key offerings",
    ],
    patterns: [
      /(?:good at|good in|best at|specializ|strength|competenc|expertise)/i,
      /(?:why choose|why kloudera)/i,
    ],
    reply: `**KloudEra Technologies Core Strengths & Specializations:**\n\nKloudEra is particularly distinguished in **4 mission-critical enterprise engineering areas**:\n\n🛡️ **1. Elite Cyber Defense & 24/7 SOC Telemetry:**\n• Continuous network surveillance detecting and deflecting zero-day intrusions before they compromise databases.\n• In-depth VAPT (ethical hacking) across web apps, APIs, and cloud perimeters.\n• On-demand executive vCISO / vDPO compliance and governance advisory.\n\n⚡ **2. Enterprise AI Compute & Custom GPU Clusters:**\n• Engineering high-density GPU rigs (NVIDIA HGX, H100, L40S, RTX 6000 Ada) with thermal and electrical optimization.\n• Fine-tuning custom private Gen-AI LLM pipelines on your private data estate with zero leakage.\n• Full MLSecOps model auditing and secure containerized inference.\n\n☁️ **3. Multi-Cloud Modernization & FinOps Cost Control:**\n• Direct Tier-1 Microsoft Solutions Partner (Entra ID, M365, Defender).\n• Zero-downtime migration across AWS, Azure, and Google Cloud with automated rightsizing slashing cloud bills by up to 35%.\n\n🖥️ **4. Next-Gen Datacenter Hardware:**\n• Turnkey enterprise servers, NVMe SAN/NAS storage, and HCI procurement with lifecycle support.\n\nWhich of these areas would you like to explore for your enterprise?`,
    links: [
      { label: "Explore Services", href: "/services" },
      { label: "View Products", href: "/products" },
      { label: "Book a Systems Consultation", href: "/contact" },
    ],
    suggestions: [
      "🛡️ 24/7 SOC Defense",
      "⚡ Custom AI GPU Rigs",
      "☁️ Multi-Cloud Migration",
      "💻 Software Products",
    ],
  },

  // 2. Bot Capabilities & Menu
  {
    id: "capabilities",
    name: "Assistant Capabilities",
    keywords: [
      "what things can you answer me",
      "what can you answer me",
      "what can you answer",
      "what things can you answer",
      "what can you do",
      "what do you do",
      "what questions can i ask",
      "what can i ask you",
      "what can i ask",
      "what do you know",
      "how can you help me",
      "how can you help",
      "help me",
      "help",
      "capabilities",
      "features",
      "topics",
      "menu",
      "options",
      "what are you trained on",
      "tell me what you can do",
    ],
    patterns: [
      /what.*(?:answer|do|help|know|ask)/i,
      /how.*help/i,
      /capabilities|features|topics|menu/i,
      /can you answer/i,
    ],
    reply: `I am the **KloudEra AI Assistant**, trained with **all publicly available knowledge** about KloudEra Technologies.\n\nHere is everything you can ask me about:\n\n⭐ **1. Core Strengths & Expertise:**\n• What KloudEra is best at and why enterprise clients choose us\n\n🛡️ **2. Managed Cybersecurity & 24/7 SOC:**\n• 24/7 Security Operations Center (SOC) telemetry & intrusion defense\n• VAPT (Penetration Testing) & Red Teaming simulations\n• vCISO & vDPO executive leadership and Zero-Trust architecture\n\n⚡ **3. AI CoE & GPU Compute Rigs:**\n• NVIDIA HGX, H100, L40S, RTX Ada GPU clusters\n• Gen-AI & custom private LLM fine-tuning pipelines\n• MLSecOps automated model auditing & inference\n\n💻 **4. Proprietary Software Products:**\n• Remote Desk (Live virtual desktop)\n• Kloudera Meet Scheduler, Data Recovery Tool, Remote Device Controller\n\n☁️ **5. Cloud, Automation & Datacenter Hardware:**\n• AWS, Azure, GCP multi-cloud migrations & FinOps cost optimization\n• RPA process automation, IaC, CI/CD\n• Tier-1 OEM servers, NVMe SAN/NAS storage, HCI\n\n📍 **6. Offices, Leadership & Contact:**\n• **Bengaluru Office (HQ)** & **Pune Office (BRANCH)** addresses and hours\n• Leadership team (Ratnesh Pandey, Deepa, Utkarsh, Abhay, Manan, Mrunal)\n• Direct phone numbers, email, and social media links\n\n🏆 **7. Accreditations, Clients & Careers:**\n• MSME certified, Startup India, CII Member, ISO 27001, SOC 2 Type II\n• Clients: IndiaCapital, Gleeds, StatusNeo, SIT Pune\n• Open job roles & 4-step hiring process\n\nTap any chip below or ask your question!`,
    links: [
      { label: "Book a Consultation", href: "/contact" },
      { label: "Explore Services", href: "/services" },
      { label: "View Products", href: "/products" },
    ],
    suggestions: [
      "⭐ What is KloudEra good at?",
      "🛡️ Cyber Security SOC",
      "💻 Software Products",
      "⚡ AI GPU Rigs",
      "📍 Office Locations",
    ],
  },

  // 3. Company Overview, Mission & Vision
  {
    id: "about",
    name: "About KloudEra Technologies",
    keywords: [
      "who is kloudera",
      "about kloudera",
      "company",
      "what is kloudera",
      "who are you",
      "tell me about kloudera",
      "overview",
      "mission",
      "vision",
      "tagline",
      "why choose us",
      "benefits",
    ],
    patterns: [/who is kloudera/i, /about (?:kloudera|company)/i, /what is kloudera/i, /mission|vision/i],
    reply: `**${company.name}** is an enterprise technology firm architecting zero-trust digital enterprises across cybersecurity, cloud infrastructure, AI compute clusters, and datacenter hardware.\n\n**Tagline:** "${company.tagline}"\n\n**Mission Statement:**\n"${company.intro}"\n\n**Why Choose KloudEra?**\n• **${benefits[0]?.title}:** ${benefits[0]?.body}\n• **${benefits[1]?.title}:** ${benefits[1]?.body}\n• **${benefits[2]?.title}:** ${benefits[2]?.body}\n• **${benefits[3]?.title}:** ${benefits[3]?.body}\n\n**Headquarters:** Bengaluru, Karnataka (HQ)\n**Branch:** Pune, Maharashtra`,
    links: [
      { label: "Read Our Story", href: "/about" },
      { label: "Explore Services", href: "/services" },
    ],
    suggestions: ["👥 Leadership Team", "🛡️ Security Services", "📍 Office Locations"],
  },

  // 4. Leadership & Team
  {
    id: "team",
    name: "Executive Leadership & Team",
    keywords: [
      "team",
      "leadership",
      "founders",
      "founder",
      "co-founder",
      "ceo",
      "director",
      "chro",
      "who runs kloudera",
      "ratnesh",
      "ratnesh pandey",
      "deepa",
      "utkarsh",
      "abhay",
      "manan",
      "mrunal",
      "employees",
      "staff",
    ],
    patterns: [/team/i, /leader(?:ship)?/i, /founder/i, /ceo/i, /ratnesh/i, /deepa/i, /utkarsh/i, /abhay/i, /manan/i, /mrunal/i],
    reply: `**KloudEra Technologies Executive Leadership & Engineering Team:**\n\n👔 **Ratnesh Pandey:** CEO | Co-Founder | vCISO | Director\nLeading corporate strategy, enterprise security operations, and zero-trust engineering.\n\n👩‍💼 **Deepa:** Director | Co-Founder | CHRO\nLeading human capital, organizational culture, talent acquisition, and corporate governance.\n\n🛡️ **Utkarsh:** Sr. Cyber Security SME | Partner Success Manager\n\n🤖 **Abhay:** AI Developer\n\n💻 **Manan:** Full-stack Developer\n\n🔍 **Mrunal:** Cybersecurity Analyst\n\nOur cross-functional teams collaborate across our Bengaluru HQ and Pune branch offices.`,
    links: [
      { label: "View Team on About Page", href: "/about" },
      { label: "Careers & Open Roles", href: "/careers" },
    ],
    suggestions: ["💼 Work with Us", "📍 Office Locations", "🛡️ Cyber Security SOC"],
  },

  // 5. Offices & Operating Locations
  {
    id: "offices",
    name: "Office Locations & Operating Hours",
    keywords: [
      "office",
      "offices",
      "location",
      "locations",
      "address",
      "addresses",
      "headquarters",
      "hq",
      "bengaluru",
      "bangalore",
      "pune",
      "where are you",
      "where is kloudera",
      "city",
      "hours",
      "timings",
      "timing",
      "branch",
    ],
    patterns: [/office/i, /location/i, /address/i, /bengaluru/i, /bangalore/i, /pune/i, /hq/i, /headquarter/i, /where (?:are|is)/i],
    reply: `**KloudEra Technologies Office Locations & Hours:**\n\n🏛️ **Bengaluru Office (HQ):**\n${offices[0]?.address}\n*Operating Hours:* ${offices[0]?.hours}\n\n🏢 **Pune Office (BRANCH):**\n${offices[1]?.address}\n*Operating Hours:* ${offices[1]?.hours}\n\nYou are welcome to visit our offices during working hours or schedule an in-person systems consultation with our engineering directors.`,
    links: [
      { label: "View Office Directory", href: "/contact" },
      { label: "Book a Consultation", href: "/contact" },
    ],
    suggestions: ["📞 Phone & Email Contact", "👥 Leadership Team", "🛡️ Security Services"],
  },

  // 6. Contact Channels & Consultation Booking
  {
    id: "contact",
    name: "Contact Channels & Consultation",
    keywords: [
      "contact",
      "phone",
      "telephone",
      "mobile",
      "number",
      "numbers",
      "email",
      "mail",
      "call",
      "reach",
      "talk to sales",
      "talk to engineer",
      "book",
      "consultation",
      "appointment",
      "schedule",
      "meeting",
      "inquiry",
      "enquiry",
      "get in touch",
    ],
    patterns: [/contact/i, /phone/i, /email/i, /call/i, /reach/i, /consultation/i, /appointment/i, /schedule/i],
    reply: `You can reach the **KloudEra Technologies** engineering and solutions team directly:\n\n📧 **Official Email:** ${company.email}\n📞 **Direct Phone Lines:**\n• ${company.phones[0]}\n• ${company.phones[1]}\n\n🕒 **Support & Business Hours:** Monday - Friday, 10:00 AM - 6:00 PM IST\n\nYou can also submit an inquiry on our Comms Gateway page for architecture evaluations, security audits, or hardware quotes.`,
    links: [
      { label: "Open Contact Form", href: "/contact" },
      { label: "Email Solutions Team", href: `mailto:${company.email}`, isExternal: true },
    ],
    suggestions: ["📍 Office Locations", "⚡ Custom AI Rigs", "🛡️ VAPT & SOC Services"],
  },

  // 7. Social Media
  {
    id: "social",
    name: "Official Social Media Channels",
    keywords: [
      "social",
      "socials",
      "linkedin",
      "youtube",
      "insta",
      "instagram",
      "follow",
      "social media",
      "channel",
      "channels",
    ],
    patterns: [/linkedin/i, /youtube/i, /insta(?:gram)?/i, /social/i],
    reply: `Stay connected with **KloudEra Technologies** across our official social channels:\n\n• **LinkedIn:** [KloudEra Technologies](${socialLinks[0]?.href})\n• **YouTube:** [@KloudEraTechnologies](${socialLinks[1]?.href})\n• **Instagram:** [@klouderatech](${socialLinks[2]?.href})\n\nWe share regular cyber intelligence bulletins, GPU cluster benchmarks, product demos, and technical webinars.`,
    links: [
      { label: "LinkedIn Company Page", href: socialLinks[0]?.href || "#", isExternal: true },
      { label: "YouTube Channel", href: socialLinks[1]?.href || "#", isExternal: true },
      { label: "Instagram Profile", href: socialLinks[2]?.href || "#", isExternal: true },
    ],
    suggestions: ["📰 About KloudEra", "💼 Open Careers", "🛡️ Security Services"],
  },

  // 8. Proprietary Software Products
  {
    id: "products",
    name: "Kloudera Proprietary Software Suite",
    keywords: [
      "product",
      "products",
      "software",
      "remote desk",
      "meet scheduler",
      "data recovery tool",
      "remote device controller",
      "apps",
      "suite",
      "tools",
      "virtual desktop",
    ],
    patterns: [/product/i, /remote desk/i, /meet scheduler/i, /data recovery tool/i, /device controller/i, /software suite/i],
    reply: `**Kloudera Enterprise Software Suite:**\n\n🖥️ **1. Remote Desk (LIVE):**\n• Virtual desktop & secure remote access environment.\n• Low-latency streaming, end-to-end encryption, multi-monitor support, zero-trust access.\n• *Live URL:* [Launch Remote Desk](${products[0]?.link})\n\n📅 **2. Kloudera Meet Scheduler (UNDER DEVELOPMENT):**\n• Enterprise meeting & calendar orchestration system.\n• End-to-end encrypted invites, multi-timezone auto sync, and granular access authorization.\n\n💾 **3. Klodera Data Recovery Tool (IN STAGING):**\n• High-assurance disaster recovery, sector-level disk imaging, and ransomware air-gap shielding with sub-second delta restoration.\n\n📱 **4. Kloudera Remote Device Controller (BETA TESTING):**\n• Zero-trust endpoint management, automated patch deployment, real-time telemetry stream, and remote kill-switch.`,
    links: [
      { label: "Launch Remote Desk", href: products[0]?.link || "#", isExternal: true },
      { label: "Explore Products Suite", href: "/products" },
    ],
    suggestions: ["⚡ AI Hardware Rigs", "🛡️ SOC Services", "📞 Inquire Software Access"],
  },

  // 9. Managed Cybersecurity & 24/7 SOC
  {
    id: "cybersecurity",
    name: "Managed Cybersecurity & 24/7 SOC",
    keywords: [
      "cyber",
      "security",
      "soc",
      "vapt",
      "penetration",
      "pentest",
      "threat",
      "audit",
      "auditing",
      "vciso",
      "vdpo",
      "zero trust",
      "firewall",
      "edr",
      "xdr",
      "mdr",
      "vmdr",
      "incident",
      "vulnerability",
      "hacked",
      "ransomware",
      "malware",
      "iam",
      "pam",
      "iga",
      "dfir",
      "mlsecops",
      "devsecops",
    ],
    patterns: [/soc/i, /cyber/i, /vapt/i, /penetration/i, /security/i, /threat/i, /vciso/i, /zero-?trust/i, /edr|xdr|mdr/i],
    reply: `**KloudEra Managed Cybersecurity Services:**\n\n🛡️ **24/7 Security Operations Center (SOC):**\nContinuous telemetry surveillance detecting and neutralizing zero-day intrusions across global IP networks.\n\n🔍 **VAPT & Ethical Hacking:**\nVulnerability Assessment and Penetration Testing across web applications, cloud infrastructure, network perimeters, and APIs.\n\n👔 **vCISO & vDPO as a Service:**\nOn-demand executive security leadership, DPDP Act/GDPR regulatory compliance, board reporting, and security policy design.\n\n🔑 **Identity & Access Governance (IAM / IGA / PAM):**\nJust-In-Time (JIT) and Just-Enough-Access (JEA) privileged access enforcement.\n\n🚨 **Extended Threat Deflection & DFIR:**\nEDR, XDR, MDR, VMDR, Digital Forensics & Incident Response, and MLSecOps AI model protection.`,
    links: [
      { label: "View Cybersecurity Services", href: "/services" },
      { label: "Schedule Security Audit", href: "/contact" },
    ],
    suggestions: ["⚡ Custom AI Rigs", "📜 Certifications", "☁️ Multi-Cloud Services"],
  },

  // 10. Zero-Trust Command Principles
  {
    id: "zero_trust",
    name: "Zero-Trust Command Principles",
    keywords: [
      "zero trust",
      "zero-trust",
      "principles",
      "explicit verification",
      "least privilege",
      "assume breach",
      "jit",
      "jea",
    ],
    patterns: [/zero-?trust/i, /explicit verification/i, /least privilege/i, /assume breach/i],
    reply: `**KloudEra Zero-Trust Command Principles:**\n\n1️⃣ **Principle 1: ${zeroTrustPrinciples[0]?.title}**\n${zeroTrustPrinciples[0]?.body}\n\n2️⃣ **Principle 2: ${zeroTrustPrinciples[1]?.title}**\n${zeroTrustPrinciples[1]?.body}\n\n3️⃣ **Principle 3: ${zeroTrustPrinciples[2]?.title}**\n${zeroTrustPrinciples[2]?.body}\n\nEvery architecture we deploy follows strict end-to-end encryption, micro-segmentation, and verified least-privilege access.`,
    links: [
      { label: "Learn more About Zero-Trust", href: "/about" },
      { label: "Security Operations Center", href: "/services" },
    ],
    suggestions: ["🛡️ 24/7 SOC Services", "📜 ISO & Compliance", "📞 Schedule Audit"],
  },

  // 11. AI CoE & GPU Compute Rigs
  {
    id: "ai_compute",
    name: "AI CoE & Custom GPU Rigs",
    keywords: [
      "ai",
      "gpu",
      "gpus",
      "nvidia",
      "rig",
      "rigs",
      "cluster",
      "clusters",
      "hgx",
      "h100",
      "a100",
      "l40s",
      "rtx 6000",
      "llm",
      "llms",
      "gen-ai",
      "generative ai",
      "machine learning",
      "mlsecops",
      "compute",
      "deep learning",
      "workstation",
      "workstations",
    ],
    patterns: [/gpu/i, /nvidia/i, /hgx|h100|a100|l40s/i, /\bai\b/i, /cluster/i, /\brig\b|\brigs\b/i, /llm/i, /machine learning/i],
    reply: `**KloudEra AI CoE & Custom GPU Compute Rigs:**\n\n⚡ **High-Performance GPU Clusters:**\nWe architect and benchmark enterprise GPU systems for deep learning training and inference (NVIDIA HGX, H100, A100, L40S, and RTX 6000 Ada workstations).\n\n🤖 **Gen-AI & Custom LLM Pipelines:**\nCustom foundation model fine-tuning and retrieval-augmented generation (RAG) tuned to your private data estate.\n\n🛡️ **MLSecOps Workflows:**\nSecuring AI model supply chains, prompt injection protection, automated model container auditing, and low-latency API inference.\n\n❄️ **Thermal & Power Optimization:**\nDatacenter rack-scale engineering for maximum FLOPS with optimized electrical and cooling profiles.`,
    links: [
      { label: "View Hardware Rigs", href: "/products" },
      { label: "Request GPU Rig Specs", href: "/contact" },
    ],
    suggestions: ["🖥️ Datacenter Servers", "🛡️ SOC Threat Protection", "🤝 Strategic Partners"],
  },

  // 12. Cloud & Managed Cloud Services
  {
    id: "cloud",
    name: "Managed Cloud & FinOps Services",
    keywords: [
      "cloud",
      "aws",
      "azure",
      "gcp",
      "google cloud",
      "migration",
      "serverless",
      "multi-cloud",
      "hybrid",
      "devops",
      "finops",
      "kubernetes",
      "k8s",
      "cost optimization",
      "cloud spend",
      "draas",
    ],
    patterns: [/cloud/i, /aws|azure|gcp/i, /migration/i, /finops/i, /serverless/i, /kubernetes/i],
    reply: `**KloudEra Managed Cloud Services:**\n\n☁️ **Multi-Cloud Architecture:**\nSeamless integration across AWS, Microsoft Azure, and Google Cloud with centralized identity and policy governance.\n\n🔄 **Zero-Downtime Cloud Migration:**\nStructured migration of legacy workloads, databases, and microservices to modern cloud environments.\n\n💰 **FinOps & Cost Optimization:**\nAutomated resource rightsizing, reserved instance planning, and wastage elimination to slash cloud bills by up to 35%.\n\n⚡ **Kubernetes & DevOps Automation:**\nProduction container orchestration (EKS/AKS/GKE), CI/CD pipelines, and Infrastructure as Code (IaC).\n\n🛡️ **Cloud Resiliency / DRaaS:**\nAutomated cross-region disaster recovery and high-availability architecture.`,
    links: [
      { label: "View Cloud Services", href: "/services" },
      { label: "Consult on Cloud Migration", href: "/contact" },
    ],
    suggestions: ["🛡️ 24/7 SOC Surveillance", "⚡ AI Infrastructure", "🤝 Cloud Partners"],
  },

  // 13. Microsoft Cloud Suite & Tier-1 Partnership
  {
    id: "microsoft",
    name: "Microsoft Cloud Suite & Tier-1 Partnership",
    keywords: [
      "microsoft",
      "entra id",
      "entra",
      "m365",
      "office 365",
      "power automate",
      "power rpa",
      "microsoft tier-1",
      "azure ad",
      "intune",
    ],
    patterns: [/microsoft/i, /entra/i, /m365/i, /power automate/i],
    reply: `**Direct Microsoft Tier-1 Solutions Partner:**\n\nKloudEra is a certified Microsoft Tier-1 Solutions Partner delivering enterprise cloud governance:\n\n• **Microsoft Entra ID (Azure AD):** Identity & Access Management (IAM), Conditional Access, Privileged Identity Management (PIM).\n• **M365 Cloud Migration:** Secure enterprise email, tenant-to-tenant migration, SharePoint, and Teams architecture.\n• **Power Automate & Power RPA:** Enterprise workflow automation, cross-app robotic process automation, and cognitive services.\n• **Microsoft Purview & Defender:** Information protection, DLP, and Microsoft Defender XDR.`,
    links: [
      { label: "Explore Cloud Services", href: "/services" },
      { label: "Book Microsoft Consultation", href: "/contact" },
    ],
    suggestions: ["☁️ Cloud Services", "🛡️ Cybersecurity", "🤝 All Partners"],
  },

  // 14. Automation & Digital Technology Services
  {
    id: "automation",
    name: "Automation & Digital Technology Services",
    keywords: [
      "automation",
      "rpa",
      "robotic process automation",
      "process automation",
      "iac",
      "infrastructure as code",
      "digital technology",
      "software development",
      "microservices",
      "database",
      "web app",
      "mobile app",
    ],
    patterns: [/automation/i, /rpa/i, /iac/i, /digital technology/i, /software development/i],
    reply: `**Automation & Digital Technology Services:**\n\n🤖 **Automation Services:**\n• Robotic Process Automation (RPA)\n• DevOps CI/CD & Monitoring Automation\n• Cloud Automation & Infrastructure as Code (IaC)\n• Automated Incident Response & Security Automation\n\n🌐 **Digital Technology Services:**\n• Data Center & Network Management\n• Cloud & Virtualization Architecture\n• Database Design & High-Throughput Optimization\n• Custom Software & Microservices Development\n• Web & Mobile Enterprise Application Engineering`,
    links: [
      { label: "Explore All Services", href: "/services" },
      { label: "Schedule Tech Consultation", href: "/contact" },
    ],
    suggestions: ["☁️ Managed Cloud", "🛡️ SOC Services", "⚡ AI LLM Rigs"],
  },

  // 15. Next-Gen Hardware & Datacenter Solutions
  {
    id: "hardware",
    name: "Datacenter Hardware & Lifecycle Management",
    keywords: [
      "hardware",
      "server",
      "servers",
      "storage",
      "datacenter",
      "data center",
      "procurement",
      "hci",
      "hyperconverged",
      "dell",
      "hpe",
      "supermicro",
      "rack",
      "networking",
      "switch",
      "switches",
      "edge computing",
      "thin clients",
      "lifecycle",
    ],
    patterns: [/hardware/i, /server/i, /storage/i, /datacenter/i, /rack/i, /procurement/i, /hci/i],
    reply: `**Enterprise Next-Generation Hardware Solutions:**\n\n🖥️ **Compute Servers & Workstations:**\nHigh-density rack servers from Tier-1 OEMs (Dell, HPE, Supermicro) configured for enterprise virtualisation and mission-critical databases.\n\n⚡ **AI & GPU Computing Systems:**\nEnterprise rigs engineered for high-density training and inference.\n\n💾 **High-Performance Storage:**\nNVMe SAN/NAS storage arrays, all-flash arrays, and backup appliances.\n\n🌐 **HCI & Network Switches:**\nHyper-Converged Infrastructure and top-of-rack datacenter switches.\n\n📦 **End-to-End Lifecycle Management:**\nTurnkey procurement, white-glove rack installation, hardware upgrades, preventive maintenance, and 24/7 OEM warranty support.`,
    links: [
      { label: "View Hardware Products", href: "/products" },
      { label: "Request Hardware Quotation", href: "/contact" },
    ],
    suggestions: ["⚡ GPU AI Rigs", "🤝 Partner Network", "📞 Contact Sales"],
  },

  // 16. Strategic Partners
  {
    id: "partners",
    name: "Strategic Partners Ecosystem",
    keywords: [
      "partner",
      "partners",
      "ecosystem",
      "alliance",
      "alliances",
      "vendor",
      "vendors",
      "reseller",
      "aws partner",
      "microsoft partner",
      "nvidia partner",
      "dell partner",
      "fortinet",
      "crowdstrike",
      "sentinelone",
    ],
    patterns: [/partner/i, /ecosystem/i, /vendor/i, /alliance/i],
    reply: `**KloudEra Strategic Partner Ecosystem (80+ Alliances):**\n\nWe collaborate with world-class technology OEMs and cloud hyperscalers:\n\n• **Cloud Platforms:** Microsoft (Tier-1 Solutions Partner), AWS, Google Cloud (GCP)\n• **Compute & GPUs:** NVIDIA, Dell Technologies, HPE, Apple, IBM\n• **Cybersecurity:** CrowdStrike, SentinelOne, Fortinet, Palo Alto Networks, Trend Micro, Check Point, Tenable, Qualys, Sophos, SonicWall, Trellix\n• **Data & Storage:** Databricks, Snowflake, MongoDB, Veeam, Acronis, Rubrik\n• **Datacenter & Telecom:** Adani ConneX, Sify, Web Werks, CtrlS, Ishan Tech\n• **Enterprise Apps:** ServiceNow, Zoho, Salesforce, SAP, Oracle`,
    links: [
      { label: "Browse All 80+ Partners", href: "/partners" },
      { label: "Inquire Partner Solutions", href: "/contact" },
    ],
    suggestions: ["🛡️ Security Stack", "⚡ AI Hardware Options", "📍 Office Addresses"],
  },

  // 17. Enterprise Clientele & Case Studies
  {
    id: "clients",
    name: "Enterprise Clientele & Case Studies",
    keywords: [
      "client",
      "clients",
      "clientele",
      "customer",
      "customers",
      "case study",
      "case studies",
      "portfolio",
      "projects",
      "who uses kloudera",
      "indiacapital",
      "fin chikitsak",
      "gleeds",
      "statusneo",
      "sit pune",
      "symbiosis",
    ],
    patterns: [/client/i, /customer/i, /portfolio/i, /case stud/i, /indiacapital/i, /gleeds/i, /statusneo/i, /sit pune/i],
    reply: `**KloudEra Enterprise Clientele & Case Studies:**\n\n• **IndiaCapital (FinTech):** Hardened hybrid cloud infrastructure and 24/7 security perimeter defense.\n• **Fin Chikitsak (FinTech):** Comprehensive financial wellness and advisory platform infrastructure.\n• **Gleeds (Construction Consultancy):** Global infrastructure consultancy IT governance, cloud migration, and VAPT audits.\n• **StatusNeo (MNC IT):** High-availability DevOps pipelines and multi-cloud governance.\n• **SIT Pune - Symbiosis (Academic Institution):** Academic datacenter security and advanced computing setups.\n• **Confidential Fortune 500 Enterprises:** Ongoing 24/7 SOC surveillance.`,
    links: [
      { label: "Explore Clienteles Page", href: "/clienteles" },
      { label: "Read Achievements", href: "/achievements" },
    ],
    suggestions: ["🏆 Government Recognitions", "🛡️ SOC Services", "📞 Book Consultation"],
  },

  // 18. Government Recognitions & Achievements
  {
    id: "achievements",
    name: "Accreditations & Government Recognitions",
    keywords: [
      "achievement",
      "achievements",
      "recognition",
      "recognitions",
      "msme",
      "startup india",
      "startupindia",
      "dpiit",
      "cii",
      "confederation of indian industry",
      "government",
      "govt",
    ],
    patterns: [/achievement/i, /recognition/i, /msme/i, /startup\s?india/i, /cii/i],
    reply: `**KloudEra Government Accreditations & Recognitions:**\n\n🇮🇳 **1. MSME Certified Enterprise:**\nOfficially certified enterprise under the Ministry of Micro, Small and Medium Enterprises, Government of India.\n\n🚀 **2. #startupindia Recognized Venture:**\nRecognized technology startup by DPIIT, Government of India under the flagship Startup India initiative.\n\n🏛️ **3. CII Membership:**\nMembership with the Confederation of Indian Industry (CII), India's premier industry association fostering business growth and innovation.`,
    links: [
      { label: "View Achievements Page", href: "/achievements" },
      { label: "View Certifications", href: "/certifications" },
    ],
    suggestions: ["📜 Compliance Standards", "📰 About KloudEra", "📍 Office Locations"],
  },

  // 19. Certifications & Compliance Standards
  {
    id: "certifications",
    name: "Certifications & Compliance Standards",
    keywords: [
      "certifications",
      "certification",
      "certified",
      "compliance",
      "iso",
      "iso 27001",
      "iso 9001",
      "soc 2",
      "soc2",
      "nist",
      "cmmi",
      "hipaa",
      "pci-dss",
      "pci",
      "standards",
    ],
    patterns: [/certif/i, /compliance/i, /iso/i, /soc\s?2/i, /nist/i, /cmmi/i, /hipaa/i, /pci/i],
    reply: `**Enterprise Certifications & Compliance Standards:**\n\nKloudEra operates under verified global compliance standards:\n\n• **${complianceStandards[0]}:** Information Security Management Systems\n• **${complianceStandards[1]}:** Trust Services Criteria for Security, Availability & Confidentiality\n• **${complianceStandards[2]}:** National Institute of Standards & Technology Cybersecurity Framework\n• **${complianceStandards[3]}:** High-Maturity Software and Service Optimization\n• **${complianceStandards[4]}:** Health Insurance Portability and Accountability Act standards\n• **${complianceStandards[5]}:** Payment Card Industry Data Security Standard\n• **60+ Professional Technical Accreditations** held by our engineering team.`,
    links: [
      { label: "View Certifications Directory", href: "/certifications" },
      { label: "Request Compliance Report", href: "/contact" },
    ],
    suggestions: ["🛡️ VAPT Audits", "📍 Office Locations", "📰 About KloudEra"],
  },

  // 20. Careers, Job Openings & Hiring Process
  {
    id: "careers",
    name: "Careers, Open Positions & Hiring",
    keywords: [
      "career",
      "careers",
      "job",
      "jobs",
      "hiring",
      "openings",
      "internship",
      "internships",
      "work at kloudera",
      "apply",
      "vacancies",
      "recruitment",
      "hr",
      "hiring steps",
      "interview process",
    ],
    patterns: [/career/i, /job/i, /hiring/i, /opening/i, /apply/i, /vacancy/i, /interview/i],
    reply: `**Careers at KloudEra Technologies:**\n\nWe are actively hiring engineering talent for remote and office roles:\n\n**Current Open Positions:**\n1. **${jobs[0]?.title}** (${jobs[0]?.dept} • ${jobs[0]?.location} • ${jobs[0]?.level})\n${jobs[0]?.body}\n\n2. **${jobs[1]?.title}** (${jobs[1]?.dept} • ${jobs[1]?.location} • ${jobs[1]?.level})\n${jobs[1]?.body}\n\n3. **${jobs[2]?.title}** (${jobs[2]?.dept} • ${jobs[2]?.location} • ${jobs[2]?.level})\n${jobs[2]?.body}\n\n**Our 4-Step Hiring Process:**\n• **${hiringSteps[0]?.step}:** ${hiringSteps[0]?.body}\n• **${hiringSteps[1]?.step}:** ${hiringSteps[1]?.body}\n• **${hiringSteps[2]?.step}:** ${hiringSteps[2]?.body}\n• **${hiringSteps[3]?.step}:** ${hiringSteps[3]?.body}`,
    links: [
      { label: "Browse Career Openings", href: "/careers" },
      { label: "Email Resume to HR", href: `mailto:${company.email}?subject=Job Application - KloudEra`, isExternal: true },
    ],
    suggestions: ["👥 Leadership Team", "📍 Office Addresses", "📰 Company Culture"],
  },

  // 21. Pricing & Commercials
  {
    id: "pricing",
    name: "Pricing & Quotation",
    keywords: [
      "price",
      "pricing",
      "cost",
      "how much",
      "rate",
      "rates",
      "fees",
      "quotation",
      "quote",
      "budget",
      "commercials",
      "commercial",
    ],
    patterns: [/price|pricing/i, /cost/i, /quotation|quote/i, /how much/i, /fee/i],
    reply: `**Engagement & Pricing Model:**\n\nKloudEra delivers tailored enterprise solutions (from dedicated GPU compute rigs to 24/7 enterprise SOC monitoring and multi-cloud migrations). Pricing is customized to your exact technical specifications.\n\n**How to receive an itemized proposal:**\n1. Contact our solutions engineering team via the Comms Gateway.\n2. We conduct a preliminary scope assessment.\n3. You receive a transparent proposal within 24-48 business hours.`,
    links: [
      { label: "Request Custom Quote", href: "/contact" },
      { label: "Call Solutions Team", href: `tel:${company.phones[0]}`, isExternal: true },
    ],
    suggestions: ["📞 Phone Lines", "⚡ AI Hardware Options", "🛡️ SOC Services"],
  },

  // 22. Greetings
  {
    id: "greetings",
    name: "Greetings",
    keywords: ["hi", "hello", "hey", "namaste", "greetings", "good morning", "good evening", "good afternoon"],
    patterns: [/^(?:hi|hello|hey|namaste|greetings|good (?:morning|evening|afternoon))[\s!.,?]*$/i],
    reply: `Hello! 👋 Welcome to **KloudEra Technologies**.\n\nI am the KloudEra AI Assistant, trained on all publicly available information across our website (Cybersecurity, AI Compute Rigs, Cloud, Products, Leadership, Offices, and Accreditations).\n\nHow can I help you architect or secure your digital enterprise today?`,
    suggestions: [
      "💡 What can you answer me?",
      "⭐ What is KloudEra good at?",
      "🛡️ What cyber security services do you offer?",
      "💻 What software products do you have?",
      "⚡ Can you configure custom AI GPU rigs?",
    ],
  },

  // 23. Thanks & Appreciation
  {
    id: "thanks",
    name: "Thanks & Feedback",
    keywords: ["thanks", "thank you", "awesome", "great", "helpful", "perfect", "good job"],
    patterns: [/^(?:thanks|thank you|awesome|great|perfect|good job)[\s!.,?]*$/i],
    reply: `You're very welcome! If you have any more questions about our services, software products, hardware rigs, or need to schedule an enterprise consultation, I am right here.\n\nHave a productive and secure day!`,
    suggestions: ["📞 Contact Solutions Team", "🛡️ Explore Services", "💻 View Products"],
  },
];

export function getChatbotResponse(userQuery: string): {
  reply: string;
  links?: Array<{ label: string; href: string; isExternal?: boolean }>;
  suggestions?: string[];
} {
  const raw = userQuery.trim().toLowerCase();

  if (!raw) {
    return {
      reply: "Please type a question or choose one of the suggestions below to learn more about KloudEra.",
      suggestions: initialSuggestions,
    };
  }

  // Clean query: strip common punctuation
  const cleanQuery = raw.replace(/[?!.,;:()"'`]/g, " ").replace(/\s+/g, " ").trim();

  // Guard: If the query has substantive question words, do NOT treat it as a pure greeting!
  const hasSubstantiveIntent = /(?:good at|good in|tell me|what|who|where|how|why|can you|price|cost|rig|soc|gpu|office|product|service|strength|specializ|contact|phone|email|team|lead|work|ceo)/i.test(cleanQuery);

  // Priority 1: Pattern-based direct intent match (skip greetings if substantive intent exists)
  for (const topic of knowledgeBase) {
    if (topic.id === "greetings" && hasSubstantiveIntent) {
      continue;
    }
    if (topic.patterns) {
      for (const pattern of topic.patterns) {
        if (pattern.test(cleanQuery)) {
          return {
            reply: topic.reply,
            links: topic.links,
            suggestions: topic.suggestions,
          };
        }
      }
    }
  }

  // Priority 2: Keyword scoring with word boundaries & stop words filter
  const queryWords = new Set(cleanQuery.split(/\s+/).filter((w) => w.length > 2 && !STOP_WORDS.has(w)));

  let bestMatch: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of knowledgeBase) {
    // Skip greetings topic in keyword scoring if query has substantive intent
    if (topic.id === "greetings" && hasSubstantiveIntent) {
      continue;
    }

    let score = 0;

    for (const kw of topic.keywords) {
      const cleanKw = kw.toLowerCase().trim();

      if (cleanQuery === cleanKw) {
        score += 30;
      } else if (cleanQuery.includes(cleanKw)) {
        score += 15 + cleanKw.split(" ").length * 4;
      } else {
        const kwWords = cleanKw.split(/\s+/).filter((w) => w.length > 2 && !STOP_WORDS.has(w));
        let matchedCount = 0;
        for (const kwWord of kwWords) {
          if (queryWords.has(kwWord)) {
            matchedCount++;
          }
        }
        if (matchedCount > 0) {
          score += matchedCount * 4;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = topic;
    }
  }

  // Threshold check
  if (bestMatch && highestScore >= 5) {
    return {
      reply: bestMatch.reply,
      links: bestMatch.links,
      suggestions: bestMatch.suggestions,
    };
  }

  // Dynamic Helpful Fallback with directory of all knowledge
  return {
    reply: `I am trained on all publicly available information across **KloudEra Technologies**! Here are the core topics I can answer:\n\n• **⭐ Core Strengths:** What KloudEra is best at and why enterprise clients choose us\n• **🛡️ Cybersecurity & 24/7 SOC:** Threat deflection, VAPT, vCISO/vDPO leadership, Zero-Trust\n• **⚡ AI & Custom GPU Rigs:** NVIDIA HGX clusters, custom LLMs, MLSecOps\n• **💻 Software Products:** Remote Desk, Meet Scheduler, Data Recovery Tool, Remote Device Controller\n• **☁️ Cloud & Automation:** AWS, Azure, GCP, FinOps cost control, RPA, IaC\n• **👥 Leadership & Team:** Ratnesh Pandey (CEO), Deepa (CHRO), Utkarsh, Abhay, Manan, Mrunal\n• **📍 Office Locations:** Bengaluru HQ & Pune Branch addresses and timings\n• **🏆 Accreditations & Clients:** MSME, Startup India, CII, ISO 27001, SOC 2, IndiaCapital, Gleeds\n• **💼 Careers:** Open roles (Security Auditor, AI Pipeline Lead, Solutions Architect)\n\nWhat would you like to explore?`,
    links: [
      { label: "Book a Consultation", href: "/contact" },
      { label: "Explore Services", href: "/services" },
      { label: "View Products", href: "/products" },
    ],
    suggestions: [
      "⭐ What is KloudEra good at?",
      "💡 What things can you answer me?",
      "🛡️ 24/7 SOC & Security",
      "💻 Software Products",
      "⚡ AI Compute & GPU Rigs",
      "📍 Office Locations & Timings",
    ],
  };
}

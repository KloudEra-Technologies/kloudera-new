import { company, offices, socialLinks } from "./site-data";

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
  "🛡️ 24/7 SOC & Cyber Security",
  "⚡ Custom GPU & AI Compute Rigs",
  "📍 Office Locations & Timings",
  "📞 Book a Systems Consultation",
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

export const knowledgeBase: KnowledgeTopic[] = [
  // 1. Bot Capabilities & "What can you answer me?"
  {
    id: "capabilities",
    name: "Assistant Capabilities & Topics",
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
      "what are your skills",
      "what is this bot",
    ],
    patterns: [
      /what.*(?:answer|do|help|know|ask)/i,
      /how.*help/i,
      /capabilities|features|topics|menu/i,
      /can you answer/i,
    ],
    reply: `I am the **KloudEra AI Assistant**, trained specifically on **KloudEra Technologies** products, enterprise services, hardware engineering, and company details.\n\nHere are the main categories of questions I can answer for you:\n\n🛡️ **1. Cybersecurity & 24/7 SOC Defense:**\n• Continuous telemetry surveillance & threat deflection\n• Vulnerability Assessment & Penetration Testing (VAPT)\n• Virtual CISO (vCISO) and Virtual DPO (vDPO) leadership\n• Zero-Trust network architecture\n\n⚡ **2. AI Compute Clusters & Custom Rigs:**\n• NVIDIA HGX, H100, L40S, and RTX Ada GPU servers\n• Custom Gen-AI pipelines and private LLM fine-tuning\n• MLSecOps automated model auditing and inference\n\n☁️ **3. Multi-Cloud & Enterprise Infrastructure:**\n• AWS, Microsoft Azure, and Google Cloud migrations\n• FinOps automated cloud spend optimization (up to 35% savings)\n• Datacenter servers, storage, and HCI hardware procurement\n\n📍 **4. Offices, Locations & Timings:**\n• **Bengaluru Office (HQ)** details and operating hours\n• **Pune Office (BRANCH)** details and operating hours\n\n📞 **5. Contact & Consultation Booking:**\n• Direct engineering phone lines and email addresses\n• Scheduling systems audits or hardware quotations\n• Official social media channels (LinkedIn, YouTube, Instagram)\n\n🤝 **6. Partners, Clients & Certifications:**\n• 80+ strategic partners (NVIDIA, AWS, Dell, CrowdStrike)\n• Client portfolio (IndiaCapital, Gleeds, StatusNeo, SIT Pune)\n• Compliance accreditations (ISO 27001, SOC 2 Type II, VAPT)\n\nTap any topic below to learn more, or type your question in plain English!`,
    links: [
      { label: "Book a Systems Consultation", href: "/contact" },
      { label: "Explore Services", href: "/services" },
      { label: "View Products", href: "/products" },
    ],
    suggestions: [
      "🛡️ Cyber Security SOC",
      "⚡ AI GPU Rigs",
      "📍 Office Locations",
      "📞 Contact Details",
      "🤝 Strategic Partners",
    ],
  },

  // 2. Company Overview & Identity
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
    ],
    patterns: [/who is kloudera/i, /about (?:kloudera|company)/i, /what is kloudera/i],
    reply: `**${company.name}** is a leading digital enterprise architecture and cybersecurity firm headquartered in Bengaluru with a branch office in Pune.\n\n**Tagline:** "${company.tagline}"\n\n${company.intro}\n\n**Our Core Pillars:**\n• **Cybersecurity:** Protect, Detect, and Respond with 24/7 SOC telemetry\n• **Cloud & Infra:** Simplified multi-cloud governance and FinOps\n• **AI CoE & Automation:** Custom GPU compute clusters and private LLM rigs\n• **Next-Gen Hardware:** AI-ready compute servers, SAN storage, and networking`,
    links: [
      { label: "Learn more About Us", href: "/about" },
      { label: "Explore Services", href: "/services" },
    ],
    suggestions: ["🛡️ 24/7 SOC Services", "⚡ AI Hardware Rigs", "📍 Office Locations"],
  },

  // 3. Offices & Locations
  {
    id: "offices",
    name: "Office Locations & Hours",
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
    reply: `**KloudEra Technologies Office Locations & Hours:**\n\n🏛️ **Bengaluru Office (HQ):**\n${offices[0]?.address}\n*Operating Hours:* ${offices[0]?.hours}\n\n🏢 **Pune Office (BRANCH):**\n${offices[1]?.address}\n*Operating Hours:* ${offices[1]?.hours}\n\nYou are welcome to visit our offices during business hours or schedule an appointment with our solutions engineering team.`,
    links: [
      { label: "View Contact Page & Details", href: "/contact" },
      { label: "Book a Consultation", href: "/contact" },
    ],
    suggestions: ["📞 Phone & Email Contact", "🛡️ Cyber Security SOC", "💼 Careers at KloudEra"],
  },

  // 4. Contact & Inquiries
  {
    id: "contact",
    name: "Contact Channels & Consultation",
    keywords: [
      "contact",
      "phone",
      "telephone",
      "mobile",
      "number",
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
    reply: `You can reach the **KloudEra Technologies** engineering and solutions team directly:\n\n📧 **Email:** ${company.email}\n📞 **Direct Phone Lines:**\n• ${company.phones[0]}\n• ${company.phones[1]}\n\n🕒 **Support & Business Hours:** Monday - Friday, 10:00 AM - 6:00 PM IST\n\nYou can also submit an inquiry through our Comms Gateway to receive an architecture consultation or hardware quote.`,
    links: [
      { label: "Open Contact Form", href: "/contact" },
      { label: "Email Directly", href: `mailto:${company.email}`, isExternal: true },
    ],
    suggestions: ["📍 Office Locations", "⚡ Custom AI Rigs", "🛡️ VAPT & SOC Services"],
  },

  // 5. Social Media Channels
  {
    id: "social",
    name: "Social Media Channels",
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
    reply: `Follow **KloudEra Technologies** across our official social channels for real-time security threat advisories, GPU cluster benchmarks, and engineering insights:\n\n• **LinkedIn:** [KloudEra Technologies](${socialLinks[0]?.href})\n• **YouTube:** [@KloudEraTechnologies](${socialLinks[1]?.href})\n• **Instagram:** [@klouderatech](${socialLinks[2]?.href})`,
    links: [
      { label: "LinkedIn Company Page", href: socialLinks[0]?.href || "#", isExternal: true },
      { label: "YouTube Channel", href: socialLinks[1]?.href || "#", isExternal: true },
      { label: "Instagram Profile", href: socialLinks[2]?.href || "#", isExternal: true },
    ],
    suggestions: ["📰 About KloudEra", "💼 Open Careers", "🛡️ Security Services"],
  },

  // 6. Cybersecurity & 24/7 SOC
  {
    id: "cybersecurity",
    name: "Cyber Security & 24/7 SOC",
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
      "incident",
      "vulnerability",
      "hacked",
      "ransomware",
      "malware",
      "defense",
      "protect",
    ],
    patterns: [/soc/i, /cyber/i, /vapt/i, /penetration/i, /security/i, /threat/i, /vciso/i, /zero-?trust/i],
    reply: `**KloudEra Cyber Security & 24/7 SOC Defense:**\n\n🛡️ **24/7 Telemetry Surveillance:** Continuous monitoring across your entire IP network to detect, isolate, and neutralize zero-day threats in real time.\n\n🔍 **VAPT (Vulnerability Assessment & Pen Testing):** Rigorous ethical hacking simulations against web applications, cloud networks, APIs, and databases.\n\n👔 **vCISO & vDPO Leadership:** Executive-level cybersecurity strategy, regulatory compliance governance (ISO 27001, SOC 2, DPDP Act, GDPR), and incident response planning.\n\n🔒 **Zero-Trust Network Architecture:** Dynamic identity verification, micro-segmentation, and least-privilege access enforcement.`,
    links: [
      { label: "Explore Security Services", href: "/services" },
      { label: "Schedule Security Audit", href: "/contact" },
    ],
    suggestions: ["⚡ AI Compute & GPU Rigs", "☁️ Multi-Cloud Migration", "📜 Certifications"],
  },

  // 7. AI Compute, GPUs & Custom Rigs
  {
    id: "ai_compute",
    name: "AI Compute Clusters & Custom Rigs",
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
    reply: `**KloudEra AI CoE & Custom GPU Infrastructure:**\n\n⚡ **High-Performance GPU Clusters:** We design, benchmark, and deploy enterprise GPU infrastructure for deep learning training and inference (NVIDIA HGX, H100, A100, L40S, RTX 6000 Ada).\n\n🤖 **Gen-AI & Custom LLM Pipelines:** Custom foundation model fine-tuning and retrieval-augmented generation (RAG) on your private data estate.\n\n🛠️ **MLSecOps Workflows:** Automated model auditing, secure containerized deployments, and continuous pipeline vulnerability checks.\n\n❄️ **Thermal & Power Engineering:** High-density rack systems optimized for maximum FLOPS per watt with advanced cooling profiles.`,
    links: [
      { label: "Preview Products & Rigs", href: "/products" },
      { label: "Request GPU Rig Specs", href: "/contact" },
    ],
    suggestions: ["🖥️ Datacenter Servers", "🛡️ SOC Threat Protection", "🤝 Strategic Partners"],
  },

  // 8. Cloud & Multi-Cloud Infrastructure
  {
    id: "cloud",
    name: "Cloud & Multi-Cloud Infrastructure",
    keywords: [
      "cloud",
      "aws",
      "azure",
      "gcp",
      "google cloud",
      "migration",
      "serverless",
      "multi-cloud",
      "devops",
      "finops",
      "kubernetes",
      "k8s",
      "cost optimization",
      "cloud spend",
    ],
    patterns: [/cloud/i, /aws|azure|gcp/i, /migration/i, /finops/i, /serverless/i, /kubernetes/i],
    reply: `**Cloud & Infrastructure Governance:**\n\n☁️ **Multi-Cloud Architecture:** Unified management across AWS, Microsoft Azure, and Google Cloud with centralized identity and security policy enforcement.\n\n🔄 **Zero-Downtime Migration:** Seamless lift-and-shift or cloud-native modernization for mission-critical databases and microservices.\n\n💰 **FinOps & Cost Optimization:** Automated cloud rightsizing, reserved capacity management, and wastage removal to reduce cloud bills by up to 35%.\n\n⚡ **Serverless & Container Orchestration:** Production Kubernetes (EKS/AKS/GKE) and infrastructure-as-code automation.`,
    links: [
      { label: "View Cloud Services", href: "/services" },
      { label: "Consult on Cloud Migration", href: "/contact" },
    ],
    suggestions: ["🛡️ 24/7 SOC Surveillance", "⚡ AI Infrastructure", "🤝 Cloud Partners"],
  },

  // 9. Hardware & Datacenter Solutions
  {
    id: "hardware",
    name: "Datacenter Hardware & Procurement",
    keywords: [
      "hardware",
      "server",
      "servers",
      "storage",
      "datacenter",
      "data center",
      "procurement",
      "hci",
      "dell",
      "hpe",
      "rack",
      "racks",
      "networking",
      "switch",
      "switches",
      "san",
      "nas",
    ],
    patterns: [/hardware/i, /server/i, /storage/i, /datacenter/i, /rack/i, /procurement/i, /hci/i],
    reply: `**Enterprise Hardware Infrastructure Solutions:**\n\n🖥️ **Compute Servers:** High-density rack servers from Tier-1 OEMs (Dell, HPE, Supermicro) built for high-throughput enterprise workloads.\n\n💾 **Enterprise Storage:** High-velocity NVMe SAN/NAS storage arrays engineered for AI pipelines and unstructured big data lakes.\n\n🌐 **Hyper-Converged Infrastructure (HCI):** Integrated compute, storage, and networking with unified single-pane management.\n\n📦 **Lifecycle Management:** Turnkey procurement, rack-and-stack installation, thermal benchmarking, and 24/7 OEM warranty support.`,
    links: [
      { label: "View Hardware Products", href: "/products" },
      { label: "Request Hardware Quotation", href: "/contact" },
    ],
    suggestions: ["⚡ GPU AI Rigs", "🤝 Partner Network", "📞 Contact Sales"],
  },

  // 10. Partners Ecosystem
  {
    id: "partners",
    name: "Strategic Partners",
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
    ],
    patterns: [/partner/i, /ecosystem/i, /vendor/i, /alliance/i],
    reply: `**KloudEra Strategic Partner Ecosystem:**\n\nWe collaborate with industry-leading technology providers to engineer robust enterprise solutions:\n\n• **Cloud Hyperscalers:** AWS, Microsoft Azure, Google Cloud (GCP)\n• **Compute & GPUs:** NVIDIA, Dell Technologies, HPE, Apple, IBM\n• **Security & Telemetry:** CrowdStrike, SentinelOne, Palo Alto, Fortinet, Check Point, Trend Micro, Tenable, Qualys\n• **Data & Observability:** Databricks, Snowflake, Datadog, Elastic, Zabbix\n• **Datacenter & Telecom:** Adani ConneX, Sify, Web Werks, CtrlS`,
    links: [
      { label: "Browse All 80+ Partners", href: "/partners" },
      { label: "Inquire Partner Solutions", href: "/contact" },
    ],
    suggestions: ["🛡️ Security Stack", "⚡ AI Hardware Options", "📍 Office Addresses"],
  },

  // 11. Clients & Case Studies
  {
    id: "clients",
    name: "Clients & Portfolio",
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
    ],
    patterns: [/client/i, /customer/i, /portfolio/i, /case stud/i],
    reply: `**KloudEra Enterprise Clientele:**\n\nKloudEra serves high-growth enterprises across BFSI, Higher Education, Infrastructure, and Global IT:\n\n• **IndiaCapital:** Hardened hybrid cloud infrastructure and zero-trust perimeter defense.\n• **Gleeds:** Global construction consultancy enterprise IT governance and VAPT audits.\n• **StatusNeo:** High-availability DevOps pipelines and multi-cloud governance.\n• **SIT Pune (Symbiosis):** Academic datacenter security and advanced computing setups.\n• **Confidential Fortune 500 Enterprises:** Ongoing 24/7 SOC telemetry and threat management.`,
    links: [
      { label: "Explore Clienteles", href: "/clienteles" },
      { label: "Read Achievements", href: "/achievements" },
    ],
    suggestions: ["📜 Certifications", "🛡️ SOC Services", "📞 Book Consultation"],
  },

  // 12. Certifications & Compliance
  {
    id: "certifications",
    name: "Certifications & Compliance",
    keywords: [
      "certifications",
      "certification",
      "certified",
      "compliance",
      "iso",
      "soc 2",
      "soc2",
      "vapt certification",
      "accreditation",
      "accreditations",
      "standards",
    ],
    patterns: [/certif/i, /compliance/i, /iso\s?27001/i, /soc\s?2/i],
    reply: `**Enterprise Certifications & Accreditations:**\n\nKloudEra operates under verified international security standards:\n\n• **ISO 27001:** Information Security Management Systems\n• **ISO 9001:** Quality Management Systems\n• **SOC 2 Type II:** Verified trust principles for security, availability, and confidentiality\n• **VAPT Certified:** Rigorous industry ethical hacking benchmarks\n• **Zero-Trust Compliant:** Verified least-privilege architecture principles`,
    links: [
      { label: "View All Certifications", href: "/certifications" },
      { label: "Request Compliance Report", href: "/contact" },
    ],
    suggestions: ["🛡️ VAPT Audits", "📍 Office Locations", "📰 About KloudEra"],
  },

  // 13. Careers & Hiring
  {
    id: "careers",
    name: "Careers & Open Positions",
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
      "vacancy",
      "recruitment",
      "hr",
    ],
    patterns: [/career/i, /job/i, /hiring/i, /opening/i, /apply/i, /vacancy/i],
    reply: `**Careers at KloudEra Technologies:**\n\nWe are actively hiring visionary engineers, security researchers, and infrastructure architects for our Bengaluru HQ and Pune Branch:\n\n**Key Domains:**\n• Cyber Security Analysts & SOC Engineers (Tier 2/3)\n• VAPT / Ethical Hackers & Red Teamers\n• Cloud Architects (AWS / Azure / GCP)\n• AI & GPU Systems Engineers\n• Enterprise Technical Account Managers\n\nVisit our Careers page to view current open positions and submit your profile.`,
    links: [
      { label: "Browse Career Openings", href: "/careers" },
      { label: "Contact Recruitment Team", href: `mailto:${company.email}?subject=Job Application - KloudEra`, isExternal: true },
    ],
    suggestions: ["📍 Office Addresses", "📰 Company Culture", "⚡ Engineering Projects"],
  },

  // 14. Pricing & Engagement Model
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
    reply: `**Engagement & Pricing Model:**\n\nBecause KloudEra delivers tailored enterprise solutions (from single AI compute rigs to 24/7 enterprise SOC deployments and multi-cloud migrations), pricing is customized to your exact technical specifications.\n\n**How to get an accurate quotation:**\n1. Contact our solutions engineering team via the Comms Gateway.\n2. We conduct a preliminary scope assessment.\n3. You receive a transparent, itemized proposal within 24-48 business hours.`,
    links: [
      { label: "Request Custom Quote", href: "/contact" },
      { label: "Call Solutions Team", href: `tel:${company.phones[0]}`, isExternal: true },
    ],
    suggestions: ["📞 Phone Lines", "⚡ AI Hardware Options", "🛡️ SOC Services"],
  },

  // 15. Greetings & Small Talk
  {
    id: "greetings",
    name: "Greetings",
    keywords: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon", "greetings", "namaste", "sup"],
    patterns: [/^(?:hi|hello|hey|namaste|greetings)(?:\s|$)/i],
    reply: `Hello! 👋 Welcome to **KloudEra Technologies**.\n\nI am the KloudEra AI Assistant, trained on our cybersecurity services, GPU compute rigs, enterprise cloud solutions, and office information.\n\nHow can I help you architect or secure your digital enterprise today?`,
    suggestions: [
      "💡 What things can you answer me?",
      "🛡️ What cyber security services do you offer?",
      "⚡ Can you configure custom AI GPU rigs?",
      "📍 Where are your offices located?",
    ],
  },

  // 16. Thanks & Appreciation
  {
    id: "thanks",
    name: "Thanks & Feedback",
    keywords: ["thanks", "thank you", "awesome", "great", "helpful", "perfect", "good job"],
    patterns: [/thank/i, /awesome|great|perfect/i],
    reply: `You're very welcome! If you have any more questions about our services, hardware specs, or need to connect directly with our engineering team, I'm right here.\n\nHave a productive and secure day!`,
    suggestions: ["📞 Contact Solutions Team", "🛡️ Explore Services", "⚡ View Products"],
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

  // Priority 1: Pattern-based direct intent match
  for (const topic of knowledgeBase) {
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

  // Priority 2: Keyword scoring with word boundaries
  let bestMatch: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of knowledgeBase) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (cleanQuery === kw) {
        score += 20;
      } else if (cleanQuery.includes(kw)) {
        score += 8 + kw.split(" ").length * 3;
      } else {
        const words = kw.split(" ");
        const matchedWords = words.filter((w) => w.length > 2 && cleanQuery.includes(w));
        if (matchedWords.length > 0) {
          score += matchedWords.length * 2;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = topic;
    }
  }

  // Threshold check
  if (bestMatch && highestScore >= 4) {
    return {
      reply: bestMatch.reply,
      links: bestMatch.links,
      suggestions: bestMatch.suggestions,
    };
  }

  // Dynamic Helpful Fallback explaining topics
  return {
    reply: `I can help you with anything regarding **KloudEra Technologies**! Here are the core topics I am pre-trained on:\n\n• **🛡️ Cybersecurity & SOC:** 24/7 threat detection, VAPT audits, vCISO leadership\n• **⚡ AI & GPU Rigs:** NVIDIA HGX clusters, custom LLM fine-tuning, MLSecOps\n• **☁️ Multi-Cloud:** AWS, Azure, GCP cloud migration & FinOps cost optimization\n• **📍 Office Locations:** Bengaluru HQ & Pune Branch addresses and hours\n• **📞 Contact & Booking:** Direct phone lines, email, and consultation scheduling\n• **🤝 Partners & Clients:** NVIDIA, AWS, Dell, CrowdStrike, and enterprise case studies\n\nWhat would you like to explore?`,
    links: [
      { label: "Book a Consultation", href: "/contact" },
      { label: "Explore Services", href: "/services" },
      { label: "View Products", href: "/products" },
    ],
    suggestions: [
      "💡 What things can you answer me?",
      "🛡️ 24/7 SOC & Security",
      "⚡ AI Compute & GPU Rigs",
      "📍 Office Locations & Timings",
      "📞 Contact Details & Phone",
    ],
  };
}

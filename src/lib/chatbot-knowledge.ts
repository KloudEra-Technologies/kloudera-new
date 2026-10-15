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
  "🛡️ 24/7 SOC & Cyber Security",
  "⚡ Custom GPU & AI Compute Rigs",
  "📍 Office Locations & Timings",
  "📞 Book a Systems Consultation",
  "🤝 Partners & Hardware Ecosystem",
];

interface KnowledgeTopic {
  id: string;
  keywords: string[];
  reply: string;
  links?: Array<{ label: string; href: string; isExternal?: boolean }>;
  suggestions?: string[];
}

const knowledgeBase: KnowledgeTopic[] = [
  // 1. Company Overview & Identity
  {
    id: "about",
    keywords: ["who is kloudera", "about kloudera", "company", "what do you do", "overview", "what is kloudera"],
    reply: `**${company.name}** is a premier digital infrastructure & cybersecurity enterprise headquartered in Bengaluru with a branch office in Pune.\n\n**Tagline:** "${company.tagline}"\n\n${company.intro}\n\nOur core domains include:\n• **Cybersecurity & 24/7 SOC** (vCISO, vDPO, VAPT, Zero-Trust)\n• **AI Compute Clusters & Custom Rigs** (Enterprise GPUs, LLM pipelines)\n• **Simplified Multi-Cloud Governance** (AWS, Azure, GCP)\n• **Next-Gen Datacenter Hardware** (Servers, Storage, HCI)`,
    links: [
      { label: "Learn more About Us", href: "/about" },
      { label: "Explore Services", href: "/services" },
    ],
    suggestions: ["🛡️ 24/7 SOC Services", "⚡ AI Hardware Rigs", "📍 Office Locations"],
  },

  // 2. Offices & Locations
  {
    id: "offices",
    keywords: ["office", "location", "address", "headquarters", "hq", "bengaluru", "bangalore", "pune", "where are you", "city", "hours", "timings"],
    reply: `**KloudEra Technologies Office Locations:**\n\n🏛️ **Bengaluru Office (HQ):**\n${offices[0]?.address}\n*Operating Hours:* ${offices[0]?.hours}\n\n🏢 **Pune Office (BRANCH):**\n${offices[1]?.address}\n*Operating Hours:* ${offices[1]?.hours}\n\nYou are welcome to visit our offices during working hours or schedule an appointment with our solutions engineering team.`,
    links: [
      { label: "View Contact & Map", href: "/contact" },
      { label: "Book a Consultation", href: "/contact" },
    ],
    suggestions: ["📞 Phone & Email Contact", "🛡️ Cyber Security SOC", "💼 Careers at KloudEra"],
  },

  // 3. Contact & Inquiries
  {
    id: "contact",
    keywords: ["contact", "phone", "email", "call", "reach", "talk to sales", "book", "consultation", "appointment", "schedule", "quote", "get in touch"],
    reply: `You can reach the **KloudEra Technologies** engineering and solutions team directly:\n\n📧 **Email:** ${company.email}\n📞 **Phone Lines:**\n• ${company.phones[0]}\n• ${company.phones[1]}\n\n🕒 **Support & Business Hours:** Monday - Friday, 10:00 AM - 6:00 PM IST\n\nYou can also submit an inquiry on our Comms Gateway page to receive an infrastructure evaluation or hardware quote.`,
    links: [
      { label: "Open Contact Form", href: "/contact" },
      { label: "Email Directly", href: `mailto:${company.email}`, isExternal: true },
    ],
    suggestions: ["📍 Office Locations", "⚡ Custom AI Rigs", "🛡️ VAPT & SOC Services"],
  },

  // 4. Social Media
  {
    id: "social",
    keywords: ["social", "linkedin", "youtube", "insta", "instagram", "follow", "social media", "channel"],
    reply: `Follow **KloudEra Technologies** across our official social platforms for real-time cybersecurity threat bulletins, AI compute cluster benchmarks, and engineering updates:\n\n• **LinkedIn:** [KloudEra Technologies](${socialLinks[0]?.href})\n• **YouTube:** [@KloudEraTechnologies](${socialLinks[1]?.href})\n• **Instagram:** [@klouderatech](${socialLinks[2]?.href})`,
    links: [
      { label: "LinkedIn Company Page", href: socialLinks[0]?.href || "#", isExternal: true },
      { label: "YouTube Channel", href: socialLinks[1]?.href || "#", isExternal: true },
      { label: "Instagram Profile", href: socialLinks[2]?.href || "#", isExternal: true },
    ],
    suggestions: ["📰 About KloudEra", "💼 Open Careers", "🛡️ Security Services"],
  },

  // 5. Cybersecurity & 24/7 SOC
  {
    id: "cybersecurity",
    keywords: ["cyber", "security", "soc", "vapt", "penetration", "threat", "audit", "vciso", "vdpo", "zero trust", "firewall", "edr", "incident", "vulnerability"],
    reply: `**KloudEra Cyber Security & 24/7 SOC Capabilities:**\n\n🛡️ **24/7 Telemetry Surveillance:** Continuous monitoring of enterprise IP networks to detect, isolate, and neutralize zero-day intrusions in real time.\n\n🔍 **VAPT (Vulnerability Assessment & Pen Testing):** Rigorous simulated cyberattacks on web applications, internal networks, APIs, and cloud infrastructure.\n\n👔 **vCISO & vDPO Leadership:** On-demand executive cybersecurity leadership, compliance governance (ISO 27001, SOC 2, DPDP, GDPR), and board reporting.\n\n🔒 **Zero-Trust Network Architecture:** Micro-segmentation, identity verification, and multi-factor access policies to ensure defense-in-depth.`,
    links: [
      { label: "Explore Security Services", href: "/services" },
      { label: "Schedule Security Audit", href: "/contact" },
    ],
    suggestions: ["⚡ AI Compute & GPU Rigs", "☁️ Multi-Cloud Migration", "📜 Certifications"],
  },

  // 6. AI Compute, GPUs & Custom Rigs
  {
    id: "ai_compute",
    keywords: ["ai", "gpu", "nvidia", "rig", "cluster", "hgx", "h100", "a100", "llm", "gen-ai", "machine learning", "mlsecops", "compute", "deep learning", "workstation"],
    reply: `**KloudEra AI CoE & Custom GPU Rigs:**\n\n⚡ **High-Performance GPU Clusters:** We design, benchmark, and deploy enterprise GPU infrastructure for deep learning training and inference (NVIDIA HGX, H100, L40S, RTX Ada systems).\n\n🤖 **Gen-AI & Custom LLM Pipelines:** Fine-tuning open and proprietary foundation models on your private data estate with strict data isolation.\n\n🛠️ **MLSecOps Workflows:** Automated pipeline security, model auditing, and containerized inference deployments.\n\n❄️ **Thermal & Power Engineering:** High-density server rack architecture engineered for maximum FLOPS with optimized power and cooling profiles.`,
    links: [
      { label: "Preview Hardware Products", href: "/products" },
      { label: "Request GPU Rig Specs", href: "/contact" },
    ],
    suggestions: ["🖥️ Datacenter Servers", "🛡️ SOC Threat Protection", "🤝 NVIDIA Partnership"],
  },

  // 7. Cloud & Multi-Cloud Infrastructure
  {
    id: "cloud",
    keywords: ["cloud", "aws", "azure", "gcp", "google cloud", "migration", "serverless", "multi-cloud", "devops", "finops", "cost optimization"],
    reply: `**Cloud & Infrastructure Governance:**\n\n☁️ **Multi-Cloud Architecture:** Seamless integration across AWS, Microsoft Azure, and Google Cloud with unified identity and policy management.\n\n🔄 **Zero-Downtime Migration:** Systematic lift-and-shift or cloud-native modernization for mission-critical databases and microservices.\n\n💰 **FinOps & Cost Optimization:** Automated cloud resource rightsizing, reserved instance planning, and wastage elimination to cut cloud spend by up to 35%.\n\n⚡ **Serverless & Container Infrastructure:** Kubernetes (EKS/AKS/GKE), Docker, and infrastructure-as-code (Terraform, Ansible).`,
    links: [
      { label: "View Cloud Services", href: "/services" },
      { label: "Consult on Cloud Migration", href: "/contact" },
    ],
    suggestions: ["🛡️ 24/7 SOC Surveillance", "⚡ AI Infrastructure", "🤝 Cloud Partners"],
  },

  // 8. Hardware & Datacenter Solutions
  {
    id: "hardware",
    keywords: ["hardware", "server", "servers", "storage", "datacenter", "procurement", "hci", "dell", "hpe", "rack", "networking", "switch"],
    reply: `**Enterprise Hardware Infrastructure Solutions:**\n\n🖥️ **Compute Servers:** High-density rack servers from Tier-1 OEMs (Dell, HPE, Supermicro) configured for enterprise workloads.\n\n💾 **Enterprise Storage:** High-throughput NVMe SAN/NAS systems and hybrid cloud storage arrays for high-velocity data lakes.\n\n🌐 **Hyper-Converged Infrastructure (HCI):** Integrated compute, storage, and networking with unified management plane.\n\n📦 **Lifecycle Management:** Complete procurement, white-glove rack installation, thermal profiling, and 24/7 OEM warranty support.`,
    links: [
      { label: "View Hardware Products", href: "/products" },
      { label: "Request Hardware Quotation", href: "/contact" },
    ],
    suggestions: ["⚡ GPU AI Rigs", "🤝 Partner Network", "📞 Contact Sales"],
  },

  // 9. Partners Ecosystem
  {
    id: "partners",
    keywords: ["partner", "partners", "ecosystem", "alliance", "vendor", "reseller", "aws partner", "microsoft partner", "nvidia partner", "dell partner"],
    reply: `**KloudEra Strategic Partner Ecosystem:**\n\nWe collaborate with industry-leading technology giants to deliver tier-1 digital infrastructure:\n\n• **Cloud Hyperscalers:** AWS, Microsoft Azure, Google Cloud (GCP)\n• **Compute & GPUs:** NVIDIA, Dell Technologies, HPE, Apple, IBM\n• **Security & Telemetry:** CrowdStrike, SentinelOne, Palo Alto, Fortinet, Check Point, Trend Micro, Tenable, Qualys\n• **Data & Observability:** Databricks, Snowflake, Datadog, Elastic, Zabbix\n• **Datacenter & Telecom:** Adani ConneX, Sify, Web Werks, CtrlS`,
    links: [
      { label: "Browse All 80+ Partners", href: "/partners" },
      { label: "Inquire Partner Solutions", href: "/contact" },
    ],
    suggestions: ["🛡️ Security Stack", "⚡ AI Hardware Options", "📍 Office Addresses"],
  },

  // 10. Clients & Case Studies
  {
    id: "clients",
    keywords: ["client", "clients", "clientele", "customer", "customers", "case study", "portfolio", "projects", "who uses kloudera"],
    reply: `**KloudEra Enterprise Clientele:**\n\nKloudEra empowers organizations across BFSI, Higher Education, Infrastructure, and Enterprise IT:\n\n• **IndiaCapital:** Hardened hybrid cloud infrastructure and 24/7 security perimeter.\n• **Gleeds:** Global construction consultancy enterprise IT governance and VAPT audits.\n• **StatusNeo:** High-availability DevOps pipelines and multi-cloud optimization.\n• **SIT Pune (Symbiosis):** Academic datacenter security and advanced computing setups.\n• **Confidential Fortune 500 Enterprises:** Ongoing 24/7 SOC surveillance.`,
    links: [
      { label: "Explore Clienteles", href: "/clienteles" },
      { label: "Read Achievements", href: "/achievements" },
    ],
    suggestions: ["📜 Certifications", "🛡️ SOC Services", "📞 Book Consultation"],
  },

  // 11. Certifications & Compliance
  {
    id: "certifications",
    keywords: ["certifications", "certified", "compliance", "iso", "soc 2", "soc2", "vapt certification", "accreditation", "standards"],
    reply: `**Enterprise Certifications & Accreditations:**\n\nKloudEra operates under strict international compliance standards:\n\n• **ISO 27001:** Information Security Management Systems\n• **ISO 9001:** Quality Management Standards\n• **SOC 2 Type II:** Verified trust principles for security, availability, and confidentiality\n• **VAPT Certified:** Rigorous industry ethical hacking benchmarks\n• **Zero-Trust Compliant:** Verified least-privilege architecture principles`,
    links: [
      { label: "View All Certifications", href: "/certifications" },
      { label: "Request Compliance Report", href: "/contact" },
    ],
    suggestions: ["🛡️ VAPT Audits", "📍 Office Locations", "📰 About KloudEra"],
  },

  // 12. Careers & Job Openings
  {
    id: "careers",
    keywords: ["career", "careers", "job", "jobs", "hiring", "openings", "internship", "work at kloudera", "apply", "vacancies", "hr"],
    reply: `**Careers at KloudEra Technologies:**\n\nWe are always looking for visionary engineers, ethical hackers, and infrastructure architects to join our teams in Bengaluru and Pune:\n\n**Key Domains We Hire For:**\n• Cyber Security Analysts & SOC Engineers\n• VAPT / Penetration Testers\n• Cloud Architects (AWS / Azure / GCP)\n• AI & GPU Systems Engineers\n• Enterprise Sales & Technical Account Managers\n\nVisit our Careers page to view current open positions and submit your resume.`,
    links: [
      { label: "Browse Career Openings", href: "/careers" },
      { label: "Contact Recruitment", href: `mailto:${company.email}?subject=Job Application - KloudEra`, isExternal: true },
    ],
    suggestions: ["📍 Office Addresses", "📰 Company Culture", "⚡ Engineering Projects"],
  },

  // 13. Pricing & Engagement Model
  {
    id: "pricing",
    keywords: ["price", "pricing", "cost", "how much", "rate", "fees", "quotation", "budget", "commercials"],
    reply: `**Engagement & Pricing Model:**\n\nBecause KloudEra delivers tailored enterprise solutions (from single AI compute rigs to 24/7 enterprise SOC deployments and multi-cloud migrations), pricing is customized to your exact technical specifications.\n\n**How to get an accurate quotation:**\n1. Contact our solutions engineering team via the Comms Gateway.\n2. We conduct a preliminary scope assessment.\n3. You receive a transparent, itemized proposal within 24-48 business hours.`,
    links: [
      { label: "Request Custom Quote", href: "/contact" },
      { label: "Call Solutions Team", href: `tel:${company.phones[0]}`, isExternal: true },
    ],
    suggestions: ["📞 Phone Lines", "⚡ AI Hardware Options", "🛡️ SOC Services"],
  },

  // 14. Greetings & Small Talk
  {
    id: "greetings",
    keywords: ["hi", "hello", "hey", "good morning", "good evening", "good afternoon", "greetings", "namaste", "sup"],
    reply: `Hello! 👋 Welcome to **KloudEra Technologies**.\n\nI am the KloudEra AI Assistant, trained on our cybersecurity services, GPU compute rigs, enterprise cloud solutions, and office information.\n\nHow can I help you architect or secure your digital enterprise today?`,
    suggestions: [
      "🛡️ What cyber security services do you offer?",
      "⚡ Can you configure custom AI GPU rigs?",
      "📍 Where are your offices located?",
      "📞 How can I talk to your engineering team?",
    ],
  },

  // 15. Thanks & Appreciation
  {
    id: "thanks",
    keywords: ["thanks", "thank you", "awesome", "great", "helpful", "perfect", "good job"],
    reply: `You're very welcome! If you have any more questions about our services, hardware specs, or need to connect directly with our engineering team, I'm right here.\n\nHave a productive and secure day!`,
    suggestions: ["📞 Contact Solutions Team", "🛡️ Explore Services", "⚡ View Products"],
  },
];

export function getChatbotResponse(userQuery: string): {
  reply: string;
  links?: Array<{ label: string; href: string; isExternal?: boolean }>;
  suggestions?: string[];
} {
  const query = userQuery.trim().toLowerCase();

  if (!query) {
    return {
      reply: "Please type a question or choose one of the suggestions below to learn more about KloudEra.",
      suggestions: initialSuggestions,
    };
  }

  // Score each knowledge topic
  let bestMatch: KnowledgeTopic | null = null;
  let highestScore = 0;

  for (const topic of knowledgeBase) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (query === kw) {
        score += 15;
      } else if (query.includes(kw)) {
        score += 5 + kw.split(" ").length * 2;
      } else {
        const words = kw.split(" ");
        const matchedWords = words.filter((w) => w.length > 2 && query.includes(w));
        if (matchedWords.length > 0) {
          score += matchedWords.length * 1.5;
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = topic;
    }
  }

  // Threshold check: return best match if score is sufficient
  if (bestMatch && highestScore >= 3) {
    return {
      reply: bestMatch.reply,
      links: bestMatch.links,
      suggestions: bestMatch.suggestions,
    };
  }

  // Helpful fallback for unmatched queries
  return {
    reply: `Thank you for asking! While I don't have a direct pre-programmed answer for that specific phrasing, our solutions team specializes in customized enterprise infrastructure, 24/7 SOC defense, custom GPU clusters, and multi-cloud governance.\n\nWould you like to:\n• Speak with an engineer directly via phone or email\n• Visit our Bengaluru HQ or Pune Branch\n• Explore our core service capabilities or product rigs?`,
    links: [
      { label: "Book a Consultation", href: "/contact" },
      { label: "View All Services", href: "/services" },
      { label: "Explore Products", href: "/products" },
    ],
    suggestions: [
      "🛡️ 24/7 SOC & Security",
      "⚡ AI Compute & GPU Rigs",
      "📍 Office Locations & Timings",
      "📞 Contact Details & Phone",
    ],
  };
}

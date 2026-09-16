import { a as __toESM, r as __exportAll, t as __exportAll$1 } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createRootRouteWithContext, d as HeadContent, g as createFileRoute, h as lazyRouteComponent, m as Outlet, p as createRouter, u as Scripts, v as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { a as Menu, i as Phone, o as MapPin, s as Mail, t as X } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { i as Program, n as Mesh, r as Renderer, t as Triangle } from "../_libs/ogl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-C6d_usC-.js
var router_C6d_usC__exports = /* @__PURE__ */ __exportAll({
	_: () => zeroTrustPrinciples,
	a: () => benefits,
	c: () => company,
	d: () => hiringSteps,
	f: () => jobs,
	g: () => team,
	getRouter: () => getRouter,
	h: () => serviceGroups,
	i: () => achievements,
	l: () => complianceStandards,
	m: () => products,
	n: () => cn,
	o: () => capabilities,
	p: () => offices,
	r: () => aboutHighlights,
	s: () => clienteles,
	t: () => router_exports,
	u: () => heroPillars
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-D3riqA-Z.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var company = {
	name: "KloudEra Technologies",
	short: "Kloudera",
	domain: "kloudera.ai",
	email: "info@kloudera.ai",
	phones: ["+91 9899822926", "+91 9390484180"],
	tagline: "Architecting Zero-Trust Digital Enterprises",
	intro: "Empowering Fortune 500 infrastructure with 24/7 Security Operations Surveillance, custom GPU AI compute clusters, and seamless Microsoft Cloud ecosystem governance."
};
var offices = [{
	city: "Pune Office",
	kind: "HQ",
	address: "412, Tower B City Vista DownTown, Kharadi Pune - 411014 | Maharashtra | India",
	hours: "Monday - Friday 10am - 6pm"
}, {
	city: "Bengaluru Office",
	kind: "BRANCH",
	address: "35/36, Shri Durga Kurupa, Thanisandra, Raechanhalli, Bengaluru, Karnataka - 560045",
	hours: "Monday - Friday 10am - 6pm"
}];
var navLinks = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/products",
		label: "Products"
	},
	{
		to: "/partners",
		label: "Partners"
	},
	{
		to: "/clienteles",
		label: "Clienteles"
	},
	{
		to: "/achievements",
		label: "Achievements"
	},
	{
		to: "/certifications",
		label: "Certifications"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/careers",
		label: "Careers"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
var heroPillars = [
	{
		kicker: "CYBERSECURITY",
		title: "Protect. Detect. Respond.",
		body: "vCISO, vDPO, 24/7 Monitoring, VAPT, and proactive security strategy."
	},
	{
		kicker: "CLOUD & INFRA",
		title: "Simplified Multi-Cloud",
		body: "Cloud migration, serverless management, and cost optimization."
	},
	{
		kicker: "AI COE & AUTOMATION",
		title: "Custom LLM Rigs",
		body: "Gen-AI pipelines, RPA process automation, and MLSecOps workflows."
	},
	{
		kicker: "NEXT-GEN HARDWARE",
		title: "AI-Ready Compute",
		body: "Enterprise GPU systems, servers, storage, and datacenter hardware."
	}
];
var capabilities = [
	{
		id: "soc",
		tab: "🛡️ Cyber Security SOC",
		title: "24/7 Security Operations Center (SOC)",
		meta: "ZERO-TRUST AUDITING • PENETRATION AUDITS • VAPT",
		body: "Our continuous telemetry surveillance engine monitors global IP networks, detecting and neutralizing zero-day intrusions before they compromise critical database clusters.",
		features: [{
			title: "Continuous Threat Deflection",
			body: "Real-time deep packet inspection with automated AI firewall countermeasures."
		}, {
			title: "Vulnerability & Penetration Testing",
			body: "Rigorous ethical hacking simulations against web applications, APIs, and cloud networks."
		}]
	},
	{
		id: "ai",
		tab: "⚡ AI Compute & Rigs",
		title: "AI Compute Clusters & Custom Rigs",
		meta: "GPU BENCHMARKING • MLSECOPS • GEN-AI PIPELINES",
		body: "We architect and benchmark enterprise GPU systems for deep learning inference and training, from single workstations to full HGX cluster deployments.",
		features: [{
			title: "Gen-AI & AI/ML Pipelines",
			body: "Custom LLM development through our AI Center of Excellence, tuned to your data estate."
		}, {
			title: "Hardware Rig Procurement",
			body: "Enterprise servers, workstations, HCI, and high-performance storage with lifecycle management."
		}]
	},
	{
		id: "cloud",
		tab: "☁️ Microsoft Cloud Suite",
		title: "Microsoft Cloud & Identity Governance",
		meta: "ENTRA ID • M365 MIGRATION • POWER AUTOMATE",
		body: "As a direct Microsoft Tier-1 Solutions Partner we design Entra ID security policies, M365 migrations, and automated Power RPA workflows across the enterprise.",
		features: [{
			title: "Identity & Access Governance",
			body: "IAM / IGA / PAM design with Just-In-Time and Just-Enough-Access enforcement."
		}, {
			title: "Cloud GRC & Cost Control",
			body: "Compliance guardrails, multi-cloud governance, and continuous cost optimization."
		}]
	},
	{
		id: "vault",
		tab: "🔐 Data Vault & Storage",
		title: "Data Vault, Backup & Resiliency",
		meta: "IMMUTABLE BACKUPS • DR-AS-A-SERVICE • ENCRYPTION",
		body: "High-assurance data protection with immutable snapshots, air-gapped ransomware shields, and disaster recovery orchestration for cloud and on-prem estates.",
		features: [{
			title: "Zero-Data-Loss Recovery",
			body: "Sub-second delta recovery with automated integrity verification across sites."
		}, {
			title: "High-Performance Storage",
			body: "Secure data clusters, backup appliances, and datacenter-grade storage fabrics."
		}]
	}
];
var benefits = [
	{
		title: "Favourable terms",
		body: "Each project we work on is tailored to the particular client's exact needs, not the other way around."
	},
	{
		title: "Quality for value",
		body: "Our motto is to provide only the highest quality to our clients, no matter the circumstances."
	},
	{
		title: "Global experience",
		body: "We have worked with multinational companies, as well as smaller businesses from all continents."
	},
	{
		title: "High standards",
		body: "We take data seriously, meaning that we only deliver work that we can be proud of."
	}
];
var zeroTrustPrinciples = [
	{
		n: "1",
		title: "Explicit Verification",
		body: "Always authenticate and authorize based on all available data points."
	},
	{
		n: "2",
		title: "Least Privilege Access",
		body: "Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA) policies."
	},
	{
		n: "3",
		title: "Assume Breach Mindset",
		body: "Minimize blast radius and segment access. Verify end-to-end encryption."
	}
];
var aboutHighlights = [
	"ISO 27001 & SOC2 Type II Certified Infrastructure",
	"Dedicated Hardware Rig Procurement & Benchmarking",
	"Direct Microsoft Tier-1 Solutions Partner"
];
var serviceGroups = [
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
			"Network Security"
		]
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
			"Security Automation"
		]
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
			"Web & Mobile App Development"
		]
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
			"Cloud Resiliency / DR as a Service"
		]
	},
	{
		title: "AI CoE Custom LLM Development",
		body: "Leverage the power of AI with our Center of Excellence (CoE) for custom LLM (Large Language Model) development. We create tailored AI solutions that enhance automation, decision-making, and customer experiences, helping businesses innovate and stay ahead in a rapidly evolving digital landscape.",
		items: ["Gen-AI Pipeline", "AI/ML Pipeline"]
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
			"CRM - Salesforce"
		]
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
			"Warranty & Asset Management Optimization"
		]
	}
];
var team = [
	{
		name: "Ratnesh Pandey",
		role: "CEO | Co-Founder | vCISO | Director",
		image: "/team/ratnesh.jpg"
	},
	{
		name: "Deepa",
		role: "Director | Co-Founder | CHRO",
		image: "/team/deepa.jpg"
	},
	{
		name: "Utkarsh",
		role: "Sr. Cyber Security SME | Partner Success Mgr",
		image: "/team/about_team_2_image.png"
	},
	{
		name: "Abhay",
		role: "AI Developer",
		image: "/team/about_team_3_image.jpg"
	},
	{
		name: "Manan",
		role: "Full-stack Developer",
		image: "/team/manan.jpeg"
	},
	{
		name: "Mrunal",
		role: "Cybersecurity Analyst",
		image: "/team/about_team_6_image.jpg"
	}
];
var achievements = [
	{
		kicker: "GOVERNMENT ACCREDITATION",
		title: "MSME Certified Enterprise",
		subtitle: "सूक्ष्म, लघु एवं मध्यम उद्यम",
		body: "Officially certified enterprise under the Ministry of Micro, Small and Medium Enterprises, Government of India.",
		logo: "",
		emoji: "🇮🇳"
	},
	{
		kicker: "DPIIT RECOGNITION",
		title: "#startupindia",
		subtitle: "#startupindia Recognized Venture",
		body: "Recognized technology startup by the Government of India under the flagship Startup India initiative.",
		logo: "",
		emoji: ""
	},
	{
		kicker: "CII MEMBERSHIP",
		title: "Confederation of Indian Industry (CII) Membership",
		subtitle: "Industry Association & Business Networking",
		body: "Membership with CII, India's premier industry association, fostering business growth, collaboration, innovation, and industry engagement.",
		logo: "",
		emoji: ""
	}
];
var clienteles = [
	{
		name: "IndiaCapital",
		sector: "FinTech",
		tag: "FINANCIAL SERVICES",
		body: "Enterprise financial technology and capital management solutions.",
		logo: ""
	},
	{
		name: "Fin Chikitsak",
		sector: "FinTech",
		tag: "FINANCIAL WELLNESS",
		body: "Comprehensive financial wellness and advisory platform.",
		logo: ""
	},
	{
		name: "gleeds",
		sector: "Construction Consultancy",
		tag: "GLOBAL INFRASTRUCTURE",
		body: "International property and construction management consultancy.",
		logo: ""
	},
	{
		name: "StatusNeo",
		sector: "MNC IT",
		tag: "ENTERPRISE IT CONSULTING",
		body: "Global digital transformation and enterprise IT consultancy.",
		logo: ""
	},
	{
		name: "SIT PUNE",
		sector: "Academic Institution",
		tag: "EDUCATION & RESEARCH",
		body: "Premier engineering and technological research institute.",
		logo: ""
	}
];
var complianceStandards = [
	"ISO 27001:2022",
	"SOC 2 TYPE II",
	"NIST CSF 2.0",
	"CMMI LEVEL 5",
	"HIPAA COMPLIANT",
	"PCI-DSS v4.0"
];
var jobs = [
	{
		dept: "SECURITY",
		location: "Remote",
		level: "Mid-level",
		title: "Cyber Security Auditor",
		body: "Lead VAPT penetration tests and threat vector assessments across client cloud environments."
	},
	{
		dept: "HARDWARE",
		location: "Remote",
		level: "Mid-level",
		title: "AI Compute Pipeline Lead",
		body: "Architect Nvidia HGX H100 cluster deployments and benchmark deep learning model inference speed."
	},
	{
		dept: "MICROSOFT",
		location: "Remote",
		level: "Mid-level",
		title: "MS Solutions Architect",
		body: "Design Microsoft Entra ID security policies, M365 migrations, and automated Power RPA workflows."
	}
];
var hiringSteps = [
	{
		step: "STEP_01 // APPLICATION",
		body: "Submit your resume and engineering portfolio for review."
	},
	{
		step: "STEP_02 // TECH EVALUATION",
		body: "Deep dive technical interview with senior engineering leads."
	},
	{
		step: "STEP_03 // LEADERSHIP MATCH",
		body: "Culture alignment and leadership discussion."
	},
	{
		step: "STEP_04 // ONBOARDING",
		body: "Welcome to KloudEra Technologies engineering core."
	}
];
var products = [
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
			"Zero-Trust Access"
		],
		link: "https://remotedesk-psi.vercel.app/",
		linkText: "Launch Remote Desk →"
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
			"Instant Calendar Integration"
		]
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
			"Automated Integrity Verification"
		]
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
			"Remote Kill-Switch & Lock"
		]
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: cn("mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5", scrolled ? "glass-strong" : "glass"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/",
				className: "group flex items-center gap-2.5",
				onClick: () => setOpen(false),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/favicon.png",
					alt: "KloudEra Technologies Logo",
					className: "size-9 rounded-full object-contain transition-transform duration-500 group-hover:rotate-12"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-sm font-semibold tracking-[0.18em] uppercase",
					children: [
						"Kloud",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Era"
						}),
						" Technologies"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "hidden rounded-full bg-primary px-4 py-2 text-[13px] font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] sm:inline-flex",
					children: "Book a Consultation"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					"aria-label": "Toggle navigation",
					onClick: () => setOpen((v) => !v),
					className: "grid size-9 place-items-center rounded-full border border-border/60 text-foreground",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
				})]
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass-strong mx-auto mt-2 max-w-7xl rounded-3xl p-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "grid grid-cols-2 gap-1",
				children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "block rounded-2xl px-4 py-3 text-sm text-muted-foreground hover:bg-white/8 hover:text-foreground",
					activeProps: { className: "bg-white/10 text-foreground" },
					activeOptions: { exact: l.to === "/" },
					children: l.label
				}) }, l.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mx-auto w-full max-w-7xl px-5 pb-10 sm:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "glass rounded-[2rem] p-8 sm:p-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[2] grid gap-10 lg:grid-cols-[1.2fr_1fr_1.2fr]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-lg font-semibold tracking-[0.18em] uppercase",
							children: ["Kloud", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-primary",
								children: "Era"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-sm text-muted-foreground",
							children: company.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 space-y-2 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 text-primary" }),
									" ",
									company.email
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 text-primary" }),
									" ",
									company.phones.join(", ")
								]
							})]
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.28em] text-primary/90 uppercase",
						children: "Navigate"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-muted-foreground transition-colors hover:text-foreground",
							children: l.label
						}) }, l.to))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-xs tracking-[0.28em] text-primary/90 uppercase",
						children: "Offices"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 space-y-5",
						children: offices.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-medium",
									children: [
										o.city,
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-1 rounded-full border border-border px-2 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground",
											children: o.kind
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1.5 flex gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), o.address]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-muted-foreground",
									children: o.hours
								})
							]
						}, o.city))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-[2] mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono tracking-[0.2em] uppercase",
					children: "Zero-Trust by design"
				})]
			})]
		})
	});
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var MAX_COLORS = 8;
var hexToRGB = (hex) => {
	const c = hex.replace("#", "").padEnd(6, "0");
	return [
		parseInt(c.slice(0, 2), 16) / 255,
		parseInt(c.slice(2, 4), 16) / 255,
		parseInt(c.slice(4, 6), 16) / 255
	];
};
var prepColors = (input) => {
	const base = (input && input.length ? input : [
		"#4F46E5",
		"#06B6D4",
		"#E0F2FE"
	]).slice(0, MAX_COLORS);
	const count = base.length;
	const arr = [];
	for (let i = 0; i < MAX_COLORS; i++) arr.push(hexToRGB(base[Math.min(i, base.length - 1)]));
	const avg = [
		0,
		0,
		0
	];
	for (let i = 0; i < count; i++) {
		avg[0] += arr[i][0];
		avg[1] += arr[i][1];
		avg[2] += arr[i][2];
	}
	avg[0] /= count;
	avg[1] /= count;
	avg[2] /= count;
	return {
		arr,
		count,
		avg
	};
};
var flowVec = (d) => {
	switch (d) {
		case "up": return [0, 1];
		case "down": return [0, -1];
		case "left": return [-1, 0];
		case "right": return [1, 0];
		default: return [0, -1];
	}
};
var vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
var fragment = `
precision highp float;

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform vec3  uColor0;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform vec3  uColor7;
uniform int   uColorCount;

uniform vec3  uMouseColor;
uniform vec2  uFlow;
uniform float uSpeed;
uniform float uScale;
uniform float uTurbulence;
uniform float uFluidity;
uniform float uRimWidth;
uniform float uSharpness;
uniform float uShimmer;
uniform float uGlow;
uniform float uOpacity;
uniform float uMouseEnabled;
uniform float uMouseStrength;
uniform float uMouseRadius;

varying vec2 vUv;

#define PI 3.14159265

vec3 palette(float h) {
  int count = uColorCount;
  if (count < 1) count = 1;
  int idx = int(floor(clamp(h, 0.0, 0.999999) * float(count)));
  if (idx <= 0) return uColor0;
  if (idx == 1) return uColor1;
  if (idx == 2) return uColor2;
  if (idx == 3) return uColor3;
  if (idx == 4) return uColor4;
  if (idx == 5) return uColor5;
  if (idx == 6) return uColor6;
  return uColor7;
}

float hash(vec3 p3) {
  p3 = fract(p3 * 0.1031);
  p3 += dot(p3, p3.zyx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

float smin(float a, float b, float k) {
  float r = exp2(-a / k) + exp2(-b / k);
  return -k * log2(r);
}

float sinlerp(float a, float b, float w) {
  return mix(a, b, (sin(w * PI - PI / 2.0) + 1.0) / 2.0);
}

float vn(vec2 p, float s, float seed) {
  vec2 cellp = floor(p / s);
  vec2 relp = mod(p, s);
  float g1 = hash(vec3(cellp, seed));
  float g2 = hash(vec3(cellp.x + 1.0, cellp.y, seed));
  float g3 = hash(vec3(cellp.x + 1.0, cellp.y + 1.0, seed));
  float g4 = hash(vec3(cellp.x, cellp.y + 1.0, seed));
  float bx = sinlerp(g1, g2, relp.x / s);
  float tx = sinlerp(g4, g3, relp.x / s);
  return sinlerp(bx, tx, relp.y / s);
}

float dbn(vec2 p, float s, float seed) {
  float o = s / 2.0;
  float n0 = vn(p, s, seed);
  float n1 = vn(p + vec2(o, o), s, seed + 0.1);
  float n2 = vn(p + vec2(-o, o), s, seed + 0.2);
  float n3 = vn(p + vec2(o, -o), s, seed + 0.3);
  float n4 = vn(p + vec2(-o, -o), s, seed + 0.4);
  return (2.0 * n0 + 1.5 * n1 + 1.25 * n2 + 1.125 * n3 + n4) / 7.0;
}

void mainImage(out vec4 fragColor, in vec2 fragCoord) {
  float ref = 700.0 / max(uScale, 0.05);
  vec2 p = fragCoord / iResolution.y * ref;

  float spd = 200.0 * uSpeed;
  float t = iTime;

  vec2 dir = uFlow;
  vec2 perp = vec2(-dir.y, dir.x);

  float distort1 = vn(p + perp * (t * spd), 60.0, 10.0) * 50.0 * uTurbulence;
  float distort2 = vn(p - perp * (t * spd), 120.0, 15.0) * 100.0 * uTurbulence;

  float peaks = dbn(p + distort1 + dir * (t * spd * 0.5), 40.0, 1.0);
  float peaks2 = dbn(p + distort2 - dir * (t * spd * 0.5), 40.0, 0.0);

  float mapeaks = smin(peaks, peaks2, max(uFluidity, 0.001));

  float mGlow = 0.0;
  if (uMouseEnabled > 0.5) {
    vec2 mp = iMouse / iResolution.y * ref;
    float md = length(p - mp) / ref;
    float rr = max(uMouseRadius, 0.02);
    mGlow = exp(-md * md / (rr * rr)) * uMouseStrength;
  }

  float band = (uRimWidth - abs((mapeaks - 0.4) * 2.0)) * 5.0;
  float ltn = clamp(band - vn(p + dir * (t * spd * 0.5), 60.0, 12.0) * uShimmer, 0.0, 1.0);
  ltn = pow(ltn, uSharpness) * uGlow;
  ltn *= clamp(1.0 - mGlow, 0.0, 1.0);

  float h = clamp(0.5 + (peaks - peaks2) * 0.8, 0.0, 1.0);
  vec3 col = palette(h);

  vec3 outc = col * ltn;
  float a = clamp(max(outc.r, max(outc.g, outc.b)), 0.0, 1.0);
  fragColor = vec4(outc, a * uOpacity);
}

void main() {
  vec4 color;
  mainImage(color, vUv * iResolution.xy);
  gl_FragColor = color;
}
`;
var Ferrofluid = ({ className, dpr, paused = false, colors = [
	"#ffffff",
	"#ffffff",
	"#ffffff"
], speed = .5, scale = 1.6, turbulence = 1, fluidity = .1, rimWidth = .2, sharpness = 2.5, shimmer = 1.5, glow = 2, flowDirection = "down", opacity = 1, mouseInteraction = true, mouseStrength = 1, mouseRadius = .35, mouseDampening = .15, mixBlendMode }) => {
	const containerRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(null);
	const programRef = (0, import_react.useRef)(null);
	const meshRef = (0, import_react.useRef)(null);
	const geometryRef = (0, import_react.useRef)(null);
	const rendererRef = (0, import_react.useRef)(null);
	const mouseTargetRef = (0, import_react.useRef)([0, 0]);
	const lastTimeRef = (0, import_react.useRef)(0);
	(0, import_react.useEffect)(() => {
		const container = containerRef.current;
		if (!container) return;
		const renderer = new Renderer({
			dpr: dpr ?? (typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1),
			alpha: true,
			antialias: true
		});
		rendererRef.current = renderer;
		const gl = renderer.gl;
		const canvas = gl.canvas;
		gl.clearColor(0, 0, 0, 0);
		canvas.style.width = "100%";
		canvas.style.height = "100%";
		canvas.style.display = "block";
		container.appendChild(canvas);
		const { arr, count, avg } = prepColors(colors);
		const uniforms = {
			iResolution: { value: [
				gl.drawingBufferWidth,
				gl.drawingBufferHeight,
				1
			] },
			iMouse: { value: [0, 0] },
			iTime: { value: 0 },
			uColor0: { value: arr[0] },
			uColor1: { value: arr[1] },
			uColor2: { value: arr[2] },
			uColor3: { value: arr[3] },
			uColor4: { value: arr[4] },
			uColor5: { value: arr[5] },
			uColor6: { value: arr[6] },
			uColor7: { value: arr[7] },
			uColorCount: { value: count },
			uMouseColor: { value: avg },
			uFlow: { value: flowVec(flowDirection) },
			uSpeed: { value: speed },
			uScale: { value: scale },
			uTurbulence: { value: turbulence },
			uFluidity: { value: fluidity },
			uRimWidth: { value: rimWidth },
			uSharpness: { value: sharpness },
			uShimmer: { value: shimmer },
			uGlow: { value: glow },
			uOpacity: { value: opacity },
			uMouseEnabled: { value: mouseInteraction ? 1 : 0 },
			uMouseStrength: { value: mouseStrength },
			uMouseRadius: { value: mouseRadius }
		};
		const program = new Program(gl, {
			vertex,
			fragment,
			uniforms
		});
		programRef.current = program;
		const geometry = new Triangle(gl);
		geometryRef.current = geometry;
		const mesh = new Mesh(gl, {
			geometry,
			program
		});
		meshRef.current = mesh;
		const resize = () => {
			const rect = container.getBoundingClientRect();
			renderer.setSize(rect.width, rect.height);
			uniforms.iResolution.value = [
				gl.drawingBufferWidth,
				gl.drawingBufferHeight,
				1
			];
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(container);
		const onPointerMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			const sc = renderer.dpr || 1;
			const x = (e.clientX - rect.left) * sc;
			const y = (rect.height - (e.clientY - rect.top)) * sc;
			mouseTargetRef.current = [x, y];
			if (mouseDampening <= 0) uniforms.iMouse.value = [x, y];
		};
		if (mouseInteraction) canvas.addEventListener("pointermove", onPointerMove);
		const loop = (t) => {
			rafRef.current = requestAnimationFrame(loop);
			uniforms.iTime.value = t * .001;
			if (mouseDampening > 0) {
				if (!lastTimeRef.current) lastTimeRef.current = t;
				const dt = (t - lastTimeRef.current) / 1e3;
				lastTimeRef.current = t;
				const tau = Math.max(1e-4, mouseDampening);
				let factor = 1 - Math.exp(-dt / tau);
				if (factor > 1) factor = 1;
				const target = mouseTargetRef.current;
				const cur = uniforms.iMouse.value;
				cur[0] += (target[0] - cur[0]) * factor;
				cur[1] += (target[1] - cur[1]) * factor;
			} else lastTimeRef.current = t;
			if (!paused && programRef.current && meshRef.current) try {
				renderer.render({ scene: meshRef.current });
			} catch (e) {
				console.error(e);
			}
		};
		rafRef.current = requestAnimationFrame(loop);
		return () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			if (mouseInteraction) canvas.removeEventListener("pointermove", onPointerMove);
			ro.disconnect();
			if (canvas.parentElement === container) container.removeChild(canvas);
			const callIfFn = (obj, key) => {
				const fn = obj && obj[key];
				if (typeof fn === "function") fn.call(obj);
			};
			callIfFn(programRef.current, "remove");
			callIfFn(geometryRef.current, "remove");
			callIfFn(meshRef.current, "remove");
			callIfFn(rendererRef.current, "destroy");
			programRef.current = null;
			geometryRef.current = null;
			meshRef.current = null;
			rendererRef.current = null;
		};
	}, [
		dpr,
		paused,
		colors,
		speed,
		scale,
		turbulence,
		fluidity,
		rimWidth,
		sharpness,
		shimmer,
		glow,
		flowDirection,
		opacity,
		mouseInteraction,
		mouseStrength,
		mouseRadius,
		mouseDampening
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: `ferrofluid-container ${className ?? ""}`,
		style: { ...mixBlendMode && { mixBlendMode } }
	});
};
var PRESETS = {
	top: {
		position: "top",
		height: "6rem"
	},
	bottom: {
		position: "bottom",
		height: "6rem"
	},
	left: {
		position: "left",
		height: "6rem"
	},
	right: {
		position: "right",
		height: "6rem"
	},
	smooth: {
		height: "8rem",
		curve: "bezier",
		divCount: 10
	}
};
var CURVE_FUNCTIONS = {
	linear: (progress) => progress,
	bezier: (progress) => progress * progress * (3 - 2 * progress),
	"ease-in": (progress) => progress * progress,
	"ease-out": (progress) => 1 - (1 - progress) ** 2,
	"ease-in-out": (progress) => progress < .5 ? 2 * progress * progress : 1 - (-2 * progress + 2) ** 2 / 2
};
var getGradientDirection = (position) => ({
	top: "to top",
	bottom: "to bottom",
	left: "to left",
	right: "to right"
})[position];
function GradualBlur({ position = "bottom", strength = 2, height = "6rem", width, divCount = 5, exponential = false, curve = "linear", opacity = 1, animated = false, duration = "0.3s", easing = "ease-out", hoverIntensity, target = "parent", preset, zIndex = 1e3, className = "", style, onAnimationComplete }) {
	const containerRef = (0, import_react.useRef)(null);
	const [isHovered, setIsHovered] = (0, import_react.useState)(false);
	const [isVisible, setIsVisible] = (0, import_react.useState)(animated !== "scroll");
	const config = (0, import_react.useMemo)(() => ({
		...PRESETS[preset ?? "bottom"],
		position,
		strength,
		height,
		width,
		divCount: Math.max(1, Math.floor(divCount)),
		exponential,
		curve,
		opacity,
		animated,
		duration,
		easing,
		hoverIntensity,
		target,
		zIndex,
		className,
		style
	}), [
		animated,
		className,
		curve,
		divCount,
		duration,
		easing,
		exponential,
		height,
		hoverIntensity,
		opacity,
		position,
		preset,
		strength,
		style,
		target,
		width,
		zIndex
	]);
	(0, import_react.useEffect)(() => {
		if (animated !== "scroll" || !containerRef.current) return;
		const observer = new IntersectionObserver(([entry]) => setIsVisible(entry?.isIntersecting ?? false), { threshold: .1 });
		observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, [animated]);
	(0, import_react.useEffect)(() => {
		if (!isVisible || animated !== "scroll" || !onAnimationComplete) return;
		const timeout = window.setTimeout(() => onAnimationComplete(), parseFloat(duration) * 1e3);
		return () => window.clearTimeout(timeout);
	}, [
		animated,
		duration,
		isVisible,
		onAnimationComplete
	]);
	const blurDivs = (0, import_react.useMemo)(() => {
		const currentStrength = isHovered && hoverIntensity ? strength * hoverIntensity : strength;
		const curveFunction = CURVE_FUNCTIONS[curve];
		const increment = 100 / config.divCount;
		return Array.from({ length: config.divCount }, (_, index) => {
			const progress = curveFunction((index + 1) / config.divCount);
			const blurValue = exponential ? 2 ** (progress * 4) * .0625 * currentStrength : .0625 * (progress * config.divCount + 1) * currentStrength;
			const p1 = Math.round(increment * index * 10) / 10;
			const p2 = Math.round(increment * (index + 1) * 10) / 10;
			const p3 = Math.round(increment * (index + 2) * 10) / 10;
			const p4 = Math.round(increment * (index + 3) * 10) / 10;
			let gradient = `transparent ${p1}%, black ${p2}%`;
			if (p3 <= 100) gradient += `, black ${p3}%`;
			if (p4 <= 100) gradient += `, transparent ${p4}%`;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
				position: "absolute",
				inset: 0,
				maskImage: `linear-gradient(${getGradientDirection(position)}, ${gradient})`,
				WebkitMaskImage: `linear-gradient(${getGradientDirection(position)}, ${gradient})`,
				backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
				WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
				opacity,
				transition: animated && animated !== "scroll" ? `backdrop-filter ${duration} ${easing}` : void 0
			} }, index);
		});
	}, [
		animated,
		config.divCount,
		curve,
		duration,
		easing,
		exponential,
		hoverIntensity,
		isHovered,
		opacity,
		position,
		strength
	]);
	const isVertical = position === "top" || position === "bottom";
	const containerStyle = {
		position: target === "page" ? "fixed" : "absolute",
		pointerEvents: hoverIntensity ? "auto" : "none",
		opacity: isVisible ? 1 : 0,
		transition: animated ? `opacity ${duration} ${easing}` : void 0,
		zIndex: target === "page" ? zIndex + 100 : zIndex,
		height: isVertical ? height : "100%",
		width: isVertical ? width || "100%" : width || height,
		[position]: 0,
		...isVertical ? {
			left: 0,
			right: 0
		} : {
			top: 0,
			bottom: 0
		},
		...style
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: `gradual-blur ${target === "page" ? "gradual-blur-page" : "gradual-blur-parent"} ${className}`,
		style: containerStyle,
		onMouseEnter: hoverIntensity ? () => setIsHovered(true) : void 0,
		onMouseLeave: hoverIntensity ? () => setIsHovered(false) : void 0,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gradual-blur-inner",
			children: blurDivs
		})
	});
}
var GradualBlur_default = import_react.memo(GradualBlur);
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$10 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "KloudEra Technologies — Zero-Trust Cybersecurity & Cloud" },
			{
				name: "description",
				content: "Enterprise cybersecurity consulting, 24/7 SOC, AI compute rigs, and Microsoft Cloud governance by KloudEra Technologies."
			},
			{
				name: "author",
				content: "KloudEra Technologies"
			},
			{
				property: "og:title",
				content: "KloudEra Technologies"
			},
			{
				property: "og:description",
				content: "Architecting zero-trust digital enterprises: SOC, VAPT, cloud, AI CoE and next-gen hardware."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$10.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-screen overflow-x-clip",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none fixed inset-0 -z-20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ferrofluid, {
						colors: [
							"#ffffff",
							"#cccccc",
							"#888888"
						],
						speed: .15,
						scale: 1.2,
						turbulence: .5,
						fluidity: .2,
						rimWidth: .2,
						sharpness: 2,
						shimmer: .5,
						glow: 1,
						flowDirection: "down",
						opacity: .25,
						mouseInteraction: true,
						mouseStrength: .5,
						mouseRadius: .3
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none fixed inset-0 -z-10 grid-lines opacity-60" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GradualBlur_default, {
					target: "page",
					position: "bottom",
					height: "7rem",
					strength: 2,
					divCount: 8,
					curve: "bezier",
					opacity: .9
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
			]
		})
	});
}
var $$splitComponentImporter$9 = () => import("./routes-BPgXHiK7.mjs");
var Route$9 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "KloudEra Technologies — Zero-Trust Cybersecurity & Cloud" },
		{
			name: "description",
			content: "Enterprise cybersecurity consulting: 24/7 SOC, VAPT, multi-cloud governance, AI CoE and next-gen GPU hardware for Fortune 500 infrastructure."
		},
		{
			property: "og:title",
			content: "KloudEra Technologies — Zero-Trust Enterprises"
		},
		{
			property: "og:description",
			content: "24/7 Security Operations, AI compute rigs, and Microsoft Cloud governance for high-stakes enterprises."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./about-C8ZMGT3g.mjs");
var Route$8 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About — Built for High-Stakes Enterprise Resilience | KloudEra" },
		{
			name: "description",
			content: "KloudEra Technologies' mission, zero-trust principles, and the executive leadership team behind our cybersecurity and cloud practice."
		},
		{
			property: "og:title",
			content: "About KloudEra Technologies"
		},
		{
			property: "og:description",
			content: "Our mission, values and executive leadership team."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./achievements-CT9CAV21.mjs");
var Route$7 = createFileRoute("/achievements")({
	head: () => ({ meta: [
		{ title: "Achievements — Government Accreditations | KloudEra" },
		{
			name: "description",
			content: "KloudEra Technologies is MSME certified, DPIIT #startupindia recognized and a member of the Confederation of Indian Industry (CII)."
		},
		{
			property: "og:title",
			content: "KloudEra Achievements & Accreditations"
		},
		{
			property: "og:description",
			content: "MSME certification, Startup India recognition and CII membership."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./careers-Dfu9m-KL.mjs");
var Route$6 = createFileRoute("/careers")({
	head: () => ({ meta: [
		{ title: "Careers — Join the KloudEra Engineering Core" },
		{
			name: "description",
			content: "Open roles in cyber security auditing, AI compute pipelines and Microsoft solutions architecture at KloudEra Technologies."
		},
		{
			property: "og:title",
			content: "Careers at KloudEra Technologies"
		},
		{
			property: "og:description",
			content: "Bright future awaits you — cutting-edge cyber security, cloud and AI work."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./certifications-Cz43Kral.mjs");
var Route$5 = createFileRoute("/certifications")({
	head: () => ({ meta: [
		{ title: "Certifications — Compliance Standards | KloudEra" },
		{
			name: "description",
			content: "ISO 27001:2022, SOC 2 Type II, NIST CSF 2.0, CMMI Level 5, HIPAA and PCI-DSS v4.0 aligned practices plus team certification badges."
		},
		{
			property: "og:title",
			content: "KloudEra Certifications & Compliance"
		},
		{
			property: "og:description",
			content: "Center of Excellence compliance standards and engineer certifications."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./clienteles-veoLfBGJ.mjs");
var Route$4 = createFileRoute("/clienteles")({
	head: () => ({ meta: [
		{ title: "Clienteles — Trusted Enterprise Partnerships | KloudEra" },
		{
			name: "description",
			content: "KloudEra serves leading financial, IT, construction and educational organizations including IndiaCapital, gleeds, StatusNeo and SIT Pune."
		},
		{
			property: "og:title",
			content: "KloudEra Clienteles"
		},
		{
			property: "og:description",
			content: "Trusted engineering and security partner for finance, IT, construction and education."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-CZPzSCXq.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Schedule a Systems Consultation | KloudEra" },
		{
			name: "description",
			content: "Reach the KloudEra solutions engineering team in Pune and Bengaluru to evaluate your security posture or configure enterprise hardware rigs."
		},
		{
			property: "og:title",
			content: "Contact KloudEra Technologies"
		},
		{
			property: "og:description",
			content: "Pune HQ and Bengaluru branch — info@kloudera.ai"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./partners-DPgr_rVn.mjs");
var Route$2 = createFileRoute("/partners")({
	head: () => ({ meta: [
		{ title: "Partners — Enterprise Alliances & Security Nodes | KloudEra" },
		{
			name: "description",
			content: "KloudEra integrates with 100+ cybersecurity networks, cloud providers and hardware suppliers including Microsoft, AWS, Google Cloud, Fortinet and Nvidia."
		},
		{
			property: "og:title",
			content: "KloudEra Partner Network"
		},
		{
			property: "og:description",
			content: "Strategic technology partners across cloud, security and hardware."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./products-C6J8YZ_C.mjs");
var Route$1 = createFileRoute("/products")({
	head: () => ({ meta: [
		{ title: "Products — Kloudera Enterprise Software Suite" },
		{
			name: "description",
			content: "Kloudera Meet Scheduler, Klodera Data Recovery Tool and Kloudera Remote Device Controller — proprietary enterprise software under active development."
		},
		{
			property: "og:title",
			content: "Kloudera Enterprise Software Suite"
		},
		{
			property: "og:description",
			content: "Workspace scheduling, disaster recovery and zero-trust remote device management products."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./services-CyaOkt_5.mjs");
var Route = createFileRoute("/services")({
	head: () => ({ meta: [
		{ title: "Services — Managed Security, Cloud & AI | KloudEra" },
		{
			name: "description",
			content: "Managed cybersecurity, automation, digital technology, managed cloud, AI CoE custom LLM development and next-generation hardware services."
		},
		{
			property: "og:title",
			content: "KloudEra Services — Solutions Command"
		},
		{
			property: "og:description",
			content: "vCISO, VAPT, MLSecOps, cloud migration, RPA and AI-ready enterprise hardware."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$9.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$10
	}),
	AboutRoute: Route$8.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$10
	}),
	AchievementsRoute: Route$7.update({
		id: "/achievements",
		path: "/achievements",
		getParentRoute: () => Route$10
	}),
	CareersRoute: Route$6.update({
		id: "/careers",
		path: "/careers",
		getParentRoute: () => Route$10
	}),
	CertificationsRoute: Route$5.update({
		id: "/certifications",
		path: "/certifications",
		getParentRoute: () => Route$10
	}),
	ClientelesRoute: Route$4.update({
		id: "/clienteles",
		path: "/clienteles",
		getParentRoute: () => Route$10
	}),
	ContactRoute: Route$3.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$10
	}),
	PartnersRoute: Route$2.update({
		id: "/partners",
		path: "/partners",
		getParentRoute: () => Route$10
	}),
	ProductsRoute: Route$1.update({
		id: "/products",
		path: "/products",
		getParentRoute: () => Route$10
	}),
	ServicesRoute: Route.update({
		id: "/services",
		path: "/services",
		getParentRoute: () => Route$10
	})
};
var routeTree = Route$10._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll$1({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { zeroTrustPrinciples as _, clienteles as a, complianceStandards as c, jobs as d, offices as f, team as g, serviceGroups as h, capabilities as i, heroPillars as l, router_C6d_usC__exports as m, achievements as n, cn as o, products as p, benefits as r, company as s, aboutHighlights as t, hiringSteps as u };

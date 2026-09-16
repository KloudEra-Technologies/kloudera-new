import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Reveal, r as Section, t as GlassCard } from "./GlassCard-CF20Tcmp.mjs";
import { t as PageHero } from "./PageHero-CXZVTKHl.mjs";
import { t as Logo } from "./Logo-CV3YvCOG.mjs";
import { t as partners } from "./partners-ESNqFkxT.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/partners-DPgr_rVn.js
var import_jsx_runtime = require_jsx_runtime();
var strategic = [
	{
		name: "Microsoft",
		desc: "Enterprise Identity & Cloud Core Alliance"
	},
	{
		name: "MongoDB",
		desc: "High-Performance Secure Data Clusters"
	},
	{
		name: "AWS (Amazon Web Services)",
		desc: "Global Cloud Resiliency & Infrastructure Security"
	},
	{
		name: "Fortinet",
		desc: "Next-Generation Hardware Boundary Firewalls"
	},
	{
		name: "Google Cloud",
		desc: "MLSecOps & Advanced Threat Intelligence Analytics"
	},
	{
		name: "Sprinto",
		desc: "Automated GRC & Compliance Frameworks"
	},
	{
		name: "Trend Micro",
		desc: "Endpoint Detection & Response (EDR) Systems"
	},
	{
		name: "Cross Cipher",
		desc: "Secure Cryptographic Communications Networks"
	}
];
function Partners() {
	const logoFor = (name) => partners.find((p) => p.name === name)?.logo;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Integrated Partner Network",
			title: "Enterprise Alliances & Security Nodes",
			description: "We integrate with top-tier cybersecurity networks, cloud providers, and hardware infrastructure suppliers to deliver threat-shielded operational stability."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: "Authenticated Strategic Alliance",
			title: "Strategic Technology Partners",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: strategic.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "h-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-16 place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
									src: logoFor(s.name),
									name: s.name,
									className: "max-h-12 max-w-[130px]"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 font-mono text-[10px] tracking-[0.22em] text-primary/90 uppercase",
								children: "System Partner"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1.5 text-base font-semibold",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: s.desc
							})
						]
					})
				}, s.name))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			kicker: `${partners.length} Integrations`,
			title: "Full Partner Directory",
			description: "The complete list of vendors, distributors and platforms in the KloudEra alliance grid.",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5",
				children: partners.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: Math.min(i, 20) * .015,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "glass glass-hover group grid h-28 place-items-center rounded-2xl p-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-[2] flex flex-col items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								src: p.logo,
								name: p.name,
								className: "max-h-9 max-w-[100px] opacity-85 transition-opacity group-hover:opacity-100"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-center text-[11px] text-muted-foreground",
								children: p.name
							})]
						})
					})
				}, p.name))
			})
		})
	] });
}
//#endregion
export { Partners as component };

import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as ShieldCheck } from "../_libs/lucide-react.mjs";
import { c as complianceStandards } from "./router-C6d_usC-.mjs";
import { n as Reveal, r as Section, t as GlassCard } from "./GlassCard-CF20Tcmp.mjs";
import { t as PageHero } from "./PageHero-CXZVTKHl.mjs";
import { t as certifications } from "./certifications-data-tajU08Wv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/certifications-Cz43Kral.js
var import_jsx_runtime = require_jsx_runtime();
function Certifications() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			kicker: "Compliance Standards",
			title: "KloudEra Technologies CoE — Center of Excellence",
			description: "Our security practice is aligned to the frameworks enterprise auditors expect, and our engineers hold vendor-verified certifications."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Framework Alignment",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: complianceStandards.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .05,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
						className: "flex h-full items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary/12 text-primary ring-1 ring-primary/30",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-sm tracking-[0.12em] uppercase",
							children: s
						})]
					})
				}, s))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			title: "Certification Badges",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: certifications.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * .04,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
						className: "h-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex h-full items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid size-12 shrink-0 place-items-center rounded-xl bg-primary/5 p-2 ring-1 ring-primary/20",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: c.image,
									alt: c.name,
									className: "max-h-full max-w-full object-contain"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-medium",
								children: c.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs text-muted-foreground leading-relaxed",
								children: c.description
							})] })]
						})
					})
				}, c.name))
			})
		})
	] });
}
//#endregion
export { Certifications as component };

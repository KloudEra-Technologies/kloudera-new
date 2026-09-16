import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as achievements } from "./router-C6d_usC-.mjs";
import { n as Reveal, r as Section, t as GlassCard } from "./GlassCard-CF20Tcmp.mjs";
import { t as PageHero } from "./PageHero-CXZVTKHl.mjs";
import { t as Logo } from "./Logo-CV3YvCOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/achievements-CT9CAV21.js
var import_jsx_runtime = require_jsx_runtime();
function Achievements() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Recognition Directory",
		title: "Our Achievements",
		description: "A complete view of KloudEra's certifications, recognitions and industry memberships represented in our company profile."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		kicker: `${achievements.length} Recognitions`,
		title: "Recognition & Accreditation Directory",
		description: "Every recognition is presented in the same clean directory style as the partner network.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
			children: achievements.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: Math.min(i, 12) * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "group h-full p-6 transition-transform duration-300 hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-strong grid h-28 place-items-center rounded-2xl p-5",
							children: a.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								src: a.logo,
								name: a.title,
								className: "max-h-16 max-w-[150px]"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl",
								"aria-hidden": "true",
								children: a.emoji || "✦"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 font-mono text-[10px] tracking-[0.24em] text-primary/90 uppercase",
							children: a.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-lg font-semibold leading-snug",
							children: a.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: a.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm leading-6 text-muted-foreground",
							children: a.body
						})
					]
				})
			}, a.title))
		})
	})] });
}
//#endregion
export { Achievements as component };

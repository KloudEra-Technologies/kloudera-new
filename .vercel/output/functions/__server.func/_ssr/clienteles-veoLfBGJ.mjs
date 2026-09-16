import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as clienteles } from "./router-C6d_usC-.mjs";
import { n as Reveal, r as Section, t as GlassCard } from "./GlassCard-CF20Tcmp.mjs";
import { t as PageHero } from "./PageHero-CXZVTKHl.mjs";
import { t as Logo } from "./Logo-CV3YvCOG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clienteles-veoLfBGJ.js
var import_jsx_runtime = require_jsx_runtime();
function Clienteles() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Client Directory",
		title: "Our Clienteles",
		description: "Explore the complete set of organizations represented in KloudEra's current client portfolio."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		kicker: `${clienteles.length} Organizations`,
		title: "Full Client Directory",
		description: "Every organization is shown together in a clean, responsive directory, just like the full partner network.",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4",
			children: clienteles.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: Math.min(i, 12) * .06,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "group h-full min-h-64 p-6 transition-transform duration-300 hover:-translate-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "glass-strong grid h-24 place-items-center rounded-2xl p-4",
							children: c.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {
								src: c.logo,
								name: c.name,
								className: "max-h-12 max-w-[145px]"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-center text-lg font-semibold tracking-tight",
								children: c.name
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-5 flex items-center justify-between gap-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border/70 px-2.5 py-1 font-mono text-[9px] tracking-[0.14em] text-muted-foreground uppercase",
								children: c.sector
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 font-mono text-[10px] tracking-[0.22em] text-accent uppercase",
							children: c.tag
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 text-lg font-semibold",
							children: c.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-6 text-muted-foreground",
							children: c.body
						})
					]
				})
			}, c.name))
		})
	})] });
}
//#endregion
export { Clienteles as component };

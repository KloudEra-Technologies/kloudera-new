import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { u as Check } from "../_libs/lucide-react.mjs";
import { p as products } from "./router-C6d_usC-.mjs";
import { n as Reveal, r as Section, t as GlassCard } from "./GlassCard-CF20Tcmp.mjs";
import { t as PageHero } from "./PageHero-CXZVTKHl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-C6J8YZ_C.js
var import_jsx_runtime = require_jsx_runtime();
function Products() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "🛠️ Work in progress — under active development",
		title: "Kloudera Enterprise Software Suite",
		description: "Proprietary workspace scheduling, disaster recovery, and remote device management products currently under active engineering development."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass rounded-2xl border-l-4 border-l-accent p-5",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "relative z-[2] text-sm text-muted-foreground",
			children: "⚡ Notice: Products in this suite are currently in private enterprise testing & hardware staging. Full commercial launch scheduled soon."
		})
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8 space-y-6",
		children: products.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i * .06,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				className: "p-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1.2fr_1fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] tracking-[0.24em] text-accent uppercase",
							children: p.kicker
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-2xl font-semibold",
								children: p.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-mono text-[10px] tracking-[0.18em] text-primary uppercase",
								children: p.status
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-medium text-foreground/80",
							children: p.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: p.body
						}),
						p.link ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: p.link,
							target: "_blank",
							rel: "noreferrer",
							className: "mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground",
							children: p.linkText || "View Product →"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "mt-7 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground",
							children: "Request Product Demo →"
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase",
						children: "Capability Highlights"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 grid gap-2",
						children: p.highlights.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "glass-strong flex items-center gap-2.5 rounded-xl px-4 py-3 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" }), h]
						}, h))
					})] })]
				})
			})
		}, p.name))
	})] })] });
}
//#endregion
export { Products as component };

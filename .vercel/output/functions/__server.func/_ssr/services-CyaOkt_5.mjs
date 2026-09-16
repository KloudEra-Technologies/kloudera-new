import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { l as ChevronRight } from "../_libs/lucide-react.mjs";
import { h as serviceGroups } from "./router-C6d_usC-.mjs";
import { n as Reveal, r as Section, t as GlassCard } from "./GlassCard-CF20Tcmp.mjs";
import { t as PageHero } from "./PageHero-CXZVTKHl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/services-CyaOkt_5.js
var import_jsx_runtime = require_jsx_runtime();
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Solutions Command",
		title: "Our Services",
		description: "End-to-end security, cloud, automation, AI and hardware services engineered for enterprise scale."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-6",
		children: serviceGroups.map((g, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: i * .04,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlassCard, {
				className: "p-8",
				hover: false,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 lg:grid-cols-[1fr_1.2fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-accent",
							children: ["// ", String(i + 1).padStart(2, "0")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-2xl font-semibold",
							children: g.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: g.body
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "grid gap-2 sm:grid-cols-2",
						children: g.items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "glass-strong flex items-center gap-2 rounded-xl px-3.5 py-2.5 text-sm transition-transform duration-300 hover:translate-x-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-3.5 shrink-0 text-primary" }), it]
						}, it))
					})]
				})
			})
		}, g.title))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
		className: "mt-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
			className: "p-10 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-2xl text-muted-foreground",
				children: "Interested in learning more about how our services can benefit your business? Contact us today to discuss your needs and find the perfect solution. Our team is ready to help you optimize, secure, and scale your IT infrastructure."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "sheen-on-hover mt-7 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground",
				children: "Schedule a Meeting"
			})]
		})
	})] })] });
}
//#endregion
export { Services as component };

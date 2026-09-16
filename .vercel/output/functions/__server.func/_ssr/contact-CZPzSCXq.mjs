import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { c as Clock, i as Phone, o as MapPin, s as Mail } from "../_libs/lucide-react.mjs";
import { f as offices, s as company } from "./router-C6d_usC-.mjs";
import { n as Reveal, r as Section, t as GlassCard } from "./GlassCard-CF20Tcmp.mjs";
import { t as PageHero } from "./PageHero-CXZVTKHl.mjs";
import { t as ContactForm } from "./ContactForm-C99FFU9N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CZPzSCXq.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		kicker: "Comms Gateway",
		title: "Let's get in touch",
		description: "Connect directly with our solutions engineering team to evaluate your infrastructure security posture or configure enterprise hardware rigs."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-6 lg:grid-cols-[1.1fr_1fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "glass rounded-3xl p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-[2]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})
			})
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: offices.map((o, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: .08 * (i + 1),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(GlassCard, {
					className: "h-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-lg font-semibold",
								children: o.city
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] tracking-[0.2em] text-muted-foreground",
								children: o.kind
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-4 flex gap-2.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 size-4 shrink-0 text-primary" }), o.address]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2.5 flex gap-2.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 shrink-0 text-primary" }), o.hours]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2.5 flex gap-2.5 text-sm text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0 text-primary" }), company.phones.join(", ")]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2.5 flex gap-2.5 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0 text-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${company.email}`,
								className: "text-muted-foreground hover:text-primary",
								children: company.email
							})]
						})
					]
				})
			}, o.city))
		})]
	}) })] });
}
//#endregion
export { Contact as component };

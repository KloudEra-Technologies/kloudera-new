import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { o as cn } from "./router-C6d_usC-.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/GlassCard-CF20Tcmp.js
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, delay = 0, y = 24, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		className,
		initial: {
			opacity: 0,
			y,
			filter: "blur(8px)"
		},
		whileInView: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .7,
			delay,
			ease: [
				.16,
				1,
				.3,
				1
			]
		},
		children
	});
}
function Section({ id, kicker, title, description, action, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id,
		className: cn("mx-auto w-full max-w-7xl px-5 py-20 sm:px-8", className),
		children: [(kicker || title || action) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
			className: "mb-12 flex flex-wrap items-end justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-2xl",
				children: [
					kicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 font-mono text-xs tracking-[0.28em] text-primary/90 uppercase",
						children: kicker
					}),
					title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-semibold tracking-tight text-balance sm:text-4xl",
						children: title
					}),
					description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-base text-muted-foreground",
						children: description
					})
				]
			}), action]
		}), children]
	});
}
function GlassCard({ children, className, hover = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("glass sheen-on-hover rounded-3xl p-6", hover && "glass-hover", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative z-[2]",
			children
		})
	});
}
//#endregion
export { Reveal as n, Section as r, GlassCard as t };

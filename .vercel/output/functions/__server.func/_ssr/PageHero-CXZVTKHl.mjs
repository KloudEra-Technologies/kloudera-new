import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Reveal } from "./GlassCard-CF20Tcmp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-CXZVTKHl.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ kicker, title, description }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative mx-auto w-full max-w-7xl px-5 pt-36 pb-6 sm:px-8 sm:pt-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-xs tracking-[0.32em] text-primary/90 uppercase",
				children: kicker
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-aurora mt-4 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl",
				children: title
			}),
			description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg",
				children: description
			})
		] })
	});
}
//#endregion
export { PageHero as t };

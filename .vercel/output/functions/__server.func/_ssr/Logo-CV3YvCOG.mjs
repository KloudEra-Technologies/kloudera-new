import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as cn } from "./router-C6d_usC-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Logo-CV3YvCOG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo({ src, name, className }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	if (!src || failed) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground/80",
		children: name
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src,
		alt: `${name} logo`,
		loading: "lazy",
		onError: () => setFailed(true),
		className: cn("w-auto object-contain", className)
	});
}
//#endregion
export { Logo as t };

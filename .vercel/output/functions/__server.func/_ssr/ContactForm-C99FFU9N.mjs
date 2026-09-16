import { a as __toESM } from "./rolldown-runtime-D7D4PA-g.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { F as isRedirect, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as createServerFn, r as getServerFnById, t as TSS_SERVER_FUNCTION } from "./server-BGWillLN.mjs";
import { n as string, t as object } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ContactForm-C99FFU9N.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerFn(serverFn) {
	const router = useRouter();
	return import_react.useCallback(async (...args) => {
		try {
			const res = await serverFn(...args);
			if (isRedirect(res)) throw res;
			return res;
		} catch (err) {
			if (isRedirect(err)) {
				err.options._fromLocation = router.stores.location.get();
				return router.navigate(router.resolveRedirect(err).options);
			}
			throw err;
		}
	}, [router, serverFn]);
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var enquirySchema = object({
	name: string().min(2).max(120),
	email: string().email().max(254),
	company: string().max(160).optional(),
	subject: string().max(180).optional(),
	message: string().min(10).max(5e3),
	website: string().max(200).optional()
});
var sendEnquiry = createServerFn({ method: "POST" }).validator(enquirySchema).handler(createSsrRpc("45c162b4731ce8757496d62913bb04bbb6ce40b9bd2fb5c96367897e5fe897be"));
var fields = [
	{
		name: "name",
		label: "Full Name",
		type: "text",
		required: true
	},
	{
		name: "email",
		label: "Work Email",
		type: "email",
		required: true
	},
	{
		name: "company",
		label: "Company / Organization",
		type: "text",
		required: false
	},
	{
		name: "subject",
		label: "Subject Line",
		type: "text",
		required: false
	}
];
function ContactForm() {
	const sendEnquiryFn = useServerFn(sendEnquiry);
	const [sending, setSending] = (0, import_react.useState)(false);
	const onSubmit = async (e) => {
		e.preventDefault();
		if (sending) return;
		setSending(true);
		try {
			const form = e.currentTarget;
			const formData = new FormData(form);
			await sendEnquiryFn({ data: {
				name: String(formData.get("name") ?? ""),
				email: String(formData.get("email") ?? ""),
				company: String(formData.get("company") ?? ""),
				subject: String(formData.get("subject") ?? ""),
				message: String(formData.get("message") ?? ""),
				website: String(formData.get("website") ?? "")
			} });
			form.reset();
			toast.success("Inquiry transmitted", { description: "Your message has been sent. Our solutions engineering team will reply to you shortly." });
		} catch (error) {
			console.error("Contact form submission failed:", error);
			toast.error("Unable to transmit inquiry", { description: "Something went wrong while sending your message. Please try again." });
		} finally {
			setSending(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit,
		className: "grid gap-4 sm:grid-cols-2",
		children: [
			fields.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: f.name === "subject" ? "sm:col-span-2" : "",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-2 block font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase",
					children: f.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					name: f.name,
					type: f.type,
					required: f.required,
					className: "w-full rounded-2xl border border-input bg-white/5 px-4 py-3 text-sm outline-none backdrop-blur-xl transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-ring/40",
					placeholder: f.label
				})]
			}, f.name)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "sm:col-span-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mb-2 block font-mono text-[11px] tracking-[0.22em] text-muted-foreground uppercase",
					children: "Message / Infrastructure Request"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
					name: "message",
					required: true,
					rows: 5,
					maxLength: 5e3,
					className: "w-full resize-none rounded-2xl border border-input bg-white/5 px-4 py-3 text-sm outline-none backdrop-blur-xl transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:ring-2 focus:ring-ring/40",
					placeholder: "Describe your infrastructure or security requirement"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "text",
				name: "website",
				tabIndex: -1,
				autoComplete: "off",
				"aria-hidden": "true",
				className: "absolute -left-[9999px] h-0 w-0 opacity-0"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: sending,
				className: "sheen-on-hover relative w-full rounded-2xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-[var(--shadow-glow)] disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-2",
				children: sending ? "Transmitting…" : "Transmit Inquiry"
			})
		]
	});
}
//#endregion
export { ContactForm as t };

import { o as __toESM } from "../_runtime.mjs";
import { n as V, r as require_react, t as J } from "../_libs/@formspree/react+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Header, o as Wash } from "./Wash-DhRivWxj.mjs";
import { t as Footer } from "./Footer-CNUk21xQ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as objectType, r as stringType, t as literalType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-D1frUTtR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var EMAIL = "Maggie@writtenbeyondbelief.com";
var FORMSPREE_ID = "mljrbqol";
var schema = objectType({
	name: stringType().trim().min(1, "Please share your name").max(100),
	email: stringType().trim().email("Please enter a valid email address").max(255),
	phone: stringType().trim().max(30).optional().or(literalType("")),
	message: stringType().trim().min(1, "Please write a short message").max(2e3)
});
function Contact() {
	const [state, handleSubmit] = J(FORMSPREE_ID);
	const [errors, setErrors] = (0, import_react.useState)({});
	async function onSubmit(e) {
		e.preventDefault();
		const data = Object.fromEntries(new FormData(e.currentTarget));
		const parsed = schema.safeParse(data);
		if (!parsed.success) {
			const next = {};
			for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
			setErrors(next);
			return;
		}
		setErrors({});
		await handleSubmit(e);
		toast.success("Your message has been sent", { description: "Maggie will reply to you as soon as she can." });
	}
	if (state.succeeded) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-wash min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wash, { tone: "yellow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "watermark-layer",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "page-enter mx-auto flex max-w-2xl flex-col items-center justify-center px-6 pt-24 text-center md:pt-36",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl text-primary md:text-6xl",
						children: "Thank you"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-8 leading-[1.9] text-muted-foreground",
						children: "Your message has been sent. Maggie will read your enquiry personally and reply with care."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "mt-10 rounded-sm bg-primary px-12 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90",
						children: "Return home"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-wash min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wash, { tone: "yellow" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "watermark-layer",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "page-enter mx-auto max-w-2xl px-6 pt-16 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl text-primary md:text-6xl",
								children: "Contact"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-24" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gold)]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-24" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-10 leading-[1.9] text-muted-foreground",
								children: "If you have a question, or feel called to book a session, please leave a message below. I read every enquiry personally and will reply with care."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						noValidate: true,
						className: "mt-14 space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Your name",
								name: "name",
								error: errors["name"],
								formErrors: state.errors
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Email address",
								name: "email",
								type: "email",
								error: errors["email"],
								formErrors: state.errors
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Telephone (optional)",
								name: "phone",
								type: "tel",
								error: errors["phone"],
								formErrors: state.errors
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									htmlFor: "message",
									className: "mb-3 block text-xs tracking-[0.2em] text-muted-foreground uppercase",
									children: "Your message"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									rows: 6,
									maxLength: 2e3,
									className: "w-full resize-none rounded-sm border-0 border-b border-input bg-card/50 px-4 py-3 leading-relaxed outline-none transition-colors focus:border-[var(--gold)]"
								}),
								errors["message"] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, { children: errors["message"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
									field: "message",
									errors: state.errors,
									className: "mt-2 text-sm text-destructive"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
								errors: state.errors,
								className: "text-sm text-destructive"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4 text-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									disabled: state.submitting,
									className: "rounded-sm bg-primary px-12 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90 disabled:opacity-60",
									children: state.submitting ? "Sending..." : "Send message"
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-20 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline mx-auto mb-10 block w-32" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs tracking-[0.2em] text-muted-foreground uppercase",
								children: "Or write to me directly"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${EMAIL}`,
								className: "font-display mt-4 inline-block text-xl text-foreground transition-opacity hover:opacity-70",
								children: EMAIL
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-8 text-sm leading-relaxed text-muted-foreground",
								children: "Sessions take place near London Bridge station, London, United Kingdom."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Field({ label, name, type = "text", error, formErrors }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			htmlFor: name,
			className: "mb-3 block text-xs tracking-[0.2em] text-muted-foreground uppercase",
			children: label
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			id: name,
			name,
			type,
			maxLength: 255,
			className: "w-full rounded-sm border-0 border-b border-input bg-card/50 px-4 py-3 outline-none transition-colors focus:border-[var(--gold)]"
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorText, { children: error }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(V, {
			field: name,
			errors: formErrors,
			className: "mt-2 text-sm text-destructive"
		})
	] });
}
function ErrorText({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-2 text-sm text-destructive",
		children
	});
}
//#endregion
export { Contact as component };

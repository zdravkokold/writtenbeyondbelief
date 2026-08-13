import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Wash, i as Header, r as GlyphVeil, t as Footer } from "./Wash-BNmoMG0f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work-BIQ7aNmv.js
var import_jsx_runtime = require_jsx_runtime();
var supports = [
	"Feeling mentally overwhelmed, disconnected, or stuck in overthinking",
	"Moving through change, transition, or emotional intensity",
	"Seeking a deeper sense of clarity, presence, and inner balance",
	"Longing to reconnect with your body, intuition, and inner guidance",
	"Ready to release old patterns and create space for something new",
	"Curious about exploring healing through breath, awareness, and embodied practice"
];
var experience = [
	"A sense of lightness in body and mind, with reduced mental fog",
	"Deep rest, calm, and inner stillness",
	"Healing on both physical and emotional levels",
	"Awakening of self-awareness, intuition, and creativity",
	"Reconnection with inner joy, confidence, and self-trust",
	"A more harmonious flow of energy throughout the system",
	"Feeling grounded, centred, and present in the body",
	"Greater clarity, with reduced overthinking and mental overwhelm",
	"Release of emotional blockages and old patterns",
	"Deeper understanding of your needs and desires",
	"A sense of empowerment to create meaningful change in your life"
];
function Work() {
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
				className: "page-enter relative mx-auto max-w-3xl px-6 pt-16 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphVeil, {
						name: "mandala",
						opacity: .06,
						className: "-top-28 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "relative text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl text-primary md:text-6xl",
								children: "The work I offer"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-center gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-24" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 space-y-8 text-center text-base leading-[2] text-muted-foreground md:text-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Each healing session is intuitively guided and shaped around what you need in the moment." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Together, we explore how you are feeling physically, mentally, emotionally and energetically. Depending on what arises, I support you using different energy healing techniques." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The intention behind each session is to create space for clarity, release, transformation and deeper connection to yourself." })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "What this work supports",
						items: supports
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
						title: "In a session, you may experience",
						items: experience
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-24",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mx-auto max-w-xl rounded-sm border border-[var(--gold)]/40 bg-card/70 px-8 py-12 text-center shadow-[var(--shadow-soft)] backdrop-blur-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs tracking-[0.28em] text-muted-foreground uppercase",
										children: "Healing session"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display mt-5 text-5xl text-primary",
										children: "£75"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-3 text-muted-foreground",
										children: "45 minutes"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline mx-auto my-7 block w-24" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm leading-relaxed text-muted-foreground",
										children: "Appointments near to London Bridge station"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-16 text-center text-2xl leading-relaxed text-foreground md:text-3xl",
								children: "If you feel called to this work, you are warmly invited to book a session."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-10 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									className: "rounded-sm bg-primary px-10 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90",
									children: "Book a session"
								})
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Section({ title, items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mt-24",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-center text-3xl text-primary md:text-4xl",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline mx-auto mt-6 mb-10 block w-32" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mx-auto max-w-2xl space-y-5",
				children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex gap-4 leading-[1.9] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item })]
				}, item))
			})
		]
	});
}
//#endregion
export { Work as component };

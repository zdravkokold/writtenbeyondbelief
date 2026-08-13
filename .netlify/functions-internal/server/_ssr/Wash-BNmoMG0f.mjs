import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@formspree/react+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Wash-BNmoMG0f.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var logo_default = "/assets/logo-DmCnfcEy.png";
function Logo({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: logo_default,
		alt: "Written Beyond Belief — explore, expand, create",
		className: `feather-edges select-none ${className}`,
		loading: "eager"
	});
}
var links = [
	{
		to: "/about",
		label: "About Me"
	},
	{
		to: "/work",
		label: "The Work I Offer"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header({ overlay = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: overlay ? "absolute inset-x-0 top-0 z-30" : "relative z-30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-6 py-6 md:py-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 flex-col items-center gap-2",
					children: [!overlay && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14 w-14 shrink-0 md:h-16 md:w-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `font-display truncate text-2xl tracking-wide md:text-3xl ${overlay ? "text-white drop-shadow-md" : "text-foreground"}`,
						children: "writtenbeyondbelief.com"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center justify-center gap-12 md:flex",
					children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: `font-display text-lg tracking-wide transition-opacity hover:opacity-70 ${overlay ? "text-white drop-shadow-md" : "text-foreground"}`,
						activeProps: { className: "opacity-70" },
						children: l.label
					}, l.to))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-label": open ? "Close menu" : "Open menu",
				onClick: () => setOpen((v) => !v),
				className: `absolute top-6 right-6 shrink-0 md:hidden ${overlay ? "text-white" : "text-foreground"}`,
				children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
			})]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-6 mb-4 rounded-lg bg-card/95 px-6 py-5 shadow-[var(--shadow-soft)] backdrop-blur md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-col gap-4",
				children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: l.to,
					onClick: () => setOpen(false),
					className: "font-display text-xl text-foreground",
					children: l.label
				}, l.to))
			})
		})]
	});
}
var glyphs = {
	"north-star": "/assets/North%20star-DjbLtYiY.png",
	"seed-of-life": "/assets/seed%20of%20life-k5mVRj1l.png",
	"lotus-bud": "/assets/lotus%20bud-Bhc6iVo-.png",
	lotus: "/assets/lotus-BZieNYQp.png",
	mandala: "/assets/Mandala-CrHEwY7c.png"
};
/**
* Sacred geometry mark — always decorative, always quiet.
* Rendered with multiply blending so the gold line work sinks into
* the watercolour paper instead of sitting on top of it.
*/
function Glyph({ name, className = "", opacity = .35 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: glyphs[name],
		alt: "",
		"aria-hidden": true,
		loading: "lazy",
		className: `pointer-events-none select-none ${className}`,
		style: { opacity }
	});
}
/** Full-bleed, barely-there geometry drifting behind a section. */
function GlyphVeil({ name, className = "", opacity = .09 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `pointer-events-none absolute -z-10 ${className}`,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
			name,
			opacity,
			className: "h-full w-full"
		})
	});
}
var legal = [
	{
		to: "/privacy",
		label: "Privacy & Cookie Policy"
	},
	{
		to: "/terms",
		label: "T&C / Refund Policy"
	},
	{
		to: "/disclaimer",
		label: "Client Disclaimer & Informed Consent"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "relative mt-24 px-6 pb-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
				name: "north-star",
				opacity: .14,
				className: "absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hairline mx-auto max-w-4xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto mt-12 flex max-w-4xl flex-col items-center gap-8 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-24 w-24" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8",
						children: legal.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground",
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "mailto:Maggie@writtenbeyondbelief.com",
						className: "font-display text-lg tracking-wide text-foreground transition-opacity hover:opacity-70",
						children: "Maggie@writtenbeyondbelief.com"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" Written Beyond Belief. All rights reserved."
						]
					})
				]
			})
		]
	});
}
var washes = {
	"yellow-white": "/assets/wash-yellow-white-DbezNpmK.png",
	yellow: "/assets/wash-yellow-BHW7VtVp.png",
	"pink-purple": "/assets/pink_purple%20About%20Me-BQLpxgLf.png",
	blue: "/assets/blue%20_Homepage-BjeIz2zK.png",
	"blue-yellow": "/assets/blue_%20yellow%20Homepage-WLyEjZgK.png"
};
/**
* Soft watercolour paper wash behind all page content.
* A second wash can be layered in, feathered so the two blend into
* one continuous field rather than two stacked images.
*/
function Wash({ tone = "yellow-white", secondTone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "pointer-events-none fixed inset-0 -z-10",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: washes[tone],
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-55"
			}),
			secondTone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: washes[secondTone],
				alt: "",
				className: "absolute inset-0 h-full w-full object-cover opacity-45",
				style: {
					WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 45%, #000 100%)",
					maskImage: "linear-gradient(to bottom, transparent 0%, #000 45%, #000 100%)"
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				style: { background: "linear-gradient(to bottom, color-mix(in oklab, var(--background) 62%, transparent), color-mix(in oklab, var(--background) 82%, transparent))" }
			})
		]
	});
}
//#endregion
export { Wash as a, Header as i, Glyph as n, GlyphVeil as r, Footer as t };

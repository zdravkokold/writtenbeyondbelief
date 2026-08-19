import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@formspree/react+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Wash-DhRivWxj.js
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
var glyphs = {
	"north-star": "/assets/North%20star-zCpLkJgN.png",
	"seed-of-life": "/assets/seed%20of%20life-C-OQIrP4.png",
	"lotus-bud": "/assets/lotus%20bud-lm90qwOU.png",
	lotus: "/assets/lotus-C1rtqHcb.png",
	mandala: "/assets/Mandala-BYkJm_53.png"
};
/**
* Sacred geometry mark — always decorative, always quiet.
* Rendered with multiply blending so the gold line work sinks into
* the watercolour paper instead of sitting on top of it.
*/
function Glyph({ name, className = "", opacity = .35, gold = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: glyphs[name],
		alt: "",
		"aria-hidden": true,
		loading: "lazy",
		className: `pointer-events-none select-none ${gold ? "glyph-gold" : ""} ${className}`,
		style: { opacity }
	});
}
/** Full-bleed, barely-there geometry drifting behind a section. */
function GlyphVeil({ name, className = "", opacity = .09, gold = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `pointer-events-none absolute ${className}`,
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
			name,
			opacity,
			gold,
			className: "h-full w-full"
		})
	});
}
/** Paired side glyphs — geometry flanking content instead of crowding the centre. */
function GlyphSides({ left, right, opacity = .28 }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphVeil, {
		name: left,
		gold: true,
		opacity,
		className: "-z-10 top-1/2 -left-8 h-52 w-52 -translate-y-1/2 md:-left-16 md:h-72 md:w-72 lg:h-80 lg:w-80"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphVeil, {
		name: right,
		gold: true,
		opacity,
		className: "-z-10 top-1/2 -right-8 h-52 w-52 -translate-y-1/2 md:-right-16 md:h-72 md:w-72 lg:h-80 lg:w-80"
	})] });
}
var navItems = [
	{
		to: "/",
		category: "Explore",
		label: "Home"
	},
	{
		to: "/work",
		category: "Expand",
		label: "The Work I Offer"
	},
	{
		to: "/contact",
		category: "Create",
		label: "Contact"
	}
];
function NavDivider() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "hidden h-10 w-px shrink-0 bg-[var(--gold)]/40 md:block",
		"aria-hidden": true
	});
}
function NavItem({ to, category, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to,
		onClick,
		className: "group flex flex-col items-center gap-0.5 px-3 py-1 text-center transition-opacity hover:opacity-75 md:px-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-sans text-[0.65rem] font-medium tracking-[0.28em] text-[var(--brand-purple)] uppercase md:text-xs",
			children: category
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-sm tracking-wide text-[var(--brand-purple)] md:text-base",
			children: label
		})]
	});
}
function Header({ overlay = false }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	if (overlay) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "absolute inset-x-0 top-0 z-30",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-[1440px] px-6 py-6 md:py-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/",
				className: "flex flex-col items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-14 w-auto md:h-16" })
			})
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "header-bar relative z-30",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-[1440px] px-4 py-4 md:px-8 md:py-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "flex min-w-0 shrink-0 items-center gap-3 md:gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "h-12 w-auto shrink-0 md:h-16" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hidden font-sans text-[0.55rem] tracking-[0.22em] text-[var(--brand-purple)] uppercase sm:block md:text-[0.6rem]",
							children: "Explore • Expand • Create"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden items-center lg:flex",
						children: [
							navItems.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center",
								children: [i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavDivider, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, { ...item })]
							}, item.to)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavDivider, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
								name: "seed-of-life",
								gold: true,
								opacity: .85,
								className: "mx-4 h-10 w-10 shrink-0 md:h-11 md:w-11"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavDivider, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "max-w-[9rem] px-3 py-1 text-center font-display text-xs leading-snug tracking-wide text-[var(--brand-purple-light)] transition-opacity hover:opacity-75 md:max-w-none md:text-sm",
								children: "The Person Behind Written Beyond Belief"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						onClick: () => setOpen((v) => !v),
						className: "shrink-0 text-[var(--brand-purple)] lg:hidden",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
					})
				]
			})
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-[var(--gold)]/20 bg-[var(--background)] px-6 py-5 lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-5",
				children: [
					navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavItem, {
						...item,
						onClick: () => setOpen(false)
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/about",
						onClick: () => setOpen(false),
						className: "font-display text-base leading-snug text-[var(--brand-purple-light)]",
						children: "The Person Behind Written Beyond Belief"
					})
				]
			})
		})]
	});
}
var wash_yellow_white_default = "/assets/wash-yellow-white-DbezNpmK.png";
var wash_yellow_default = "/assets/wash-yellow-BHW7VtVp.png";
var pink_purple_About_Me_default = "/assets/pink_purple%20About%20Me-BQLpxgLf.png";
var washes = {
	"yellow-white": wash_yellow_white_default,
	yellow: wash_yellow_default,
	"pink-purple": pink_purple_About_Me_default,
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
export { Logo as a, Header as i, GlyphSides as n, Wash as o, GlyphVeil as r, pink_purple_About_Me_default as s, Glyph as t };

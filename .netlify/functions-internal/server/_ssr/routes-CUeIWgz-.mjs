import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as Header, n as GlyphSides, o as Wash, s as pink_purple_About_Me_default, t as Glyph } from "./Wash-DhRivWxj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CUeIWgz-.js
var import_jsx_runtime = require_jsx_runtime();
var hero_default = "/assets/hero-BwoyOiQf.jpg";
/** Soft wave divider between the hero photo and the My Mission section. */
function WaveTransition() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "relative -mt-px w-full leading-[0]",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 1440 100",
			preserveAspectRatio: "none",
			className: "block h-16 w-full md:h-24",
			xmlns: "http://www.w3.org/2000/svg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "wave-fill",
				x1: "0%",
				y1: "0%",
				x2: "100%",
				y2: "0%",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "0%",
						stopColor: "oklch(0.88 0.04 310)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "35%",
						stopColor: "oklch(0.84 0.06 300)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "65%",
						stopColor: "oklch(0.86 0.05 295)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
						offset: "100%",
						stopColor: "oklch(0.89 0.04 305)"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M0,48 C240,88 480,12 720,48 C960,84 1200,16 1440,52 L1440,100 L0,100 Z",
				fill: "url(#wave-fill)"
			})]
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
		label: "Terms & Conditions"
	},
	{
		to: "/disclaimer",
		label: "Client Disclaimer"
	}
];
function HomeClosing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "footer-wash relative mt-24 overflow-hidden px-6 py-16 text-center md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
				name: "seed-of-life",
				gold: true,
				opacity: .55,
				className: "absolute top-1/2 left-4 h-24 w-24 -translate-y-1/2 md:left-10 md:h-32 md:w-32"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
				name: "lotus",
				gold: true,
				opacity: .55,
				className: "absolute top-1/2 right-4 h-24 w-24 -translate-y-1/2 md:right-10 md:h-32 md:w-32"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-sans text-xs tracking-[0.32em] text-[var(--gold)] uppercase md:text-sm",
						children: "Explore • Expand • Create"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display mt-5 text-xl text-white/95 italic md:text-2xl",
						children: "A journey back to yourself. A path beyond belief."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "mt-12 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8",
						children: legal.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-sm tracking-wide text-white/70 transition-colors hover:text-white",
							children: l.label
						}, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-10 text-xs text-white/45",
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
var pillars = [
	{
		category: "Explore",
		text: "Become aware of the stories about yourself you've been believing until now.",
		linkLabel: "Home",
		to: "/",
		glyph: "north-star"
	},
	{
		category: "Expand",
		text: "See the freedom and possibilities that emerge once you step beyond them.",
		linkLabel: "Work I Offer",
		to: "/work",
		glyph: "seed-of-life"
	},
	{
		category: "Create",
		text: "Let the discovery flow through you. Give and receive from yourself and the world.",
		linkLabel: "Contact",
		to: "/contact",
		glyph: "lotus-bud"
	}
];
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-wash min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wash, {
				tone: "blue",
				secondTone: "blue-yellow"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "watermark-layer",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative bg-[var(--background)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-[1440px] flex-col md:min-h-[520px] md:flex-row md:items-stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative z-10 flex flex-1 items-center px-6 py-12 md:max-w-[48%] md:px-10 md:py-16 lg:px-14",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rise-in space-y-5 font-display text-[1.25rem] leading-[1.38] text-[var(--brand-purple)] md:text-[1.45rem] lg:text-[1.55rem]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Have you ever wondered what holds you back from creating through the wisdom and power within you?" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "What would it feel like to remember the path that is truly yours?" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Let us journey together into the space where The Self is explored beyond existing beliefs." })
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative min-h-[340px] flex-1 md:min-h-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: hero_default,
							alt: "A woman standing on a clifftop above the sea with her arms open to the sky",
							className: "absolute inset-0 h-full w-full object-cover object-[48%_center]",
							style: {
								WebkitMaskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 12%, #000 28%, #000 100%)",
								maskImage: "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 12%, #000 28%, #000 100%)"
							}
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaveTransition, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mission-wash relative overflow-hidden px-6 pt-10 pb-14 md:pt-14 md:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: pink_purple_About_Me_default,
						alt: "",
						"aria-hidden": true,
						className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.38] mix-blend-multiply"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0",
						"aria-hidden": true,
						style: { background: "radial-gradient(ellipse 50% 40% at 20% 25%, rgba(180,150,210,0.35), transparent 65%), radial-gradient(ellipse 45% 35% at 80% 70%, rgba(160,130,200,0.3), transparent 60%)" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphSides, {
						left: "mandala",
						right: "lotus",
						opacity: .32
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto max-w-3xl text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
								name: "seed-of-life",
								gold: true,
								opacity: .8,
								className: "mx-auto mb-6 h-10 w-10"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-4xl tracking-wide text-[var(--brand-purple)] uppercase md:text-5xl",
								children: "My Mission"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 mb-12 flex items-center justify-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-24" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-1.5 rounded-full bg-[var(--gold)]" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-24" })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-8 text-base leading-[2] text-[var(--brand-purple)]/85 md:text-lg",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"My mission is to support others in connecting with themselves. I am devoted to helping others ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "restore balance" }),
										", ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "harmonise" }),
										" with their inner needs, and create from the guidance of their unique essence and wisdom of a knowing heart."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"I am dedicated to the path of expansion, where ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "creativity ignites" }),
										" from a place of abundance and where life unfolds through the recognition that each of us holds ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "all answers and possibilities" }),
										" within."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
										"Each step on this work is guided by ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "integrity" }),
										", ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "authenticity" }),
										" and",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Em, { children: "gratitude" }),
										" — an honouring of the uniqueness of each individual journey."
									] })
								]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "relative px-6 py-20 md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-5xl gap-12 md:grid-cols-3 md:gap-0",
					children: pillars.map((pillar, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex flex-col items-center text-center",
						children: [
							i > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute top-0 -left-px hidden h-full w-px bg-[var(--gold)]/35 md:block",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
								name: pillar.glyph,
								gold: true,
								opacity: .85,
								className: "mb-6 h-16 w-16 md:h-20 md:w-20"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-sans text-xs tracking-[0.3em] text-[var(--brand-purple)] uppercase",
								children: pillar.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 max-w-[16rem] text-sm leading-[1.85] text-muted-foreground md:text-base",
								children: pillar.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: pillar.to,
								className: "mt-6 font-display text-sm tracking-[0.18em] text-[var(--brand-purple)] uppercase transition-opacity hover:opacity-70",
								children: [pillar.linkLabel, " ›"]
							})
						]
					}, pillar.category))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeClosing, {})
		]
	});
}
function Em({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "font-medium text-[var(--brand-purple)]",
		children
	});
}
//#endregion
export { Home as component };

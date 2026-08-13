import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Wash, i as Header, n as Glyph, r as GlyphVeil, t as Footer } from "./Wash-BNmoMG0f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-Dw3WQXoX.js
var import_jsx_runtime = require_jsx_runtime();
var about_doors_default = "/assets/about-doors-DKv8ljUV.jpg";
var paragraphs = [
	"Hey, I'm Maggie, and I'm deeply grateful for your presence here. I would love to share a little of my journey with you. If something within these words resonates, perhaps our paths are meant to meet.",
	"I discovered Contemporary Dance in childhood and continued this journey from the age of five till I was seventeen. During those years, I experienced movement as a powerful way to express, release and transform.",
	"From my love of movement, alongside inner enquiry supported by daily reflection and journaling, my path into Yoga naturally unfolded. In 2021, I felt called to become a Yoga Teacher, and that same year I completed the 200-hour yoga teacher training.",
	"My practice and teachings are rooted in an understanding of Yoga as a doorway to subtle discoveries about ourselves, that arise within us while we move, breathe and listen to the different layers of The Self.",
	"A deeper exploration of breath and energy led me to study with Yumiko Asakura, a spiritual teacher and far descendent of Japanese Samurai linage. In July 2025, I completed a two-years course on her self-created healing methods, Jikochiyu.",
	"As a healer, my work is guided by acknowledgement, acceptance and transformation. I hold a space for others to reconnect with themselves, listen inwardly and heal through the wisdom that already lives within."
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "page-wash min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wash, { tone: "pink-purple" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "watermark-layer",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "page-enter mx-auto max-w-3xl px-6 pt-16 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "relative text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphVeil, {
								name: "seed-of-life",
								opacity: .08,
								className: "-top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl text-primary md:text-6xl",
								children: "About me"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center justify-center gap-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-24" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Glyph, {
										name: "lotus-bud",
										opacity: .5,
										className: "h-14 w-auto"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hairline w-24" })
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "mx-auto mt-14 max-w-md",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_doors_default,
							alt: "Maggie sitting cross-legged in front of an ornately carved Nepalese temple door",
							className: "feather-soft h-auto w-full object-cover",
							loading: "lazy"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 space-y-8 text-center text-base leading-[2] text-muted-foreground md:text-lg",
						children: paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-20 text-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/work",
							className: "inline-flex rounded-sm bg-primary px-9 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90",
							children: "The work I offer"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { About as component };

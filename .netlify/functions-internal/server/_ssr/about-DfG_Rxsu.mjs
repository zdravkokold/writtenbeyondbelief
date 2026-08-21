import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Logo, i as Header, o as Wash } from "./Wash-DhRivWxj.mjs";
import { t as Footer } from "./Footer-CNUk21xQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DfG_Rxsu.js
var import_jsx_runtime = require_jsx_runtime();
var about_doors_default = "/assets/about-doors-DKv8ljUV.jpg";
var paragraphs = [
	"Hey, I'm Maggie, and I'm deeply grateful for your presence here. I would love to share a little of my journey with you. If something within these words resonates, perhaps our paths are meant to meet.",
	"I discovered Contemporary Dance in childhood and continued this journey from the age of five untill I was seventeen. During those years, I experienced movement as a powerful way to express, release and transform.",
	"From my love of movement, alongside inner enquiry supported by daily reflection and journaling, my path into Yoga naturally unfolded. In 2021, I felt called to become a Yoga Teacher, and that same year I completed the 200-hour yoga teacher training.",
	"My practice and teachings are rooted in an understanding of Yoga as a doorway to subtle discoveries about ourselves that arise within us while we move, breathe and listen to the different layers of The Self.",
	"A deeper exploration of breath and energy led me to study with Yumiko Asakura, a spiritual teacher and far descendant of Japanese Samurai lineage. In July 2025, I completed a two-years course in her self-created healing methods, Jikochiyu.",
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
				className: "page-enter mx-auto max-w-3xl px-6 pt-16 pb-8 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, { className: "mx-auto h-28 w-auto md:h-36" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mt-8 mb-2 block h-px w-16 bg-[var(--gold)] opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-3xl leading-tight text-[var(--brand-purple)] md:text-5xl",
								children: "The Person Behind Written Beyond Belief"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-16 space-y-8 text-center text-base leading-[2] text-muted-foreground md:text-lg",
						children: paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }, p.slice(0, 24)))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
						className: "mx-auto mt-20 max-w-md pb-8",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: about_doors_default,
							alt: "Maggie sitting cross-legged in front of an ornately carved Nepalese temple door",
							className: "feather-soft h-auto w-full object-cover",
							loading: "lazy"
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

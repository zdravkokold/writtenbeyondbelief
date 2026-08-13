import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Wash, i as Header, r as GlyphVeil, t as Footer } from "./Wash-BNmoMG0f.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageShell-BuC3t_H1.js
var import_jsx_runtime = require_jsx_runtime();
function PageShell({ title, intro, children }) {
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
				className: "page-enter relative mx-auto max-w-3xl px-6 pt-16 pb-8 md:pt-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlyphVeil, {
						name: "mandala",
						opacity: .06,
						className: "-top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "relative mb-16 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display text-4xl leading-tight text-foreground md:text-6xl",
								children: title
							}),
							intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground",
								children: intro
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mx-auto mt-8 block h-px w-16 bg-[var(--gold)] opacity-60" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "prose-zen",
						children
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { PageShell as t };

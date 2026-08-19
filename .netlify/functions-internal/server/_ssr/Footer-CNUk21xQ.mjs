import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { a as Logo, t as Glyph } from "./Wash-DhRivWxj.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Footer-CNUk21xQ.js
var import_jsx_runtime = require_jsx_runtime();
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
//#endregion
export { Footer as t };

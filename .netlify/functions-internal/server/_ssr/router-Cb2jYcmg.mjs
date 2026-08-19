import { o as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@formspree/react+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-Cb2jYcmg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-Ch-dTOI9.css";
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
var STORAGE_KEY = "wbb-cookie-consent";
/** Ask again after 30 days, or when a fresh session starts after 2h idle. */
var MAX_AGE_MS = 2592e6;
function CookieConsent() {
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (!raw) {
				setVisible(true);
				return;
			}
			const parsed = JSON.parse(raw);
			if (!parsed?.at || Date.now() - parsed.at > MAX_AGE_MS) setVisible(true);
		} catch {
			setVisible(true);
		}
	}, []);
	const decide = (choice) => {
		try {
			localStorage.setItem(STORAGE_KEY, JSON.stringify({
				choice,
				at: Date.now()
			}));
		} catch {}
		setVisible(false);
	};
	if (!visible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "dialog",
		"aria-label": "Cookie consent",
		className: "fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl flex-col gap-5 rounded-sm border border-border/60 bg-background/95 p-6 shadow-lg backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm leading-relaxed text-muted-foreground",
				children: [
					"This website uses essential cookies to function, and analytics cookies only with your consent. Read our",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "text-primary underline-offset-4 hover:underline",
						children: "Privacy & Cookie Policy"
					}),
					"."
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => decide("rejected"),
					className: "rounded-sm border border-border px-5 py-3 text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-foreground",
					children: "Reject"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => decide("accepted"),
					className: "rounded-sm bg-primary px-5 py-3 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90",
					children: "Accept"
				})]
			})]
		})
	});
}
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Written Beyond Belief — Energy Healing with Maggie" },
			{
				name: "description",
				content: "Intuitively guided energy healing sessions in London. Explore, expand and create from the wisdom within you."
			},
			{
				name: "author",
				content: "Maggie — Written Beyond Belief"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Karla:wght@300;400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CookieConsent, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})
		]
	});
}
var $$splitComponentImporter$6 = () => import("./routes-CUeIWgz-.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Written Beyond Belief — Energy Healing with Maggie" },
		{
			name: "description",
			content: "Intuitively guided energy healing sessions in London. Explore, expand and create from the wisdom within you."
		},
		{
			property: "og:title",
			content: "Written Beyond Belief — Energy Healing with Maggie"
		},
		{
			property: "og:description",
			content: "Intuitively guided energy healing sessions in London. Explore, expand and create from the wisdom within you."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-DfG_Rxsu.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "The Person Behind Written Beyond Belief — Maggie" },
		{
			name: "description",
			content: "Maggie's journey from contemporary dance to yoga teaching and Jikochiyu healing, and the presence she brings to every session."
		},
		{
			property: "og:title",
			content: "The Person Behind Written Beyond Belief — Maggie"
		},
		{
			property: "og:description",
			content: "Maggie's journey from contemporary dance to yoga teaching and Jikochiyu healing."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./contact-D1frUTtR.mjs");
var Route$4 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact — Written Beyond Belief" },
		{
			name: "description",
			content: "Get in touch with Maggie to enquire about a healing session or ask a question before booking."
		},
		{
			property: "og:title",
			content: "Contact — Written Beyond Belief"
		},
		{
			property: "og:description",
			content: "Get in touch with Maggie to enquire about a healing session."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./disclaimer-pjDllAeo.mjs");
var Route$3 = createFileRoute("/disclaimer")({
	head: () => ({ meta: [
		{ title: "Before Your Session — Client Disclaimer & Informed Consent" },
		{
			name: "description",
			content: "Important information to read before your healing session with Written Beyond Belief, including consent, medical responsibility and confidentiality."
		},
		{
			property: "og:title",
			content: "Before Your Session — Client Disclaimer"
		},
		{
			property: "og:description",
			content: "Important information to read before your healing session."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./privacy-DKz66gNK.mjs");
var Route$2 = createFileRoute("/privacy")({
	head: () => ({ meta: [
		{ title: "Privacy & Cookie Policy — Written Beyond Belief" },
		{
			name: "description",
			content: "How Written Beyond Belief collects, uses and protects your personal information, and how cookies are used on this website."
		},
		{
			property: "og:title",
			content: "Privacy & Cookie Policy — Written Beyond Belief"
		},
		{
			property: "og:description",
			content: "How your personal information and cookies are handled on this website."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./terms-CkoXbLg4.mjs");
var Route$1 = createFileRoute("/terms")({
	head: () => ({ meta: [
		{ title: "Terms & Conditions and Refund Policy — Written Beyond Belief" },
		{
			name: "description",
			content: "The terms governing use of the Written Beyond Belief website and services, together with the refund and cancellation policy."
		},
		{
			property: "og:title",
			content: "Terms & Conditions and Refund Policy"
		},
		{
			property: "og:description",
			content: "Terms governing use of this website and services, plus the refund and cancellation policy."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work-DU4xaX5q.mjs");
var Route = createFileRoute("/work")({
	head: () => ({ meta: [
		{ title: "The Work I Offer — Energy Healing Sessions | Written Beyond Belief" },
		{
			name: "description",
			content: "Intuitively guided energy healing sessions near London Bridge. In-person from £75, online from £45."
		},
		{
			property: "og:title",
			content: "The Work I Offer | Written Beyond Belief"
		},
		{
			property: "og:description",
			content: "Intuitively guided energy healing sessions near London Bridge."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$6.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$7
	}),
	AboutRoute: Route$5.update({
		id: "/about",
		path: "/about",
		getParentRoute: () => Route$7
	}),
	ContactRoute: Route$4.update({
		id: "/contact",
		path: "/contact",
		getParentRoute: () => Route$7
	}),
	DisclaimerRoute: Route$3.update({
		id: "/disclaimer",
		path: "/disclaimer",
		getParentRoute: () => Route$7
	}),
	PrivacyRoute: Route$2.update({
		id: "/privacy",
		path: "/privacy",
		getParentRoute: () => Route$7
	}),
	TermsRoute: Route$1.update({
		id: "/terms",
		path: "/terms",
		getParentRoute: () => Route$7
	}),
	WorkRoute: Route.update({
		id: "/work",
		path: "/work",
		getParentRoute: () => Route$7
	})
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };

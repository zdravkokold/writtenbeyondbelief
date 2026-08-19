export const SITE_URL = "https://writtenbeyondbelief.com";
export const SITE_NAME = "Written Beyond Belief";

export const defaultDescription =
  "Explore, Expand, and Create. Journey back to yourself beyond existing beliefs with Maggie.";

export const defaultOgDescription = "A journey back to yourself. A path beyond belief.";

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export const routes = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/work", changefreq: "monthly", priority: "0.9" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/disclaimer", changefreq: "yearly", priority: "0.3" },
] as const;

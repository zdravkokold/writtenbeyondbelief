import { Link } from "@tanstack/react-router";
import { Glyph } from "./Glyph";

const legal = [
  { to: "/privacy", label: "Privacy & Cookie Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/disclaimer", label: "Client Disclaimer" },
] as const;

export function HomeClosing() {
  return (
    <section className="relative px-6 pt-8 pb-16 text-center md:pb-20">
      <div className="hairline mx-auto max-w-4xl" />

      <div className="relative mx-auto mt-16 max-w-2xl">
        <Glyph name="lotus" plain opacity={0.85} className="mx-auto mb-8 h-14 w-14" />

        <p className="font-sans text-xs tracking-[0.32em] text-[var(--brand-purple)] uppercase md:text-sm">
          Explore • Expand • Create
        </p>
        <p className="font-display mt-5 text-2xl text-[var(--brand-purple)] italic md:text-3xl">
          A journey back to yourself. A path beyond belief.
        </p>

        <nav className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
          {legal.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="mt-10 text-xs text-muted-foreground/70">
          © {new Date().getFullYear()} Written Beyond Belief. All rights reserved.
        </p>
      </div>
    </section>
  );
}

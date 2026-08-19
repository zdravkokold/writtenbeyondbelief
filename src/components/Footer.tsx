import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { Glyph } from "./Glyph";


const legal = [
  { to: "/privacy", label: "Privacy & Cookie Policy" },
  { to: "/terms", label: "Terms & Conditions" },
  { to: "/disclaimer", label: "Client Disclaimer" },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-24 px-6 pb-14">
      <Glyph
        name="north-star"
        plain
        opacity={0.22}
        className="absolute -top-6 left-1/2 h-16 w-16 -translate-x-1/2"
      />
      <div className="hairline mx-auto max-w-4xl" />
      <div className="relative mx-auto mt-12 flex max-w-4xl flex-col items-center gap-8 text-center">
        <Logo className="h-24 w-24" />


        <nav className="flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8">
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

        <a
          href="mailto:Maggie@writtenbeyondbelief.com"
          className="font-display text-lg tracking-wide text-foreground transition-opacity hover:opacity-70"
        >
          Maggie@writtenbeyondbelief.com
        </a>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Written Beyond Belief. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

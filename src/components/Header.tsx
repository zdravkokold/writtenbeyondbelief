import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { to: "/about", label: "About Me" },
  { to: "/work", label: "The Work I Offer" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={
        overlay
          ? "absolute inset-x-0 top-0 z-30"
          : "relative z-30 border-b border-border/60"
      }
    >
      <div className="relative mx-auto max-w-6xl px-6 py-6 md:py-8">
        <div className="flex flex-col items-center gap-4">
          <Link to="/" className="flex min-w-0 flex-col items-center gap-2">
            <Logo className="h-14 w-14 shrink-0 md:h-16 md:w-16" />
            <span
              className={`font-display truncate text-xl tracking-wide md:text-3xl ${
                overlay ? "text-white drop-shadow-md" : "text-foreground"
              }`}
            >
              writtenbeyondbelief.com
            </span>
          </Link>

          <nav className="hidden items-center justify-center gap-12 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`font-display text-lg tracking-wide transition-opacity hover:opacity-70 ${
                  overlay ? "text-white drop-shadow-md" : "text-foreground"
                }`}
                activeProps={{ className: "opacity-70" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={`absolute top-6 right-6 shrink-0 md:hidden ${overlay ? "text-white" : "text-foreground"}`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>


      {open && (
        <div className="mx-6 mb-4 rounded-lg bg-card/95 px-6 py-5 shadow-[var(--shadow-soft)] backdrop-blur md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="font-display text-xl text-foreground"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

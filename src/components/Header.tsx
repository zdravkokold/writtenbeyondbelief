import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";
import { Logo } from "./Logo";

const navItems = [
  { to: "/", category: "Explore", label: "Home" },
  { to: "/work", category: "Expand", label: "The Work I Offer" },
  { to: "/contact", category: "Create", label: "Contact" },
  { to: "/about", label: "About Me" },
] as const;

function NavDivider() {
  return <span className="hidden h-14 w-px shrink-0 bg-[var(--gold)]/45 md:block" aria-hidden />;
}

function NavItem({
  to,
  category,
  label,
  onClick,
}: {
  to: string;
  category?: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="group flex flex-col items-center gap-1 px-3 py-1 text-center transition-opacity hover:opacity-75 sm:px-5 md:px-8"
    >
      {category && (
        <span className="font-display text-[1.1rem] leading-none tracking-[0.08em] text-[var(--brand-purple)] uppercase sm:text-[1.25rem] md:text-[1.7rem]">
          {category}
        </span>
      )}
      <span className="font-display text-[0.8rem] tracking-wide text-[var(--brand-purple)] sm:text-[0.9rem] md:text-[1.1rem]">
        {label}
      </span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header-bar relative z-30">
      <div className="mx-auto max-w-[1440px] px-5 py-5 md:px-10 md:py-6">
        <div className="grid grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]">
          <div className="justify-self-start">
            <Wordmark />
          </div>

          <nav className="hidden items-center justify-center md:flex" aria-label="Primary">
            {navItems.map((item, i) => (
              <div key={item.to} className="flex items-center">
                {i > 0 && <NavDivider />}
                <NavItem {...item} />
              </div>
            ))}
          </nav>

          <div className="hidden justify-self-end md:flex">
            <Logo className="h-20 w-20" href="/about"/>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="justify-self-end text-[var(--brand-purple)] md:hidden"
          >
            {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-[var(--gold)]/20 bg-[var(--background)] px-6 py-6 md:hidden">
          <nav className="flex flex-col items-center gap-6" aria-label="Mobile">
            {navItems.map((item) => (
              <NavItem key={item.to} {...item} onClick={() => setOpen(false)} />
            ))}
            <span className="hairline w-24" />
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="flex items-center"
              aria-label="The Person Behind Written Beyond Belief"
            >
              <Logo className="h-20 w-20" href="/about"/>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const STORAGE_KEY = "wbb-cookie-consent";
/** Ask again after 30 days, or when a fresh session starts after 2h idle. */
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 30;

type Stored = { choice: "accepted" | "rejected"; at: number };

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setVisible(true);
        return;
      }
      const parsed = JSON.parse(raw) as Stored;
      if (!parsed?.at || Date.now() - parsed.at > MAX_AGE_MS) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (choice: Stored["choice"]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ choice, at: Date.now() }));
    } catch {
      /* storage unavailable — banner simply reappears next visit */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-5 rounded-sm border border-border/60 bg-background/95 p-6 shadow-lg backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-8">
        <p className="text-sm leading-relaxed text-muted-foreground">
          This website uses essential cookies to function, and analytics cookies only
          with your consent. Read our{" "}
          <Link to="/privacy" className="text-primary underline-offset-4 hover:underline">
            Privacy &amp; Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide("rejected")}
            className="rounded-sm border border-border px-5 py-3 text-xs tracking-[0.18em] uppercase text-muted-foreground transition-colors hover:text-foreground"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => decide("accepted")}
            className="rounded-sm bg-primary px-5 py-3 text-xs tracking-[0.18em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

import { Link } from "@tanstack/react-router";

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="flex min-w-0 flex-col items-center leading-none ml-[24vw] sm:ml-0"
      aria-label="Written Beyond Belief — home"
    >
      <span
        className={`font-[family-name:var(--font-script)] text-[var(--brand-purple)] ${
          compact ? "text-[1.85rem]" : "text-[2.15rem] md:text-[2.65rem]"
        }`}
      >
        written
      </span>
      <span
        className={`mt-0.5 font-display font-semibold tracking-[0.12em] text-[var(--gold)] uppercase ${
          compact ? "text-[0.82rem]" : "text-[0.95rem] md:text-[1.15rem]"
        }`}
      >
        Beyond Belief
      </span>
      <span
        className={`mt-1.5 font-sans font-medium tracking-[0.28em] text-[var(--brand-purple)] uppercase ${
          compact ? "text-[0.48rem]" : "text-[0.55rem] md:text-[0.62rem]"
        }`}
      >
        Explore • Expand • Create
      </span>
    </Link>
  );
}
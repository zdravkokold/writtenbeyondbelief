/** Gold hairline with a centre dot — used under page titles. */
export function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`mt-6 flex items-center justify-center gap-4 ${className}`} aria-hidden>
      <span className="hairline w-24" />
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
      <span className="hairline w-24" />
    </div>
  );
}

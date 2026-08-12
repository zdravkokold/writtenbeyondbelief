import northStar from "@/assets/North star.png";
import seedOfLife from "@/assets/seed of life.png";
import lotusBud from "@/assets/lotus bud.png";
import lotus from "@/assets/lotus.png";
import mandala from "@/assets/Mandala.png";

const glyphs = {
  "north-star": northStar,
  "seed-of-life": seedOfLife,
  "lotus-bud": lotusBud,
  lotus: lotus,
  mandala: mandala,
} as const;

export type GlyphName = keyof typeof glyphs;

/**
 * Sacred geometry mark — always decorative, always quiet.
 * Rendered with multiply blending so the gold line work sinks into
 * the watercolour paper instead of sitting on top of it.
 */
export function Glyph({
  name,
  className = "",
  opacity = 0.35,
}: {
  name: GlyphName;
  className?: string;
  opacity?: number;
}) {
  return (
    <img
      src={glyphs[name]}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
    />
  );
}

/** Full-bleed, barely-there geometry drifting behind a section. */
export function GlyphVeil({
  name,
  className = "",
  opacity = 0.09,
}: {
  name: GlyphName;
  className?: string;
  opacity?: number;
}) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 ${className}`}
      aria-hidden
    >
      <Glyph name={name} opacity={opacity} className="h-full w-full" />
    </div>
  );
}

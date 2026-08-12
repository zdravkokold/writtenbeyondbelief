import northStar from "@/assets/North_star.png.asset.json";
import seedOfLife from "@/assets/seed_of_life.png.asset.json";
import lotusBud from "@/assets/lotus_bud.png.asset.json";
import lotus from "@/assets/lotus.png.asset.json";
import mandala from "@/assets/Mandala.png.asset.json";

const glyphs = {
  "north-star": northStar.url,
  "seed-of-life": seedOfLife.url,
  "lotus-bud": lotusBud.url,
  lotus: lotus.url,
  mandala: mandala.url,
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
      className={`pointer-events-none select-none mix-blend-multiply ${className}`}
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

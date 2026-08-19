import { Link } from "@tanstack/react-router";
import northStar from "@/assets/north_star.svg";
import seedOfLife from "@/assets/seed_of_life.svg";
import lotusBud from "@/assets/lotus_bud.svg";
import lotus from "@/assets/lotus.svg";
import mandala from "@/assets/mandala.svg";
import sunMoon from "@/assets/sun__moon.svg";

const glyphs = {
  "north-star": northStar,
  "seed-of-life": seedOfLife,
  "lotus-bud": lotusBud,
  lotus: lotus,
  mandala: mandala,
  "sun-moon": sunMoon,
} as const;

export type GlyphName = keyof typeof glyphs;

/** Gold vector ornaments — black matte background keyed out via screen blend. */
export function Glyph({
  name,
  className = "",
  opacity = 0.5,
  plain = false,
}: {
  name: GlyphName;
  className?: string;
  opacity?: number;
  plain?: boolean;
}) {
  return (
    <img
      src={glyphs[name]}
      alt=""
      aria-hidden
      loading="lazy"
      className={`pointer-events-none select-none ${plain ? "" : "glyph-vector"} ${className}`}
      style={{ opacity }}
    />
  );
}

export function GlyphVeil({
  name,
  className = "",
  opacity = 0.45,
}: {
  name: GlyphName;
  className?: string;
  opacity?: number;
}) {
  return (
    <div className={`pointer-events-none absolute ${className}`} aria-hidden>
      <Glyph name={name} opacity={opacity} className="h-full w-full object-contain" />
    </div>
  );
}

/** Paired side glyphs flanking page content — zigzag, inset from the edges. */
export function GlyphSides({
  left,
  right,
  opacity = 0.42,
}: {
  left: GlyphName;
  right: GlyphName;
  opacity?: number;
}) {
  return (
    <>
      <GlyphVeil
        name={left}
        opacity={opacity}
        className="top-[16%] left-8 h-40 w-40 lg:left-12 lg:h-52 lg:w-52"
      />
      <GlyphVeil
        name={right}
        opacity={opacity}
        className="top-[58%] right-8 h-40 w-40 lg:right-12 lg:h-52 lg:w-52"
      />
    </>
  );
}

/** Clickable ornament — used for the About page link in the header. */
export function GlyphLink({
  name,
  to,
  label,
  className = "",
  opacity = 0.72,
  plain = false,
}: {
  name: GlyphName;
  to: string;
  label: string;
  className?: string;
  opacity?: number;
  plain?: boolean;
}) {
  return (
    <Link
      to={to}
      aria-label={label}
      title={label}
      className={`inline-flex shrink-0 transition-opacity hover:opacity-80 ${className}`}
    >
      <Glyph name={name} opacity={opacity} plain={plain} className="h-full w-full object-contain" />
    </Link>
  );
}

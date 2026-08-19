import { GlyphVeil, type GlyphName } from "./Glyph";

const pageGlyphs: Record<string, { left: GlyphName; right: GlyphName }> = {
  home: { left: "mandala", right: "lotus" },
  about: { left: "lotus-bud", right: "seed-of-life" },
  work: { left: "seed-of-life", right: "north-star" },
  contact: { left: "lotus", right: "lotus-bud" },
  legal: { left: "mandala", right: "north-star" },
};

/**
 * Two side ornaments per page, inset from the edges and staggered zigzag.
 * Visible on all screens including mobile (smaller on phones).
 */
export function PageOrnaments({ page = "home" }: { page?: keyof typeof pageGlyphs }) {
  const { left, right } = pageGlyphs[page] ?? pageGlyphs.home;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden>
      {/* Left ornament — upper area */}
      <GlyphVeil
        name={left}
        opacity={0.6}
        className="top-[55%] left-3 h-28 w-28 sm:left-5 sm:h-36 sm:w-36 md:left-8 md:h-48 md:w-48 lg:left-12 lg:h-60 lg:w-60 xl:left-16 xl:h-72 xl:w-72"
      />
      {/* Right ornament — lower area */}
      <GlyphVeil
        name={right}
        opacity={0.6}
        className="top-[55%] right-3 h-28 w-28 sm:right-5 sm:h-36 sm:w-36 md:right-8 md:h-48 md:w-48 lg:right-12 lg:h-60 lg:w-60 xl:right-16 xl:h-72 xl:w-72"
      />
    </div>
  );
}

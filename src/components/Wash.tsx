import yellowWhite from "@/assets/wash-yellow-white.png";
import yellow from "@/assets/wash-yellow.png";
import pinkPurple from "@/assets/pink_purple About Me.png";
import blue from "@/assets/blue _Homepage.png";
import blueYellow from "@/assets/blue_ yellow Homepage.png";

const washes = {
  "yellow-white": yellowWhite,
  yellow: yellow,
  "pink-purple": pinkPurple,
  blue: blue,
  "blue-yellow": blueYellow,
} as const;

export type WashTone = keyof typeof washes;

/**
 * Soft watercolour paper wash behind all page content.
 * A second wash can be layered in, feathered so the two blend into
 * one continuous field rather than two stacked images.
 */
export function Wash({
  tone = "yellow-white",
  secondTone,
}: {
  tone?: WashTone;
  secondTone?: WashTone;
}) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <img
        src={washes[tone]}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-75"
      />
      {secondTone && (
        <img
          src={washes[secondTone]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, #000 40%, #000 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, #000 40%, #000 100%)",
          }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--background) 42%, transparent), color-mix(in oklab, var(--background) 58%, transparent))",
        }}
      />
    </div>
  );
}

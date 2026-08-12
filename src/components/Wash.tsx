import yellowWhite from "@/assets/wash-yellow-white.webp.asset.json";
import yellow from "@/assets/wash-yellow.webp.asset.json";
import pinkPurple from "@/assets/wash-pink-purple.webp.asset.json";
import blue from "@/assets/blue_Homepage.png.asset.json";
import blueYellow from "@/assets/blue_yellow_Homepage.png.asset.json";

const washes = {
  "yellow-white": yellowWhite.url,
  yellow: yellow.url,
  "pink-purple": pinkPurple.url,
  blue: blue.url,
  "blue-yellow": blueYellow.url,
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
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      {secondTone && (
        <img
          src={washes[secondTone]}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-45"
          style={{
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0%, #000 45%, #000 100%)",
            maskImage:
              "linear-gradient(to bottom, transparent 0%, #000 45%, #000 100%)",
          }}
        />
      )}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--background) 62%, transparent), color-mix(in oklab, var(--background) 82%, transparent))",
        }}
      />
    </div>
  );
}

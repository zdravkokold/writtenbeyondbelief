import yellowWhite from "@/assets/wash-yellow-white.webp.asset.json";
import yellow from "@/assets/wash-yellow.webp.asset.json";
import pinkPurple from "@/assets/wash-pink-purple.webp.asset.json";

const washes = {
  "yellow-white": yellowWhite.url,
  yellow: yellow.url,
  "pink-purple": pinkPurple.url,
} as const;

export type WashTone = keyof typeof washes;

/** Soft watercolour paper wash that sits behind all page content. */
export function Wash({ tone = "yellow-white" }: { tone?: WashTone }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <img
        src={washes[tone]}
        alt=""
        className="h-full w-full object-cover opacity-70"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, color-mix(in oklab, var(--background) 55%, transparent), color-mix(in oklab, var(--background) 78%, transparent))",
        }}
      />
    </div>
  );
}

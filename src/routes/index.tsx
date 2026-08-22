import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import hero from "@/assets/hero.jpg";
import { Wash } from "@/components/Wash";
import { Glyph } from "@/components/Glyph";
import { WaveTransition } from "@/components/WaveTransition";
import { HomeClosing } from "@/components/HomeClosing";
import { PageOrnaments } from "@/components/PageOrnaments";
import { SectionDivider } from "@/components/SectionDivider";
import { absoluteUrl, defaultDescription, defaultOgDescription, SITE_NAME } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE_NAME} | Energy Healing with Maggie` },
      { name: "description", content: defaultDescription },
      { property: "og:title", content: SITE_NAME },
      { property: "og:description", content: defaultOgDescription },
      { property: "og:url", content: absoluteUrl("/") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_NAME },
      { name: "twitter:description", content: defaultOgDescription },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

const pillars = [
  {
    category: "Explore",
    text: "Become aware of the stories about yourself you've been believing until now.",
    linkLabel: "Home",
    to: "/",
    glyph: "north-star" as const,
    splash: false,
  },
  {
    category: "Expand",
    text: "See the freedom and possibilities that emerge once you step beyond them.",
    linkLabel: "The Work I Offer",
    to: "/work",
    glyph: "mandala" as const,
    splash: true,
  },
  {
    category: "Create",
    text: "Let the discovery flow through you. Give and receive from yourself and the world.",
    linkLabel: "Contact",
    to: "/contact",
    glyph: "lotus-bud" as const,
    splash: false,
  },
];

function Home() {
  return (
    <div className="page-wash min-h-screen">
      <Wash tone="blue" secondTone="blue-yellow" />
      <PageOrnaments page="home" />

      <Header />

      {/* Hero */}
      <section className="relative isolate">
        <div className="relative h-[62svh] max-h-[660px] min-h-[520px] w-full overflow-hidden">
          <img
            src={hero}
            alt="A woman standing on a clifftop above the sea with her arms open to the sky"
            className="h-full w-full object-cover object-[48%_center] opacity-77 md:opacity-100"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(18,35,41,0.00) 40%, rgba(17,38,45,0.10) 60%, rgba(11,31,38,0.34) 100%)",
            }}
          />

          <div className="absolute inset-0 flex items-center">
  <div className="mx-auto h-full w-full max-w-[1440px] px-6 md:h-auto">
    <div className="rise-in mx-auto flex h-full max-w-md flex-col justify-center px-2 py-8 pb-32 text-center md:mr-[3%] md:ml-auto md:block md:h-auto md:max-w-[34rem] md:px-0 md:py-0 md:pb-28">
      
      {/* Removed drop-shadow from parent div to keep desktop clean */}
      <div className="space-y-5 font-display text-[1.6rem] leading-[1.28] text-white md:text-[2rem]">
        
        {/* Paragraph 1 */}
        <p className="leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.90)] md:drop-shadow-none">
          Have you ever wondered what holds you back from creating through the wisdom and power within
          you?
        </p>
        
        <SectionDivider />
        
        {/* Paragraph 2 */}
        <p className="text-[1.2rem] leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.90)] md:text-[1.45rem] md:drop-shadow-none">
          What would it feel like to remember the path that is truly yours?
        </p>

        {/* Paragraph 3 */}
        <p className="text-[1.15rem] leading-snug text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.90)] md:text-[1.35rem] md:drop-shadow-none">
          Let us journey together into the space where The Self is explored beyond
          existing beliefs.
        </p>
        
      </div>
    </div>
  </div>
</div>

          <WaveTransition />
        </div>
      </section>

      {/* My Mission — starts after the wave; same cream fill as the SVG */}
      <section className="relative px-6 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="relative mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl text-primary md:text-6xl">My Mission, My Path</h2>
          <SectionDivider />

          <div className="mt-12 space-y-8 text-base leading-[2] text-muted-foreground md:text-lg">
            <p>
              I guide others to look beyond the known, harmonise with their inner needs, and create
              from the guidance of their unique essence and the wisdom of a knowing heart.
            </p>
            <p>
              I create through a dedication to the path of expansion, where creativity ignites from
              openness and life unfolds through the recognition that each of us holds all answers
              and possibilities within.
            </p>
            <p>
              Every step along this path honours the uniqueness of each individual journey and the
              beauty of every story.
            </p>
          </div>
        </div>
      </section>

      {/* Explore · Expand · Create */}
      <section className="relative px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-3 md:gap-0">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.category}
              className="relative flex flex-col items-center px-6 text-center md:px-10"
            >
              {i > 0 && (
                <span
                  className="absolute top-0 left-0 hidden h-full w-px bg-[var(--gold)]/50 md:block"
                  aria-hidden
                >
                  <span className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]" />
                </span>
              )}

              <div className="relative mb-8 flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
                {pillar.splash && (
                  <span
                    className="absolute inset-[-18%] rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, color-mix(in oklab, var(--brand-purple) 28%, transparent) 0%, transparent 70%)",
                    }}
                    aria-hidden
                  />
                )}
                <Glyph
                  name={pillar.glyph}
                  plain
                  opacity={0.92}
                  className="relative h-full w-full object-contain"
                />
              </div>

              <h3 className="font-display text-xl tracking-[0.18em] text-[var(--brand-purple)] uppercase md:text-2xl">
                {pillar.category}
              </h3>

              <div className="mt-4 mb-6 flex items-center justify-center gap-3" aria-hidden>
                <span className="hairline w-14" />
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
                <span className="hairline w-14" />
              </div>

              <p className="max-w-[17rem] text-[0.95rem] leading-[1.9] text-foreground/80 md:text-base">
                {pillar.text}
              </p>

              <Link
                to={pillar.to}
                className="mt-8 font-display text-sm tracking-[0.2em] text-[var(--brand-purple)] uppercase transition-opacity hover:opacity-70 md:text-base"
              >
                {pillar.linkLabel} &rsaquo;
              </Link>
            </div>
          ))}
        </div>
      </section>

      <HomeClosing />
    </div>
  );
}

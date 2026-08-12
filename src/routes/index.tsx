import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hero from "@/assets/hero.jpg";
import { Wash } from "@/components/Wash";
import { Glyph, GlyphVeil } from "@/components/Glyph";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Written Beyond Belief — Energy Healing with Maggie" },
      {
        name: "description",
        content:
          "Intuitively guided energy healing sessions in London. Explore, expand and create from the wisdom within you.",
      },
      { property: "og:title", content: "Written Beyond Belief — Energy Healing with Maggie" },
      {
        property: "og:description",
        content:
          "Intuitively guided energy healing sessions in London. Explore, expand and create from the wisdom within you.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="page-wash min-h-screen">
      <Wash tone="blue" secondTone="blue-yellow" />
      <div className="watermark-layer" aria-hidden />

      <Header overlay />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[68svh] max-h-[720px] min-h-[540px] w-full overflow-hidden">
          <img
            src={hero}
            alt="A woman standing on a clifftop above the sea with her arms open to the sky"
            className="h-full w-full object-cover object-[48%_center]"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(18,35,41,0.02) 35%, rgba(17,38,45,0.18) 55%, rgba(11,31,38,0.56) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 67%, color-mix(in oklab, var(--background) 35%, transparent) 83%, var(--background) 100%)",
            }}
          />

          <div className="absolute inset-0 pt-24 md:flex md:items-center md:pt-20">
            <div className="mx-auto h-full w-full max-w-[1440px] px-6 md:h-auto">
              <div className="rise-in mx-auto flex h-full max-w-lg flex-col px-3 pt-2 pb-32 text-center md:mr-0 md:ml-auto md:block md:h-auto md:max-w-xl md:px-0 md:py-0">
                <h1 className="font-display text-[1.65rem] leading-[1.13] text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] md:text-[2.3rem]">
                  Have you ever wondered what holds you back from creating from the wisdom within
                  you?
                </h1>

                <div className="mt-5 flex items-center justify-center gap-3 md:my-6">
                  <span className="hairline w-20 md:w-28" />
                  <span className="text-lg leading-none text-[var(--gold)]" aria-hidden>
                    ♥
                  </span>
                  <span className="hairline w-20 md:w-28" />
                </div>

                <div className="mt-auto md:mt-0">
                  <p className="font-display text-[1.35rem] leading-snug text-white/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-[1.7rem]">
                    What would it feel to remember the path that is truly yours?
                  </p>

                  <div className="mt-7 flex justify-center md:mt-8">
                    <Link
                      to="/work"
                      className="inline-flex min-w-64 items-center justify-center rounded-sm bg-primary/85 px-10 py-4 text-xs font-medium tracking-[0.18em] text-primary-foreground uppercase backdrop-blur-sm transition-colors hover:bg-primary"
                    >
                      Begin your journey
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Mission */}
      <section className="relative overflow-hidden px-6 pt-4 pb-8 md:pt-12">
        <GlyphVeil
          name="mandala"
          opacity={0.07}
          className="top-1/2 left-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2"
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-5">
            <span className="hairline w-16" />
            {/* <Glyph name="lotus" opacity={0.5} className="h-10 w-14" /> */}
            <span className="hairline w-16" />
          </div>

          <h2 className="font-display text-4xl text-primary md:text-6xl">My mission</h2>

          <div className="mt-6 mb-12 flex items-center justify-center gap-4">
            <span className="hairline w-24" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            <span className="hairline w-24" />
          </div>

          <div className="space-y-8 text-base leading-[2] text-muted-foreground md:text-lg">
            <p>
              My mission is to support others in connecting with themselves. I am devoted to helping
              others <Em>restore balance</Em>, <Em>harmonise</Em> with their inner needs, and create
              from the guidance of their unique essence and wisdom of a knowing heart.
            </p>
            <p>
              I am dedicated to the path of expansion, where <Em>creativity ignites</Em> from a
              place of abundance and where life unfolds through the recognition that each of us
              holds <Em>all answers and possibilities</Em> within.
            </p>
            <p>
              Each step on this work is guided by <Em>integrity</Em>, <Em>authenticity</Em> and{" "}
              <Em>gratitude</Em> — an honouring of the uniqueness of each individual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section className="relative overflow-hidden px-6 pt-24">
        <GlyphVeil
          name="seed-of-life"
          opacity={0.08}
          className="-top-16 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          {/* <Glyph name="lotus-bud" opacity={0.45} className="mx-auto mb-10 h-24 w-auto" /> */}
          <p className="font-display text-2xl leading-relaxed text-foreground md:text-3xl">
            If you feel called to this work, you are warmly invited to book a session.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/work"
              className="rounded-sm bg-primary px-9 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              The work I offer
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-[var(--gold)]/60 px-9 py-4 text-xs tracking-[0.22em] text-foreground uppercase transition-colors hover:bg-secondary"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Em({ children }: { children: React.ReactNode }) {
  return <span className="text-primary">{children}</span>;
}

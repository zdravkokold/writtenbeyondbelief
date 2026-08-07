import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import hero from "@/assets/hero.jpg.asset.json";
import { Wash } from "@/components/Wash";

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
      <Wash tone="yellow-white" />
      <div className="watermark-layer" aria-hidden />
      <Header />

      {/* Hero */}
      <section className="relative">
        <div className="relative h-[68vh] max-h-[720px] min-h-[480px] w-full overflow-hidden">
          <img
            src={hero.url}
            alt="A woman standing on a clifftop above the sea with her arms open to the sky"
            className="feather-bottom h-full w-full object-cover object-center"
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 48% 58% at 76% 50%, rgba(40,48,44,0.40), transparent 72%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{ background: "var(--gradient-veil)" }}
          />

          <div className="absolute inset-0 flex items-center">
            <div className="mx-auto w-full max-w-6xl px-6">
              <div className="rise-in mx-auto max-w-lg text-center md:mr-[5%] md:ml-auto">
                <h1 className="font-display text-[1.75rem] leading-snug text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.45)] md:text-[2.35rem]">

                  Have you ever wondered what holds you back from creating from the
                  wisdom within you?
                </h1>

                <div className="my-8 flex items-center justify-center gap-4">
                  <span className="hairline w-20 md:w-24" />
                  <span className="text-[var(--gold)]">♥</span>
                  <span className="hairline w-20 md:w-24" />
                </div>

                <p className="font-display text-xl leading-relaxed text-white/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-2xl">
                  What would it feel to remember the path that is truly yours?
                </p>
                <p className="mt-4 text-sm leading-relaxed text-white/85 drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)] md:text-base">
                  Let us journey together into the space where The Self is explored
                  beyond existing beliefs.
                </p>

                <div className="mt-10 flex justify-center">
                  <Link
                    to="/work"
                    className="inline-flex items-center justify-center rounded-sm bg-primary/90 px-10 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase backdrop-blur-sm transition-colors hover:bg-primary"
                  >
                    Begin your journey
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Mission */}
      <section className="relative px-6 pt-4 pb-8 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex items-center justify-center gap-5">
            <span className="hairline w-16" />
            <LotusMark />
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
              My mission is to support others in connecting with themselves. I am
              devoted to helping others <Em>restore balance</Em>, <Em>harmonise</Em>{" "}
              with their inner needs, and create from the guidance of their unique
              essence and wisdom of a knowing heart.
            </p>
            <p>
              I am dedicated to the path of expansion, where <Em>creativity ignites</Em>{" "}
              from a place of abundance and where life unfolds through the recognition
              that each of us holds <Em>all answers and possibilities</Em> within.
            </p>
            <p>
              Each step on this work is guided by <Em>integrity</Em>,{" "}
              <Em>authenticity</Em> and <Em>gratitude</Em> — an honouring of the
              uniqueness of each individual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Invitation */}
      <section className="px-6 pt-24">
        <div className="mx-auto max-w-2xl text-center">
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

function LotusMark() {
  return (
    <svg
      width="40"
      height="26"
      viewBox="0 0 40 26"
      fill="none"
      stroke="var(--gold)"
      strokeWidth="1"
      aria-hidden
    >
      <path d="M20 3c3 4 4 8 4 11s-1.6 5.5-4 8c-2.4-2.5-4-5-4-8s1-7 4-11z" />
      <path d="M20 22c-3.5-1-6.5-3-8.5-6-1-1.5-1.6-3.2-1.8-5 3 .4 5.8 1.8 8 4" />
      <path d="M20 22c3.5-1 6.5-3 8.5-6 1-1.5 1.6-3.2 1.8-5-3 .4-5.8 1.8-8 4" />
    </svg>
  );
}

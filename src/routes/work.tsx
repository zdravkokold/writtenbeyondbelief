import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wash } from "@/components/Wash";
import { Glyph, GlyphVeil } from "@/components/Glyph";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "The Work I Offer — Energy Healing Sessions | Written Beyond Belief" },
      {
        name: "description",
        content:
          "Intuitively guided energy healing sessions near London Bridge. 45 minutes, £75 — space for clarity, release and deeper connection to yourself.",
      },
      { property: "og:title", content: "The Work I Offer | Written Beyond Belief" },
      {
        property: "og:description",
        content: "Intuitively guided energy healing sessions near London Bridge. 45 minutes, £75.",
      },
    ],
  }),
  component: Work,
});

const supports = [
  "Feeling mentally overwhelmed, disconnected, or stuck in overthinking",
  "Moving through change, transition, or emotional intensity",
  "Seeking a deeper sense of clarity, presence, and inner balance",
  "Longing to reconnect with your body, intuition, and inner guidance",
  "Ready to release old patterns and create space for something new",
  "Curious about exploring healing through breath, awareness, and embodied practice",
];

const experience = [
  "A sense of lightness in body and mind, with reduced mental fog",
  "Deep rest, calm, and inner stillness",
  "Healing on both physical and emotional levels",
  "Awakening of self-awareness, intuition, and creativity",
  "Reconnection with inner joy, confidence, and self-trust",
  "A more harmonious flow of energy throughout the system",
  "Feeling grounded, centred, and present in the body",
  "Greater clarity, with reduced overthinking and mental overwhelm",
  "Release of emotional blockages and old patterns",
  "Deeper understanding of your needs and desires",
  "A sense of empowerment to create meaningful change in your life",
];

function Work() {
  return (
    <div className="page-wash min-h-screen">
      <Wash tone="yellow" />
      <div className="watermark-layer" aria-hidden />
      <Header />

      <main className="page-enter relative mx-auto max-w-3xl px-6 pt-16 md:pt-24">
        <GlyphVeil
          name="mandala"
          opacity={0.06}
          className="-top-28 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2"
        />
        <header className="relative text-center">
          <span className="mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" />
          <h1 className="font-display text-4xl text-primary md:text-6xl">The work I offer</h1>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="hairline w-24" />
            {/* <Glyph name="lotus" opacity={0.5} className="h-9 w-13" /> */}
            <span className="hairline w-24" />
          </div>
        </header>

        <div className="mt-14 space-y-8 text-center text-base leading-[2] text-muted-foreground md:text-lg">
          <p>
            Each healing session is intuitively guided and shaped around what you need in the
            moment.
          </p>
          <p>
            Together, we explore how you are feeling physically, mentally, emotionally and
            energetically. Depending on what arises, I support you using different energy healing
            techniques.
          </p>
          <p>
            The intention behind each session is to create space for clarity, release,
            transformation and deeper connection to yourself.
          </p>
        </div>

        <Section title="What this work supports" items={supports} />
        <Section title="In a session, you may experience" items={experience} />

        {/* Offering card */}
        <section className="mt-24">
          <div className="mx-auto max-w-xl rounded-sm border border-[var(--gold)]/40 bg-card/70 px-8 py-12 text-center shadow-[var(--shadow-soft)] backdrop-blur-sm">
            <p className="text-xs tracking-[0.28em] text-muted-foreground uppercase">
              Healing session
            </p>
            <p className="font-display mt-5 text-5xl text-primary">£75</p>
            <p className="mt-3 text-muted-foreground">45 minutes</p>
            <span className="hairline mx-auto my-7 block w-24" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Appointments near to London Bridge station
            </p>
          </div>

          <p className="font-display mt-16 text-center text-2xl leading-relaxed text-foreground md:text-3xl">
            If you feel called to this work, you are warmly invited to book a session.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="rounded-sm bg-primary px-10 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Book a session
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-24">
      <h2 className="font-display text-center text-3xl text-primary md:text-4xl">{title}</h2>
      <span className="hairline mx-auto mt-6 mb-10 block w-32" />
      <ul className="mx-auto max-w-2xl space-y-5">
        {items.map((item) => (
          <li key={item} className="flex gap-4 leading-[1.9] text-muted-foreground">
            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--gold)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

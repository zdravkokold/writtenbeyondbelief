import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wash } from "@/components/Wash";
import { Glyph, GlyphVeil } from "@/components/Glyph";
import doors from "@/assets/about-doors.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Maggie | Written Beyond Belief" },
      {
        name: "description",
        content:
          "Maggie's journey from contemporary dance to yoga teaching and Jikochiyu healing, and the presence she brings to every session.",
      },
      { property: "og:title", content: "About Me — Maggie | Written Beyond Belief" },
      {
        property: "og:description",
        content: "Maggie's journey from contemporary dance to yoga teaching and Jikochiyu healing.",
      },
    ],
  }),
  component: About,
});

const paragraphs = [
  "Hey, I'm Maggie, and I'm deeply grateful for your presence here. I would love to share a little of my journey with you. If something within these words resonates, perhaps our paths are meant to meet.",
  "I discovered Contemporary Dance in childhood and continued this journey from the age of five till I was seventeen. During those years, I experienced movement as a powerful way to express, release and transform.",
  "From my love of movement, alongside inner enquiry supported by daily reflection and journaling, my path into Yoga naturally unfolded. In 2021, I felt called to become a Yoga Teacher, and that same year I completed the 200-hour yoga teacher training.",
  "My practice and teachings are rooted in an understanding of Yoga as a doorway to subtle discoveries about ourselves, that arise within us while we move, breathe and listen to the different layers of The Self.",
  "A deeper exploration of breath and energy led me to study with Yumiko Asakura, a spiritual teacher and far descendent of Japanese Samurai linage. In July 2025, I completed a two-years course on her self-created healing methods, Jikochiyu.",
  "As a healer, my work is guided by acknowledgement, acceptance and transformation. I hold a space for others to reconnect with themselves, listen inwardly and heal through the wisdom that already lives within.",
];

function About() {
  return (
    <div className="page-wash min-h-screen">
      <Wash tone="pink-purple" />
      <div className="watermark-layer" aria-hidden />
      <Header />

      <main className="page-enter mx-auto max-w-3xl px-6 pt-16 md:pt-24">
        <header className="relative text-center">
          <GlyphVeil
            name="seed-of-life"
            opacity={0.08}
            className="-top-24 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2"
          />
          <span className="mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" />
          <h1 className="font-display text-4xl text-primary md:text-6xl">About me</h1>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="hairline w-24" />
            <Glyph name="lotus-bud" opacity={0.5} className="h-14 w-auto" />
            <span className="hairline w-24" />
          </div>
        </header>

        <figure className="mx-auto mt-14 max-w-md">
          <img
            src={doors}
            alt="Maggie sitting cross-legged in front of an ornately carved Nepalese temple door"
            className="feather-soft h-auto w-full object-cover"
            loading="lazy"
          />
        </figure>

        <div className="mt-16 space-y-8 text-center text-base leading-[2] text-muted-foreground md:text-lg">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            to="/work"
            className="inline-flex rounded-sm bg-primary px-9 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            The work I offer
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

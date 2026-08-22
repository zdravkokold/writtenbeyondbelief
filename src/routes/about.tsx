import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wash } from "@/components/Wash";
import { Logo } from "@/components/Logo";
import { Glyph } from "@/components/Glyph";
import { PageOrnaments } from "@/components/PageOrnaments";
import doors from "@/assets/about-doors.jpg";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `The Person Behind Written Beyond Belief | ${SITE_NAME}`,
      },
      {
        name: "description",
        content:
          "Maggie's journey from contemporary dance to yoga teaching and Jikochiyu healing, and the presence she brings to every session.",
      },
      {
        property: "og:title",
        content: `The Person Behind Written Beyond Belief | ${SITE_NAME}`,
      },
      {
        property: "og:description",
        content: "Maggie's journey from contemporary dance to yoga teaching and Jikochiyu healing.",
      },
      { property: "og:url", content: absoluteUrl("/about") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: About,
});

const paragraphs = [
  "Hey, I'm Maggie, and I'm deeply grateful for your presence here. I would love to share a little of my journey with you. If something within these words resonates, perhaps our paths are meant to meet.",
  "I discovered Contemporary Dance in childhood and continued this journey from the age of five untill I was seventeen. During those years, I experienced movement as a powerful way to express, release and transform.",
  "From my love of movement, alongside inner enquiry supported by daily reflection and journaling, my path into Yoga naturally unfolded. In 2021, I felt called to become a Yoga Teacher, and that same year I completed the 200-hour yoga teacher training.",
  "My practice and teachings are rooted in an understanding of Yoga as a doorway to subtle discoveries about ourselves that arise within us while we move, breathe and listen to the different layers of The Self.",
  "A deeper exploration of breath and energy led me to study with Yumiko Asakura, a spiritual teacher and far descendant of Japanese Samurai lineage. In July 2025, I completed a two-years course in her self-created healing methods, Jikochiyu.",
  "As a healer, my work is guided by acknowledgement, acceptance and transformation. I hold a space for others to reconnect with themselves, listen inwardly and heal through the wisdom that already lives within.",
];

function About() {
  return (
    <div className="page-wash min-h-screen">
      <Wash tone="yellow" />
      <PageOrnaments page="about" />
      <Header />

      <main className="page-enter mx-auto max-w-4xl px-6 pt-16 pb-8 md:pt-24">
        <header className="text-center">
          <Logo feather={false} className="mx-auto h-auto w-[min(100%,28rem)] md:w-[min(100%,31rem)]" />
          <h1 className="font-display mt-10 text-3xl leading-tight text-[var(--brand-purple)] md:text-5xl">
            The Person Behind Written Beyond Belief
          </h1>
          <Glyph name="north-star" plain opacity={0.9} className="mx-auto mt-5 h-8 w-8" />
        </header>

        <div className="mt-14 space-y-8 text-center text-base leading-[2] text-muted-foreground md:text-lg">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>

        <figure className="mx-auto mt-20 w-[min(100%,20rem)] pb-8">
          <img
            src={doors}
            alt="Maggie sitting cross-legged in front of an ornately carved Nepalese temple door"
            className="w-full h-full object-cover rounded-none"
            loading="lazy"
          />
        </figure>
      </main>

      <Footer />
    </div>
  );
}

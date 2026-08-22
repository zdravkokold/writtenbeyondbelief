import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wash } from "@/components/Wash";
import { PageOrnaments } from "@/components/PageOrnaments";
import { SectionDivider } from "@/components/SectionDivider";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import starBullet from "@/assets/star-bulletpoint.svg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      {
        title: `The Work I Offer — Energy Healing Sessions | ${SITE_NAME}`,
      },
      {
        name: "description",
        content:
          "Intuitively guided energy healing sessions near London Bridge. In-person from £75, online from £45.",
      },
      { property: "og:title", content: `The Work I Offer | ${SITE_NAME}` },
      {
        property: "og:description",
        content: "Intuitively guided energy healing sessions near London Bridge.",
      },
      { property: "og:url", content: absoluteUrl("/work") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/work") }],
  }),
  component: Work,
});

const creates = [
  "Reconnecting with yourself and your inner guidance",
  "Becoming aware of the stories and beliefs that shape how you see yourself",
  "Creating space for curiosity, openness and possibility",
  "Moving through change with greater presence, clarity and inner balance",
  "Releasing what no longer serves you and opening to what wants to emerge",
  "Exploring your body, intuition and awareness as pathways to deeper discovery",
  "Stepping into your own power and allowing your creative energy to flow",
];

function Work() {
  return (
    <div className="page-wash min-h-screen">
      <Wash tone="yellow" />
      <PageOrnaments page="work" />
      <Header />

      <main className="page-enter relative mx-auto max-w-3xl px-6 pt-16 md:pt-24">
        <header className="text-center">
          <span className="mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" />
          <h1 className="font-display text-4xl text-primary md:text-6xl">The work I offer</h1>
          <SectionDivider />
        </header>

        <div className="mt-12 space-y-8 text-center text-base leading-[2] text-muted-foreground md:text-lg">
          <p>
            Each healing session is intuitively guided and shaped around what you need in the
            moment.
          </p>
          <p>
            Together, we explore how you are feeling physically, mentally, emotionally and
            energetically. Depending on what arises, I support you with different energy healing
            techniques.
          </p>
          <p>
            The intention behind each session is to create space for curiosity, openness and
            transformation — to explore beyond beliefs, discover the possibilities beyond them, step
            into your power and ignite creative flow within yourself and into the world.
          </p>
        </div>

        <section className="mt-20">
          <h2 className="font-display text-center text-2xl text-primary md:text-4xl">
            What We Can Create
          </h2>
          <span className="hairline mx-auto mt-6 mb-10 block w-32" />
          <ul className="mx-auto max-w-2xl space-y-5">
            {creates.map((item) => (
              <li key={item} className="flex gap-4 leading-[1.9] text-muted-foreground">
                <span
                  aria-hidden
                  className="mt-1.5 h-5 w-5 shrink-0 bg-[var(--gold)]"
                  style={{
                    WebkitMaskImage: `url("${starBullet}")`,
                    maskImage: `url("${starBullet}")`,
                    WebkitMaskRepeat: "no-repeat",
                    maskRepeat: "no-repeat",
                    WebkitMaskPosition: "center",
                    maskPosition: "center",
                    WebkitMaskSize: "contain",
                    maskSize: "contain",
                  }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-20 space-y-8 text-center text-base leading-[2] text-muted-foreground md:text-lg">
          <p>Every journey is unique, and so is each healing session.</p>
          <p>
            In-person sessions begin at £75, while online sessions begin at £45. The price is shaped
            by the nature of your session and the healing techniques aligned with your needs.
          </p>
          <p>
            Your personalised session plan and corresponding price will be shared with you before
            your first session.
          </p>
          <p>In-person sessions are held near London Bridge Station.</p>
        </section>

        <div className="mt-16 flex justify-center pb-8">
          <Link
            to="/contact"
            className="rounded-sm bg-primary px-10 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Get in touch
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

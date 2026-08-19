import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useForm, ValidationError } from "@formspree/react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Wash } from "@/components/Wash";
import { PageOrnaments } from "@/components/PageOrnaments";
import { SectionDivider } from "@/components/SectionDivider";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${SITE_NAME}` },
      {
        name: "description",
        content:
          "Get in touch with Maggie to enquire about a healing session or ask a question before booking.",
      },
      { property: "og:title", content: `Contact — ${SITE_NAME}` },
      {
        property: "og:description",
        content: "Get in touch with Maggie to enquire about a healing session.",
      },
      { property: "og:url", content: absoluteUrl("/contact") },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: Contact,
});

const EMAIL = "Maggie@writtenbeyondbelief.com";
const FORMSPREE_ID = "mljrbqol";

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please write a short message").max(2000),
});

function Contact() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});

    await handleSubmit(e);
    toast.success("Your message has been sent", {
      description: "Maggie will reply to you as soon as she can.",
    });
  }

  if (state.succeeded) {
    return (
      <div className="page-wash min-h-screen">
        <Wash tone="yellow" />
        <PageOrnaments page="contact" />
        <div className="watermark-layer" aria-hidden />
        <Header />

        <main className="page-enter mx-auto flex max-w-2xl flex-col items-center justify-center px-6 pt-24 text-center md:pt-36">
          <span className="mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" />
          <h1 className="font-display text-4xl text-primary md:text-6xl">Thank you</h1>
          <p className="mt-8 leading-[1.9] text-muted-foreground">
            Your message has been sent. Maggie will read your enquiry personally and reply with
            care.
          </p>
          <a
            href="/"
            className="mt-10 rounded-sm bg-primary px-12 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
          >
            Return home
          </a>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="page-wash min-h-screen">
      <Wash tone="yellow" />
      <PageOrnaments page="contact" />
      <div className="watermark-layer" aria-hidden />
      <Header />

      <main className="page-enter mx-auto max-w-2xl px-6 pt-16 md:pt-24">
        <header className="text-center">
          <span className="mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" />
          <h1 className="font-display text-4xl text-primary md:text-6xl">Contact</h1>
          <SectionDivider />
          <p className="mt-10 leading-[1.9] text-muted-foreground">
            If you have a question, or feel called to book a session, please leave a message below.
            I read every enquiry personally and will reply with care.
          </p>
        </header>

        <form onSubmit={onSubmit} noValidate className="mt-14 space-y-8">
          <Field label="Your name" name="name" error={errors["name"]} formErrors={state.errors} />
          <Field
            label="Email address"
            name="email"
            type="email"
            error={errors["email"]}
            formErrors={state.errors}
          />
          <Field
            label="Telephone (optional)"
            name="phone"
            type="tel"
            error={errors["phone"]}
            formErrors={state.errors}
          />

          <div>
            <label
              htmlFor="message"
              className="mb-3 block text-xs tracking-[0.2em] text-muted-foreground uppercase"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              maxLength={2000}
              className="w-full resize-none rounded-sm border-0 border-b border-input bg-card/50 px-4 py-3 leading-relaxed outline-none transition-colors focus:border-[var(--gold)]"
            />
            {errors["message"] && <ErrorText>{errors["message"]}</ErrorText>}
            <ValidationError
              field="message"
              errors={state.errors}
              className="mt-2 text-sm text-destructive"
            />
          </div>

          <ValidationError errors={state.errors} className="text-sm text-destructive" />

          <div className="pt-4 text-center">
            <button
              type="submit"
              disabled={state.submitting}
              className="rounded-sm bg-primary px-12 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {state.submitting ? "Sending..." : "Send message"}
            </button>
          </div>
        </form>

        <div className="mt-20 text-center">
          <span className="hairline mx-auto mb-10 block w-32" />
          <p className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Or write to me directly
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="font-display mt-4 inline-block text-xl text-foreground transition-opacity hover:opacity-70"
          >
            {EMAIL}
          </a>
          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            Sessions take place near London Bridge station, London, United Kingdom.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  formErrors,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
  formErrors: ReturnType<typeof useForm>[0]["errors"];
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-xs tracking-[0.2em] text-muted-foreground uppercase"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        className="w-full rounded-sm border-0 border-b border-input bg-card/50 px-4 py-3 outline-none transition-colors focus:border-[var(--gold)]"
      />
      {error && <ErrorText>{error}</ErrorText>}
      <ValidationError field={name} errors={formErrors} className="mt-2 text-sm text-destructive" />
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-destructive">{children}</p>;
}

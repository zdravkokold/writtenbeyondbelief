import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Written Beyond Belief" },
      {
        name: "description",
        content:
          "Get in touch with Maggie to enquire about a healing session or ask a question before booking.",
      },
      { property: "og:title", content: "Contact — Written Beyond Belief" },
      {
        property: "og:description",
        content: "Get in touch with Maggie to enquire about a healing session.",
      },
    ],
  }),
  component: Contact,
});

const EMAIL = "Maggie@writtenbeyondbelief.com";

const schema = z.object({
  name: z.string().trim().min(1, "Please share your name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  message: z.string().trim().min(1, "Please write a short message").max(2000),
});

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
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

    const { name, email, phone, message } = parsed.data;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    toast.success("Your email is ready to send", {
      description: "Your mail app will open with your message prepared.",
    });
  }

  return (
    <div className="page-wash min-h-screen">
      <div className="watermark-layer" aria-hidden />
      <Header />

      <main className="mx-auto max-w-2xl px-6 pt-16 md:pt-24">
        <header className="text-center">
          <span className="mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" />
          <h1 className="font-display text-4xl text-primary md:text-6xl">Contact</h1>
          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="hairline w-24" />
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
            <span className="hairline w-24" />
          </div>
          <p className="mt-10 leading-[1.9] text-muted-foreground">
            If you have a question, or feel called to book a session, please leave a
            message below. I read every enquiry personally and will reply with care.
          </p>
        </header>

        <form onSubmit={onSubmit} noValidate className="mt-14 space-y-8">
          <Field label="Your name" name="name" error={errors["name"]} />
          <Field label="Email address" name="email" type="email" error={errors["email"]} />
          <Field label="Telephone (optional)" name="phone" type="tel" error={errors["phone"]} />

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
          </div>

          <div className="pt-4 text-center">
            <button
              type="submit"
              className="rounded-sm bg-primary px-12 py-4 text-xs tracking-[0.22em] text-primary-foreground uppercase transition-opacity hover:opacity-90"
            >
              Send message
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
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
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
    </div>
  );
}

function ErrorText({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-sm text-destructive">{children}</p>;
}

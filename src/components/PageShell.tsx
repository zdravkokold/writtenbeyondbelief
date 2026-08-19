import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Wash } from "./Wash";
import { PageOrnaments } from "./PageOrnaments";

export function PageShell({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="page-wash min-h-screen">
      <Wash tone="yellow" />
      <PageOrnaments page="legal" />
      <Header />
      <main className="page-enter relative mx-auto max-w-3xl px-6 pt-16 pb-8 md:pt-24">
        <header className="relative mb-16 text-center">
          <span className="mx-auto mb-6 block h-px w-16 bg-[var(--gold)] opacity-60" />

          <h1 className="font-display text-4xl leading-tight text-primary md:text-6xl">{title}</h1>
          {intro && (
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">{intro}</p>
          )}
          <span className="mx-auto mt-8 block h-px w-16 bg-[var(--gold)] opacity-60" />
        </header>
        <div className="prose-zen">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

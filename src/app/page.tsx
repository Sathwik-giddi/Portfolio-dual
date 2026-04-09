import Link from "next/link";
import { ArrowRight, Shuffle } from "lucide-react";
import { ModeShell } from "@/components/portfolio-site/mode-shell";
import { portfolioContent } from "@/content/portfolio";

export default function Home() {
  return (
    <ModeShell mode="selector">
      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-16 sm:px-8 lg:px-10">
        <div className="w-full">
          <div className="mx-auto max-w-4xl text-center">
            <p className="section-kicker">{portfolioContent.identity.name}</p>
            <h1 className="mt-6 font-serif text-5xl leading-[0.94] tracking-[-0.05em] text-[var(--foreground)] sm:text-7xl">
              One portfolio.
              <span className="selector-highlight block">Two ways in.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-8 text-[var(--foreground)]/62">
              Choose the lens that matches what you need. Same work underneath.
              Different story. Different emphasis. Cleaner conversion.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-[1fr_1fr_0.55fr]">
            <Link href="/technical" className="selector-card selector-card-technical">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--foreground)]/42">
                Technical
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.04em] text-[var(--foreground)]">
                View Technical Portfolio
              </h2>
              <p className="mt-4 max-w-md text-[1rem] leading-8 text-[var(--foreground)]/60">
                For recruiters and engineering managers evaluating systems depth,
                architecture judgment, metrics, and technical execution.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                Enter technical mode <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link href="/freelance" className="selector-card selector-card-freelance">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--foreground)]/42">
                Freelance
              </p>
              <h2 className="mt-5 font-serif text-4xl tracking-[-0.04em] text-[var(--foreground)]">
                View Freelance Portfolio
              </h2>
              <p className="mt-4 max-w-md text-[1rem] leading-8 text-[var(--foreground)]/60">
                For founders and clients who need AI MVPs, polished product
                surfaces, dashboards, or internal tools shipped cleanly.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                Enter freelance mode <ArrowRight className="h-4 w-4" />
              </div>
            </Link>

            <Link href="/technical" className="selector-card selector-card-random">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--foreground)]/42">
                Surprise
              </p>
              <h2 className="mt-5 font-serif text-3xl tracking-[-0.04em] text-[var(--foreground)]">
                Surprise Me
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/56">
                Start with the sharper version first.
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                <Shuffle className="h-4 w-4" />
                Pick for me
              </div>
            </Link>
          </div>
        </div>
      </section>
    </ModeShell>
  );
}

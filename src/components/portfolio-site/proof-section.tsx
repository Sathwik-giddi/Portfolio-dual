import type { ProofPoint } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type ProofSectionProps = {
  proofPoints: ProofPoint[];
  hiringReasons: string[];
};

export function ProofSection({ proofPoints, hiringReasons }: ProofSectionProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="glass-panel rounded-[2rem] p-8">
          <SectionHeading
            kicker="Why Hire Me"
            title="Product sense, not just code."
            description="I care about how software feels, how fast teams can iterate, and how technical choices connect to business impact. That mix is what makes the portfolio more than a design exercise."
          />
        </Reveal>

        <Reveal delay={0.08} className="glass-panel rounded-[2rem] p-8">
          <div className="grid gap-5">
            {proofPoints.map((point) => (
              <div key={point.title} className="rounded-[1.35rem] border border-white/8 bg-black/10 p-5">
                <p className="text-lg font-medium text-[var(--foreground)]">{point.title}</p>
                <p className="mt-2 text-sm leading-7 text-white/60">{point.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="mt-8">
        <Reveal className="glass-panel rounded-[2rem] p-8">
          <p className="section-kicker">Hiring Signal</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {hiringReasons.map((reason) => (
              <div key={reason} className="rounded-[1.25rem] border border-white/8 bg-black/10 p-5 text-sm leading-7 text-white/60">
                {reason}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

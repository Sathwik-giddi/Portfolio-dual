import type { ProcessStep } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type ProcessSectionProps = {
  steps: ProcessStep[];
};

export function ProcessSection({ steps }: ProcessSectionProps) {
  return (
    <section id="process" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          kicker="Process"
          title="Clean process. Zero weird black-box energy."
          description="You see the work moving the whole time, from direction-setting to launch-ready polish."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * 0.08} className="process-card">
            <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent-strong)]/80">
              0{index + 1}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
              {step.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/60">
              {step.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

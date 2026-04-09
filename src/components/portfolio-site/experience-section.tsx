import type { ExperienceItem } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type ExperienceSectionProps = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: ExperienceSectionProps) {
  return (
    <section
      id="experience"
      className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10"
    >
      <Reveal>
        <SectionHeading
          kicker="Experience"
          title="Proof across startups, product work, and AI systems."
        />
      </Reveal>

      <div className="mt-14 space-y-6">
        {items.map((item, index) => (
          <Reveal key={item.title} delay={index * 0.08} className="timeline-card">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xl font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-base text-[var(--accent)]">{item.company}</p>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/66">
                  {item.detail}
                </p>
              </div>
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                {item.period}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import type { CaseStudy } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type CaseStudiesSectionProps = {
  studies: CaseStudy[];
};

export function CaseStudiesSection({ studies }: CaseStudiesSectionProps) {
  return (
    <section
      id="case-studies"
      className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10"
    >
      <Reveal>
        <SectionHeading
          kicker="Case Studies"
          title="The work reads better when the thinking is visible."
          description="This section is here for serious reviewers. It shows how I approach problem framing, systems design, and outcome-focused delivery."
        />
      </Reveal>

      <div className="mt-14 space-y-8">
        {studies.map((study, index) => (
          <Reveal key={study.title} delay={index * 0.08} className="glass-panel rounded-[2rem] p-8">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="section-kicker">{study.eyebrow}</p>
                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                  {study.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2">
                  {study.stack.map((item) => (
                    <span key={item} className="tag-chip text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                <div className="rounded-[1.35rem] border border-white/8 bg-black/10 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/40">Problem</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">{study.problem}</p>
                </div>
                <div className="rounded-[1.35rem] border border-white/8 bg-black/10 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/40">Build</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">{study.build}</p>
                </div>
                <div className="rounded-[1.35rem] border border-white/8 bg-black/10 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-white/40">Outcome</p>
                  <p className="mt-3 text-sm leading-7 text-white/60">{study.outcome}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

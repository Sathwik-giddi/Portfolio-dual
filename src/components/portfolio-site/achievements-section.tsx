import type { Achievement } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type AchievementsSectionProps = {
  items: Achievement[];
};

export function AchievementsSection({ items }: AchievementsSectionProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          kicker="Extra Signal"
          title="More than one good-looking homepage."
          description="This is the supporting evidence layer: open source, delivery history, hackathon performance, and the cross-stack range that makes the portfolio credible."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className="glass-panel rounded-[2rem] p-6"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]/80">
              {item.subtitle}
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[var(--foreground)]">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/65">{item.detail}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

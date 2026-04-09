import type { SkillGroup } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type SkillsSectionProps = {
  groups: SkillGroup[];
};

export function SkillsSection({ groups }: SkillsSectionProps) {
  return (
    <section id="skills" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          kicker="Toolbox"
          title="Structured skills, not a random keyword wall."
          description="The stack is organized by how I actually work: model systems, product engineering, and delivery infrastructure."
        />
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {groups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.08} className="glass-panel rounded-[2rem] p-7">
            <p className="text-xl font-semibold text-[var(--foreground)]">{group.title}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{group.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="tag-chip text-sm">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

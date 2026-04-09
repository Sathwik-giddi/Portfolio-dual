import Image from "next/image";
import type { FeaturedProject } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type ProjectsSectionProps = {
  projects: FeaturedProject[];
  mode?: "technical" | "freelance";
};

export function ProjectsSection({
  projects,
  mode = "technical",
}: ProjectsSectionProps) {
  return (
    <section id="work" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          kicker={mode === "technical" ? "Selected Work" : "Selected Work"}
          title={
            mode === "technical"
              ? "Projects that make the case fast."
              : "Work that clients can understand in under a minute."
          }
          description={
            mode === "technical"
              ? "Hiring managers skim. These projects are framed to show technical range, execution quality, and the ability to ship meaningful systems."
              : "Same underlying projects. Different framing. Focus on what was built, why it mattered, and what changed after."
          }
        />
      </Reveal>

      <div className="mt-14 grid gap-8 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08} className="project-card">
            <div className="relative overflow-hidden rounded-[1.4rem] border border-white/8">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={900}
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1218] via-transparent to-transparent" />
            </div>
            <div className="mt-6">
              <h3 className="text-[1.65rem] font-semibold tracking-[-0.03em] text-[var(--foreground)]">
                {project.title}
              </h3>
              <p className="mt-4 text-[0.98rem] leading-7 text-[var(--muted)]">
                {mode === "technical" ? project.summary : project.clientSummary}
              </p>
              <p
                className="mt-5 border-l pl-4 text-sm leading-6 text-[var(--muted)]"
                style={{ borderColor: "rgba(255, 144, 104, 0.35)" }}
              >
                {mode === "technical" ? project.outcome : project.clientOutcome}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

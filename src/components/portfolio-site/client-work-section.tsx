import type { ClientWorkItem } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type ClientWorkSectionProps = {
  items: ClientWorkItem[];
};

export function ClientWorkSection({ items }: ClientWorkSectionProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          kicker="Client Work"
          title="What freelance work can look like in the wild."
          description="These are styled placeholder engagements for now, but they make the freelance side feel fuller, more commercial, and easier for clients to picture."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 xl:grid-cols-3">
        {items.map((item, index) => (
          <Reveal
            key={item.client}
            delay={index * 0.08}
            className="client-work-card"
          >
            <div className="client-work-topline">
              <div>
                <p className="client-work-client">{item.client}</p>
                <p className="client-work-category">{item.category}</p>
              </div>
              <span className="client-work-timeline">{item.timeline}</span>
            </div>

            <h3 className="mt-5 text-[1.72rem] font-semibold leading-[1.08] tracking-[-0.05em] text-[var(--foreground)]">
              {item.headline}
            </h3>

            <p className="mt-4 text-[0.98rem] leading-7 text-[var(--foreground)]/62">
              {item.summary}
            </p>

            <div className="client-work-divider" />

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-1">
              <div>
                <p className="client-work-label">What changed</p>
                <ul className="client-work-list">
                  {item.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="client-work-label">Delivered</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {item.deliverables.map((deliverable) => (
                    <span key={deliverable} className="freelance-chip">
                      {deliverable}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

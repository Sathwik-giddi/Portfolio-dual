import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type OutcomeCard = {
  title: string;
  description: string;
};

type FreelanceOutcomesSectionProps = {
  items: OutcomeCard[];
};

export function FreelanceOutcomesSection({
  items,
}: FreelanceOutcomesSectionProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          kicker="Client Outcomes"
          title="What you actually get on the other side."
          description="Less waiting. Less friction. More momentum. These are the outcomes clients notice first."
        />
      </Reveal>

      <div className="freelance-outcomes-grid mt-14">
        {items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={index * 0.08}
            className={`freelance-outcome-card freelance-outcome-card-${index + 1}`}
          >
            <p className="freelance-card-index">0{index + 1}</p>
            <p className="text-[1.55rem] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
              {item.title}
            </p>
            <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/82">
              {item.description}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

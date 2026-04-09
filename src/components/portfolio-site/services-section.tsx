import type { ServiceItem } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type ServicesSectionProps = {
  services: ServiceItem[];
};

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          kicker="Services"
          title="Pick the lane. I’ll make it real."
          description="These are the projects people usually come to me for when they need speed, taste, and technical range in the same build."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.06} className="freelance-service-card">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="freelance-card-index">0{index + 1}</p>
                <p className="text-[1.5rem] font-semibold tracking-[-0.04em] text-[var(--foreground)]">
                  {service.title}
                </p>
                <p className="mt-2 text-sm text-[var(--accent-strong)]">{service.short}</p>
              </div>
              <span className="freelance-service-badge">Popular</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-[var(--foreground)]/62">
              {service.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.deliverables.map((item) => (
                <span key={item} className="freelance-chip">
                  {item}
                </span>
              ))}
            </div>
            <p className="freelance-service-result mt-5 text-sm leading-6 text-[var(--foreground)]/48">
              {service.result}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

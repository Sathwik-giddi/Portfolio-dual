import type { Testimonial } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";
import { SectionHeading } from "@/components/portfolio-site/section-heading";

type TestimonialsSectionProps = {
  items: Testimonial[];
};

export function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
      <Reveal>
        <SectionHeading
          kicker="Testimonials"
          title="The part clients usually remember."
          description="Replace these with the real quotes later. The layout and tone are already set up for stronger social proof."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {items.map((item, index) => (
          <Reveal key={item.name} delay={index * 0.08} className="testimonial-card">
            <div className="testimonial-avatar" aria-hidden="true">
              {item.name
                .split(" ")
                .map((chunk) => chunk[0])
                .join("")
                .slice(0, 2)}
            </div>
            <p className="testimonial-quote text-base leading-8">
              “{item.quote}”
            </p>
            <div className="testimonial-meta mt-8 border-t pt-5">
              <p className="text-base font-medium text-[var(--foreground)]">{item.name}</p>
              <p className="testimonial-role mt-1 text-sm">{item.role}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { Reveal } from "@/components/portfolio-site/reveal";

type TrustSectionProps = {
  differentiator: string;
  responseTime: string;
  workTypes: string[];
};

export function TrustSection({
  differentiator,
  responseTime,
  workTypes,
}: TrustSectionProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
      <Reveal className="glass-panel rounded-[2rem] p-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-kicker">Trust Signal</p>
            <h2 className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[var(--foreground)]">
              The reason this portfolio can sell to two audiences.
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-[var(--muted)]">
              {differentiator}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="technical-subpanel rounded-[1.35rem] p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]/72">
                Response
              </p>
              <p className="mt-3 text-xl font-semibold text-[var(--foreground)]">
                {responseTime}
              </p>
            </div>
            <div className="technical-subpanel rounded-[1.35rem] p-5">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--accent-strong)]/72">
                Best Fit
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {workTypes.map((item) => (
                  <span key={item} className="tag-chip text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

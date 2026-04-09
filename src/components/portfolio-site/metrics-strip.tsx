import type { Metric } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";

type MetricsStripProps = {
  metrics: Metric[];
};

export function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
      <div className="grid gap-4 md:grid-cols-4">
        {metrics.map((metric, index) => (
          <Reveal key={metric.label} delay={index * 0.08} className="metric-card">
            <p className="text-4xl font-semibold tracking-[-0.04em] text-white">
              {metric.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/78">{metric.label}</p>
            {metric.context ? (
              <p className="mt-2 text-xs leading-5 text-white/42">{metric.context}</p>
            ) : null}
          </Reveal>
        ))}
      </div>
    </section>
  );
}

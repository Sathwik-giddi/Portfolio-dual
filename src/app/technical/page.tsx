import { portfolioContent } from "@/content/portfolio";
import { ModeShell } from "@/components/portfolio-site/mode-shell";
import { PortfolioNav } from "@/components/portfolio-site/portfolio-nav";
import { HeroSection } from "@/components/portfolio-site/hero-section";
import { MetricsStrip } from "@/components/portfolio-site/metrics-strip";
import { CaseStudiesSection } from "@/components/portfolio-site/case-studies-section";
import { ProcessSection } from "@/components/portfolio-site/process-section";
import { SkillsSection } from "@/components/portfolio-site/skills-section";
import { ExperienceSection } from "@/components/portfolio-site/experience-section";
import { TrustSection } from "@/components/portfolio-site/trust-section";
import { ContactSection } from "@/components/portfolio-site/contact-section";

export default function TechnicalPage() {
  const {
    identity,
    socialLinks,
    metrics,
    caseStudies,
    skillGroups,
    experience,
    heroSignals,
    processSteps,
    trustSignals,
  } = portfolioContent;

  const nav = [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Process", href: "#process" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <ModeShell mode="technical">
      <section className="relative mx-auto min-h-screen w-full max-w-7xl px-6 pb-16 pt-6 sm:px-8 lg:px-10">
        <PortfolioNav
          name={identity.name}
          title={identity.title}
          nav={nav}
          resumeHref={identity.resumeHref}
        />
        <HeroSection
          availability={identity.availability}
          headline={identity.headline}
          description={identity.description}
          email={identity.email}
          socialLinks={socialLinks}
          location={identity.location}
          metrics={metrics}
          heroSignals={heroSignals}
        />
      </section>

      <MetricsStrip metrics={metrics} />
      <CaseStudiesSection studies={caseStudies} />
      <ProcessSection steps={processSteps} />
      <SkillsSection groups={skillGroups} />
      <ExperienceSection items={experience} />
      <TrustSection
        differentiator={identity.differentiator}
        responseTime={trustSignals.responseTime}
        workTypes={trustSignals.workTypes}
      />
      <ContactSection
        email={identity.email}
        socialLinks={socialLinks}
        resumeHref={identity.resumeHref}
      />
    </ModeShell>
  );
}

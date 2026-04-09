import { portfolioContent } from "@/content/portfolio";
import { ModeShell } from "@/components/portfolio-site/mode-shell";
import { PortfolioNav } from "@/components/portfolio-site/portfolio-nav";
import { FreelanceHeroSection } from "@/components/portfolio-site/freelance-hero-section";
import { FreelanceOutcomesSection } from "@/components/portfolio-site/freelance-outcomes-section";
import { ServicesSection } from "@/components/portfolio-site/services-section";
import { ClientWorkSection } from "@/components/portfolio-site/client-work-section";
import { ProjectsSection } from "@/components/portfolio-site/projects-section";
import { ProcessSection } from "@/components/portfolio-site/process-section";
import { TestimonialsSection } from "@/components/portfolio-site/testimonials-section";
import { TrustSection } from "@/components/portfolio-site/trust-section";
import { ContactSection } from "@/components/portfolio-site/contact-section";

export default function FreelancePage() {
  const {
    identity,
    socialLinks,
    featuredProjects,
    freelanceOutcomeCards,
    services,
    clientWork,
    processSteps,
    testimonials,
    trustSignals,
  } = portfolioContent;

  const nav = [
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <ModeShell mode="freelance">
      <section className="relative mx-auto min-h-screen w-full max-w-7xl px-6 pb-8 pt-6 sm:px-8 lg:px-10">
        <PortfolioNav
          name={identity.name}
          title={identity.title}
          nav={nav}
          resumeHref={identity.resumeHref}
          mode="freelance"
        />
        <FreelanceHeroSection
          availability={identity.availability}
          headline={identity.freelanceHeadline}
          description={identity.freelanceDescription}
          differentiator={identity.differentiator}
          email={identity.email}
          socialLinks={socialLinks}
        />
      </section>

      <FreelanceOutcomesSection items={freelanceOutcomeCards} />
      <ServicesSection services={services} />
      <ClientWorkSection items={clientWork} />
      <ProjectsSection projects={featuredProjects} mode="freelance" />
      <ProcessSection steps={processSteps} />
      <TestimonialsSection items={testimonials} />
      <TrustSection
        differentiator={identity.aboutStory}
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

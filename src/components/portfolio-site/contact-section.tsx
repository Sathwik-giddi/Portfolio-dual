import type { SocialLink } from "@/content/portfolio";
import { Reveal } from "@/components/portfolio-site/reveal";

type ContactSectionProps = {
  email: string;
  socialLinks: SocialLink[];
  resumeHref: string;
};

export function ContactSection({
  email,
  socialLinks,
  resumeHref,
}: ContactSectionProps) {
  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-28 pt-16 sm:px-8 lg:px-10">
      <Reveal className="glass-panel rounded-[2.5rem] px-8 py-12 sm:px-12">
        <p className="section-kicker">Contact</p>
        <h2 className="mt-4 max-w-3xl font-serif text-4xl tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl">
          If you want someone who can build and present well, let&apos;s talk.
        </h2>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">
          I&apos;m targeting roles where product instinct, frontend execution, and AI
          implementation all matter. That is the lane where I do my best work.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3.5 font-semibold text-[#101418]"
          >
            {email}
          </a>
          <a
            href={resumeHref}
            className="technical-subpanel inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[var(--foreground)]"
          >
            Download resume
          </a>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="tag-chip"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

"use client";

import { ArrowRight, Mail, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { SocialLink } from "@/content/portfolio";

type FreelanceHeroSectionProps = {
  availability: string;
  headline: string[];
  description: string;
  differentiator: string;
  email: string;
  socialLinks: SocialLink[];
};

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FreelanceHeroSection({
  availability,
  headline,
  description,
  differentiator,
  email,
  socialLinks,
}: FreelanceHeroSectionProps) {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 sm:px-8 lg:px-10">
      <div className="grid min-h-[calc(100vh-7rem)] items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-4xl freelance-hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easing }}
            className="freelance-status-pill inline-flex items-center gap-3 px-4 py-2 text-sm text-[var(--foreground)]/92"
          >
            <span className="freelance-status-dot" />
            {availability}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease: easing }}
            className="mt-8 max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.055em] text-[var(--foreground)] sm:text-7xl lg:text-[6.35rem]"
          >
            <span className="block">{headline[0]}</span>
            <span className="freelance-highlight block">{headline[1]}</span>
            <span className="block">{headline[2]}</span>
            <span className="block">{headline[3]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.18, ease: easing }}
            className="mt-8 max-w-2xl text-[1.06rem] leading-8 text-[var(--foreground)]/82"
          >
            {description}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.24, ease: easing }}
            className="freelance-differentiator mt-6 max-w-xl text-sm leading-7"
          >
            {differentiator}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.3, ease: easing }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="freelance-primary-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold"
            >
              Start a project <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="freelance-secondary-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-medium text-[var(--foreground)]"
            >
              See work <Mail className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.34, ease: easing }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <span className="freelance-mini-pill">
              <Sparkles className="h-3.5 w-3.5" />
              Fast-moving builds
            </span>
            <span className="freelance-mini-pill">
              <Star className="h-3.5 w-3.5" />
              Founder-friendly comms
            </span>
            <span className="freelance-mini-pill">
              <Mail className="h-3.5 w-3.5" />
              AI + full-stack delivery
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18, ease: easing }}
          className="freelance-hero-montage"
        >
          <div className="freelance-hero-panel freelance-hero-panel-main">
            <div className="freelance-panel-glow" />
            <div className="freelance-panel-badge">Freelance Mode</div>
            <p className="section-kicker">Built For</p>
            <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.05em] text-[var(--foreground)] sm:text-[2.35rem]">
              Founders who want speed, taste, and zero messy handoff energy.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--foreground)]/78">
              AI MVPs, dashboards, automation flows, and product surfaces that feel
              good before the first demo even starts.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="freelance-kpi-card">
                <span className="freelance-kpi-label">Launch pace</span>
                <strong>10 days</strong>
                <p>Fast first version for ideas that need proof, not theory.</p>
              </div>
              <div className="freelance-kpi-card">
                <span className="freelance-kpi-label">Client rhythm</span>
                <strong>Async-friendly</strong>
                <p>Clear updates, working previews, and low-drama execution.</p>
              </div>
            </div>
          </div>

          <div className="freelance-montage-row">
            <div className="freelance-hero-panel freelance-hero-panel-mini">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--foreground)]/62">
                Reply time
              </p>
              <p className="mt-3 text-2xl font-semibold text-[var(--foreground)]">
                24–48 hrs
              </p>
            </div>
            <div className="freelance-hero-panel freelance-hero-panel-list">
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--foreground)]/62">
                Usually hired for
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="freelance-chip">AI MVPs</span>
                <span className="freelance-chip">Dashboards</span>
                <span className="freelance-chip">Automation</span>
                <span className="freelance-chip">Internal tools</span>
              </div>
            </div>
          </div>

          <div className="freelance-proof-strip">
            <div>
              <span>Feels premium</span>
              <strong>without losing speed</strong>
            </div>
            <div>
              <span>Technical enough</span>
              <strong>to survive real use</strong>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-[var(--foreground)]/82">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="freelance-social-pill"
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

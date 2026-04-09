"use client";

import { ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import type { HeroSignal, Metric, SocialLink } from "@/content/portfolio";

type HeroSectionProps = {
  availability: string;
  headline: string[];
  description: string;
  email: string;
  socialLinks: SocialLink[];
  location: string;
  metrics: Metric[];
  heroSignals: HeroSignal[];
};

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function HeroSection({
  availability,
  headline,
  description,
  email,
  socialLinks,
  location,
  metrics,
  heroSignals,
}: HeroSectionProps) {
  return (
    <div className="relative z-10 grid min-h-[calc(100vh-7rem)] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: easing }}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#e7ddcf]/78 backdrop-blur-md"
        >
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent)] shadow-[0_0_18px_rgba(255,144,104,0.45)]" />
          {availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: easing }}
          className="mt-8 max-w-5xl font-serif text-5xl leading-[0.9] tracking-[-0.055em] text-[var(--foreground)] sm:text-7xl lg:text-[6.6rem]"
        >
          <span className="block">{headline[0]}</span>
          <span className="hero-highlight block">{headline[1]}</span>
          <span className="block">{headline[2]}</span>
          <span className="block">{headline[3]}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: easing }}
          className="mt-8 max-w-2xl text-[1.04rem] leading-8 text-[#f3eadb]/66 sm:text-[1.1rem]"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.42, ease: easing }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="hero-primary-button inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-base font-semibold transition-transform hover:-translate-y-0.5"
          >
            See selected work <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/4 px-6 py-3.5 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-white/9"
          >
            Reach out <Mail className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52, ease: easing }}
          className="mt-10 flex flex-wrap items-center gap-3 text-sm text-[#e7ddcf]/64"
        >
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/8 px-4 py-2 hover:bg-white/6"
            >
              {link.label}
            </a>
          ))}
          <span className="rounded-full border border-white/8 px-4 py-2">{location}</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.85, delay: 0.3, ease: easing }}
        className="relative"
      >
        <div className="hero-signal-board">
          <div className="signal-panel signal-panel-main">
            <div className="signal-board-header">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/36">
                  Hiring snapshot
                </p>
                <p className="mt-2 text-[1.85rem] font-medium tracking-[-0.03em] text-[#f5ede1]">
                  Product-minded AI engineer
                </p>
              </div>
              <div className="signal-fit-pill">Strong match for high-agency teams</div>
            </div>

            <div className="signal-mode-card">
              <div className="signal-chip-label">Operating mode</div>
              <p className="mt-3 text-lg font-medium leading-snug text-[#f4ead9]">
                Freelance + startup + hackathon pressure
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.48 + index * 0.08, ease: easing }}
                  className="signal-metric-card"
                >
                  <div className="signal-metric-line" />
                  <p className="text-4xl font-semibold tracking-[-0.04em] text-white">
                    {metric.value}
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#f1e4d2]/86">{metric.label}</p>
                  {metric.context ? (
                    <p className="mt-2 text-sm leading-6 text-white/42">{metric.context}</p>
                  ) : null}
                </motion.div>
              ))}
            </div>

            <div className="signal-insight-panel">
              <div className="flex items-center gap-3">
                <div className="signal-icon-wrap">
                  <span className="signal-icon-dot" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.24em] text-white/35">Signal</p>
                  <p className="mt-2 text-xl font-medium text-[#f6ecde]">
                    AI projects with measurable outcomes
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {heroSignals.map((signal, index) => (
                  <motion.div
                    key={signal.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.92 + index * 0.08, ease: easing }}
                    className="signal-compact-card"
                  >
                    <div className="signal-row-label">{signal.label}</div>
                    <div className="signal-row-value">{signal.value}</div>
                    <div className="signal-row-note">{signal.note}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NavItem } from "@/content/portfolio";

type PortfolioNavProps = {
  name: string;
  title: string;
  nav: NavItem[];
  resumeHref: string;
  mode?: "technical" | "freelance";
};

export function PortfolioNav({
  name,
  title,
  nav,
  resumeHref,
  mode = "technical",
}: PortfolioNavProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`glass-panel sticky top-4 z-30 mx-auto flex w-full max-w-6xl flex-col gap-4 rounded-[1.75rem] px-5 py-3.5 sm:top-5 sm:flex-row sm:items-center sm:justify-between sm:rounded-full sm:px-6 ${
        mode === "freelance" ? "portfolio-nav-freelance" : "portfolio-nav-technical"
      }`}
    >
      <div className="min-w-0">
        <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[var(--muted)]">{name}</p>
        <p className="mt-1 text-[0.98rem] text-[var(--foreground)]">{title}</p>
      </div>
      <div className="flex flex-wrap items-center gap-5 text-[0.95rem] text-[var(--muted)]">
        {nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-[var(--foreground)]"
          >
            {item.label}
          </a>
        ))}
        <Link
          href={resumeHref}
          className={`rounded-full px-5 py-2.5 font-medium transition-transform hover:-translate-y-0.5 ${
            mode === "freelance"
              ? "portfolio-nav-resume-freelance"
              : "bg-[var(--accent)] text-[#101418]"
          }`}
        >
          Resume
        </Link>
      </div>
    </motion.div>
  );
}

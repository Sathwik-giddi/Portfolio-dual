import type { ReactNode } from "react";

type ModeShellProps = {
  children: ReactNode;
  mode: "technical" | "freelance" | "selector";
};

export function ModeShell({ children, mode }: ModeShellProps) {
  return (
    <main className={`portfolio-shell mode-${mode}`}>
      <div className="portfolio-noise" />
      <div className="portfolio-grid" />
      <div className="portfolio-orb portfolio-orb-a" />
      <div className="portfolio-orb portfolio-orb-b" />
      <div className="portfolio-orb portfolio-orb-c" />
      {children}
    </main>
  );
}

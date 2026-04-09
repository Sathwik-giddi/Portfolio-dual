type SectionHeadingProps = {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-[0.96] tracking-[-0.045em] text-[var(--foreground)] sm:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-[var(--muted)]">{description}</p>
      ) : null}
    </div>
  );
}

import { Award, Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    role: "Freelance Full-Stack & AI Engineer",
    company: "US Startup / Upwork",
    period: "Jan 2025 – Present",
    location: "Remote",
    type: "work",
    link: null,
  },
  {
    role: "CRM Developer (Internship)",
    company: "azmth",
    period: "Jan 2026 – Present",
    location: "Remote",
    type: "work",
    link: null,
  },
  {
    role: "Robot QA Specialist (Part-time)",
    company: "Nomagic",
    period: "Dec 2025 – Feb 2026",
    location: "Remote",
    type: "work",
    link: null,
  },
  {
    role: "Full-Stack Developer (Freelance)",
    company: "PetCaart",
    period: "Dec 2023 – Mar 2024",
    location: "Remote",
    type: "work",
    link: null,
  },
  {
    role: "IIIT Sricity Hackathon Finalist",
    company: "IIIT Sricity",
    period: "Mar 2026",
    location: "Sricity, India",
    type: "achievement",
    link: null,
  },
  {
    role: "Open Source Contributor",
    company: "TensorFlow",
    period: "2024",
    location: "GitHub",
    type: "achievement",
    link: "https://github.com/tensorflow/tensorflow/pull/58421",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & Achievements
          </h2>
          <p className="text-muted-foreground max-w-lg">
            A timeline of my journey, showcasing growth and expertise in
            software development.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative pl-8 pb-8 border-l border-border last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-accent" />

              {/* Content */}
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary border border-border flex items-center justify-center">
                  {exp.type === "achievement" ? (
                    <Award size={20} className="text-accent" />
                  ) : (
                    <Briefcase size={20} className="text-muted-foreground" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold group-hover:text-accent transition-smooth">
                      {exp.role}
                    </h3>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-smooth"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>

                {/* Meta */}
                <div className="text-sm text-muted-foreground md:text-right">
                  <p>{exp.period}</p>
                  <p>{exp.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

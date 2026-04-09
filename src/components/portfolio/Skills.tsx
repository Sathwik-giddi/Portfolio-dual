const skillCategories = [
  {
    title: "AI & ML",
    skills: ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "HuggingFace", "RAG", "Fine-tuning"],
  },
  {
    title: "Full-Stack",
    skills: ["React", "Next.js", "Node.js", "FastAPI", "Python", "TypeScript", "SQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "GitHub Actions", "CI/CD", "MongoDB", "Pinecone", "Redis"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tools & Skills
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

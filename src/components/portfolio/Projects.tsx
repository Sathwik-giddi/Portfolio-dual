import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "LLM Fine-Tuning for Legal Docs",
    description:
      "Fine-tuned Llama 2–7B on 10,000 legal contracts using LoRA and QLoRA, achieving 92% ROUGE-L score. Deployed with FastAPI on AWS EC2.",
    tech: ["PyTorch", "HuggingFace", "LoRA", "FastAPI", "Docker", "AWS"],
    github: "https://github.com/sathwik-giddi",
    live: null,
  },
  {
    title: "AI Video Interviewer",
    description:
      "Gemini AI conducts technical interviews with real-time proctoring (face/object detection) and multilingual TTS. IIIT Sricity Hackathon Finalist.",
    tech: ["React", "Flask", "Node.js", "Firebase", "Gemini API", "WebRTC"],
    github: "https://github.com/sathwik-giddi",
    live: null,
  },
  {
    title: "Quantum Scraper Dashboard",
    description:
      "Real-time IBM Quantum job monitor with constellation visualization and predictive failure risk analysis. Built for Andhra Quantum Hackathon.",
    tech: ["Next.js", "IBM Qiskit", "D3.js", "WebSockets"],
    github: "https://github.com/sathwik-giddi",
    live: null,
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-lg">
            A selection of projects that showcase my expertise in AI Engineering and Full-Stack development.
          </p>
        </div>

        {/* Projects List - Neat & Minimalist */}
        <div className="space-y-16">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="group p-8 rounded-2xl bg-secondary/30 border border-border hover:border-accent/40 transition-smooth"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-secondary text-foreground/80 border-border px-3 py-1">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-6">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth font-medium"
                      >
                        <Github size={20} />
                        <span>View Source</span>
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth font-medium"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
            <Link to="/projects">
              View All Projects
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

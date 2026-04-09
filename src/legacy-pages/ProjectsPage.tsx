import { ExternalLink, Github } from "lucide-react";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";

const projects = [
  {
    id: 1,
    title: "LLM Fine-Tuning for Legal Document Summarization",
    description:
      "Fine-tuned Llama 2–7B on 10,000 legal contracts achieving 92% ROUGE-L score.",
    longDescription:
      "Successfully fine-tuned Llama 2–7B on 10,000 legal contracts using LoRA and QLoRA. Deployed with FastAPI and HuggingFace TGI on AWS EC2 with 500ms inference latency. Implemented custom data preprocessing pipeline for PDF extraction and chunking, reducing hallucinations by 30%.",
    tech: ["PyTorch", "HuggingFace", "LoRA", "FastAPI", "Docker", "AWS", "Python"],
    github: "https://github.com/sathwik-giddi",
    live: null,
    image: "/project-previews/llm-legal.png",
    features: [
      "92% ROUGE-L score",
      "500ms inference latency",
      "30% reduction in hallucination",
      "Custom PDF extraction pipeline",
    ],
  },
  {
    id: 2,
    title: "AI Video Interviewer",
    description:
      "Gemini AI conducts technical interviews with real-time proctoring.",
    longDescription:
      "A finalist project at IIIT Sricity Hackathon. Gemini AI conducts technical interviews with real-time proctoring (face detection, tab switches, object detection) and multilingual TTS. Built a dashboard for HR to review candidate answers and violation logs.",
    tech: ["React", "Flask", "Node.js", "Firebase", "Gemini API", "WebRTC", "TensorFlow.js"],
    github: "https://github.com/sathwik-giddi",
    live: null,
    image: "/project-previews/ai-interviewer.png",
    features: [
      "Real-time proctoring",
      "Multilingual TTS (English/Hindi/Telugu)",
      "HR Review Dashboard",
      "Face detection & violation logs",
    ],
  },
  {
    id: 3,
    title: "Quantum Scraper – Quantum Computing Dashboard",
    description:
      "Real-time dashboard monitoring live IBM Quantum jobs with predictive analysis.",
    longDescription:
      "Built for Andhra Quantum Valley Hackathon. Features a constellation view of backends, predictive failure risk levels using historical data, and an interactive job history explorer. Integrated IBM Qiskit API for real-time job metadata.",
    tech: ["Next.js", "React", "IBM Qiskit", "D3.js", "REST APIs", "WebSockets"],
    github: "https://github.com/sathwik-giddi",
    live: null,
    image: "/project-previews/quantum-scraper.png",
    features: [
      "Constellation backend view",
      "Predictive failure risk levels",
      "Live refresh (10s)",
      "IBM Qiskit API integration",
    ],
  },
  {
    id: 4,
    title: "Open Source – TensorFlow Documentation",
    description:
      "Merged PR improving tf.data pipeline examples for 50k+ monthly readers.",
    longDescription:
      "Merged pull request fixing outdated code snippets in TensorFlow's official documentation. Improved clarity for tf.data pipeline examples and added a new example for parallel data loading. Impacted an estimated 50k+ monthly readers.",
    tech: ["Python", "TensorFlow", "Documentation", "Git", "GitHub"],
    github: "https://github.com/tensorflow/tensorflow/pull/58421",
    live: "https://github.com/tensorflow/tensorflow/pull/58421",
    image: "/project-previews/tensorflow.png",
    features: [
      "Merged PR in official docs",
      "Improved tf.data clarity",
      "Added parallel loading example",
      "Global impact (50k+ readers)",
    ],
  },
];

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">All Projects</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              A comprehensive look at the projects I've built. Each one represents
              a unique challenge and learning experience.
            </p>
          </div>

          {/* Projects List */}
          <div className="space-y-24">
            {projects.map((project) => (
              <article
                key={project.id}
                className="max-w-4xl mx-auto p-10 rounded-2xl bg-secondary/20 border border-border hover:border-accent/30 transition-smooth group"
              >
                <div className="space-y-8">
                  {/* Header */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-accent transition-smooth">
                      {project.title}
                    </h2>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-12 pt-4">
                    {/* Features */}
                    <div>
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                        Key Features
                      </h3>
                      <ul className="space-y-3">
                        {project.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-3 text-foreground/90"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack & Links */}
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                          Tech Stack
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-1.5 bg-secondary/80 text-foreground/80 text-sm font-medium rounded-full border border-border shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 pt-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-xl font-bold hover:bg-foreground/90 transition-smooth shadow-lg shadow-foreground/10"
                        >
                          <Github size={20} />
                          View on GitHub
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-xl font-bold hover:bg-secondary transition-smooth"
                          >
                            <ExternalLink size={20} />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectsPage;

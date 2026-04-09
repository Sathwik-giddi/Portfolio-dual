import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a Computer Science student with a focus on AI/ML and full-stack 
                development. I've been freelancing for US startups, building 
                production-grade LLM pipelines and real-time proctoring systems.
              </p>
              <p>
                My work involves fine-tuning large language models (Llama 2, GPT-3.5), 
                implementing RAG systems with vector databases like Pinecone, and 
                creating seamless user experiences with React and Next.js.
              </p>
              <p>
                I am a finalist at the IIIT Sricity Hackathon and an active contributor 
                to open-source projects, including the official TensorFlow documentation.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild variant="outline" className="border-border hover:bg-background">
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats/Highlights */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent transition-smooth">
              <p className="text-4xl font-bold text-accent mb-2">150+</p>
              <p className="text-sm text-muted-foreground">LeetCode Solved</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent transition-smooth">
              <p className="text-4xl font-bold text-accent mb-2">92%</p>
              <p className="text-sm text-muted-foreground">ROUGE-L Score (LLM)</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent transition-smooth">
              <p className="text-4xl font-bold text-accent mb-2">$3k+</p>
              <p className="text-sm text-muted-foreground">Freelance Value</p>
            </div>
            <div className="p-6 rounded-lg bg-background border border-border hover:border-accent transition-smooth">
              <p className="text-4xl font-bold text-accent mb-2">IIIT</p>
              <p className="text-sm text-muted-foreground">Hackathon Finalist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

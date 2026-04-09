import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        {/* Available Badge */}
        <div className="animate-fade-in-up mb-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-secondary/50 hover:bg-secondary transition-smooth"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            <span className="text-sm">Available for work</span>
          </Link>
        </div>

        {/* Name - Large Typography */}
        <div className="space-y-2 mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up delay-100">
            Sathwik
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight animate-fade-in-up delay-200">
            Giddi
          </h1>
        </div>

        {/* Title */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl animate-fade-in-up delay-300">
          AI/ML & Software Engineering
        </p>

        {/* Description */}
        <p className="text-muted-foreground mt-6 max-w-xl leading-relaxed animate-fade-in-up delay-400">
          CS student with full-stack freelancing for US startups. Built production-grade 
          LLM fine-tuning pipelines and real-time proctoring systems. Passionate 
          about building scalable AI products and contributing to open source.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up delay-500">
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            <Link to="/projects">See My Work</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary">
            <a href="/Sathwik-Giddi.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-fade-in delay-600">
          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <span className="text-sm">Learn more about me</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

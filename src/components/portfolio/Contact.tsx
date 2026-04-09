import { Calendar, Mail, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heart Icon */}
        <div className="mb-8">
          <Heart
            size={48}
            className="mx-auto text-accent animate-pulse-glow"
            fill="currentColor"
          />
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
          Let's Talk
        </h2>

        {/* Description */}
        <p className="text-muted-foreground text-lg max-w-md mx-auto mb-12">
          Got a question, proposal, or want to work together on something?
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 px-8 cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText("sathwikgiddi01@gmail.com");
              const btn = document.getElementById("copy-btn-text");
              if (btn) btn.innerText = "Copied!";
              setTimeout(() => {
                if (btn) btn.innerText = "Copy Email";
              }, 2000);
            }}
          >
            <Mail size={18} className="mr-2" />
            <span id="copy-btn-text">Copy Email</span>
          </Button>

          <span className="text-muted-foreground">or</span>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary px-8"
          >
            <a
              href="https://cal.com/sathwik-giddi-rcwhnw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar size={18} className="mr-2" />
              Book a call
            </a>
          </Button>
        </div>

        {/* More Options Link */}
        <div className="mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <span>More ways to connect</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;

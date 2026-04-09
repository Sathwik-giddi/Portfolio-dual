import { Calendar, Mail, MapPin, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Talk</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got a question, proposal, or want to work together? I'd love to hear from you.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Email */}
            {/* Email */}
            <div
              onClick={() => {
                navigator.clipboard.writeText("sathwikgiddi01@gmail.com");
                const emailLabel = document.getElementById("email-label");
                if (emailLabel) emailLabel.innerText = "Email Copied!";
                setTimeout(() => {
                  if (emailLabel) emailLabel.innerText = "sathwikgiddi01@gmail.com →";
                }, 2000);
              }}
              className="group p-8 bg-secondary rounded-lg border border-border hover:border-accent transition-smooth cursor-pointer"
            >
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 group-hover:border-accent transition-smooth">
                <Mail size={24} className="text-accent" />
              </div>
              <h2 className="text-xl font-bold mb-2">Copy Email</h2>
              <p className="text-muted-foreground mb-4">Click here to copy my email address to your clipboard.</p>
              <span id="email-label" className="text-accent">sathwikgiddi01@gmail.com →</span>
            </div>

            {/* Calendar */}
            <a
              href="https://cal.com/sathwik-giddi-rcwhnw"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-secondary rounded-lg border border-border hover:border-accent transition-smooth"
            >
              <div className="w-12 h-12 rounded-lg bg-background border border-border flex items-center justify-center mb-6 group-hover:border-accent transition-smooth">
                <Calendar size={24} className="text-accent" />
              </div>
              <h2 className="text-xl font-bold mb-2">Book a Call</h2>
              <p className="text-muted-foreground mb-4">Schedule a 30-minute call to discuss your project or idea.</p>
              <span className="text-accent">Schedule now →</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">Connect with me</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/sathwik-giddi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary rounded-lg border border-border hover:border-accent transition-smooth"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sathwik-g-aa29682a7/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary rounded-lg border border-border hover:border-accent transition-smooth"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/sathwikcreates/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-secondary rounded-lg border border-border hover:border-accent transition-smooth"
              >
                <LeetCodeIcon size={24} />
              </a>
              <a
                href="mailto:sathwikgiddi01@gmail.com"
                className="p-4 bg-secondary rounded-lg border border-border hover:border-accent transition-smooth"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span>India</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;

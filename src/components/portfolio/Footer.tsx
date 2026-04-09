import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <Link to="/" className="text-lg font-bold hover:text-accent transition-smooth">
              SG
            </Link>
            <span className="text-sm text-muted-foreground">© {new Date().getFullYear()} Sathwik Giddi</span>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            <Link to="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Work
            </Link>
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              About
            </Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sathwik-giddi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sathwik-g-aa29682a7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://leetcode.com/u/sathwikcreates/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              <LeetCodeIcon size={20} />
            </a>
            <a
              href="mailto:sathwikgiddi01@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-smooth"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

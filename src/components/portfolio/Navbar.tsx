import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "@/components/theme/ThemeToggle";
import LeetCodeIcon from "@/components/icons/LeetCodeIcon";

const navLinks = [
  { href: "/projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-tight hover:text-accent transition-smooth">
          SG
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm transition-smooth ${
                location.pathname === link.href ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Links & Theme Toggle */}
        <div className="hidden md:flex items-center gap-4">
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
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Menu Button & Theme Toggle */}
        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-md mt-2 mx-4 p-6 rounded-lg border border-border animate-fade-in-up">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`transition-smooth ${
                  location.pathname === link.href ? "text-accent" : "text-foreground hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border">
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
      )}
    </nav>
  );
};

export default Navbar;

import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import AnimatedBackground from "@/components/portfolio/AnimatedBackground";

const highlights = [
  { label: "LeetCode Problems", value: "150+" },
  { label: "US-based Clients", value: "15+" },
  { label: "ROUGE-L Score", value: "92%" },
  { label: "Pull Requests", value: "100+" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Navbar />

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              AI Engineer & Full-Stack Developer specializing in building production-grade LLM pipelines and scalable AI products.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a Computer Science student with a deep focus on the intersection of AI and Full-Stack development. 
                For the past few years, I've been freelancing for **US-based startups**, helping them build and scale 
                production-ready applications that leverage the latest in machine learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My most recent work involves building **production-grade LLM fine-tuning pipelines** using 
                LoRA and QLoRA techniques. I've achieved a **92% ROUGE-L score** on specialized models for legal 
                documentation and implemented real-time proctoring systems for AI-driven interview platforms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am proficient in the modern AI stack, including **PyTorch, TensorFlow, LangChain, and HuggingFace**, 
                alongside a strong foundation in full-stack engineering with **Next.js, FastAPI, and Cloud infrastructure**. 
                I believe in building AI products that aren't just innovative but are also scalable and user-centric.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond my freelance work, I am an active contributor to open-source (with over **100+ PRs**) and a 
                frequent participant in high-stakes hackathons. I'm always looking for opportunities to solve 
                complex real-world problems and grow technically in the AI/ML space.
              </p>

              {/* Achievements & Certifications */}
              <div className="pt-8">
                <h2 className="text-2xl font-bold mb-6">Key Achievements</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold text-accent">Hackathon Finalist</h3>
                    <p className="text-sm text-muted-foreground">IIIT Sricity Hackathon • 2024</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold">Oracle AI Foundation</h3>
                    <p className="text-sm text-muted-foreground">Oracle Certified • 2024</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold">Salesforce AI Associate</h3>
                    <p className="text-sm text-muted-foreground">Salesforce Certified • 2024</p>
                  </div>
                  <div className="p-4 bg-secondary rounded-lg border border-border">
                    <h3 className="font-semibold text-accent">Top 10% Contributor</h3>
                    <p className="text-sm text-muted-foreground">Open Source Communities • 2023-24</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Sidebar */}
            <div className="space-y-6">
              <div className="sticky top-32">
                <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
                  Impact & Growth
                </h2>
                <div className="space-y-4">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="p-6 bg-secondary/50 backdrop-blur-sm rounded-lg border border-border hover:border-accent/50 transition-smooth group"
                    >
                      <p className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform origin-left">
                        {item.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;

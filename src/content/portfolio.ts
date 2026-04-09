export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type Metric = {
  value: string;
  label: string;
  context?: string;
};

export type FeaturedProject = {
  title: string;
  slug: string;
  summary: string;
  clientSummary: string;
  image: string;
  tags: string[];
  outcome: string;
  clientOutcome: string;
};

export type CaseStudy = {
  title: string;
  eyebrow: string;
  problem: string;
  build: string;
  outcome: string;
  stack: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  detail: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: string[];
};

export type ProofPoint = {
  title: string;
  description: string;
};

export type HeroSignal = {
  label: string;
  value: string;
  note: string;
};

export type Achievement = {
  title: string;
  subtitle: string;
  detail: string;
};

export type ServiceItem = {
  title: string;
  short: string;
  description: string;
  deliverables: string[];
  result: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type ClientWorkItem = {
  client: string;
  category: string;
  headline: string;
  summary: string;
  timeline: string;
  outcomes: string[];
  deliverables: string[];
};

export const portfolioContent = {
  identity: {
    name: "Sathwik Giddi",
    title: "AI Engineer + Full-Stack Builder",
    availability: "Active · Available",
    headline: [
      "Designing",
      "technical products",
      "that feel premium",
      "and ship hard things.",
    ],
    freelanceHeadline: [
      "You need",
      "something real",
      "not another",
      "half-finished concept.",
    ],
    description:
      "I turn complex AI and product ideas into interfaces that look intentional, move cleanly, and still hold up under real engineering pressure. That means model workflows, full-stack systems, and execution that reads well to both founders and hiring managers.",
    freelanceDescription:
      "I build AI MVPs, dashboards, and internal tools that ship fast, feel sharp, and make technical products easier to trust. Clear communication. Clean execution. No chaos.",
    location: "India · Open to remote work",
    email: "sathwikgiddi01@gmail.com",
    resumeHref: "/Sathwik-Giddi.pdf",
    differentiator:
      "I bridge AI implementation and premium product execution, so the thing works technically and lands visually.",
    aboutStory:
      "I build AI-powered products that feel polished, ship fast, and hold up under real engineering constraints.",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/sathwik-giddi" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sathwik-g-aa29682a7/",
    },
  ] satisfies SocialLink[],
  metrics: [
    {
      value: "92%",
      label: "ROUGE-L on legal-domain fine-tuning",
      context: "Measured model quality, not just a demo claim.",
    },
    {
      value: "150+",
      label: "LeetCode problems solved",
      context: "Strong algorithmic base for interviews and systems thinking.",
    },
    {
      value: "4",
      label: "Remote product and freelance roles",
      context: "Experience shipping in async, startup-style environments.",
    },
    {
      value: "2026",
      label: "IIIT Sricity hackathon finalist",
      context: "Built under time pressure and still delivered a coherent product.",
    },
  ] satisfies Metric[],
  freelanceOutcomeCards: [
    {
      title: "Shipped an AI MVP in 10 days",
      description: "Moved from idea to working product without wasting time on fluff.",
    },
    {
      title: "Reduced workflow friction",
      description: "Built systems that made document-heavy and review-heavy work faster.",
    },
    {
      title: "Improved latency by 40%",
      description: "Optimized performance so the product felt faster and more usable.",
    },
    {
      title: "Made technical products feel premium",
      description: "Turned functional builds into interfaces people actually trust.",
    },
  ],
  heroSignals: [
    {
      label: "Primary lane",
      value: "AI product engineering",
      note: "Models, UX, backend",
    },
    {
      label: "Current edge",
      value: "Interface quality + technical credibility",
      note: "Taste with engineering depth",
    },
    {
      label: "Hiring fit",
      value: "Founding engineer / product-minded IC",
      note: "High-agency teams",
    },
  ] satisfies HeroSignal[],
  proofPoints: [
    {
      title: "Product-first thinking",
      description:
        "I frame technical work in terms of user flow, delivery speed, and product clarity instead of just implementation detail.",
    },
    {
      title: "Strong AI execution",
      description:
        "I have built LLM fine-tuning, prompt, evaluation, and automation workflows that move beyond demo quality.",
    },
    {
      title: "Startup-ready range",
      description:
        "I can move between frontend polish, backend logic, experimentation, and deployment without losing quality.",
    },
  ] satisfies ProofPoint[],
  featuredProjects: [
    {
      title: "Legal LLM Fine-Tuning Stack",
      slug: "legal-llm-finetuning",
      summary:
        "LoRA and QLoRA pipeline for contract understanding, tuned on 10,000 legal documents and deployed with FastAPI on AWS.",
      clientSummary:
        "Built an AI workflow that made contract-heavy work faster, more consistent, and much easier to review.",
      image: "/project-previews/qfind.png",
      tags: ["PyTorch", "HuggingFace", "LoRA", "FastAPI", "AWS"],
      outcome: "Shipped measurable NLP performance instead of a speculative prototype.",
      clientOutcome:
        "Turned a complex AI concept into a product-shaped tool that could save serious review time.",
    },
    {
      title: "AI Video Interviewer",
      slug: "ai-video-interviewer",
      summary:
        "Technical interview system with proctoring, multilingual voice flow, and real-time assessment designed for remote hiring.",
      clientSummary:
        "Built a hiring product where AI, voice, and video worked together in one usable experience.",
      image: "/project-previews/photobooth.png",
      tags: ["React", "Gemini API", "Flask", "WebRTC", "Firebase"],
      outcome: "Combined product UX with AI orchestration and real-time media constraints.",
      clientOutcome:
        "Made a complex AI idea feel simple enough to demo, trust, and use.",
    },
    {
      title: "Quantum Monitoring Dashboard",
      slug: "quantum-dashboard",
      summary:
        "A live job intelligence dashboard for IBM Quantum workloads with predictive failure visibility and visual telemetry.",
      clientSummary:
        "Turned dense technical data into a live dashboard that was fast to read and easy to act on.",
      image: "/project-previews/ads.png",
      tags: ["Next.js", "Qiskit", "D3", "WebSockets"],
      outcome: "Turned complex infrastructure data into a clear visual decision surface.",
      clientOutcome:
        "Made a niche technical workflow clearer, sharper, and more presentable.",
    },
  ] satisfies FeaturedProject[],
  caseStudies: [
    {
      eyebrow: "Case Study 01",
      title: "From raw legal documents to an evaluation-driven LLM workflow",
      problem:
        "The challenge was not just tuning a model. It was building a pipeline that could handle legal-domain data quality, fit within realistic compute constraints, and produce trustworthy results.",
      build:
        "I prepared the dataset, used parameter-efficient fine-tuning with LoRA and QLoRA, built FastAPI serving, and shaped the workflow so it could be evaluated and iterated like a product asset rather than a one-off experiment.",
      outcome:
        "The result was a legal-domain model workflow that reached a 92% ROUGE-L score and could be deployed in a production-shaped environment on AWS.",
      stack: ["PyTorch", "QLoRA", "FastAPI", "Docker", "AWS"],
    },
    {
      eyebrow: "Case Study 02",
      title: "Designing an AI interviewer that feels like a usable product",
      problem:
        "Most AI interview demos stop at generating questions. This needed to handle interaction flow, voice, live constraints, and proctoring signals in a way that still felt coherent to the user.",
      build:
        "I connected Gemini-driven interview logic with a React front end, Flask and Node services, multilingual TTS, and real-time media handling. The focus was experience quality as much as technical capability.",
      outcome:
        "The system stood out because it mixed AI capability with product design discipline, which is why it performed well in a hackathon environment.",
      stack: ["React", "Gemini API", "Flask", "Node.js", "WebRTC"],
    },
  ] satisfies CaseStudy[],
  experience: [
    {
      title: "Freelance Full-Stack and AI Engineer",
      company: "US startups / Upwork",
      period: "2025 - Present",
      detail:
        "Built LLM pipelines, product workflows, and production-ready interfaces for startup teams shipping quickly.",
    },
    {
      title: "CRM Developer Intern",
      company: "azmth",
      period: "2026 - Present",
      detail:
        "Working on internal product systems, automation flows, and interface logic for business operations.",
    },
    {
      title: "Robot QA Specialist",
      company: "Nomagic",
      period: "2025 - 2026",
      detail:
        "Handled reliability-focused testing in a robotics workflow environment with strong attention to edge cases.",
    },
  ] satisfies ExperienceItem[],
  skillGroups: [
    {
      title: "AI and ML",
      description: "Model work, evaluation, orchestration, and production shaping.",
      items: [
        "PyTorch",
        "TensorFlow",
        "OpenAI API",
        "LangChain",
        "HuggingFace",
        "RAG",
        "Fine-tuning",
      ],
    },
    {
      title: "Full-Stack Product",
      description: "Interfaces, APIs, and end-to-end application delivery.",
      items: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "FastAPI",
        "PostgreSQL",
        "Firebase",
      ],
    },
    {
      title: "Infra and Delivery",
      description: "Pragmatic tooling for deployment and iteration speed.",
      items: ["AWS", "Docker", "GitHub Actions", "Redis", "WebSockets", "CI/CD"],
    },
  ] satisfies SkillGroup[],
  services: [
    {
      title: "AI MVPs",
      short: "Working prototypes, shipped fast",
      description:
        "For founders validating AI product ideas without waiting months for something usable.",
      deliverables: ["prototype", "frontend", "backend API", "deployment"],
      result: "Recent result: first usable AI workflow shipped in 10 days.",
    },
    {
      title: "SaaS Dashboards",
      short: "Data-heavy UI with clarity",
      description:
        "Dashboards and operator tools that make dense data easier to read, present, and trust.",
      deliverables: ["dashboard UI", "charts", "admin tooling", "responsive layouts"],
      result: "Recent result: realtime monitoring dashboard for technical systems.",
    },
    {
      title: "Automation Workflows",
      short: "Less manual work",
      description:
        "Internal tools and AI-assisted flows that reduce repetitive work and improve team speed.",
      deliverables: ["workflow logic", "backend services", "notifications", "reporting"],
      result: "Recent result: smoother review-heavy document workflows.",
    },
    {
      title: "AI Assistants",
      short: "Useful chat and retrieval tools",
      description:
        "Conversational tools backed by RAG, prompt logic, and domain-specific workflows.",
      deliverables: ["chat UI", "RAG", "backend orchestration", "evaluation loop"],
      result: "Recent result: domain-shaped AI interaction flow with measurable quality.",
    },
    {
      title: "Premium Frontend Execution",
      short: "Make the product feel expensive",
      description:
        "I turn rough concepts into interfaces that feel considered, trustworthy, and ready to show.",
      deliverables: ["design system", "motion polish", "responsive UI", "demo polish"],
      result: "Recent result: technical product interface that felt investor-ready.",
    },
  ] satisfies ServiceItem[],
  processSteps: [
    {
      title: "Discover",
      description: "Clarify the goal, audience, scope, and what success should look like.",
    },
    {
      title: "Design",
      description: "Shape the flow, technical structure, and smallest version worth building.",
    },
    {
      title: "Build",
      description: "Ship quickly in visible increments instead of disappearing for weeks.",
    },
    {
      title: "Ship",
      description: "Polish, deploy, and leave you with something usable and maintainable.",
    },
  ] satisfies ProcessStep[],
  testimonials: [
    {
      name: "Aarav Shah",
      role: "Founder, early-stage SaaS",
      quote:
        "Sathwik moved faster than most engineers I’ve worked with, but the surprising part was the quality. The product looked polished, the AI workflow actually worked, and communication stayed clear the whole time.",
    },
    {
      name: "Maya Collins",
      role: "Product Lead",
      quote:
        "He has the rare combination of technical depth and product instinct. He didn’t just implement tasks, he improved the way the whole feature should work.",
    },
    {
      name: "Rohan Mehta",
      role: "Startup Operator",
      quote:
        "What stood out was speed without chaos. We got a usable build quickly, and it felt far more premium than a typical MVP.",
    },
  ] satisfies Testimonial[],
  clientWork: [
    {
      client: "Northstar Health",
      category: "AI intake assistant",
      headline: "Turned a messy patient intake workflow into a clean AI-assisted triage flow.",
      summary:
        "Placeholder client engagement for the freelance lens: designed a lightweight intake assistant, dashboard handoff, and summary generation flow for a health operations team.",
      timeline: "2-week sprint",
      outcomes: [
        "Reduced back-and-forth in intake handoff",
        "Made summaries faster to review internally",
        "Created a calmer operator experience",
      ],
      deliverables: ["AI intake flow", "operator dashboard", "handoff summary UI"],
    },
    {
      client: "Luma Commerce",
      category: "Founders / analytics tooling",
      headline: "Built a live revenue and campaign board founders could actually read in one glance.",
      summary:
        "Placeholder client engagement for the freelance lens: shipped a warm, investor-facing analytics surface with campaign performance, alerts, and clean mobile responsiveness.",
      timeline: "10-day build",
      outcomes: [
        "Made weekly reporting faster",
        "Improved visibility into campaign performance",
        "Turned raw numbers into presentation-ready views",
      ],
      deliverables: ["analytics UI", "reporting cards", "alert system"],
    },
    {
      client: "Verve Studio",
      category: "Internal automation",
      headline: "Replaced manual ops busywork with a small internal AI workflow that felt product-grade.",
      summary:
        "Placeholder client engagement for the freelance lens: mapped a repetitive review process, built automation hooks, and wrapped the workflow in a simple interface the team would actually use.",
      timeline: "3-week engagement",
      outcomes: [
        "Removed repetitive review steps",
        "Improved team response speed",
        "Shipped without heavy onboarding overhead",
      ],
      deliverables: ["internal tool", "workflow automation", "review console"],
    },
  ] satisfies ClientWorkItem[],
  hiringReasons: [
    "I can present technical work clearly to non-technical stakeholders.",
    "I treat frontend quality as part of engineering quality, not decoration.",
    "I am comfortable switching between experimentation and production hardening.",
    "I know how to make projects read well to recruiters, founders, and hiring managers.",
  ],
  achievements: [
    {
      title: "TensorFlow contributor",
      subtitle: "Open source",
      detail:
        "Contributed improvements to official TensorFlow documentation and developer-facing material.",
    },
    {
      title: "Hackathon finalist",
      subtitle: "IIIT Sricity",
      detail:
        "Built a technically ambitious AI product under time pressure without losing product coherence.",
    },
    {
      title: "Freelance delivery",
      subtitle: "Startup execution",
      detail:
        "Worked with US startup clients on production features instead of only academic or portfolio projects.",
    },
    {
      title: "Cross-stack range",
      subtitle: "Frontend to AI",
      detail:
        "Comfortable moving between interface polish, APIs, data flow, and model-facing workflows.",
    },
  ] satisfies Achievement[],
  trustSignals: {
    responseTime: "Replies within 24-48 hours",
    workTypes: ["AI MVPs", "dashboards", "internal tools", "automation", "select contracts"],
  },
};

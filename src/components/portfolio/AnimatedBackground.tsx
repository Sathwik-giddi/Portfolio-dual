import { useTheme } from "@/components/theme/ThemeProvider";

const AnimatedBackground = () => {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Aurora/Mesh gradient blobs */}
      <div 
        className={`absolute -top-1/2 -left-1/4 w-[800px] h-[800px] rounded-full blur-3xl animate-aurora-1 ${
          theme === "dark" 
            ? "bg-gradient-to-br from-accent/20 via-purple-500/10 to-transparent" 
            : "bg-gradient-to-br from-accent/30 via-blue-400/20 to-transparent"
        }`}
      />
      <div 
        className={`absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full blur-3xl animate-aurora-2 ${
          theme === "dark" 
            ? "bg-gradient-to-tl from-blue-500/15 via-accent/10 to-transparent" 
            : "bg-gradient-to-tl from-purple-400/25 via-pink-300/15 to-transparent"
        }`}
      />
      <div 
        className={`absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl animate-aurora-3 ${
          theme === "dark" 
            ? "bg-gradient-to-bl from-cyan-500/10 via-accent/5 to-transparent" 
            : "bg-gradient-to-bl from-teal-300/20 via-emerald-300/10 to-transparent"
        }`}
      />
      
      {/* Noise texture overlay for depth */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Subtle grid pattern */}
      <div 
        className={`absolute inset-0 ${theme === "dark" ? "opacity-[0.03]" : "opacity-[0.05]"}`}
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${theme === "dark" ? "hsl(var(--foreground))" : "hsl(var(--foreground))"} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />
      
      {/* Floating orbs */}
      <div className={`absolute top-20 left-[10%] w-3 h-3 rounded-full animate-float-orb ${
        theme === "dark" ? "bg-accent/40" : "bg-accent/60"
      }`} />
      <div className={`absolute top-[40%] right-[15%] w-2 h-2 rounded-full animate-float-orb-delayed ${
        theme === "dark" ? "bg-purple-400/30" : "bg-purple-500/50"
      }`} />
      <div className={`absolute bottom-[30%] left-[20%] w-2 h-2 rounded-full animate-float-orb ${
        theme === "dark" ? "bg-cyan-400/25" : "bg-cyan-500/40"
      }`} />
      <div className={`absolute top-[60%] right-[30%] w-1.5 h-1.5 rounded-full animate-float-orb-delayed ${
        theme === "dark" ? "bg-accent/30" : "bg-accent/50"
      }`} />
      <div className={`absolute bottom-[20%] right-[10%] w-2.5 h-2.5 rounded-full animate-float-orb ${
        theme === "dark" ? "bg-blue-400/20" : "bg-blue-500/35"
      }`} />
      
      {/* Glow lines */}
      <div className={`absolute top-1/3 left-0 w-full h-px animate-glow-line ${
        theme === "dark" 
          ? "bg-gradient-to-r from-transparent via-accent/20 to-transparent" 
          : "bg-gradient-to-r from-transparent via-accent/30 to-transparent"
      }`} />
      <div className={`absolute bottom-1/4 left-0 w-full h-px animate-glow-line-delayed ${
        theme === "dark" 
          ? "bg-gradient-to-r from-transparent via-purple-500/15 to-transparent" 
          : "bg-gradient-to-r from-transparent via-purple-400/25 to-transparent"
      }`} />
    </div>
  );
};

export default AnimatedBackground;

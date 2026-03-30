import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-glow opacity-60 animate-pulse-glow" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(302 55% 49% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(302 55% 49% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <p className="text-secondary font-medium mb-4 tracking-widest uppercase text-sm opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            AI for All
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-heading font-bold leading-tight mb-6 opacity-0 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Construindo pontes entre{" "}
            <span className="text-gradient-hero">dados e o futuro</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
            Conectamos jovens talentos com pequenas empresas através da inteligência artificial.
            Enquanto jovens aprendem na prática, negócios crescem e inovam.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
            <Button variant="hero" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#empresas">
                Sou uma empresa <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base px-8 py-6" asChild>
              <a href="#jovens">
                Sou um jovem <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

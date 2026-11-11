import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dataBridgeRobot from "@/assets/databridge-robot.png";
import { whatsappLink } from "@/lib/whatsapp";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[92svh] flex items-center overflow-hidden pt-20 pb-12 sm:pt-24 sm:pb-16">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-60 animate-pulse-glow" />
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(302 55% 49% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(302 55% 49% / 0.3) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid items-center gap-2 sm:gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:gap-10">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <p className="text-secondary font-medium mb-2 sm:mb-4 tracking-widest uppercase text-sm opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              IA para todos
            </p>
            <h1 className="text-[1.7rem] sm:text-5xl md:text-6xl xl:text-6xl font-heading font-bold leading-tight mb-3 sm:mb-6 opacity-0 animate-fade-up text-balance" style={{ animationDelay: "0.3s" }}>
              Fazemos a ponte entre o dia a dia do seu negócio e a{" "}
              <span className="text-gradient-primary">tecnologia certa</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-5 sm:mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }}>
              O que mais toma seu tempo ou tira seu sono no negócio? Vamos começar por aqui.
              A solução a gente constrói junto com você. E por que não já usando IA?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
              <Button variant="hero" size="lg" className="text-base px-6 py-6" asChild>
                <a href={whatsappLink("topo")} target="_blank" rel="noopener noreferrer">
                  Agende uma conversa gratuita <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" className="text-base px-6 py-6" asChild>
                <a href="#jovens">
                  Sou jovem e quero aprender IA <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 mx-auto w-full max-w-[130px] opacity-0 animate-slide-in-right motion-reduce:animate-none motion-reduce:opacity-100 sm:max-w-[260px] lg:order-2 lg:max-w-[420px]" style={{ animationDelay: "0.2s" }}>
            <img src={dataBridgeRobot} alt="Robô mascote da DataBridge acenando" className="h-auto w-full animate-float drop-shadow-2xl motion-reduce:animate-none" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;

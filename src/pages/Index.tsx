import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ForBusiness from "@/components/ForBusiness";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Impact from "@/components/Impact";
import FAQ from "@/components/FAQ";
import ForYouth from "@/components/ForYouth";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <Hero />
    <ForBusiness />
    <HowItWorks />
    <Services />
    <Projects />
    <About />
    <Impact />
    <FAQ />
    <ForYouth />
    <FinalCTA />
    <Footer />
  </div>
);

export default Index;

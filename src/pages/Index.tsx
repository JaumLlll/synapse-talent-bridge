import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import ForBusiness from "@/components/ForBusiness";
import ForYouth from "@/components/ForYouth";
import Impact from "@/components/Impact";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <HowItWorks />
      <ForBusiness />
      <ForYouth />
      <Impact />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

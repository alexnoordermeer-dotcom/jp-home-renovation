import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PaintStroke } from "@/components/PaintStroke";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { MadeWithTechBuddy } from "@/components/made-with-tech-buddy";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans selection:bg-red-100 selection:text-red-900">
      <Navbar />
      <main>
        <Hero />
        <PaintStroke />
        <Services />
        <Portfolio />
        <Contact />
        <PaintStroke flip />
      </main>
      <Footer />
      <MadeWithTechBuddy />
    </div>
  );
};

export default Index;

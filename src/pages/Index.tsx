import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PaintStroke } from "@/components/PaintStroke";
import { Services } from "@/components/Services";
import { Portfolio } from "@/components/Portfolio";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  // When arriving from another page via a link like "/#portfolio",
  // scroll to that section once it has rendered.
  useEffect(() => {
    document.title = "J.P Home Renovation | Painting & Renovation in Curaçao";
    if (window.location.hash) {
      document.querySelector(window.location.hash)?.scrollIntoView();
    }
  }, []);

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
      <WhatsAppButton />
    </div>
  );
};

export default Index;

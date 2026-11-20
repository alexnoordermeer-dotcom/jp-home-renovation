import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { legalTexts, legalUi, LegalKind } from "@/i18n/legal";

const Legal = ({ kind }: { kind: LegalKind }) => {
  const { language } = useLanguage();
  const doc = legalTexts[language][kind];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [kind]);

  useEffect(() => {
    document.title = `${doc.title} | J.P Home Renovation`;
  }, [doc.title]);

  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      <main className="container mx-auto px-4 pt-32 pb-24 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {legalUi[language].back}
        </Link>
        <h1 className="font-display text-5xl md:text-6xl tracking-wide mb-2">{doc.title}</h1>
        <p className="text-sm text-stone-500 mb-8">{doc.updated}</p>
        <p className="text-lg text-stone-700 leading-relaxed mb-10">{doc.intro}</p>
        <div className="space-y-8">
          {doc.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-stone-900 mb-3">{section.heading}</h2>
              <div className="space-y-3">
                {section.body.map((p, i) => (
                  <p key={i} className="text-stone-700 leading-relaxed">{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Legal;

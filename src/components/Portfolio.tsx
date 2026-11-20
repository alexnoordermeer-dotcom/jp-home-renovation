import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Portfolio = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      image: "/project-woning-luchtfoto.jpg",
      category: { en: "Residential", nl: "Residentieel", pap: "Kasnan", es: "Residencial" },
      title: {
        en: "Full Exterior & Roof Painting",
        nl: "Complete Gevel- & Dakschildering",
        pap: "Pintamentu Kompleto di Kas i Dak",
        es: "Pintura Completa de Fachada y Techo"
      },
    },
    {
      image: "https://images.unsplash.com/photo-1574359411659-15573a27fd0c?auto=format&fit=crop&q=80&w=800",
      category: { en: "Residential", nl: "Residentieel", pap: "Kasnan", es: "Residencial" },
      title: { 
        en: "Luxury Villa Exterior", 
        nl: "Luxe Villa Exterieur", 
        pap: "Pafó di Vila di Lukso", 
        es: "Exterior de Villa de Lujo" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=800",
      category: { en: "Interior", nl: "Interieur", pap: "Paden", es: "Interior" },
      title: { 
        en: "Modern Living Room", 
        nl: "Moderne Woonkamer", 
        pap: "Sala Moderno", 
        es: "Sala de Estar Moderna" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1652829069862-87874e119527?auto=format&fit=crop&q=80&w=800",
      category: { en: "Details", nl: "Details", pap: "Detayenan", es: "Detalles" },
      title: { 
        en: "Precision Trim Work", 
        nl: "Precisie Afwerking", 
        pap: "Trabou di Detaye", 
        es: "Trabajo de Molduras" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1742900280861-32bed068938b?auto=format&fit=crop&q=80&w=800",
      category: { en: "Residential", nl: "Residentieel", pap: "Kasnan", es: "Residencial" },
      title: { 
        en: "Coastal Home Revitalized", 
        nl: "Kustwoning Gerevitaliseerd", 
        pap: "Kas na Kosta Nobo", 
        es: "Casa Costera Revitalizada" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?auto=format&fit=crop&q=80&w=800",
      category: { en: "Interior", nl: "Interieur", pap: "Paden", es: "Interior" },
      title: { 
        en: "Bedroom Color Palette", 
        nl: "Slaapkamer Kleurenpalet", 
        pap: "Paleta di Koló di Kamber", 
        es: "Paleta de Colores de Dormitorio" 
      },
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              className="font-display text-4xl md:text-6xl tracking-wide mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t.portfolio.title}
            </motion.h2>
            <p className="text-stone-600 text-lg">
              {t.portfolio.subtitle}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-red-600 uppercase tracking-widest">{t.portfolio.badge}</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] bg-white aspect-[4/5]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <img 
                src={project.image} 
                alt={project.title[language]} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-red-500 font-semibold mb-2">{project.category[language]}</span>
                <h3 className="font-display text-white text-3xl tracking-wide">{project.title[language]}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

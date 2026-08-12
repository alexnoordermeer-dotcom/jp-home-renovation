import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Portfolio = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
      category: { en: "Residential", nl: "Residentieel", pap: "Kasnan", es: "Residencial" },
      title: { 
        en: "Luxury Villa Exterior", 
        nl: "Luxe Villa Exterieur", 
        pap: "Pafó di Vila di Lukso", 
        es: "Exterior de Villa de Lujo" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1615873966503-399a9a3f2d25?auto=format&fit=crop&q=80&w=800",
      category: { en: "Interior", nl: "Interieur", pap: "Paden", es: "Interior" },
      title: { 
        en: "Modern Living Room", 
        nl: "Moderne Woonkamer", 
        pap: "Sala Moderno", 
        es: "Sala de Estar Moderna" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1556912177-c54030639a48?auto=format&fit=crop&q=80&w=800",
      category: { en: "Commercial", nl: "Commercieel", pap: "Komersial", es: "Comercial" },
      title: { 
        en: "Office Space Refresh", 
        nl: "Kantoorruimte Vernieuwing", 
        pap: "Renobashon di Ofisina", 
        es: "Renovación de Oficinas" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1595841055318-5a23ef74421b?auto=format&fit=crop&q=80&w=800",
      category: { en: "Details", nl: "Details", pap: "Detayenan", es: "Detalles" },
      title: { 
        en: "Precision Trim Work", 
        nl: "Precisie Afwerking", 
        pap: "Trabou di Detaye", 
        es: "Trabajo de Molduras" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800",
      category: { en: "Residential", nl: "Residentieel", pap: "Kasnan", es: "Residencial" },
      title: { 
        en: "Coastal Home Revitalized", 
        nl: "Kustwoning Gerevitaliseerd", 
        pap: "Kas na Kosta Nobo", 
        es: "Casa Costera Revitalizada" 
      },
    },
    {
      image: "https://images.unsplash.com/photo-1513519247388-19345ed5d467?auto=format&fit=crop&q=80&w=800",
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
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              className="text-3xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t.portfolio.title}
            </motion.h2>
            <p className="text-gray-600 text-lg">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-red-500 font-semibold mb-2">{project.category[language]}</span>
                <h3 className="text-white text-2xl font-bold">{project.title[language]}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

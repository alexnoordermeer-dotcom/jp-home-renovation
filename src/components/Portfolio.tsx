import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

type Localized = Record<"en" | "nl" | "pap" | "es", string>;

type Project = {
  image?: string;
  video?: string;
  category: Localized;
  title: Localized;
};

const EXTERIOR: Localized = { en: "Exterior", nl: "Exterieur", pap: "Pafó", es: "Exterior" };
const ROOFS: Localized = { en: "Roofs", nl: "Daken", pap: "Dak", es: "Techos" };
const DETAILS: Localized = { en: "Details", nl: "Details", pap: "Detayenan", es: "Detalles" };

const projects: Project[] = [
  {
    image: "/portfolio/villa-voorzijde.jpg",
    category: EXTERIOR,
    title: {
      en: "Modern Villa – Full Exterior",
      nl: "Moderne Villa – Volledig Buitenwerk",
      pap: "Vila Moderno – Pafó Kompleto",
      es: "Villa Moderna – Exterior Completo",
    },
  },
  {
    video: "/portfolio/dak-voor-en-na.mp4",
    category: ROOFS,
    title: {
      en: "Roof Before & After",
      nl: "Dak Voor & Na",
      pap: "Dak Promé i Despues",
      es: "Techo Antes y Después",
    },
  },
  {
    image: "/project-woning-luchtfoto.jpg",
    category: EXTERIOR,
    title: {
      en: "Full Exterior & Roof Painting",
      nl: "Complete Gevel- & Dakschildering",
      pap: "Pintamentu Kompleto di Kas i Dak",
      es: "Pintura Completa de Fachada y Techo",
    },
  },
  {
    image: "/portfolio/zwart-dak-baai.jpg",
    category: ROOFS,
    title: {
      en: "Black Roof by the Bay",
      nl: "Zwart Dak aan de Baai",
      pap: "Dak Pretu na Baai",
      es: "Techo Negro junto a la Bahía",
    },
  },
  {
    image: "/portfolio/trap-tuinmuren.jpg",
    category: EXTERIOR,
    title: {
      en: "Stairs & Garden Walls",
      nl: "Trap & Tuinmuren",
      pap: "Trapi i Muraya di Hardin",
      es: "Escalera y Muros del Jardín",
    },
  },
  {
    image: "/portfolio/dak-nok-detail.jpg",
    category: DETAILS,
    title: {
      en: "Roof Ridge Detail",
      nl: "Detail Nokpannen",
      pap: "Detaye di Dak",
      es: "Detalle de Cumbrera",
    },
  },
];

const mediaClass =
  "w-full h-full object-cover transition-transform duration-700 group-hover:scale-110";

// Plays only while on screen, so mobile visitors don't download/play
// videos they never scroll to.
const PortfolioVideo = ({ src, label }: { src: string; label: string }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className={mediaClass}
    />
  );
};

export const Portfolio = () => {
  const { t, language } = useLanguage();

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
              transition={{ delay: (index % 3) * 0.1 }}
            >
              {project.video ? (
                <PortfolioVideo src={project.video} label={project.title[language]} />
              ) : (
                <img
                  src={project.image}
                  alt={project.title[language]}
                  loading="lazy"
                  className={mediaClass}
                />
              )}
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

import { motion } from "framer-motion";
import { Heart, Briefcase, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";

type AboutText = {
  badge: string;
  title: string;
  paragraphs: string[];
  highlights: { title: string; text: string }[];
};

const about: Record<Language, AboutText> = {
  nl: {
    badge: "Over ons",
    title: "Vakmanschap met passie",
    paragraphs: [
      "Achter J.P Home Renovation staat Ernest. Schilderen is altijd al zijn passie geweest. Jarenlang deed hij het naast zijn baan, voor familie, vrienden en bekenden.",
      "In 2024 waagde hij de sprong en begon hij voor zichzelf. Ernest is getrouwd en vader van twee kinderen, en die stabiele basis geeft hem de rust om zijn bedrijf met volle toewijding op te bouwen. Inmiddels gaat het erg goed.",
      "Ernest neemt zijn vak serieus. Bij hem krijgt u duidelijke afspraken, zorgvuldig werk en een afwerking waar hij zelf ook trots op is. Of het nu om een gevel, een dak of een binnenmuur gaat: hij behandelt uw huis alsof het zijn eigen huis is.",
    ],
    highlights: [
      { title: "Passie voor het vak", text: "Schilderen was eerst zijn hobby, nu is het zijn werk." },
      { title: "Eigen bedrijf sinds 2024", text: "De stap gezet om volledig voor het vak te gaan." },
      { title: "Persoonlijk contact", text: "U spreekt Ernest zelf, van offerte tot oplevering." },
    ],
  },
  en: {
    badge: "About us",
    title: "Craftsmanship with passion",
    paragraphs: [
      "Ernest is the man behind J.P Home Renovation. Painting has always been his passion. For years he did it alongside his job, for family, friends and acquaintances.",
      "In 2024 he took the leap and started his own business. Ernest is married and a father of two, and that stable foundation gives him the peace of mind to build his company with full dedication. Business is going very well.",
      "Ernest takes his craft seriously. With him you get clear agreements, careful work and a finish he is proud of himself. Whether it is a facade, a roof or an interior wall, he treats your home as if it were his own.",
    ],
    highlights: [
      { title: "Passion for the craft", text: "Painting started as his hobby and is now his work." },
      { title: "Own business since 2024", text: "He took the step to commit fully to the craft." },
      { title: "Personal contact", text: "You deal with Ernest himself, from quote to completion." },
    ],
  },
  pap: {
    badge: "Tokante nos",
    title: "Trabou di kalidat ku pashon",
    paragraphs: [
      "Ernest ta e persona tras di J.P Home Renovation. Pinta semper tabata su pashon. Pa hopi aña el a hasi'é banda di su trabou, pa famia, amigu i konosí.",
      "Na 2024 el a tuma e paso i a kuminsá pa su mes. Ernest ta kasá i tin dos yu, i e base stabil ei ta dun'é e trankilidat pa traha su kompania ku tur dedikashon. Awor e ta bai hopi bon.",
      "Ernest ta tuma su trabou serio. Kun'é bo ta haña akuerdonan kla, trabou kuidadoso i un finish ku e mes ta orguyoso di dje. Sea ta un fachada, un dak of un muraya paden: e ta trata bo kas manera ta su mes kas.",
    ],
    highlights: [
      { title: "Pashon pa e trabou", text: "Pinta a kuminsá komo hobby, awor ta su trabou." },
      { title: "Kompania propio desde 2024", text: "E ta dediká su mes kompletamente na e ofisio." },
      { title: "Kontakto personal", text: "Bo ta papia ku Ernest mes, for di offerta te entrega." },
    ],
  },
  es: {
    badge: "Sobre nosotros",
    title: "Oficio con pasión",
    paragraphs: [
      "Detrás de J.P Home Renovation está Ernest. Pintar siempre ha sido su pasión. Durante años lo hizo junto a su trabajo, para familiares, amigos y conocidos.",
      "En 2024 dio el salto y empezó su propio negocio. Ernest está casado y es padre de dos hijos, y esa base estable le da la tranquilidad para construir su empresa con plena dedicación. Hoy en día le va muy bien.",
      "Ernest se toma su oficio en serio. Con él obtiene acuerdos claros, un trabajo cuidadoso y un acabado del que él mismo está orgulloso. Ya sea una fachada, un techo o una pared interior, trata su casa como si fuera la suya.",
    ],
    highlights: [
      { title: "Pasión por el oficio", text: "Pintar empezó como su afición y ahora es su trabajo." },
      { title: "Negocio propio desde 2024", text: "Dio el paso para dedicarse por completo al oficio." },
      { title: "Trato personal", text: "Habla con Ernest en persona, del presupuesto a la entrega." },
    ],
  },
};

const icons = [Heart, Briefcase, Handshake];

export const About = () => {
  const { language } = useLanguage();
  const a = about[language];

  return (
    <section id="about" className="py-24 bg-stone-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-red-500 uppercase tracking-widest">{a.badge}</span>
            <h2 className="font-display text-4xl md:text-6xl tracking-wide mt-4 mb-8">{a.title}</h2>
            <div className="space-y-5 text-lg text-stone-300 leading-relaxed">
              {a.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-4">
            {a.highlights.map((h, i) => {
              const Icon = icons[i];
              return (
                <motion.div
                  key={h.title}
                  className="flex items-start gap-4 rounded-2xl bg-white/5 border border-white/10 p-6"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{h.title}</h3>
                    <p className="text-stone-400">{h.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

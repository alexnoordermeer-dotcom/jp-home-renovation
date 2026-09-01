import { Paintbrush, Home, Building2, Droplets, ShieldCheck, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export const Services = () => {
  const { t } = useLanguage();

  const serviceIcons = [Paintbrush, Home, Building2, Droplets];
  const serviceColors = [
    "bg-red-50 text-red-600",
    "bg-green-50 text-green-600",
    "bg-blue-50 text-blue-600",
    "bg-orange-50 text-orange-600",
  ];

  const featureIcons = [Award, Clock, ShieldCheck];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            className="font-display text-4xl md:text-6xl tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t.services.title}
          </motion.h2>
          <p className="text-stone-600 text-lg">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <motion.div
                key={service.title}
                className="p-8 rounded-3xl border border-stone-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-14 h-14 rounded-2xl ${serviceColors[index % serviceColors.length]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-stone-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Features Banner */}
        <div className="mt-24 bg-stone-900 rounded-[3rem] p-8 md:p-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {t.services.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];
              return (
                <motion.div 
                  key={feature.title}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-3xl tracking-wide mb-4">{feature.title}</h3>
                  <p className="text-stone-400">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

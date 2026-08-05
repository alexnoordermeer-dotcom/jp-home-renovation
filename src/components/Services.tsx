import { Paintbrush, Home, Building2, Droplets, ShieldCheck, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Interior Painting",
    description: "Flawless finishes for your walls, ceilings, and trim. We use premium paints to bring your vision to life.",
    icon: Paintbrush,
    color: "bg-red-50 text-red-600",
  },
  {
    title: "Exterior Painting",
    description: "Protect and beautify your home with durable exterior painting designed to withstand Curaçao's climate.",
    icon: Home,
    color: "bg-green-50 text-green-600",
  },
  {
    title: "Commercial Projects",
    description: "Professional painting for businesses, offices, and retail spaces with minimal disruption to your operations.",
    icon: Building2,
    color: "bg-blue-50 text-blue-600",
  },
  {
    title: "Home Renovation",
    description: "Comprehensive renovation services to modernize and upgrade your living spaces beyond just painting.",
    icon: Droplets,
    color: "bg-orange-50 text-orange-600",
  },
];

const features = [
  {
    title: "Quality Work",
    description: "We use top-tier materials and proven techniques to ensure lasting results.",
    icon: Award,
  },
  {
    title: "Reliable Service",
    description: "On-time arrival, professional conduct, and transparent communication throughout.",
    icon: Clock,
  },
  {
    title: "Perfect Finish",
    description: "Meticulous attention to detail for a smooth, streak-free, and stunning final look.",
    icon: ShieldCheck,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Professional Services for Every Need
          </motion.h2>
          <p className="text-gray-600 text-lg">
            From residential touch-ups to large scale commercial renovations, J.P Home Renovation delivers excellence in every brush stroke.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="p-8 rounded-3xl border border-gray-100 hover:border-red-100 hover:shadow-xl hover:shadow-red-500/5 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Banner */}
        <div className="mt-24 bg-gray-900 rounded-[3rem] p-8 md:p-16 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-600 mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

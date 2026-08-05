import { motion } from "framer-motion";

const projects = [
  {
    image: "https://images.unsplash.com/photo-1589939705384-5185138a04b9?auto=format&fit=crop&q=80&w=800",
    category: "Residential",
    title: "Luxury Villa Exterior",
  },
  {
    image: "https://images.unsplash.com/photo-1615873966503-399a9a3f2d25?auto=format&fit=crop&q=80&w=800",
    category: "Interior",
    title: "Modern Living Room",
  },
  {
    image: "https://images.unsplash.com/photo-1556912177-c54030639a48?auto=format&fit=crop&q=80&w=800",
    category: "Commercial",
    title: "Office Space Refresh",
  },
  {
    image: "https://images.unsplash.com/photo-1595841055318-5a23ef74421b?auto=format&fit=crop&q=80&w=800",
    category: "Details",
    title: "Precision Trim Work",
  },
  {
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5db?auto=format&fit=crop&q=80&w=800",
    category: "Residential",
    title: "Coastal Home Revitalized",
  },
  {
    image: "https://images.unsplash.com/photo-1513519247388-19345ed5d467?auto=format&fit=crop&q=80&w=800",
    category: "Interior",
    title: "Bedroom Color Palette",
  },
];

export const Portfolio = () => {
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
              Our Recent Projects
            </motion.h2>
            <p className="text-gray-600 text-lg">
              Take a look at some of our recent painting and renovation work across Curaçao. We take pride in our attention to detail.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-bold text-red-600 uppercase tracking-widest">Quality in every detail</span>
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
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-red-500 font-semibold mb-2">{project.category}</span>
                <h3 className="text-white text-2xl font-bold">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

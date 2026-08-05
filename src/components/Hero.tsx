import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=2000" 
          alt="Professional Painting" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-white uppercase bg-red-600 rounded-full">
              Painting & Renovation Experts in Curaçao
            </span>
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Space with <span className="text-red-500">Perfect Finish</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-xl">
              Professional painting services for residential and commercial properties in Curaçao. Quality work, reliable service, and a finish you'll love.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button className="bg-red-600 hover:bg-red-700 text-white h-14 px-8 text-lg rounded-full shadow-lg shadow-red-600/20" asChild>
              <a href="#contact">
                Get a Free Quote <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button variant="outline" className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white hover:text-black h-14 px-8 text-lg rounded-full" asChild>
              <a href="#services">Our Services</a>
            </Button>
          </motion.div>

          <motion.div 
            className="mt-12 flex flex-wrap gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {[
              "Quality Work",
              "Reliable Service",
              "Perfect Finish"
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2 text-white/90 font-medium">
                <CheckCircle2 className="w-5 h-5 text-red-500" />
                <span>{feature}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative brush stroke effect (simulated) */}
      <div className="absolute bottom-0 right-0 w-1/3 h-full hidden lg:block">
        <motion.div 
          className="w-full h-full flex flex-col justify-end items-end p-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img 
             src="/logo-jp.jpeg" 
             alt="Logo" 
             className="w-96 rounded-2xl shadow-2xl border-4 border-white/10"
          />
        </motion.div>
      </div>
    </section>
  );
};

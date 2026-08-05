import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-red-600 rounded-[3rem] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="p-8 md:p-16 text-white">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Get Your Free Estimate</h2>
                <p className="text-red-100 text-lg mb-12">
                  Ready to transform your property? Contact us today for a free, no-obligation quote. We'll discuss your needs and provide a professional recommendation.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Call Us</h4>
                      <a href="tel:+59995146365" className="text-red-50 hover:underline">+599 9 514 6365</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">WhatsApp</h4>
                      <a href="https://wa.me/59996946365" target="_blank" rel="noopener noreferrer" className="text-red-50 hover:underline">+599 9 694 6365</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">Location</h4>
                      <p className="text-red-50">Curaçao</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-16">
              <motion.form 
                className="space-y-6"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Full Name</label>
                    <Input placeholder="John Doe" className="h-12 border-gray-200 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                    <Input placeholder="+599 9 123 4567" className="h-12 border-gray-200 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Service Needed</label>
                  <select className="w-full h-12 border border-gray-200 rounded-xl px-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500">
                    <option>Interior Painting</option>
                    <option>Exterior Painting</option>
                    <option>Home Renovation</option>
                    <option>Commercial Painting</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Message</label>
                  <Textarea placeholder="Tell us about your project..." className="min-h-[120px] border-gray-200 rounded-xl" />
                </div>
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg rounded-xl shadow-lg shadow-red-600/10">
                  Send Message <Send className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-center text-gray-500 text-sm">
                  We typically respond within 24 hours.
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

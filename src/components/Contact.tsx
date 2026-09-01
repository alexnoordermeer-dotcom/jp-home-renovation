import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, MapPin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { showError } from "@/utils/toast";

const WHATSAPP_NUMBER = "59996946365";

export const Contact = () => {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(t.services.items[0]?.title ?? "");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim()) {
      showError(t.contact.form.required);
      return;
    }

    const lines = [
      `*${t.contact.form.name}:* ${name}`,
      `*${t.contact.form.phone}:* ${phone}`,
      `*${t.contact.form.service}:* ${service}`,
    ];
    if (message.trim()) {
      lines.push(`*${t.contact.form.message}:* ${message}`);
    }

    const waText = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, "_blank", "noopener,noreferrer");
  };

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
                <h2 className="font-display text-4xl md:text-6xl tracking-wide mb-8">{t.contact.title}</h2>
                <p className="text-red-100 text-lg mb-12">
                  {t.contact.subtitle}
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{t.contact.callUs}</h4>
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
                      <h4 className="font-bold text-xl mb-1">{t.contact.location}</h4>
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
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">{t.contact.form.name}</label>
                    <Input
                      placeholder={t.contact.form.placeholderName}
                      className="h-12 border-gray-200 rounded-xl"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">{t.contact.form.phone}</label>
                    <Input
                      type="tel"
                      placeholder={t.contact.form.placeholderPhone}
                      className="h-12 border-gray-200 rounded-xl"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{t.contact.form.service}</label>
                  <select
                    className="w-full h-12 border border-gray-200 rounded-xl px-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                  >
                    {t.services.items.map(s => (
                      <option key={s.title} value={s.title}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">{t.contact.form.message}</label>
                  <Textarea
                    placeholder={t.contact.form.placeholderMessage}
                    className="min-h-[120px] border-gray-200 rounded-xl"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white h-14 text-lg rounded-xl shadow-lg shadow-red-600/10">
                  {t.contact.form.submit} <Send className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-center text-gray-500 text-sm">
                  {t.contact.form.response}
                </p>
              </motion.form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

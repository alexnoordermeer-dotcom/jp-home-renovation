import { Phone, MessageSquare, MapPin, Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-950 text-gray-400 py-20 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="/logo-jp.jpeg" alt="Logo" className="h-10 w-auto rounded" />
              <span className="text-white font-bold text-xl">J.P HOME</span>
            </div>
            <p className="mb-6 leading-relaxed">
              {t.footer.about}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.links}</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-red-500 transition-colors">{t.nav.home}</a></li>
              <li><a href="#services" className="hover:text-red-500 transition-colors">{t.nav.services}</a></li>
              <li><a href="#portfolio" className="hover:text-red-500 transition-colors">{t.nav.portfolio}</a></li>
              <li><a href="#contact" className="hover:text-red-500 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.services}</h4>
            <ul className="space-y-4">
              {t.services.items.map(s => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t.footer.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+599 9 514 6365</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-red-500" />
                <span>+599 9 694 6365</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-red-500" />
                <span>Curaçao</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>© {new Date().getFullYear()} J.P Home Renovation Painting Services. {t.footer.rights}</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

import { Phone, MessageSquare, Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "#" },
    { name: t.nav.services, href: "#services" },
    { name: t.nav.portfolio, href: "#portfolio" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "nl", label: "Nederlands", flag: "🇳🇱" },
    { code: "pap", label: "Papiamento", flag: "🇨🇼" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ];

  const currentLang = languages.find((l) => l.code === language);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-jp.jpeg" alt="J.P Home Renovation" className="h-12 w-auto rounded" />
          <div className="hidden lg:block">
            <span className="font-bold text-xl block leading-none">J.P HOME</span>
            <span className="text-[10px] text-gray-500 tracking-widest uppercase">Renovation & Painting</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l pl-6 ml-2 lg:pl-8 lg:ml-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2 px-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a href="tel:+59995146365" className="hidden lg:flex items-center gap-2 text-sm font-semibold text-gray-700">
              <Phone className="w-4 h-4 text-red-600" />
              <span>+599 9 514 6365</span>
            </a>
            
            <Button className="bg-[#25D366] hover:bg-[#20ba5a] text-white gap-2" asChild>
              <a href="https://wa.me/59996946365" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-4 h-4" />
                {t.nav.whatsapp}
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
           <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((lang) => (
                  <DropdownMenuItem
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          <button className="p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-4 pt-4 border-t">
             <a href="tel:+59995146365" className="flex items-center gap-3 p-2 font-semibold">
              <Phone className="w-5 h-5 text-red-600" />
              <span>+599 9 514 6365</span>
            </a>
            <Button className="bg-[#25D366] hover:bg-[#20ba5a] w-full py-6 text-lg" asChild>
              <a href="https://wa.me/59996946365" target="_blank" rel="noopener noreferrer">
                <MessageSquare className="w-5 h-5 mr-2" />
                {t.nav.whatsapp}
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

import { Phone, MessageSquare, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.portfolio, href: "/#portfolio" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.contact, href: "/#contact" },
  ];


  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/logo-jp.jpeg" alt="J.P Home Renovation" className="h-12 w-auto rounded" />
          <div className="hidden lg:block">
            <span className="font-display text-2xl tracking-wide block leading-none">J.P HOME</span>
            <span className="text-[10px] text-stone-500 tracking-widest uppercase">Renovation & Painting</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-red-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4 border-l pl-6 ml-2">
            <LanguageSwitcher />

            <a href="tel:+59995146365" className="hidden xl:flex items-center gap-2 text-sm font-semibold text-stone-700">
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
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button className="p-2" aria-label="Menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-stone-100 absolute w-full left-0 p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium p-2 hover:bg-stone-50 rounded"
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

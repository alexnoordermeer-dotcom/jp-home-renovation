import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";

// Fill in Ernest's profile URLs here. A button only appears once its URL is set,
// so visitors never see a social button that leads nowhere.
export const SOCIAL_LINKS = {
  instagram: "",
  facebook: "",
};

const labels: Record<Language, { follow: string; instagram: string; facebook: string }> = {
  en: { follow: "Follow us", instagram: "Follow us on Instagram", facebook: "Follow us on Facebook" },
  nl: { follow: "Volg ons", instagram: "Volg ons op Instagram", facebook: "Volg ons op Facebook" },
  pap: { follow: "Sigui nos", instagram: "Sigui nos riba Instagram", facebook: "Sigui nos riba Facebook" },
  es: { follow: "Síguenos", instagram: "Síguenos en Instagram", facebook: "Síguenos en Facebook" },
};

const INSTAGRAM_BG = "bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af]";
const FACEBOOK_BG = "bg-[#1877F2]";

export const SocialButtons = ({ variant }: { variant: "footer" | "contact" }) => {
  const { language } = useLanguage();
  const l = labels[language];

  const items = [
    { url: SOCIAL_LINKS.instagram, label: l.instagram, name: "Instagram", Icon: Instagram, bg: INSTAGRAM_BG },
    { url: SOCIAL_LINKS.facebook, label: l.facebook, name: "Facebook", Icon: Facebook, bg: FACEBOOK_BG },
  ].filter((item) => item.url);

  if (items.length === 0) return null;

  return (
    <div>
      <h4 className={variant === "contact" ? "font-bold text-xl mb-4" : "text-white font-bold mb-4"}>
        {l.follow}
      </h4>
      <div className="flex flex-wrap gap-3">
        {items.map(({ url, label, name, Icon, bg }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${bg} inline-flex items-center gap-2 h-12 px-5 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105 ${
              variant === "contact" ? "ring-2 ring-white/30" : ""
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

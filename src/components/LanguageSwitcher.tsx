import { useLanguage } from "@/contexts/LanguageContext";
import { Language } from "@/i18n/translations";

const languages: { code: Language; short: string; label: string }[] = [
  { code: "en", short: "EN", label: "English" },
  { code: "nl", short: "NL", label: "Nederlands" },
  { code: "pap", short: "PAP", label: "Papiamento" },
  { code: "es", short: "ES", label: "Español" },
];

// All languages visible at once, so visitors see right away they can switch.
export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language"
      className="flex items-center rounded-full bg-stone-100 p-1"
    >
      {languages.map((lang) => {
        const active = lang.code === language;
        return (
          <button
            key={lang.code}
            type="button"
            onClick={() => setLanguage(lang.code)}
            title={lang.label}
            aria-label={lang.label}
            aria-pressed={active}
            className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${
              active
                ? "bg-red-600 text-white shadow"
                : "text-stone-600 hover:text-red-600"
            }`}
          >
            {lang.short}
          </button>
        );
      })}
    </div>
  );
};

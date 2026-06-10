import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { FaGlobe } from "react-icons/fa";

export default function LanguageSwitcher({ className = "" }) {
  const { lang, toggleLang } = useLanguage();

  return (
    <motion.button
      onClick={toggleLang}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-dark-border text-xs font-medium transition-all duration-300 hover:border-neon-blue/50 hover:text-neon-blue ${className}`}
      aria-label="Switch language"
      title={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
    >
      <FaGlobe className={`transition-transform duration-300 ${lang === "en" ? "scale-x-[-1]" : ""}`} />
      <span className="font-bold">{lang === "ar" ? "EN" : "AR"}</span>
    </motion.button>
  );
}

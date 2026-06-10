import { createContext, useContext, useState, useEffect, useCallback } from "react";
import t from "../translations";

const LanguageContext = createContext();

const LANG_KEY = "tallah-lang";

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      return localStorage.getItem(LANG_KEY) || "ar";
    } catch {
      return "ar";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch { /* noop */ }
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === "ar" ? "en" : "ar"));
  }, []);

  const setLang = useCallback((l) => setLangState(l), []);

  const translate = useCallback(
    (path) => {
      const keys = path.split(".");
      let result = t[lang];
      for (const key of keys) {
        if (result === undefined) return path;
        result = result[key];
      }
      return result !== undefined ? result : path;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

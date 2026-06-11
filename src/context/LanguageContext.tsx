import React, { createContext, useContext, useState, useEffect } from "react";
import { Language, translations, TranslationType } from "../translations";

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationType;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use localStorage or fall back to Indonesian ("ID")
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("preferred_lang");
    if (saved === "ID" || saved === "EN" || saved === "FR" || saved === "DE") {
      return saved as Language;
    }
    return "ID";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("preferred_lang", lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

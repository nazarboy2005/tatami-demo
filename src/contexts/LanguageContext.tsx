"use client";

import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { translations } from "@/translations";

// Define the available languages
export type Language = "en" | "ar";

// Interface for the language context
interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  toggleLanguage: () => {},
  t: () => "",
  isRTL: false,
});

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Interface for the provider props
interface LanguageProviderProps {
  children: ReactNode;
}

// The language provider component
export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  // Try to get the saved language from localStorage, default to 'en'
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");
  const isRTL = currentLanguage === "ar";

  // Check if we're in the browser and load saved language preference
  useEffect(() => {
    const savedLanguage =
      typeof window !== "undefined"
        ? (localStorage.getItem("language") as Language)
        : null;

    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Update document direction when language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = currentLanguage;

      // Save the language preference to localStorage
      localStorage.setItem("language", currentLanguage);
    }
  }, [currentLanguage]);

  // Toggle between languages
  const toggleLanguage = () => {
    setCurrentLanguage((prevLang) => (prevLang === "en" ? "ar" : "en"));
  };

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][currentLanguage];
  };

  return (
    <LanguageContext.Provider
      value={{
        language: currentLanguage,
        toggleLanguage,
        t,
        isRTL,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaGlobe } from "react-icons/fa";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
}) => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 transition-colors duration-200 ${className}`}
      aria-label={t("switchLanguage")}
    >
      <FaGlobe className="text-lg" />
      <span className="font-medium">
        {language === "en" ? "العربية" : "English"}
      </span>
    </button>
  );
};

export default LanguageSwitcher;

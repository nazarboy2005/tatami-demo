import React, { ReactNode } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface DirectionLayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * A component that applies direction-based styles (RTL/LTR) based on the current language
 * and handles font family changes.
 */
const DirectionLayout: React.FC<DirectionLayoutProps> = ({
  children,
  className = "",
}) => {
  const { isRTL } = useLanguage();

  return (
    <div
      className={`${
        isRTL ? "rtl text-right" : "ltr text-left"
      } transition-all duration-300 ${className}`}
      style={{
        fontFamily: isRTL
          ? "Noto Sans Arabic, sans-serif"
          : "Open Sans, sans-serif",
      }}
    >
      {children}
    </div>
  );
};

export default DirectionLayout;

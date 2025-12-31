import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  maxWidth = "lg",
}) => {
  const maxWidthClasses = {
    sm: "max-w-screen-sm",
    md: "max-w-screen-md",
    lg: "max-w-6xl",
    xl: "max-w-screen-xl",
    "2xl": "max-w-screen-2xl",
    none: "",
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-10 md:px-16 ${maxWidthClasses[maxWidth]} ${className}`}
    >
      {children}
    </div>
  );
};

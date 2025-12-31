import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  fullWidth = false,
  className = "",
  onClick,
  type = "button",
}) => {
  const baseStyles = "rounded-md font-medium transition-all duration-300";

  const variantStyles = {
    primary: "text-white hover:scale-105" as const,
    secondary: "text-[#025356] hover:scale-105" as const,
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const widthStyles = fullWidth ? "w-full" : "w-fit";

  const bgStyles = {
    primary: { backgroundColor: "#025356" },
    secondary: { backgroundColor: "#d2fce3" },
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={bgStyles[variant]}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${className}`}
    >
      {children}
    </button>
  );
};

import React from "react";

interface PatternProps {
  className?: string;
  variant?: "geometric" | "floral" | "arabesque";
  color?: string;
  size?: "sm" | "md" | "lg";
  opacity?: number;
}

const ArabianPattern: React.FC<PatternProps> = ({
  className = "",
  variant = "geometric",
  color = "#025356",
  size = "md",
  opacity = 0.1,
}) => {
  const sizeClasses = {
    sm: "w-24 h-24",
    md: "w-40 h-40",
    lg: "w-64 h-64",
  };

  // SVG patterns based on Arabian/Islamic geometric art
  // Each variant represents a different traditional pattern style
  const renderPattern = () => {
    switch (variant) {
      case "geometric":
        return (
          <svg
            viewBox="0 0 100 100"
            className={`${sizeClasses[size]} ${className}`}
            style={{ opacity }}
          >
            <g fill={color}>
              <path d="M50,0 L60,20 L40,20 Z" />
              <path d="M100,50 L80,60 L80,40 Z" />
              <path d="M50,100 L40,80 L60,80 Z" />
              <path d="M0,50 L20,40 L20,60 Z" />
              <path d="M0,0 L20,20 L0,20 Z" />
              <path d="M100,0 L80,20 L100,20 Z" />
              <path d="M100,100 L80,80 L100,80 Z" />
              <path d="M0,100 L20,80 L0,80 Z" />
              <rect x="40" y="40" width="20" height="20" />
              <circle
                cx="50"
                cy="50"
                r="10"
                fill="none"
                stroke={color}
                strokeWidth="1"
              />
            </g>
          </svg>
        );
      case "floral":
        return (
          <svg
            viewBox="0 0 100 100"
            className={`${sizeClasses[size]} ${className}`}
            style={{ opacity }}
          >
            <g fill={color}>
              <path d="M50,10 C70,10 70,30 50,30 C30,30 30,10 50,10 Z" />
              <path d="M50,70 C70,70 70,90 50,90 C30,90 30,70 50,70 Z" />
              <path d="M10,50 C10,30 30,30 30,50 C30,70 10,70 10,50 Z" />
              <path d="M70,50 C70,30 90,30 90,50 C90,70 70,70 70,50 Z" />
              <path d="M50,50 C60,40 70,50 60,60 C50,70 40,60 50,50 Z" />
              <path d="M50,50 C60,60 50,70 40,60 C30,50 40,40 50,50 Z" />
              <path d="M50,50 C40,40 50,30 60,40 C70,50 60,60 50,50 Z" />
              <path d="M50,50 C40,60 30,50 40,40 C50,30 60,40 50,50 Z" />
            </g>
          </svg>
        );
      case "arabesque":
        return (
          <svg
            viewBox="0 0 100 100"
            className={`${sizeClasses[size]} ${className}`}
            style={{ opacity }}
          >
            <g fill="none" stroke={color} strokeWidth="1.5">
              <path d="M20,20 C40,0 60,0 80,20 C100,40 100,60 80,80 C60,100 40,100 20,80 C0,60 0,40 20,20 Z" />
              <path d="M35,35 C45,25 55,25 65,35 C75,45 75,55 65,65 C55,75 45,75 35,65 C25,55 25,45 35,35 Z" />
              <path d="M25,50 L50,25" />
              <path d="M75,50 L50,25" />
              <path d="M25,50 L50,75" />
              <path d="M75,50 L50,75" />
              <path d="M50,25 C50,25 25,40 25,50" />
              <path d="M50,25 C50,25 75,40 75,50" />
              <path d="M50,75 C50,75 25,60 25,50" />
              <path d="M50,75 C50,75 75,60 75,50" />
            </g>
          </svg>
        );
      default:
        return null;
    }
  };

  return renderPattern();
};

// Decorative border with Arabian pattern
export const ArabianBorder: React.FC<{
  className?: string;
  color?: string;
}> = ({ className = "", color = "#025356" }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="flex justify-between">
        {[...Array(12)].map((_, i) => (
          <ArabianPattern
            key={i}
            variant="geometric"
            size="sm"
            color={color}
            opacity={0.2}
          />
        ))}
      </div>
    </div>
  );
};

// Corner decoration with Arabian pattern
export const ArabianCorner: React.FC<{
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
  color?: string;
}> = ({ position = "top-right", className = "", color = "#025356" }) => {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${className}`}>
      <ArabianPattern
        variant="arabesque"
        size="md"
        color={color}
        opacity={0.15}
      />
    </div>
  );
};

export default ArabianPattern;

"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface CardProps {
  title?: string;
  subtitle?: string;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    position?: "top" | "bottom" | "left" | "right";
  };
  icon?: React.ReactNode;
  className?: string;
  cardClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  contentClassName?: string;
  footerClassName?: string;
  children?: React.ReactNode;
  href?: string;
  bordered?: boolean;
  elevated?: boolean;
  hoverable?: boolean;
  compact?: boolean;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  content,
  footer,
  image,
  icon,
  className = "",
  cardClassName = "",
  titleClassName = "",
  subtitleClassName = "",
  contentClassName = "",
  footerClassName = "",
  children,
  href,
  bordered = false,
  elevated = false,
  hoverable = false,
  compact = false,
}) => {
  // Card content
  const cardContent = (
    <div
      className={cn(
        "overflow-hidden bg-white rounded-lg transition-all",
        bordered && "border border-gray-200",
        elevated && "shadow-md",
        hoverable && "hover:shadow-lg hover:-translate-y-1",
        compact ? "p-4" : "p-6",
        cardClassName
      )}
    >
      {/* Image: top position */}
      {image && (!image.position || image.position === "top") && (
        <div className="relative w-full h-48 -mt-6 -mx-6 mb-6 overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Image: left position */}
      {image && image.position === "left" && (
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden -ml-6 md:-my-6 mb-4 md:mb-0 md:mr-6">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1">{renderCardBody()}</div>
        </div>
      )}

      {/* Standard layout when no left/right image */}
      {(!image || (image && !["left", "right"].includes(image.position))) &&
        renderCardBody()}

      {/* Image: right position */}
      {image && image.position === "right" && (
        <div className="flex flex-col md:flex-row">
          <div className="flex-1">{renderCardBody()}</div>
          <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden -mr-6 md:-my-6 mt-4 md:mt-0 md:ml-6">
            <img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      )}

      {/* Image: bottom position */}
      {image && image.position === "bottom" && (
        <div className="relative w-full h-48 -mb-6 -mx-6 mt-6 overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );

  // Helper function to render card body
  function renderCardBody() {
    return (
      <>
        {/* Icon and title row */}
        {(icon || title) && (
          <div className="flex items-start mb-4">
            {icon && <div className="mr-4 text-primary">{icon}</div>}
            <div>
              {title && (
                <h3 className={cn("font-semibold text-xl", titleClassName)}>
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className={cn("text-gray-600 mt-1", subtitleClassName)}>
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Content */}
        {(content || children) && (
          <div className={cn("", contentClassName)}>{content || children}</div>
        )}

        {/* Footer */}
        {footer && (
          <div
            className={cn(
              "mt-4 pt-4 border-t border-gray-100",
              footerClassName
            )}
          >
            {footer}
          </div>
        )}
      </>
    );
  }

  // Wrap in Link if href is provided
  if (href) {
    return (
      <Link href={href} className={cn("block", className)}>
        {cardContent}
      </Link>
    );
  }

  return <div className={className}>{cardContent}</div>;
};

// Feature card variant with icon at the top
export const FeatureCard: React.FC<
  CardProps & { iconBackground?: string; iconColor?: string }
> = ({
  children,
  title,
  icon,
  className = "",
  hoverEffect = true,
  onClick,
  iconBackground = "#d2fce3",
  iconColor = "#025356",
}) => {
  const hoverClasses = hoverEffect
    ? "transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
    : "";

  return (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${hoverClasses} ${className} flex flex-col items-center text-center p-6`}
      onClick={onClick}
    >
      {icon && (
        <div
          className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
          style={{ backgroundColor: iconBackground }}
        >
          <div style={{ color: iconColor }}>{icon}</div>
        </div>
      )}
      {title && (
        <h3 className="text-xl font-bold mb-4 text-[#025356] font-heading">
          {title}
        </h3>
      )}
      <div>{children}</div>
    </div>
  );
};

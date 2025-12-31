"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface FeatureProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  link?: {
    href: string;
    label: string;
  };
  variant?: "simple" | "card" | "icon" | "image";
  layout?: "vertical" | "horizontal";
  className?: string;
  children?: React.ReactNode;
}

export const Feature: React.FC<FeatureProps> = ({
  title,
  description,
  icon,
  image,
  link,
  variant = "simple",
  layout = "vertical",
  className = "",
  children,
}) => {
  // Render different feature variants
  const renderSimpleFeature = () => (
    <div
      className={`feature ${
        layout === "vertical" ? "flex flex-col" : "flex items-start"
      } ${className}`}
    >
      {icon && (
        <div
          className={`
          text-blue-600 ${layout === "vertical" ? "mb-4" : "mr-4"}
          ${layout === "horizontal" ? "mt-1 flex-shrink-0" : ""}
        `}
        >
          {icon}
        </div>
      )}
      <div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
        {children}
        {link && (
          <Link
            href={link.href}
            className="inline-block mt-2 text-blue-600 hover:text-blue-800"
          >
            {link.label} →
          </Link>
        )}
      </div>
    </div>
  );

  const renderCardFeature = () => (
    <div
      className={`feature-card p-6 rounded-lg border border-gray-200 bg-white ${
        layout === "vertical" ? "flex flex-col" : "flex"
      } ${className}`}
    >
      {icon && (
        <div
          className={`
          text-blue-600 p-3 bg-blue-100 rounded-lg w-fit h-fit
          ${layout === "vertical" ? "mb-4" : "mr-4 flex-shrink-0"}
        `}
        >
          {icon}
        </div>
      )}
      <div className={layout === "horizontal" ? "ml-4" : ""}>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
        {children}
        {link && (
          <Link
            href={link.href}
            className="inline-block mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            {link.label} →
          </Link>
        )}
      </div>
    </div>
  );

  const renderIconFeature = () => (
    <div className={`feature-icon text-center ${className}`}>
      {icon && (
        <div className="mx-auto w-16 h-16 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
      {children}
      {link && (
        <Link
          href={link.href}
          className="inline-block mt-3 text-blue-600 hover:text-blue-800"
        >
          {link.label} →
        </Link>
      )}
    </div>
  );

  const renderImageFeature = () => (
    <div className={`feature-image ${className}`}>
      {image && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width || 400}
            height={image.height || 300}
            className="w-full object-cover"
          />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {description && <p className="text-gray-600">{description}</p>}
      {children}
      {link && (
        <Link
          href={link.href}
          className="inline-block mt-3 text-blue-600 hover:text-blue-800"
        >
          {link.label} →
        </Link>
      )}
    </div>
  );

  // Return the appropriate variant
  switch (variant) {
    case "card":
      return renderCardFeature();
    case "icon":
      return renderIconFeature();
    case "image":
      return renderImageFeature();
    case "simple":
    default:
      return renderSimpleFeature();
  }
};

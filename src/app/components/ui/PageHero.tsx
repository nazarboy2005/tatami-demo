"use client";

import React from "react";
import { Container } from "./Container";

interface PageHeroProps {
  title: string;
  description?: string;
  backgroundColor?: string;
  textColor?: string;
  align?: "left" | "center";
  image?: string;
  imagePosition?: "left" | "right";
  cta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

export const PageHero: React.FC<PageHeroProps> = ({
  title,
  description,
  backgroundColor = "#025356",
  textColor = "white",
  align = "center",
  image,
  imagePosition = "right",
  cta,
  secondaryCta,
}) => {
  return (
    <div
      className="py-20 md:py-28"
      style={{ backgroundColor, color: textColor }}
    >
      <Container>
        <div
          className={`flex flex-col ${
            image ? "lg:flex-row items-center" : ""
          } gap-8`}
        >
          <div
            className={`${image ? "lg:w-1/2" : "w-full"} ${
              align === "center" && !image ? "text-center mx-auto" : ""
            } ${imagePosition === "left" ? "lg:order-2" : "lg:order-1"}`}
          >
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-heading ${
                align === "center" && !image ? "mx-auto" : ""
              }`}
            >
              {title}
            </h1>
            {description && (
              <p
                className={`text-lg md:text-xl opacity-90 mb-8 max-w-2xl ${
                  align === "center" && !image ? "mx-auto" : ""
                }`}
              >
                {description}
              </p>
            )}
            {(cta || secondaryCta) && (
              <div
                className={`flex flex-wrap gap-4 ${
                  align === "center" && !image ? "justify-center" : ""
                }`}
              >
                {cta && (
                  <a
                    href={cta.link}
                    className="px-6 py-3 bg-white text-[#025356] font-bold rounded-md hover:bg-gray-100 transition-colors"
                  >
                    {cta.text}
                  </a>
                )}
                {secondaryCta && (
                  <a
                    href={secondaryCta.link}
                    className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-md hover:bg-white/10 transition-colors"
                  >
                    {secondaryCta.text}
                  </a>
                )}
              </div>
            )}
          </div>
          {image && (
            <div
              className={`lg:w-1/2 ${
                imagePosition === "left" ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <img
                src={image}
                alt={title}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

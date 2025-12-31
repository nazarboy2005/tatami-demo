import React from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import Link from "next/link";

interface CTASectionProps {
  title: string;
  description?: string;
  buttonText: string;
  buttonLink: string;
  backgroundColor?: string;
  backgroundImage?: string;
  buttonVariant?: "primary" | "secondary";
  buttonSize?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundColor = "#025356",
  backgroundImage,
  buttonVariant = "secondary",
  buttonSize = "lg",
  fullWidth = false,
}) => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor,
          backgroundImage: backgroundImage
            ? `url(${backgroundImage})`
            : undefined,
          backgroundSize: backgroundImage ? "cover" : undefined,
          backgroundPosition: backgroundImage ? "center" : undefined,
        }}
      ></div>

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
            {title}
          </h2>

          {description && (
            <p className="text-xl mb-8 text-white opacity-90">{description}</p>
          )}

          <Link href={buttonLink} passHref className="inline-block">
            <Button
              variant={buttonVariant}
              size={buttonSize}
              fullWidth={fullWidth}
              className="transform transition-transform hover:scale-105"
            >
              {buttonText}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

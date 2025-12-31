import React from "react";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  id?: string;
  containerMaxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  backgroundColor,
  id,
  containerMaxWidth = "lg",
}) => {
  return (
    <section
      id={id}
      className={`w-full py-16 ${className}`}
      style={backgroundColor ? { backgroundColor } : undefined}
    >
      <Container maxWidth={containerMaxWidth}>{children}</Container>
    </section>
  );
};

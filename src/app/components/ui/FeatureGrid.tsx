"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface FeatureGridProps {
  children: React.ReactNode;
  className?: string;
  columns?: {
    default: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: {
    x?: number;
    y?: number;
  };
  centered?: boolean;
}

export const FeatureGrid: React.FC<FeatureGridProps> = ({
  children,
  className = "",
  columns = { default: 1, sm: 2, lg: 3 },
  centered = false,
}) => {
  // Build grid template columns class
  const getGridCols = () => {
    const colClasses = [];

    colClasses.push(`grid-cols-${columns.default}`);

    if (columns.sm) colClasses.push(`sm:grid-cols-${columns.sm}`);
    if (columns.md) colClasses.push(`md:grid-cols-${columns.md}`);
    if (columns.lg) colClasses.push(`lg:grid-cols-${columns.lg}`);
    if (columns.xl) colClasses.push(`xl:grid-cols-${columns.xl}`);

    return colClasses.join(" ");
  };

  return (
    <div
      className={cn(
        "grid",
        getGridCols(),
        "gap-x-6 gap-y-6",
        centered && "place-items-center",
        className
      )}
    >
      {children}
    </div>
  );
};

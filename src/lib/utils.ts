import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function that merges class names and resolves Tailwind CSS conflicts.
 * This combines clsx for conditional class merging with tailwind-merge for handling Tailwind conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

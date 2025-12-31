/**
 * Utility functions for RTL (Right-to-Left) support
 */

/**
 * Conditionally applies RTL-specific classes to an element
 * @param baseClasses - The base classes to always apply
 * @param isRTL - Whether the current language is RTL
 * @param ltrClasses - Classes to apply in LTR mode
 * @param rtlClasses - Classes to apply in RTL mode
 * @returns Combined class string
 */
export function rtlClass(
  baseClasses: string = "",
  isRTL: boolean = false,
  ltrClasses: string = "",
  rtlClasses: string = ""
): string {
  return `${baseClasses} ${isRTL ? rtlClasses : ltrClasses}`.trim();
}

/**
 * Conditionally applies RTL-specific styles to an element
 * @param baseStyles - The base styles to always apply
 * @param isRTL - Whether the current language is RTL
 * @param ltrStyles - Styles to apply in LTR mode
 * @param rtlStyles - Styles to apply in RTL mode
 * @returns Combined style object
 */
export function rtlStyle(
  baseStyles: React.CSSProperties = {},
  isRTL: boolean = false,
  ltrStyles: React.CSSProperties = {},
  rtlStyles: React.CSSProperties = {}
): React.CSSProperties {
  return {
    ...baseStyles,
    ...(isRTL ? rtlStyles : ltrStyles),
  };
}

/**
 * Checks if a text contains Arabic characters
 * @param text - The text to check
 * @returns True if the text contains Arabic characters
 */
export function containsArabic(text: string): boolean {
  const arabicPattern = /[\u0600-\u06FF]/;
  return arabicPattern.test(text);
}

/**
 * Updates the document's direction and language attributes based on whether RTL is enabled
 * @param isRTL Boolean indicating if RTL mode is active
 */
export const updateDocumentRTL = (isRTL: boolean): void => {
  if (typeof document !== "undefined") {
    // Set document direction
    document.documentElement.dir = isRTL ? "rtl" : "ltr";

    // Set document language
    document.documentElement.lang = isRTL ? "ar" : "en";

    // Add or remove RTL class for additional styling
    if (isRTL) {
      document.documentElement.classList.add("rtl");
    } else {
      document.documentElement.classList.remove("rtl");
    }
  }
};

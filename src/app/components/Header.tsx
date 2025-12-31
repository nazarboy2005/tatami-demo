"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/Button";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const { language, t, isRTL } = useLanguage();

  // Separate refs for toggle button and dropdown menu
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside both the button and dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Only close if clicking outside both the button and dropdown
      if (
        menuOpen &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const navLinks = [
    {
      label: t("solutions"),
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        {
          label: t("forTenants"),
          href: "/solutions/tenants",
        },
        {
          label: t("forLandlords"),
          href: "/solutions/landlords",
        },
      ],
    },
    { href: "/features", label: t("features") },
    // { href: "/insights", label: t("insights") },
    { href: "/contact", label: t("contact") },
    // { href: "/about", label: t("nav_about") }, // About page link
  ];

  return (
    <header
      className="w-full px-4 sm:px-10 py-4 flex justify-between items-center relative sticky top-0 z-50"
      style={{ backgroundColor: "#025356" }}
    >
      <Link href="/" className="text-white font-bold font-heading">
        <img className="w-24" src="/tatami-logo.svg" alt="tatami logo" />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-white">
        {navLinks.map((link) => (
          <div key={link.href + link.label} className="relative group">
            {link.hasDropdown ? (
              <>
                <button
                  className="hover:text-[#d2fce3] transition-colors flex items-center gap-1"
                  onClick={() => setSolutionsOpen(!solutionsOpen)}
                >
                  {link.label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute top-full left-0 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 z-50 ${
                    solutionsOpen ? "block" : "hidden"
                  } group-hover:block`}
                  style={{ minWidth: "200px" }}
                >
                  {link.dropdownItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-[#025356] hover:bg-[#d2fce3] transition-colors"
                      onClick={() => setSolutionsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={link.href}
                className="hover:text-[#d2fce3] transition-colors"
              >
                {link.label}
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* Right side container for language & CTA */}
      <div className="flex items-center gap-4">
        {/* Language Toggle for all screen sizes */}
        <LanguageSwitcher className="text-white hover:text-[#d2fce3]" />

        {/* Menu button for mobile - positioned based on RTL */}
        <div
          className={`md:hidden relative ${
            isRTL ? "order-first" : "order-last"
          }`}
        >
          <button
            ref={buttonRef}
            className="flex flex-col justify-center items-center gap-1.5 z-20"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
              style={{ backgroundColor: menuOpen ? "#d2fce3" : "white" }}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
              style={{ backgroundColor: "white" }}
            ></span>
            <span
              className={`block w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
              style={{ backgroundColor: menuOpen ? "#d2fce3" : "white" }}
            ></span>
          </button>
        </div>

        {/* CTA Button (desktop only) */}
        <Link href="/waitlist" passHref>
          <Button variant="secondary" size="sm" className="hidden md:block">
            {t("joinWaitlist")}
          </Button>
        </Link>
      </div>

      {/* Mobile Menu Dropdown - Full width and centered */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="absolute left-0 right-0 top-full bg-[#025356] shadow-xl z-40 py-6 px-6 md:hidden"
          style={{
            animation: menuOpen ? "fadeInDown 0.2s ease-out forwards" : "none",
          }}
        >
          <div className="max-w-sm mx-auto flex flex-col gap-5">
            {navLinks.map((link) => (
              <div key={link.href + link.label} className="flex flex-col">
                {link.hasDropdown ? (
                  <>
                    <button
                      className="text-white text-lg hover:text-[#d2fce3] transition-colors text-left flex items-center justify-between"
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent event from bubbling up
                        setSolutionsOpen(!solutionsOpen);
                      }}
                    >
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transition-transform ${
                          solutionsOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {solutionsOpen && (
                      <div className="mt-3 flex flex-col gap-3 border-l-2 border-[#d2fce3] pl-4">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="text-white text-base hover:text-[#d2fce3] transition-colors"
                            onClick={(e) => {
                              // Only close the menu, not stop propagation
                              setMenuOpen(false);
                              setSolutionsOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-white text-lg hover:text-[#d2fce3] transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/waitlist"
              className="text-white text-lg font-bold hover:text-[#d2fce3] transition-colors pt-3 border-t border-[#d2fce3]/30 mt-2 text-center"
              onClick={() => setMenuOpen(false)}
            >
              {t("joinWaitlist")}
            </Link>
          </div>
        </div>
      )}

      {/* Add animation keyframes for dropdown */}
      <style jsx global>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
};

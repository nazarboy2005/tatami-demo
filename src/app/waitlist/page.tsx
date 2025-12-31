"use client";

import React, { useState, useRef } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import DirectionLayout from "@/components/DirectionLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function WaitlistPage() {
  const { t } = useLanguage();
  const turnstileRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    userType: "property-manager",
    unitsManaged: "",
    hearAbout: "",
    comments: "",
    termsAccepted: false,
  });

  // Add turnstile token state
  const [turnstileToken, setTurnstileToken] = useState<string>("");

  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Load Turnstile script
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle radio input changes
  const handleUserTypeChange = (userType: string) => {
    setFormData((prev) => ({ ...prev, userType }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError(
        t("pleaseEnterAllRequiredFields") || "Please enter all required fields"
      );
      return;
    }

    if (!formData.termsAccepted) {
      setError(
        t("pleaseAcceptTerms") || "Please accept our terms and conditions"
      );
      return;
    }

    // Turnstile validation
    if (!turnstileToken) {
      setError("Please complete the security check");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken, // Include the token
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Show success message
      setIsSuccess(true);

      // Reset form and token
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        userType: "property-manager",
        unitsManaged: "",
        hearAbout: "",
        comments: "",
        termsAccepted: false,
      });
      setTurnstileToken("");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DirectionLayout className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#025356] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t("joinWaitlistTitle")}
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              {t("joinWaitlistSubtitle")}
            </p>
          </div>
        </section>

        {/* Waitlist Form Section */}
        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              {isSuccess ? (
                // Success state
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-[#025356] mb-4">
                    {t("thank_you")}
                  </h2>
                  <p className="text-xl mb-8 text-gray-600">
                    {t("waitlist_confirmation")}
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-3 bg-[#025356] text-white rounded-md hover:bg-[#013a3c] transition-colors"
                  >
                    {t("joinAnotherPerson") || "Join Another Person"}
                  </button>
                </div>
              ) : (
                // Form state
                <>
                  <h2 className="text-3xl font-bold text-[#025356] mb-8 text-center">
                    {t("getEarlyAccess")}
                  </h2>

                  {error && (
                    <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-md">
                      {error}
                    </div>
                  )}

                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* User Type Selection */}
                    <div className="space-y-4">
                      <label className="block text-gray-700 font-medium mb-2">
                        {t("iAmA")}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="relative">
                          <input
                            type="radio"
                            id="property-manager"
                            name="userType"
                            value="property-manager"
                            className="peer sr-only"
                            checked={formData.userType === "property-manager"}
                            onChange={() =>
                              handleUserTypeChange("property-manager")
                            }
                          />
                          <label
                            htmlFor="property-manager"
                            className="flex p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#025356] peer-checked:border-[#025356] peer-checked:bg-[#f0fcf5] transition-colors"
                          >
                            <div className="flex flex-col">
                              <span className="text-lg font-medium text-gray-900">
                                {t("propertyManager")}
                              </span>
                              <span className="text-sm text-gray-500">
                                {t("propertyManagerDesc")}
                              </span>
                            </div>
                          </label>
                        </div>
                        <div className="relative">
                          <input
                            type="radio"
                            id="tenant"
                            name="userType"
                            value="tenant"
                            className="peer sr-only"
                            checked={formData.userType === "tenant"}
                            onChange={() => handleUserTypeChange("tenant")}
                          />
                          <label
                            htmlFor="tenant"
                            className="flex p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-[#025356] peer-checked:border-[#025356] peer-checked:bg-[#f0fcf5] transition-colors"
                          >
                            <div className="flex flex-col">
                              <span className="text-lg font-medium text-gray-900">
                                {t("waitlist_tenant")}
                              </span>
                              <span className="text-sm text-gray-500">
                                {t("tenantDesc")}
                              </span>
                            </div>
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* Contact Information */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          {t("firstName")}
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                          placeholder={t("firstNamePlaceholder")}
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          {t("lastName")}
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                          placeholder={t("lastNamePlaceholder")}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        {t("emailAddress")}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        placeholder={t("emailPlaceholder")}
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        {t("company")}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        placeholder={t("companyPlaceholder")}
                      />
                    </div>
                    {/* Property Manager specific fields - shown conditionally */}
                    {formData.userType === "property-manager" && (
                      <div>
                        <label
                          htmlFor="unitsManaged"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          {t("unitsManaged")}
                        </label>
                        <select
                          id="unitsManaged"
                          name="unitsManaged"
                          value={formData.unitsManaged}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        >
                          <option value="">{t("selectOption")}</option>
                          <option value="1-10">{t("units1to10")}</option>
                          <option value="11-50">{t("units11to50")}</option>
                          <option value="51-100">{t("units51to100")}</option>
                          <option value="101-500">{t("units101to500")}</option>
                          <option value="500+">{t("units500plus")}</option>
                        </select>
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="hearAbout"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        {t("hearAbout")}
                      </label>
                      <select
                        id="hearAbout"
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                      >
                        <option value="">{t("selectOption")}</option>
                        <option value="search">{t("searchEngine")}</option>
                        <option value="social">{t("socialMedia")}</option>
                        <option value="friend">{t("friendColleague")}</option>
                        <option value="blog">{t("blogArticle")}</option>
                        <option value="event">{t("eventConference")}</option>
                        <option value="other">{t("other")}</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="comments"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        {t("additionalComments")}
                      </label>
                      <textarea
                        id="comments"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        placeholder={t("commentsPlaceholder")}
                      ></textarea>
                    </div>
                    {/* Terms and Privacy */}
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="termsAccepted"
                          name="termsAccepted"
                          type="checkbox"
                          checked={formData.termsAccepted}
                          onChange={handleChange}
                          className="w-4 h-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="termsAccepted"
                          className="text-gray-600"
                        >
                          {t("agreeTerms")}{" "}
                          <a
                            href="/terms"
                            className="text-[#025356] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("termsOfService")}
                          </a>{" "}
                          {t("and")}{" "}
                          <a
                            href="/privacy"
                            className="text-[#025356] hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {t("privacyPolicy")}
                          </a>
                        </label>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div
                        ref={turnstileRef}
                        className="cf-turnstile"
                        data-sitekey={
                          process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
                        }
                        data-callback="onTurnstileSuccess"
                        data-theme="light"
                      ></div>
                    </div>

                    <script
                      dangerouslySetInnerHTML={{
                        __html: `
                          window.onTurnstileSuccess = function(token) {
                            window.turnstileToken = token;
                          };
                        `,
                      }}
                    />

                    <div>
                      <button
                        type="submit"
                        className="w-full py-4 px-8 bg-[#025356] text-white font-medium rounded-md hover:bg-[#013a3c] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            setTurnstileToken(window.turnstileToken || "");
                          }
                        }}
                      >
                        {isSubmitting
                          ? t("submitting") || "Submitting..."
                          : t("joinWaitlistBtn")}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#025356] mb-12 text-center">
              {t("earlyAccessBenefits")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#d2fce3] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-[#025356] font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {t("getEarlyAccess")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("joinWaitlistSubtitle")}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#d2fce3] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-[#025356] font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {t("exclusiveFeatures")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("exclusiveFeaturesDesc")}
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-[#d2fce3] rounded-full flex items-center justify-center mb-6 mx-auto">
                  <span className="text-2xl text-[#025356] font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {t("specialPricing")}
                </h3>
                <p className="text-gray-600 text-center">
                  {t("specialPricingDesc")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#025356] mb-12 text-center">
              {t("faqTitle")}
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("faq1Question")}
                </h3>
                <p className="text-gray-600">{t("faq1Answer")}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("faq2Question")}
                </h3>
                <p className="text-gray-600">{t("faq2Answer")}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("faq3Question")}
                </h3>
                <p className="text-gray-600">{t("faq3Answer")}</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t("faq4Question")}
                </h3>
                <p className="text-gray-600">{t("faq4Answer")}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </DirectionLayout>
  );
}

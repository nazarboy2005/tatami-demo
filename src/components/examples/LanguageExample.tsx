import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import DirectionLayout from "@/components/DirectionLayout";
import LanguageSwitcher from "@/components/LanguageSwitcher";

/**
 * A component that demonstrates the language switching functionality
 * with various UI elements showing content in both directions.
 */
const LanguageExample: React.FC = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <DirectionLayout>
      <div className="max-w-4xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {t("site_name")} - {language.toUpperCase()}
          </h1>
          <LanguageSwitcher className="text-[#025356] hover:text-[#617268]" />
        </div>

        <div className="bg-gray-100 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("features_title")}</h2>
          <p className="mb-4">{t("hero_subtitle")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-xl mb-2">
                {t("benefit_easy_title")}
              </h3>
              <p>{t("benefit_easy_desc")}</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <h3 className="font-bold text-xl mb-2">
                {t("benefit_autopay_title")}
              </h3>
              <p>{t("benefit_autopay_desc")}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#025356] text-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">{t("cta_title")}</h2>
          <button className="bg-white text-[#025356] px-6 py-2 rounded-md font-semibold">
            {t("cta_button")}
          </button>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Direction Demo</h2>
          <div className="flex gap-4 mb-4">
            <div className="w-1/2 bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">LTR Input:</h3>
              <input
                type="text"
                dir="ltr"
                defaultValue="Hello, world!"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="w-1/2 bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">RTL Input:</h3>
              <input
                type="text"
                dir="rtl"
                defaultValue="مرحباً بالعالم!"
                className="w-full p-2 border rounded"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-1/2 bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">Current Direction:</h3>
              <div className="flex items-center gap-2 p-2 bg-white rounded">
                {isRTL ? "→ RTL (Right to Left)" : "← LTR (Left to Right)"}
              </div>
            </div>
            <div className="w-1/2 bg-gray-100 p-4 rounded">
              <h3 className="font-bold mb-2">Current Font:</h3>
              <div className="p-2 bg-white rounded">
                {isRTL ? "Noto Sans Arabic" : "Open Sans"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DirectionLayout>
  );
};

export default LanguageExample;

import { useState } from "react";
import { Section } from "./ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";

interface StepProps {
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

const Step = ({ icon, titleKey, descriptionKey }: StepProps) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="w-20 h-20 rounded-full mb-6 flex items-center justify-center"
        style={{ backgroundColor: "#d2fce3" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#025356] font-heading">
        {t(titleKey)}
      </h3>
      <p className="text-[#617268]">{t(descriptionKey)}</p>
    </div>
  );
};

export const HowItWorks = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("tenant");

  const tenantSteps = [
    {
      titleKey: "tenant_step1_title",
      descriptionKey: "tenant_step1_desc",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          style={{ fill: "#025356" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      titleKey: "tenant_step2_title",
      descriptionKey: "tenant_step2_desc",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          style={{ fill: "#025356" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      titleKey: "tenant_step3_title",
      descriptionKey: "tenant_step3_desc",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          style={{ fill: "#025356" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  const landlordSteps = [
    {
      titleKey: "landlord_step1_title",
      descriptionKey: "landlord_step1_desc",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          style={{ fill: "#025356" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      titleKey: "landlord_step2_title",
      descriptionKey: "landlord_step2_desc",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          style={{ fill: "#025356" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      titleKey: "landlord_step3_title",
      descriptionKey: "landlord_step3_desc",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          style={{ fill: "#025356" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <Section id="how-it-works" backgroundColor="#ffffff">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#025356] mb-16 font-heading">
        {t("how_it_works_heading")}
      </h2>

      {/* Tabs */}
      <div className="mb-12 flex justify-center">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
              activeTab === "tenant"
                ? "bg-[#025356] text-white"
                : "bg-[#ededed] text-[#025356]"
            }`}
            onClick={() => setActiveTab("tenant")}
          >
            {t("user_type_tenant")}
          </button>
          <button
            type="button"
            className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
              activeTab === "landlord"
                ? "bg-[#025356] text-white"
                : "bg-[#ededed] text-[#025356]"
            }`}
            onClick={() => setActiveTab("landlord")}
          >
            {t("user_type_landlord")}
          </button>
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {activeTab === "tenant"
          ? tenantSteps.map((step, index) => (
              <Step
                key={index}
                icon={step.icon}
                titleKey={step.titleKey}
                descriptionKey={step.descriptionKey}
              />
            ))
          : landlordSteps.map((step, index) => (
              <Step
                key={index}
                icon={step.icon}
                titleKey={step.titleKey}
                descriptionKey={step.descriptionKey}
              />
            ))}
      </div>
    </Section>
  );
};

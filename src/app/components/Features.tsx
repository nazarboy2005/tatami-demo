import { Section } from "./ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";

interface FeatureProps {
  titleKey: string;
  icon: React.ReactNode;
}

const Feature = ({ titleKey, icon }: FeatureProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col items-center text-center">
      <div
        className="w-16 h-16 rounded-full mb-4 flex items-center justify-center"
        style={{ backgroundColor: "#d2fce3" }}
      >
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-[#025356] font-heading">
        {t(titleKey)}
      </h3>
    </div>
  );
};

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      titleKey: "feature_digital_payment",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          style={{ fill: "#025356" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      titleKey: "feature_direct_debits",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
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
      titleKey: "feature_rewards",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
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
    {
      titleKey: "feature_credit_reporting",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          style={{ fill: "#025356" }}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <Section id="features" backgroundColor="#f8f8f8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#025356] mb-4 font-heading">
        {t("features_heading")}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {features.map((feature, index) => (
          <Feature
            key={index}
            titleKey={feature.titleKey}
            icon={feature.icon}
          />
        ))}
      </div>
    </Section>
  );
};

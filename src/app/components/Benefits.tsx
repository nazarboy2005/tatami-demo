import { Section } from "./ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";

interface BenefitCardProps {
  titleKey: string;
  descriptionKey: string;
}

const BenefitCard = ({ titleKey, descriptionKey }: BenefitCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#ededed] rounded-lg p-8 shadow-sm flex flex-col items-start">
      <h3 className="text-2xl font-bold mb-4 text-[#025356] font-heading">
        {t(titleKey)}
      </h3>
      <p className="text-[#617268]">{t(descriptionKey)}</p>
    </div>
  );
};

export const Benefits = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      titleKey: "benefit_convenient_title",
      descriptionKey: "benefit_convenient_desc",
    },
    {
      titleKey: "benefit_secure_title",
      descriptionKey: "benefit_secure_desc",
    },
  ];

  return (
    <Section backgroundColor="#ffffff">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#025356] mb-16 font-heading">
        {t("benefits_heading")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {benefits.map((benefit, index) => (
          <BenefitCard
            key={index}
            titleKey={benefit.titleKey}
            descriptionKey={benefit.descriptionKey}
          />
        ))}
      </div>
    </Section>
  );
};

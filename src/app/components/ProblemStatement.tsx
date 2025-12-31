import { Section } from "./ui/Section";
import { useLanguage } from "@/contexts/LanguageContext";

interface CheckListItemProps {
  children: React.ReactNode;
}

const CheckListItem = ({ children }: CheckListItemProps) => {
  return (
    <li className="flex items-start">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2 flex-shrink-0"
        style={{ fill: "#d2fce3" }}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
};

export const ProblemStatement = () => {
  const { t, isRTL } = useLanguage();

  return (
    <Section backgroundColor="#025356">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-heading">
          {t("problem_statement_title")}
        </h2>
        <p className="text-xl text-[#d2fce3] mb-10">
          {t("problem_statement_subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {/* Tenant Pains */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-white font-heading">
              {t("tenant_pains_title")}
            </h3>
            <ul className="text-left text-white space-y-4">
              <CheckListItem>{t("tenant_pain_1")}</CheckListItem>
              <CheckListItem>{t("tenant_pain_2")}</CheckListItem>
              <CheckListItem>{t("tenant_pain_3")}</CheckListItem>
            </ul>
          </div>

          {/* Landlord Pains */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-white font-heading">
              {t("landlord_pains_title")}
            </h3>
            <div className="text-center mb-8">
              <p className="text-4xl font-bold text-[#d2fce3] font-heading">
                {t("rent_cheques_percentage")}
              </p>
              <p className="text-xl text-white">
                {t("rent_cheques_description")}
              </p>
            </div>
            <ul className="text-left text-white space-y-4">
              <CheckListItem>{t("landlord_pain_1")}</CheckListItem>
              <CheckListItem>{t("landlord_pain_2")}</CheckListItem>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const QatarTrustBadges: React.FC = () => {
  const { t, isRTL } = useLanguage();

  // Since we don't have these translations defined yet, let's define them directly
  const getTrustBadgeAlt = (key: string) => {
    const translations = {
      qcbAlt: {
        en: "Qatar Central Bank badge",
        ar: "شعار مصرف قطر المركزي",
      },
      qfcAlt: {
        en: "Qatar Financial Centre badge",
        ar: "شعار مركز قطر للمال",
      },
      qdbAlt: {
        en: "Qatar Development Bank badge",
        ar: "شعار بنك قطر للتنمية",
      },
      pciAlt: {
        en: "PCI DSS Compliance badge",
        ar: "شعار الامتثال لمعايير أمن بيانات صناعة بطاقات الدفع",
      },
    };
    return translations[key] ? translations[key][isRTL ? "ar" : "en"] : key;
  };

  const getPartnerAlt = (key: string) => {
    const translations = {
      qnbAlt: {
        en: "Qatar National Bank logo",
        ar: "شعار بنك قطر الوطني",
      },
      dohaBankAlt: {
        en: "Doha Bank logo",
        ar: "شعار بنك الدوحة",
      },
      masrafAlt: {
        en: "Masraf Al Rayan logo",
        ar: "شعار مصرف الريان",
      },
    };
    return translations[key] ? translations[key][isRTL ? "ar" : "en"] : key;
  };

  const badges = [
    {
      id: "qcb",
      name: "Qatar Central Bank",
      image: "/images/badges/qcb-badge.svg", // Placeholder, would need actual images
      alt: getTrustBadgeAlt("qcbAlt"),
    },
    {
      id: "qfc",
      name: "Qatar Financial Centre",
      image: "/images/badges/qfc-badge.svg", // Placeholder
      alt: getTrustBadgeAlt("qfcAlt"),
    },
    {
      id: "qdb",
      name: "Qatar Development Bank",
      image: "/images/badges/qdb-badge.svg", // Placeholder
      alt: getTrustBadgeAlt("qdbAlt"),
    },
    {
      id: "pci",
      name: "PCI DSS Compliant",
      image: "/images/badges/pci-badge.svg", // Placeholder
      alt: getTrustBadgeAlt("pciAlt"),
    },
  ];

  const banks = [
    {
      id: "qnb",
      name: "Qatar National Bank",
      image: "/images/partners/qnb-logo.svg", // Placeholder
      alt: getPartnerAlt("qnbAlt"),
    },
    {
      id: "dohaBank",
      name: "Doha Bank",
      image: "/images/partners/doha-bank-logo.svg", // Placeholder
      alt: getPartnerAlt("dohaBankAlt"),
    },
    {
      id: "masraf",
      name: "Masraf Al Rayan",
      image: "/images/partners/masraf-logo.svg", // Placeholder
      alt: getPartnerAlt("masrafAlt"),
    },
  ];

  return (
    <div className={`flex flex-col gap-8 ${isRTL ? "rtl" : "ltr"}`}>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center">
          {t("trustBadges_title")}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {badges.map((badge) => (
            <div key={badge.id} className="flex flex-col items-center">
              <div className="w-20 h-20 relative">
                <Image
                  src={badge.image}
                  alt={badge.alt}
                  layout="fill"
                  objectFit="contain"
                  className="transition-opacity hover:opacity-80"
                />
              </div>
              <span className="mt-2 text-sm text-gray-600 text-center">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-center">
          {t("partners_title")}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {banks.map((bank) => (
            <div
              key={bank.id}
              className="w-32 h-16 relative grayscale hover:grayscale-0 transition-all"
            >
              <Image
                src={bank.image}
                alt={bank.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QatarTrustBadges;

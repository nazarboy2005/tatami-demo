import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface IslamicDate {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  date: string; // Format: "YYYY-MM-DD"
  hijriDate: string; // Format: "YYYY-MM-DD" in Hijri calendar
  importance: "high" | "medium" | "low";
}

const islamicHolidays: IslamicDate[] = [
  {
    id: "ramadan-start",
    name: {
      en: "Beginning of Ramadan",
      ar: "بداية شهر رمضان",
    },
    description: {
      en: "The holy month of fasting begins",
      ar: "بداية شهر الصيام المبارك",
    },
    date: "2024-03-11", // Example date (changes yearly)
    hijriDate: "1445-09-01",
    importance: "high",
  },
  {
    id: "eid-al-fitr",
    name: {
      en: "Eid al-Fitr",
      ar: "عيد الفطر",
    },
    description: {
      en: "Festival of Breaking the Fast",
      ar: "عيد الإفطار بعد شهر رمضان",
    },
    date: "2024-04-10", // Example date (changes yearly)
    hijriDate: "1445-10-01",
    importance: "high",
  },
  {
    id: "eid-al-adha",
    name: {
      en: "Eid al-Adha",
      ar: "عيد الأضحى",
    },
    description: {
      en: "Festival of Sacrifice",
      ar: "عيد التضحية",
    },
    date: "2024-06-17", // Example date (changes yearly)
    hijriDate: "1445-12-10",
    importance: "high",
  },
  {
    id: "islamic-new-year",
    name: {
      en: "Islamic New Year",
      ar: "رأس السنة الهجرية",
    },
    description: {
      en: "Beginning of the Hijri Calendar Year",
      ar: "بداية السنة في التقويم الهجري",
    },
    date: "2024-07-07", // Example date (changes yearly)
    hijriDate: "1446-01-01",
    importance: "medium",
  },
  {
    id: "ashura",
    name: {
      en: "Day of Ashura",
      ar: "يوم عاشوراء",
    },
    description: {
      en: "The tenth day of Muharram",
      ar: "اليوم العاشر من شهر محرم",
    },
    date: "2024-07-16", // Example date (changes yearly)
    hijriDate: "1446-01-10",
    importance: "medium",
  },
  {
    id: "mawlid",
    name: {
      en: "Mawlid al-Nabi",
      ar: "المولد النبوي",
    },
    description: {
      en: "Birth of Prophet Muhammad",
      ar: "ذكرى مولد النبي محمد",
    },
    date: "2024-09-15", // Example date (changes yearly)
    hijriDate: "1446-03-12",
    importance: "medium",
  },
];

interface IslamicCalendarProps {
  displayCount?: number;
  showImportanceLevel?: boolean;
  className?: string;
}

const IslamicCalendar: React.FC<IslamicCalendarProps> = ({
  displayCount = 3,
  showImportanceLevel = false,
  className = "",
}) => {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const [upcomingHolidays, setUpcomingHolidays] = useState<IslamicDate[]>([]);

  useEffect(() => {
    // Get current date
    const today = new Date();

    // Filter holidays that are upcoming and sort by date
    const upcoming = islamicHolidays
      .filter((holiday) => {
        const holidayDate = new Date(holiday.date);
        return holidayDate >= today;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, displayCount);

    setUpcomingHolidays(upcoming);
  }, [displayCount]);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    // Format based on language
    if (language === "ar") {
      // Arabic date format
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("ar-QA", options);
    } else {
      // English date format
      const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return date.toLocaleDateString("en-US", options);
    }
  };

  const getImportanceClass = (importance: "high" | "medium" | "low") => {
    switch (importance) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-amber-100 text-amber-800";
      case "low":
        return "bg-blue-100 text-blue-800";
      default:
        return "";
    }
  };

  if (upcomingHolidays.length === 0) {
    return null;
  }

  const getImportanceText = (importance: "high" | "medium" | "low") => {
    return t(`importance_${importance}`);
  };

  return (
    <div className={`${className}`} dir={isRTL ? "rtl" : "ltr"}>
      <h3 className="text-xl font-semibold mb-4">
        {t("upcomingIslamicHolidays")}
      </h3>
      <div className="space-y-4">
        {upcomingHolidays.map((holiday) => (
          <div
            key={holiday.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div
              className={`flex justify-between items-start ${
                isRTL ? "flex-row-reverse" : ""
              }`}
            >
              <div>
                <h4 className="font-medium text-lg">
                  {holiday.name[language]}
                </h4>
                <p className="text-gray-600">{holiday.description[language]}</p>
              </div>
              <div className={`text-${isRTL ? "left" : "right"}`}>
                <p className="text-sm font-medium">
                  {formatDate(holiday.date)}
                </p>
                <p
                  className={`text-xs text-gray-500 ${isRTL ? "" : "dir-rtl"}`}
                >
                  {holiday.hijriDate}
                </p>
                {showImportanceLevel && (
                  <span
                    className={`inline-block px-2 py-1 text-xs rounded mt-2 ${getImportanceClass(
                      holiday.importance
                    )}`}
                  >
                    {getImportanceText(holiday.importance)}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IslamicCalendar;

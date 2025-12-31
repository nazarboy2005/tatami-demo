"use client";

import React, { memo } from "react";
import DirectionLayout from "@/components/DirectionLayout";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { Section } from "@/app/components/ui/Section";
import { Container } from "@/app/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";

type SectionBlock = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

const BulletList = memo(function BulletList({
  items,
  isArabic,
}: {
  items: string[];
  isArabic: boolean;
}) {
  return (
    <ul
      role="list"
      className={`mt-6 space-y-3 ${
        isArabic ? "pr-6" : "pl-6"
      } text-base text-[#34423d]`}
    >
      {items.map((item) => (
        <li key={item} className="relative leading-relaxed">
          <span
            aria-hidden
            className={`absolute ${
              isArabic ? "-right-6" : "-left-6"
            } top-2 h-2 w-2 rounded-full bg-[#025356]`}
          />
          {item}
        </li>
      ))}
    </ul>
  );
});

const Card = memo(function Card({
  title,
  children,
  dir,
}: {
  title: string;
  children: React.ReactNode;
  dir: "rtl" | "ltr";
}) {
  return (
    <div
      dir={dir}
      className="rounded-2xl border-2 border-[#d2fce3] bg-gradient-to-br from-white to-[#f1fbf7] p-8 shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <h3 className="mb-3 font-heading text-xl font-bold text-[#025356]">
        {title}
      </h3>
      <div className="text-sm leading-relaxed text-[#617268]">{children}</div>
    </div>
  );
});

// -----------------------------
// Page
// -----------------------------

const PrivacyPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  const dir: "rtl" | "ltr" = isArabic ? "rtl" : "ltr";

  const privacySections: SectionBlock[] = [
    {
      heading: "privacy_section_1_heading",
      paragraphs: ["privacy_section_1_para"],
      bullets: [
        "privacy_section_1_bullet_1",
        "privacy_section_1_bullet_2",
        "privacy_section_1_bullet_3",
        "privacy_section_1_bullet_4",
        "privacy_section_1_bullet_5",
      ],
    },
    {
      heading: "privacy_section_2_heading",
      paragraphs: [
        "privacy_section_2_para_1",
        "privacy_section_2_para_2",
        "privacy_section_2_para_3",
      ],
    },
    {
      heading: "privacy_section_3_heading",
      paragraphs: ["privacy_section_3_para"],
      bullets: [
        "privacy_section_3_bullet_1",
        "privacy_section_3_bullet_2",
        "privacy_section_3_bullet_3",
        "privacy_section_3_bullet_4",
      ],
    },
    {
      heading: "privacy_section_4_heading",
      paragraphs: ["privacy_section_4_para"],
      bullets: [
        "privacy_section_4_bullet_1",
        "privacy_section_4_bullet_2",
        "privacy_section_4_bullet_3",
        "privacy_section_4_bullet_4",
        "privacy_section_4_bullet_5",
        "privacy_section_4_bullet_6",
      ],
    },
  ];

  const rightsSection: SectionBlock = {
    heading: "privacy_rights_heading_1",
    paragraphs: ["privacy_rights_para_1"],
    bullets: [
      "privacy_rights_bullet_1",
      "privacy_rights_bullet_2",
      "privacy_rights_bullet_3",
      "privacy_rights_bullet_4",
      "privacy_rights_bullet_5",
      "privacy_rights_bullet_6",
    ],
  };

  const gccSection: SectionBlock = {
    heading: "privacy_rights_heading_2",
    paragraphs: ["privacy_rights_para_2"],
  };

  return (
    <DirectionLayout className="flex min-h-screen flex-col bg-[#f8f8f8]">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-[#025356] py-20 text-white">
          <Container>
            <div className="mx-auto max-w-4xl" dir={dir}>
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#d2fce3]">
                {t("privacy_statement")}
              </p>
              <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                {t("privacy_title")}
              </h1>
              <p className="text-lg leading-relaxed text-[#d2fce3] md:text-xl">
                {t("privacy_subtitle")}
              </p>
              <p className="mt-8 text-sm text-[#d2fce3]/80">
                {t("privacy_version")}
              </p>
            </div>
          </Container>
        </section>

        {/* Highlights */}
        <Section className="bg-white py-16">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 md:grid-cols-3" dir={dir}>
                <Card title={t("effective_date")} dir={dir}>
                  {t("effective_date_desc")}
                </Card>
                <Card title={t("who_we_are")} dir={dir}>
                  {t("who_we_are_desc")}
                </Card>
                <Card title={t("where_applies")} dir={dir}>
                  {t("where_applies_desc")}
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        {/* Intro */}
        <Section className="bg-[#f8f8f8] py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div
                dir={dir}
                className="space-y-6 rounded-2xl bg-white p-10 shadow-lg"
              >
                {["privacy_intro_1", "privacy_intro_2", "privacy_intro_3"].map(
                  (k) => (
                    <p
                      key={k}
                      className="text-lg leading-relaxed text-[#34423d]"
                    >
                      {t(k)}
                    </p>
                  )
                )}
                <div
                  className={`rounded-xl bg-[#f1fbf7] p-6 ${
                    isArabic
                      ? "border-r-4 border-[#025356]"
                      : "border-l-4 border-[#025356]"
                  }`}
                >
                  <p className="text-base font-semibold leading-relaxed text-[#025356]">
                    {t("client_data_notice")}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Content */}
        <Section className="bg-white py-16">
          <Container>
            <div className="mx-auto max-w-4xl space-y-12" dir={dir}>
              {privacySections.map((section) => (
                <article
                  key={section.heading}
                  className="rounded-2xl bg-gradient-to-br from-white to-[#fafafa] p-10 shadow-md transition-shadow duration-300 hover:shadow-lg"
                >
                  <h2 className="mb-6 font-heading text-2xl font-bold text-[#025356] md:text-3xl">
                    {t(section.heading)}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((p) => (
                      <p
                        key={p}
                        className="text-base leading-relaxed text-[#34423d]"
                      >
                        {t(p)}
                      </p>
                    ))}
                  </div>
                  {section.bullets && (
                    <BulletList
                      items={section.bullets.map((b) => t(b))}
                      isArabic={isArabic}
                    />
                  )}
                </article>
              ))}
            </div>
          </Container>
        </Section>

        {/* Rights */}
        <Section className="bg-[#f8f8f8] py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div dir={dir} className="rounded-2xl bg-white p-10 shadow-lg">
                <h2 className="mb-8 font-heading text-3xl font-bold text-[#025356] md:text-4xl">
                  {t("privacy_rights_title")}
                </h2>

                <div className="space-y-8">
                  <div>
                    <h3 className="mb-4 text-xl font-bold text-[#025356]">
                      {t(rightsSection.heading)}
                    </h3>
                    <div className="space-y-3">
                      {rightsSection.paragraphs.map((p) => (
                        <p
                          key={p}
                          className="text-base leading-relaxed text-[#34423d]"
                        >
                          {t(p)}
                        </p>
                      ))}
                    </div>
                    {rightsSection.bullets && (
                      <BulletList
                        items={rightsSection.bullets.map((b) => t(b))}
                        isArabic={isArabic}
                      />
                    )}
                  </div>

                  <div className="border-t border-[#ededed] pt-8">
                    <h3 className="mb-4 text-xl font-bold text-[#025356]">
                      {t(gccSection.heading)}
                    </h3>
                    <div className="space-y-3">
                      {gccSection.paragraphs.map((p) => (
                        <p
                          key={p}
                          className="text-base leading-relaxed text-[#34423d]"
                        >
                          {t(p)}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Contact */}
        <Section className="bg-white py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <h2
                dir={dir}
                className="mb-10 text-center font-heading text-3xl font-bold text-[#025356] md:text-4xl"
              >
                {t("contact_us_heading")}
              </h2>

              <div className="grid gap-8">
                <Card title={t("privacy_contact_primary")} dir={dir}>
                  <ul className="space-y-2">
                    <li className="font-medium">
                      {t("privacy_contact_company")}
                    </li>
                    <li>{t("privacy_contact_address_line1")}</li>
                    <li>{t("privacy_contact_address_line2")}</li>
                    <li className="pt-2">{t("privacy_contact_email")}</li>
                    <li>{t("privacy_contact_phone")}</li>
                  </ul>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </DirectionLayout>
  );
};

export default PrivacyPage;

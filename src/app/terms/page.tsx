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

const TermsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  const dir: "rtl" | "ltr" = isArabic ? "rtl" : "ltr";

  const termsSections: SectionBlock[] = [
    {
      heading: "terms_section_1_heading",
      paragraphs: ["terms_section_1_para"],
      bullets: [
        "terms_section_1_bullet_1",
        "terms_section_1_bullet_2",
        "terms_section_1_bullet_3",
        "terms_section_1_bullet_4",
      ],
    },
    {
      heading: "terms_section_2_heading",
      paragraphs: [
        "terms_section_2_para_1",
        "terms_section_2_para_2",
        "terms_section_2_para_3",
      ],
    },
    {
      heading: "terms_section_3_heading",
      paragraphs: ["terms_section_3_para"],
      bullets: [
        "terms_section_3_bullet_1",
        "terms_section_3_bullet_2",
        "terms_section_3_bullet_3",
        "terms_section_3_bullet_4",
        "terms_section_3_bullet_5",
      ],
    },
    {
      heading: "terms_section_4_heading",
      paragraphs: [
        "terms_section_4_para_1",
        "terms_section_4_para_2",
        "terms_section_4_para_3",
      ],
    },
    {
      heading: "terms_section_5_heading",
      paragraphs: ["terms_section_5_para"],
      bullets: [
        "terms_section_5_bullet_1",
        "terms_section_5_bullet_2",
        "terms_section_5_bullet_3",
        "terms_section_5_bullet_4",
        "terms_section_5_bullet_5",
      ],
    },
    {
      heading: "terms_section_6_heading",
      paragraphs: ["terms_section_6_para_1", "terms_section_6_para_2"],
    },
    {
      heading: "terms_section_7_heading",
      paragraphs: ["terms_section_7_para_1", "terms_section_7_para_2"],
    },
    {
      heading: "terms_section_8_heading",
      paragraphs: [
        "terms_section_8_para_1",
        "terms_section_8_para_2",
        "terms_section_8_para_3",
      ],
    },
    {
      heading: "terms_section_9_heading",
      paragraphs: ["terms_section_9_para_1", "terms_section_9_para_2"],
    },
    {
      heading: "terms_section_10_heading",
      paragraphs: ["terms_section_10_para_1", "terms_section_10_para_2"],
    },
    {
      heading: "terms_section_11_heading",
      paragraphs: ["terms_section_11_para_1", "terms_section_11_para_2"],
    },
    {
      heading: "terms_section_12_heading",
      paragraphs: ["terms_section_12_para_1", "terms_section_12_para_2"],
    },
    {
      heading: "terms_section_13_heading",
      paragraphs: ["terms_section_13_para_1", "terms_section_13_para_2"],
    },
    {
      heading: "terms_section_14_heading",
      paragraphs: ["terms_section_14_para"],
    },
    {
      heading: "terms_section_15_heading",
      paragraphs: ["terms_section_15_para"],
    },
    {
      heading: "terms_section_16_heading",
      paragraphs: ["terms_section_16_para_1", "terms_section_16_para_2"],
    },
    {
      heading: "terms_section_17_heading",
      paragraphs: ["terms_section_17_para"],
    },
  ];

  return (
    <DirectionLayout className="flex min-h-screen flex-col bg-[#f8f8f8]">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="bg-[#025356] py-20 text-white">
          <Container>
            <div className="mx-auto max-w-4xl" dir={dir}>
              <p className="mb-4 text-sm font-medium uppercase tracking-wide text-[#d2fce3]">
                {t("terms_statement")}
              </p>
              <h1 className="mb-6 font-heading text-4xl font-bold md:text-5xl lg:text-6xl">
                {t("terms_title")}
              </h1>
              <p className="text-lg leading-relaxed text-[#d2fce3] md:text-xl">
                {t("terms_subtitle")}
              </p>
              <p className="mt-8 text-sm text-[#d2fce3]/80">
                {t("terms_last_updated")}: {t("terms_version")}
              </p>
            </div>
          </Container>
        </section>

        {/* Highlights */}
        <Section className="bg-white py-16">
          <Container>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 md:grid-cols-3" dir={dir}>
                <Card title={t("terms_effective_date")} dir={dir}>
                  {t("terms_effective_date_desc")}
                </Card>
                <Card title={t("terms_acceptance")} dir={dir}>
                  {t("terms_acceptance_desc")}
                </Card>
                <Card title={t("terms_jurisdiction")} dir={dir}>
                  {t("terms_jurisdiction_desc")}
                </Card>
              </div>
            </div>
          </Container>
        </Section>

        {/* Introduction */}
        <Section className="bg-[#f8f8f8] py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div
                dir={dir}
                className="space-y-6 rounded-2xl bg-white p-10 shadow-lg"
              >
                {["terms_intro_1", "terms_intro_2", "terms_intro_3"].map(
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
                  className={`mt-6 rounded-xl bg-[#f1fbf7] p-6 ${
                    isArabic
                      ? "border-r-4 border-[#025356]"
                      : "border-l-4 border-[#025356]"
                  }`}
                >
                  <p className="text-base font-semibold leading-relaxed text-[#025356]">
                    {t("terms_acceptance_notice")}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Terms Sections */}
        <Section className="bg-white py-16">
          <Container>
            <div className="mx-auto max-w-4xl space-y-12" dir={dir}>
              {termsSections.map((section) => (
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

        {/* Contact Information */}
        <Section className="bg-[#f8f8f8] py-16">
          <Container>
            <div className="mx-auto max-w-4xl">
              <div dir={dir} className="rounded-2xl bg-white p-10 shadow-lg">
                <h2 className="mb-6 font-heading text-2xl font-bold text-[#025356] md:text-3xl">
                  {t("contact_us_heading")}
                </h2>
                <p className="mb-6 text-base leading-relaxed text-[#34423d]">
                  {t("terms_contact_info")}
                </p>
                <div className="space-y-4">
                  <div className="rounded-lg bg-[#f1fbf7] p-6">
                    <h3 className="mb-2 font-heading text-lg font-bold text-[#025356]">
                      {t("privacy_contact_company")}
                    </h3>
                    <p className="text-sm text-[#617268]">
                      {t("privacy_contact_address_line1")}
                    </p>
                    <p className="text-sm text-[#617268]">
                      {t("privacy_contact_address_line2")}
                    </p>
                    <p className="mt-2 text-sm text-[#617268]">
                      {t("privacy_contact_email")}
                    </p>
                    <p className="text-sm text-[#617268]">
                      {t("privacy_contact_phone")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </DirectionLayout>
  );
};

export default TermsPage;

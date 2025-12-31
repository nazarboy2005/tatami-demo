"use client";

import React, { useEffect, useState } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import DirectionLayout from "@/components/DirectionLayout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Section } from "@/app/components/ui/Section";
import { Container } from "@/app/components/ui/Container";
import Link from "next/link";
import {
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaChartLine,
  FaCreditCard,
  FaMobile,
  FaAward,
  FaSearch,
  FaRocket,
} from "react-icons/fa";

// Enhanced Animated Counter Component
const AnimatedCounter = ({
  end,
  duration = 2000,
  decimals = 0,
}: {
  end: number;
  duration?: number;
  decimals?: number;
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      const value = progress * end;
      setCount(
        decimals > 0 ? parseFloat(value.toFixed(decimals)) : Math.floor(value)
      );

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration, decimals, hasAnimated]);

  return <span>{decimals > 0 ? count.toFixed(decimals) : count}</span>;
};

export default function AboutPage() {
  const { t, language } = useLanguage();
  const isArabic = language === "ar";
  const dir: "rtl" | "ltr" = isArabic ? "rtl" : "ltr";

  const values = [
    {
      icon: FaShieldAlt,
      title: "about_value_trust_title",
      description: "about_value_trust_desc",
      iconBg: "bg-[#d2fce3]",
      iconColor: "text-[#025356]",
    },
    {
      icon: FaLightbulb,
      title: "about_value_innovation_title",
      description: "about_value_innovation_desc",
      iconBg: "bg-[#025356]",
      iconColor: "text-[#d2fce3]",
    },
    {
      icon: FaUsers,
      title: "about_value_customer_title",
      description: "about_value_customer_desc",
      iconBg: "bg-[#d2fce3]",
      iconColor: "text-[#025356]",
    },
    {
      icon: FaCheckCircle,
      title: "about_value_compliance_title",
      description: "about_value_compliance_desc",
      iconBg: "bg-[#025356]",
      iconColor: "text-[#d2fce3]",
    },
  ];

  const stats = [
    {
      label: "about_stat_founded",
      value: 2024,
      decimals: 0,
      icon: FaChartLine,
    },
    {
      label: "about_stat_market",
      value: 5.4,
      prefix: "$",
      suffix: "B",
      decimals: 1,
      icon: FaCreditCard,
    },
    {
      label: "about_stat_cheques",
      value: 90,
      suffix: "%",
      decimals: 0,
      icon: FaMobile,
    },
    {
      label: "about_stat_team",
      value: 15,
      suffix: "+",
      decimals: 0,
      icon: FaAward,
    },
  ];

  const storyTimeline = [
    {
      year: "2023",
      title: "about_story_chapter_1",
      content: "about_story_para1_enhanced",
      icon: FaSearch,
      colorClass: "from-[#025356] to-[#034a4d]",
    },
    {
      year: "2024",
      title: "about_story_chapter_2",
      content: "about_story_para2_enhanced",
      icon: FaLightbulb,
      colorClass: "from-[#e0a9ee] to-[#c77ddb]",
    },
    {
      year: "2025",
      title: "about_story_chapter_3",
      content: "about_story_para3_enhanced",
      icon: FaRocket,
      colorClass: "from-[#025356] to-[#034a4d]",
    },
  ];

  return (
    <DirectionLayout className="min-h-screen flex flex-col bg-gradient-to-b from-white to-[#f8f8f8]">
      <Header />

      <main className="flex-grow">
        {/* Hero Section - Enhanced */}
        <section className="relative bg-[#025356] text-white pt-32 pb-24 overflow-hidden">
          {/* Simplified background - removed animated glows */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center" dir={dir}>
              <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/20">
                <div className="w-2 h-2 bg-[#d2fce3] rounded-full"></div>
                {t("about_hero_badge")}
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight">
                {t("about_hero_title")}
              </h1>
              <p className="text-xl md:text-2xl text-[#d2fce3] leading-relaxed mb-10 max-w-3xl mx-auto">
                {t("about_hero_subtitle")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/waitlist"
                  className="group px-8 py-4 bg-white text-[#025356] font-bold rounded-xl hover:bg-[#d2fce3] transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
                >
                  {t("joinWaitlist")}
                  <svg
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-[#025356] transition-all transform hover:scale-105"
                >
                  {t("contact")}
                </Link>
              </div>
            </div>
          </Container>

          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full"
            >
              <path
                d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>

        {/* Stats Section - Enhanced */}
        <Section
          id="stats-section"
          className="bg-white py-4 -mt-1 relative z-20"
        >
          <Container>
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#f1fbf7] via-white to-[#fef7fa] rounded-3xl shadow-2xl p-8 md:p-12 border border-[#025356]/5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="text-center group cursor-pointer"
                    >
                      <div className="flex justify-center mb-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#025356] to-[#034a4d] rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#025356] to-[#034a4d] bg-clip-text text-transparent mb-2">
                        {stat.prefix}
                        <AnimatedCounter
                          end={stat.value}
                          decimals={stat.decimals || 0}
                        />
                        {stat.suffix}
                      </div>
                      <div className="text-sm md:text-base text-[#617268] font-medium">
                        {t(stat.label)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Bold Statement Section */}
        <Section className="bg-gradient-to-r from-[#f8f8f8] to-white py-16">
          <Container>
            <div className="max-w-4xl mx-auto text-center" dir={dir}>
              <div className="relative">
                <div className="absolute -top-8 -left-8 text-[#025356] opacity-10 text-9xl font-bold">
                  "
                </div>
                <p className="text-2xl md:text-4xl font-bold text-[#025356] leading-tight relative z-10 px-4">
                  {t("about_bold_statement")}
                </p>
                <div className="absolute -bottom-8 -right-8 text-[#025356] opacity-10 text-9xl font-bold">
                  "
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Mission & Vision - Enhanced */}
        <Section className="bg-white py-24">
          <Container>
            <div className="max-w-6xl mx-auto" dir={dir}>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-[#025356] mb-6 font-heading">
                  {t("about_mission_vision_title")}
                </h2>
                <div className="flex justify-center gap-2 items-center">
                  <div className="w-16 h-1 bg-gradient-to-r from-transparent to-[#025356]"></div>
                  <div className="w-2 h-2 bg-[#025356] rounded-full"></div>
                  <div className="w-24 h-1 bg-[#025356]"></div>
                  <div className="w-2 h-2 bg-[#025356] rounded-full"></div>
                  <div className="w-16 h-1 bg-gradient-to-l from-transparent to-[#025356]"></div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Mission Card - Removed animated background glow */}
                <div className="group relative bg-gradient-to-br from-[#025356] to-[#025356] rounded-3xl p-10 text-white overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
                  {/* Simplified background */}
                  <div className="absolute inset-0 opacity-10">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                        backgroundSize: "30px 30px",
                      }}
                    ></div>
                  </div>

                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#d2fce3] rounded-2xl mb-8 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-10 h-10 text-[#025356]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                      {t("about_mission_title")}
                    </h3>

                    <div className="mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                      <p className="text-[#d2fce3] font-bold text-xl">
                        {t("about_mission_highlight")}
                      </p>
                    </div>

                    <p className="text-lg leading-relaxed text-white/95">
                      {t("about_mission_text")}
                    </p>

                    {/* <div className="mt-10 flex items-center gap-3">
                      <div className="w-16 h-1 bg-[#d2fce3]"></div>
                      <span className="text-sm font-bold text-[#d2fce3] uppercase tracking-wider">
                        {t("about_our_purpose")}
                      </span>
                    </div> */}
                  </div>
                </div>

                {/* Vision Card - Removed animated background glow */}
                <div className="group relative bg-gradient-to-br from-white to-[#f1fbf7] rounded-3xl p-10 border-2 border-[#025356]/10 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-[#025356] rounded-2xl mb-8 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg">
                      <svg
                        className="w-10 h-10 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading text-[#025356]">
                      {t("about_vision_title")}
                    </h3>

                    <div className="mb-6 p-4 bg-gradient-to-r from-[#025356]/5 to-[#e0a9ee]/5 rounded-xl border border-[#025356]/10">
                      <p className="text-[#025356] font-bold text-xl">
                        {t("about_vision_highlight")}
                      </p>
                    </div>

                    <p className="text-lg text-[#34423d] leading-relaxed">
                      {t("about_vision_text")}
                    </p>

                    {/* <div className="mt-10 flex items-center gap-3">
                      <div className="w-16 h-1 bg-[#025356]"></div>
                      <span className="text-sm font-bold text-[#025356] uppercase tracking-wider">
                        {t("about_our_ambition")}
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Story Timeline - Enhanced */}
        <Section className="bg-gradient-to-b from-[#f8f8f8] to-white py-24">
          <Container>
            <div className="max-w-6xl mx-auto" dir={dir}>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-[#025356] mb-6 font-heading">
                  {t("about_story_title")}
                </h2>
                <p className="text-xl text-[#617268] max-w-3xl mx-auto">
                  {t("about_story_subtitle")}
                </p>
              </div>

              <div className="space-y-12">
                {storyTimeline.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-[#025356]/10"
                    >
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#025356]"></div>

                      <div className="p-8 md:p-12 pl-10 md:pl-16">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          {/* Icon and Year */}
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-[#025356] rounded-xl flex items-center justify-center shadow-lg mb-4">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            {/* <span className="inline-block px-4 py-2 bg-[#025356]/10 text-[#025356] text-sm font-bold rounded-lg">
                              {t(`about_story_year_${item.year}`)}
                            </span> */}
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-[#025356] mb-4 font-heading">
                              {t(item.title)}
                            </h3>
                            <p className="text-lg text-[#617268] leading-relaxed">
                              {t(item.content)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* Founders Section - Updated button styles */}
        <Section className="bg-white py-24">
          <Container>
            <div className="max-w-4xl mx-auto text-center" dir={dir}>
              <div className="inline-flex items-center justify-center w-24 h-24 bg-[#025356] rounded-3xl mb-8 shadow-2xl">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#025356] mb-6 font-heading">
                {t("about_founders_title")}
              </h2>
              <p className="text-xl text-[#617268] leading-relaxed mb-10 max-w-2xl mx-auto">
                {t("about_founders_text")}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="group px-8 py-4 bg-[#025356] text-white rounded-2xl transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  <span className="font-bold text-lg">
                    {t("about_founders_expertise_1")}
                  </span>
                </div>
                <div className="group px-8 py-4 bg-[#025356] text-white rounded-2xl transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  <span className="font-bold text-lg">
                    {t("about_founders_expertise_2")}
                  </span>
                </div>
                <div className="group px-8 py-4 bg-[#025356] text-white rounded-2xl transform hover:scale-105 transition-all shadow-lg hover:shadow-xl">
                  <span className="font-bold text-lg">
                    {t("about_founders_expertise_3")}
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Values Section - Enhanced */}
        <Section className="bg-gradient-to-b from-[#f8f8f8] to-white py-24">
          <Container>
            <div className="max-w-6xl mx-auto" dir={dir}>
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-[#025356] mb-6 font-heading">
                  {t("about_values_title")}
                </h2>
                <p className="text-xl text-[#617268] max-w-3xl mx-auto">
                  {t("about_values_subtitle")}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-[#025356]/20"
                    >
                      <div className="flex justify-center mb-6">
                        <div
                          className={`w-20 h-20 ${value.iconBg} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                        >
                          <Icon className={`w-10 h-10 ${value.iconColor}`} />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-[#025356] mb-4 text-center font-heading">
                        {t(value.title)}
                      </h3>
                      <p className="text-[#617268] text-center leading-relaxed">
                        {t(value.description)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </Section>

        {/* CTA Section - Removed background glows */}
        <Section className="bg-[#025356] text-white py-24 relative overflow-hidden">
          {/* Simplified background */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>

          <Container className="relative z-10">
            <div className="max-w-4xl mx-auto text-center" dir={dir}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                {t("about_cta_title")}
              </h2>
              <p className="text-xl text-[#d2fce3] mb-12 leading-relaxed max-w-3xl mx-auto">
                {t("about_cta_text")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/waitlist"
                  className="group inline-flex items-center justify-center px-10 py-5 bg-white text-[#025356] font-bold rounded-2xl hover:bg-[#d2fce3] transition-all transform hover:scale-105 shadow-2xl text-lg"
                >
                  {t("about_cta_button_enhanced")}
                  <svg
                    className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
              {/* <p className="mt-6 text-sm text-white/70">
                {t("about_cta_subtext")}
              </p> */}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </DirectionLayout>
  );
}

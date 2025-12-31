"use client";

import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { ProblemStatement } from "./components/ProblemStatement";
import { CTAWaitlist } from "./components/CTAWaitlist";
import { Footer } from "./components/Footer";
import DirectionLayout from "@/components/DirectionLayout";
import IslamicCalendar from "./components/IslamicCalendar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { isRTL } = useLanguage();

  return (
    <DirectionLayout className="min-h-screen w-full">
      <Header />

      <main className="flex-grow">
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <ProblemStatement />

        {/* Islamic Calendar Section */}
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <IslamicCalendar
              displayCount={3}
              showImportanceLevel={true}
              className="max-w-3xl mx-auto"
            />
          </div>
        </div>

        <CTAWaitlist />
      </main>

      <Footer />
    </DirectionLayout>
  );
}

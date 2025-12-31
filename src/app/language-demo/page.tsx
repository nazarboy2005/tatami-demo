"use client";

import React from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import LanguageExample from "@/components/examples/LanguageExample";
import DirectionLayout from "@/components/DirectionLayout";

export default function LanguageDemoPage() {
  return (
    <DirectionLayout className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-8">
        <LanguageExample />
      </main>
      <Footer />
    </DirectionLayout>
  );
}

"use client";

import React, { useState } from "react";
import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { Container } from "@/app/components/ui/Container";
import { FeatureCard, Card } from "@/app/components/ui/Card";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FeatureGrid } from "@/app/components/ui/FeatureGrid";
import {
  Testimonials,
  TestimonialProps,
} from "@/app/components/ui/Testimonials";
import { CTASection } from "@/app/components/ui/CTASection";
import { ComparisonTable } from "@/app/components/ui/ComparisonTable";
import {
  PaymentIcon,
  RewardsIcon,
  SecurityIcon,
  AnalyticsIcon,
  PropertyIcon,
  CalendarIcon,
  UserIcon,
} from "@/app/components/ui/Icons";
import { Button } from "@/app/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import DirectionLayout from "@/components/DirectionLayout";
import { useLanguage } from "@/contexts/LanguageContext";

// SVG Icons for features
import {
  FaChartLine,
  FaMoneyBillWave,
  FaBell,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaChartBar,
} from "react-icons/fa";

// Dashboard preview component
const DashboardPreview = () => {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-gray-200">
      {/* Dashboard Header */}
      <div className="bg-[#025356] text-white p-6 flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-bold font-heading">
            Landlord Dashboard
          </h3>
          <p className="opacity-80">Welcome back, Abdullah</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-white/10 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
          <button className="bg-white/10 p-2 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dashboard Summary */}
      <div className="grid grid-cols-3 gap-4 p-6 bg-white">
        <div className="bg-[#d2fce3]/20 p-4 rounded-lg">
          <p className="text-[#617268] text-sm">Total Properties</p>
          <p className="text-3xl font-bold text-[#025356]">8</p>
        </div>
        <div className="bg-[#d2fce3]/20 p-4 rounded-lg">
          <p className="text-[#617268] text-sm">Occupancy Rate</p>
          <p className="text-3xl font-bold text-[#025356]">92%</p>
        </div>
        <div className="bg-[#d2fce3]/20 p-4 rounded-lg">
          <p className="text-[#617268] text-sm">Monthly Revenue</p>
          <p className="text-3xl font-bold text-[#025356]">QAR 85,300</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="p-6 bg-white border-t border-gray-200">
        <h4 className="text-xl font-bold text-[#025356] mb-4">
          Recent Payments
        </h4>
        <div className="overflow-hidden border border-gray-200 rounded-lg">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#617268]">
                  Tenant
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#617268]">
                  Property
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#617268]">
                  Amount
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#617268]">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-sm font-medium text-[#617268]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700">
                  Fatima Al-Ali
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  Pearl Tower, Apt 2103
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">QAR 12,500</td>
                <td className="py-3 px-4 text-sm text-gray-700">May 1, 2023</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="py-3 px-4 text-sm text-gray-700">
                  Mohammed Khan
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  Al Sadd Heights, Apt 405
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">QAR 8,800</td>
                <td className="py-3 px-4 text-sm text-gray-700">May 2, 2023</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                    Completed
                  </span>
                </td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-sm text-gray-700">
                  Sarah Williams
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">
                  The View, Apt 1801
                </td>
                <td className="py-3 px-4 text-sm text-gray-700">QAR 15,000</td>
                <td className="py-3 px-4 text-sm text-gray-700">May 3, 2023</td>
                <td className="py-3 px-4">
                  <span className="px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                    Scheduled
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts & Analytics */}
      <div className="grid grid-cols-2 gap-6 p-6 bg-white border-t border-gray-200">
        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-bold text-[#617268] mb-4">
            Payment Analytics
          </h4>
          <div className="h-40 flex items-end justify-between">
            <div className="w-8 bg-[#025356] h-[20%] rounded-t-sm"></div>
            <div className="w-8 bg-[#025356] h-[60%] rounded-t-sm"></div>
            <div className="w-8 bg-[#025356] h-[80%] rounded-t-sm"></div>
            <div className="w-8 bg-[#025356] h-[40%] rounded-t-sm"></div>
            <div className="w-8 bg-[#025356] h-[70%] rounded-t-sm"></div>
            <div className="w-8 bg-[#025356] h-[90%] rounded-t-sm"></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-[#617268]">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-4">
          <h4 className="text-sm font-bold text-[#617268] mb-4">
            Property Occupancy
          </h4>
          <div className="flex items-center justify-center h-40">
            <div className="w-32 h-32 rounded-full border-8 border-[#025356] relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-[#025356]">92%</span>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 rounded-full bg-white border-4 border-[#d2fce3]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Revenue Analytics Calculator component
const RevenueCalculator = () => {
  const [properties, setProperties] = useState(3);
  const [avgMonthlyRent, setAvgMonthlyRent] = useState(10000);
  const [currentVacancyRate, setCurrentVacancyRate] = useState(10);

  // Calculate metrics for property portfolio
  const calculateMetrics = () => {
    const annualRevenue = properties * avgMonthlyRent * 12;
    const occupiedUnits = properties * (1 - currentVacancyRate / 100);
    const vacantUnits = properties - occupiedUnits;
    const vacancyLoss = vacantUnits * avgMonthlyRent * 12;
    const potentialImprovement = vacancyLoss * 0.5; // Assume Tatami reduces vacancy by 50%

    // Calculate time saved (hours per month)
    const timeSavedPerProperty = 2; // Hours saved per property per month
    const totalTimeSaved = properties * timeSavedPerProperty;

    return {
      annualRevenue,
      occupiedUnits,
      vacantUnits,
      vacancyLoss,
      potentialImprovement,
      totalTimeSaved,
    };
  };

  const metrics = calculateMetrics();

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold text-[#025356] font-heading mb-6">
        Calculate Your Portfolio Performance
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <label className="block text-[#617268] mb-2">
              Number of Properties
            </label>
            <input
              type="range"
              min="1"
              max="20"
              step="1"
              value={properties}
              onChange={(e) => setProperties(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">1</span>
              <span className="text-lg font-medium text-[#025356]">
                {properties} properties
              </span>
              <span className="text-sm text-gray-500">20</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#617268] mb-2">
              Average Monthly Rent (QAR)
            </label>
            <input
              type="range"
              min="5000"
              max="30000"
              step="1000"
              value={avgMonthlyRent}
              onChange={(e) => setAvgMonthlyRent(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">5,000</span>
              <span className="text-lg font-medium text-[#025356]">
                QAR {avgMonthlyRent.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">30,000</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#617268] mb-2">
              Current Vacancy Rate (%)
            </label>
            <input
              type="range"
              min="0"
              max="30"
              step="1"
              value={currentVacancyRate}
              onChange={(e) => setCurrentVacancyRate(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">0%</span>
              <span className="text-lg font-medium text-[#025356]">
                {currentVacancyRate}%
              </span>
              <span className="text-sm text-gray-500">30%</span>
            </div>
          </div>
        </div>

        <div className="bg-[#d2fce3]/20 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-[#025356] font-heading mb-4">
            Portfolio Performance
          </h4>

          <div className="mb-4">
            <p className="text-[#617268] mb-1">Annual Rental Revenue</p>
            <p className="text-3xl font-bold text-[#025356]">
              QAR {metrics.annualRevenue.toLocaleString()}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-[#617268] mb-1">Current Vacancy Loss</p>
            <p className="text-3xl font-bold text-[#025356]">
              QAR {metrics.vacancyLoss.toLocaleString()}
            </p>
          </div>

          <div className="mb-4">
            <p className="text-[#617268] mb-1">
              Potential Improvement with Tatami
            </p>
            <p className="text-3xl font-bold text-[#025356]">
              QAR {metrics.potentialImprovement.toLocaleString()}
            </p>
          </div>

          <div className="mt-6">
            <div className="bg-white rounded-md p-4 text-sm">
              <p className="font-semibold text-[#025356]">
                Time Savings with Tatami:
              </p>
              <p className="mt-2 text-[#617268]">
                Approximately{" "}
                <span className="font-bold">
                  {metrics.totalTimeSaved} hours
                </span>{" "}
                saved per month on rent collection and management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Process steps component
const ProcessSteps = () => {
  const steps = [
    {
      icon: <UserIcon size={32} color="#025356" />,
      title: "Register",
      description:
        "Create your landlord account with verified identification for security.",
    },
    {
      icon: <PropertyIcon size={32} color="#025356" />,
      title: "Add Properties",
      description:
        "Add your properties and set up payment terms, dates, and requirements.",
    },
    {
      icon: <CalendarIcon size={32} color="#025356" />,
      title: "Invite Tenants",
      description:
        "Send invitations to your tenants to join the platform and set up their payments.",
    },
    {
      icon: <AnalyticsIcon size={32} color="#025356" />,
      title: "Track & Manage",
      description:
        "Monitor payments, view analytics, and manage your properties all in one place.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {steps.map((step, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#d2fce3] flex items-center justify-center mb-4">
            {step.icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-[#025356] font-heading">
            {step.title}
          </h3>
          <p className="text-[#617268]">{step.description}</p>
        </div>
      ))}
    </div>
  );
};

// Testimonials data
const testimonialData: TestimonialProps[] = [
  {
    quote:
      "Managing properties in Qatar has never been easier. Tatami has eliminated the hassle of collecting and depositing cheques every month.",
    name: "Abdullah Al-Thani",
    title: "Property Owner, Doha",
    rating: 5,
  },
  {
    quote:
      "The analytics dashboard gives me insights I never had before. I now understand my cash flow and property performance better than ever.",
    name: "Khalid Al-Baker",
    title: "Real Estate Investor",
    rating: 5,
  },
  {
    quote:
      "I used to lose up to 5% of my rental income to payment delays and vacancy. With Tatami, my properties stay occupied and payments come on time.",
    name: "Mariam Al-Sulaiti",
    title: "Multi-property Owner",
    rating: 4,
  },
];

const LandlordSolutionPage = () => {
  // Use our consolidated language context
  const { t, isRTL } = useLanguage();

  return (
    <DirectionLayout className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-grow bg-white">
        {/* Hero Section */}
        <Section className="bg-gradient-to-r from-green-50 to-teal-50 py-16 md:py-24">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Streamline Your{" "}
                <span className="text-primary">Rental Income</span> in Qatar
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Tatami gives property owners and managers in Qatar a modern,
                digital solution to collect rent, track payments, and manage
                properties with unprecedented ease.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/waitlist">
                  <Button size="lg">Join Waitlist</Button>
                </Link>
                <Link href="/features">
                  <Button variant="outline" size="lg">
                    Explore Features
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="relative h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="/images/landlords.svg"
                  alt="Landlord using Tatami dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </Container>
        </Section>

        {/* Key Benefits Section */}
        <Section>
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Property Owners in Qatar Choose Tatami
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform is designed to modernize rent collection, simplify
                property management, and maximize your rental income.
              </p>
            </div>

            <FeatureGrid columns={{ sm: 1, md: 2, lg: 3 }}>
              <Card
                icon={<FaMoneyBillWave size={24} />}
                title="Guaranteed Payments"
                content={
                  <p className="text-gray-600 h-28">
                    Never chase tenants for payments again. Our platform ensures
                    timely, reliable rent collection with automatic reminders.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaChartLine size={24} />}
                title="Real-time Analytics"
                content={
                  <p className="text-gray-600 h-28">
                    Get a comprehensive view of your properties with intuitive
                    dashboards showing occupancy rates, payment history, and
                    financial trends.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaBell size={24} />}
                title="Automated Notifications"
                content={
                  <p className="text-gray-600 h-28">
                    Receive alerts for incoming payments, lease renewals, and
                    any payment issues before they become problems.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaShieldAlt size={24} />}
                title="Secure Banking Integration"
                content={
                  <p className="text-gray-600 h-28">
                    Our platform integrates securely with Qatar's banking
                    system, ensuring all transactions are fully compliant and
                    protected.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaFileInvoiceDollar size={24} />}
                title="Digital Documentation"
                content={
                  <p className="text-gray-600 h-28">
                    Store and access all rent receipts, payment histories, and
                    property documents in one secure digital location.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaChartBar size={24} />}
                title="Tax Preparation"
                content={
                  <p className="text-gray-600 h-28">
                    Generate comprehensive income reports with a single click,
                    making tax preparation and financial planning effortless.
                  </p>
                }
                cardClassName="h-full flex flex-col"
                bordered
                hoverable
              />
            </FeatureGrid>
          </Container>
        </Section>

        {/* How It Works Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works for Landlords
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started with Tatami's landlord platform is
                straightforward and hassle-free.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Register Your Properties
                </h3>
                <p className="text-gray-600">
                  Set up your account and add your properties with details like
                  address, rent amount, and payment schedule.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Invite Your Tenants
                </h3>
                <p className="text-gray-600">
                  Send invitations to your tenants to join Tatami. They'll
                  create accounts and set up their payment methods.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Collect Rent Digitally
                </h3>
                <p className="text-gray-600">
                  Start receiving digital payments according to your lease
                  terms, with comprehensive reporting and tracking.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Testimonials Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Property Owners Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from landlords across Qatar who have transformed their
                property management with Tatami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#025356] rounded-full flex items-center justify-center text-white font-bold">
                    AA
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Abdullah</h4>
                    <p className="text-sm text-gray-500">
                      Property Owner in Al Sadd
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Tatami has eliminated the stress of rent collection. I used
                  to spend days chasing payments, but now everything comes in
                  automatically and on time."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#025356] rounded-full flex items-center justify-center text-white font-bold">
                    FM
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Fatima</h4>
                    <p className="text-sm text-gray-500">
                      Property Manager in The Pearl
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The dashboard gives me complete visibility across all
                  properties. I can identify trends and issues at a glance,
                  saving hours of administrative work every week."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#025356] rounded-full flex items-center justify-center text-white font-bold">
                    KJ
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Khalid</h4>
                    <p className="text-sm text-gray-500">
                      Real Estate Investor in West Bay
                    </p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The detailed financial reporting has been invaluable for my
                  tax preparation and investment planning. Tatami provides
                  clarity I never had with traditional methods."
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Revenue Calculator Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Calculate Your Portfolio Performance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how Tatami can improve your rental income and save you time.
              </p>
            </div>
            <RevenueCalculator />
          </Container>
        </Section>

        {/* Final CTA Section */}
        <Section className="bg-[#025356] text-white">
          <Container>
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Modernize Your Property Management?
              </h2>
              <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
                Join property owners across Qatar who are streamlining their
                rental business with Tatami.
              </p>
              <Link href="/waitlist">
                <Button
                  variant="secondary"
                  size="xl"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  Join the Waitlist Today
                </Button>
              </Link>
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section>
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Common questions from property owners about Tatami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How does Tatami ensure I receive my payments?
                </h3>
                <p className="text-gray-600">
                  Tatami uses secure, direct bank transfers to ensure your
                  rental income is deposited directly into your account
                  according to the schedule you set up. All transactions are
                  tracked and recorded for complete transparency.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  What happens if a tenant misses a payment?
                </h3>
                <p className="text-gray-600">
                  Our system automatically sends reminders to tenants before
                  payments are due. If a payment is missed, you'll be notified
                  immediately, and our system will continue to remind the tenant
                  while providing you with options to address the issue.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Can I manage multiple properties on one account?
                </h3>
                <p className="text-gray-600">
                  Yes, Tatami is designed for portfolio management. You can add
                  unlimited properties to your account and view analytics both
                  for individual properties and across your entire portfolio.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Is Tatami compliant with Qatar's real estate regulations?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Tatami is built specifically for the Qatari market
                  and complies with all local real estate and financial
                  regulations. We regularly update our platform to ensure
                  continued compliance.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How is Tatami different from traditional property management
                  software?
                </h3>
                <p className="text-gray-600">
                  Tatami is specifically designed for Qatar's rental market,
                  with localized features like integration with local banks,
                  compliance with local regulations, and bilingual support in
                  English and Arabic. We focus exclusively on making rent
                  collection and financial management seamless.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Can I use Tatami if I work with a property management company?
                </h3>
                <p className="text-gray-600">
                  Yes, Tatami offers role-based access controls. You can give
                  your property manager appropriate access to manage payments
                  while maintaining owner-level oversight of all transactions
                  and property performance.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </DirectionLayout>
  );
};

export default LandlordSolutionPage;

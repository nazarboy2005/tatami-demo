"use client";

import React, { useState } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { PageHero } from "@/app/components/ui/PageHero";
import { Section } from "@/app/components/ui/Section";
import { Container } from "@/app/components/ui/Container";
import { Card } from "@/app/components/ui/Card";
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
  CheckIcon,
  CreditCardIcon,
} from "@/app/components/ui/Icons";
import { Button } from "@/app/components/ui/Button";

// Feature category tabs
const categories = [
  { id: "all", label: "All Features" },
  { id: "payments", label: "Payments" },
  { id: "tenants", label: "For Tenants" },
  { id: "landlords", label: "For Landlords" },
  { id: "security", label: "Security" },
];

// Feature data
const features = [
  {
    id: 1,
    title: "Digital Payments",
    description:
      "Pay and collect rent digitally using various payment methods including credit cards, debit cards, and direct bank transfers.",
    icon: <PaymentIcon size={24} />,
    categories: ["all", "payments", "tenants", "landlords"],
    details: [
      "Multiple payment options",
      "Automated recurring payments",
      "Instant payment confirmations",
      "Digital receipts",
    ],
  },
  {
    id: 2,
    title: "Rewards Program",
    description:
      "Earn points on every rent payment that can be redeemed for travel, shopping vouchers, and other benefits.",
    icon: <RewardsIcon size={24} />,
    categories: ["all", "tenants"],
    details: [
      "1-3% back in points",
      "Special partner offers",
      "Milestone bonuses",
      "Referral rewards",
    ],
  },
  {
    id: 3,
    title: "Landlord Dashboard",
    description:
      "Comprehensive dashboard with property management tools, analytics, and reporting capabilities.",
    icon: <AnalyticsIcon size={24} />,
    categories: ["all", "landlords"],
    details: [
      "Property portfolio overview",
      "Occupancy tracking",
      "Rent collection status",
      "Financial performance charts",
    ],
  },
  {
    id: 4,
    title: "Payment Scheduling",
    description:
      "Set up one-time or recurring payments with flexible scheduling options.",
    icon: <CalendarIcon size={24} />,
    categories: ["all", "payments", "tenants"],
    details: [
      "Custom payment schedules",
      "Split payments",
      "Payment reminders",
      "Flexible payment dates",
    ],
  },
  {
    id: 5,
    title: "Tenant Management",
    description:
      "Tools for landlords to manage tenants, leases, and communications in one platform.",
    icon: <UserIcon size={24} />,
    categories: ["all", "landlords"],
    details: [
      "Tenant profiles and history",
      "Lease management",
      "Tenant screening tools",
      "Communication center",
    ],
  },
  {
    id: 6,
    title: "Bank-Grade Security",
    description:
      "Advanced security measures to protect your personal and financial information.",
    icon: <SecurityIcon size={24} />,
    categories: ["all", "security", "tenants", "landlords"],
    details: [
      "256-bit encryption",
      "Two-factor authentication",
      "Fraud monitoring",
      "Secure data storage",
    ],
  },
  {
    id: 7,
    title: "Property Management",
    description:
      "Tools to help landlords manage their properties, maintenance, and documents.",
    icon: <PropertyIcon size={24} />,
    categories: ["all", "landlords"],
    details: [
      "Property listings",
      "Maintenance tracking",
      "Document storage",
      "Expense management",
    ],
  },
  {
    id: 8,
    title: "Credit Card Payments",
    description:
      "Pay your rent with credit cards and earn additional card rewards along with Tatami points.",
    icon: <CreditCardIcon size={24} />,
    categories: ["all", "payments", "tenants"],
    details: [
      "Multiple card support",
      "Automatic card processing",
      "Secure payment handling",
      "Double rewards (card + Tatami)",
    ],
  },
];

// Feature Demo component with tabs
const FeatureDemo = () => {
  const [activeDemo, setActiveDemo] = useState("payments");

  const demos = {
    payments: {
      title: "Easy Digital Payments",
      description:
        "Setting up your rent payments takes less than 2 minutes. Choose your payment method, schedule your payments, and never worry about rent day again.",
      image: "/path/to/demo-payments.jpg", // You'll need to add these images later
    },
    dashboard: {
      title: "Powerful Landlord Dashboard",
      description:
        "Get a comprehensive view of your property portfolio, track payments, and analyze performance all in one place.",
      image: "/path/to/demo-dashboard.jpg",
    },
    rewards: {
      title: "Earn Rewards on Every Payment",
      description:
        "Watch your points accumulate with every rent payment and redeem them for travel, shopping, and more.",
      image: "/path/to/demo-rewards.jpg",
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex">
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeDemo === "payments"
                ? "border-b-2 border-[#025356] text-[#025356]"
                : "text-[#617268]"
            }`}
            onClick={() => setActiveDemo("payments")}
          >
            Payments
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeDemo === "dashboard"
                ? "border-b-2 border-[#025356] text-[#025356]"
                : "text-[#617268]"
            }`}
            onClick={() => setActiveDemo("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`px-6 py-4 text-sm font-medium ${
              activeDemo === "rewards"
                ? "border-b-2 border-[#025356] text-[#025356]"
                : "text-[#617268]"
            }`}
            onClick={() => setActiveDemo("rewards")}
          >
            Rewards
          </button>
        </nav>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#025356] font-heading mb-4">
              {demos[activeDemo as keyof typeof demos].title}
            </h3>
            <p className="text-[#617268] mb-6">
              {demos[activeDemo as keyof typeof demos].description}
            </p>
            <Button variant="primary">Learn More</Button>
          </div>
          <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Demo image placeholder</p>
            {/* Replace with actual images later */}
            {/* <img 
              src={demos[activeDemo].image} 
              alt={demos[activeDemo].title}
              className="w-full h-auto rounded-lg"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

// FAQ Component
const FeatureFAQ = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does the rewards program work?",
      answer:
        "Tatami rewards you with points every time you pay your rent through our platform. You earn between 1-3% of your rent payment in points, which can be redeemed for travel, shopping vouchers, and other benefits through our rewards marketplace.",
    },
    {
      question: "Is there a fee for using Tatami?",
      answer:
        "Tenants can use Tatami at no cost for standard bank transfers. For credit card payments, there is a small processing fee to cover card charges. Landlords can use the basic features for free, with premium features available on a subscription basis.",
    },
    {
      question: "How secure is my financial information?",
      answer:
        "Tatami uses bank-level security with 256-bit encryption for all transactions. We never store your full card details on our servers and use tokenization for all payment processing. All data is protected with multiple layers of security and regular audits.",
    },
    {
      question: "Can landlords see my personal banking information?",
      answer:
        "No, landlords cannot see your personal banking information. They will only see payment confirmations, amounts, and dates - similar to what they would see with a traditional bank transfer or cheque payment.",
    },
    {
      question: "How do I get started with Tatami?",
      answer:
        "Join our waitlist to be among the first to access Tatami when we launch in Qatar. Once invited, you'll create an account, verify your identity, and set up your payment methods or property portfolio depending on whether you're a tenant or landlord.",
    },
  ];

  return (
    <div className="border-t border-b border-gray-200 divide-y divide-gray-200">
      {faqs.map((faq, index) => (
        <div key={index} className="py-6">
          <button
            className="flex justify-between items-center w-full text-left focus:outline-none group"
            onClick={() =>
              setOpenQuestion(openQuestion === index ? null : index)
            }
          >
            <h3 className="text-lg font-bold text-[#025356] group-hover:text-[#034a4d] transition-colors">
              {faq.question}
            </h3>
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${
                openQuestion === index ? "rotate-180" : ""
              } text-[#025356] flex-shrink-0 ml-4`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openQuestion === index && (
            <div className="mt-4 text-[#617268] leading-relaxed animate-fadeIn">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// Main Features page component
const FeaturesPage = () => {
  const [category, setCategory] = useState("all");
  const filteredFeatures = features.filter((feature) =>
    feature.categories.includes(category)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PageHero
          title="Comprehensive Features for Modern Rent Payments"
          description="Discover all the features that make Tatami the future of rent payments in Qatar. From digital payments to rewards, from tenant tools to landlord dashboards."
          backgroundColor="#025356"
        />

        <Section backgroundColor="#f8f8f8">
          <Container>
            <div className="mb-10 overflow-x-auto">
              <div className="flex space-x-2 min-w-max pb-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    className={`px-4 py-2 rounded-md ${
                      category === cat.id
                        ? "bg-[#025356] text-white"
                        : "bg-white text-[#025356] border border-[#025356]"
                    }`}
                    onClick={() => setCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFeatures.map((feature) => (
                <Card
                  key={feature.id}
                  title={feature.title}
                  icon={feature.icon}
                  hoverEffect
                  cardClassName="h-full flex flex-col"
                >
                  <p className="text-[#617268] mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon
                          size={16}
                          color="#025356"
                          className="mt-1 mr-2 flex-shrink-0"
                        />
                        <span className="text-[#617268]">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* <Section backgroundColor="#fff">
          <Container>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#025356] mb-16 font-heading">
              Interactive Demonstrations
            </h2>
            <FeatureDemo />
          </Container>
        </Section> */}

        <ComparisonTable
          title="Tatami vs. Traditional Methods"
          description="See how Tatami's features compare to traditional rent payment methods"
          backgroundColor="#f8f8f8"
          items={[
            {
              feature: "Payment Options",
              traditional: "Cheques, cash, or bank transfers",
              tatami: "Credit cards, debit cards, bank transfers, and more",
            },
            {
              feature: "Rewards",
              traditional: "None",
              tatami: "1-3% back in points on every payment",
            },
            {
              feature: "Payment Tracking",
              traditional: "Manual record keeping",
              tatami: "Automatic tracking and history",
            },
            {
              feature: "Landlord Tools",
              traditional: "Spreadsheets or property management software",
              tatami: "All-in-one platform with analytics dashboard",
            },
            {
              feature: "Security",
              traditional: "Varying levels of security",
              tatami: "Bank-level encryption and protection",
            },
          ]}
        />

        <Section backgroundColor="#fff">
          <Container>
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#025356] mb-8 font-heading">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-[#617268] max-w-3xl mx-auto mb-12">
              Get answers to common questions about Tatami's features
            </p>
            <FeatureFAQ />
          </Container>
        </Section>

        <CTASection
          title="Ready to Experience These Features?"
          description="Join our waitlist today to be among the first to use Tatami when we launch in Qatar."
          buttonText="Join the Waitlist"
          buttonLink="/waitlist"
        />
      </main>
      <Footer />
    </div>
  );
};

export default FeaturesPage;

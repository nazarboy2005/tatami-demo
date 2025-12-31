"use client";

import React, { useState } from "react";
import { Container } from "@/app/components/ui/Container";
import { Section } from "@/app/components/ui/Section";
import { FeatureGrid } from "@/app/components/ui/FeatureGrid";
import { Card } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import Link from "next/link";
import Image from "next/image";
import DirectionLayout from "@/components/DirectionLayout";
import { useLanguage } from "@/contexts/LanguageContext";

// SVG Icons for features
import {
  FaShieldAlt,
  FaCreditCard,
  FaBell,
  FaChartLine,
  FaCalendarAlt,
  FaFileInvoiceDollar,
} from "react-icons/fa";

// Rent Rewards Calculator component
const RewardsCalculator = () => {
  const [monthlyRent, setMonthlyRent] = useState(8000);
  const [paymentMethod, setPaymentMethod] = useState("credit");

  // Calculate rewards based on payment method (credit card gives higher rewards)
  const calculatedRewards = () => {
    const annualRent = monthlyRent * 12;
    const rewardsRate = paymentMethod === "credit" ? 0.015 : 0.01;
    const pointsEarned = Math.round(annualRent * rewardsRate);

    // Calculate cash value (assuming 100 points = $1)
    const cashValue = pointsEarned / 100;

    return {
      points: pointsEarned,
      cash: cashValue,
      percent: rewardsRate * 100,
    };
  };

  const rewards = calculatedRewards();

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h3 className="text-2xl font-bold text-[#025356] font-heading mb-6">
        Calculate Your Rewards
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <label className="block text-[#617268] mb-2">
              Your Monthly Rent (QAR)
            </label>
            <input
              type="range"
              min="2000"
              max="20000"
              step="500"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-500">QAR 2,000</span>
              <span className="text-lg font-medium text-[#025356]">
                QAR {monthlyRent.toLocaleString()}
              </span>
              <span className="text-sm text-gray-500">QAR 20,000</span>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[#617268] mb-2">Payment Method</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                className={`py-3 px-4 rounded-md border ${
                  paymentMethod === "credit"
                    ? "bg-[#025356] text-white border-[#025356]"
                    : "border-gray-300 text-gray-700"
                }`}
                onClick={() => setPaymentMethod("credit")}
              >
                Credit Card (1.5%)
              </button>
              <button
                className={`py-3 px-4 rounded-md border ${
                  paymentMethod === "bank"
                    ? "bg-[#025356] text-white border-[#025356]"
                    : "border-gray-300 text-gray-700"
                }`}
                onClick={() => setPaymentMethod("bank")}
              >
                Bank Transfer (1%)
              </button>
            </div>
          </div>
        </div>

        <div className="bg-[#d2fce3]/20 p-6 rounded-lg">
          <h4 className="text-xl font-bold text-[#025356] font-heading mb-4">
            Your Annual Rewards
          </h4>

          <div className="mb-4">
            <p className="text-[#617268] mb-1">Points Earned</p>
            <p className="text-3xl font-bold text-[#025356]">
              {rewards.points.toLocaleString()} points
            </p>
          </div>

          <div className="mb-4">
            <p className="text-[#617268] mb-1">Estimated Cash Value</p>
            <p className="text-3xl font-bold text-[#025356]">
              QAR {rewards.cash.toLocaleString()}
            </p>
          </div>

          <div className="mt-6">
            <div className="bg-white rounded-md p-4 text-sm">
              <p className="font-semibold text-[#025356]">
                What you can get with these points:
              </p>
              <ul className="mt-2 space-y-2 text-[#617268]">
                <li>• Flight tickets to popular destinations</li>
                <li>• Hotel stays for weekend getaways</li>
                <li>• Shopping vouchers at partner retailers</li>
                <li>• Dining experiences at top restaurants</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function TenantSolutionPage() {
  // Use our consolidated language context
  const { t, isRTL } = useLanguage();

  return (
    <DirectionLayout className="min-h-screen flex flex-col">
      <Header />
      <main className="flex flex-col flex-grow bg-white">
        {/* Hero Section */}
        <Section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16 md:py-24">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Rent Payments Made <span className="text-primary">Simple</span>{" "}
                in Qatar
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Take control of your rental payments in Qatar with Tatami's
                secure, flexible, and rewarding payment platform built
                specifically for tenants.
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
                  alt="Tenant using Tatami app"
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
                Why Tenants in Qatar Choose Tatami
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our platform is designed to make your rental experience in Qatar
                better in every way, eliminating the hassle of post-dated
                checks.
              </p>
            </div>

            <FeatureGrid columns={{ default: 1, sm: 1, md: 2, lg: 3 }}>
              <Card
                icon={<FaShieldAlt size={24} />}
                title="Payment Protection"
                content={
                  <p className="text-gray-600 h-28">
                    Rest easy knowing that your payment information and
                    transaction history are protected with the highest security
                    standards.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaCreditCard size={24} />}
                title="Flexible Payment Options"
                content={
                  <p className="text-gray-600 h-28">
                    Choose from multiple payment methods that fit your financial
                    preferences and needs.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaBell size={24} />}
                title="Payment Reminders"
                content={
                  <p className="text-gray-600 h-28">
                    Get timely notifications so you never have to worry about
                    late fees or missed payments again.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaChartLine size={24} />}
                title="Build Credit History"
                content={
                  <p className="text-gray-600 h-28">
                    Have your on-time rent payments reported to credit bureaus
                    to help build your financial history.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaCalendarAlt size={24} />}
                title="Scheduled Payments"
                content={
                  <p className="text-gray-600 h-28">
                    Schedule automatic payments so you never have to worry about
                    manually paying your rent each month.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />

              <Card
                icon={<FaFileInvoiceDollar size={24} />}
                title="Payment History"
                content={
                  <p className="text-gray-600 h-28">
                    Access your complete payment history and download payment
                    receipts whenever you need them.
                  </p>
                }
                bordered
                hoverable
                cardClassName="h-full flex flex-col"
              />
            </FeatureGrid>
          </Container>
        </Section>

        {/* How It Works Section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Getting started with Tatami is quick and easy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Create Your Account
                </h3>
                <p className="text-gray-600">
                  Sign up in minutes with a few simple details and connect your
                  payment methods securely.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Set Up Your Payments
                </h3>
                <p className="text-gray-600">
                  Add your rental details and choose your preferred payment
                  method and schedule.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  Pay With Peace of Mind
                </h3>
                <p className="text-gray-600">
                  Sit back and relax as Tatami handles your payments securely
                  and on time, every time.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Testimonials Section - Update with regional names */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from tenants across Qatar who've transformed their rent
                payment experience with Tatami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#025356] rounded-full flex items-center justify-center text-white font-bold">
                    MA
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Maryam Al-Naimi</h4>
                    <p className="text-sm text-gray-500">Tenant in West Bay</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Tatami has revolutionized how I pay rent in Doha. No more
                  trips to the bank for checks, and I love earning rewards on my
                  biggest monthly expense!"
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#025356] rounded-full flex items-center justify-center text-white font-bold">
                    HK
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Hassan Al-Khalifa</h4>
                    <p className="text-sm text-gray-500">Tenant in The Pearl</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "Setting up automatic payments was incredibly easy. I no
                  longer worry about rent due dates or having to provide
                  multiple post-dated checks."
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#025356] rounded-full flex items-center justify-center text-white font-bold">
                    NA
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold">Noor Al-Sulaiti</h4>
                    <p className="text-sm text-gray-500">Tenant in Lusail</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The payment history feature makes it easy to track all my
                  rent payments for tax purposes. The interface is intuitive and
                  user-friendly."
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Rewards Calculator Section - Add this before the CTA section */}
        <Section className="bg-gray-50">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Calculate Your Rent Rewards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how much you can earn in rewards just by paying your rent
                through Tatami.
              </p>
            </div>
            <RewardsCalculator />
          </Container>
        </Section>

        {/* Final CTA Section */}
        <Section className="bg-[#025356] text-white" containerMaxWidth="2xl">
          <Container>
            <div className="text-center py-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Rental Experience?
              </h2>
              <p className="text-xl max-w-3xl mx-auto mb-8">
                Join the future of rent payments in Qatar today.
              </p>
              <Link href="/waitlist">
                <Button variant="secondary" size="lg" className="mt-4">
                  Join Our Waitlist
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
                Got questions? We've got answers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Is Tatami secure?
                </h3>
                <p className="text-gray-600">
                  Yes, Tatami uses bank-level encryption and security protocols
                  to protect your personal and payment information. We are fully
                  compliant with industry security standards.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Are there any fees for using Tatami?
                </h3>
                <p className="text-gray-600">
                  Tatami offers different payment plans. Some payment methods
                  may include a small processing fee, while others may be free.
                  All fees are clearly displayed before you complete any
                  transaction.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Can I cancel a scheduled payment?
                </h3>
                <p className="text-gray-600">
                  Yes, you can cancel or modify any scheduled payment up to 3
                  business days before the payment date through your Tatami
                  dashboard.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  How do I get started?
                </h3>
                <p className="text-gray-600">
                  Simply create an account, verify your email, and follow the
                  guided setup process to connect your payment methods and set
                  up your rental information.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/faq"
                className="text-primary font-medium hover:underline"
              >
                View all FAQs
              </Link>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </DirectionLayout>
  );
}

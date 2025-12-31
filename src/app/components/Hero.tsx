import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { AppMockup } from "./AppMockup";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full py-16 sm:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ededed] to-white"></div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#d2fce3]/20 rounded-bl-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#e0a9ee]/10 rounded-tr-full pointer-events-none"></div>

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23025356' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full md:w-1/2 flex flex-col gap-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#025356] font-heading"
            >
              {t("hero_title")}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-xl text-[#617268] max-w-xl"
            >
              {t("hero_subtitle")}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <Link href="/waitlist">
                <Button
                  variant="primary"
                  size="lg"
                  className="shadow-lg hover:shadow-xl transition-shadow"
                >
                  {t("joinWaitlist")}
                </Button>
              </Link>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <div className="flex items-center text-sm text-[#617268]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("secure_transactions")}
              </div>
              <div className="flex items-center text-sm text-[#617268]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("earn_rewards")}
              </div>
              <div className="flex items-center text-sm text-[#617268]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("payment_reminders")}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end perspective"
          >
            <div className="relative">
              {/* App mockup with floating effect */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut",
                }}
                className="transform-gpu"
              >
                <AppMockup />
              </motion.div>

              {/* Decorative circles */}
              <div className="absolute top-1/4 -left-16 w-12 h-12 rounded-full bg-[#d2fce3]/30 backdrop-blur-sm"></div>
              <div className="absolute bottom-1/3 -right-8 w-8 h-8 rounded-full bg-[#e0a9ee]/30 backdrop-blur-sm"></div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

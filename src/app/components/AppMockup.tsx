import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const AppMockup = () => {
  // State for animation sequencing
  const [isInitialized, setIsInitialized] = useState(false);
  const [showPaymentAnimation, setShowPaymentAnimation] = useState(false);
  const [rewardsPoints, setRewardsPoints] = useState(0);
  const [notificationCount, setNotificationCount] = useState(0);

  // Animation sequence timing
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsInitialized(true);
    }, 800);

    const timer2 = setTimeout(() => {
      setShowPaymentAnimation(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      // Animate rewards points counting up
      const duration = 1500; // ms
      const targetPoints = 2850;
      const interval = 30; // ms
      const steps = duration / interval;
      const increment = targetPoints / steps;

      let currentPoints = 0;
      const pointsTimer = setInterval(() => {
        currentPoints += increment;
        setRewardsPoints(Math.min(Math.floor(currentPoints), targetPoints));

        if (currentPoints >= targetPoints) {
          clearInterval(pointsTimer);

          // Show notification after points are counted
          setTimeout(() => {
            setNotificationCount(1);
          }, 500);
        }
      }, interval);
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <div className="relative">
      {/* Phone frame with reflection effect */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.2,
        }}
        className="relative w-[320px] h-[650px] rounded-[40px] overflow-hidden border-[12px] shadow-2xl"
        style={{
          borderColor: "#025356",
          background:
            "linear-gradient(135deg, rgba(2,83,86,0.9) 0%, rgba(2,83,86,0.8) 100%)",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.2), inset 0 0 10px rgba(255,255,255,0.2)",
        }}
      >
        {/* Phone content */}
        <div className="w-full h-full bg-gradient-to-b from-[#f8f8f8] to-white flex flex-col items-center justify-start overflow-hidden">
          {/* Status bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="w-full h-7 bg-[#025356] flex items-center justify-between px-6"
          >
            <div className="text-white text-xs">9:41 AM</div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-white/60"></div>
              <div className="w-3 h-3 rounded-full bg-white/80"></div>
              <div className="w-3 h-3 rounded-full bg-white"></div>
            </div>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="w-full h-20 flex items-center justify-between px-6"
            style={{ backgroundColor: "#025356" }}
          >
            <img className="w-24" src="/tatami-logo.svg" alt="tatami logo" />
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
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
                {notificationCount > 0 && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 10,
                    }}
                    className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-xs text-white"
                  >
                    {notificationCount}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Welcome section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="w-full h-32 flex flex-col items-start justify-center p-6"
          >
            <div className="text-[#025356] text-xl font-bold mb-2 font-heading">
              Welcome, Ahmed
            </div>
            <div className="flex items-center gap-2">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full flex items-center justify-center cursor-pointer"
                style={{
                  backgroundColor: "#d2fce3",
                  boxShadow: "0 4px 10px rgba(210,252,227,0.5)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-[#025356]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>
              <div className="flex flex-col">
                <div className="text-[#025356] text-sm font-bold">
                  Next payment
                </div>
                <div className="text-[#617268] text-xs">June 1, 2023</div>
              </div>
            </div>
          </motion.div>

          {/* Cards section */}
          <div className="w-full px-6 py-4 space-y-4">
            {/* Monthly Rent Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="w-full h-28 rounded-xl p-4 mb-4 relative overflow-hidden cursor-pointer"
              style={{
                backgroundColor: "#d2fce3",
                boxShadow: "0 10px 15px -3px rgba(210,252,227,0.3)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-20"
                style={{
                  backgroundColor: "#025356",
                  transform: "translate(30%, -50%)",
                }}
              ></div>
              <div
                className="absolute bottom-0 left-0 w-16 h-16 rounded-full opacity-10"
                style={{
                  backgroundColor: "#025356",
                  transform: "translate(-30%, 50%)",
                }}
              ></div>

              <div className="relative z-10">
                <div className="text-[#025356] text-lg font-bold mb-1 font-heading">
                  Monthly Rent
                </div>
                <div className="flex items-center">
                  <div className="text-[#025356] text-2xl font-bold font-heading">
                    QAR 9,500
                  </div>
                  {showPaymentAnimation && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 10,
                      }}
                      className="ml-3 px-2 py-1 bg-white rounded-full text-xs font-bold text-green-600"
                    >
                      PAID
                    </motion.div>
                  )}
                </div>

                {/* Progress bar */}
                <div className="mt-3 w-full h-2 bg-white/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: showPaymentAnimation ? "100%" : "0%" }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="h-full bg-[#025356] rounded-full"
                  ></motion.div>
                </div>
              </div>
            </motion.div>

            {/* Payment Method Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.3, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-xl p-4 mb-4 bg-white border border-gray-200 cursor-pointer"
              style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
            >
              <div className="text-[#617268] text-sm font-bold mb-2 flex justify-between items-center">
                <span>Payment Method</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                  />
                </svg>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#025356" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="text-[#025356] text-sm font-medium">
                    Visa •••• 4582
                  </div>
                  <div className="text-gray-400 text-xs">Expires 05/26</div>
                </div>
              </div>
            </motion.div>

            {/* Rewards Card */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.5, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02 }}
              className="w-full rounded-xl p-4 bg-white border border-gray-200 cursor-pointer"
              style={{ boxShadow: "0 4px 10px rgba(0,0,0,0.05)" }}
            >
              <div className="text-[#617268] text-sm font-bold mb-2 flex justify-between items-center">
                <span>Rewards Earned</span>
                <motion.div
                  animate={{ rotate: showPaymentAnimation ? 360 : 0 }}
                  transition={{ delay: 2.5, duration: 1 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-[#e0a9ee]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a4 4 0 00-4-4H5.45a4 4 0 00-3.91 3.26L1 11l6.14 1.26c.29 3.9 3.72 6.74 7.86 6.74 4.12 0 7.55-2.82 7.86-6.71L29 11l-.54-5.74A4 4 0 0021.55 2H18a4 4 0 00-4 4v2h-2z"
                    />
                  </svg>
                </motion.div>
              </div>
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    backgroundColor: showPaymentAnimation
                      ? "#e0a9ee"
                      : "rgba(224,169,238,0.2)",
                  }}
                  transition={{
                    delay: 3,
                    duration: 0.8,
                    times: [0, 0.5, 1],
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(224,169,238,0.2)" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#025356]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </motion.div>
                <div className="flex flex-col">
                  <div className="text-[#025356] text-sm font-medium">
                    {rewardsPoints.toLocaleString()} Points
                  </div>
                  {showPaymentAnimation && rewardsPoints >= 2850 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 4.5, duration: 0.5 }}
                      className="text-green-500 text-xs font-medium"
                    >
                      +380 points from last payment
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.7 }}
            className="absolute bottom-0 w-full h-16 border-t border-gray-200 flex justify-around items-center bg-white"
          >
            <motion.div
              whileHover={{ y: -3 }}
              className="flex flex-col items-center"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#025356" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </div>
              <div className="text-[#025356] text-xs font-medium mt-1">
                Home
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="flex flex-col items-center"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#d2fce3" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-[#025356]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-[#617268] text-xs mt-1">Payments</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="flex flex-col items-center"
            >
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#d2fce3" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 text-[#025356]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="text-[#617268] text-xs mt-1">Profile</div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.8, scale: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(224,169,238,0.2) 0%, rgba(210,252,227,0.4) 100%)",
          filter: "blur(20px)",
          zIndex: -1,
        }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute -top-8 -right-8 w-40 h-40 rounded-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(210,252,227,0.3) 0%, rgba(2,83,86,0.2) 100%)",
          filter: "blur(25px)",
          zIndex: -1,
        }}
      />

      {/* Floating notification */}
      {notificationCount > 0 && (
        <motion.div
          initial={{ opacity: 0, y: -20, x: 20 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ delay: 5, type: "spring", stiffness: 100 }}
          className="absolute top-4 right-0 transform translate-x-1/3 bg-white p-3 rounded-lg shadow-lg"
          style={{ maxWidth: "200px" }}
        >
          <div className="flex items-start">
            <div className="mr-2 mt-0.5">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">
                Payment Successful!
              </div>
              <div className="text-xs text-gray-600 mt-1">
                Your June rent payment has been processed successfully.
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

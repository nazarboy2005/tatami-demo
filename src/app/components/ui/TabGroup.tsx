"use client";

import React, { useState } from "react";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabGroupProps {
  tabs: TabItem[];
  defaultActiveTab?: string;
  variant?: "pills" | "underline" | "buttons";
  alignment?: "left" | "center" | "right";
  fullWidth?: boolean;
  onChange?: (tabId: string) => void;
  className?: string;
  tabClassName?: string;
  contentClassName?: string;
}

export const TabGroup: React.FC<TabGroupProps> = ({
  tabs,
  defaultActiveTab,
  variant = "pills",
  alignment = "left",
  fullWidth = false,
  onChange,
  className = "",
  tabClassName = "",
  contentClassName = "",
}) => {
  const [activeTab, setActiveTab] = useState<string>(
    defaultActiveTab || (tabs.length > 0 ? tabs[0].id : "")
  );

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onChange) onChange(tabId);
  };

  // Determine alignment classes
  const alignmentClasses = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[alignment];

  // Determine variant styling
  const getTabStyles = (tabId: string) => {
    const isActive = tabId === activeTab;

    switch (variant) {
      case "pills":
        return `px-4 py-2 rounded-full ${
          isActive
            ? "bg-blue-600 text-white font-medium"
            : "text-gray-700 hover:bg-gray-100"
        }`;
      case "underline":
        return `px-4 py-2 border-b-2 ${
          isActive
            ? "border-blue-600 text-blue-600 font-medium"
            : "border-transparent text-gray-700 hover:text-gray-900 hover:border-gray-300"
        }`;
      case "buttons":
        return `px-4 py-2 border ${
          isActive
            ? "border-blue-600 bg-blue-600 text-white font-medium"
            : "border-gray-300 text-gray-700 hover:bg-gray-50"
        }`;
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={`flex flex-wrap ${alignmentClasses} mb-4`}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`transition-all duration-200 ${getTabStyles(
              tab.id
            )} mx-1 mb-1 ${fullWidth ? "flex-grow" : ""} ${tabClassName}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={`tab-content ${contentClassName}`}>
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

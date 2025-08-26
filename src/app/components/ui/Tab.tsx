"use client";
import { tabs, tabContent, TabKey } from "@/data/tabs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Tab() {
  const [activeTab, setActiveTab] = useState<TabKey>("mission");
  return (
    <div className="w-full space-y-5">
      <div className="flex flex-wrap border-b w-full md:w-fit gap-3 justify-center md:justify-baseline">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 font-semibold cursor-pointer transition-colors ${
              activeTab === tab.id
                ? "text-sky-200 border-b-2"
                : "text-gray-400 hover:text-sky-200 "
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="min-h-[120px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {tabContent[activeTab]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Tab;

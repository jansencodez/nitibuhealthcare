// components/SearchBar.tsx
"use client";

import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { useSearch } from "@/context/SearchContext";

export default function SearchBar() {
  const { searchQuery, setSearchQuery } = useSearch();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-20 z-[100] mb-2 max-w-3xl mx-auto px-4"
    >
      <div className={`relative ${isDark ? "text-gray-400" : "text-gray-600"}`}>
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 backdrop-blur-lg ${
            isDark
              ? "bg-gray-800/80 border-gray-700 focus:border-teal-400"
              : "bg-white/80 border-gray-200 focus:border-teal-600"
          } transition-colors`}
        />
      </div>
    </motion.div>
  );
}

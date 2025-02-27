"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function ProductsAndServicesOverview() {
  const { theme } = useTheme();

  return (
    <div
      className={`max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8 py-12 ${
        theme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Title */}
      <motion.h2
        className={`text-3xl sm:text-4xl font-bold ${
          theme === "dark" ? "text-teal-400" : "text-teal-900"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products & Services
      </motion.h2>

      {/* Description */}
      <motion.p
        className={`mt-4 text-base sm:text-lg max-w-2xl mx-auto ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We provide high-quality medical products and specialized services
        tailored for your needs.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold rounded-lg shadow-lg transition-colors ${
              theme === "dark"
                ? "bg-teal-700 hover:bg-teal-600 text-white"
                : "bg-teal-600 hover:bg-teal-700 text-white"
            }`}
          >
            Explore Products
          </motion.button>
        </Link>

        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold rounded-lg shadow-lg border transition-colors ${
              theme === "dark"
                ? "border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900"
                : "border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white"
            }`}
          >
            Explore Services
          </motion.button>
        </Link>

        <Link href="/catalog">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`w-full sm:w-auto px-6 py-3 text-base sm:text-lg font-semibold rounded-lg shadow-lg transition-colors ${
              theme === "dark"
                ? "bg-teal-700 hover:bg-teal-600 text-white"
                : "bg-teal-600 hover:bg-teal-700 text-white"
            }`}
          >
            Explore Catalog
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

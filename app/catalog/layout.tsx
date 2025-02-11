// app/catalog/layout.tsx
"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import SearchBar from "@/components/catalog/SearchBar";
import { SearchProvider } from "@/context/SearchContext";

interface CatalogLayoutProps {
  children: ReactNode;
}

export default function CatalogLayout({ children }: CatalogLayoutProps) {
  const { theme } = useTheme();

  return (
    <SearchProvider>
      <div
        className={`min-h-screen ${
          theme === "dark" ? "bg-gray-900" : "bg-gray-50"
        }`}
      >
        <div className="flex flex-col min-h-screen">
          <main className="flex-1">
            {/* Changed top value and added margin-top */}
            <section className="sticky top-14 z-40 mt-16 bg-gradient-to-b from-green-800/30 to-transparent backdrop-blur-sm rounded-b-xl">
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-2">
                <SearchBar />
              </div>
            </section>

            {/* Added margin-top to account for header */}
            <div className="max-w-7xl mx-auto px-4 md:px-8 pb-8 mt-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {children}
              </motion.div>
            </div>
          </main>
        </div>
      </div>
    </SearchProvider>
  );
}

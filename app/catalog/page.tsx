"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaSyringe, FaPrescriptionBottle } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

import ProductGridSection from "@/components/catalog/ProductGridSection";
import ProductCarousel from "@/components/catalog/ProductCarousel";
import ProductModal from "@/components/catalog/ProductModal";

// Data and utils
import {
  pharmaceuticalProducts,
  nonPharmaceuticalProducts,
  allProducts,
} from "@/data/products";
import Product from "@/types/Product";
import { useSearch } from "@/context/SearchContext";

export default function CataloguePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { searchQuery } = useSearch();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Suggested products
  const suggestedProducts = allProducts.slice(0, 10);

  // Filter products
  const filteredNonPharma = nonPharmaceuticalProducts.filter((p: Product) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredPharma = pharmaceuticalProducts.filter((p: Product) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Grid classes
  const gridClasses =
    "grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 ";

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }  md:p-8 pt-16 lg:mt-0`}
    >
      <div className="max-w-7xl mx-auto">
        <ProductCarousel
          title="Suggested Products"
          products={suggestedProducts}
          isDark={isDark}
          onProductClick={setSelectedProduct}
        />

        <ProductGridSection
          title="Non-Pharmaceutical Products"
          icon={
            <FaSyringe
              className={`text-3xl ${
                isDark ? "text-teal-400" : "text-teal-600"
              }`}
            />
          }
          products={filteredNonPharma}
          isDark={isDark}
          gridClasses={gridClasses}
          onProductClick={setSelectedProduct}
        />

        <ProductGridSection
          title="Pharmaceutical Products"
          icon={
            <FaPrescriptionBottle
              className={`text-3xl ${
                isDark ? "text-teal-400" : "text-teal-600"
              }`}
            />
          }
          products={filteredPharma}
          isDark={isDark}
          gridClasses={gridClasses}
          onProductClick={setSelectedProduct}
        />
      </div>

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            isDark={isDark}
            allProducts={allProducts}
            onProductSelect={setSelectedProduct}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

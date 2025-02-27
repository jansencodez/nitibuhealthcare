"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { FaSyringe, FaPrescriptionBottle, FaHospital } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { useSearch } from "@/context/SearchContext";

import ProductGridSection from "@/components/catalog/ProductGridSection";
import ProductCarousel from "@/components/catalog/ProductCarousel";
import ProductModal from "@/components/catalog/ProductModal";

// Data
import {
  pharmaceuticalProducts,
  nonPharmaceuticalProducts,
  hospitalEquipment,
  allProducts,
} from "@/data/products";
import Product from "@/types/Product";

export default function CataloguePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const { searchQuery } = useSearch();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Suggested products (top 10 from all products)
  const suggestedProducts = allProducts.slice(0, 10);

  // Filter products by search query and category
  const filterProducts = (products: Product[], category: string) =>
    products.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedCategory === "all" || p.category === category)
    );

  const filteredPharma = filterProducts(
    pharmaceuticalProducts,
    "pharmaceutical"
  );
  const filteredNonPharma = filterProducts(
    nonPharmaceuticalProducts,
    "non-pharmaceutical"
  );
  const filteredEquipment = filterProducts(
    hospitalEquipment,
    "hospital-equipment"
  );

  // Grid classes
  const gridClasses =
    "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6";

  // Category options
  const categories = [
    { value: "all", label: "All Products" },
    { value: "pharmaceutical", label: "Pharmaceutical" },
    { value: "non-pharmaceutical", label: "Non-Pharmaceutical" },
    { value: "hospital-equipment", label: "Hospital Equipment" },
  ];

  return (
    <div
      className={`min-h-screen ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      } p-4 md:p-8 pt-16 lg:mt-0`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Category Filter */}
        <div className="mb-8">
          <label
            className={`block text-lg font-semibold mb-2 ${
              isDark ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Filter by Category
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className={`w-full max-w-xs p-2 rounded-md border ${
              isDark
                ? "bg-gray-800 text-gray-200 border-gray-700"
                : "bg-white text-gray-800 border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-teal-500`}
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        {/* Suggested Products Carousel */}
        {selectedCategory === "all" && (
          <ProductCarousel
            title="Suggested Products"
            products={suggestedProducts}
            isDark={isDark}
            onProductClick={setSelectedProduct}
          />
        )}

        {/* Product Sections */}
        {(selectedCategory === "all" ||
          selectedCategory === "non-pharmaceutical") && (
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
        )}

        {(selectedCategory === "all" ||
          selectedCategory === "pharmaceutical") && (
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
        )}

        {(selectedCategory === "all" ||
          selectedCategory === "hospital-equipment") && (
          <ProductGridSection
            title="Hospital Equipment"
            icon={
              <FaHospital
                className={`text-3xl ${
                  isDark ? "text-teal-400" : "text-teal-600"
                }`}
              />
            }
            products={filteredEquipment}
            isDark={isDark}
            gridClasses={gridClasses}
            onProductClick={setSelectedProduct}
          />
        )}
      </div>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            isDark={isDark}
            allProducts={allProducts}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

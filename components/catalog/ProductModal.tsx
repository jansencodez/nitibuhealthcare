"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Product from "@/types/Product";
import { FaXmark } from "react-icons/fa6";
import ProductCarousel from "./ProductCarousel";
import getProductImage from "@/utils/getProductImage";
import formatProductName from "@/utils/formatProductName";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  isDark: boolean;
  allProducts: Product[];
}

export default function ProductModal({
  product: initialProduct,
  onClose,
  isDark,
  allProducts,
}: ProductModalProps) {
  const [selectedProduct, setSelectedProduct] = useState(initialProduct);

  const relatedProducts = allProducts
    .filter(
      (p) =>
        p.category === selectedProduct.category && p.id !== selectedProduct.id
    )
    .slice(0, 5);

  // Image handling
  const primaryImage = getProductImage(selectedProduct);
  const fallbackImage = `/api/og?name=${encodeURIComponent(
    selectedProduct.name
  )}`;
  const [src, setSrc] = useState(primaryImage);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (src !== fallbackImage) {
      setSrc(fallbackImage);
      setHasError(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className={`relative rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`p-6 flex justify-between items-center ${
            isDark ? "bg-gray-900" : "bg-gray-100"
          }`}
        >
          <h2
            className={`text-2xl font-bold ${
              isDark ? "text-teal-400" : "text-teal-900"
            }`}
            dangerouslySetInnerHTML={{
              __html: formatProductName(selectedProduct.name),
            }}
          />
          <button
            onClick={onClose}
            className={`p-2 rounded-full hover:bg-opacity-20 transition-colors ${
              isDark ? "hover:bg-white" : "hover:bg-gray-800"
            }`}
          >
            <FaXmark
              className={`w-6 h-6 ${
                isDark ? "text-teal-400" : "text-teal-900"
              }`}
            />
          </button>
        </div>
        <div className="p-6 space-y-4">
          {/* Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            {selectedProduct.isMock ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                  Coming Soon
                </span>
              </div>
            ) : (
              <>
                <Image
                  src={src}
                  onError={handleError}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                {hasError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                    <span className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      Coming Soon
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Description & Specs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-teal-400" : "text-teal-900"
                }`}
              >
                Description
              </h3>
              <p className={isDark ? "text-gray-300" : "text-gray-600"}>
                {selectedProduct.description}
              </p>
            </div>
            <div>
              <h3
                className={`text-lg font-semibold mb-2 ${
                  isDark ? "text-teal-400" : "text-teal-900"
                }`}
              >
                Specifications
              </h3>
              <ul className="list-disc pl-4 space-y-2">
                {selectedProduct.specs.map((spec, i) => (
                  <li
                    key={i}
                    className={isDark ? "text-gray-300" : "text-gray-600"}
                  >
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related Products Carousel */}
          <ProductCarousel
            products={relatedProducts}
            title="Related Products"
            isDark={isDark}
            onProductClick={(newProduct) => {
              setSelectedProduct(newProduct);
              setSrc(getProductImage(newProduct)); // Update image source
              setHasError(false); // Reset error state for new product
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

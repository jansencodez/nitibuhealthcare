"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Product from "@/types/Product";
import formatProductName from "@/utils/formatProductName";
import getProductImage from "@/utils/getProductImage";

interface ProductCardProps {
  product: Product;
  isDark: boolean;
  onClick: () => void;
  priority?: boolean;
}

export default function ProductCard({
  product,
  isDark,
  onClick,
  priority = false,
}: ProductCardProps) {
  const primaryImage = getProductImage(product);
  const fallbackImage = `/api/og?name=${encodeURIComponent(product.name)}`;
  const [src, setSrc] = useState(primaryImage);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Reset state when product changes
  useEffect(() => {
    setSrc(primaryImage);
    setIsLoading(true);
    setHasError(false);
  }, [product, primaryImage]);

  const handleError = () => {
    if (src !== fallbackImage) {
      setSrc(fallbackImage);
      setHasError(true);
      setIsLoading(true);
    } else {
      setHasError(true);
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative cursor-pointer rounded-lg overflow-hidden shadow-xl ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => ["Enter", " "].includes(e.key) && onClick()}
      aria-label={`View ${product.name} details`}
    >
      {/* Status Badge */}
      {(product.isMock || hasError) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-2 right-2 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10 shadow-md"
        >
          {product.isMock ? "Coming Soon" : "Image Unavailable"}
        </motion.div>
      )}

      {/* Image Container */}
      <div className="relative aspect-video">
        {product.isMock ? (
          <div
            className={`absolute inset-0 flex items-center justify-center ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-lg font-bold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Coming Soon
            </motion.span>
          </div>
        ) : (
          <>
            <AnimatePresence>
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 animate-pulse"
                />
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={src}
                  onError={handleError}
                  onLoad={() => setIsLoading(false)}
                  alt={`${product.name} product image`}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 30vw"
                  className="object-cover transition-opacity opacity-0 duration-300"
                  style={{ opacity: isLoading ? 0 : 1 }}
                  priority={priority}
                />
              </motion.div>
            </AnimatePresence>
          </>
        )}
      </div>

      {/* Product Title */}
      <div className={`p-3 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
        <h3 className="font-semibold truncate">
          {formatProductName(product.name)}
        </h3>
      </div>
    </motion.div>
  );
}

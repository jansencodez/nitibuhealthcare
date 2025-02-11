// components/ProductCard.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Product from "@/types/Product";
import formatProductName from "@/utils/formatProductName";
import getProductImage from "@/utils/getProductImage";

interface ProductCardProps {
  product: Product;
  isDark: boolean;
  onClick: () => void;
}

export default function ProductCard({
  product,
  isDark,
  onClick,
}: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative cursor-pointer rounded-lg overflow-hidden shadow-xl ${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
      onClick={onClick}
    >
      {/* Coming Soon Badge */}
      {product.isMock && (
        <div className="absolute top-2 right-2 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
          Coming Soon
        </div>
      )}

      {/* Image Container */}
      <div className="relative" style={{ paddingTop: "56.25%" }}>
        {product.isMock ? (
          <div
            className={`absolute inset-0 flex items-center justify-center ${
              isDark ? "bg-gray-700" : "bg-gray-200"
            }`}
          >
            <span
              className={`text-lg font-bold ${
                isDark ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Coming Soon
            </span>
          </div>
        ) : (
          <Image
            src={getProductImage(product)}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover"
            priority
          />
        )}
      </div>

      {/* Product Title */}
      <div className={`p-3 ${isDark ? "text-gray-200" : "text-gray-800"}`}>
        <h3
          className="font-semibold truncate"
          dangerouslySetInnerHTML={{ __html: formatProductName(product.name) }}
        />
      </div>
    </motion.div>
  );
}

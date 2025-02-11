import { motion } from "framer-motion";
import { ReactNode } from "react";
import ProductCard from "./ProductCard";
import  Product from "@/types/Product";

interface ProductGridSectionProps {
  title: string;
  icon: ReactNode;
  products: Product[];
  isDark: boolean;
  gridClasses: string;
  onProductClick: (product: Product) => void;
}

export default function ProductGridSection({
  title,
  icon,
  products,
  isDark,
  gridClasses,
  onProductClick,
}: ProductGridSectionProps) {
  return (
    <div className="mb-12">
      <div className="mb-4 flex items-center gap-2">
        {icon}
        <h2 className={`text-3xl font-bold ${
              isDark ? "text-teal-400" : "text-teal-900"
            }`}>{title}</h2>
      </div>
      {products.length > 0 ? (
        <motion.div className={gridClasses}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isDark={isDark}
              onClick={() => onProductClick(product)}
            />
          ))}
        </motion.div>
      ) : (
        <p className="text-center text-lg">No products found.</p>
      )}
    </div>
  );
}
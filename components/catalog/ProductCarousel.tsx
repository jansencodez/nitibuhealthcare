import  Product  from "@/types/Product";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  title: string;
  products: Product[];
  isDark: boolean;
  onProductClick: (product: Product) => void;
}

export default function ProductCarousel({
  title,
  products,
  isDark,
  onProductClick,
}: ProductCarouselProps) {
  return (
    <div className="mb-8">
      <h3 className={`text-2xl font-bold mb-4 ${
              isDark ? "text-teal-400" : "text-teal-900"
            }`}>{title}</h3>
      <div className="flex gap-4 overflow-x-auto pb-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-48 cursor-pointer"
            onClick={() => onProductClick(product)}
          >
            <ProductCard
              product={product}
              isDark={isDark}
              onClick={() => onProductClick(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
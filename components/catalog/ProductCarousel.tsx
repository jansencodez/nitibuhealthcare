import { useRef, useState } from "react";
import Product from "@/types/Product";
import ProductCard from "./ProductCard";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";


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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Scroll functions
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240; // Approximately 2 card widths
      const newScroll = direction === "left" ? -scrollAmount : scrollAmount;
      scrollRef.current.scrollBy({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent) => {
    if (scrollRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Multiply for faster scrolling
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="mb-12 relative">
      {/* Title */}
      <h3
        className={`text-2xl font-bold mb-4 ${
          isDark ? "text-teal-400" : "text-teal-900"
        }`}
      >
        {title}
      </h3>

      {/* Navigation Arrows */}
      {products.length > 3 && (
        <>
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
              isDark
                ? "bg-teal-900/80 text-teal-400 hover:bg-teal-900"
                : "bg-teal-100/80 text-teal-900 hover:bg-teal-200"
            } transition-colors`}
            aria-label="Scroll left"
          >
            <BiChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full ${
              isDark
                ? "bg-teal-900/80 text-teal-400 hover:bg-teal-900"
                : "bg-teal-100/80 text-teal-900 hover:bg-teal-200"
            } transition-colors`}
            aria-label="Scroll right"
          >
            <BiChevronRight size={24} />
          </button>
        </>
      )}

      {/* Carousel Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 scroll-smooth hide-scrollbar relative"
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
        onMouseMove={handleDragMove}
        style={{ cursor: isDragging ? "grabbing" : "grab" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-48 md:w-56 lg:w-64 cursor-pointer select-none"
            onClick={() => !isDragging && onProductClick(product)}
          >
            <ProductCard
              product={product}
              isDark={isDark}
              onClick={() => onProductClick(product)}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

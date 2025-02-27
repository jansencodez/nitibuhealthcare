"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import formatProductName from "@/utils/formatProductName";
import { useTheme } from "@/context/ThemeContext";

interface CarouselProps {
  images: string[];
  autoPlayInterval?: number;
  visibleItems?: Record<string, number>;
}

const AdvancedCarousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 3000,
  visibleItems = { xs: 1, sm: 2, md: 3 },
}) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const numImages = images.length;

  // Swipe state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Determine visible items based on screen size
  const getVisibleItems = useCallback(() => {
    if (typeof window === "undefined") return visibleItems.md || 3;
    const width = window.innerWidth;
    if (width < 640) return visibleItems.xs || 1;
    if (width < 768) return visibleItems.sm || 2;
    return visibleItems.md || 3;
  }, [visibleItems]);

  const [currentVisibleItems, setCurrentVisibleItems] = useState(
    getVisibleItems()
  );

  useEffect(() => {
    const handleResize = () => setCurrentVisibleItems(getVisibleItems());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [visibleItems, getVisibleItems]);

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex(
        (prev) =>
          (prev + newDirection * currentVisibleItems + numImages) % numImages
      );
      setIsPaused(false);
    },
    [numImages, currentVisibleItems]
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = setInterval(() => paginate(1), autoPlayInterval);
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval, paginate, isPaused]);

  // Swipe handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) paginate(1);
    if (isRightSwipe) paginate(-1);

    setTouchStart(null);
    setTouchEnd(null);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { x: "0%", opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < currentVisibleItems; i++) {
      visibleImages.push(images[(currentIndex + i) % numImages]);
    }
    return visibleImages;
  };

  const handleImageSelect = (image: string) => {
    setIsPaused(true);
    setSelectedImage(image);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto my-6 sm:my-8 px-4 sm:px-6 overflow-hidden">
      <div className="relative">
        {/* Carousel Content */}
        <div
          className="relative w-full rounded-lg shadow-lg h-[300px] sm:h-[350px] md:h-[400px]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex w-full gap-4 sm:gap-6 p-4 absolute h-full"
            >
              {getVisibleImages().map((image, idx) => (
                <motion.div
                  key={idx}
                  className={`relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 h-full rounded-lg overflow-hidden cursor-pointer transition-transform ${
                    selectedImage === image
                      ? theme === "dark"
                        ? "ring-2 ring-teal-400"
                        : "ring-2 ring-teal-600"
                      : ""
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.3 }}
                  onClick={() => handleImageSelect(image)}
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={`/images/products/${image}`}
                    alt={formatProductName(image)}
                    fill
                    style={{ objectFit: "cover" }}
                    className={`rounded-lg ${
                      theme === "dark" ? "brightness-90" : "brightness-105"
                    }`}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute bottom-0 left-0 right-0 ${
                      theme === "dark" ? "bg-gray-900/70" : "bg-black/50"
                    } p-2 sm:p-4`}
                  >
                    <p
                      className="text-white text-sm sm:text-base md:text-lg font-semibold truncate"
                      dangerouslySetInnerHTML={{
                        __html: formatProductName(image),
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => paginate(-1)}
          className={`absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full shadow-md transition-colors ${
            theme === "dark"
              ? "bg-gray-800 text-teal-400 hover:bg-gray-700"
              : "bg-white text-teal-600 hover:bg-teal-50"
          }`}
        >
          <FaChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className={`absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full shadow-md transition-colors ${
            theme === "dark"
              ? "bg-gray-800 text-teal-400 hover:bg-gray-700"
              : "bg-white text-teal-600 hover:bg-teal-50"
          }`}
        >
          <FaChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-3 sm:mt-4 space-x-2">
        {Array.from({ length: Math.ceil(numImages / currentVisibleItems) }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx * currentVisibleItems);
                setDirection(0);
                setIsPaused(false);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                currentIndex >= idx * currentVisibleItems &&
                currentIndex < (idx + 1) * currentVisibleItems
                  ? theme === "dark"
                    ? "bg-teal-400"
                    : "bg-teal-600"
                  : theme === "dark"
                  ? "bg-gray-600"
                  : "bg-gray-300"
              }`}
            />
          )
        )}
      </div>

      {/* Pause Status Indicator */}
      {isPaused && (
        <div
          className={`absolute top-2 sm:top-4 right-2 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md ${
            theme === "dark"
              ? "bg-gray-800 text-teal-400"
              : "bg-white text-teal-600"
          }`}
        >
          Paused
        </div>
      )}

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 flex justify-center items-center z-50 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative rounded-xl shadow-2xl w-full max-w-[90vw] sm:max-w-2xl md:max-w-3xl ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className={`absolute -top-3 -right-3 rounded-full p-1.5 sm:p-2 shadow-lg z-10 ${
                  theme === "dark"
                    ? "bg-teal-400 hover:bg-teal-300 text-gray-900"
                    : "bg-teal-600 hover:bg-teal-700 text-white"
                }`}
              >
                <FaXmark className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <div className="relative w-full aspect-square sm:aspect-[4/3] md:aspect-video">
                <Image
                  src={`/images/products/${selectedImage}`}
                  alt={formatProductName(selectedImage)}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-t-xl"
                  sizes="(max-width: 640px) 90vw, (max-width: 768px) 70vw, 60vw"
                />
              </div>

              <div
                className={`p-4 sm:p-6 rounded-b-xl ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <p
                  className={`text-center text-base sm:text-lg md:text-xl font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-gray-800"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: formatProductName(selectedImage),
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdvancedCarousel;

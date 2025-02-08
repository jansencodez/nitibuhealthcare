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
  visibleItems?: number;
}

const AdvancedCarousel: React.FC<CarouselProps> = ({
  images,
  autoPlayInterval = 3000,
  visibleItems = 3,
}) => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const numImages = images.length;

  const paginate = useCallback(
    (newDirection: number) => {
      setDirection(newDirection);
      setCurrentIndex(
        (prev) => (prev + newDirection * visibleItems + numImages) % numImages
      );
      setIsPaused(false);
    },
    [numImages, visibleItems]
  );

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (!isPaused) {
      timer = setInterval(() => {
        paginate(1);
      }, autoPlayInterval);
    }
    return () => clearInterval(timer);
  }, [currentIndex, autoPlayInterval, paginate, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      y: "0%",
    }),
    center: {
      x: "0%",
      opacity: 1,
      y: "0%",
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      y: "0%",
    }),
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < visibleItems; i++) {
      visibleImages.push(images[(currentIndex + i) % numImages]);
    }
    return visibleImages;
  };

  const handleImageSelect = (image: string) => {
    setIsPaused(true);
    setSelectedImage(image);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto my-8 overflow-hidden">
      <div className="relative rounded-lg shadow-lg h-[400px]">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex w-full gap-6 p-4 absolute h-full"
            layout
          >
            {getVisibleImages().map((image, idx) => (
              <motion.div
                key={idx}
                className={`relative flex-shrink-0 w-full md:w-1/3 p-x-4 h-full rounded-lg overflow-hidden cursor-pointer transition-transform ${
                  selectedImage === image
                    ? theme === "dark"
                      ? "ring-4 ring-teal-400"
                      : "ring-4 ring-teal-600"
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
                  priority
                />
                <div
                  className={`absolute bottom-0 left-0 right-0 ${
                    theme === "dark" ? "bg-gray-900/70" : "bg-black/50"
                  } p-4`}
                >
                  <p
                    className="text-white text-lg font-semibold"
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
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full px-4 flex justify-between items-center pointer-events-none">
        <button
          onClick={() => paginate(-1)}
          className={`pointer-events-auto p-2 rounded-full shadow-md transition-colors ${
            theme === "dark"
              ? "bg-gray-800 text-teal-400 hover:bg-gray-700"
              : "bg-white text-teal-600 hover:bg-teal-50"
          }`}
        >
          <FaChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => paginate(1)}
          className={`pointer-events-auto p-2 rounded-full shadow-md transition-colors ${
            theme === "dark"
              ? "bg-gray-800 text-teal-400 hover:bg-gray-700"
              : "bg-white text-teal-600 hover:bg-teal-50"
          }`}
        >
          <FaChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(numImages / visibleItems) }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx * visibleItems);
                setDirection(0);
                setIsPaused(false);
              }}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex >= idx * visibleItems &&
                currentIndex < (idx + 1) * visibleItems
                  ? theme === "dark"
                    ? "bg-teal-400"
                    : "bg-teal-600"
                  : theme === "dark"
                  ? "bg-gray-600"
                  : "bg-gray-300"
              }`}
            ></button>
          )
        )}
      </div>

      {/* Pause Status Indicator */}
      {isPaused && (
        <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium shadow-md ${
            theme === "dark"
              ? "bg-gray-800 text-teal-400"
              : "bg-white text-teal-600"
          }`}
        >
          Auto-play Paused
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <AnimatePresence>
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex justify-center items-center z-50 p-4 modal-open"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className={`relative rounded-xl shadow-2xl max-w-4xl w-full mx-4 ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className={`absolute -top-4 -right-4 rounded-full p-2 shadow-lg z-40 ${
                  theme === "dark"
                    ? "bg-teal-400 hover:bg-teal-300 text-gray-900"
                    : "bg-teal-600 hover:bg-teal-700 text-white"
                }`}
              >
                <FaXmark className="w-6 h-6" />
              </button>

              <div className="relative aspect-square md:aspect-video w-full">
                <Image
                  src={`/images/products/${selectedImage}`}
                  alt={formatProductName(selectedImage)}
                  fill
                  style={{ objectFit: "contain" }}
                  className="rounded-t-xl"
                  sizes="(max-width: 768px) 90vw, 80vw"
                  priority
                />
              </div>

              <div
                className={`p-6 rounded-b-xl ${
                  theme === "dark" ? "bg-gray-700" : "bg-gray-50"
                }`}
              >
                <p
                  className={`text-center text-xl font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-gray-800"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: formatProductName(selectedImage),
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default AdvancedCarousel;

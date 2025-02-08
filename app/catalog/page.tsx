"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaSyringe, FaPrescriptionBottle, FaXmark } from "react-icons/fa6";
import Image from "next/image";
import formatProductName from "@/utils/formatProductName";

// Categorized products
const categorizedProducts = [
  {
    category: "Pharmaceutical Products",
    icon: <FaPrescriptionBottle />,
    items: [
      "ACID HAEMODIALYSIS POWDER.jpg",
      "BICARBONATE HAEMODIALYSIS POWDER.jpg",
      "HIGH FLUX DIALYZER 2.1M2.jpg",
      "HIGH FLUX DIALYZER 1.9M2.jpg",
      "HIGH FLUX DIALYZER 1.8M2.jpg",
      "HIGH FLUX DIALYZER 1.7M2.jpg",
      "HIGH FLUX DIALYZER 1.6M2.jpg",
    ],
  },
  {
    category: "Non-Pharmaceutical Products",
    icon: <FaSyringe />,
    items: [
      "SYRINGE 5ML1.jpg",
      "SYRINGE 5ML.jpg",
      "SYRINGE 2ML.jpg",
      "SYRINGE 2ML1.jpg",
      "SYRINGE 20ML.jpg",
      "SYRINGE 20ML3.jpg",
      "SYRINGE 20ML1.jpg",
      "SYRINGE 10ML1.jpg",
      "SYRINGE 10ML.jpg",
      "SYRINGE 10ML2.jpg",
      "NEEDLE 23G.jpg",
    ],
  },
];

export default function CataloguePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-gray-900 text-center mb-16"
      >
        Product Catalogue
      </motion.h1>

      <div className="max-w-7xl mx-auto space-y-20">
        {categorizedProducts.map((section, sectionIndex) => (
          <motion.section
            key={section.category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: sectionIndex * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="text-3xl text-teal-600">{section.icon}</div>
              <h2 className="text-3xl font-bold text-gray-900">
                {section.category}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.items.map((product, productIndex) => (
                <motion.div
                  key={product}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: productIndex * 0.05 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex-1"
                  onClick={() =>
                    setSelectedImage(`/images/products/${product}`)
                  }
                >
                  {/* Image Container */}
                  <div className="relative w-full h-48">
                    <Image
                      src={`/images/products/${product}`}
                      alt={formatProductName(product)}
                      fill
                      sizes="100vw"
                      style={{ objectFit: "cover" }}
                      priority
                      className="mx-auto w-full h-auto"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="p-4 border-t text-center">
                    <h3
                      className="text-lg font-semibold text-gray-800"
                      dangerouslySetInnerHTML={{
                        __html: formatProductName(product),
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 bg-teal-600 text-white rounded-full p-2 hover:bg-teal-700 transition-colors shadow-lg z-40"
            >
              <FaXmark className="w-6 h-6" />
            </button>

            <Image
              src={selectedImage}
              alt="Selected Product"
              width={600}
              height={600}
              style={{ objectFit: "contain" }}
              className="mx-auto"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

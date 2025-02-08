"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";

export default function ProductsPage() {
  const { theme } = useTheme();
  const router = useRouter();

  const phamaceutical = [
    {
      title: "Essential Medications",
      description:
        "We supply a wide range of essential drugs, including antibiotics, antivirals, pain management medications, and chronic disease treatments.",
    },
    {
      title: "Specialized Pharmaceuticals",
      description:
        "We offer specialized medications for specific conditions, such as cardiovascular diseases, diabetes, and infectious diseases.",
    },
    {
      title: "Over-the-Counter (OTC) Products",
      description:
        "Our OTC products include pain relievers, cold and flu medications, vitamins, and supplements, ensuring that patients have access to everyday health solutions.",
    },
    {
      title: "Dialysis-Related Pharmaceuticals",
      description:
        "We provide medications specifically designed for patients undergoing dialysis, supporting effective treatment and patient well-being.",
    },
  ];
  const nonPhamaceutical = [
    {
      title: "Medical Equipment",
      description:
        "We supply diagnostic tools, surgical instruments, hospital furniture, and other essential medical equipment to healthcare facilities.",
    },
    {
      title: "Personal Protective Equipment (PPE)",
      description:
        "Our PPE offerings include masks, gloves, gowns, and face shields, ensuring the safety of healthcare providers and patients.",
    },
    {
      title: "Syringes and Needles",
      description:
        "We provide a variety of syringes and needles for different medical applications, ensuring precision and safety in patient care.",
    },
    {
      title: "Dialysis Supplies",
      description:
        "Our non-pharmaceutical dialysis products include hemodialysis bloodlines, acid concentrates, dialyzers, and fistula needles, all designed to support effective dialysis treatments.",
    },
    {
      title: "Wound Care Products",
      description:
        "We offer a range of wound care supplies, including dressings, bandages, and antiseptics, to promote healing and prevent infections.",
    },
  ];

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-teal-50"
      }`}
    >
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/products-hero.jpg"
            alt="Pharmaceutical Products"
            fill
            className={`object-cover ${
              theme === "dark" ? "brightness-75" : "brightness-100"
            }`}
            priority
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              theme === "dark"
                ? "from-gray-900/80 to-gray-800/50"
                : "from-teal-900/70 to-teal-800/40"
            }`}
          />
        </div>

        <div className="container mx-auto px-4 relative h-full flex items-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Quality Medical Products
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xl md:text-2xl ${
                theme === "dark" ? "text-gray-200" : "text-teal-100"
              } mb-8`}
            >
              Discover our comprehensive range of healthcare solutions
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => router.push("/catalog")}
              className={`px-8 py-4 rounded-xl font-semibold text-lg shadow-lg ${
                theme === "dark"
                  ? "bg-teal-600 text-white hover:bg-teal-500"
                  : "bg-white text-teal-900 hover:bg-teal-50"
              }`}
            >
              Explore Catalog
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Diagonal Stripe Pattern */}
      <VectorPattern
        type="diagonal"
        opacity={theme === "dark" ? 0.2 : 0.4}
        className="[background-size:40px_40px]"
      />

      <div className="container mx-auto px-4 py-20 relative">
        {/* Pharmaceutical Products Section - Improved Animation */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }} // Increased trigger amount
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.3, // Increased stagger delay
              },
            },
          }}
          className="mb-16"
        >
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className={`text-3xl font-bold mb-8 ${
              theme === "dark" ? "text-teal-400" : "text-teal-900"
            }`}
          >
            Pharmaceutical Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {phamaceutical.map((product, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === "dark" ? "text-gray-100" : "text-teal-900"
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Non-Pharmaceutical Products Section - Similar Improvements */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.h2
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
            className={`text-3xl font-bold mb-8 ${
              theme === "dark" ? "text-teal-400" : "text-teal-900"
            }`}
          >
            Non-Pharmaceutical Products
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {nonPhamaceutical.map((product, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 150,
                      damping: 15,
                    },
                  },
                }}
                whileHover={{
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700"
                    : "bg-white hover:bg-gray-50"
                }`}
              >
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === "dark" ? "text-gray-100" : "text-teal-900"
                  }`}
                >
                  {product.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {product.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

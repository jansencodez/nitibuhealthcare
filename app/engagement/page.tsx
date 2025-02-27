"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaHome,
  FaMicrophone,
} from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";

const initiatives = [
  {
    icon: <FaChalkboardTeacher className="w-12 h-12" />,
    title: "Health Education",
    description:
      "We conduct workshops and seminars to raise awareness about various health issues and preventive measures.",
    image: "/images/health-education.jpg",
  },
  {
    icon: <FaSchool className="w-12 h-12" />,
    title: "School Healthcare Services",
    description:
      "We partner with schools to provide healthcare services, ensuring students receive necessary medical attention and health education.",
    image: "/images/school-health.jpg",
  },
  {
    icon: <FaHome className="w-12 h-12" />,
    title: "Home Healthcare Services",
    description:
      "Our home healthcare services offer personalized care to individuals in the comfort of their homes.",
    image: "/images/home-healthcare.jpg",
  },
  {
    icon: <FaMicrophone className="w-12 h-12" />,
    title: "Health Talks and Events",
    description:
      "We organize community health talks and events focusing on chronic diseases, preventive care, and healthy living.",
    image: "/images/health-talks.jpg",
  },
];

export default function HealthPromotionPage() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  const imageHoverVariants = {
    hover: { scale: 1.05 },
  };

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden ${
        theme === "dark" ? "bg-gray-900" : "bg-teal-50"
      }`}
    >
      {/* Background Pattern */}
      <VectorPattern
        type="waves"
        opacity={theme === "dark" ? 0.05 : 0.1}
        className="[background-size:120px_120px]"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/health-promotion-hero.jpg"
            alt="Health Promotion"
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

        <motion.div
          className="container mx-auto px-4 h-full flex items-center justify-center text-center relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1], // Smooth ease-out
            }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Health Promotion & Community Engagement
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl md:text-2xl text-teal-100"
            >
              Empowering communities through health education and outreach
            </motion.p>
          </motion.div>
        </motion.div>
      </section>

      {/* Initiatives Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`rounded-2xl shadow-xl overflow-hidden transition-transform ${
                theme === "dark" ? "bg-gray-800" : "bg-white"
              }`}
              viewport={{ once: true, amount: 0.5 }}
            >
              <motion.div
                className="relative h-48"
                variants={imageHoverVariants}
              >
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className={`absolute inset-0 ${
                    theme === "dark" ? "bg-gray-900/40" : "bg-teal-900/30"
                  }`}
                />
              </motion.div>

              <motion.div
                className="p-6"
                whileHover={{
                  transition: { staggerChildren: 0.1 },
                }}
              >
                <motion.div
                  className={`mb-4 ${
                    theme === "dark" ? "text-teal-400" : "text-teal-600"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {initiative.icon}
                </motion.div>
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    theme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {initiative.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {initiative.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section
        className={`py-20 text-center ${
          theme === "dark" ? "bg-gray-800" : "bg-teal-900"
        }`}
      >
        <motion.div
          className="container mx-auto px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl font-bold mb-8 text-white"
          >
            Join Our Community Initiatives
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-xl mb-12 max-w-2xl mx-auto text-teal-100"
          >
            Be part of our mission to create healthier communities through
            education and engagement
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className={`px-10 py-5 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all ${
                theme === "dark"
                  ? "bg-white text-gray-900 hover:bg-gray-100"
                  : "bg-white text-teal-900 hover:bg-teal-50"
              }`}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Get Involved
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className={`p-6 rounded-lg shadow-lg max-w-sm w-full ${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-white text-gray-900"
              }`}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <p className="mb-6">This is not available yet.</p>
              <button
                onClick={() => setIsModalOpen(false)}
                className={`px-4 py-2 rounded-md font-medium ${
                  theme === "dark"
                    ? "bg-teal-500 text-white hover:bg-teal-600"
                    : "bg-teal-600 text-white hover:bg-teal-700"
                }`}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

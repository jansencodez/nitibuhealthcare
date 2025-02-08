"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";
import {
  FaTruck,
  FaBoxes,
  FaFlask,
  FaCheckCircle,
  FaLeaf,
  FaGlobe,
} from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function ServicesPage() {
  const { theme } = useTheme();
  const services = [
    {
      icon: <FaTruck className="w-8 h-8 text-teal-600 dark:text-teal-400" />,
      title: "Distribution",
      description:
        "Nitibu Healthcare provides efficient and reliable distribution services, ensuring that our medical equipment and supplies reach healthcare providers promptly and in perfect condition.",
    },
    {
      icon: <FaBoxes className="w-8 h-8 text-teal-600" />,
      title: "Wholesale Solutions",
      description:
        "We offer comprehensive wholesale solutions for healthcare institutions, clinics, and pharmacies, providing cost-effective and scalable options for sourcing medical supplies and equipment.",
    },
    {
      icon: <FaFlask className="w-8 h-8 text-teal-600" />,
      title: "Research and Development",
      description:
        "At Nitibu Healthcare, we are committed to innovation through continuous research and development (R&D). Our R&D team works tirelessly to identify and develop new products and technologies that meet the evolving needs of the healthcare industry.",
    },
    {
      icon: <FaCheckCircle className="w-8 h-8 text-teal-600" />,
      title: "Quality Assurance",
      description:
        "Quality is at the heart of everything we do. We have implemented rigorous quality assurance processes to ensure that all our products meet the highest industry standards.",
    },
    {
      icon: <FaLeaf className="w-8 h-8 text-teal-600" />,
      title: "Sustainability",
      description:
        "We are dedicated to promoting sustainability in all aspects of our business. Nitibu Healthcare is committed to reducing our environmental impact through sustainable practices in product sourcing, packaging, and distribution.",
    },
    {
      icon: <FaGlobe className="w-8 h-8 text-teal-600" />,
      title: "Global Presence",
      description:
        "While we are deeply rooted in the region, Nitibu Healthcare has a growing global presence. We partner with international manufacturers and suppliers to bring the best medical equipment and supplies to our clients.",
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
            src="/images/hero/services-hero.jpg"
            alt="Healthcare Services"
            fill
            className="object-cover"
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
              Comprehensive Healthcare Services
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-xl md:text-2xl ${
                theme === "dark" ? "text-gray-200" : "text-teal-100"
              } mb-8`}
            >
              Delivering end-to-end solutions for modern medical needs
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Background pattern */}
      <VectorPattern
        type="grid"
        opacity={theme === "dark" ? 0.2 : 0.4}
        className="[background-size:40px_40px]"
      />

      <div className="container mx-auto px-4 py-20 relative">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          className={`text-5xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-teal-400" : "text-teal-900"
          }`}
        >
          Our Services
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className={`p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex flex-col items-center text-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {service.icon}
                </motion.div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    theme === "dark" ? "text-gray-100" : "text-teal-900"
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

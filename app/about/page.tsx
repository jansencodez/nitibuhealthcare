"use client";
import {
  FaClinicMedical,
  FaHeartbeat,
  FaHandHoldingHeart,
  FaAward,
  FaLaptopMedical,
  FaShippingFast,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import GoogleMapEastAfricaEmbed from "@/components/EastAfrica";
import { useTheme } from "@/context/ThemeContext";

export default function AboutPage() {
  const { theme } = useTheme();
  return (
    <div className={`${theme === "dark" ? "bg-gray-900" : "bg-white"}`}>
      <HeroSection />
      <StorySection />
      <InitiativesSection />
      <MissionVisionSection />
      <CoreValuesSection />
      <ReachSection />
    </div>
  );
}

const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative h-[70vh] flex items-center justify-center"
    >
      <Image
        src="/images/hero/about-hero.jpg"
        alt="Medical background"
        fill
        style={{ objectFit: "cover" }}
        className={`absolute inset-0 z-0 ${
          theme === "dark" ? "brightness-75" : ""
        }`}
      />
      <div
        className={`absolute inset-0 z-0 ${
          theme === "dark" ? "bg-gray-900/80" : "bg-teal-900/80"
        }`}
      />
      <div className="text-center text-white px-4 relative z-10">
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Transforming Healthcare in Africa
        </motion.h1>
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto"
        >
          Building healthier communities through innovation and accessibility
        </motion.p>
      </div>
    </motion.section>
  );
};

const StorySection = () => {
  const { theme } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-teal-400" : "text-blue-900"
          } mb-8`}
        >
          Our Story
        </motion.h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/medical-supplies.jpg"
              alt="Medical supplies"
              width={500}
              height={256}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3
              className={`text-2xl font-semibold ${
                theme === "dark" ? "text-gray-100" : "text-blue-900"
              } mb-4`}
            >
              Nitibu Healthcare
            </h3>
            <p
              className={`leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Founded in <strong>2021</strong>, Nitibu Healthcare ensures reliable access to
              high-quality pharmaceutical and non-pharmaceutical consumables
              across East and Central Africa, serving as the backbone for
              hundreds of healthcare facilities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const InitiativesSection = () => {
  const { theme } = useTheme();
  const initiatives = [
    {
      icon: FaClinicMedical,
      title: "Rural Healthcare Expansion",
      items: [
        "Primary medical consultations",
        "Diagnostic laboratory services",
        "24/7 pharmacy access",
      ],
    },
    {
      icon: FaHeartbeat,
      title: "Nain Dialysis Center",
      items: [
        "7 regional dialysis units",
        "300-bed capacity",
        "Specialized transplant center",
      ],
    },
  ];

  return (
    <section
      className={`py-16 px-4 md:px-8 ${
        theme === "dark" ? "bg-gray-800" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-teal-400" : "text-blue-900"
          }`}
        >
          Pioneering Initiatives
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {initiatives.map((initiative, index) => (
            <motion.div
              key={initiative.title}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-lg ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
            >
              <div
                className={`text-4xl mb-4 ${
                  theme === "dark" ? "text-teal-400" : "text-teal-500"
                }`}
              >
                <initiative.icon />
              </div>
              <h3
                className={`text-xl font-semibold mb-4 ${
                  theme === "dark" ? "text-gray-100" : "text-blue-900"
                }`}
              >
                {initiative.title}
              </h3>
              <ul className="space-y-2">
                {initiative.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center ${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <span className="mr-2">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionVisionSection = () => {
  const { theme } = useTheme();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        when: "beforeChildren",
      },
    },
  };

  const characterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.1 },
    },
  };

  // Split text into characters for animation
  const renderAnimatedText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        variants={characterVariants}
        className="inline-block"
        custom={index}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={containerVariants}
          className={`p-8 rounded-lg border-l-4 ${
            theme === "dark"
              ? "bg-gray-800 border-teal-400"
              : "bg-gray-50 border-teal-500"
          }`}
        >
          <div className="space-y-6">
            <motion.div variants={{}}>
              {" "}
              {/* Empty variants for child */}
              <h2
                className={`text-2xl font-bold mb-4 ${
                  theme === "dark" ? "text-gray-100" : "text-blue-900"
                }`}
              >
                Our Mission
              </h2>
              <motion.p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
                variants={containerVariants}
              >
                {renderAnimatedText(
                  "To enhance healthcare delivery in East and Central Africa by " +
                    "providing reliable access to high-quality medical products and " +
                    "services, fostering innovation, and ensuring affordability for all."
                )}
              </motion.p>
            </motion.div>

            <motion.div variants={{}}>
              {" "}
              {/* Empty variants for child */}
              <h2
                className={`text-2xl font-bold mb-4 ${
                  theme === "dark" ? "text-gray-100" : "text-blue-900"
                }`}
              >
                Our Vision
              </h2>
              <motion.p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
                variants={containerVariants}
              >
                {renderAnimatedText(
                  "To create an integrated healthcare network that transforms " +
                    "medical care in emerging markets."
                )}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CoreValuesSection = () => {
  const { theme } = useTheme();
  const values = [
    {
      icon: FaHandHoldingHeart,
      title: "Integrity",
      description: "Building trust through transparency and ethical practices",
    },
    {
      icon: FaAward,
      title: "Quality",
      description: "Meeting international standards in all our offerings",
    },
    {
      icon: FaLaptopMedical,
      title: "Innovation",
      description: "Delivering cutting-edge medical solutions",
    },
    {
      icon: FaShippingFast,
      title: "Reliability",
      description: "Consistent, dependable service delivery",
    },
  ];

  return (
    <section
      className={`py-16 px-4 md:px-8 ${
        theme === "dark" ? "bg-gray-800" : "bg-blue-50"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl font-bold text-center mb-12 ${
            theme === "dark" ? "text-teal-400" : "text-blue-900"
          }`}
        >
          Core Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow ${
                theme === "dark" ? "bg-gray-700" : "bg-white"
              }`}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className={`text-3xl mb-4 ${
                  theme === "dark" ? "text-teal-400" : "text-blue-900"
                }`}
              >
                <value.icon />
              </div>
              <h3
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {value.title}
              </h3>
              <p
                className={`${
                  theme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReachSection = () => {
  const { theme } = useTheme();
  return (
    <section
      className={`py-16 px-4 md:px-8 ${
        theme === "dark" ? "bg-gray-900" : "bg-teal-900"
      } text-white`}
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Our Reach
        </motion.h2>
        <motion.div
          initial={{ scale: 0.9 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          className="relative h-96 w-full max-w-4xl mx-auto"
        >
          <GoogleMapEastAfricaEmbed />
        </motion.div>
        <motion.p
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-lg"
        >
          Serving communities across East and Central Africa with plans for
          regional expansion
        </motion.p>
      </div>
    </section>
  );
};

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";
import {
  FaChalkboardTeacher,
  FaSchool,
  FaHome,
  FaMicrophone,
} from "react-icons/fa";

const initiatives = [
  {
    icon: <FaChalkboardTeacher className="w-12 h-12 text-teal-600" />,
    title: "Health Education",
    description:
      "We conduct workshops and seminars to raise awareness about various health issues and preventive measures.",
    image: "/images/health-education.jpg",
  },
  {
    icon: <FaSchool className="w-12 h-12 text-teal-600" />,
    title: "School Healthcare Services",
    description:
      "We partner with schools to provide healthcare services, ensuring students receive necessary medical attention and health education.",
    image: "/images/school-health.jpg",
  },
  {
    icon: <FaHome className="w-12 h-12 text-teal-600" />,
    title: "Home Healthcare Services",
    description:
      "Our home healthcare services offer personalized care to individuals in the comfort of their homes.",
    image: "/images/home-healthcare.jpg",
  },
  {
    icon: <FaMicrophone className="w-12 h-12 text-teal-600" />,
    title: "Health Talks and Events",
    description:
      "We organize community health talks and events focusing on chronic diseases, preventive care, and healthy living.",
    image: "/images/health-talks.jpg",
  },
];

export default function HealthPromotionPage() {
  return (
    <div className="min-h-screen bg-teal-50 relative overflow-hidden">
      {/* Background Pattern */}
      <VectorPattern
        type="waves"
        opacity={0.1}
        className="[background-size:120px_120px]"
      />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/health-promotion-hero.jpg"
            alt="Health Promotion"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-800/40" />
        </div>

        <div className="container mx-auto px-4 h-full flex items-center justify-center text-center relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Health Promotion & Community Engagement
            </h1>
            <p className="text-xl md:text-2xl text-teal-100">
              Empowering communities through health education and outreach
            </p>
          </motion.div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="container mx-auto px-4 py-20 relative">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2  gap-8"
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
          {initiatives.map((initiative, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 50, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-teal-900/30" />
              </div>

              <div className="p-6">
                <motion.div
                  className="mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {initiative.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-teal-900 mb-2">
                  {initiative.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {initiative.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-teal-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-8"
          >
            Join Our Community Initiatives
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 max-w-2xl mx-auto"
          >
            Be part of our mission to create healthier communities through
            education and engagement
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-10 py-5 bg-white text-teal-900 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all"
          >
            Get Involved
          </motion.button>
        </div>
      </section>
    </div>
  );
}

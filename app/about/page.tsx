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

export default function AboutPage() {
  return (
    <div className="bg-white">
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
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 bg-teal-900/80 z-0" />
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-3xl font-bold text-blue-900 mb-8"
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
              className="w-full h-64 object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">
              Today&apos;s Foundation
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Founded in Nairobi, Nitibu Healthcare ensures reliable access to
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
    <section className="bg-gray-50 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
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
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="text-teal-500 text-4xl mb-4">
                <initiative.icon />
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                {initiative.title}
              </h3>
              <ul className="space-y-2">
                {initiative.items.map((item) => (
                  <li key={item} className="flex items-center text-gray-600">
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
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-50 border-l-4 border-teal-500 p-8 rounded-lg"
        >
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600">
                To enhance healthcare delivery in East and Central Africa by
                providing reliable access to high-quality medical products and
                services, fostering innovation, and ensuring affordability for
                all.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600">
                To create an integrated healthcare network that transforms
                medical care in emerging markets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CoreValuesSection = () => {
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
    <section className="py-16 px-4 md:px-8 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-900 mb-12 text-center">
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
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-blue-900 text-3xl mb-4">
                <value.icon />
              </div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReachSection = () => {
  return (
    <section className="bg-teal-900 text-white py-16 px-4 md:px-8">
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

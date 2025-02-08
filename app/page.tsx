"use client";

import { motion } from "framer-motion";
import {
  FaPills,
  FaStethoscope,
  FaBullhorn,
  FaHeartbeat,
  FaUserMd,
  FaHospital,
  FaQuoteLeft,
} from "react-icons/fa";
import AdvancedCarousel from "@/components/Carousel";
import { HeroCarousel } from "@/components/hero/HeroComponents";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProductsAndServicesOverview } from "@/components/products&services/ProductAndServices";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";

const products = [
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
  "HIGH FLUX DIALYZER 2.1M2.jpg",
  "HIGH FLUX DIALYZER 1.9M2.jpg",
  "HIGH FLUX DIALYZER 1.6M2.jpg",
  "ACID HAEMODIALYSIS POWDER.jpg",
  "HIGH FLUX DIALYZER 1.8M2.jpg",
  "HIGH FLUX DIALYZER 1.7M2.jpg",
  "BICARBONATE HAEMODIALYSIS POWDER.jpg",
];

const impacts = [
  {
    title: "Pharmaceutical Supply",
    description:
      "Providing high-quality essential medications and specialized pharmaceuticals.",
    icon: FaPills,
  },
  {
    title: "Non-Pharmaceutical Products",
    description:
      "Offering a wide range of medical equipment, PPE, and dialysis supplies.",
    icon: FaStethoscope,
  },
  {
    title: "Health Promotion",
    description:
      "Organizing health education events and community health initiatives.",
    icon: FaBullhorn,
  },
  {
    title: "Dialysis & Kidney Care",
    description:
      "Supporting advanced kidney care with state-of-the-art dialysis facilities.",
    icon: FaHeartbeat,
  },
  {
    title: "Expert Medical Team",
    description:
      "A team of highly qualified medical professionals dedicated to patient care.",
    icon: FaUserMd,
  },
  {
    title: "Modern Healthcare Facilities",
    description:
      "State-of-the-art hospitals and clinics providing top-tier medical services.",
    icon: FaHospital,
  },
];

const testimonials = [
  {
    name: "Dr. Amina",
    message:
      "Nitibu Healthcare has truly revolutionized our supply chain with their quality products.",
  },
  {
    name: "Mr. Otieno",
    message:
      "The innovation and community focus of Nitibu Healthcare is unparalleled in the region.",
  },
  {
    name: "Ms. Wanjiru",
    message:
      "Their commitment to improving healthcare accessibility has made a tangible difference in our community.",
  },
];

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen"
    >
      <VectorPattern
        type="dots"
        opacity={0.4}
        className="[background-size:40px_40px]"
      />

      {/* Hero Section */}
      <HeroCarousel />

      {/* Products & Services Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <ProductsAndServicesOverview />
        <AdvancedCarousel
          images={products}
          autoPlayInterval={4000}
          visibleItems={3}
        />
      </motion.section>

      {/* Impact Section */}
      <motion.section
        className="py-20 bg-teal-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-3xl font-bold text-center mb-16 text-teal-900"
          >
            Transforming Healthcare Delivery
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {impacts.slice(0, 4).map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  className="text-teal-600 mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <service.icon className="w-12 h-12" />
                </motion.div>
                <h3 className="text-xl font-semibold mb-3 text-teal-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <motion.section
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {testimonials.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: { scale: 1, opacity: 1 },
                }}
                className="text-center p-6 bg-teal-50 rounded-xl"
              >
                <motion.div
                  className="text-2xl font-bold text-teal-600 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaQuoteLeft />
                </motion.div>
                <p className="text-gray-600 font-medium mb-4">{stat.message}</p>
                <p className="font-semibold text-teal-800">- {stat.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative py-32 bg-teal-900  text-white overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 text-center relative ">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-4xl font-bold mb-8"
          >
            Partner in Healthcare Excellence
          </motion.h2>

          <motion.p
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xl mb-12 max-w-2xl mx-auto"
          >
            Collaborate with us to enhance medical care infrastructure and
            accessibility
          </motion.p>

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              delay: 0.4,
            }}
          >
            <button className="px-10 py-5 bg-white text-teal-900 rounded-xl font-semibold text-lg hover:bg-teal-50 transition-colors shadow-xl hover:shadow-2xl">
              Start Partnership
            </button>
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

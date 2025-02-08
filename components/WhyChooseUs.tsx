"use client";

import {
  FaBoxOpen,
  FaCheckCircle,
  FaHandsHelping,
  FaDollarSign,
  FaUsers,
  FaLightbulb,
  FaCogs,
  FaHeart,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBoxOpen className="w-8 h-8 text-teal-600" />,
    title: "Comprehensive Product Range",
    description:
      "We offer a wide selection of healthcare services, medical equipment, and supplies, catering to the diverse needs of healthcare providers.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-teal-600" />,
    title: "Quality Assurance",
    description:
      "Our products are sourced from reputable manufacturers and undergo rigorous quality checks to ensure they meet industry standards.",
  },
  {
    icon: <FaHandsHelping className="w-8 h-8 text-teal-600" />,
    title: "Customer-Centric Approach",
    description:
      "We focus on building strong relationships with our clients, offering tailored solutions and excellent after-sales support.",
  },
  {
    icon: <FaDollarSign className="w-8 h-8 text-teal-600" />,
    title: "Competitive Pricing",
    description:
      "We provide high-quality products at competitive prices, ensuring that our clients get the best value for their investment.",
  },
  {
    icon: <FaUsers className="w-8 h-8 text-teal-600" />,
    title: "Experienced Team",
    description:
      "Our team of professionals brings extensive knowledge and experience, helping clients make informed decisions.",
  },
  {
    icon: <FaLightbulb className="w-8 h-8 text-teal-600" />,
    title: "Commitment to Innovation",
    description:
      "We stay ahead of industry trends, offering the latest technology and innovations in medical equipment and supplies.",
  },
  {
    icon: <FaCogs className="w-8 h-8 text-teal-600" />,
    title: "Customized Solutions",
    description:
      "We understand that each client and community is unique, and we offer customized solutions to meet those specific needs.",
  },
  {
    icon: <FaHeart className="w-8 h-8 text-teal-600" />,
    title: "Focus on Community Health",
    description:
      "Our involvement in health education, school healthcare services, and home healthcare services reflects our dedication to improving community health.",
  },
];

export const WhyChooseUs = ({ darkMode }: { darkMode: boolean }) => {
  return (
    <section className={`py-20 ${darkMode ? "bg-gray-800" : "bg-teal-50"} `}>
      <div className="container mx-auto px-4">
        <h2
          className={`text-4xl font-bold text-center mb-12 ${
            darkMode ? "text-teal-400" : "text-teal-900"
          }`}
        >
          Why Choose Nitibu Healthcare?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`${
                darkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-white"
              } p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 ${
                    darkMode ? "text-teal-400" : "text-teal-600"
                  }`}>{feature.icon}</div>
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-gray-100" : "text-teal-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

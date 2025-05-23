"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import { FaTruck, FaFileContract } from "react-icons/fa6";
import { useTheme } from "@/context/ThemeContext";

export default function TermsPage() {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`relative h-96 flex items-center justify-center ${
          theme === "dark" ? "bg-teal-900/90" : "bg-teal-700/90"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/terms-hero.jpg"
            alt="terms of service hero image"
            fill
            className="object-cover"
            priority
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              theme === "dark"
                ? "from-gray-900/80 to-gray-800/60"
                : "from-teal-900/70 to-teal-800/40"
            }`}
          />
        </div>

        <div className="text-center px-4 max-w-4xl relative z-10">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              theme === "dark" ? "text-gray-100" : "text-white"
            }`}
          >
            Terms of Service
          </motion.h1>
          <p
            className={`text-lg ${
              theme === "dark" ? "text-gray-300" : "text-teal-100"
            }`}
          >
            Last Updated: February 8, 2025
          </p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <SectionTitle icon={<FaBalanceScale />} title="Agreement Overview">
          <p
            className={`mt-4 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            These terms govern your use of Nitibu Healthcare&apos;s services and
            products. By accessing our services, you agree to be bound by these
            terms.
          </p>
        </SectionTitle>

        <ExpandableSection
          icon={<FaTruck />}
          title="1. Ordering & Delivery"
          defaultOpen
        >
          <div className="space-y-6">
            <h3
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              1.1 Order Process
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>All orders require official purchase orders</li>
              <li>Minimum order quantities may apply</li>
              <li>Lead times vary by product and location</li>
            </ul>

            <h3
              className={`text-xl font-semibold mt-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              1.2 Delivery Terms
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>FOB shipping point unless otherwise agreed</li>
              <li>Delivery timelines are estimates only</li>
              <li>Risk of loss passes upon delivery</li>
            </ul>
          </div>
        </ExpandableSection>

        <ExpandableSection
          icon={<FaFileContract />}
          title="2. Pricing & Payment"
        >
          <div className="space-y-6">
            <h3
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              2.1 Pricing Structure
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>Prices subject to change without notice</li>
              <li>Volume discounts available for qualified orders</li>
              <li>Government contracts may have special pricing</li>
            </ul>

            <h3
              className={`text-xl font-semibold mt-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              2.2 Payment Terms
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>Net 30 days from invoice date</li>
              <li>2% discount for payment within 10 days</li>
              <li>Late payments subject to 1.5% monthly interest</li>
            </ul>
          </div>
        </ExpandableSection>

        <ExpandableSection
          icon={<FaShieldAlt />}
          title="3. Warranties & Liabilities"
        >
          <div className="space-y-6">
            <h3
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              3.1 Product Warranties
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>Manufacturer warranties apply</li>
              <li>90-day warranty on consumables</li>
              <li>1-year warranty on medical equipment</li>
            </ul>

            <h3
              className={`text-xl font-semibold mt-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              3.2 Limitation of Liability
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>Not liable for consequential damages</li>
              <li>Maximum liability limited to purchase price</li>
              <li>Proper use and maintenance required</li>
            </ul>
          </div>
        </ExpandableSection>

        <ExpandableSection icon={<FaShieldAlt />} title="4. Returns & Support">
          <div className="space-y-6">
            <h3
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              4.1 Return Policy
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>30-day return window for unopened items</li>
              <li>Restocking fee may apply</li>
              <li>Special order items non-returnable</li>
            </ul>

            <h3
              className={`text-xl font-semibold mt-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              4.2 Technical Support
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>24/7 support for critical equipment</li>
              <li>On-site maintenance available</li>
              <li>Training programs for technical staff</li>
            </ul>
          </div>
        </ExpandableSection>

        <div
          className={`mt-16 p-8 rounded-xl shadow-lg ${
            theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white"
          }`}
        >
          <h2
            className={`text-2xl font-bold mb-4 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="font-semibold">Sales & Support:</span>
                <br />
                Email: nitibu.kenya@gmail.com
                <br />
                Phone: +254 794 653 649 / +254 758 100 700
              </p>
            </div>
            <div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="font-semibold">Legal Department:</span>
                <br />
                Email: nitibu.kenya@gmail.com
                <br />
                Phone: +254 758 100 700 / +254 758 100 700
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components with Dark Mode
const SectionTitle = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}) => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="mb-16"
    >
      <div className="flex items-center gap-4">
        <div
          className={`text-3xl ${
            theme === "dark" ? "text-blue-400" : "text-blue-600"
          }`}
        >
          {icon}
        </div>
        <h2
          className={`text-3xl font-bold ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {title}
        </h2>
      </div>
      {children}
    </motion.div>
  );
};

const ExpandableSection = ({
  icon,
  title,
  children,
  defaultOpen = true,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className={`mb-12 rounded-xl shadow-sm p-8 ${
        theme === "dark" ? "bg-gray-800 border border-gray-700" : "bg-white"
      }`}
    >
      <div
        className="flex items-center gap-4 mb-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`text-2xl ${
            theme === "dark" ? "text-teal-400" : "text-teal-600"
          }`}
        >
          {icon}
        </div>
        <h3
          className={`text-2xl font-semibold ${
            theme === "dark" ? "text-gray-200" : "text-gray-800"
          }`}
        >
          {title}
        </h3>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className={`overflow-hidden border-t ${
          theme === "dark" ? "border-gray-700" : "border-gray-200"
        } pt-6`}
      >
        {isOpen && children}
      </motion.div>
    </motion.div>
  );
};

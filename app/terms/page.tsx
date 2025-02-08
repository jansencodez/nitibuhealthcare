// app/terms/page.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaBalanceScale, FaShieldAlt } from "react-icons/fa";
import { FaTruck, FaFileContract } from "react-icons/fa6";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-96 flex items-center justify-center bg-teal-700/90"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/terms-hero.jpg"
            alt="terms of service hero image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-teal-800/40" />
        </div>

        <div className="text-center text-white px-4 max-w-4xl relative z-10">
          <motion.h1
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Terms of Service
          </motion.h1>
          <p className="text-lg">Last Updated: February 8, 2025</p>
        </div>
      </motion.section>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <SectionTitle icon={<FaBalanceScale />} title="Agreement Overview">
          <p className="text-gray-600 mt-4 text-lg">
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
            <h3 className="text-xl font-semibold text-gray-800">
              1.1 Order Process
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>All orders require official purchase orders</li>
              <li>Minimum order quantities may apply</li>
              <li>Lead times vary by product and location</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              1.2 Delivery Terms
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
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
            <h3 className="text-xl font-semibold text-gray-800">
              2.1 Pricing Structure
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Prices subject to change without notice</li>
              <li>Volume discounts available for qualified orders</li>
              <li>Government contracts may have special pricing</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              2.2 Payment Terms
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
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
            <h3 className="text-xl font-semibold text-gray-800">
              3.1 Product Warranties
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Manufacturer warranties apply</li>
              <li>90-day warranty on consumables</li>
              <li>1-year warranty on medical equipment</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              3.2 Limitation of Liability
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>Not liable for consequential damages</li>
              <li>Maximum liability limited to purchase price</li>
              <li>Proper use and maintenance required</li>
            </ul>
          </div>
        </ExpandableSection>

        <ExpandableSection icon={<FaShieldAlt />} title="4. Returns & Support">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">
              4.1 Return Policy
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>30-day return window for unopened items</li>
              <li>Restocking fee may apply</li>
              <li>Special order items non-returnable</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mt-6">
              4.2 Technical Support
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-600">
              <li>24/7 support for critical equipment</li>
              <li>On-site maintenance available</li>
              <li>Training programs for technical staff</li>
            </ul>
          </div>
        </ExpandableSection>

        <div className="mt-16 bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-600">
                <span className="font-semibold">Sales & Support:</span>
                <br />
                Email: sales@nitibuhealth.co.ke
                <br />
                Phone: +254 700 000 001
              </p>
            </div>
            <div>
              <p className="text-gray-600">
                <span className="font-semibold">Legal Department:</span>
                <br />
                Email: legal@nitibuhealth.co.ke
                <br />
                Phone: +254 700 000 002
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable Components
const SectionTitle = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="mb-16"
  >
    <div className="flex items-center gap-4">
      <div className="text-3xl text-blue-600">{icon}</div>
      <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
    </div>
    {children}
  </motion.div>
);

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
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="mb-12 bg-white rounded-xl shadow-sm p-8"
    >
      <div
        className="flex items-center gap-4 mb-6 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-2xl text-teal-600">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="overflow-hidden border-t pt-6"
      >
        {isOpen && children}
      </motion.div>
    </motion.div>
  );
};

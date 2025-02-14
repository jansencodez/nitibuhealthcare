"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaLock,
  FaUserShield,
  FaDatabase,
  FaTruckMedical,
  FaRegHandshake,
} from "react-icons/fa6";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";

export default function PrivacyPage() {
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
            src="/images/hero/privacy-hero.jpg"
            alt="Privacy Policy hero image"
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
            Privacy Policy
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
        <SectionTitle icon={<FaLock />} title="Our Privacy Commitment">
          <p
            className={`mt-4 text-lg ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            At Nitibu Healthcare, we are committed to protecting the privacy of
            our clients, partners, and stakeholders. This policy outlines how we
            handle data in compliance with Kenya&apos;s Data Protection Act
            (2019) and international data privacy standards.
          </p>
        </SectionTitle>

        <ExpandableSection
          icon={<FaDatabase />}
          title="1. Information We Collect"
          defaultOpen
        >
          <div className="space-y-6">
            <h3
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              1.1 Business Operations Data
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>Client and supplier contact information</li>
              <li>Purchase orders and transaction records</li>
              <li>Equipment maintenance and service history</li>
              <li>Supply chain logistics data</li>
            </ul>

            <h3
              className={`text-xl font-semibold mt-6 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              1.2 Partner Information
            </h3>
            <ul
              className={`list-disc pl-6 space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <li>Healthcare facility credentials</li>
              <li>Government partnership documentation</li>
              <li>Supplier certifications and compliance records</li>
            </ul>
          </div>
        </ExpandableSection>

        <ExpandableSection
          icon={<FaTruckMedical />}
          title="2. How We Use Your Information"
        >
          <div className="space-y-6">
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800">
                Core Business Purposes
              </h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                <li>Order processing and fulfillment</li>
                <li>Equipment maintenance scheduling</li>
                <li>Supply chain optimization</li>
                <li>Regulatory compliance reporting</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800">
                Service Improvement
              </h3>
              <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600">
                <li>Product quality monitoring</li>
                <li>Customer support enhancement</li>
                <li>Market analysis and business development</li>
              </ul>
            </div>
          </div>
        </ExpandableSection>

        <ExpandableSection
          icon={<FaRegHandshake />}
          title="3. Data Sharing & Disclosure"
        >
          <div className="space-y-6">
            <h3
              className={`text-xl font-semibold ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              3.1 Authorized Third Parties
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className={`p-4 border rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h4
                  className={`font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  Government Agencies
                </h4>
                <p
                  className={`text-sm mt-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Required reporting under medical equipment regulations
                </p>
              </div>
              <div
                className={`p-4 border rounded-lg ${
                  theme === "dark"
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <h4
                  className={`font-semibold ${
                    theme === "dark" ? "text-gray-100" : "text-gray-800"
                  }`}
                >
                  Logistics Partners
                </h4>
                <p
                  className={`text-sm mt-2 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Shared only for order fulfillment and delivery purposes
                </p>
              </div>
            </div>

            <h3
              className={`text-xl font-semibold mt-8 ${
                theme === "dark" ? "text-gray-200" : "text-gray-800"
              }`}
            >
              3.2 International Transfers
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Data may be transferred to international suppliers and partners
              under strict data protection agreements compliant with GDPR
              standards.
            </p>
          </div>
        </ExpandableSection>

        <ExpandableSection
          icon={<FaUserShield />}
          title="4. Data Security Measures"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Encryption</h3>
              <p className="text-gray-600 mt-2">
                All sensitive data is encrypted both in transit and at rest
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Access Control</h3>
              <p className="text-gray-600 mt-2">
                Role-based access to sensitive business information
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Audit Trails</h3>
              <p className="text-gray-600 mt-2">
                Comprehensive logging of all data access and modifications
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-lg">Incident Response</h3>
              <p className="text-gray-600 mt-2">
                24/7 monitoring and rapid response protocols
              </p>
            </div>
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
            Contact Our DPO
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {/* <span className="font-semibold">Data Protection Officer:</span>
                <br />
                Ms. Wanjiku Mwangi
                <br /> */}
                Email: nitibu.kenya@gmail.com
                <br />
                Phone: +254 794 653 649
              </p>
            </div>
            <div>
              <p
                className={`${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <span className="font-semibold">Physical Address:</span>
                <br />
                Nain Group,Nitibu Healthcare
                <br />
                AEA Plaza, 5th floor
                <br />
                Valley Rd, Nairobi, Kenya
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
            theme === "dark" ? "text-teal-400" : "text-teal-600"
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

"use client";

import GoogleMap from "@/components/GoogleMap";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";
import Image from "next/image";

const ContactPage = () => {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/contact-hero.jpg"
            alt="Contact Us"
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
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl text-teal-100"
            >
              We&apos;re here to answer your questions
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Background Pattern */}
      <VectorPattern
        type="dots"
        opacity={0.05}
        className="[background-size:40px_40px]"
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 py-20 relative">
        <motion.div
          className="grid md:grid-cols-2 gap-8"
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
          {/* Contact Details */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left max-w-3xl"
          >
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Contact Information
            </h2>

            <motion.div
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {[
                {
                  icon: <FaMapMarkerAlt className="w-6 h-6" />,
                  text: "AEA Plaza, Valley Rd, Nairobi",
                },
                {
                  icon: <FaPhone className="w-6 h-6" />,
                  text: "+254 712 345 678",
                },
                {
                  icon: <FaEnvelope className="w-6 h-6" />,
                  text: "contact@nitibuhealth.com",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  className="flex items-center gap-4 p-4 bg-teal-50 rounded-lg"
                  whileHover={{ x: 10 }}
                >
                  <span className="text-teal-600">{item.icon}</span>
                  <span className="text-gray-700">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={{
              hidden: { x: 50, opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            className="bg-white shadow-xl rounded-2xl p-8"
          >
            <h2 className="text-3xl font-bold text-teal-900 mb-6">
              Send Us a Message
            </h2>

            <motion.form
              className="space-y-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {["Name", "Email", "Message"].map((field) => (
                <motion.div
                  key={field}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: { y: 0, opacity: 1 },
                  }}
                >
                  {field === "Message" ? (
                    <textarea
                      placeholder={`Your ${field}`}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      rows={4}
                    />
                  ) : (
                    <input
                      type={field.toLowerCase()}
                      placeholder={`Your ${field}`}
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    />
                  )}
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white p-4 rounded-xl font-semibold hover:bg-teal-700 transition-colors hover:shadow-lg"
                >
                  Send Message
                </button>
              </motion.div>
            </motion.form>
          </motion.div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 shadow-xl rounded-2xl overflow-hidden p-4"
        >
          <GoogleMap />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;

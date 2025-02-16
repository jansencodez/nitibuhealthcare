"use client";

import GoogleMap from "@/components/GoogleMap";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { VectorPattern } from "@/components/vector-patterns/ProductsAndServices";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const subject = encodeURIComponent("Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nMessage: ${data.message}`
    );

    window.location.href = `mailto:nitibu.kenya@gmail.com?subject=${subject}&body=${body}`;
    reset();
  };

  // Dynamic styles
  const bgColor = isDarkMode ? "bg-gray-900" : "bg-gray-50";
  const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
  // const textColor = isDarkMode ? "text-gray-100" : "text-gray-900";
  const inputBg = isDarkMode
    ? "bg-gray-700 border-gray-600 text-white"
    : "bg-white border-gray-200 text-gray-900";
  const buttonBg = isDarkMode
    ? "bg-teal-500 hover:bg-teal-600"
    : "bg-teal-600 hover:bg-teal-700";

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      text: "AEA Plaza, Valley Rd, Nairobi",
    },
    {
      icon: <FaPhone className="w-6 h-6" />,
      text: "+254 758 100 700 / +254 794 653 649",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      text: "nitibu.kenya@gmail.com",
    },
  ];

  return (
    <section className={`min-h-screen ${bgColor} relative overflow-hidden`}>
      {/* Hero Section */}
      <div className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image
            src="/images/hero/contact-hero.jpg"
            alt="Contact Us"
            fill
            className={`object-cover ${
              isDarkMode ? "brightness-75" : "brightness-100"
            }`}
            priority
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${
              isDarkMode
                ? "from-gray-900/80 to-gray-800/50"
                : "from-teal-900/70 to-teal-800/40"
            }`}
          />
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
        opacity={isDarkMode ? 0.05 : 0.1}
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
              transition: { staggerChildren: 0.2, delayChildren: 0.2 },
            },
          }}
        >
          {/* Contact Details */}
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            className="text-center md:text-left max-w-3xl"
          >
            <h2
              className={`text-3xl font-bold mb-6 ${
                isDarkMode ? "text-teal-400" : "text-teal-900"
              }`}
            >
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
              {contactDetails.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { x: -20, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  className={`flex items-center gap-4 p-4 rounded-lg transition-all ${
                    isDarkMode
                      ? "bg-gray-700 hover:bg-gray-600"
                      : "bg-teal-50 hover:bg-teal-100"
                  }`}
                  whileHover={{ x: 10 }}
                >
                  <span
                    className={`${
                      isDarkMode ? "text-teal-400" : "text-teal-600"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span
                    className={isDarkMode ? "text-gray-200" : "text-gray-700"}
                  >
                    {item.text}
                  </span>
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
            className={`shadow-xl rounded-2xl p-8 ${cardBg}`}
          >
            <h2
              className={`text-3xl font-bold mb-6 ${
                isDarkMode ? "text-teal-400" : "text-teal-900"
              }`}
            >
              Send Us a Message
            </h2>

            <motion.form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 },
                },
              }}
            >
              {/* Name Input */}
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <div className="relative">
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Your Name"
                    className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-2 ${
                      errors.name ? "ring-red-500" : "focus:ring-teal-500"
                    } transition-all ${inputBg}`}
                  />
                  {errors.name && (
                    <span className="absolute right-4 top-4 text-red-500">
                      {errors.name.message}
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Email Input */}
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <div className="relative">
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Your Email"
                    className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-2 ${
                      errors.email ? "ring-red-500" : "focus:ring-teal-500"
                    } transition-all ${inputBg}`}
                  />
                  {errors.email && (
                    <span className="absolute right-4 top-4 text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Message Input */}
              <motion.div
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <div className="relative">
                  <textarea
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                    placeholder="Your Message"
                    rows={4}
                    className={`w-full p-4 border rounded-xl focus:outline-none focus:ring-2 ${
                      errors.message ? "ring-red-500" : "focus:ring-teal-500"
                    } transition-all ${inputBg}`}
                  />
                  {errors.message && (
                    <span className="absolute right-4 top-4 text-red-500">
                      {errors.message.message}
                    </span>
                  )}
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                variants={{
                  hidden: { scale: 0 },
                  visible: { scale: 1 },
                }}
              >
                <button
                  type="submit"
                  className={`w-full p-4 rounded-xl font-semibold transition-all hover:shadow-lg ${buttonBg} text-white`}
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
          className="mt-16 shadow-xl rounded-2xl overflow-hidden"
        >
          <GoogleMap />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;

"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function SupplierApplication() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const { theme } = useTheme();
  const isDark = theme === "dark";

  interface FormData {
    name: string;
    company: string;
    email: string;
    phone: string;
    location: string;
    description: string;
  }

  const onSubmit = (formData: FormData) => {
    const subject = `Supplier Application - ${formData.company}`;
    const body = `
      Name: ${formData.name}
      Company: ${formData.company}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Location: ${formData.location}
      Description: ${formData.description}
    `;

    const mailtoLink = `mailto:nitibu.kenya@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div
      className={`min-h-screen py-12 px-6 flex justify-center ${
        isDark ? "bg-gray-900" : "bg-teal-50"
      }`}
    >
      <motion.div
        className={`max-w-2xl w-full shadow-lg rounded-2xl p-8 ${
          isDark ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1
          className={`text-3xl font-bold mb-6 text-center ${
            isDark ? "text-teal-300" : "text-teal-700"
          }`}
        >
          Become a Nitibu Supplier
        </h1>

        <p className="text-sm text-lime-500 text-center font-semibold mb-4">
          Note: After submitting, your email client will open with a pre-filled
          message. Please attach your file if need be and send the email to
          complete the application.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {(
            [
              { label: "Full Name", key: "name", type: "text" },
              { label: "Company Name", key: "company", type: "text" },
              { label: "Email Address", key: "email", type: "email" },
              { label: "Phone Number", key: "phone", type: "tel" },
              { label: "Location", key: "location", type: "text" },
            ] as { label: string; key: keyof FormData; type: string }[]
          ).map(({ label, key, type }) => (
            <div key={key}>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                {label} *
              </label>
              <input
                type={type}
                {...register(key, { required: `${label} is required` })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                } ${errors[key] ? "border-red-500" : ""}`}
              />
              {errors[key] && (
                <p className="text-red-500 text-sm mt-1">
                  {errors[key]?.message}
                </p>
              )}
            </div>
          ))}

          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDark ? "text-teal-300" : "text-teal-800"
              }`}
            >
              Product/Service Description *
            </label>
            <textarea
              {...register("description", {
                required: "Description is required",
              })}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                isDark
                  ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                  : "bg-teal-50 border-teal-300 focus:ring-teal-500"
              } ${errors.description ? "border-red-500" : ""}`}
              rows={4}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description?.message}
              </p>
            )}
          </div>

          <div className="text-center">
            <motion.button
              type="submit"
              className={`px-8 py-3 rounded-lg transition-all duration-200 font-medium ${
                isDark
                  ? "bg-teal-500 hover:bg-teal-600 text-gray-900"
                  : "bg-teal-600 hover:bg-teal-700 text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit Application
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

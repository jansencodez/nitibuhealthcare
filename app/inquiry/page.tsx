"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { useForm } from "react-hook-form";

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
    companyType: string;
    productCategories: string;
    yearsInBusiness: number;
    businessLicense: string;
    certifications: string;
    supplyCapacity: string;
    website?: string;
    references: string;
    termsAgreed: boolean;
    description: string;
  }

  const onSubmit = (formData: FormData) => {
    const subject = `Supplier Application - ${formData.company}`;
    const body = `
      Contact Information:
      Name: ${formData.name}
      Company: ${formData.company}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Location: ${formData.location}
      
      Company Details:
      Type: ${formData.companyType}
      Years in Business: ${formData.yearsInBusiness}
      Business License: ${formData.businessLicense}
      Website: ${formData.website || "N/A"}
      
      Product Information:
      Categories: ${formData.productCategories}
      Certifications: ${formData.certifications}
      Supply Capacity: ${formData.supplyCapacity}
      
      References:
      ${formData.references}
      
      Additional Information:
      ${formData.description}
      
      Agreements:
      Terms Accepted: ${formData.termsAgreed ? "Yes" : "No"}
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
          Make an Inquiry
        </h1>

        <p className="text-sm text-lime-500 text-center font-semibold mb-4">
          Note: After submitting, your email client will open with a pre-filled
          message. Please attach relevant documents (business license,
          certifications, product catalog) and send the email to complete your
          application.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Contact Information Section */}
          <div className="space-y-4">
            <h2
              className={`text-xl font-semibold ${
                isDark ? "text-teal-300" : "text-teal-700"
              }`}
            >
              Contact Information
            </h2>
            {[
              { label: "Full Name", key: "name", type: "text" },
              { label: "Company Name", key: "company", type: "text" },
              { label: "Email Address", key: "email", type: "email" },
              { label: "Phone Number", key: "phone", type: "tel" },
              { label: "Location", key: "location", type: "text" },
            ].map(({ label, key, type }) => (
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
                  {...register(key as keyof FormData, {
                    required: `${label} is required`,
                  })}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                    isDark
                      ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                      : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                  } ${errors[key as keyof FormData] ? "border-red-500" : ""}`}
                />
                {errors[key as keyof FormData] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[key as keyof FormData]?.message}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Company Details Section */}
          <div className="space-y-4">
            <h2
              className={`text-xl font-semibold ${
                isDark ? "text-teal-300" : "text-teal-700"
              }`}
            >
              Company Details
            </h2>

            {/* Company Type */}
            <div>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Company Type *
              </label>
              <select
                {...register("companyType", {
                  required: "Company Type is required",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                } ${errors.companyType ? "border-red-500" : ""}`}
              >
                <option value="">Select Company Type</option>
                <option value="manufacturer">Manufacturer</option>
                <option value="distributor">Distributor</option>
                <option value="agent">Agent</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="other">Other</option>
              </select>
              {errors.companyType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.companyType.message}
                </p>
              )}
            </div>

            {/* Years in Business */}
            <div>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Years in Business *
              </label>
              <input
                type="number"
                {...register("yearsInBusiness", {
                  required: "Years in Business is required",
                  min: { value: 0, message: "Must be a positive number" },
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                } ${errors.yearsInBusiness ? "border-red-500" : ""}`}
              />
              {errors.yearsInBusiness && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.yearsInBusiness.message}
                </p>
              )}
            </div>

            {/* Business License */}
            <div>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Business License Number *
              </label>
              <input
                type="text"
                {...register("businessLicense", {
                  required: "Business License Number is required",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                } ${errors.businessLicense ? "border-red-500" : ""}`}
              />
              {errors.businessLicense && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.businessLicense.message}
                </p>
              )}
            </div>
          </div>

          {/* Product Information Section */}
          <div className="space-y-4">
            <h2
              className={`text-xl font-semibold ${
                isDark ? "text-teal-300" : "text-teal-700"
              }`}
            >
              Product Information
            </h2>

            {/* Product Categories */}
            <div>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Product Categories Offered *
              </label>
              <input
                type="text"
                {...register("productCategories", {
                  required: "Product Categories are required",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                } ${errors.productCategories ? "border-red-500" : ""}`}
              />
              {errors.productCategories && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.productCategories.message}
                </p>
              )}
            </div>

            {/* Certifications */}
            <div>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Certifications (e.g., ISO, FDA) *
              </label>
              <textarea
                {...register("certifications", {
                  required: "Certifications are required",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                } ${errors.certifications ? "border-red-500" : ""}`}
                rows={2}
              />
              {errors.certifications && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.certifications.message}
                </p>
              )}
            </div>

            {/* Supply Capacity */}
            <div>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Supply Capacity (production capacity, lead times) *
              </label>
              <textarea
                {...register("supplyCapacity", {
                  required: "Supply Capacity is required",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                } ${errors.supplyCapacity ? "border-red-500" : ""}`}
                rows={2}
              />
              {errors.supplyCapacity && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.supplyCapacity.message}
                </p>
              )}
            </div>

            {/* Website */}
            <div>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Website (optional)
              </label>
              <input
                type="url"
                {...register("website")}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                }`}
              />
            </div>
          </div>

          {/* References Section */}
          <div className="space-y-4">
            <h2
              className={`text-xl font-semibold ${
                isDark ? "text-teal-300" : "text-teal-700"
              }`}
            >
              References
            </h2>
            <div>
              <label
                className={`block text-sm font-medium mb-1 ${
                  isDark ? "text-teal-300" : "text-teal-800"
                }`}
              >
                Client/Partnership References *
              </label>
              <textarea
                {...register("references", {
                  required: "References are required",
                })}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 transition ${
                  isDark
                    ? "bg-gray-700 border-gray-500 focus:ring-teal-400"
                    : "bg-teal-50 border-teal-300 focus:ring-teal-500"
                } ${errors.references ? "border-red-500" : ""}`}
                rows={3}
              />
              {errors.references && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.references.message}
                </p>
              )}
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <label
              className={`block text-sm font-medium mb-1 ${
                isDark ? "text-teal-300" : "text-teal-800"
              }`}
            >
              Additional Information about Products/Services *
            </label>
            <textarea
              {...register("description", {
                required: "Additional Information is required",
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
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Terms Agreement */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="termsAgreed"
              {...register("termsAgreed", {
                required: "You must agree to the terms and conditions",
              })}
              className={`w-4 h-4 ${
                isDark ? "accent-teal-400" : "accent-teal-600"
              }`}
            />
            <label
              htmlFor="termsAgreed"
              className={`ml-2 text-sm ${
                isDark ? "text-teal-300" : "text-teal-800"
              }`}
            >
              I agree to the Terms and Conditions and certify that all provided
              information is accurate. *
            </label>
          </div>
          {errors.termsAgreed && (
            <p className="text-red-500 text-sm mt-1">
              {errors.termsAgreed.message}
            </p>
          )}

          {/* Submit Button */}
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

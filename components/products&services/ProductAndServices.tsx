"use client";

import Link from "next/link";
import {
  FaTruck,
  FaBoxes,
  FaFlask,
  FaCheckCircle,
  FaLeaf,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTruck className="w-8 h-8 text-teal-600" />,
    title: "Distribution",
    description:
      "Efficient and reliable distribution services to healthcare providers across the region.",
  },
  {
    icon: <FaBoxes className="w-8 h-8 text-teal-600" />,
    title: "Wholesale Solutions",
    description:
      "Cost-effective bulk purchasing options for healthcare institutions.",
  },
  {
    icon: <FaFlask className="w-8 h-8 text-teal-600" />,
    title: "Research and Development",
    description:
      "Innovative solutions through continuous R&D and collaboration.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-teal-600" />,
    title: "Quality Assurance",
    description:
      "Rigorous quality control to ensure the highest industry standards.",
  },
  {
    icon: <FaLeaf className="w-8 h-8 text-teal-600" />,
    title: "Sustainability",
    description:
      "Sustainable practices in sourcing, packaging, and distribution.",
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-teal-600" />,
    title: "Global Presence",
    description:
      "Partnerships with international manufacturers for cutting-edge solutions.",
  },
];

const products = [
  {
    category: "Pharmaceutical Products",
    items: [
      "Essential Medications",
      "Specialized Pharmaceuticals",
      "Over-the-Counter (OTC) Products",
      "Dialysis-Related Pharmaceuticals",
    ],
  },
  {
    category: "Non-Pharmaceutical Products",
    items: [
      "Medical Equipment",
      "Personal Protective Equipment (PPE)",
      "Syringes and Needles",
      "Dialysis Supplies",
      "Wound Care Products",
    ],
  },
];

export const ProductsAndServicesOverview = () => {
  return (
    <section className="py-20 bg-teal-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-teal-900">
          Our Products and Services
        </h2>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-teal-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Products Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4 text-teal-900">
                {product.category}
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.items.map((item, idx) => (
                  <li key={idx} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <Link
            href="/products-and-services"
            className="px-8 py-4 bg-teal-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:bg-teal-700 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

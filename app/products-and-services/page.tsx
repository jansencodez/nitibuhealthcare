"use client";

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
      "Nitibu Healthcare provides efficient and reliable distribution services, ensuring that our medical equipment and supplies reach healthcare providers promptly and in perfect condition. We have a well-established distribution network that covers the entire region, enabling us to deliver products to even the most remote areas.",
  },
  {
    icon: <FaBoxes className="w-8 h-8 text-teal-600" />,
    title: "Wholesale Solutions",
    description:
      "We offer comprehensive wholesale solutions for healthcare institutions, clinics, and pharmacies. Our wholesale services are designed to meet the bulk purchasing needs of our clients, providing them with cost-effective and scalable options for sourcing medical supplies and equipment.",
  },
  {
    icon: <FaFlask className="w-8 h-8 text-teal-600" />,
    title: "Research and Development",
    description:
      "At Nitibu Healthcare, we are committed to innovation through continuous research and development (R&D). Our R&D team works tirelessly to identify and develop new products and technologies that meet the evolving needs of the healthcare industry. We collaborate with leading research institutions and manufacturers to bring cutting-edge solutions to our clients.",
  },
  {
    icon: <FaCheckCircle className="w-8 h-8 text-teal-600" />,
    title: "Quality Assurance",
    description:
      "Quality is at the heart of everything we do. We have implemented rigorous quality assurance processes to ensure that all our products meet the highest industry standards. From sourcing to delivery, we maintain strict quality control measures to guarantee the safety and effectiveness of our medical equipment and supplies.",
  },
  {
    icon: <FaLeaf className="w-8 h-8 text-teal-600" />,
    title: "Sustainability",
    description:
      "We are dedicated to promoting sustainability in all aspects of our business. Nitibu Healthcare is committed to reducing our environmental impact through sustainable practices in product sourcing, packaging, and distribution. We also support the use of eco-friendly medical products and technologies that contribute to a healthier planet.",
  },
  {
    icon: <FaGlobe className="w-8 h-8 text-teal-600" />,
    title: "Global Presence",
    description:
      "While we are deeply rooted in the region, Nitibu Healthcare has a growing global presence. We partner with international manufacturers and suppliers to bring the best medical equipment and supplies to our clients. Our global reach allows us to stay at the forefront of medical advancements and provide our clients with access to the latest technologies and products.",
  },
];

const products = [
  {
    category: "Pharmaceutical Products",
    items: [
      {
        title: "Essential Medications",
        description:
          "We supply a wide range of essential drugs, including antibiotics, antivirals, pain management medications, and chronic disease treatments.",
      },
      {
        title: "Specialized Pharmaceuticals",
        description:
          "We offer specialized medications for specific conditions, such as cardiovascular diseases, diabetes, and infectious diseases.",
      },
      {
        title: "Over-the-Counter (OTC) Products",
        description:
          "Our OTC products include pain relievers, cold and flu medications, vitamins, and supplements, ensuring that patients have access to everyday health solutions.",
      },
      {
        title: "Dialysis-Related Pharmaceuticals",
        description:
          "We provide medications specifically designed for patients undergoing dialysis, supporting effective treatment and patient well-being.",
      },
    ],
  },
  {
    category: "Non-Pharmaceutical Products",
    items: [
      {
        title: "Medical Equipment",
        description:
          "We supply diagnostic tools, surgical instruments, hospital furniture, and other essential medical equipment to healthcare facilities.",
      },
      {
        title: "Personal Protective Equipment (PPE)",
        description:
          "Our PPE offerings include masks, gloves, gowns, and face shields, ensuring the safety of healthcare providers and patients.",
      },
      {
        title: "Syringes and Needles",
        description:
          "We provide a variety of syringes and needles for different medical applications, ensuring precision and safety in patient care.",
      },
      {
        title: "Dialysis Supplies",
        description:
          "Our non-pharmaceutical dialysis products include hemodialysis bloodlines, acid concentrates, dialyzers, and fistula needles, all designed to support effective dialysis treatments.",
      },
      {
        title: "Wound Care Products",
        description:
          "We offer a range of wound care supplies, including dressings, bandages, and antiseptics, to promote healing and prevent infections.",
      },
    ],
  },
];

export default function ProductsAndServicesPage() {
  return (
    <div className="min-h-screen bg-teal-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-5xl font-bold text-center mb-12 text-teal-900">
          Our Products and Services
        </h1>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-teal-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </section>

        {/* Products Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-teal-900">
            Our Products
          </h2>
          {products.map((product, index) => (
            <div key={index} className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-teal-900">
                {product.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {product.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h4 className="text-xl font-semibold mb-2 text-teal-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductsAndServicesOverview() {
  return (
    <div className="max-w-7xl mx-auto text-center px-6">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-900"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Products & Services
      </motion.h2>

      {/* Description */}
      <motion.p
        className="mt-4 text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We provide high-quality medical products and specialized services
        tailored for your needs.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        className="mt-8 flex justify-center gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-700 rounded-lg shadow-lg"
          >
            Explore Products
          </motion.button>
        </Link>

        <Link href="/services">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-semibold text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white rounded-lg shadow-lg"
          >
            Explore Services
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

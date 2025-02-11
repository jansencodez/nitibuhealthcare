import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-4 z-30 mb-12 max-w-3xl mx-auto"
    >
      <div className={`relative ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pl-12 pr-4 py-3 rounded-xl border-2 ${
            isDark
              ? "bg-gray-800 border-gray-700 focus:border-teal-400"
              : "bg-white border-gray-200 focus:border-teal-600"
          } transition-colors`}
        />
      </div>
    </motion.div>
  );
}
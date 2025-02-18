"use client";

import { useState, FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiHome,
  HiInformationCircle,
  HiBriefcase,
  HiMail,
  HiCog,
  HiMenu,
  HiX,
} from "react-icons/hi";
import { HiInboxStack } from "react-icons/hi2";
import { FaMoon, FaSun } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { useTheme } from "@/context/ThemeContext";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "/", icon: <HiHome className="w-5 h-5" /> },
  {
    name: "Services",
    href: "/services",
    icon: <HiBriefcase className="w-5 h-5" />,
  },
  {
    name: "Products",
    href: "/products",
    icon: <HiInboxStack className="w-5 h-5" />,
  },
  {
    name: "Engagement",
    href: "/engagement",
    icon: <SiHomeassistantcommunitystore className="w-5 h-5" />,
  },
  {
    name: "About us",
    href: "/about",
    icon: <HiInformationCircle className="w-5 h-5" />,
  },
  { name: "Contact", href: "/contact", icon: <HiMail className="w-5 h-5" /> },
];

const Sidebar: FC = () => {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarBg =
    theme === "dark"
      ? "from-gray-900 to-gray-800"
      : "from-teal-700 to-teal-800";
  const textColor = theme === "dark" ? "text-gray-100" : "text-white";
  const hoverBg = theme === "dark" ? "hover:bg-gray-700" : "hover:bg-white/5";
  const activeBg = theme === "dark" ? "bg-gray-700" : "bg-white/10";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-white/10";
  const mobileNavBg = theme === "dark" ? "bg-gray-800" : "bg-teal-800";

  return (
    <>
      {/* Sidebar for large screens */}
      <aside
        className={`hidden lg:flex fixed top-0 left-0 h-full w-64 bg-gradient-to-b ${sidebarBg} ${textColor} shadow-xl p-6 flex-col border-r-2 ${borderColor}`}
      >
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 pl-2"
        >
          <Image
            src="/images/logo.jpg"
            alt="Nitibu Healthcare Logo"
            width={200}
            height={100}
            className="rounded-lg"
          />
        </motion.div>

        {/* Navigation */}
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index + 0.2 }}
                >
                  <Link href={item.href}>
                    <span
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg transition-all ${
                        isActive
                          ? `${activeBg} ${textColor} shadow-inner font-semibold`
                          : `${hoverBg} ${textColor}/90`
                      }`}
                    >
                      <span className={`${textColor}/80`}>{item.icon}</span>
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className={`border-t ${borderColor} pt-4 space-y-3`}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl ${textColor}/80 ${hoverBg} transition-all`}
            >
              <HiCog className="w-5 h-5" />
              Settings
            </button>
          </motion.div>

          {/* Theme Toggle Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            onClick={toggleTheme}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${hoverBg} ${textColor}/80`}
          >
            {theme === "dark" ? (
              <FaSun className="w-5 h-5 text-yellow-400" />
            ) : (
              <FaMoon className="w-5 h-5 text-gray-400" />
            )}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </motion.button>
        </div>
      </aside>

      {/* Top Navbar for small screens */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 ${
          theme === "dark" ? "bg-gray-900" : "bg-teal-700"
        } ${textColor} shadow-md px-6 py-4 flex justify-between items-center z-50`}
      >
        <h2 className="text-xl font-bold">Nitibu Healthcare</h2>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className={`${textColor} focus:outline-none`}
        >
          {isMobileMenuOpen ? (
            <HiX className="w-7 h-7" />
          ) : (
            <HiMenu className="w-7 h-7" />
          )}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`lg:hidden fixed top-[58px] left-0 right-0 ${mobileNavBg} ${textColor} shadow-lg overflow-hidden z-50`}
          >
            <ul className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name} onClick={() => setMobileMenuOpen(false)}>
                    <Link href={item.href}>
                      <span
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-lg transition-all ${
                          isActive
                            ? `${activeBg} ${textColor} shadow-inner font-semibold`
                            : `${hoverBg} ${textColor}/90`
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}

              {/* Theme Toggle Button in Mobile Menu */}
              <li>
                <button
                  onClick={toggleTheme}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${hoverBg} ${textColor}/80`}
                >
                  {theme === "dark" ? (
                    <FaSun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <FaMoon className="w-5 h-5 text-gray-400" />
                  )}
                  {theme === "dark" ? "Light Mode" : "Dark Mode"}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

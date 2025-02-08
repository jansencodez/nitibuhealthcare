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
import { SiHomeassistantcommunitystore } from "react-icons/si";

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
  { name: "Contact", href: "/contact", icon: <HiMail className="w-5 h-5" /> },
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
];

const Sidebar: FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Sidebar for large screens */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-teal-700 to-teal-800 text-white shadow-xl p-6 flex-col ">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-12 pl-2"
        >
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-lg font-semibold text-white">N</span>
            </div>
            Nitibu Healthcare
          </h2>
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
                          ? "bg-white/10 text-white shadow-inner font-semibold"
                          : "hover:bg-white/5 hover:pl-6 text-white/90"
                      }`}
                    >
                      <span className="text-white/80">{item.icon}</span>
                      {item.name}
                    </span>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/5 hover:pl-6 transition-all">
              <HiCog className="w-5 h-5" />
              Settings
            </button>
          </motion.div>
        </div>
      </aside>

      {/* Top Navbar for small screens */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 bg-teal-700 text-white shadow-md px-6 py-4 flex justify-between items-center z-50">
        <h2 className="text-xl font-bold">Nitibu Healthcare</h2>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
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
            className="lg:hidden fixed top-[58px] left-0 right-0 bg-teal-800 text-white shadow-lg overflow-hidden z-50"
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
                            ? "bg-white/10 text-white shadow-inner font-semibold"
                            : "hover:bg-white/5 text-white/90"
                        }`}
                      >
                        {item.icon}
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;

"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import { useTheme } from "@/context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`transition-colors duration-300 ${
        theme === "dark" ? "bg-gray-900" : "bg-teal-900"
      }`}
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3
              className={`text-2xl font-bold ${
                theme === "dark" ? "text-gray-100" : "text-white"
              }`}
            >
              Nitibu Healthcare
            </h3>
            <p
              className={`${
                theme === "dark" ? "text-gray-400" : "text-teal-100"
              }`}
            >
              Delivering quality healthcare solutions across East & Central
              Africa
            </p>
            <div className="flex space-x-4 mt-4">
              {[
                { Icon: FaFacebook, href: "#" },
                { Icon: FaTwitter, href: "#" },
                { Icon: FaLinkedin, href: "#" },
                { Icon: FaInstagram, href: "#" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`transition-colors ${
                    theme === "dark"
                      ? "text-gray-400 hover:text-teal-400"
                      : "text-teal-100 hover:text-teal-300"
                  }`}
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${
                theme === "dark" ? "text-gray-100" : "text-white"
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/products", label: "Products" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className={`transition-colors ${
                      theme === "dark"
                        ? "text-gray-400 hover:text-teal-400"
                        : "text-teal-100 hover:text-teal-300"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4
              className={`text-lg font-semibold ${
                theme === "dark" ? "text-gray-100" : "text-white"
              }`}
            >
              Contact Us
            </h4>
            <div
              className={`space-y-3 ${
                theme === "dark" ? "text-gray-400" : "text-teal-100"
              }`}
            >
              <div className="flex items-center space-x-2">
                <MdLocationOn className="flex-shrink-0" />
                <span>AEA Plaza, Valley Rd, Nairobi, Kenya</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdPhone className="flex-shrink-0" />
                <span>+254 712 345 678</span>
              </div>
              <div className="flex items-center space-x-2">
                <MdEmail className="flex-shrink-0" />
                <span>info@nitibuhealthcare.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className={`border-t mt-8 pt-8 text-center ${
            theme === "dark"
              ? "border-gray-700 text-gray-400"
              : "border-teal-800 text-teal-100"
          }`}
        >
          <p>
            © {new Date().getFullYear()} Nitibu Healthcare. All rights reserved.
          </p>
          <div className="mt-2">
            <Link
              href="/privacy"
              className={`mx-2 transition-colors ${
                theme === "dark" ? "hover:text-teal-400" : "hover:text-teal-300"
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className={`mx-2 transition-colors ${
                theme === "dark" ? "hover:text-teal-400" : "hover:text-teal-300"
              }`}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-teal-900 text-white mt-20 rounded-t-3xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Nitibu Healthcare</h3>
            <p className="text-gray-300">
              Delivering quality healthcare solutions across East & Central
              Africa
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-teal-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-teal-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-teal-300 transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-teal-300 transition-colors">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-teal-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-teal-300 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-teal-300 transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-teal-300 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
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

          {/* Newsletter
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-gray-300">
              Subscribe to our newsletter for updates
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-900 flex-1"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="border-t border-teal-800 mt-8 pt-8 text-center text-gray-300">
          <p>
            © {new Date().getFullYear()} Nitibu Healthcare. All rights reserved.
          </p>
          <div className="mt-2">
            <Link
              href="/privacy"
              className="hover:text-teal-300 transition-colors mx-2"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-teal-300 transition-colors mx-2"
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

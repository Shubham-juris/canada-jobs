import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { PiMapPinFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-white pt-10 pb-4 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Column */}
        <div>
          <h1 className="text-xl font-bold text-[#fb5c4c] flex items-center gap-2">
            <span className="text-2xl">🌐</span> NewcomerNeeds
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Empowering newcomers to build successful careers in Canada through
            meaningful employment opportunities and comprehensive support.
          </p>
          <p className="mt-4 text-sm text-gray-400 flex items-center gap-2">
            <span className="text-[#fb5c4c]">📄</span> A product of Portal Job
            Solutions
          </p>
          <div className="flex gap-4 mt-4">
            <FaFacebookF className="text-lg bg-gray-800 p-2 rounded-full w-9 h-9" />
            <FaTwitter className="text-lg bg-gray-800 p-2 rounded-full w-9 h-9" />
            <FaInstagram className="text-lg bg-gray-800 p-2 rounded-full w-9 h-9" />
            <FaLinkedinIn className="text-lg bg-gray-800 p-2 rounded-full w-9 h-9" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Browse Jobs</li>
            <li>• Companies</li>
            <li>• Pricing</li>
            <li>• Resources</li>
            <li>• About Us</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Resources</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>• Blog</li>
            <li>• Career Advice</li>
            <li>• Salary Insights</li>
            <li>• FAQ</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Stay Updated</h2>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe to our newsletter for the latest job opportunities, career
            tips, and newcomer success stories.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white text-sm px-4 py-2 rounded-l-md focus:outline-none w-full"
            />
            <button className="bg-[#fb5c4c] px-4 py-2 rounded-r-md text-white text-sm">
              Subscribe
            </button>
          </div>
          <div className="flex items-center gap-2 mt-4 text-sm text-gray-300">
            <FiMail /> contact@newcomerneeds.com
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
            <PiMapPinFill /> Vancouver, BC, Canada
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        <p>
          © 2025 <span className="text-white">NewcomerNeeds</span> by Portal Job
          Solutions. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-2">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

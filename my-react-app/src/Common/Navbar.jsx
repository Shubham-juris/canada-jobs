import React from "react";
import { Bell, MessageSquare, Sun } from "lucide-react";
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm flex justify-between items-center px-6 md:px-16 py-2">
        <div>Welcome to NewcomerNeeds</div>
        <div className="flex gap-4">
          <span>Find your dream job in Canada</span>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">Contact Us</a>
          <a href="#" className="hover:underline">About Us</a>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white shadow-sm flex flex-wrap items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-10 w-30" /> {/* Replace with actual logo */}
          {/* <div className="text-red-600 text-xl font-bold leading-tight">
            Newcomer <br />
            <span className="text-sm text-black">Job Needs</span>
          </div> */}
        </div>

        {/* Center Links */}
        <ul className="flex flex-wrap gap-6 font-medium text-gray-700">
          <li><a href="#" className="hover:text-red-600">Jobs</a></li>
          <li><a href="#" className="hover:text-red-600">Companies</a></li>
          <li><a href="#" className="hover:text-red-600">Pricing</a></li>
          <li><a href="#" className="hover:text-red-600">Salary Insights</a></li>
          <li><a href="#" className="hover:text-red-600">Career Advice</a></li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search jobs..."
            className="border px-4 py-2 rounded-md text-sm w-48"
          />
          {/* Icons */}
          <Bell className="w-5 h-5 text-gray-700 cursor-pointer" />
          <MessageSquare className="w-5 h-5 text-gray-700 cursor-pointer" />
          <Sun className="w-5 h-5 text-gray-700 cursor-pointer" />
          {/* Auth Button */}
          <a href="#" className="text-gray-800 font-medium hover:text-red-600">
            Sign In / Register
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

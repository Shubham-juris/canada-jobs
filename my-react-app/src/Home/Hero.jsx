import React from "react";
import her from "../assets/hero.png"

const Hero = () => {
  return (
    <section className="bg-[#fff5f5] px-6 md:px-16 py-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2">
          <div className="bg-red-100 text-red-600 px-4 py-1 mb-4 rounded-full inline-block font-semibold">
            • Welcome to NewcomerNeeds
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Path to <br />
            <span className="text-red-600  decoration-red-500">Canadian Success</span>
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Connect with employers who value your international experience and help you build your career in Canada
          </p>
          <div className="flex gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition">
              Find Jobs →
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-md hover:bg-red-100 transition">
              Post a Job
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="md:w-1/2">
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <img
              src={her}// Replace with actual image path or URL
              alt="Job Portal"
              className="w-full h-72 object-cover"
            />
            <div className="p-6 bg-red-50">
              <p className="text-sm text-gray-600">Job Portal for Newcomers in Canada</p>
              <h2 className="text-2xl font-bold mb-3">FIND A JOB</h2>
              <button className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition">
                SEARCH JOBS
              </button>
              <div className="flex mt-6 gap-8 text-center">
                <div>
                  <p className="text-red-600 text-xl font-bold">10K+</p>
                  <p className="text-sm text-gray-600">Active Jobs</p>
                </div>
                <div>
                  <p className="text-red-600 text-xl font-bold">98%</p>
                  <p className="text-sm text-gray-600">Success Rate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


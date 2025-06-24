import React from "react";
import { Search } from "lucide-react";

const JobSearchSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Your Perfect Job</h2>
        <p className="text-gray-600 mb-10">
          Search through thousands of opportunities tailored for newcomers
        </p>

        <form className="flex items-center border border-red-500 rounded-md overflow-hidden bg-white max-w-2xl mx-auto">
          <div className="px-4 text-gray-400">
            <Search className="w-5 h-5" />
          </div>
          <input
            type="text"
            placeholder="Search for jobs, companies, or keywords..."
            className="w-full px-2 py-3 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default JobSearchSection;

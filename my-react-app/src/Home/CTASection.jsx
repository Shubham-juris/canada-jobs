import React from "react";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-500 py-16 px-4 text-center text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Start Your Canadian Journey Today
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Join thousands of newcomers who found their dream jobs through our platform
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-red-600 px-6 py-3 rounded-md font-medium flex items-center justify-center gap-2 hover:bg-gray-100 transition">
            Browse Jobs <ArrowRight className="w-4 h-4" />
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-red-600 transition">
            Create Account
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

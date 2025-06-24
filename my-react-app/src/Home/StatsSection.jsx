import React from "react";

const StatsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <h3 className="text-red-600 text-2xl font-bold">10K+</h3>
          <p className="text-gray-700 mt-2">Active Jobs</p>
        </div>
        <div>
          <h3 className="text-red-600 text-2xl font-bold">5K+</h3>
          <p className="text-gray-700 mt-2">Employers</p>
        </div>
        <div>
          <h3 className="text-red-600 text-2xl font-bold">50K+</h3>
          <p className="text-gray-700 mt-2">Newcomers Hired</p>
        </div>
        <div>
          <h3 className="text-red-600 text-2xl font-bold">98%</h3>
          <p className="text-gray-700 mt-2">Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

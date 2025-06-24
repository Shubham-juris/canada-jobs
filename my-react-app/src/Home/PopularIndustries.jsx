import React from "react";
import {
  Building2,
  HeartHandshake,
  GraduationCap,
  Briefcase,
  Banknote,
  FileText,
  Calendar,
  Globe,
} from "lucide-react"; // icon pack

const industries = [
  {
    title: "Construction",
    description: "Building Canada's future infrastructure",
    icon: <Building2 className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Healthcare",
    description: "Making a difference in people's lives",
    icon: <HeartHandshake className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Education",
    description: "Shaping the next generation",
    icon: <GraduationCap className="w-6 h-6 text-red-600" />,
  },
  {
    title: "IT & Tech",
    description: "Driving digital innovation",
    icon: <Briefcase className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Finance",
    description: "Managing Canada's economy",
    icon: <Banknote className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Administration",
    description: "Keeping businesses running smoothly",
    icon: <FileText className="w-6 h-6 text-red-600" />,
  },
  {
    title: "Hospitality",
    description: "Creating memorable experiences",
    icon: <Calendar className="w-6 h-6 text-red-600" />,
  },
  {
    title: "International Trade",
    description: "Connecting global markets",
    icon: <Globe className="w-6 h-6 text-red-600" />,
  },
];

const PopularIndustries = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Popular Industries</h2>
        <p className="text-gray-600 mt-2">
          Explore opportunities in these high-demand sectors
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition"
          >
            <div className="bg-red-100 p-3 rounded-md inline-block mb-4">
              {industry.icon}
            </div>
            <h3 className="text-lg font-semibold">{industry.title}</h3>
            <p className="text-gray-600 mt-2">{industry.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularIndustries;

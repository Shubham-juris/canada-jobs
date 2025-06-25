import React from "react";
import { MapPin, CalendarDays, Building2 } from "lucide-react";

// Company data array
const companies = [
  {
    id: 1,
    name: "ATLANTIC QUALITY PAINTING AND MAINTENANCE SERVICES LTD.",
    location: "2497 St. Margarets Bay Rd., Timberlea, Halifax, NS B3T 1H1",
    joined: "3 years",
  },
  {
    id: 2,
    name: "ATLANTIC QUALITY PAINTING AND MAINTENANCE SERVICES LTD.",
    joined: "3 years",
  },
  {
    id: 3,
    name: "ATLANTIC QUALITY PAINTING AND MAINTENANCE SERVICES LTD.",
    joined: "3 years",
  },
  {
    id: 4,
    name: "0966976 B.C. Ltd DBA The Drake Restaurant",
    joined: "a year",
  },
  {
    id: 5,
    name: "AFRA Cabinet & Countertop LTD",
    location: "233 West 1st St",
    joined: "3 years",
    highlight: "text-red-600 font-semibold",
  },
  {
    id: 6,
    name: "Boyle Street Medx Drugs Inc.",
    joined: "3 years",
  },
  {
    id: 7,
    name: "Browns Shoes Inc.",
    location: "#2341-2929 Barnet Highway, Coquitlam, BC V3B 5R5",
  },
  {
    id: 8,
    name: "Eagle Palace Restaurant",
    joined: "2 years",
  },
  {
    id: 9,
    name: "Employer details2524423 AB LTD.",
    location: "4629 3 AVE, EDSON AB T7E 1C2",
    joined: "2 years",
  },
  {
    id: 10,
    name: "Employer detailsA&D Coastal Plumbing and Heating Inc.",
    location: "Unit 204 – 12835 Lilley Dr Maple Ridge, BC",
    joined: "2 years",
  },
  {
    id: 11,
    name: "Employer detailsBP DRYWALL LTD",
    location: "5903 27 ST NE, Genesee, AB T4X 0X5",
    joined: "2 years",
    highlight: "text-red-600 font-semibold",
  },
  {
    id: 12,
    name: "Employer detailsFIX AUTO EDMONTON EAST",
    joined: "a year",
  },
  {
    id: 13,
    name: "Global Networks Canada Immigration Inc.",
    joined: "3 years",
  },
  {
    id: 14,
    name: "JP Transmission Ltd",
    joined: "3 years",
  },
  {
    id: 15,
    name: "Smart Phone Repair",
    joined: "2 years",
  },
];

// Single company card
const CompanyCard = ({ name, location, joined, highlight }) => {
  return (
    <div className="border rounded-xl p-6 shadow-sm hover:shadow-md transition bg-white">
      <div className="flex items-start gap-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <Building2 className="w-6 h-6 text-gray-600" />
        </div>
        <h2 className={`text-lg font-bold ${highlight || ""}`}>{name}</h2>
      </div>

      {location && (
        <div className="flex items-start gap-2 mt-4 text-sm text-gray-700">
          <MapPin className="w-4 h-4 mt-0.5" />
          <span>{location}</span>
        </div>
      )}

      {joined && (
        <div className="flex items-center gap-2 mt-3 text-sm text-gray-700">
          <CalendarDays className="w-4 h-4" />
          <span>Joined {joined}</span>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button className="text-blue-600 font-medium hover:underline">View Profile</button>
        <button className="bg-gray-100 text-black px-4 py-2 rounded hover:bg-gray-200">View Jobs</button>
      </div>
    </div>
  );
};

// Main component
const About = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Companies</h1>
        <p className="text-gray-600 mt-1">Find and explore companies hiring in your area</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            name={company.name}
            location={company.location}
            joined={company.joined}
            highlight={company.highlight}
          />
        ))}
      </div>
    </section>
  );
};

export default About;

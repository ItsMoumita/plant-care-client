import React from "react";
import { FaSeedling, FaTree, FaTractor, FaLeaf, FaTools, FaCity } from "react-icons/fa";

const services = [
  {
    title: "Garden Care",
    icon: <FaSeedling className="text-green-700 text-4xl" />,
    description: "Personalized care to keep your home garden healthy and thriving.",
  },
  {
    title: "Landscape Design",
    icon: <FaTree className="text-green-700 text-4xl" />,
    description: "Custom landscape designs that blend beauty with function.",
  },
  {
    title: "Commercial Planting",
    icon: <FaTractor className="text-green-700 text-4xl" />,
    description: "Professional planting services for offices and public spaces.",
  },
  {
    title: "Seed Harvesting",
    icon: <FaLeaf className="text-green-700 text-4xl" />,
    description: "Expertise in harvesting and preserving plant seeds sustainably.",
  },
  {
    title: "Lawn Maintenance",
    icon: <FaTools className="text-green-700 text-4xl" />,
    description: "Mowing, fertilizing, and seasonal care to keep your lawn pristine.",
  },
  {
    title: "Rooftop Gardening",
    icon: <FaCity className="text-green-700 text-4xl" />,
    description: "Transform your roof into a lush, eco-friendly green space.",
  },
];

const ServicesSection = () => {
  return (
    <div className="bg-[#e6ffe6] py-16 px-6 lg:px-20" id="services">
      <h2 className="text-3xl font-bold text-center text-green-900 mb-10">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition duration-300"
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;

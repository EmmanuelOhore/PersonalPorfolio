import { useState } from "react";
import Projects from "../ui/projects";
import TechStack from "../ui/techStack";

const servicesData = [
  {
    icon: "fa-code",
    title: "Frontend Development",
    description:
      "Building high-performance, scalable, and modern web applications with React, TypeScript, and Tailwind CSS.",
  },
  {
    icon: "fa-mobile-alt",
    title: "Responsive Web Design",
    description:
      "Ensuring a seamless and adaptive experience across all devices using mobile-first design principles.",
  },
  {
    icon: "fa-database",
    title: "API Integration",
    description:
      "Integrating and optimizing APIs for dynamic and efficient communication between frontend and backend systems.",
  },
  {
    icon: "fa-cloud",
    title: "Firebase & Supabase Services",
    description:
      "Implementing authentication, real-time databases, and cloud storage using Firebase and Supabase.",
  },
];

const Services = () => {
  return (
    <section className="grid grid-cols-2 gap-6 mt-2 w-[80%] relative z-30 mx-auto px-4 tablet:grid-cols-1 phoneL:w-[98%] phoneP:gap-3 phoneP:mt-0 phoneP:w-p-[100%]">
      {servicesData.map((service, index) => (
        <div
          data-aos="fade-up"
          data-aos-delay={index * 100}
          key={index}
          className="bg-[#0f172a] p-6 rounded-lg shadow-lg flex flex-col items-start border border-cyan-500 phoneL:py-4 phoneL:p-3 phoneP:py-2"
        >
          <i
            className={`fa ${service.icon} text-cyan-400 text-2xl mb-3 phoneL:text-[1.5rem] phoneP:text-[1.2rem]`}
          ></i>
          <h3 className="text-xl font-bold text-white mb-2 phoneL:text-[1rem] phoneL:mb-0 phoneP:text-[.9rem] ">
            {service.title}
          </h3>
          <p className="text-gray-400 text-sm phoneL:text-[.7rem] phoneL:leading-[1rem] phoneP:text-[.6rem]">
            {service.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;

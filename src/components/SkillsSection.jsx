import React from "react";

export default function SkillsSection({ skillCards }) {
  return (
    <section id="skills" className="px-4 lg:px-16 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Skills
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-2xl mb-12">
          Here are the skills I have earned.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {skillCards.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg p-6 lg:p-8 h-24 lg:h-28 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/20 hover:scale-105 cursor-pointer group"
            >
              <span className="text-lg lg:text-xl font-medium text-gray-900 dark:text-white group-hover:text-yellow-400 transition-colors duration-300">
                {service.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

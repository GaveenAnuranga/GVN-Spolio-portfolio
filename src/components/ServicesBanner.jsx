import React from "react";

export default function ServicesBanner({ services }) {
  return (
    <div className="w-full bg-yellow-400 dark:bg-black py-6 overflow-hidden">
      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
          gap-4 sm:gap-6 md:gap-8
          items-center justify-center
          max-w-5xl mx-auto
          animate-pulse
          px-2
          lg:flex lg:flex-row lg:space-x-8 lg:gap-0
        "
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 whitespace-nowrap justify-center py-2"
          >
            <span className="text-2xl">{service.icon}</span>
            <span className="text-base md:text-lg lg:text-xl font-medium text-black dark:text-white">
              {service.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { Eye, Github, ExternalLink } from "lucide-react";

export default function PortfolioSection({ portfolioItems, categories, selectedCategory, setSelectedCategory }) {
  const filteredPortfolioItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <section id="portfolio" className="px-4 lg:px-16 py-12 lg:py-20 bg-gray-100 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">My </span>
            <span className="text-yellow-400">Portfolio</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore my latest projects and creative works. Each project represents a unique challenge and solution, showcasing my skills in design, development, and creative problem-solving.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-yellow-400 text-gray-900 shadow-lg shadow-yellow-400/30"
                  : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-yellow-400"
              }`}
              aria-selected={selectedCategory === category}
              aria-label={`Filter by ${category}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolioItems.length > 0 ? (
            filteredPortfolioItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300 hover:scale-105 group"
              >
                <div className="relative h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="flex space-x-4">
                      <a
                        href={item.liveUrl}
                        className="p-2 bg-yellow-400 text-gray-900 rounded-full hover:bg-yellow-500 transition-colors duration-300"
                        title="View Live"
                      >
                        <Eye className="w-5 h-5" />
                      </a>
                      <a
                        href={item.githubUrl}
                        className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors duration-300"
                        title="View Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-yellow-400 font-medium">
                      {item.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full hover:bg-yellow-400 hover:text-gray-900 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center text-gray-600 dark:text-gray-400">
              No projects found for this category.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

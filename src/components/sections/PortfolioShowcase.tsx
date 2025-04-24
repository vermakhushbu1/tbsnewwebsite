import React, { useState } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

const PortfolioShowcase = () => {
  const projects: Project[] = [
    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      title: "E-Commerce Website Redesign",
      category: "Web Development",
      description:
        "A complete overhaul of an online retail platform with improved UI/UX and conversion optimization.",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&q=80",
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description:
        "Comprehensive social media strategy that increased engagement by 150% for a fashion brand.",
    },
    {
      id: "3",
      image:
        "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&q=80",
      title: "Mobile App Development",
      category: "App Development",
      description:
        "Custom iOS and Android application for a fitness company with workout tracking and social features.",
    },
    {
      id: "4",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=500&q=80",
      title: "SEO Optimization",
      category: "SEO Services",
      description:
        "Strategic SEO campaign that boosted organic traffic by 200% and improved search rankings.",
    },
    {
      id: "5",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80",
      title: "Brand Identity Design",
      category: "Branding",
      description:
        "Complete brand identity package including logo, color palette, and brand guidelines for a startup.",
    },
    {
      id: "6",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=500&q=80",
      title: "Content Marketing Strategy",
      category: "Content Marketing",
      description:
        "Comprehensive content strategy that increased lead generation by 75% for a B2B company.",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 px-4 md:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Our <span className="text-pink-DEFAULT">Portfolio</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful digital marketing campaigns and
            web development projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={
                activeCategory === category
                  ? "bg-pink-DEFAULT hover:bg-pink-dark"
                  : "border-jamuni-DEFAULT text-white hover:bg-jamuni-DEFAULT/20"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-dark-gray border border-jamuni-DEFAULT hover:border-pink-DEFAULT transition-colors duration-300 rounded-lg overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-xs font-medium text-pink-DEFAULT bg-pink-DEFAULT/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-DEFAULT transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <Link
                  to={`/case-studies/${project.id}`}
                  className="text-pink-DEFAULT font-medium inline-flex items-center group-hover:underline"
                >
                  View Details
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button
              variant="outline"
              className="border-pink-DEFAULT text-pink-DEFAULT hover:bg-pink-DEFAULT hover:text-white"
            >
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;

import React, { useState } from "react";
import ProjectCard from "../cards/ProjectCard";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  image: string;
  title: string;
  category: string;
  description: string;
}

interface PortfolioShowcaseProps {
  title?: string;
  subtitle?: string;
  projects?: Project[];
}

const PortfolioShowcase = ({
  title = "Our Recent Projects",
  subtitle = "Explore our portfolio of successful digital marketing campaigns and web development projects",
  projects = [
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
  ],
}: PortfolioShowcaseProps) => {
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full ${activeCategory === category ? "bg-blue-600 hover:bg-blue-700" : "text-gray-700 hover:text-blue-600"}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              image={project.image}
              title={project.title}
              category={project.category}
              description={project.description}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
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

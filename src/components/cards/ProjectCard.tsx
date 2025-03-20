import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  image?: string;
  title?: string;
  category?: string;
  description?: string;
  onViewProject?: () => void;
  id?: string;
}

const ProjectCard = ({
  image = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
  title = "E-Commerce Website Redesign",
  category = "Web Development",
  description = "A complete overhaul of an online retail platform with improved UI/UX and conversion optimization.",
  onViewProject = () => console.log("View project clicked"),
  id = "1",
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden group relative bg-white h-full w-full transition-all duration-300 hover:shadow-lg">
      <div className="relative h-[220px] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link to={`/case-studies/${id}`}>
            <Button
              onClick={onViewProject}
              variant="secondary"
              className="bg-white/90 hover:bg-white text-blue-600 flex items-center gap-2"
            >
              <Eye size={16} />
              View Project
            </Button>
          </Link>
        </div>
      </div>
      <CardContent className="p-5">
        <div className="mb-1">
          <span className="text-sm font-medium text-blue-600">{category}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 text-sm line-clamp-2">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

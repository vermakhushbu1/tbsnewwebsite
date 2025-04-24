import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  link?: string;
}

const ServiceCard = ({
  icon = (
    <div className="w-12 h-12 rounded-full bg-pink-DEFAULT/20 flex items-center justify-center text-pink-DEFAULT">
      🚀
    </div>
  ),
  title = "Digital Marketing",
  description = "Boost your online presence with our comprehensive digital marketing strategies tailored to your business goals.",
  link = "/services/digital-marketing",
}: ServiceCardProps) => {
  return (
    <Card className="bg-dark-gray h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden group border-2 animate-border-rotation hover:border-pink-DEFAULT">
      <CardHeader className="pb-2">
        <div className="mb-4 transition-colors duration-300 group-hover:text-pink-DEFAULT">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-pink-DEFAULT transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          to={link}
          className="text-pink-DEFAULT font-medium flex items-center gap-1 group-hover:gap-2 transition-all hover:text-jamuni-light"
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;

import React from "react";
import {
  Code,
  Globe,
  BarChart,
  Smartphone,
  PenTool,
  Megaphone,
} from "lucide-react";
import ServiceCard from "../cards/ServiceCard";

interface ServicesGridProps {
  title?: string;
  subtitle?: string;
  services?: {
    icon: React.ReactNode;
    title: string;
    description: string;
    link: string;
  }[];
}

const ServicesGrid = ({
  title = "Our Services",
  subtitle = "We provide comprehensive digital solutions to help your business grow and succeed in the digital landscape.",
  services = [
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Web Development",
      description:
        "Custom websites built with cutting-edge technologies to deliver exceptional user experiences.",
      link: "/services/web-development",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that engage users and drive business growth.",
      link: "/services/mobile-development",
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to increase your online visibility and attract qualified leads.",
      link: "/services/digital-marketing",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: "Custom Software",
      description:
        "Tailored software solutions designed to streamline your business processes and boost efficiency.",
      link: "/services/custom-software",
    },
    {
      icon: <PenTool className="w-8 h-8 text-blue-600" />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging interfaces for your digital products.",
      link: "/services/ui-ux-design",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-blue-600" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website.",
      link: "/services/seo-optimization",
    },
  ],
}: ServicesGridProps) => {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  {service.icon}
                </div>
              }
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;

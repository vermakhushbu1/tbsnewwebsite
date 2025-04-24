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

const ServicesGrid = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-pink-DEFAULT" />,
      title: "Web Development",
      description:
        "Custom websites built with cutting-edge technologies to deliver exceptional user experiences.",
      link: "/services/web-development",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-DEFAULT" />,
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that engage users and drive business growth.",
      link: "/services/mobile-development",
    },
    {
      icon: <BarChart className="w-8 h-8 text-pink-DEFAULT" />,
      title: "Digital Marketing",
      description:
        "Data-driven marketing strategies to increase your online visibility and attract qualified leads.",
      link: "/services/digital-marketing",
    },
    {
      icon: <Code className="w-8 h-8 text-pink-DEFAULT" />,
      title: "Custom Software",
      description:
        "Tailored software solutions designed to streamline your business processes and boost efficiency.",
      link: "/services/custom-software",
    },
    {
      icon: <PenTool className="w-8 h-8 text-pink-DEFAULT" />,
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging interfaces for your digital products.",
      link: "/services/ui-ux-design",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-pink-DEFAULT" />,
      title: "SEO Optimization",
      description:
        "Improve your search engine rankings and drive organic traffic to your website.",
      link: "/services/seo-optimization",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-dark-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="text-pink-DEFAULT">Services</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business
            grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={
                <div className="w-16 h-16 rounded-full bg-dark-light flex items-center justify-center">
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

import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Server, Database, Code, Shield, Cloud, Cpu } from "lucide-react";

const ITSolutionsPage = () => {
  const solutions = [
    {
      icon: <Server className="w-10 h-10 text-blue-600" />,
      title: "IT Infrastructure Management",
      description:
        "Comprehensive infrastructure solutions including server management, network optimization, and hardware maintenance to ensure your systems run smoothly and efficiently.",
      link: "/it-solutions/infrastructure",
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: "Database Solutions",
      description:
        "Expert database design, implementation, and management services to help you store, organize, and access your critical business data securely and efficiently.",
      link: "/it-solutions/database",
    },
    {
      icon: <Code className="w-10 h-10 text-blue-600" />,
      title: "Custom Software Development",
      description:
        "Tailored software solutions designed to address your specific business challenges, streamline operations, and drive growth through innovation.",
      link: "/it-solutions/software-development",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Cybersecurity Services",
      description:
        "Robust security solutions to protect your business from evolving cyber threats, including vulnerability assessments, penetration testing, and security monitoring.",
      link: "/it-solutions/cybersecurity",
    },
    {
      icon: <Cloud className="w-10 h-10 text-blue-600" />,
      title: "Cloud Computing",
      description:
        "Strategic cloud migration and management services to help you leverage the scalability, flexibility, and cost-efficiency of cloud platforms.",
      link: "/it-solutions/cloud-computing",
    },
    {
      icon: <Cpu className="w-10 h-10 text-blue-600" />,
      title: "IT Consulting",
      description:
        "Expert guidance on technology strategy, digital transformation, and IT roadmapping to align your technology investments with your business objectives.",
      link: "/it-solutions/consulting",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to optimize your
              business operations and drive digital transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <a
                    href={solution.link}
                    className="text-blue-600 font-medium flex items-center hover:underline"
                  >
                    Learn More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our IT Solutions Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a structured approach to deliver IT solutions that meet
              your business needs and exceed your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery & Assessment",
                description:
                  "We begin by understanding your business objectives, current IT infrastructure, and specific challenges.",
              },
              {
                step: "2",
                title: "Solution Design",
                description:
                  "Our experts design a customized solution that addresses your unique requirements and aligns with your goals.",
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "We deploy the solution with minimal disruption to your operations, ensuring a smooth transition.",
              },
              {
                step: "4",
                title: "Ongoing Support",
                description:
                  "We provide continuous monitoring, maintenance, and support to ensure optimal performance and ROI.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-xl font-semibold mb-2">{process.title}</h4>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITSolutionsPage;

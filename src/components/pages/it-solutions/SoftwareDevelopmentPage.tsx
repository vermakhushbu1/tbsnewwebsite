import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Code,
  Layers,
  Smartphone,
  Globe,
  Database,
  GitBranch,
} from "lucide-react";

const SoftwareDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom Software Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Tailored software solutions designed to address your specific
              business challenges and drive growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Software Solutions Tailored to Your Business
              </h3>
              <p className="text-gray-600 mb-4">
                Off-the-shelf software often falls short of addressing your
                unique business requirements. At WebInfoTech, we specialize in
                developing custom software solutions that are specifically
                designed to meet your exact needs and solve your specific
                challenges.
              </p>
              <p className="text-gray-600 mb-4">
                Our experienced team of developers, designers, and business
                analysts work closely with you to understand your business
                processes, identify opportunities for improvement, and create
                software that streamlines operations, enhances productivity, and
                drives growth.
              </p>
              <p className="text-gray-600">
                Whether you need a web application, mobile app, enterprise
                software, or integration solution, we deliver high-quality,
                scalable, and maintainable software that provides long-term
                value for your business.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                alt="Software Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-blue-600" />,
                  title: "Web Application Development",
                  description:
                    "Custom web applications with intuitive interfaces and robust functionality to streamline your business processes and enhance user experience.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                  title: "Mobile App Development",
                  description:
                    "Native and cross-platform mobile applications that deliver seamless experiences across devices while meeting your business objectives.",
                },
                {
                  icon: <Layers className="h-10 w-10 text-blue-600" />,
                  title: "Enterprise Software",
                  description:
                    "Scalable enterprise solutions that integrate with your existing systems to improve efficiency, collaboration, and decision-making.",
                },
                {
                  icon: <Database className="h-10 w-10 text-blue-600" />,
                  title: "Database Solutions",
                  description:
                    "Custom database design, development, and optimization to ensure efficient data storage, retrieval, and management.",
                },
                {
                  icon: <Code className="h-10 w-10 text-blue-600" />,
                  title: "API Development & Integration",
                  description:
                    "Seamless integration between different systems and applications through custom APIs and middleware solutions.",
                },
                {
                  icon: <GitBranch className="h-10 w-10 text-blue-600" />,
                  title: "Legacy System Modernization",
                  description:
                    "Transform outdated systems into modern, scalable applications while preserving valuable business logic and data.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description:
                    "Understanding your business needs, challenges, and objectives.",
                },
                {
                  step: "2",
                  title: "Planning",
                  description:
                    "Defining requirements, creating specifications, and planning the development roadmap.",
                },
                {
                  step: "3",
                  title: "Design",
                  description:
                    "Creating intuitive user interfaces and robust system architecture.",
                },
                {
                  step: "4",
                  title: "Development",
                  description:
                    "Building the solution using modern technologies and best practices.",
                },
                {
                  step: "5",
                  title: "Testing",
                  description:
                    "Rigorous quality assurance to ensure reliability and performance.",
                },
                {
                  step: "6",
                  title: "Deployment & Support",
                  description:
                    "Smooth implementation and ongoing maintenance and support.",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-4 rounded-lg text-center"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                    {process.step}
                  </div>
                  <h4 className="text-lg font-semibold mb-2">
                    {process.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Technologies We Use
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  name: "JavaScript/TypeScript",
                  category: "Frontend & Backend",
                },
                { name: "React.js", category: "Frontend" },
                { name: "Angular", category: "Frontend" },
                { name: "Vue.js", category: "Frontend" },
                { name: "Node.js", category: "Backend" },
                { name: "Python", category: "Backend" },
                { name: "Java", category: "Backend" },
                { name: ".NET", category: "Backend" },
                { name: "React Native", category: "Mobile" },
                { name: "Flutter", category: "Mobile" },
                { name: "Swift", category: "Mobile" },
                { name: "Kotlin", category: "Mobile" },
                { name: "SQL & NoSQL Databases", category: "Database" },
                { name: "AWS", category: "Cloud" },
                { name: "Azure", category: "Cloud" },
                { name: "Google Cloud", category: "Cloud" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-gray-900">{tech.name}</h4>
                  <p className="text-sm text-gray-500">{tech.category}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Build Your Custom Software Solution?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our custom software development
                services can help your business overcome challenges and achieve
                its goals.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDevelopmentPage;

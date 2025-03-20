import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { Globe, Code, Smartphone, Server } from "lucide-react";

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom websites built with cutting-edge technologies to deliver
              exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Modern Web Solutions for Your Business
              </h3>
              <p className="text-gray-600 mb-4">
                In today's digital landscape, your website is often the first
                point of contact between your business and potential customers.
                At WebInfoTech, we specialize in creating custom,
                high-performance websites that not only look great but also
                drive results for your business.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced web developers combines technical
                expertise with creative design to build websites that engage
                visitors, communicate your brand message effectively, and
                convert visitors into customers.
              </p>
              <p className="text-gray-600">
                Whether you need a simple informational website, a complex
                e-commerce platform, or a custom web application, we have the
                skills and experience to bring your vision to life.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
                alt="Web Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Web Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-blue-600" />,
                  title: "Corporate Websites",
                  description:
                    "Professional websites that establish your brand identity and showcase your products or services to potential customers.",
                },
                {
                  icon: <Code className="h-10 w-10 text-blue-600" />,
                  title: "E-Commerce Solutions",
                  description:
                    "Custom online stores with secure payment processing, inventory management, and seamless user experience.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                  title: "Responsive Web Design",
                  description:
                    "Websites that look and function perfectly on all devices, from desktop computers to smartphones and tablets.",
                },
                {
                  icon: <Server className="h-10 w-10 text-blue-600" />,
                  title: "Web Applications",
                  description:
                    "Custom web applications that automate business processes, improve efficiency, and enhance user experience.",
                },
                {
                  icon: <Code className="h-10 w-10 text-blue-600" />,
                  title: "CMS Development",
                  description:
                    "Content management systems that make it easy for you to update and manage your website content without technical knowledge.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-blue-600" />,
                  title: "Website Maintenance",
                  description:
                    "Ongoing support and maintenance to ensure your website remains secure, up-to-date, and performing optimally.",
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description:
                    "We begin by understanding your business, goals, target audience, and website requirements.",
                },
                {
                  step: "2",
                  title: "Planning & Design",
                  description:
                    "We create wireframes and design mockups that align with your brand and meet your business objectives.",
                },
                {
                  step: "3",
                  title: "Development",
                  description:
                    "Our developers build your website using modern technologies and best practices for performance and security.",
                },
                {
                  step: "4",
                  title: "Testing & Launch",
                  description:
                    "We thoroughly test your website and deploy it to your server, ensuring a smooth and successful launch.",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-8 rounded-lg text-center"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="text-xl font-semibold mb-2">
                    {process.title}
                  </h4>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Start Your Web Development Project?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our web development services can
                help your business establish a strong online presence and
                achieve your goals.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;

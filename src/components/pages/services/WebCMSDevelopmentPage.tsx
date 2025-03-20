import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Code, Database, Layout, Settings, Server, Users } from "lucide-react";
import { Link } from "react-router-dom";

const WebCMSDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web CMS Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powerful, flexible, and user-friendly content management solutions
              tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom CMS Solutions for Your Business
              </h3>
              <p className="text-gray-600 mb-4">
                At WebInfoTech, we specialize in developing custom content
                management systems that empower your team to easily manage and
                update your website content without technical expertise.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you need a simple blog platform or a complex
                enterprise-level CMS with advanced workflows and user
                permissions, our experienced developers can create a solution
                that perfectly matches your requirements.
              </p>
              <p className="text-gray-600">
                We work with leading CMS platforms including WordPress, Drupal,
                and Joomla, as well as headless CMS solutions like Contentful
                and Strapi, or we can build a completely custom CMS from
                scratch.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="CMS Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our CMS Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="h-10 w-10 text-blue-600" />,
                  title: "Custom CMS Development",
                  description:
                    "Tailor-made content management systems designed specifically for your business needs and workflows.",
                },
                {
                  icon: <Code className="h-10 w-10 text-blue-600" />,
                  title: "CMS Integration",
                  description:
                    "Seamless integration of your CMS with third-party tools, APIs, and existing business systems.",
                },
                {
                  icon: <Database className="h-10 w-10 text-blue-600" />,
                  title: "Headless CMS Solutions",
                  description:
                    "Modern headless CMS architecture that separates content management from content presentation for maximum flexibility.",
                },
                {
                  icon: <Server className="h-10 w-10 text-blue-600" />,
                  title: "CMS Migration",
                  description:
                    "Smooth migration of your content from your existing CMS to a new platform with minimal disruption.",
                },
                {
                  icon: <Settings className="h-10 w-10 text-blue-600" />,
                  title: "CMS Customization",
                  description:
                    "Enhancement of existing CMS platforms with custom features, themes, and plugins tailored to your needs.",
                },
                {
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                  title: "CMS Training & Support",
                  description:
                    "Comprehensive training and ongoing support to ensure your team can effectively manage your content.",
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
              CMS Platforms We Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                { name: "WordPress", category: "Popular CMS" },
                { name: "Drupal", category: "Enterprise CMS" },
                { name: "Joomla", category: "Open Source CMS" },
                { name: "Contentful", category: "Headless CMS" },
                { name: "Strapi", category: "Open Source Headless CMS" },
                { name: "Sanity", category: "Structured Content Platform" },
                { name: "Shopify", category: "E-commerce CMS" },
                { name: "Magento", category: "E-commerce CMS" },
                { name: "Sitecore", category: "Enterprise CMS" },
                { name: "Kentico", category: "All-in-One CMS" },
                { name: "Ghost", category: "Publishing Platform" },
                { name: "Custom CMS", category: "Bespoke Solutions" },
              ].map((platform, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-gray-900">
                    {platform.name}
                  </h4>
                  <p className="text-sm text-gray-500">{platform.category}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Content Management?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our CMS development services can
                help your business efficiently manage content and improve your
                digital presence.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebCMSDevelopmentPage;

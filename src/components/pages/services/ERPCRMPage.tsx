import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Database,
  Users,
  BarChart,
  Settings,
  Layers,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const ERPCRMPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Custom ERP & CRM Development Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline your business operations and enhance customer
              relationships with tailored ERP and CRM solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Integrated Business Solutions for Growth
              </h3>
              <p className="text-gray-600 mb-4">
                In today's competitive business environment, having efficient
                systems to manage your operations and customer relationships is
                crucial for success. At WebInfoTech, we develop custom ERP
                (Enterprise Resource Planning) and CRM (Customer Relationship
                Management) solutions that are tailored to your specific
                business processes and goals.
              </p>
              <p className="text-gray-600 mb-4">
                Our custom ERP solutions help you streamline operations,
                optimize resource allocation, and improve decision-making across
                your organization. Meanwhile, our CRM solutions enable you to
                better manage customer interactions, enhance customer
                satisfaction, and drive sales growth.
              </p>
              <p className="text-gray-600">
                Whether you need a comprehensive ERP system, a robust CRM
                platform, or an integrated solution that combines both, our
                experienced team can deliver a solution that addresses your
                unique business challenges.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="ERP & CRM Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our ERP & CRM Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Database className="h-10 w-10 text-blue-600" />,
                  title: "Custom ERP Development",
                  description:
                    "Tailor-made ERP solutions that integrate and streamline your core business processes including finance, HR, inventory, and production.",
                },
                {
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                  title: "Custom CRM Development",
                  description:
                    "Personalized CRM systems that help you manage customer data, track interactions, and nurture relationships throughout the customer lifecycle.",
                },
                {
                  icon: <Layers className="h-10 w-10 text-blue-600" />,
                  title: "ERP/CRM Integration",
                  description:
                    "Seamless integration of your ERP and CRM systems with each other and with third-party applications to create a unified business ecosystem.",
                },
                {
                  icon: <Settings className="h-10 w-10 text-blue-600" />,
                  title: "ERP/CRM Customization",
                  description:
                    "Modification and enhancement of existing ERP and CRM platforms to better align with your specific business requirements.",
                },
                {
                  icon: <Workflow className="h-10 w-10 text-blue-600" />,
                  title: "Business Process Automation",
                  description:
                    "Automation of repetitive tasks and workflows within your ERP and CRM systems to increase efficiency and reduce errors.",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-blue-600" />,
                  title: "Reporting & Analytics",
                  description:
                    "Advanced reporting and analytics capabilities that provide actionable insights into your business operations and customer relationships.",
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
              Benefits of Custom ERP & CRM Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  ERP Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Streamlined business processes and improved operational
                      efficiency
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Enhanced data visibility and real-time reporting across
                      departments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Optimized inventory management and resource allocation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>Improved financial management and compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Reduced operational costs and increased productivity
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Better decision-making based on accurate, real-time data
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  CRM Benefits
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Centralized customer data and improved customer insights
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Enhanced customer service and support capabilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Streamlined sales processes and increased conversion rates
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Improved marketing campaign management and effectiveness
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Better customer retention and increased customer lifetime
                      value
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Data-driven insights for personalized customer experiences
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business Operations?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our custom ERP and CRM solutions
                can help streamline your operations, enhance customer
                relationships, and drive business growth.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ERPCRMPage;

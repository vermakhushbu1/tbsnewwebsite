import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Server,
  Network,
  HardDrive,
  Cpu,
  Settings,
  Shield,
} from "lucide-react";

const InfrastructurePage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Infrastructure Management
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions to ensure your systems run
              smoothly, securely, and efficiently.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Optimize Your IT Infrastructure
              </h3>
              <p className="text-gray-600 mb-4">
                Your IT infrastructure is the backbone of your business
                operations. At WebInfoTech, we provide end-to-end infrastructure
                management services to ensure your systems are reliable,
                scalable, and aligned with your business objectives.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're looking to optimize your existing infrastructure,
                migrate to new systems, or implement a hybrid solution, our team
                of experienced IT professionals can help you design and maintain
                an infrastructure that supports your current needs and future
                growth.
              </p>
              <p className="text-gray-600">
                We take a proactive approach to infrastructure management,
                identifying and addressing potential issues before they impact
                your business, while continuously looking for opportunities to
                improve performance and reduce costs.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="IT Infrastructure"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Infrastructure Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Server className="h-10 w-10 text-blue-600" />,
                  title: "Server Management",
                  description:
                    "Comprehensive server administration, monitoring, maintenance, and optimization to ensure optimal performance and reliability.",
                },
                {
                  icon: <Network className="h-10 w-10 text-blue-600" />,
                  title: "Network Solutions",
                  description:
                    "Design, implementation, and management of secure and efficient network infrastructures tailored to your business needs.",
                },
                {
                  icon: <HardDrive className="h-10 w-10 text-blue-600" />,
                  title: "Storage Solutions",
                  description:
                    "Scalable and secure data storage solutions with backup and recovery strategies to protect your critical business information.",
                },
                {
                  icon: <Cpu className="h-10 w-10 text-blue-600" />,
                  title: "Virtualization",
                  description:
                    "Optimize resource utilization and improve flexibility with virtualization solutions for servers, desktops, and applications.",
                },
                {
                  icon: <Settings className="h-10 w-10 text-blue-600" />,
                  title: "IT Support & Maintenance",
                  description:
                    "Proactive monitoring, regular maintenance, and responsive support to minimize downtime and ensure smooth operations.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-blue-600" />,
                  title: "Disaster Recovery",
                  description:
                    "Robust disaster recovery planning and solutions to ensure business continuity in the event of system failures or disasters.",
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
              Our Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Assessment",
                  description:
                    "We begin by thoroughly evaluating your current infrastructure, identifying strengths, weaknesses, and opportunities for improvement.",
                },
                {
                  step: "2",
                  title: "Strategic Planning",
                  description:
                    "Based on our assessment and your business goals, we develop a strategic plan to optimize your infrastructure for performance, security, and cost-efficiency.",
                },
                {
                  step: "3",
                  title: "Implementation",
                  description:
                    "Our team executes the plan with minimal disruption to your operations, ensuring a smooth transition to the improved infrastructure.",
                },
                {
                  step: "4",
                  title: "Ongoing Management",
                  description:
                    "We provide continuous monitoring, maintenance, and support to ensure your infrastructure remains optimized and adapts to your evolving business needs.",
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
                Ready to Optimize Your IT Infrastructure?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our infrastructure management
                services can help your business improve performance, enhance
                security, and reduce costs.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfrastructurePage;

import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Cloud, Database, Lock, Globe, Server, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const CloudComputingPage = () => {
  const services = [
    {
      icon: <Cloud className="w-10 h-10 text-blue-600" />,
      title: "Cloud Migration",
      description:
        "Seamless migration of your applications, data, and infrastructure to the cloud with minimal disruption to your business operations.",
    },
    {
      icon: <Server className="w-10 h-10 text-blue-600" />,
      title: "Cloud Infrastructure Management",
      description:
        "Comprehensive management of your cloud infrastructure to ensure optimal performance, security, and cost-efficiency.",
    },
    {
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: "Cloud Database Solutions",
      description:
        "Scalable and secure cloud database solutions that provide high availability, performance, and data protection.",
    },
    {
      icon: <Lock className="w-10 h-10 text-blue-600" />,
      title: "Cloud Security",
      description:
        "Robust security measures to protect your cloud environment from threats and ensure compliance with industry regulations.",
    },
    {
      icon: <Globe className="w-10 h-10 text-blue-600" />,
      title: "Multi-Cloud Strategy",
      description:
        "Strategic planning and implementation of multi-cloud environments to leverage the best features of different cloud providers.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
      title: "Cloud Cost Optimization",
      description:
        "Analysis and optimization of your cloud spending to maximize ROI while maintaining performance and reliability.",
    },
  ];

  const benefits = [
    {
      title: "Scalability",
      description:
        "Easily scale your resources up or down based on demand, ensuring optimal performance during peak times.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Reduce capital expenditure and pay only for the resources you use with flexible pricing models.",
    },
    {
      title: "Business Agility",
      description:
        "Quickly deploy new applications and services to respond to market changes and opportunities.",
    },
    {
      title: "Global Reach",
      description:
        "Access your applications and data from anywhere in the world with internet connectivity.",
    },
    {
      title: "Disaster Recovery",
      description:
        "Implement robust disaster recovery solutions with automated backups and failover capabilities.",
    },
    {
      title: "Innovation",
      description:
        "Leverage advanced cloud services like AI, machine learning, and IoT to drive innovation in your business.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cloud Computing Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Harness the power of the cloud to drive innovation, scalability,
              and cost efficiency in your business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transform Your Business with Cloud Computing
              </h3>
              <p className="text-gray-600 mb-4">
                Cloud computing has revolutionized how businesses operate,
                providing unprecedented flexibility, scalability, and cost
                efficiency. At WebInfoTech, we help organizations of all sizes
                leverage the power of the cloud to accelerate innovation,
                optimize operations, and gain competitive advantage.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of certified cloud experts has extensive experience
                with major cloud platforms including AWS, Microsoft Azure, and
                Google Cloud Platform. We work closely with you to understand
                your business objectives and develop a tailored cloud strategy
                that aligns with your goals and budget.
              </p>
              <p className="text-gray-600">
                Whether you're looking to migrate existing applications to the
                cloud, build cloud-native solutions, or optimize your current
                cloud environment, we have the expertise to guide you through
                every step of your cloud journey.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80"
                alt="Cloud Computing"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Cloud Computing Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
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
              Benefits of Cloud Computing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Move to the Cloud?
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Contact us today to discuss how our cloud computing solutions can
              help your business achieve greater agility, efficiency, and
              innovation.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CloudComputingPage;

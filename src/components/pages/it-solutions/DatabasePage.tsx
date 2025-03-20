import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Database,
  Server,
  BarChart,
  Search,
  RefreshCw,
  Shield,
} from "lucide-react";
import { Link } from "react-router-dom";

const DatabasePage = () => {
  const services = [
    {
      icon: <Database className="w-10 h-10 text-blue-600" />,
      title: "Database Design & Implementation",
      description:
        "Custom database design and implementation tailored to your specific business requirements and data needs.",
    },
    {
      icon: <Server className="w-10 h-10 text-blue-600" />,
      title: "Database Migration & Upgrade",
      description:
        "Seamless migration of your databases to new platforms or versions with minimal disruption to your operations.",
    },
    {
      icon: <BarChart className="w-10 h-10 text-blue-600" />,
      title: "Performance Optimization",
      description:
        "Analysis and optimization of your database performance to improve speed, efficiency, and user experience.",
    },
    {
      icon: <Search className="w-10 h-10 text-blue-600" />,
      title: "Data Analytics & Reporting",
      description:
        "Advanced analytics and reporting solutions to help you extract valuable insights from your data.",
    },
    {
      icon: <RefreshCw className="w-10 h-10 text-blue-600" />,
      title: "Database Maintenance & Support",
      description:
        "Ongoing maintenance and support to ensure your databases remain reliable, secure, and optimized.",
    },
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Database Security & Compliance",
      description:
        "Implementation of robust security measures and compliance controls to protect your sensitive data.",
    },
  ];

  const technologies = [
    {
      name: "SQL Databases",
      examples: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "Oracle"],
    },
    {
      name: "NoSQL Databases",
      examples: ["MongoDB", "Cassandra", "Redis", "Couchbase"],
    },
    {
      name: "Cloud Databases",
      examples: [
        "Amazon RDS",
        "Azure SQL Database",
        "Google Cloud SQL",
        "DynamoDB",
      ],
    },
    {
      name: "Big Data Solutions",
      examples: ["Hadoop", "Spark", "Elasticsearch", "Snowflake"],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Database Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Efficient data management and analytics solutions to help you
              store, access, and leverage your business data effectively.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Unlock the Power of Your Data
              </h3>
              <p className="text-gray-600 mb-4">
                In today's data-driven business environment, effective database
                management is crucial for organizations of all sizes. Your data
                is one of your most valuable assets, and the ability to store,
                access, and analyze it efficiently can provide significant
                competitive advantages.
              </p>
              <p className="text-gray-600 mb-4">
                At WebInfoTech, we provide comprehensive database solutions that
                help you harness the full potential of your data. Our team of
                database experts has extensive experience with a wide range of
                database technologies, from traditional relational databases to
                modern NoSQL and cloud-based solutions.
              </p>
              <p className="text-gray-600">
                Whether you need to design a new database from scratch, optimize
                an existing one, or migrate to a more scalable platform, we have
                the expertise to deliver solutions that meet your specific
                business requirements and performance expectations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                alt="Database Solutions"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Database Services
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

          <div className="mb-20 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Database Technologies We Work With
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                    {tech.name}
                  </h4>
                  <ul className="space-y-2">
                    {tech.examples.map((example, idx) => (
                      <li key={idx} className="text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Benefits of Our Database Solutions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Improved Performance
                </h4>
                <p className="text-gray-600">
                  Optimize your database for faster queries, reduced latency,
                  and better overall performance, enhancing user experience and
                  productivity.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Enhanced Security
                </h4>
                <p className="text-gray-600">
                  Protect your valuable data with robust security measures,
                  including encryption, access controls, and regular security
                  audits.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Scalability
                </h4>
                <p className="text-gray-600">
                  Design database solutions that can grow with your business,
                  handling increasing data volumes and user loads without
                  performance degradation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Data Insights
                </h4>
                <p className="text-gray-600">
                  Extract valuable business insights from your data with
                  advanced analytics and reporting capabilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  High Availability
                </h4>
                <p className="text-gray-600">
                  Ensure your data is always accessible with redundancy,
                  failover, and disaster recovery solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Compliance
                </h4>
                <p className="text-gray-600">
                  Meet regulatory requirements with database solutions designed
                  to comply with industry standards and regulations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Optimize Your Database?
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Contact us today to discuss how our database solutions can help
              you store, manage, and leverage your data more effectively.
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

export default DatabasePage;

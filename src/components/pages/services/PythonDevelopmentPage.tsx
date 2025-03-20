import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Code, Database, Server, BarChart, Bot, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const PythonDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Python Development Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leverage the power and versatility of Python for your business
              applications, data analysis, and automation needs.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Versatile Python Development for Your Business
              </h3>
              <p className="text-gray-600 mb-4">
                Python has emerged as one of the most powerful and versatile
                programming languages in the world, with applications ranging
                from web development to data science, machine learning, and
                automation. At WebInfoTech, we harness the power of Python to
                create robust, scalable, and efficient solutions for your
                business.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced Python developers can help you build
                custom applications, analyze complex data sets, automate
                business processes, and implement advanced AI and machine
                learning solutions that drive innovation and growth for your
                organization.
              </p>
              <p className="text-gray-600">
                Whether you need a web application built with Django or Flask, a
                data analysis solution using pandas and NumPy, or a machine
                learning model with TensorFlow or PyTorch, our Python
                development expertise can turn your ideas into reality.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80"
                alt="Python Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Python Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Globe className="h-10 w-10 text-blue-600" />,
                  title: "Python Web Development",
                  description:
                    "Custom web applications and APIs built with Django, Flask, or FastAPI frameworks that are secure, scalable, and maintainable.",
                },
                {
                  icon: <Database className="h-10 w-10 text-blue-600" />,
                  title: "Data Analysis & Visualization",
                  description:
                    "Powerful data processing, analysis, and visualization solutions using pandas, NumPy, Matplotlib, and other Python libraries.",
                },
                {
                  icon: <Bot className="h-10 w-10 text-blue-600" />,
                  title: "AI & Machine Learning",
                  description:
                    "Advanced AI and machine learning solutions using TensorFlow, PyTorch, scikit-learn, and other Python frameworks for predictive analytics and automation.",
                },
                {
                  icon: <Server className="h-10 w-10 text-blue-600" />,
                  title: "Process Automation",
                  description:
                    "Automation of repetitive tasks and business processes using Python scripts and tools to increase efficiency and reduce errors.",
                },
                {
                  icon: <Code className="h-10 w-10 text-blue-600" />,
                  title: "Python Integration Services",
                  description:
                    "Seamless integration of Python applications with existing systems, databases, and third-party services through custom APIs and connectors.",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-blue-600" />,
                  title: "Custom Python Solutions",
                  description:
                    "Bespoke Python applications and tools tailored to your specific business requirements and challenges.",
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
              Python Technologies We Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Django", category: "Web Framework" },
                { name: "Flask", category: "Web Framework" },
                { name: "FastAPI", category: "API Framework" },
                { name: "Pandas", category: "Data Analysis" },
                { name: "NumPy", category: "Scientific Computing" },
                { name: "Matplotlib", category: "Data Visualization" },
                { name: "TensorFlow", category: "Machine Learning" },
                { name: "PyTorch", category: "Machine Learning" },
                { name: "scikit-learn", category: "Machine Learning" },
                { name: "Selenium", category: "Web Automation" },
                { name: "Beautiful Soup", category: "Web Scraping" },
                { name: "SQLAlchemy", category: "ORM" },
                { name: "Celery", category: "Task Queue" },
                { name: "Pytest", category: "Testing" },
                { name: "Jupyter", category: "Interactive Computing" },
                { name: "NLTK", category: "Natural Language Processing" },
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
                Ready to Leverage Python for Your Business?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our Python development services
                can help your business solve complex problems, analyze data, and
                automate processes for improved efficiency and growth.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Start Your Python Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PythonDevelopmentPage;

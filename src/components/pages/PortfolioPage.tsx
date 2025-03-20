import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PortfolioShowcase from "../sections/PortfolioShowcase";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Portfolio
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our collection of successful projects across various
              industries and services.
            </p>
          </div>
        </div>
      </section>

      <PortfolioShowcase />

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Process
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              How we approach each project to ensure success and client
              satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Discovery",
                description:
                  "We begin by understanding your business, goals, and target audience.",
              },
              {
                step: "2",
                title: "Strategy",
                description:
                  "We develop a customized plan tailored to your specific needs and objectives.",
              },
              {
                step: "3",
                title: "Implementation",
                description:
                  "Our team executes the strategy with precision and attention to detail.",
              },
              {
                step: "4",
                title: "Optimization",
                description:
                  "We continuously monitor, analyze, and refine to maximize results.",
              },
            ].map((process, index) => (
              <div
                key={index}
                className="bg-blue-50 p-8 rounded-lg text-center"
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

export default PortfolioPage;

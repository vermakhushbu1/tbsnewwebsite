import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ServicesGrid from "../sections/ServicesGrid";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive digital solutions to help your business
              grow and succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      <ServicesGrid />

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Approach
              </h3>
              <p className="text-gray-600 mb-4">
                At WebInfoTech, we believe in a strategic, data-driven approach
                to digital marketing. We begin by understanding your business
                goals, target audience, and competitive landscape.
              </p>
              <p className="text-gray-600 mb-4">
                Based on this analysis, we develop customized strategies that
                align with your objectives and deliver measurable results. Our
                team of experts works collaboratively to implement these
                strategies, constantly monitoring and optimizing for maximum
                performance.
              </p>
              <p className="text-gray-600">
                We maintain transparent communication throughout the process,
                providing regular reports and insights to keep you informed
                about your campaign's progress and ROI.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Our approach"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;

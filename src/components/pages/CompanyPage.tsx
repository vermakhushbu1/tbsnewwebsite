import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const CompanyPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Company
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Learn more about WebInfoTech and our mission to deliver
              exceptional digital solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                About WebInfoTech
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2015, WebInfoTech is a leading IT solutions provider
                dedicated to helping businesses leverage technology for growth
                and innovation.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced professionals combines technical
                expertise with industry knowledge to deliver customized
                solutions that address your unique business challenges.
              </p>
              <p className="text-gray-600">
                We pride ourselves on building long-term partnerships with our
                clients, providing ongoing support and strategic guidance to
                ensure your continued success in the digital landscape.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Our company"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Mission & Vision
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-center">
                  Our Mission
                </h4>
                <p className="text-gray-600">
                  To empower businesses with innovative technology solutions
                  that drive growth, efficiency, and competitive advantage in
                  the digital age.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-center">
                  Our Vision
                </h4>
                <p className="text-gray-600">
                  To be the most trusted technology partner for businesses
                  worldwide, known for our technical excellence, innovative
                  solutions, and exceptional client service.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical Expertise",
                  description:
                    "Our team of certified professionals stays at the forefront of technology trends and best practices.",
                },
                {
                  title: "Client-Focused Approach",
                  description:
                    "We prioritize understanding your business needs to deliver solutions that align with your goals.",
                },
                {
                  title: "Proven Track Record",
                  description:
                    "With hundreds of successful projects, we have the experience to tackle your most complex challenges.",
                },
                {
                  title: "Innovative Solutions",
                  description:
                    "We leverage cutting-edge technologies to create forward-thinking solutions that give you a competitive edge.",
                },
                {
                  title: "Ongoing Support",
                  description:
                    "Our relationship doesn't end at deployment—we provide continuous support to ensure long-term success.",
                },
                {
                  title: "Cost-Effective Services",
                  description:
                    "We deliver high-quality solutions that maximize your ROI and fit within your budget constraints.",
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyPage;

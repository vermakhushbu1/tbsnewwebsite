import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const MissionPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving digital transformation through innovative technology
              solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Core Mission
              </h3>
              <p className="text-gray-600 mb-4">
                At Tbs Web Technology, our mission is to empower businesses
                through innovative technology solutions that drive growth,
                efficiency, and competitive advantage. We are committed to
                delivering exceptional value to our clients by combining
                technical expertise with a deep understanding of their business
                challenges and objectives.
              </p>
              <p className="text-gray-600 mb-4">
                We strive to be a trusted technology partner that helps
                organizations navigate the complex digital landscape, embrace
                emerging technologies, and transform their operations to meet
                the demands of today's rapidly evolving market.
              </p>
              <p className="text-gray-600">
                Through our dedication to excellence, continuous learning, and
                client-centric approach, we aim to make a meaningful impact on
                the success of the businesses we serve and contribute to the
                advancement of the technology industry as a whole.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Our mission"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What Drives Us
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">
                  Innovation
                </h4>
                <p className="text-gray-600 text-center">
                  We are committed to staying at the forefront of technology
                  trends and bringing innovative solutions to our clients.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">
                  Excellence
                </h4>
                <p className="text-gray-600 text-center">
                  We pursue excellence in everything we do, from client
                  communication to project delivery and ongoing support.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">
                  Partnership
                </h4>
                <p className="text-gray-600 text-center">
                  We believe in building long-term partnerships with our
                  clients, understanding their unique needs and goals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Join Us in Our Mission
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Whether you're looking for a technology partner to help your
              business grow or interested in joining our team, we invite you to
              be part of our mission to drive digital transformation and create
              innovative solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/company/careers"
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MissionPage;

import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const VisionPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Shaping the future of technology to create a better digital world
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision for the Future
              </h3>
              <p className="text-gray-600 mb-4">
                At Tbs Web Technology, we envision a future where technology
                seamlessly integrates with every aspect of business and life,
                creating more efficient, sustainable, and connected experiences.
                We aspire to be at the forefront of this transformation, leading
                the way in developing innovative solutions that address complex
                challenges and unlock new possibilities.
              </p>
              <p className="text-gray-600 mb-4">
                We see a world where businesses of all sizes have access to
                enterprise-grade technology solutions that are tailored to their
                specific needs, enabling them to compete effectively in an
                increasingly digital marketplace. Our vision is to democratize
                technology and make it accessible, understandable, and valuable
                to everyone.
              </p>
              <p className="text-gray-600">
                Through our commitment to continuous innovation, ethical
                practices, and client success, we aim to build a legacy of
                positive impact that extends beyond the technology we create to
                the businesses we serve and the communities in which we operate.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
                alt="Our vision"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Vision in Action
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Innovation Hub
                </h4>
                <p className="text-gray-600">
                  Creating a culture of innovation where new ideas are nurtured
                  and brought to life.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Global Reach
                </h4>
                <p className="text-gray-600">
                  Expanding our presence to serve clients around the world with
                  localized expertise.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Technology Leadership
                </h4>
                <p className="text-gray-600">
                  Leading the adoption of emerging technologies that drive
                  business transformation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Community Impact
                </h4>
                <p className="text-gray-600">
                  Using technology to make a positive difference in communities
                  around the world.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Share Our Vision
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              We're looking for clients, partners, and team members who share
              our vision for a better digital future. Together, we can create
              technology solutions that make a real difference.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Connect With Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionPage;

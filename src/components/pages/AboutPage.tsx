import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About WebInfoTech
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are a leading digital marketing agency helping businesses grow
              through innovative strategies and cutting-edge technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Story
              </h3>
              <p className="text-gray-600 mb-4">
                Founded in 2015, WebInfoTech began with a simple mission: to
                help businesses navigate the complex digital landscape and
                achieve measurable growth through strategic digital marketing
                solutions.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team of passionate digital marketers has
                grown into a full-service agency with expertise across web
                development, SEO, content marketing, social media management,
                and more.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped hundreds of businesses across
                various industries establish strong online presences and achieve
                their growth objectives.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="Our team"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Values
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">
                  Excellence
                </h4>
                <p className="text-gray-600 text-center">
                  We strive for excellence in everything we do, from client
                  communication to project delivery.
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
                  Collaboration
                </h4>
                <p className="text-gray-600 text-center">
                  We believe in working closely with our clients to understand
                  their unique needs and goals.
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
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-center mb-2">
                  Innovation
                </h4>
                <p className="text-gray-600 text-center">
                  We constantly explore new technologies and strategies to keep
                  our clients ahead of the competition.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "John Smith",
                  role: "CEO & Founder",
                  image: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
                },
                {
                  name: "Sarah Johnson",
                  role: "Marketing Director",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
                },
                {
                  name: "Michael Chen",
                  role: "Lead Developer",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
                },
                {
                  name: "Emily Rodriguez",
                  role: "SEO Specialist",
                  image:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="h-64 bg-blue-100 flex items-center justify-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-40 h-40"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="text-xl font-semibold text-gray-900">
                      {member.name}
                    </h4>
                    <p className="text-blue-600">{member.role}</p>
                  </div>
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

export default AboutPage;

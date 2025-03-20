import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { PenTool, Eye, Layout, Smartphone, Users, Palette } from "lucide-react";

const UIUXDesignPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UI/UX Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              User-centered design that creates intuitive, engaging interfaces
              for your digital products.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Design That Delights Users and Drives Results
              </h3>
              <p className="text-gray-600 mb-4">
                In today's competitive digital landscape, exceptional user
                experience is a key differentiator for successful products and
                services. At WebInfoTech, we create intuitive, engaging, and
                visually appealing user interfaces that not only look great but
                also deliver measurable business results.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced UI/UX designers combines creative design
                thinking with data-driven insights to create user-centered
                experiences that align with your business goals and meet the
                needs of your target audience.
              </p>
              <p className="text-gray-600">
                Whether you're developing a new digital product or redesigning
                an existing one, our UI/UX design services ensure that your
                users have a seamless, enjoyable experience that encourages
                engagement and conversion.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="UI/UX Design"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our UI/UX Design Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Users className="h-10 w-10 text-blue-600" />,
                  title: "User Research",
                  description:
                    "Understanding your users' needs, behaviors, and pain points through interviews, surveys, and usability testing.",
                },
                {
                  icon: <Layout className="h-10 w-10 text-blue-600" />,
                  title: "Information Architecture",
                  description:
                    "Organizing and structuring content in a way that helps users find information and complete tasks efficiently.",
                },
                {
                  icon: <PenTool className="h-10 w-10 text-blue-600" />,
                  title: "Wireframing & Prototyping",
                  description:
                    "Creating low and high-fidelity prototypes to visualize the user interface and test functionality before development.",
                },
                {
                  icon: <Palette className="h-10 w-10 text-blue-600" />,
                  title: "Visual Design",
                  description:
                    "Crafting visually appealing interfaces with attention to color, typography, imagery, and brand consistency.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                  title: "Responsive Design",
                  description:
                    "Ensuring your digital product provides an optimal experience across all devices and screen sizes.",
                },
                {
                  icon: <Eye className="h-10 w-10 text-blue-600" />,
                  title: "Usability Testing",
                  description:
                    "Evaluating your product with real users to identify usability issues and opportunities for improvement.",
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
              Our Design Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discover",
                  description:
                    "We research your users, business goals, and industry to understand the context and requirements.",
                },
                {
                  step: "2",
                  title: "Define",
                  description:
                    "We define the information architecture, user flows, and key interactions based on research insights.",
                },
                {
                  step: "3",
                  title: "Design",
                  description:
                    "We create wireframes, prototypes, and visual designs that bring your product to life.",
                },
                {
                  step: "4",
                  title: "Deliver",
                  description:
                    "We collaborate with developers to ensure the design is implemented correctly and conduct usability testing.",
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
                Ready to Enhance Your User Experience?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our UI/UX design services can
                help you create intuitive, engaging digital experiences that
                delight your users and drive business results.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UIUXDesignPage;

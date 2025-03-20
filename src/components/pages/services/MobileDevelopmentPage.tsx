import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import { Smartphone, Tablet, Layers, Zap, Shield, Globe } from "lucide-react";

const MobileDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Mobile App Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Native and cross-platform mobile applications that engage users
              and drive business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Mobile Solutions for the Modern Business
              </h3>
              <p className="text-gray-600 mb-4">
                In today's mobile-first world, having a strong mobile presence
                is essential for businesses of all sizes. At WebInfoTech, we
                specialize in developing custom mobile applications that help
                you connect with your customers, streamline operations, and
                drive growth.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced mobile developers creates intuitive,
                high-performance apps for iOS and Android platforms, using the
                latest technologies and best practices to ensure your app stands
                out in the crowded app marketplace.
              </p>
              <p className="text-gray-600">
                Whether you need a consumer-facing app to engage your customers
                or an enterprise solution to improve internal processes, we have
                the expertise to deliver a mobile application that meets your
                specific business needs.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80"
                alt="Mobile App Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Mobile Development Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                  title: "iOS App Development",
                  description:
                    "Custom applications for iPhone and iPad devices, built with Swift and following Apple's design guidelines.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                  title: "Android App Development",
                  description:
                    "Native Android applications developed with Kotlin or Java, optimized for the diverse Android device ecosystem.",
                },
                {
                  icon: <Layers className="h-10 w-10 text-blue-600" />,
                  title: "Cross-Platform Development",
                  description:
                    "Efficient development for both iOS and Android using frameworks like React Native or Flutter.",
                },
                {
                  icon: <Tablet className="h-10 w-10 text-blue-600" />,
                  title: "Tablet & Wearable Apps",
                  description:
                    "Applications optimized for tablets, smartwatches, and other connected devices.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-blue-600" />,
                  title: "App Performance Optimization",
                  description:
                    "Improving the speed, responsiveness, and efficiency of existing mobile applications.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-blue-600" />,
                  title: "App Maintenance & Support",
                  description:
                    "Ongoing maintenance, updates, and support to ensure your app remains secure and compatible with new OS versions.",
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
              Our Mobile App Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description:
                    "Understanding your business goals, target users, and app requirements.",
                },
                {
                  step: "2",
                  title: "UI/UX Design",
                  description:
                    "Creating intuitive user interfaces and engaging user experiences.",
                },
                {
                  step: "3",
                  title: "Development",
                  description:
                    "Building the app with clean, efficient code and robust architecture.",
                },
                {
                  step: "4",
                  title: "Testing",
                  description:
                    "Rigorous testing across devices to ensure quality and performance.",
                },
                {
                  step: "5",
                  title: "Deployment & Support",
                  description:
                    "App store submission and ongoing maintenance and updates.",
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
                Ready to Build Your Mobile App?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our mobile app development
                services can help your business reach and engage customers on
                their mobile devices.
              </p>
            </div>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
                  Start Your Project
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

export default MobileDevelopmentPage;

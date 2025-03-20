import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  HelpCircle,
  Lightbulb,
  TrendingUp,
  Compass,
  FileText,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const ConsultingPage = () => {
  const services = [
    {
      icon: <Compass className="w-10 h-10 text-blue-600" />,
      title: "IT Strategy Development",
      description:
        "Strategic planning to align your technology investments with your business goals and objectives.",
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
      title: "Digital Transformation",
      description:
        "Guidance on leveraging digital technologies to transform your business processes and customer experiences.",
    },
    {
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      title: "Technology Assessment",
      description:
        "Comprehensive evaluation of your current IT infrastructure, systems, and processes to identify improvement opportunities.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-blue-600" />,
      title: "Innovation Consulting",
      description:
        "Advice on emerging technologies and how they can be applied to drive innovation in your business.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "IT Governance",
      description:
        "Development of frameworks and processes to ensure effective oversight and management of IT resources.",
    },
    {
      icon: <HelpCircle className="w-10 h-10 text-blue-600" />,
      title: "Technology Selection",
      description:
        "Expert guidance on selecting the right technologies, platforms, and vendors for your specific needs.",
    },
  ];

  const approach = [
    {
      step: "1",
      title: "Discovery",
      description:
        "We begin by understanding your business objectives, challenges, and current technology landscape through in-depth discussions and analysis.",
    },
    {
      step: "2",
      title: "Assessment",
      description:
        "Our experts evaluate your existing systems, processes, and capabilities to identify strengths, weaknesses, and opportunities for improvement.",
    },
    {
      step: "3",
      title: "Strategy Development",
      description:
        "Based on our findings, we develop a tailored strategy and roadmap that aligns technology initiatives with your business goals.",
    },
    {
      step: "4",
      title: "Implementation Planning",
      description:
        "We create detailed implementation plans, including resource requirements, timelines, and risk mitigation strategies.",
    },
    {
      step: "5",
      title: "Execution Support",
      description:
        "Our team provides guidance and support throughout the implementation process to ensure successful outcomes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Consulting Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Strategic guidance to help you navigate the complex technology
              landscape and make informed decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Expert Guidance for Technology Decisions
              </h3>
              <p className="text-gray-600 mb-4">
                In today's rapidly evolving technology landscape, making the
                right IT decisions is critical for business success. Our IT
                consulting services provide you with expert guidance to navigate
                complex technology challenges, align IT investments with
                business objectives, and drive digital transformation
                initiatives.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced consultants brings deep industry
                knowledge and technical expertise to help you develop effective
                IT strategies, evaluate technology options, and implement
                solutions that deliver measurable business value.
              </p>
              <p className="text-gray-600">
                Whether you're looking to optimize your current IT
                infrastructure, embark on a digital transformation journey, or
                need guidance on specific technology decisions, our consulting
                services provide the insights and recommendations you need to
                move forward with confidence.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                alt="IT Consulting"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our IT Consulting Services
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

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Consulting Approach
            </h3>
            <div className="relative">
              {/* Process timeline */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 transform -translate-x-1/2"></div>

              <div className="space-y-12">
                {approach.map((step, index) => (
                  <div key={index} className="relative">
                    <div className="hidden md:flex items-center justify-center absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                        {step.step}
                      </div>
                    </div>

                    <div
                      className={`md:w-5/12 ${index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} bg-white p-6 rounded-lg shadow-md border border-gray-100`}
                    >
                      <div className="md:hidden w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                        {step.step}
                      </div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-900 text-center md:text-left">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-20 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Our IT Consulting Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Industry Expertise
                </h4>
                <p className="text-gray-600">
                  Our consultants bring deep knowledge of industry-specific
                  challenges and best practices to provide relevant and
                  effective recommendations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Vendor-Neutral Advice
                </h4>
                <p className="text-gray-600">
                  We provide unbiased recommendations based on your specific
                  needs, not on vendor relationships or commissions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Practical Solutions
                </h4>
                <p className="text-gray-600">
                  Our advice is always practical and actionable, focused on
                  delivering real business value rather than theoretical
                  concepts.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your IT Strategy?
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Contact us today to schedule a consultation with our IT experts
              and discover how our consulting services can help you make better
              technology decisions.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultingPage;

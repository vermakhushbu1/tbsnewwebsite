import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import {
  BarChart,
  Search,
  Share2,
  Mail,
  PenTool,
  Megaphone,
} from "lucide-react";

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Marketing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Data-driven marketing strategies to increase your online
              visibility and attract qualified leads.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Grow Your Business with Strategic Digital Marketing
              </h3>
              <p className="text-gray-600 mb-4">
                In today's competitive digital landscape, having a strong online
                presence is essential for business success. At WebInfoTech, we
                provide comprehensive digital marketing services designed to
                help you reach your target audience, build brand awareness, and
                drive conversions.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of marketing experts combines data-driven strategies
                with creative execution to deliver measurable results for your
                business. We take the time to understand your industry,
                competitors, and business goals to create customized marketing
                campaigns that align with your objectives.
              </p>
              <p className="text-gray-600">
                Whether you're looking to increase website traffic, generate
                more leads, or improve your online reputation, our digital
                marketing services can help you achieve your goals and maximize
                your return on investment.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Digital Marketing"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Digital Marketing Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="h-10 w-10 text-blue-600" />,
                  title: "Search Engine Optimization (SEO)",
                  description:
                    "Improve your website's visibility in search engine results and drive organic traffic through keyword optimization, technical SEO, and content strategy.",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-blue-600" />,
                  title: "Pay-Per-Click Advertising (PPC)",
                  description:
                    "Drive targeted traffic to your website through strategic paid advertising campaigns on Google, Bing, and other platforms.",
                },
                {
                  icon: <Share2 className="h-10 w-10 text-blue-600" />,
                  title: "Social Media Marketing",
                  description:
                    "Build brand awareness, engage with your audience, and drive website traffic through effective social media strategies and campaigns.",
                },
                {
                  icon: <Mail className="h-10 w-10 text-blue-600" />,
                  title: "Email Marketing",
                  description:
                    "Nurture leads and build customer loyalty through personalized email campaigns that deliver relevant content to your audience.",
                },
                {
                  icon: <PenTool className="h-10 w-10 text-blue-600" />,
                  title: "Content Marketing",
                  description:
                    "Create valuable, relevant content that attracts and engages your target audience while establishing your brand as an industry authority.",
                },
                {
                  icon: <Megaphone className="h-10 w-10 text-blue-600" />,
                  title: "Online Reputation Management",
                  description:
                    "Monitor and improve your brand's online reputation through review management, social listening, and strategic content creation.",
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
              Our Digital Marketing Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Research & Analysis",
                  description:
                    "We analyze your industry, competitors, target audience, and current marketing performance to identify opportunities.",
                },
                {
                  step: "2",
                  title: "Strategy Development",
                  description:
                    "We create a customized marketing strategy aligned with your business goals and target audience needs.",
                },
                {
                  step: "3",
                  title: "Implementation",
                  description:
                    "Our team executes the strategy across relevant channels, creating compelling content and campaigns.",
                },
                {
                  step: "4",
                  title: "Monitoring & Optimization",
                  description:
                    "We continuously track performance, analyze results, and optimize campaigns to maximize ROI.",
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
                Ready to Boost Your Online Presence?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our digital marketing services
                can help your business reach more customers and achieve your
                growth objectives.
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

export default DigitalMarketingPage;

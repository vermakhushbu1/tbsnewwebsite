import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button } from "../../ui/button";
import { Link } from "react-router-dom";
import {
  Search,
  BarChart,
  Globe,
  FileText,
  Megaphone,
  Layers,
} from "lucide-react";

const SEOOptimizationPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              SEO Optimization Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Improve your search engine rankings and drive organic traffic to
              your website.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Boost Your Online Visibility with Strategic SEO
              </h3>
              <p className="text-gray-600 mb-4">
                In today's digital landscape, appearing at the top of search
                engine results is crucial for driving organic traffic to your
                website and growing your business. At WebInfoTech, we provide
                comprehensive SEO services designed to improve your search
                engine rankings and increase your online visibility.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of SEO experts uses data-driven strategies and industry
                best practices to optimize your website for search engines while
                ensuring a great user experience. We take a holistic approach to
                SEO, addressing technical issues, on-page optimization, content
                strategy, and off-page factors to achieve sustainable results.
              </p>
              <p className="text-gray-600">
                Whether you're looking to improve your local search presence,
                compete for competitive keywords, or recover from a Google
                penalty, our SEO services can help you achieve your goals and
                drive more qualified traffic to your website.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80"
                alt="SEO Optimization"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our SEO Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Search className="h-10 w-10 text-blue-600" />,
                  title: "SEO Audit & Strategy",
                  description:
                    "Comprehensive analysis of your website's current SEO performance and development of a customized strategy to improve rankings.",
                },
                {
                  icon: <Globe className="h-10 w-10 text-blue-600" />,
                  title: "On-Page SEO",
                  description:
                    "Optimization of your website's content, meta tags, headings, and internal linking structure to improve search engine visibility.",
                },
                {
                  icon: <Layers className="h-10 w-10 text-blue-600" />,
                  title: "Technical SEO",
                  description:
                    "Addressing technical issues that affect search engine crawling and indexing, such as site speed, mobile-friendliness, and structured data.",
                },
                {
                  icon: <FileText className="h-10 w-10 text-blue-600" />,
                  title: "Content Strategy & Creation",
                  description:
                    "Development of SEO-optimized content that attracts your target audience and satisfies search intent.",
                },
                {
                  icon: <Megaphone className="h-10 w-10 text-blue-600" />,
                  title: "Off-Page SEO & Link Building",
                  description:
                    "Building high-quality backlinks and improving your website's authority through strategic outreach and content promotion.",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-blue-600" />,
                  title: "SEO Reporting & Analytics",
                  description:
                    "Regular monitoring and reporting on your SEO performance, including rankings, traffic, and conversions.",
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
              Our SEO Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                {
                  step: "1",
                  title: "Audit & Analysis",
                  description:
                    "Comprehensive evaluation of your website's current SEO performance and competitive landscape.",
                },
                {
                  step: "2",
                  title: "Keyword Research",
                  description:
                    "Identifying valuable keywords that your target audience is searching for.",
                },
                {
                  step: "3",
                  title: "Strategy Development",
                  description:
                    "Creating a customized SEO plan based on audit findings and business goals.",
                },
                {
                  step: "4",
                  title: "Implementation",
                  description:
                    "Executing on-page, technical, and off-page optimizations according to the strategy.",
                },
                {
                  step: "5",
                  title: "Monitoring & Refinement",
                  description:
                    "Tracking performance and continuously refining the strategy for optimal results.",
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
                Ready to Improve Your Search Rankings?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our SEO optimization services
                can help your business improve its online visibility and drive
                more organic traffic to your website.
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

export default SEOOptimizationPage;

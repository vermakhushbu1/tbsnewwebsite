import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Smartphone, Tablet, Monitor, Layout, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ResponsiveWebDesigningPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Responsive Web Designing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Create seamless user experiences across all devices with our
              expert responsive web design solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Responsive Design for the Modern Web
              </h3>
              <p className="text-gray-600 mb-4">
                In today's multi-device world, having a website that adapts
                seamlessly to different screen sizes is no longer optional—it's
                essential. At WebInfoTech, we specialize in creating responsive
                websites that provide an optimal viewing and interaction
                experience across desktops, tablets, and smartphones.
              </p>
              <p className="text-gray-600 mb-4">
                Our responsive web design approach ensures that your site's
                layout, images, and functionality automatically adjust to fit
                the screen they're being viewed on, maintaining usability and
                visual appeal regardless of the device. This not only improves
                user experience but also boosts your search engine rankings, as
                Google prioritizes mobile-friendly websites.
              </p>
              <p className="text-gray-600">
                Whether you need a new responsive website built from scratch or
                want to make your existing site mobile-friendly, our team of
                skilled designers and developers can deliver a solution that
                meets your business needs and exceeds user expectations.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1616469829941-c7200edec809?w=800&q=80"
                alt="Responsive Web Design"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Responsive Web Design Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Layout className="h-10 w-10 text-blue-600" />,
                  title: "Responsive Website Design",
                  description:
                    "Custom website designs that automatically adapt to provide optimal viewing and interaction experience across all devices.",
                },
                {
                  icon: <Smartphone className="h-10 w-10 text-blue-600" />,
                  title: "Mobile-First Design",
                  description:
                    "Design approach that prioritizes the mobile experience first, then scales up to larger screens for comprehensive usability.",
                },
                {
                  icon: <Code className="h-10 w-10 text-blue-600" />,
                  title: "Responsive Development",
                  description:
                    "Expert coding using HTML5, CSS3, and JavaScript to implement responsive designs with clean, efficient code.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-blue-600" />,
                  title: "Performance Optimization",
                  description:
                    "Optimization of responsive websites for fast loading times across all devices, even on slower mobile connections.",
                },
                {
                  icon: <Tablet className="h-10 w-10 text-blue-600" />,
                  title: "Responsive Retrofit",
                  description:
                    "Transformation of existing non-responsive websites into mobile-friendly versions without complete redesign.",
                },
                {
                  icon: <Monitor className="h-10 w-10 text-blue-600" />,
                  title: "Cross-Browser Compatibility",
                  description:
                    "Ensuring your responsive website works flawlessly across all major browsers and devices for consistent user experience.",
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
              Benefits of Responsive Web Design
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  For Your Business
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Increased reach to users on all devices and screen sizes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Improved search engine rankings due to Google's
                      mobile-first indexing
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Higher conversion rates from mobile and tablet users
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Reduced bounce rates as users find your site easy to
                      navigate
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Cost-effective maintenance with a single website instead
                      of separate mobile and desktop versions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Future-proofing your website for new devices and screen
                      sizes
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4 text-gray-900">
                  For Your Users
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Seamless experience when switching between devices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      No need to zoom, scroll horizontally, or struggle with
                      tiny text
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Faster page loading times with optimized responsive
                      designs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Easier navigation and interaction with touch-friendly
                      elements on mobile
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Consistent brand experience regardless of how they access
                      your site
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>
                      Reduced frustration and increased satisfaction with your
                      website
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Responsive Design Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center text-gray-900">
                  Research & Planning
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Understanding your business goals and target audience
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Analyzing user behavior across different devices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Defining content priorities for different screen sizes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Creating information architecture and user flows
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center text-gray-900">
                  Design & Development
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Creating responsive wireframes and prototypes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Designing fluid layouts that adapt to different screens
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Implementing with clean, semantic HTML and CSS</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>
                      Optimizing images and media for responsive display
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="text-xl font-semibold mb-2 text-center text-gray-900">
                  Testing & Optimization
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Testing on real devices and screen sizes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Ensuring cross-browser compatibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Optimizing performance and loading speed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Refining based on user feedback and analytics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready for a Responsive Website That Works Everywhere?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our responsive web design
                services can help your business provide an exceptional user
                experience across all devices and screen sizes.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResponsiveWebDesigningPage;

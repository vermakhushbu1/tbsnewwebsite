import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Palette, Image, Layout, Layers, PenTool, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const GraphicsDesigningPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Graphics Designing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Captivating visual designs that communicate your brand message and
              leave a lasting impression.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Elevate Your Brand with Professional Design
              </h3>
              <p className="text-gray-600 mb-4">
                In today's visually-driven world, compelling graphic design is
                essential for making your brand stand out and connecting with
                your audience. At WebInfoTech, we combine creativity with
                strategic thinking to create designs that not only look stunning
                but also effectively communicate your brand message.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of talented designers brings expertise in various
                design disciplines, from brand identity and print design to
                digital graphics and UI/UX design. We work closely with you to
                understand your brand, goals, and target audience, ensuring that
                every design element serves a purpose and contributes to your
                overall business objectives.
              </p>
              <p className="text-gray-600">
                Whether you need a complete brand overhaul or specific design
                assets for a campaign, our graphics designing services can help
                you create a cohesive and impactful visual presence across all
                touchpoints.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                alt="Graphics Design"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Graphics Design Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Palette className="h-10 w-10 text-blue-600" />,
                  title: "Brand Identity Design",
                  description:
                    "Comprehensive brand identity packages including logos, color palettes, typography, and brand guidelines to establish a cohesive visual identity.",
                },
                {
                  icon: <Layout className="h-10 w-10 text-blue-600" />,
                  title: "Print Design",
                  description:
                    "Professional design for business cards, brochures, flyers, posters, packaging, and other print materials that make a lasting impression.",
                },
                {
                  icon: <Monitor className="h-10 w-10 text-blue-600" />,
                  title: "Digital Graphics",
                  description:
                    "Eye-catching graphics for websites, social media, email campaigns, and digital advertising that drive engagement and conversions.",
                },
                {
                  icon: <Image className="h-10 w-10 text-blue-600" />,
                  title: "Marketing Collateral",
                  description:
                    "Compelling visual assets for marketing campaigns, presentations, infographics, and promotional materials aligned with your brand strategy.",
                },
                {
                  icon: <Layers className="h-10 w-10 text-blue-600" />,
                  title: "UI/UX Design",
                  description:
                    "User-centered interface and experience design for websites, applications, and digital products that enhance usability and satisfaction.",
                },
                {
                  icon: <PenTool className="h-10 w-10 text-blue-600" />,
                  title: "Illustration & Custom Graphics",
                  description:
                    "Unique illustrations, icons, and custom graphics that add personality to your brand and help communicate complex ideas visually.",
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Discovery",
                  description:
                    "We begin by understanding your brand, goals, target audience, and design requirements through in-depth consultation.",
                },
                {
                  step: "2",
                  title: "Concept Development",
                  description:
                    "Our designers create initial concepts and ideas based on research and strategic insights aligned with your objectives.",
                },
                {
                  step: "3",
                  title: "Design & Refinement",
                  description:
                    "We develop the chosen concepts into comprehensive designs, refining them based on your feedback and requirements.",
                },
                {
                  step: "4",
                  title: "Delivery & Implementation",
                  description:
                    "Final designs are delivered in appropriate formats for various applications, with support for implementation as needed.",
                },
              ].map((process, index) => (
                <div
                  key={index}
                  className="bg-blue-50 p-6 rounded-lg text-center"
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h4 className="text-xl font-semibold mb-4 text-center text-gray-900">
                Tools We Use
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    Adobe Creative Suite (Photoshop, Illustrator, InDesign)
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Figma</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Sketch</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Procreate</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Affinity Designer</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Canva Pro</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h4 className="text-xl font-semibold mb-4 text-center text-gray-900">
                File Formats We Deliver
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Vector files (AI, EPS, SVG)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Raster files (JPG, PNG, TIFF)</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Print-ready PDFs</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Web-optimized graphics</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Source files</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Editable templates</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <h4 className="text-xl font-semibold mb-4 text-center text-gray-900">
                Why Choose Us
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Experienced design team with diverse expertise</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>
                    Strategic approach to design that supports business goals
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Collaborative process with regular client input</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Attention to detail and commitment to quality</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Timely delivery and responsive communication</span>
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Comprehensive design solutions for all needs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Visual Identity?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our graphics designing services
                can help elevate your brand and create impactful visual
                communications that resonate with your audience.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Start Your Design Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GraphicsDesigningPage;

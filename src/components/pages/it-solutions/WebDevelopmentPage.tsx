import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Globe,
  ShoppingCart,
  Layout,
  Code,
  Smartphone,
  Search,
} from "lucide-react";
import { Link } from "react-router-dom";

const WebDevelopmentPage = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-blue-600" />,
      title: "Corporate Websites",
      description:
        "Professional, responsive websites that showcase your brand identity and effectively communicate your value proposition.",
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-blue-600" />,
      title: "E-Commerce Solutions",
      description:
        "Custom online stores with secure payment processing, inventory management, and seamless user experience.",
    },
    {
      icon: <Layout className="h-10 w-10 text-blue-600" />,
      title: "Web Applications",
      description:
        "Powerful, feature-rich web applications that automate processes, improve efficiency, and enhance user engagement.",
    },
    {
      icon: <Code className="h-10 w-10 text-blue-600" />,
      title: "Custom CMS Development",
      description:
        "Tailored content management systems that make it easy to update and manage your website content.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-600" />,
      title: "Responsive Web Design",
      description:
        "Websites that provide optimal viewing and interaction experience across all devices and screen sizes.",
    },
    {
      icon: <Search className="h-10 w-10 text-blue-600" />,
      title: "SEO-Friendly Development",
      description:
        "Websites built with search engine optimization in mind to improve visibility and organic traffic.",
    },
  ];

  const technologies = [
    {
      category: "Frontend",
      items: [
        "React",
        "Angular",
        "Vue.js",
        "Next.js",
        "HTML5/CSS3",
        "JavaScript/TypeScript",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Python/Django", "PHP/Laravel", "Java", ".NET"],
    },
    {
      category: "CMS",
      items: ["WordPress", "Drupal", "Shopify", "Magento", "Custom CMS"],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description:
        "Understanding your business goals, target audience, and website requirements.",
    },
    {
      step: "2",
      title: "Planning",
      description:
        "Defining the site architecture, features, and creating a development roadmap.",
    },
    {
      step: "3",
      title: "Design",
      description:
        "Creating wireframes and visual designs that align with your brand identity.",
    },
    {
      step: "4",
      title: "Development",
      description:
        "Building the website using modern technologies and best practices.",
    },
    {
      step: "5",
      title: "Testing",
      description:
        "Rigorous quality assurance across browsers, devices, and user scenarios.",
    },
    {
      step: "6",
      title: "Launch & Support",
      description:
        "Deploying your website and providing ongoing maintenance and support.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Web Development Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom websites and web applications that drive business growth
              and deliver exceptional user experiences
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Elevate Your Online Presence
              </h3>
              <p className="text-gray-600 mb-4">
                In today's digital landscape, your website is often the first
                point of contact between your business and potential customers.
                At Tbs Web Technology, we specialize in creating websites and
                web applications that not only look impressive but also deliver
                tangible business results.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced web developers combines technical
                expertise with creative design thinking to build digital
                experiences that engage visitors, communicate your value
                proposition, and convert prospects into customers.
              </p>
              <p className="text-gray-600">
                Whether you need a corporate website, e-commerce platform,
                custom web application, or a complete redesign of your existing
                site, we have the skills and experience to bring your vision to
                life while ensuring performance, security, and scalability.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80"
                alt="Web Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Web Development Services
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

          <div className="mb-20 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Technologies We Use
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4 text-gray-900 text-center">
                    {tech.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Web Development Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 relative"
                >
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm absolute -top-5 left-1/2 transform -translate-x-1/2">
                    {step.step}
                  </div>
                  <div className="pt-6">
                    <h4 className="text-lg font-semibold mb-2 text-center">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm text-center">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Us for Web Development
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Technical Excellence
                </h4>
                <p className="text-gray-600">
                  Our developers stay at the forefront of web technologies and
                  best practices to deliver high-quality, future-proof
                  solutions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  User-Centered Design
                </h4>
                <p className="text-gray-600">
                  We prioritize the user experience, creating intuitive
                  interfaces that make it easy for visitors to find information
                  and take action.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Performance Optimization
                </h4>
                <p className="text-gray-600">
                  We build websites that load quickly, respond smoothly, and
                  provide excellent performance across all devices and
                  connection speeds.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  SEO-Friendly Development
                </h4>
                <p className="text-gray-600">
                  Our websites are built with search engine optimization in
                  mind, helping you improve visibility and attract organic
                  traffic.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Security Focus
                </h4>
                <p className="text-gray-600">
                  We implement robust security measures to protect your website
                  and user data from threats and vulnerabilities.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Ongoing Support
                </h4>
                <p className="text-gray-600">
                  We provide reliable maintenance and support services to ensure
                  your website remains secure, up-to-date, and performing
                  optimally.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Web Project?
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Contact us today to discuss your web development needs and
              discover how we can help you create a powerful online presence.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;

import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Smartphone,
  Tablet,
  Layers,
  Zap,
  Shield,
  BarChart,
} from "lucide-react";
import { Link } from "react-router-dom";

const MobileAppDevelopmentPage = () => {
  const services = [
    {
      icon: <Smartphone className="h-10 w-10 text-blue-600" />,
      title: "Native App Development",
      description:
        "High-performance native applications for iOS and Android platforms that leverage the full capabilities of each device.",
    },
    {
      icon: <Layers className="h-10 w-10 text-blue-600" />,
      title: "Cross-Platform Development",
      description:
        "Cost-effective solutions that work seamlessly across multiple platforms while maintaining a consistent user experience.",
    },
    {
      icon: <Tablet className="h-10 w-10 text-blue-600" />,
      title: "Tablet & Wearable Apps",
      description:
        "Specialized applications designed for tablets, smartwatches, and other connected devices with optimized interfaces.",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "App Modernization",
      description:
        "Transform legacy mobile applications into modern, feature-rich solutions with improved performance and user experience.",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-600" />,
      title: "App Security",
      description:
        "Implement robust security measures to protect sensitive data and ensure compliance with industry regulations.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: "App Analytics & Optimization",
      description:
        "Data-driven insights and continuous optimization to improve app performance, user engagement, and conversion rates.",
    },
  ];

  const technologies = [
    {
      category: "Native Development",
      items: ["Swift", "Objective-C", "Java", "Kotlin"],
    },
    {
      category: "Cross-Platform",
      items: ["React Native", "Flutter", "Xamarin", "Ionic"],
    },
    {
      category: "Backend & APIs",
      items: ["Node.js", "Python", "Java", "RESTful APIs", "GraphQL"],
    },
    {
      category: "Database",
      items: ["Firebase", "MongoDB", "MySQL", "PostgreSQL", "Realm"],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description:
        "Understanding your business objectives, target audience, and app requirements.",
    },
    {
      step: "2",
      title: "UX/UI Design",
      description:
        "Creating intuitive user experiences and visually appealing interfaces.",
    },
    {
      step: "3",
      title: "Development",
      description:
        "Building the application using the most appropriate technologies and frameworks.",
    },
    {
      step: "4",
      title: "Testing",
      description:
        "Rigorous quality assurance across devices and operating systems.",
    },
    {
      step: "5",
      title: "Deployment",
      description: "Publishing your app to the relevant app stores.",
    },
    {
      step: "6",
      title: "Support & Maintenance",
      description:
        "Ongoing updates, performance monitoring, and technical support.",
    },
  ];

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
              Custom mobile applications that engage users and drive business
              growth across platforms
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Transform Your Business with Mobile Innovation
              </h3>
              <p className="text-gray-600 mb-4">
                In today's mobile-first world, a powerful mobile presence is
                essential for businesses looking to engage customers, streamline
                operations, and stay competitive. At Tbs Web Technology, we
                specialize in developing custom mobile applications that deliver
                exceptional user experiences while achieving your business
                objectives.
              </p>
              <p className="text-gray-600 mb-4">
                Our team of experienced mobile developers combines technical
                expertise with creative problem-solving to build applications
                that stand out in crowded app marketplaces. Whether you need a
                native iOS or Android app, a cross-platform solution, or want to
                modernize an existing application, we have the skills and
                experience to bring your vision to life.
              </p>
              <p className="text-gray-600">
                We follow a user-centered design approach and agile development
                methodology to ensure your app not only looks great but also
                delivers real value to your users and your business.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80"
                alt="Mobile App Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Mobile App Development Services
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
              Our Mobile App Development Process
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
              Benefits of Custom Mobile Apps
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Enhanced Customer Engagement
                </h4>
                <p className="text-gray-600">
                  Mobile apps provide a direct channel to engage with your
                  customers, offering personalized experiences and instant
                  notifications that keep your brand top-of-mind.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Improved Operational Efficiency
                </h4>
                <p className="text-gray-600">
                  Streamline internal processes, enable remote work, and
                  automate routine tasks with custom mobile solutions tailored
                  to your business workflows.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Valuable Data Insights
                </h4>
                <p className="text-gray-600">
                  Gather valuable user data and analytics to better understand
                  customer behavior, preferences, and needs, enabling
                  data-driven business decisions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Competitive Advantage
                </h4>
                <p className="text-gray-600">
                  Stand out from competitors with innovative mobile experiences
                  that showcase your brand's unique value proposition and
                  commitment to customer service.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  New Revenue Streams
                </h4>
                <p className="text-gray-600">
                  Create new opportunities for monetization through in-app
                  purchases, subscription models, or premium features that add
                  value for your customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  Brand Loyalty
                </h4>
                <p className="text-gray-600">
                  Foster stronger relationships with your customers through
                  consistent, high-quality mobile experiences that keep them
                  coming back to your brand.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Build Your Mobile App?
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Contact us today to discuss your mobile app idea and discover how
              our development expertise can help bring your vision to life.
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

export default MobileAppDevelopmentPage;

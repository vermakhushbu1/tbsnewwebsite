import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  FileText,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const CybersecurityPage = () => {
  const services = [
    {
      icon: <Shield className="w-10 h-10 text-blue-600" />,
      title: "Security Assessment",
      description:
        "Comprehensive evaluation of your security posture to identify vulnerabilities and recommend improvements.",
    },
    {
      icon: <Lock className="w-10 h-10 text-blue-600" />,
      title: "Network Security",
      description:
        "Protection of your network infrastructure with advanced firewalls, intrusion detection, and prevention systems.",
    },
    {
      icon: <Eye className="w-10 h-10 text-blue-600" />,
      title: "Security Monitoring",
      description:
        "24/7 monitoring of your systems to detect and respond to security threats in real-time.",
    },
    {
      icon: <AlertTriangle className="w-10 h-10 text-blue-600" />,
      title: "Incident Response",
      description:
        "Rapid response to security incidents with a focus on minimizing damage and restoring normal operations.",
    },
    {
      icon: <FileText className="w-10 h-10 text-blue-600" />,
      title: "Compliance Management",
      description:
        "Ensuring your security practices meet industry regulations and standards such as GDPR, HIPAA, and PCI DSS.",
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Security Training",
      description:
        "Education and awareness programs to help your employees recognize and avoid security threats.",
    },
  ];

  const threatStats = [
    {
      stat: "300%",
      description: "Increase in ransomware attacks since 2020",
    },
    {
      stat: "$4.35M",
      description: "Average cost of a data breach in 2022",
    },
    {
      stat: "95%",
      description: "Of breaches are caused by human error",
    },
    {
      stat: "60%",
      description:
        "Of small businesses close within 6 months of a cyber attack",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cybersecurity Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect your business from evolving cyber threats with our
              comprehensive security services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Safeguarding Your Digital Assets
              </h3>
              <p className="text-gray-600 mb-4">
                In today's digital landscape, cybersecurity is not just an IT
                concern—it's a business imperative. As cyber threats become more
                sophisticated and prevalent, organizations of all sizes need
                robust security measures to protect their sensitive data,
                maintain customer trust, and ensure business continuity.
              </p>
              <p className="text-gray-600 mb-4">
                At WebInfoTech, we provide comprehensive cybersecurity solutions
                tailored to your specific business needs and risk profile. Our
                team of security experts employs a proactive approach to
                identify vulnerabilities, implement protective measures, and
                respond effectively to security incidents.
              </p>
              <p className="text-gray-600">
                We understand that effective security requires a balance between
                protection and usability. Our solutions are designed to
                safeguard your digital assets while enabling your business to
                operate efficiently and innovate confidently in the digital
                realm.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80"
                alt="Cybersecurity"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20 bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              The Growing Cyber Threat Landscape
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {threatStats.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {item.stat}
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Cybersecurity Services
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
              Our Security Approach
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 text-center">
                  Prevent
                </h4>
                <p className="text-gray-600">
                  We implement proactive security measures to prevent breaches,
                  including advanced firewalls, endpoint protection, and secure
                  configuration management.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 text-center">
                  Detect
                </h4>
                <p className="text-gray-600">
                  Our continuous monitoring and threat intelligence services
                  help detect security incidents quickly, allowing for rapid
                  response and mitigation.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <h4 className="text-xl font-semibold mb-2 text-gray-900 text-center">
                  Respond
                </h4>
                <p className="text-gray-600">
                  When security incidents occur, our incident response team
                  works quickly to contain the threat, minimize damage, and
                  restore normal operations.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-lg p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Protect Your Business Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto">
              Don't wait for a security breach to take action. Contact us for a
              security assessment and learn how our cybersecurity solutions can
              protect your business from evolving threats.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 font-medium py-3 px-6 rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              Schedule Security Assessment
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CybersecurityPage;

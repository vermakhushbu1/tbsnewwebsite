import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const CaseStudiesPage = () => {
  const categories = [
    "All",
    "Web Development",
    "Mobile Apps",
    "Cloud Solutions",
    "Cybersecurity",
    "Digital Transformation",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const caseStudies = [
    {
      id: 1,
      title: "E-Commerce Platform Migration to Cloud",
      category: "Cloud Solutions",
      client: "RetailTech Inc.",
      challenge:
        "Migrating a legacy e-commerce platform to a scalable cloud infrastructure while maintaining 24/7 operations.",
      solution:
        "Implemented a phased migration strategy using AWS, with containerization and microservices architecture.",
      results:
        "50% reduction in infrastructure costs, 99.9% uptime, and 30% faster page load times.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
    },
    {
      id: 2,
      title: "Enterprise-Level Security Implementation",
      category: "Cybersecurity",
      client: "FinServe Corporation",
      challenge:
        "Strengthening security posture against sophisticated cyber threats while complying with financial regulations.",
      solution:
        "Deployed a comprehensive security framework with advanced threat detection, encryption, and employee training.",
      results:
        "Zero security breaches, successful regulatory audit, and 40% reduction in vulnerability incidents.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80",
    },
    {
      id: 3,
      title: "Mobile Banking Application Development",
      category: "Mobile Apps",
      client: "NextGen Bank",
      challenge:
        "Creating a secure, user-friendly mobile banking application with real-time transaction capabilities.",
      solution:
        "Developed a native mobile application with biometric authentication, real-time notifications, and intuitive UI/UX.",
      results:
        "200,000+ downloads in first quarter, 4.8/5 app store rating, and 35% increase in mobile banking adoption.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
    },
    {
      id: 4,
      title: "Healthcare Provider Digital Transformation",
      category: "Digital Transformation",
      client: "MediCare Health Network",
      challenge:
        "Modernizing legacy systems and digitizing patient care processes across a network of 12 hospitals.",
      solution:
        "Implemented an integrated digital ecosystem with electronic health records, telemedicine, and data analytics.",
      results:
        "60% reduction in administrative tasks, 25% improvement in patient satisfaction, and enhanced data-driven decision making.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80",
    },
    {
      id: 5,
      title: "Manufacturing Process Automation",
      category: "Digital Transformation",
      client: "IndusTech Manufacturing",
      challenge:
        "Optimizing production processes and reducing operational inefficiencies in a large manufacturing facility.",
      solution:
        "Designed and implemented IoT sensors, automated workflow systems, and real-time monitoring dashboards.",
      results:
        "22% increase in production efficiency, 15% reduction in operational costs, and improved quality control.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    },
    {
      id: 6,
      title: "Corporate Website Redesign & SEO",
      category: "Web Development",
      client: "Global Consulting Group",
      challenge:
        "Revamping an outdated corporate website with poor user experience and low search engine visibility.",
      solution:
        "Developed a modern, responsive website with optimized content structure, technical SEO, and integrated analytics.",
      results:
        "156% increase in organic traffic, 43% lower bounce rate, and 75% improvement in lead generation.",
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&q=80",
    },
  ];

  const filteredCaseStudies =
    activeCategory === "All"
      ? caseStudies
      : caseStudies.filter((study) => study.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore how we've helped businesses across various industries
              overcome challenges and achieve their goals through innovative
              technology solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full ${activeCategory === category ? "bg-blue-600 hover:bg-blue-700" : "text-gray-700 hover:text-blue-600"}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      {study.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {study.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold">Client:</span>{" "}
                    {study.client}
                  </p>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-600">
                      <span className="font-semibold">Challenge:</span>{" "}
                      {study.challenge}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Solution:</span>{" "}
                      {study.solution}
                    </p>
                    <p className="text-gray-600">
                      <span className="font-semibold">Results:</span>{" "}
                      {study.results}
                    </p>
                  </div>
                  <Link to={`/case-studies/${study.id}`}>
                    <Button variant="link" className="text-blue-600 p-0">
                      Read Full Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No case studies found in this category. Please select another
                category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudiesPage;

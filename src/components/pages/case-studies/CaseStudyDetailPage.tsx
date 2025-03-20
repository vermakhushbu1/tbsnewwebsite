import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button } from "../../ui/button";
import { ArrowLeft, CheckCircle, Building, Calendar, Tag } from "lucide-react";

const CaseStudyDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API or database
  // For demo purposes, we're using a static case study
  const caseStudy = {
    id: id || "1",
    title: "E-Commerce Platform Migration to Cloud",
    category: "Cloud Solutions",
    client: "RetailTech Inc.",
    industry: "Retail / E-Commerce",
    duration: "6 months",
    completionDate: "March 2023",
    challenge:
      "RetailTech Inc., a growing online retailer with over 50,000 products and 500,000 monthly visitors, was facing significant challenges with their legacy e-commerce platform. As their business grew, they experienced frequent downtime during peak shopping periods, slow page load times, and difficulty scaling to meet increasing demand. Their on-premises infrastructure required constant maintenance and significant capital expenditure for hardware upgrades. Additionally, their development team struggled with deploying new features quickly due to the monolithic architecture of their existing platform.",
    solution:
      "After a thorough assessment of RetailTech's business requirements and technical infrastructure, we designed and implemented a comprehensive cloud migration strategy using AWS. Our approach included:\n\n1. **Phased Migration Strategy**: We developed a carefully planned migration roadmap that allowed for minimal disruption to the business while transitioning to the cloud.\n\n2. **Microservices Architecture**: We refactored the monolithic application into microservices, allowing for greater scalability, easier maintenance, and faster feature deployment.\n\n3. **Containerization with Docker and Kubernetes**: We containerized the application components and implemented Kubernetes for orchestration, enabling efficient resource utilization and simplified deployment.\n\n4. **Auto-scaling Configuration**: We set up auto-scaling groups to automatically adjust capacity based on traffic patterns, ensuring optimal performance during peak shopping periods.\n\n5. **Content Delivery Network (CDN)**: We implemented Amazon CloudFront to cache and deliver static content, significantly improving page load times for users worldwide.\n\n6. **Database Optimization**: We migrated from a traditional relational database to a combination of Amazon RDS for structured data and DynamoDB for product catalog and user sessions, optimizing for performance and cost.\n\n7. **Comprehensive Monitoring**: We implemented a robust monitoring solution using CloudWatch, Prometheus, and Grafana to provide real-time visibility into system performance and business metrics.",
    results:
      "The cloud migration delivered significant improvements across multiple areas of RetailTech's business:\n\n1. **50% Reduction in Infrastructure Costs**: By moving to a pay-as-you-go model and optimizing resource utilization, RetailTech was able to cut their infrastructure costs in half.\n\n2. **99.9% Uptime**: The new cloud infrastructure provided exceptional reliability, even during Black Friday and holiday shopping peaks.\n\n3. **30% Faster Page Load Times**: The combination of CDN implementation, database optimization, and auto-scaling capabilities resulted in significantly improved user experience.\n\n4. **60% Faster Feature Deployment**: The microservices architecture and improved CI/CD pipeline allowed the development team to deploy new features and updates much more quickly.\n\n5. **Scalability for Growth**: The platform can now easily handle 3x the current traffic without performance degradation, supporting RetailTech's ambitious growth plans.\n\n6. **Improved Security Posture**: Implementation of AWS security best practices and automated compliance checks strengthened the overall security of the platform.",
    testimonial: {
      quote:
        "The cloud migration project has been transformative for our business. Not only are we saving on infrastructure costs, but our platform is now more reliable, faster, and easier to enhance with new features. The expertise and methodical approach of the WebInfoTech team made what could have been a risky transition into a smooth and successful project.",
      author: "Jennifer Martinez",
      position: "CTO, RetailTech Inc.",
    },
    keyTechnologies: [
      "AWS (EC2, S3, RDS, DynamoDB, CloudFront)",
      "Docker",
      "Kubernetes",
      "Microservices Architecture",
      "CI/CD Pipeline (Jenkins)",
      "Terraform for Infrastructure as Code",
    ],
    images: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
    ],
    relatedCaseStudies: [
      {
        id: "2",
        title: "Enterprise-Level Security Implementation",
        category: "Cybersecurity",
        client: "FinServe Corporation",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80",
      },
      {
        id: "3",
        title: "Mobile Banking Application Development",
        category: "Mobile Apps",
        client: "NextGen Bank",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&q=80",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <article className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            to="/case-studies"
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Case Studies
          </Link>

          <span className="text-sm font-medium text-blue-600 mb-2 block">
            {caseStudy.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {caseStudy.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6">
            <div className="flex items-center mr-6 mb-2">
              <Building className="w-4 h-4 mr-2" />
              <span>Client: {caseStudy.client}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Tag className="w-4 h-4 mr-2" />
              <span>Industry: {caseStudy.industry}</span>
            </div>
            <div className="flex items-center mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>Completed: {caseStudy.completionDate}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={caseStudy.images[0]}
            alt={caseStudy.title}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Challenge
              </h2>
              <p className="text-gray-700 whitespace-pre-line">
                {caseStudy.challenge}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Solution
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 whitespace-pre-line">
                  {caseStudy.solution}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 whitespace-pre-line">
                  {caseStudy.results}
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Details
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 mr-2">
                    Client:
                  </span>
                  <span className="text-gray-600">{caseStudy.client}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 mr-2">
                    Industry:
                  </span>
                  <span className="text-gray-600">{caseStudy.industry}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 mr-2">
                    Duration:
                  </span>
                  <span className="text-gray-600">{caseStudy.duration}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium text-gray-700 mr-2">
                    Completed:
                  </span>
                  <span className="text-gray-600">
                    {caseStudy.completionDate}
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Technologies
              </h3>
              <ul className="space-y-2">
                {caseStudy.keyTechnologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Client Testimonial
          </h2>
          <blockquote className="text-lg text-gray-700 italic mb-4">
            "{caseStudy.testimonial.quote}"
          </blockquote>
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3">
              <span className="text-blue-700 font-bold">
                {caseStudy.testimonial.author.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-semibold text-gray-900">
                {caseStudy.testimonial.author}
              </p>
              <p className="text-gray-600 text-sm">
                {caseStudy.testimonial.position}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Related Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudy.relatedCaseStudies.map((study) => (
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
                  <Link to={`/case-studies/${study.id}`}>
                    <Button variant="link" className="text-blue-600 p-0">
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 mb-6">
            Ready to achieve similar results for your business?
          </p>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default CaseStudyDetailPage;

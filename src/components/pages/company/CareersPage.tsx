import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button } from "../../ui/button";

const CareersPage = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Software Developer",
      department: "Engineering",
      location: "New York, NY (Hybrid)",
      type: "Full-time",
      description:
        "We're looking for an experienced software developer with expertise in modern web technologies to join our engineering team.",
      requirements: [
        "5+ years of experience in software development",
        "Proficiency in JavaScript, TypeScript, React, and Node.js",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Strong problem-solving skills and attention to detail",
        "Excellent communication and collaboration abilities",
      ],
    },
    {
      id: 2,
      title: "Cloud Solutions Architect",
      department: "IT Solutions",
      location: "Remote",
      type: "Full-time",
      description:
        "Join our cloud team to design and implement scalable, secure, and cost-effective cloud solutions for our clients.",
      requirements: [
        "7+ years of IT experience with 3+ years in cloud architecture",
        "AWS, Azure, or GCP certification",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Knowledge of containerization and orchestration technologies",
        "Strong client communication skills",
      ],
    },
    {
      id: 3,
      title: "Cybersecurity Analyst",
      department: "Security",
      location: "Chicago, IL (On-site)",
      type: "Full-time",
      description:
        "Help protect our clients' digital assets by identifying vulnerabilities, implementing security measures, and responding to incidents.",
      requirements: [
        "3+ years of experience in cybersecurity",
        "Security certifications (CISSP, CEH, or equivalent)",
        "Experience with security tools and frameworks",
        "Knowledge of compliance standards (GDPR, HIPAA, PCI DSS)",
        "Strong analytical and problem-solving skills",
      ],
    },
    {
      id: 4,
      title: "Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
      description:
        "Lead cross-functional teams to deliver complex IT projects on time, within scope, and on budget while ensuring client satisfaction.",
      requirements: [
        "5+ years of IT project management experience",
        "PMP certification preferred",
        "Experience with Agile and traditional project management methodologies",
        "Strong leadership and communication skills",
        "Ability to manage multiple projects simultaneously",
      ],
    },
    {
      id: 5,
      title: "UX/UI Designer",
      department: "Design",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      description:
        "Create intuitive and engaging user experiences for web and mobile applications that delight users and meet business objectives.",
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in design tools (Figma, Adobe XD, Sketch)",
        "Portfolio demonstrating strong design skills",
        "Understanding of user-centered design principles",
        "Experience conducting user research and usability testing",
      ],
    },
    {
      id: 6,
      title: "Business Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description:
        "Drive new business opportunities by identifying and engaging potential clients who can benefit from our IT solutions and services.",
      requirements: [
        "2+ years of sales experience, preferably in IT or B2B services",
        "Strong communication and negotiation skills",
        "Experience with CRM systems and sales methodologies",
        "Goal-oriented mindset with a track record of meeting targets",
        "Understanding of technology trends and business challenges",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Careers at WebInfoTech
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our team of passionate technology professionals and help
              shape the future of digital innovation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Work With Us
              </h3>
              <p className="text-gray-600 mb-4">
                At WebInfoTech, we believe that our success is driven by the
                talented individuals who make up our team. We're committed to
                creating an environment where innovation thrives, collaboration
                is encouraged, and personal growth is prioritized.
              </p>
              <p className="text-gray-600 mb-4">
                We offer competitive compensation, comprehensive benefits,
                flexible work arrangements, and continuous learning
                opportunities to help our employees reach their full potential.
              </p>
              <p className="text-gray-600">
                Join us and be part of a dynamic team that's solving complex
                technology challenges and making a meaningful impact for
                businesses across industries.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "💰",
                  title: "Competitive Compensation",
                  description:
                    "Salary packages that recognize your skills, experience, and contributions to our success.",
                },
                {
                  icon: "🏥",
                  title: "Health & Wellness",
                  description:
                    "Comprehensive health insurance, wellness programs, and mental health support.",
                },
                {
                  icon: "⏰",
                  title: "Flexible Work",
                  description:
                    "Remote and hybrid options with flexible schedules to support work-life balance.",
                },
                {
                  icon: "📚",
                  title: "Learning & Development",
                  description:
                    "Continuous learning opportunities, certification support, and career growth paths.",
                },
                {
                  icon: "🏖️",
                  title: "Generous PTO",
                  description:
                    "Paid time off, holidays, and parental leave to rest, recharge, and spend time with family.",
                },
                {
                  icon: "🎯",
                  title: "Meaningful Work",
                  description:
                    "Challenging projects that make a real impact for clients and advance your skills.",
                },
              ].map((benefit, index) => (
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
                  <div className="text-4xl mb-4 text-center">
                    {benefit.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-center mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-center">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Open Positions
            </h3>
            <div className="space-y-6">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900">
                        {position.title}
                      </h4>
                      <p className="text-gray-600">
                        {position.department} • {position.location} •{" "}
                        {position.type}
                      </p>
                    </div>
                    <Button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700">
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-700 mb-4">{position.description}</p>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">
                      Requirements:
                    </h5>
                    <ul className="list-disc pl-5 space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="text-gray-600">
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Don't see a position that matches your skills?
              </p>
              <Button
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Submit General Application
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;

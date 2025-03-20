import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      bio: "With over 20 years of experience in IT and business leadership, John founded WebInfoTech with a vision to help businesses leverage technology for growth.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
      department: "Leadership",
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      bio: "Sarah leads our technical strategy and innovation initiatives, bringing 15+ years of experience in software architecture and emerging technologies.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      department: "Leadership",
    },
    {
      name: "Michael Chen",
      role: "VP of Client Services",
      bio: "Michael ensures our clients receive exceptional service and strategic guidance throughout their partnership with WebInfoTech.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      department: "Leadership",
    },
    {
      name: "Emily Rodriguez",
      role: "Director of Operations",
      bio: "Emily oversees our day-to-day operations, project management processes, and continuous improvement initiatives.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      department: "Leadership",
    },
    {
      name: "David Thompson",
      role: "Lead Software Architect",
      bio: "David designs scalable and maintainable software architectures for our client projects, with expertise in cloud-native applications.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      department: "Engineering",
    },
    {
      name: "Jessica Lee",
      role: "Senior Full Stack Developer",
      bio: "Jessica specializes in building robust web applications using modern JavaScript frameworks and backend technologies.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
      department: "Engineering",
    },
    {
      name: "Robert Wilson",
      role: "DevOps Engineer",
      bio: "Robert manages our CI/CD pipelines and infrastructure automation, ensuring smooth deployments and system reliability.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
      department: "Engineering",
    },
    {
      name: "Lisa Wang",
      role: "UX/UI Designer",
      bio: "Lisa creates intuitive and engaging user experiences that balance aesthetic appeal with functional usability.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
      department: "Design",
    },
    {
      name: "James Martinez",
      role: "Cybersecurity Specialist",
      bio: "James protects our clients' digital assets through security assessments, threat monitoring, and implementing robust security measures.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      department: "Security",
    },
    {
      name: "Sophia Patel",
      role: "Cloud Solutions Architect",
      bio: "Sophia designs and implements scalable cloud infrastructures that optimize performance, security, and cost-efficiency.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sophia",
      department: "IT Solutions",
    },
    {
      name: "Alex Johnson",
      role: "Project Manager",
      bio: "Alex leads project teams to deliver solutions on time and within budget while ensuring client satisfaction and quality standards.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
      department: "Operations",
    },
    {
      name: "Olivia Brown",
      role: "Marketing Manager",
      bio: "Olivia develops and executes our marketing strategies to build brand awareness and generate leads for our services.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=olivia",
      department: "Marketing",
    },
  ];

  const departments = [
    "All",
    "Leadership",
    "Engineering",
    "Design",
    "Security",
    "IT Solutions",
    "Operations",
    "Marketing",
  ];
  const [activeDepartment, setActiveDepartment] = React.useState("All");

  const filteredMembers =
    activeDepartment === "All"
      ? teamMembers
      : teamMembers.filter((member) => member.department === activeDepartment);

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The talented professionals behind our success, dedicated to
              delivering exceptional technology solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map((department) => (
              <button
                key={department}
                onClick={() => setActiveDepartment(department)}
                className={`px-4 py-2 rounded-full transition-colors ${activeDepartment === department ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {department}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-64 bg-blue-100 flex items-center justify-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40"
                  />
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h4>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-500">{member.department}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No team members found in this department. Please select another
                department.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            We're always looking for talented individuals who are passionate
            about technology and innovation.
          </p>
          <a
            href="/company/careers"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;

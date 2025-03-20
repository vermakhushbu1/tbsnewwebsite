import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What services does Tbs Web Technology offer?",
          answer:
            "Tbs Web Technology offers a comprehensive range of IT services including software development, web and mobile app development, cloud computing solutions, cybersecurity services, IT infrastructure management, database solutions, UI/UX design, and IT consulting. We provide end-to-end technology solutions tailored to meet the specific needs of businesses across various industries.",
        },
        {
          question: "How experienced is your team?",
          answer:
            "Our team consists of highly skilled professionals with extensive experience in their respective fields. Many of our team members have 5+ years of industry experience and hold relevant certifications. We continuously invest in professional development to ensure our team stays updated with the latest technologies and best practices.",
        },
        {
          question: "What industries do you serve?",
          answer:
            "We serve a wide range of industries including healthcare, finance, retail, manufacturing, education, logistics, and more. Our diverse experience allows us to understand the unique challenges and requirements of different sectors and deliver solutions that address industry-specific needs.",
        },
        {
          question: "How do I get started with your services?",
          answer:
            "Getting started is easy! Simply contact us through our website, email, or phone. We'll schedule an initial consultation to discuss your needs and objectives. After understanding your requirements, we'll provide a proposal outlining our recommended approach, timeline, and pricing. Once approved, we'll begin the project with a kickoff meeting to align on expectations and next steps.",
        },
      ],
    },
    {
      category: "Projects & Process",
      questions: [
        {
          question: "What is your project development process?",
          answer:
            "Our development process typically follows these steps: 1) Discovery and requirements gathering, 2) Planning and solution design, 3) Development and implementation, 4) Testing and quality assurance, 5) Deployment, and 6) Post-launch support and maintenance. We use agile methodologies to ensure flexibility, transparency, and regular client feedback throughout the project.",
        },
        {
          question: "How long does a typical project take?",
          answer:
            "Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 4-6 weeks, while a complex enterprise application could take several months. During our initial consultation, we'll provide a more accurate timeline based on your specific project needs. We're committed to delivering quality results within agreed timeframes.",
        },
        {
          question: "How do you ensure project quality?",
          answer:
            "Quality is integral to our process. We implement multiple quality assurance measures including code reviews, automated testing, manual testing, performance testing, and security testing. We also follow industry best practices and coding standards. Before delivery, all projects undergo a comprehensive review to ensure they meet our high-quality standards and your requirements.",
        },
        {
          question:
            "How do you handle project changes or additional requirements?",
          answer:
            "We understand that requirements can evolve during a project. We have a structured change management process to handle modifications or additions to the original scope. Any changes are documented, assessed for impact on timeline and budget, and approved by you before implementation. Our agile approach allows us to accommodate changes while minimizing disruption to the project.",
        },
      ],
    },
    {
      category: "Technology & Solutions",
      questions: [
        {
          question: "What technologies do you work with?",
          answer:
            "We work with a wide range of technologies including JavaScript/TypeScript (React, Angular, Vue, Node.js), Python, Java, .NET, PHP, mobile technologies (React Native, Flutter, Swift, Kotlin), database systems (SQL and NoSQL), cloud platforms (AWS, Azure, Google Cloud), and many more. We select the most appropriate technologies based on your specific project requirements and business objectives.",
        },
        {
          question: "Can you work with our existing systems and technologies?",
          answer:
            "Yes, we have extensive experience integrating with existing systems and technologies. Whether you need to enhance, extend, or migrate legacy systems, we can work with your current technology stack. Our team is skilled at understanding existing architectures and developing solutions that seamlessly integrate with your infrastructure.",
        },
        {
          question:
            "Do you provide custom solutions or use pre-built platforms?",
          answer:
            "We offer both custom solutions and implementations based on pre-built platforms, depending on your needs and budget. For unique requirements, we develop custom solutions tailored specifically to your business. When appropriate, we leverage established platforms and customize them to meet your needs, which can be more cost-effective and faster to implement.",
        },
        {
          question: "How do you approach cybersecurity in your solutions?",
          answer:
            "Security is a fundamental consideration in all our solutions. We implement security best practices throughout the development lifecycle, including secure coding practices, regular security testing, and vulnerability assessments. We stay updated on the latest security threats and compliance requirements to ensure our solutions provide robust protection for your data and systems.",
        },
      ],
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          question: "Do you provide support after project completion?",
          answer:
            "Yes, we offer comprehensive post-launch support and maintenance services. We provide different support packages tailored to your needs, from basic technical support to full managed services. Our support team is available to address issues, implement updates, and ensure your solution continues to perform optimally.",
        },
        {
          question: "What are your support hours?",
          answer:
            "Our standard support hours are Monday to Friday, 9 AM to 6 PM (EST). For clients with premium support packages, we offer extended hours and emergency support outside regular business hours. We also provide 24/7 monitoring and emergency response for critical systems when needed.",
        },
        {
          question: "How do you handle bug fixes and updates?",
          answer:
            "Bug fixes are addressed based on their severity and impact. Critical issues are handled immediately, while minor issues are scheduled for regular maintenance updates. We provide regular maintenance to keep your systems secure, up-to-date, and performing optimally. This includes security patches, performance optimizations, and compatibility updates.",
        },
        {
          question: "Can you train our team to use the new systems?",
          answer:
            "Yes, we provide comprehensive training to ensure your team can effectively use and manage the systems we develop. Training can be delivered in various formats including in-person workshops, online sessions, video tutorials, and detailed documentation. We tailor our training approach to your team's technical expertise and specific needs.",
        },
      ],
    },
    {
      category: "Pricing & Contracts",
      questions: [
        {
          question: "How do you structure your pricing?",
          answer:
            "We offer flexible pricing models to suit different project types and client needs. These include fixed-price contracts for well-defined projects, time and materials billing for projects with evolving requirements, and retainer arrangements for ongoing services. We provide transparent pricing with no hidden costs and work with you to find a model that aligns with your budget and project needs.",
        },
        {
          question: "Do you require a minimum contract commitment?",
          answer:
            "Contract terms vary depending on the service and project type. For project-based work, the contract typically covers the project duration plus a support period. For ongoing services, we may recommend minimum terms (usually 3-6 months) to ensure we can deliver meaningful results. However, we're flexible and can discuss terms that work for your specific situation.",
        },
        {
          question: "What payment terms do you offer?",
          answer:
            "Our standard payment terms include an initial deposit at project start, with subsequent payments tied to project milestones or monthly billing depending on the project structure and duration. For ongoing services, we typically bill monthly. We accept various payment methods including bank transfers, credit cards, and other electronic payment options.",
        },
        {
          question: "Do you offer any guarantees for your work?",
          answer:
            "Yes, we stand behind the quality of our work. We offer a warranty period for all our development projects during which we address any issues or bugs at no additional cost. For ongoing services, we provide service level agreements (SLAs) that outline our commitments regarding performance, availability, and response times. Our goal is your complete satisfaction with our services.",
        },
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our services, process, and
              more
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            {faqs.map((category, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {category.category}
                </h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`item-${index}-${faqIndex}`}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-gray-900">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              If you couldn't find the answer to your question, please don't
              hesitate to contact us directly. Our team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Contact Us
              </a>
              <a
                href="tel:7233062243"
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQPage;

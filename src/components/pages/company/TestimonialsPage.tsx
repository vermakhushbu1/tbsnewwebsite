import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Star } from "lucide-react";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechNova Solutions",
      company: "TechNova Solutions",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      testimonial:
        "Working with Tbs Web Technology has been a game-changer for our business. Their team took the time to understand our unique challenges and delivered a custom software solution that has significantly improved our operational efficiency. Their technical expertise, professionalism, and commitment to our success have made them a valuable partner.",
      category: "Software Development",
    },
    {
      name: "Michael Chen",
      position: "CEO, GrowthFusion",
      company: "GrowthFusion",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 5,
      testimonial:
        "We hired Tbs Web Technology to redesign our e-commerce website and implement a new digital marketing strategy. The results have exceeded our expectations, with a 40% increase in online sales within the first three months. Their team is responsive, creative, and truly understands how to drive business growth through technology.",
      category: "Web Development",
    },
    {
      name: "Emily Rodriguez",
      position: "Director of IT, HealthPlus",
      company: "HealthPlus",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      rating: 5,
      testimonial:
        "The cybersecurity assessment and implementation provided by Tbs Web Technology has given us peace of mind knowing our sensitive patient data is protected. Their team identified vulnerabilities we weren't aware of and implemented robust security measures that have strengthened our overall security posture. Their expertise in healthcare IT security is exceptional.",
      category: "Cybersecurity",
    },
    {
      name: "David Thompson",
      position: "Operations Manager, LogisticsPro",
      company: "LogisticsPro",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      rating: 4,
      testimonial:
        "Tbs Web Technology helped us migrate our legacy systems to the cloud, resulting in improved scalability and significant cost savings. The transition was smooth with minimal disruption to our operations. Their team provided excellent training and support throughout the process, ensuring our staff was comfortable with the new systems.",
      category: "Cloud Computing",
    },
    {
      name: "Jennifer Lee",
      position: "Marketing Director, RetailMax",
      company: "RetailMax",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jennifer",
      rating: 5,
      testimonial:
        "The mobile app developed by Tbs Web Technology has transformed how our customers interact with our brand. The intuitive design and seamless functionality have received overwhelmingly positive feedback. Their team's attention to detail and commitment to quality is evident in every aspect of the app.",
      category: "Mobile Development",
    },
    {
      name: "Robert Wilson",
      position: "CFO, FinancePro",
      company: "FinancePro",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
      rating: 5,
      testimonial:
        "We engaged Tbs Web Technology for a complex database migration and optimization project. Their expertise in database solutions was evident from the start. They not only successfully migrated our data but also implemented performance optimizations that have significantly improved our system's speed and reliability.",
      category: "Database Solutions",
    },
    {
      name: "Lisa Wang",
      position: "Product Manager, InnovateTech",
      company: "InnovateTech",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
      rating: 4,
      testimonial:
        "The UI/UX design work delivered by Tbs Web Technology has completely transformed our product. Their designers took our complex application and made it intuitive and user-friendly without sacrificing functionality. The positive user feedback we've received since the redesign has been overwhelming.",
      category: "UI/UX Design",
    },
    {
      name: "James Martinez",
      position: "IT Director, GlobalManufacturing",
      company: "GlobalManufacturing",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 5,
      testimonial:
        "Tbs Web Technology's IT consulting services have been instrumental in helping us develop a technology roadmap that aligns with our business objectives. Their strategic guidance has helped us make informed decisions about technology investments and has positioned us for future growth. Their team's industry knowledge and practical approach set them apart from other consultants we've worked with.",
      category: "IT Consulting",
    },
  ];

  const categories = [
    "All",
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Cloud Computing",
    "Mobile Development",
    "Database Solutions",
    "UI/UX Design",
    "IT Consulting",
  ];

  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredTestimonials =
    activeCategory === "All"
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Client Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working
              with us
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full transition-colors ${activeCategory === category ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.position}
                        </p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 italic mb-4">
                      "{testimonial.testimonial}"
                    </p>
                    <div className="pt-4 border-t border-gray-100">
                      <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                        {testimonial.category}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No testimonials found in this category. Please select another
                category.
              </p>
            </div>
          )}

          <div className="bg-blue-50 p-8 rounded-lg text-center mt-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Experience Our Services?
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto mb-6">
              Join our growing list of satisfied clients and discover how our
              technology solutions can help your business succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/get-a-quote"
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 font-medium py-3 px-6 rounded-md transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestimonialsPage;

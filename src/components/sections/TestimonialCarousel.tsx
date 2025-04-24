import React, { useState } from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const TestimonialCarousel = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovations",
      role: "Marketing Director",
      quote:
        "WebInfoTech transformed our online presence completely. Their strategic approach to digital marketing increased our leads by 150% in just three months!",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Global Solutions",
      role: "CEO",
      quote:
        "The team at WebInfoTech delivered beyond our expectations. Their SEO expertise and content strategy have positioned us as industry leaders in a highly competitive market.",
      rating: 5,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Studios",
      role: "Brand Manager",
      quote:
        "Working with WebInfoTech has been a game-changer for our brand. Their creative approach and attention to detail resulted in a website that perfectly captures our vision.",
      rating: 4,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-pink-DEFAULT fill-pink-DEFAULT" : "text-gray-600"}`}
        />
      ));
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-dark-gray">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our <span className="text-pink-DEFAULT">Clients</span> Say
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Hear from businesses that have transformed their digital presence
            with our services
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`bg-black border ${index === activeIndex ? "border-pink-DEFAULT" : "border-jamuni-DEFAULT/30"} rounded-lg p-8 relative transition-all duration-300 hover:border-pink-DEFAULT`}
              >
                <div className="absolute -top-4 -left-4">
                  <Quote className="h-8 w-8 text-pink-DEFAULT opacity-50" />
                </div>
                <div className="flex items-center mb-6">
                  <div className="h-14 w-14 rounded-full overflow-hidden mr-4 border-2 border-jamuni-DEFAULT">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-pink-DEFAULT text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <div className="flex mt-1">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-3 w-3 rounded-full mx-1 ${activeIndex === index ? "bg-pink-DEFAULT" : "bg-gray-600 hover:bg-pink-DEFAULT/50"} transition-colors`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

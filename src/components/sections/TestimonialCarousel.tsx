import React, { useState, useEffect } from "react";
import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface TestimonialProps {
  testimonials?: TestimonialType[];
  title?: string;
  subtitle?: string;
}

interface TestimonialType {
  id: number;
  name: string;
  company: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
}

const defaultTestimonials: TestimonialType[] = [
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
  {
    id: 4,
    name: "David Thompson",
    company: "Retail Enterprises",
    role: "E-commerce Director",
    quote:
      "Our e-commerce sales have increased by 200% since partnering with WebInfoTech. Their data-driven strategies and optimization techniques have been invaluable.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
  {
    id: 5,
    name: "Jessica Lee",
    company: "Health Services",
    role: "Communications Manager",
    quote:
      "WebInfoTech helped us navigate the complex digital landscape in the healthcare industry. Their compliance-focused approach while maintaining engagement was exactly what we needed.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
  },
];

const TestimonialCarousel: React.FC<TestimonialProps> = ({
  testimonials = defaultTestimonials,
  title = "What Our Clients Say",
  subtitle = "Hear from businesses that have transformed their digital presence with our services",
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to render star ratings
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
        />
      ));
  };

  return (
    <section className="w-full py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full"
            onSelect={(api) => {
              if (api) {
                setActiveIndex(api.selectedScrollSnap());
              }
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-3/4 lg:basis-3/5"
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 h-full flex flex-col relative">
                    <Quote className="absolute text-blue-100 h-24 w-24 -top-4 -left-4 opacity-50" />
                    <div className="flex items-center mb-6 z-10">
                      <div className="h-16 w-16 rounded-full overflow-hidden mr-4 border-2 border-blue-100">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </p>
                        <div className="flex mt-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic text-lg flex-grow z-10">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex justify-center mt-8">
              <CarouselPrevious className="static translate-y-0 mr-2" />
              <div className="flex items-center space-x-2 mx-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? "w-8 bg-blue-600" : "w-2.5 bg-blue-200"}`}
                    onClick={() => {
                      // This would need actual implementation with the carousel API
                      setActiveIndex(index);
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <CarouselNext className="static translate-y-0 ml-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

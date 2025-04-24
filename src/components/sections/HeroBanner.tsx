import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = [
    "Digital Marketing",
    "Web Development",
    "SEO Optimization",
    "Mobile Apps",
    "IT Solutions",
  ];

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentPhrase = phrases[index];

    // Type the text
    if (text.length < currentPhrase.length) {
      timer = setTimeout(() => {
        setText(currentPhrase.substring(0, text.length + 1));
      }, 100);
    }
    // Pause at the end of typing before erasing
    else if (text === currentPhrase) {
      timer = setTimeout(() => {
        setText(text.substring(0, text.length - 1));
      }, 2000);
    }
    // Erase the text
    else if (text.length > 0) {
      timer = setTimeout(() => {
        setText(text.substring(0, text.length - 1));
      }, 50);
    }
    // Move to next phrase after erasing
    else {
      timer = setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [text, index, phrases]);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-dark-gray to-black opacity-90"></div>

      {/* Animated elements */}
      <div className="absolute top-20 left-20 w-16 h-16 rounded-full bg-pink-DEFAULT/20 blur-xl"></div>
      <div className="absolute bottom-40 right-40 w-24 h-24 rounded-full bg-jamuni-DEFAULT/20 blur-xl"></div>
      <div className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-pink-DEFAULT/10 blur-xl"></div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          Innovative IT Solutions for
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-DEFAULT to-jamuni-DEFAULT">
            Business Growth
          </span>
        </h1>

        <div className="text-xl md:text-2xl font-medium text-white h-12 mb-8 flex items-center justify-center gap-2">
          Experts in <span className="text-pink-DEFAULT font-bold">{text}</span>
          <span className="animate-blink ml-1">|</span>
        </div>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
          We help businesses transform through innovative digital marketing
          strategies and cutting-edge web technologies tailored to your specific
          needs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-pink-DEFAULT hover:bg-pink-dark text-white px-8 py-6 rounded-md font-semibold"
            >
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link to="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-jamuni-DEFAULT text-white hover:bg-jamuni-DEFAULT/20 px-8 py-6 rounded-md font-semibold"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroBanner = ({
  title = "Digital Solutions for Your Business Growth",
  subtitle = "We help businesses transform through innovative digital marketing strategies and cutting-edge web technologies.",
  ctaText = "Get Started",
  onCtaClick = () => console.log("CTA clicked"),
  backgroundImage = "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1920&q=80",
}: HeroBannerProps) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const phrases = [
    "Digital Marketing",
    "Web Development",
    "SEO Optimization",
    "Social Media",
    "Content Creation",
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
    <div className="relative w-full h-[800px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-700/80 to-blue-500/70"></div>

      {/* Animated Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 rounded-full bg-blue-300 opacity-30 backdrop-blur-md"
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-24 h-24 rounded-full bg-blue-200 opacity-20 backdrop-blur-md"
        animate={{
          y: [0, -30, 0],
          x: [0, -15, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full bg-blue-400 opacity-25 backdrop-blur-md"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-20 h-20 rounded-full bg-purple-400 opacity-20 backdrop-blur-md"
        animate={{
          y: [0, -25, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-teal-300 opacity-20 backdrop-blur-md"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10 relative">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="text-sm uppercase tracking-widest text-blue-200 mb-2 font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to WebInfoTech
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {title}
          </motion.h1>

          <motion.div
            className="text-3xl md:text-4xl font-semibold text-blue-200 h-16 mb-6 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Experts in <span className="text-white font-bold">{text}</span>
            <span className="animate-blink ml-1">|</span>
          </motion.div>

          <motion.p
            className="text-xl max-w-3xl mb-10 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-white text-blue-700 hover:bg-blue-100 text-lg px-8 py-6 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              onClick={onCtaClick}
            >
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full font-semibold"
              onClick={() => console.log("Learn more clicked")}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Additional background overlay with slight gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/50"></div>

      {/* Animated particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 6 + 2 + "px",
            height: Math.random() * 6 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            y: [0, -(Math.random() * 100 + 50)],
            opacity: [0.1, 0.3, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default HeroBanner;

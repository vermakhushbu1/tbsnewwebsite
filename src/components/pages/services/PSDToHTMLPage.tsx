import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Code, Layout, Zap, CheckCircle, Monitor, FileType } from "lucide-react";
import { Link } from "react-router-dom";

const PSDToHTMLPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              PSD to HTML Conversion Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Transform your design files into pixel-perfect, responsive HTML code with our expert conversion services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Pixel-Perfect PSD to HTML Conversion
              </h3>
              <p className="text-gray-600 mb-4">
                At WebInfoTech, we specialize in converting your design files (PSD, Sketch, Figma, XD, or other formats) into clean, semantic HTML/CSS code that perfectly matches your design vision. Our conversion services ensure that your website not only looks exactly like your design but also performs optimally across all devices and browsers.
              </p>
              <p className="text-gray-600 mb-4">
                Our experienced front-end developers meticulously transform every detail of your design into hand-coded HTML, ensuring pixel-perfect accuracy, responsive behavior, and fast loading times. We follow modern web standards and best practices to deliver high-quality code that's easy to maintain and extend.
              </p>
              <p className="text-gray-600">
                Whether you need a simple landing page or a complex multi-page website converted from PSD to HTML, our team can deliver clean, well-structured code that brings your designs to life on the web.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80"
                alt="PSD to HTML Conversion"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our PSD to HTML Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <FileType className="h-10 w-10 text-blue-600" />,
                  title: "PSD to HTML Conversion",
                  description:
                    "Conversion of Photoshop design files to clean, semantic HTML/CSS code with pixel-perfect accuracy.",
                },
                {
                  icon: <Layout className="h-10 w-10 text-blue-600" />,
                  title: "Responsive Conversion",
                  description:
                    "Transformation of your designs into fully responsive HTML that adapts seamlessly to all screen sizes and devices.",
                },
                {
                  icon: <Code className="h-10 w-10 text-blue-600" />,
                  title: "Cross-Browser Compatible Code",
                  description:
                    "Development of HTML/CSS that works flawlessly across all major browsers including Chrome, Firefox, Safari, and Edge.",
                },
                {
                  icon: <Zap className="h-10 w-10 text-blue-600" />,
                  title: "Performance Optimization",
                  description:
                    "Optimization of code and assets for fast loading times and smooth performance, even on slower connections.
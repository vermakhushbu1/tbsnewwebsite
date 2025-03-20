import React from "react";
import HeroBanner from "./sections/HeroBanner";
import ServicesGrid from "./sections/ServicesGrid";
import PortfolioShowcase from "./sections/PortfolioShowcase";
import TestimonialCarousel from "./sections/TestimonialCarousel";
import ContactSection from "./sections/ContactSection";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Banner Section */}
      <HeroBanner
        title="Digital Solutions for Your Business Growth"
        subtitle="We help businesses transform through innovative digital marketing strategies and cutting-edge web technologies."
        ctaText="Get Started"
        onCtaClick={() => console.log("CTA clicked")}
        backgroundImage="https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=1920&q=80"
      />

      {/* Services Grid Section */}
      <ServicesGrid
        title="Our Services"
        subtitle="We provide comprehensive digital solutions to help your business grow and succeed in the digital landscape."
      />

      {/* Portfolio Showcase Section */}
      <PortfolioShowcase
        title="Our Recent Projects"
        subtitle="Explore our portfolio of successful digital marketing campaigns and web development projects"
      />

      {/* Testimonial Carousel Section */}
      <TestimonialCarousel
        title="What Our Clients Say"
        subtitle="Hear from businesses that have transformed their digital presence with our services"
      />

      {/* Contact Section */}
      <ContactSection
        title="Get In Touch"
        subtitle="Have a project in mind? Fill out the form below and we'll get back to you within 24 hours."
        contactInfo={{
          address: "Noida Sector 63",
          email: "tbswebtechnology@gmail.com",
          phone: "7233062243",
        }}
      />

      <Footer />
    </div>
  );
};

export default Home;

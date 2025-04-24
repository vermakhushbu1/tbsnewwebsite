import React from "react";
import MainLayout from "./layout/MainLayout";
import HeroBanner from "./sections/HeroBanner";
import ServicesGrid from "./sections/ServicesGrid";
import PortfolioShowcase from "./sections/PortfolioShowcase";
import TestimonialCarousel from "./sections/TestimonialCarousel";
import ContactSection from "./sections/ContactSection";

const Home = () => {
  return (
    <MainLayout>
      <HeroBanner />
      <ServicesGrid />
      <PortfolioShowcase />
      <TestimonialCarousel />
      <ContactSection />
    </MainLayout>
  );
};

export default Home;

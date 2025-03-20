import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  Palette,
  Users,
  Layout,
  Smartphone,
  Zap,
  BarChart,
} from "lucide-react";
import { Link } from "react-router-dom";

const UIUXDesignPage = () => {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-blue-600" />,
      title: "User Research & Analysis",
      description:
        "Understanding your users' needs, behaviors, and pain points through interviews, surveys, and data analysis.",
    },
    {
      icon: <Layout className="h-10 w-10 text-blue-600" />,
      title: "UX Strategy & Information Architecture",
      description:
        "Developing a comprehensive UX strategy and organizing content in a logical, intuitive structure.",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Wireframing & Prototyping",
      description:
        "Creating low and high-fidelity prototypes to visualize and test user flows and interactions.",
    },
    {
      icon: <Palette className="h-10 w-10 text-blue-600" />,
      title: "UI Design",
      description:
        "Crafting visually appealing interfaces with consistent branding, typography, and color schemes.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-blue-600" />,
      title: "Responsive & Adaptive Design",
      description:
        "Ensuring optimal user experiences across all devices, screen sizes, and platforms.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-blue-600" />,
      title: "Usability Testing & Optimization",
      description:
        "Evaluating designs with real users and iteratively improving based on feedback and analytics.",
    },
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description:
        "Understanding your business goals, target audience, and project requirements.",
    },
    {
      step: "2",
      title: "Research",
      description:
        "Conducting user research, competitive analysis, and gathering insights.",
    },
    {
      step: "3",
      title: "Strategy",
      description:
        "Developing UX strategy, user personas, and information architecture.",
    },
    {
      step: "4",
      title: "Design",
      description:
        "Creating wireframes, prototypes, and visual designs for the interface.",
    },
    {
      step: "5",
      title: "Testing",
      description: "Conducting usability testing and gathering user feedback.",
    },
    {
      step: "6",
      title: "Refinement",
      description:
        "Iterating on designs based on feedback and preparing for implementation.",
    },
  ];

  const benefits = [
    {
      title: "Increased User Satisfaction",
      description:
        "Intuitive, user-friendly designs that meet user needs and expectations, leading to higher satisfaction and loyalty.",
    },
    {
      title: "Higher Conversion Rates",
      description:
        "Optimized user journeys and clear calls-to-action that guide users toward desired actions and improve conversion rates.",
    },
    {
      title: "Reduced Development Costs",
      description:
        "Identifying and addressing usability issues early in the design process, saving time and resources during development.",
    },
    {
      title: "Competitive Advantage",
      description:
        "Standing out in the market with distinctive, memorable user experiences that differentiate your brand.",
    },
    {
      title: "Lower Support Costs",
      description:
        "Intuitive interfaces that reduce user errors and support requests, decreasing operational costs.",
    },
    {
      title: "Stronger Brand Perception",
      description:
        "Consistent, professional design that reinforces your brand identity and builds trust with users.",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              UI/UX Design Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Creating intuitive, engaging user experiences that delight your
              customers an
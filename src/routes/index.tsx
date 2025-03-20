import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../components/home";
import AboutPage from "../components/pages/AboutPage";
import ServicesPage from "../components/pages/ServicesPage";
import PortfolioPage from "../components/pages/PortfolioPage";
import BlogPage from "../components/pages/BlogPage";
import ContactPage from "../components/pages/ContactPage";
import CompanyPage from "../components/pages/CompanyPage";
import ITSolutionsPage from "../components/pages/ITSolutionsPage";
import CaseStudiesPage from "../components/pages/CaseStudiesPage";
import ITBlogsPage from "../components/pages/ITBlogsPage";
import GetAQuotePage from "../components/pages/GetAQuotePage";

// Company sub-pages
import AboutUsPage from "../components/pages/company/AboutUsPage";
import TeamPage from "../components/pages/company/TeamPage";
import CareersPage from "../components/pages/company/CareersPage";

// IT Solutions sub-pages
import InfrastructurePage from "../components/pages/it-solutions/InfrastructurePage";
import SoftwareDevelopmentPage from "../components/pages/it-solutions/SoftwareDevelopmentPage";
import CloudComputingPage from "../components/pages/it-solutions/CloudComputingPage";
import CybersecurityPage from "../components/pages/it-solutions/CybersecurityPage";
import DatabasePage from "../components/pages/it-solutions/DatabasePage";
import ConsultingPage from "../components/pages/it-solutions/ConsultingPage";

// Service pages
import WebDevelopmentPage from "../components/pages/services/WebDevelopmentPage";
import MobileDevelopmentPage from "../components/pages/services/MobileDevelopmentPage";
import DigitalMarketingPage from "../components/pages/services/DigitalMarketingPage";
import CustomSoftwarePage from "../components/pages/services/CustomSoftwarePage";
import UIUXDesignPage from "../components/pages/services/UIUXDesignPage";
import SEOOptimizationPage from "../components/pages/services/SEOOptimizationPage";

// Detail pages
import BlogPostDetailPage from "../components/pages/blog/BlogPostDetailPage";
import CaseStudyDetailPage from "../components/pages/case-studies/CaseStudyDetailPage";
import ITBlogPostDetailPage from "../components/pages/it-blogs/ITBlogPostDetailPage";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogPostDetailPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/get-a-quote",
    element: <GetAQuotePage />,
  },
  // Company routes
  {
    path: "/company",
    element: <CompanyPage />,
  },
  {
    path: "/company/about-us",
    element: <AboutUsPage />,
  },
  {
    path: "/company/team",
    element: <TeamPage />,
  },
  {
    path: "/company/careers",
    element: <CareersPage />,
  },
  // IT Solutions routes
  {
    path: "/it-solutions",
    element: <ITSolutionsPage />,
  },
  {
    path: "/it-solutions/infrastructure",
    element: <InfrastructurePage />,
  },
  {
    path: "/it-solutions/software-development",
    element: <SoftwareDevelopmentPage />,
  },
  {
    path: "/it-solutions/cloud-computing",
    element: <CloudComputingPage />,
  },
  {
    path: "/it-solutions/cybersecurity",
    element: <CybersecurityPage />,
  },
  {
    path: "/it-solutions/database",
    element: <DatabasePage />,
  },
  {
    path: "/it-solutions/consulting",
    element: <ConsultingPage />,
  },
  // Service pages
  {
    path: "/services/web-development",
    element: <WebDevelopmentPage />,
  },
  {
    path: "/services/mobile-development",
    element: <MobileDevelopmentPage />,
  },
  {
    path: "/services/digital-marketing",
    element: <DigitalMarketingPage />,
  },
  {
    path: "/services/custom-software",
    element: <CustomSoftwarePage />,
  },
  {
    path: "/services/ui-ux-design",
    element: <UIUXDesignPage />,
  },
  {
    path: "/services/seo-optimization",
    element: <SEOOptimizationPage />,
  },
  {
    path: "/case-studies",
    element: <CaseStudiesPage />,
  },
  {
    path: "/case-studies/:id",
    element: <CaseStudyDetailPage />,
  },
  {
    path: "/it-blogs",
    element: <ITBlogsPage />,
  },
  {
    path: "/it-blogs/:id",
    element: <ITBlogPostDetailPage />,
  },
];

export default routes;

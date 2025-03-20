import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AboutPage from "./components/pages/AboutPage";
import ServicesPage from "./components/pages/ServicesPage";
import PortfolioPage from "./components/pages/PortfolioPage";
import BlogPage from "./components/pages/BlogPage";
import ContactPage from "./components/pages/ContactPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import CompanyPage from "./components/pages/CompanyPage";
import ITSolutionsPage from "./components/pages/ITSolutionsPage";
import CaseStudiesPage from "./components/pages/CaseStudiesPage";
import ITBlogsPage from "./components/pages/ITBlogsPage";
import ChatBot from "./components/ChatBot";

// Company sub-pages
import AboutUsPage from "./components/pages/company/AboutUsPage";
import TeamPage from "./components/pages/company/TeamPage";
import CareersPage from "./components/pages/company/CareersPage";

// IT Solutions sub-pages
import InfrastructurePage from "./components/pages/it-solutions/InfrastructurePage";
import SoftwareDevelopmentPage from "./components/pages/it-solutions/SoftwareDevelopmentPage";
import CloudComputingPage from "./components/pages/it-solutions/CloudComputingPage";
import CybersecurityPage from "./components/pages/it-solutions/CybersecurityPage";
import DatabasePage from "./components/pages/it-solutions/DatabasePage";
import ConsultingPage from "./components/pages/it-solutions/ConsultingPage";

// Service pages
import WebDevelopmentPage from "./components/pages/services/WebDevelopmentPage";
import MobileDevelopmentPage from "./components/pages/services/MobileDevelopmentPage";
import DigitalMarketingPage from "./components/pages/services/DigitalMarketingPage";
import CustomSoftwarePage from "./components/pages/services/CustomSoftwarePage";
import UIUXDesignPage from "./components/pages/services/UIUXDesignPage";
import SEOOptimizationPage from "./components/pages/services/SEOOptimizationPage";

// Detail pages
import BlogPostDetailPage from "./components/pages/blog/BlogPostDetailPage";
import CaseStudyDetailPage from "./components/pages/case-studies/CaseStudyDetailPage";
import ITBlogPostDetailPage from "./components/pages/it-blogs/ITBlogPostDetailPage";

import tempoRoutes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogPostDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Company routes */}
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/company/about-us" element={<AboutUsPage />} />
          <Route path="/company/team" element={<TeamPage />} />
          <Route path="/company/careers" element={<CareersPage />} />

          {/* IT Solutions routes */}
          <Route path="/it-solutions" element={<ITSolutionsPage />} />
          <Route
            path="/it-solutions/infrastructure"
            element={<InfrastructurePage />}
          />
          <Route
            path="/it-solutions/software-development"
            element={<SoftwareDevelopmentPage />}
          />
          <Route
            path="/it-solutions/cloud-computing"
            element={<CloudComputingPage />}
          />
          <Route
            path="/it-solutions/cybersecurity"
            element={<CybersecurityPage />}
          />
          <Route path="/it-solutions/database" element={<DatabasePage />} />
          <Route path="/it-solutions/consulting" element={<ConsultingPage />} />

          {/* Service pages */}
          <Route
            path="/services/web-development"
            element={<WebDevelopmentPage />}
          />
          <Route
            path="/services/mobile-development"
            element={<MobileDevelopmentPage />}
          />
          <Route
            path="/services/digital-marketing"
            element={<DigitalMarketingPage />}
          />
          <Route
            path="/services/custom-software"
            element={<CustomSoftwarePage />}
          />
          <Route path="/services/ui-ux-design" element={<UIUXDesignPage />} />
          <Route
            path="/services/seo-optimization"
            element={<SEOOptimizationPage />}
          />

          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
          <Route path="/it-blogs" element={<ITBlogsPage />} />
          <Route path="/it-blogs/:id" element={<ITBlogPostDetailPage />} />

          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(tempoRoutes)}
        <ChatBot />
      </div>
    </Suspense>
  );
}

export default App;

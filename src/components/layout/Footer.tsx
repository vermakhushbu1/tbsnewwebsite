import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
          {/* Web Engineering */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Web Engineering</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/web-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-cms-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Web CMS Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/e-commerce"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/erp-crm"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Custom ERP & CRM Development Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cyber-security"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Cyber Security Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/python-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Python Development Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Front-End Development */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Front-End Development</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/graphics-designing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Graphics Designing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/responsive-web-designing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Responsive Web Designing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/psd-to-html"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  PSD TO HTML
                </Link>
              </li>
              <li>
                <Link
                  to="/services/react-js"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  React JS
                </Link>
              </li>
              <li>
                <Link
                  to="/services/angular-js"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Angular JS
                </Link>
              </li>
              <li>
                <Link
                  to="/services/vue-js"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Vue JS
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile App Development */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Mobile App Development</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/android-app-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Android App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ios-app-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  IOS App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/hybrid-platform-app-development"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Hybrid Platform App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/company/careers"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Digital Marketing</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/search-engine-optimization"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/services/search-engine-marketing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Search Engine Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/social-media-marketing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Social Media Marketing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/software-qa"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Software QA
                </Link>
              </li>
              <li>
                <Link
                  to="/it-blogs"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  IT Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/it-solutions"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/help-faq"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/get-a-quote"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Get a quote
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms Of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and Social Media - White Background */}
      <div className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm">
            Copyright © 2015-{new Date().getFullYear()} WebInfratech IT
            Company.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-700 p-2 rounded-md transition-colors"
            >
              <Facebook size={18} className="text-white" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-700 p-2 rounded-md transition-colors"
            >
              <Twitter size={18} className="text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-700 p-2 rounded-md transition-colors"
            >
              <Linkedin size={18} className="text-white" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 hover:bg-blue-700 p-2 rounded-md transition-colors"
            >
              <Instagram size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

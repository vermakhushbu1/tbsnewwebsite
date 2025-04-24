import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-jamuni">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 py-12">
          {/* Web Engineering */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-pink-DEFAULT">
              Web Engineering
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/web-development"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-cms-development"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Web CMS Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/e-commerce"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  E-Commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/erp-crm"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Custom ERP & CRM Development Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cyber-security"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Cyber Security Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/services/python-development"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Python Development Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Front-End Development */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-pink-DEFAULT">
              Front-End Development
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/graphics-designing"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Graphics Designing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/responsive-web-designing"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Responsive Web Designing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/psd-to-html"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  PSD TO HTML
                </Link>
              </li>
              <li>
                <Link
                  to="/services/react-js"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  React JS
                </Link>
              </li>
              <li>
                <Link
                  to="/services/angular-js"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Angular JS
                </Link>
              </li>
              <li>
                <Link
                  to="/services/vue-js"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Vue JS
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile App Development */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-pink-DEFAULT">
              Mobile App Development
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/android-app-development"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Android App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/ios-app-development"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  IOS App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/hybrid-platform-app-development"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Hybrid Platform App Development
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/company/careers"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Case Studies
                </Link>
              </li>
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-pink-DEFAULT">
              Digital Marketing
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/services/search-engine-optimization"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link
                  to="/services/search-engine-marketing"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Search Engine Marketing
                </Link>
              </li>
              <li>
                <Link
                  to="/services/social-media-marketing"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Social Media Marketing Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/software-qa"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Software QA
                </Link>
              </li>
              <li>
                <Link
                  to="/it-blogs"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  IT Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/it-solutions"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  IT Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-pink-DEFAULT">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/help-faq"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Help & FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/get-a-quote"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Get a quote
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-use"
                  className="text-gray-300 hover:text-pink-DEFAULT transition-colors duration-300"
                >
                  Terms Of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="bg-dark-gray py-6 border-t border-jamuni">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            Copyright © 2015-{new Date().getFullYear()} WebInfratech IT
            Company.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-light hover:bg-pink-DEFAULT p-2 rounded-md transition-colors duration-300"
            >
              <Facebook size={18} className="text-white hover:text-jamuni" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-light hover:bg-pink-DEFAULT p-2 rounded-md transition-colors duration-300"
            >
              <Twitter size={18} className="text-white hover:text-jamuni" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-light hover:bg-pink-DEFAULT p-2 rounded-md transition-colors duration-300"
            >
              <Linkedin size={18} className="text-white hover:text-jamuni" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-light hover:bg-pink-DEFAULT p-2 rounded-md transition-colors duration-300"
            >
              <Instagram size={18} className="text-white hover:text-jamuni" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

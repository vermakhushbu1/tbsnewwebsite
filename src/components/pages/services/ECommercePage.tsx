import React from "react";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import {
  ShoppingCart,
  CreditCard,
  TrendingUp,
  Shield,
  Truck,
  BarChart,
} from "lucide-react";
import { Link } from "react-router-dom";

const ECommercePage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              E-Commerce Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Custom online store development to help your business sell
              products and services globally.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Powerful E-Commerce Solutions for Your Business
              </h3>
              <p className="text-gray-600 mb-4">
                In today's digital marketplace, having a robust e-commerce
                platform is essential for business growth. At WebInfoTech, we
                develop custom e-commerce solutions that are tailored to your
                specific business needs and goals.
              </p>
              <p className="text-gray-600 mb-4">
                Whether you're launching a new online store or upgrading an
                existing one, our team of experienced developers can create a
                secure, scalable, and user-friendly e-commerce platform that
                drives sales and enhances customer experience.
              </p>
              <p className="text-gray-600">
                We work with leading e-commerce platforms including Shopify,
                WooCommerce, Magento, and BigCommerce, or we can build a
                completely custom solution from the ground up.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                alt="E-Commerce Development"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Our E-Commerce Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <ShoppingCart className="h-10 w-10 text-blue-600" />,
                  title: "Custom E-Commerce Development",
                  description:
                    "Tailor-made online stores designed to meet your specific business requirements and provide a seamless shopping experience.",
                },
                {
                  icon: <CreditCard className="h-10 w-10 text-blue-600" />,
                  title: "Payment Gateway Integration",
                  description:
                    "Secure integration with multiple payment gateways to offer your customers flexible payment options.",
                },
                {
                  icon: <TrendingUp className="h-10 w-10 text-blue-600" />,
                  title: "E-Commerce SEO & Marketing",
                  description:
                    "Optimization of your online store for search engines and implementation of effective marketing strategies to drive traffic and sales.",
                },
                {
                  icon: <Shield className="h-10 w-10 text-blue-600" />,
                  title: "E-Commerce Security",
                  description:
                    "Implementation of robust security measures to protect your store and customer data from threats and ensure compliance with regulations.",
                },
                {
                  icon: <Truck className="h-10 w-10 text-blue-600" />,
                  title: "Inventory & Shipping Management",
                  description:
                    "Efficient systems for managing inventory, processing orders, and coordinating shipping to streamline your operations.",
                },
                {
                  icon: <BarChart className="h-10 w-10 text-blue-600" />,
                  title: "E-Commerce Analytics",
                  description:
                    "Comprehensive analytics and reporting tools to track performance, customer behavior, and sales metrics for data-driven decision making.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              E-Commerce Platforms We Work With
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Shopify", category: "Hosted Platform" },
                { name: "WooCommerce", category: "WordPress Plugin" },
                { name: "Magento", category: "Enterprise Solution" },
                { name: "BigCommerce", category: "Hosted Platform" },
                { name: "PrestaShop", category: "Open Source" },
                { name: "OpenCart", category: "Open Source" },
                {
                  name: "Salesforce Commerce Cloud",
                  category: "Enterprise Solution",
                },
                { name: "Custom Solutions", category: "Bespoke Development" },
              ].map((platform, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg text-center"
                >
                  <h4 className="font-semibold text-gray-900">
                    {platform.name}
                  </h4>
                  <p className="text-sm text-gray-500">{platform.category}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Launch or Upgrade Your Online Store?
              </h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Contact us today to discuss how our e-commerce solutions can
                help your business reach more customers and increase sales.
              </p>
            </div>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
              >
                Start Your E-Commerce Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ECommercePage;

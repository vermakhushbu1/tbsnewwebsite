import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import ContactSection from "../sections/ContactSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Have questions or ready to start your project? Get in touch with
              our team today.
            </p>
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Visit Our Office
            </h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We'd love to meet you in person at our headquarters
            </p>
          </div>

          <div className="bg-gray-200 rounded-lg overflow-hidden h-[400px] w-full">
            {/* This would be a Google Map in a real implementation */}
            <div className="w-full h-full flex items-center justify-center bg-blue-100">
              <p className="text-blue-600 font-medium">
                Google Map would be displayed here
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;

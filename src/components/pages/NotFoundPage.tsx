import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-8 mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md"
          >
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NotFoundPage;

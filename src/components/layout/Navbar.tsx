import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown, Search } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

interface NavbarProps {
  logo?: string;
}

const Navbar = ({ logo = "/vite.svg" }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      path: "/",
      hasChildren: false,
    },
    {
      name: "Company",
      path: "/company",
      hasChildren: true,
      children: [
        { name: "About Us", path: "/company/about-us" },
        { name: "Our Team", path: "/company/team" },
        { name: "Careers", path: "/company/careers" },
        { name: "Our Mission", path: "/company/mission" },
        { name: "Our Vision", path: "/company/vision" },
        { name: "Our Values", path: "/company/values" },
        { name: "Testimonials", path: "/company/testimonials" },
        { name: "FAQ", path: "/company/faq" },
      ],
    },
    {
      name: "IT Solutions",
      path: "/it-solutions",
      hasChildren: true,
      children: [
        { name: "IT Infrastructure", path: "/it-solutions/infrastructure" },
        {
          name: "Software Development",
          path: "/it-solutions/software-development",
        },
        { name: "Cloud Computing", path: "/it-solutions/cloud-computing" },
        { name: "Cybersecurity", path: "/it-solutions/cybersecurity" },
        { name: "Database Solutions", path: "/it-solutions/database" },
        { name: "IT Consulting", path: "/it-solutions/consulting" },
        {
          name: "Mobile App Development",
          path: "/it-solutions/mobile-app-development",
        },
        { name: "Web Development", path: "/it-solutions/web-development" },
        { name: "UI/UX Design", path: "/it-solutions/ui-ux-design" },
        { name: "DevOps Services", path: "/it-solutions/devops" },
        { name: "QA & Testing", path: "/it-solutions/qa-testing" },
        { name: "AI & Machine Learning", path: "/it-solutions/ai-ml" },
      ],
    },
    {
      name: "Case Studies",
      path: "/case-studies",
      hasChildren: false,
    },
    {
      name: "IT Blogs",
      path: "/it-blogs",
      hasChildren: false,
    },
    {
      name: "Contact Us",
      path: "/contact",
      hasChildren: false,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      {/* Top bar removed as requested */}

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://www.webinfratech.com/assets/images/logo.png"
            alt="Tbs Web Technology Logo"
            className="h-10"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.path}
                className={`text-sm font-medium ${isActive(item.path) ? "text-blue-600" : "text-gray-800"} hover:text-blue-600 flex items-center`}
              >
                {item.name}
                {item.hasChildren && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>

              {item.hasChildren && (
                <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="max-h-[400px] overflow-y-auto">
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-4 py-2 text-sm ${location.pathname === child.path ? "text-blue-600 bg-blue-50" : "text-gray-800"} hover:bg-blue-50 hover:text-blue-600`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right side elements */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Chat icon removed as requested */}
          <div className="flex items-center relative group">
            <Button
              variant="ghost"
              size="icon"
              className="group-hover:bg-gray-100"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </Button>
            <div className="absolute right-0 top-full mt-2 w-80 bg-white shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4">
              <div className="relative mb-3">
                <Input placeholder="Search..." className="pl-10 pr-4 py-2" />
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  Search
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
          <Link
            to="/get-a-quote"
            className="bg-blue-900 text-white px-4 py-2 rounded flex items-center font-medium text-sm hover:bg-blue-800 transition-colors"
          >
            Get A Quote <span className="ml-1">→</span>
          </Link>
          <button className="lg:hidden">
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b">
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <img
                    src="https://www.webinfratech.com/assets/images/logo.png"
                    alt="Tbs Web Technology Logo"
                    className="h-8"
                  />
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <nav className="flex-1 overflow-auto py-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      {item.hasChildren ? (
                        <div className="px-4">
                          <div className="flex items-center justify-between py-2 font-medium">
                            <span>{item.name}</span>
                            <ChevronDown className="h-4 w-4" />
                          </div>
                          <ul className="pl-4 pt-2 pb-1 space-y-1 max-h-[300px] overflow-y-auto">
                            {item.children?.map((child) => (
                              <li key={child.name}>
                                <Link
                                  to={child.path}
                                  className={`block py-2 text-sm ${location.pathname === child.path ? "text-blue-600" : "text-gray-600"}`}
                                  onClick={() => setIsOpen(false)}
                                >
                                  {child.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block px-4 py-2 ${isActive(item.path) ? "text-blue-600 font-medium" : "text-gray-800"}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="py-4 border-t space-y-3">
                <div className="px-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span>7233062243</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="inline-block mr-2 h-4 w-4" /> Contact Us
                </Link>
                <Link
                  to="/get-a-quote"
                  className="block w-full text-center border border-blue-600 text-blue-600 py-2 rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Get A Quote
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

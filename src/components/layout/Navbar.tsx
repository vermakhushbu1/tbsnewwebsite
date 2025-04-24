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
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-md border-b border-jamuni">
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="bg-gradient-card text-white font-bold text-xl px-4 py-2 rounded pink-glow">
            WebInfoTech
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                to={item.path}
                className={`text-sm font-medium ${isActive(item.path) ? "text-pink-DEFAULT" : "text-white"} hover:text-pink-DEFAULT flex items-center transition-colors duration-300`}
              >
                {item.name}
                {item.hasChildren && (
                  <ChevronDown className="ml-1 h-4 w-4 text-pink-DEFAULT" />
                )}
              </Link>

              {item.hasChildren && (
                <div className="absolute left-0 mt-2 w-64 bg-dark-gray shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-jamuni pink-glow">
                  <div className="max-h-[400px] overflow-y-auto">
                    {item.children?.map((child) => (
                      <Link
                        key={child.name}
                        to={child.path}
                        className={`block px-4 py-2 text-sm ${location.pathname === child.path ? "text-pink-DEFAULT bg-dark-light" : "text-white"} hover:bg-dark-light hover:text-pink-DEFAULT transition-colors duration-300`}
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
          <div className="flex items-center relative group">
            <Button
              variant="ghost"
              size="icon"
              className="group-hover:bg-dark-light text-white hover:text-pink-DEFAULT"
            >
              <Search className="h-5 w-5" />
            </Button>
            <div className="absolute right-0 top-full mt-2 w-80 bg-dark-gray shadow-lg rounded-md overflow-hidden z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-4 border border-jamuni pink-glow">
              <div className="relative mb-3">
                <Input
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 bg-dark-light text-white border-jamuni"
                />
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-DEFAULT" />
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="flex-1 bg-gradient-pink hover:bg-gradient-button-hover text-white"
                >
                  Search
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-jamuni text-white hover:bg-dark-light hover:text-pink-DEFAULT"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
          <Link
            to="/get-a-quote"
            className="bg-gradient-pink text-white px-4 py-2 rounded flex items-center font-medium text-sm hover:shadow-md hover:shadow-pink-DEFAULT/30 transition-all duration-300 pink-glow"
          >
            Get A Quote <span className="ml-1">→</span>
          </Link>
          <button className="lg:hidden">
            <Menu className="h-6 w-6 text-pink-DEFAULT" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-pink-DEFAULT"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-dark-gray border-l border-jamuni pink-glow"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between py-4 border-b border-jamuni">
                <Link
                  to="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="bg-gradient-card text-white font-bold text-xl px-4 py-2 rounded pink-glow">
                    WebInfoTech
                  </div>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-pink-DEFAULT"
                >
                  <X className="h-5 w-5 text-pink-DEFAULT" />
                </Button>
              </div>
              <nav className="flex-1 overflow-auto py-4">
                <ul className="space-y-2">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      {item.hasChildren ? (
                        <div className="px-4">
                          <div className="flex items-center justify-between py-2 font-medium text-white">
                            <span className="hover:text-pink-DEFAULT transition-colors duration-300">
                              {item.name}
                            </span>
                            <ChevronDown className="h-4 w-4 text-pink-DEFAULT" />
                          </div>
                          <ul className="pl-4 pt-2 pb-1 space-y-1 max-h-[300px] overflow-y-auto border-l border-jamuni">
                            {item.children?.map((child) => (
                              <li key={child.name}>
                                <Link
                                  to={child.path}
                                  className={`block py-2 text-sm ${location.pathname === child.path ? "text-pink-DEFAULT" : "text-gray-300"} hover:text-pink-DEFAULT transition-colors duration-300`}
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
                          className={`block px-4 py-2 ${isActive(item.path) ? "text-pink-DEFAULT font-medium" : "text-white"} hover:text-pink-DEFAULT transition-colors duration-300`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="py-4 border-t border-jamuni space-y-3">
                <div className="px-4 space-y-2">
                  <div className="flex items-center text-sm text-gray-300">
                    <Phone className="h-4 w-4 mr-2 text-pink-DEFAULT" />
                    <span>7233062243</span>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-pink text-white py-2 rounded hover:shadow-md hover:shadow-pink-DEFAULT/30 transition-all duration-300 pink-glow"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="inline-block mr-2 h-4 w-4" /> Contact Us
                </Link>
                <Link
                  to="/get-a-quote"
                  className="block w-full text-center border border-pink-DEFAULT text-pink-DEFAULT py-2 rounded hover:bg-gradient-pink hover:text-white transition-colors duration-300"
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

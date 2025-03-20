import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const ITBlogsPage = () => {
  const categories = [
    "All",
    "Cloud Computing",
    "Cybersecurity",
    "Software Development",
    "IT Infrastructure",
    "Digital Transformation",
    "Tech Trends",
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Cloud Computing: Trends to Watch in 2023",
      excerpt:
        "Explore emerging cloud technologies and strategies that are reshaping how businesses leverage cloud infrastructure for growth and innovation.",
      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80",
      date: "June 15, 2023",
      author: "Michael Chen",
      category: "Cloud Computing",
      readTime: "8 min read",
    },
    {
      id: 2,
      title: "Cybersecurity Best Practices for Remote Workforces",
      excerpt:
        "Learn essential security measures to protect your business data and systems in the era of distributed teams and remote work environments.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=500&q=80",
      date: "May 28, 2023",
      author: "Sarah Johnson",
      category: "Cybersecurity",
      readTime: "6 min read",
    },
    {
      id: 3,
      title:
        "Microservices vs. Monolithic Architecture: Choosing the Right Approach",
      excerpt:
        "A comprehensive comparison of architectural patterns to help you make informed decisions for your software development projects.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&q=80",
      date: "April 12, 2023",
      author: "David Thompson",
      category: "Software Development",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "Optimizing IT Infrastructure for Performance and Cost Efficiency",
      excerpt:
        "Strategies to streamline your IT infrastructure, reduce operational costs, and improve system performance across your organization.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
      date: "March 5, 2023",
      author: "Jessica Lee",
      category: "IT Infrastructure",
      readTime: "7 min read",
    },
    {
      id: 5,
      title: "Digital Transformation Roadmap for Traditional Businesses",
      excerpt:
        "A step-by-step guide to help established companies navigate the challenges of digital transformation and embrace new technologies.",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&q=80",
      date: "February 20, 2023",
      author: "Emily Rodriguez",
      category: "Digital Transformation",
      readTime: "9 min read",
    },
    {
      id: 6,
      title: "The Rise of Edge Computing: Applications and Benefits",
      excerpt:
        "Discover how edge computing is revolutionizing data processing and enabling new capabilities for IoT, AI, and real-time applications.",
      image:
        "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=500&q=80",
      date: "January 8, 2023",
      author: "John Smith",
      category: "Tech Trends",
      readTime: "8 min read",
    },
    {
      id: 7,
      title: "Implementing DevOps: Challenges and Solutions",
      excerpt:
        "Practical insights on overcoming common obstacles when adopting DevOps practices and building a culture of continuous improvement.",
      image:
        "https://images.unsplash.com/photo-1537884944318-390069bb8665?w=500&q=80",
      date: "December 12, 2022",
      author: "Alex Martinez",
      category: "Software Development",
      readTime: "11 min read",
    },
    {
      id: 8,
      title: "AI and Machine Learning in Business: Practical Applications",
      excerpt:
        "Real-world examples of how businesses are leveraging AI and ML technologies to gain competitive advantages and drive innovation.",
      image:
        "https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&q=80",
      date: "November 5, 2022",
      author: "Lisa Wang",
      category: "Tech Trends",
      readTime: "9 min read",
    },
    {
      id: 9,
      title: "Zero Trust Security: Beyond the Perimeter",
      excerpt:
        "Understanding the principles of zero trust architecture and how to implement this security model in your organization.",
      image:
        "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=500&q=80",
      date: "October 18, 2022",
      author: "Robert Johnson",
      category: "Cybersecurity",
      readTime: "7 min read",
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              IT Blogs & Insights
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest technology trends, best practices,
              and expert insights to help your business thrive in the digital
              age.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full ${activeCategory === category ? "bg-blue-600 hover:bg-blue-700" : "text-gray-700 hover:text-blue-600"}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <span className="text-blue-600 font-semibold">
                          {post.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm text-gray-700">
                          {post.author}
                        </span>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <Link to={`/it-blogs/${post.id}`}>
                      <Button variant="link" className="text-blue-600 p-0">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600">
                No blog posts found in this category. Please select another
                category.
              </p>
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
              onClick={() => console.log("Load more articles")}
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ITBlogsPage;

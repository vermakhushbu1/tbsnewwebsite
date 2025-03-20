import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Effective SEO Strategies for 2023",
      excerpt:
        "Discover the latest SEO techniques that can help your business rank higher in search engine results and drive more organic traffic.",
      image:
        "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=500&q=80",
      date: "June 15, 2023",
      author: "Sarah Johnson",
      category: "SEO",
    },
    {
      id: 2,
      title: "The Ultimate Guide to Social Media Marketing",
      excerpt:
        "Learn how to leverage social media platforms to build brand awareness, engage with your audience, and drive conversions.",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&q=80",
      date: "May 28, 2023",
      author: "Michael Chen",
      category: "Social Media",
    },
    {
      id: 3,
      title: "How to Create a High-Converting Landing Page",
      excerpt:
        "Explore the key elements of effective landing pages that capture leads and drive conversions for your business.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&q=80",
      date: "April 12, 2023",
      author: "Emily Rodriguez",
      category: "Web Design",
    },
    {
      id: 4,
      title: "Email Marketing Best Practices for Higher Open Rates",
      excerpt:
        "Discover proven strategies to improve your email open rates, click-through rates, and overall campaign performance.",
      image:
        "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80",
      date: "March 5, 2023",
      author: "David Thompson",
      category: "Email Marketing",
    },
    {
      id: 5,
      title: "The Role of AI in Modern Digital Marketing",
      excerpt:
        "Explore how artificial intelligence is transforming digital marketing and how businesses can leverage AI-powered tools.",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&q=80",
      date: "February 20, 2023",
      author: "Jessica Lee",
      category: "Technology",
    },
    {
      id: 6,
      title: "Content Marketing Strategies That Drive Results",
      excerpt:
        "Learn how to develop a content marketing strategy that attracts, engages, and converts your target audience.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&q=80",
      date: "January 8, 2023",
      author: "John Smith",
      category: "Content Marketing",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <section className="py-20 px-4 md:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Insights, tips, and strategies to help your business succeed in
              the digital world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "All",
              "SEO",
              "Social Media",
              "Web Design",
              "Email Marketing",
              "Content Marketing",
              "Technology",
            ].map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={`rounded-full ${category === "All" ? "bg-blue-600 hover:bg-blue-700" : "text-gray-700 hover:text-blue-600"}`}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
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
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-blue-600">
                      {post.category}
                    </span>
                    <span className="mx-2 text-gray-300">•</span>
                    <span className="text-sm text-gray-500">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      By {post.author}
                    </span>
                    <Link to={`/blog/${post.id}`}>
                      <Button variant="link" className="text-blue-600 p-0">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

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

export default BlogPage;

import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import { Button } from "../../ui/button";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

const BlogPostDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API or database
  // For demo purposes, we're using a static blog post
  const blogPost = {
    id: id || "1",
    title: "10 Effective SEO Strategies for 2023",
    excerpt:
      "Discover the latest SEO techniques that can help your business rank higher in search engine results and drive more organic traffic.",
    content: `
      <p>Search Engine Optimization (SEO) continues to evolve as search engines refine their algorithms and user behaviors change. Staying ahead of these changes is crucial for maintaining and improving your website's visibility in search results.</p>
      
      <h2>1. Focus on User Experience</h2>
      <p>Google's Page Experience update has made user experience metrics more important than ever. Factors like page load speed, mobile-friendliness, and interactive elements all contribute to how well your site ranks. Ensure your website loads quickly, is easy to navigate, and provides value to visitors.</p>
      
      <h2>2. Create High-Quality, Comprehensive Content</h2>
      <p>Content remains king in SEO. Focus on creating in-depth, valuable content that thoroughly addresses user search intent. Longer, more comprehensive content tends to rank better for competitive keywords, but quality always trumps quantity.</p>
      
      <h2>3. Optimize for Voice Search</h2>
      <p>With the increasing use of voice assistants, optimizing for voice search is becoming essential. Voice searches tend to be more conversational and question-based, so incorporate natural language and FAQ sections into your content.</p>
      
      <h2>4. Leverage Video Content</h2>
      <p>Video content continues to grow in popularity and can significantly increase engagement on your site. Create informative videos that complement your written content, and make sure to optimize video titles, descriptions, and tags.</p>
      
      <h2>5. Focus on E-A-T (Expertise, Authoritativeness, Trustworthiness)</h2>
      <p>Google places high importance on E-A-T, especially for YMYL (Your Money or Your Life) topics. Establish your expertise by showcasing credentials, getting quality backlinks, and providing accurate, well-researched information.</p>
      
      <h2>6. Optimize for Core Web Vitals</h2>
      <p>Core Web Vitals are a set of metrics related to speed, responsiveness, and visual stability. Improving these metrics can enhance user experience and boost your rankings. Use tools like Google PageSpeed Insights to identify and fix issues.</p>
      
      <h2>7. Build Quality Backlinks</h2>
      <p>Backlinks remain a crucial ranking factor. Focus on earning high-quality, relevant backlinks through creating linkable assets, guest posting on reputable sites, and building relationships within your industry.</p>
      
      <h2>8. Implement Schema Markup</h2>
      <p>Schema markup helps search engines understand your content better and can result in rich snippets in search results. Implement relevant schema types for your content to enhance visibility and click-through rates.</p>
      
      <h2>9. Optimize for Local SEO</h2>
      <p>For businesses with physical locations, local SEO is essential. Ensure your Google Business Profile is complete and accurate, get local citations, and encourage customer reviews to improve local search visibility.</p>
      
      <h2>10. Monitor and Adapt to Algorithm Updates</h2>
      <p>Search engines regularly update their algorithms. Stay informed about these changes and be ready to adapt your strategy accordingly. Focus on providing value to users rather than trying to game the system, as this approach tends to be more sustainable in the long run.</p>
      
      <h2>Conclusion</h2>
      <p>Implementing these SEO strategies can help improve your website's visibility and drive more organic traffic. Remember that SEO is a long-term investment, and consistent effort is required to achieve and maintain good rankings. Stay focused on providing value to your audience, and the results will follow.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1200&q=80",
    date: "June 15, 2023",
    author: "Sarah Johnson",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    category: "SEO",
    readTime: "8 min read",
    tags: ["SEO", "Digital Marketing", "Content Strategy", "Google"],
    relatedPosts: [
      {
        id: "2",
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
        id: "3",
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
        id: "4",
        title: "Email Marketing Best Practices for Higher Open Rates",
        excerpt:
          "Discover proven strategies to improve your email open rates, click-through rates, and overall campaign performance.",
        image:
          "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=500&q=80",
        date: "March 5, 2023",
        author: "David Thompson",
        category: "Email Marketing",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            to="/blog"
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>

          <span className="text-sm font-medium text-blue-600 mb-2 block">
            {blogPost.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {blogPost.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 text-sm mb-6">
            <div className="flex items-center mr-6 mb-2">
              <User className="w-4 h-4 mr-2" />
              <span>{blogPost.author}</span>
            </div>
            <div className="flex items-center mr-6 mb-2">
              <Calendar className="w-4 h-4 mr-2" />
              <span>{blogPost.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <Clock className="w-4 h-4 mr-2" />
              <span>{blogPost.readTime}</span>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-lg overflow-hidden">
          <img
            src={blogPost.image}
            alt={blogPost.title}
            className="w-full h-auto"
          />
        </div>

        <div
          className="prose prose-lg max-w-none mb-12"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />

        <div className="border-t border-gray-200 pt-6 mb-12">
          <div className="flex flex-wrap items-center">
            <div className="mr-6 mb-4">
              <span className="text-gray-700 font-medium mr-2">Tags:</span>
              <div className="inline-flex flex-wrap">
                {blogPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded mr-2 mb-2"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <span className="text-gray-700 font-medium mr-2">Share:</span>
              <div className="inline-flex space-x-2">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-900">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPost.relatedPosts.map((post) => (
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
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="link" className="text-blue-600 p-0">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPostDetailPage;

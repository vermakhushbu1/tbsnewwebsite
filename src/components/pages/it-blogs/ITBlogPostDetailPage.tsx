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

const ITBlogPostDetailPage = () => {
  const { id } = useParams<{ id: string }>();

  // This would typically come from an API or database
  // For demo purposes, we're using a static blog post
  const blogPost = {
    id: id || "1",
    title: "The Future of Cloud Computing: Trends to Watch in 2023",
    excerpt:
      "Explore emerging cloud technologies and strategies that are reshaping how businesses leverage cloud infrastructure for growth and innovation.",
    content: `
      <p>Cloud computing continues to evolve at a rapid pace, transforming how businesses operate and innovate. As we move through 2023, several key trends are emerging that will shape the future of cloud technology and its applications across industries.</p>
      
      <h2>1. Multi-Cloud and Hybrid Cloud Strategies</h2>
      <p>Organizations are increasingly adopting multi-cloud and hybrid cloud approaches to avoid vendor lock-in, optimize costs, and leverage the best services from different providers. This trend is expected to accelerate as businesses seek greater flexibility and resilience in their IT infrastructure. According to Gartner, by 2025, over 75% of organizations will have adopted a multi-cloud or hybrid cloud strategy.</p>
      
      <h2>2. Serverless Computing Expansion</h2>
      <p>Serverless computing continues to gain traction as it allows developers to build and run applications without managing servers. This model offers benefits such as reduced operational complexity, automatic scaling, and cost efficiency through pay-per-use pricing. We're seeing serverless architectures being applied to more complex workloads and becoming a mainstream approach for application development.</p>
      
      <h2>3. AI and ML Cloud Services</h2>
      <p>Cloud providers are expanding their artificial intelligence and machine learning offerings, making these technologies more accessible to businesses of all sizes. Pre-built AI models, automated machine learning tools, and specialized AI infrastructure are enabling organizations to implement AI solutions without extensive expertise or investment. This democratization of AI is driving innovation across industries.</p>
      
      <h2>4. Edge Computing Integration</h2>
      <p>The integration of edge computing with cloud services is addressing the need for lower latency and reduced bandwidth usage for certain applications. This hybrid approach allows data processing to occur closer to the source while maintaining connectivity to centralized cloud resources for more intensive computing tasks. Industries such as manufacturing, healthcare, and autonomous vehicles are particularly benefiting from this trend.</p>
      
      <h2>5. Containerization and Kubernetes Dominance</h2>
      <p>Containers and Kubernetes have become the standard for application deployment and orchestration in the cloud. This trend is expected to continue as organizations seek consistent development and deployment experiences across different environments. The ecosystem around Kubernetes is maturing, with more tools and services designed to simplify management and enhance functionality.</p>
      
      <h2>6. Sustainable Cloud Computing</h2>
      <p>As environmental concerns grow, cloud providers and users are increasingly focusing on sustainability. Major providers are committing to carbon-neutral or carbon-negative operations, and organizations are considering the environmental impact when selecting cloud services. Energy-efficient data centers, renewable energy sources, and optimization of resource usage are becoming important factors in cloud strategy.</p>
      
      <h2>7. Cloud Security Evolution</h2>
      <p>With the expanding cloud footprint, security approaches are evolving to address new challenges. Zero Trust security models, which verify every access request regardless of source, are becoming more prevalent. Additionally, cloud-native security tools that are designed specifically for dynamic, distributed environments are replacing traditional security measures.</p>
      
      <h2>8. FinOps for Cost Optimization</h2>
      <p>As cloud spending increases, organizations are adopting FinOps (Financial Operations) practices to optimize costs and maximize value. This collaborative approach brings together finance, technology, and business teams to manage cloud costs effectively while maintaining performance and innovation. FinOps tools and platforms are becoming essential components of cloud management strategies.</p>
      
      <h2>9. Industry-Specific Cloud Solutions</h2>
      <p>Cloud providers are developing more specialized solutions tailored to specific industries such as healthcare, finance, and manufacturing. These industry clouds include compliance features, specialized tools, and pre-configured environments designed to address sector-specific challenges and requirements.</p>
      
      <h2>10. Quantum Computing as a Service</h2>
      <p>While still in early stages, quantum computing is beginning to emerge as a cloud service. Major providers are offering access to quantum computers and simulators, allowing organizations to experiment with this revolutionary technology without significant upfront investment. As quantum computing matures, it promises to solve complex problems that are beyond the capabilities of classical computers.</p>
      
      <h2>Conclusion</h2>
      <p>The cloud computing landscape continues to evolve, offering new opportunities for innovation, efficiency, and growth. Organizations that stay informed about these trends and adapt their strategies accordingly will be well-positioned to leverage the full potential of cloud technologies. As we move forward, the integration of cloud with emerging technologies like AI, edge computing, and quantum computing will unlock new possibilities and reshape how we think about IT infrastructure and application development.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1200&q=80",
    date: "June 15, 2023",
    author: "Michael Chen",
    authorImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    category: "Cloud Computing",
    readTime: "8 min read",
    tags: [
      "Cloud Computing",
      "Technology Trends",
      "Digital Transformation",
      "IT Infrastructure",
    ],
    relatedPosts: [
      {
        id: "2",
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
        id: "3",
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
        id: "4",
        title:
          "Optimizing IT Infrastructure for Performance and Cost Efficiency",
        excerpt:
          "Strategies to streamline your IT infrastructure, reduce operational costs, and improve system performance across your organization.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&q=80",
        date: "March 5, 2023",
        author: "Jessica Lee",
        category: "IT Infrastructure",
        readTime: "7 min read",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <Navbar />

      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            to="/it-blogs"
            className="flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to IT Blogs
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

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPost.relatedPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-xs font-medium text-blue-600 mb-1 block">
                    {post.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-xs text-gray-500">{post.date}</div>
                    <Link
                      to={`/it-blogs/${post.id}`}
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Read More
                    </Link>
                  </div>
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

export default ITBlogPostDetailPage;

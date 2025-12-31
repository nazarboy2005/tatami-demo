import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import {
  FaCalendar,
  FaUser,
  FaTag,
  FaSearch,
  FaChevronRight,
} from "react-icons/fa";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  readTime: string;
}

interface ResourceItem {
  id: number;
  title: string;
  description: string;
  link: string;
  type: "guide" | "webinar" | "whitepaper";
}

export default function InsightsPage() {
  // Sample blog posts data
  const featuredPost: BlogPost = {
    id: 1,
    title: "The Future of Rent Payments in Qatar: Digital Transformation",
    excerpt:
      "Explore how digital solutions are transforming Qatar's rental payment landscape, making it easier for both property managers and tenants to handle transactions efficiently.",
    date: "June 15, 2023",
    author: "Mohammed Al-Thani",
    category: "Qatar Market",
    image: "/images/blog/digital-payments.jpg",
    readTime: "8 min read",
  };

  const recentPosts: BlogPost[] = [
    {
      id: 2,
      title: "5 Ways Qatari Property Managers Can Improve Rent Collection",
      excerpt:
        "Discover proven strategies that help property managers in Qatar streamline their rent collection process while maintaining positive relationships with tenants.",
      date: "May 28, 2023",
      author: "Ahmed",
      category: "Property Management",
      image: "/images/blog/property-management.jpg",
      readTime: "6 min read",
    },
    {
      id: 3,
      title: "Qatar Rental Laws: Understanding Late Fees and Regulations",
      excerpt:
        "A comprehensive guide to setting appropriate late fees in Qatar, including legal considerations and best practices for property managers.",
      date: "May 15, 2023",
      author: "Fatima",
      category: "Legal",
      image: "/images/blog/legal-advice.jpg",
      readTime: "10 min read",
    },
    {
      id: 4,
      title: "How Tenants in Qatar Can Build Credit Through Rent Payments",
      excerpt:
        "Learn how modern payment platforms allow tenants in Qatar to build credit history by reporting regular rent payments to credit bureaus.",
      date: "April 30, 2023",
      author: "Abdulrahman",
      category: "Tenant Tips",
      image: "/images/blog/credit-score.jpg",
      readTime: "5 min read",
    },
    {
      id: 5,
      title: "Digital Payment Solutions for Qatar's Rental Market",
      excerpt:
        "Explore how automated reminders can reduce late payments and improve cash flow for property management companies across Qatar.",
      date: "April 15, 2023",
      author: "Noor Al-Sulaiti",
      category: "Technology",
      image: "/images/blog/automation.jpg",
      readTime: "7 min read",
    },
    {
      id: 6,
      title: "Security Deposits in Qatar: Best Practices for Property Managers",
      excerpt:
        "A detailed guide to handling security deposits properly in Qatar, including collection, storage, and return processes that comply with local regulations.",
      date: "March 28, 2023",
      author: "Khalid Al-Malki",
      category: "Property Management",
      image: "/images/blog/security-deposit.jpg",
      readTime: "9 min read",
    },
  ];

  // Sample resources data
  const resources: ResourceItem[] = [
    {
      id: 1,
      title: "Complete Guide to Digital Rent Collection in Qatar",
      description:
        "Learn everything you need to know about transitioning from post-dated checks to digital rent collection in Qatar's property market.",
      link: "/resources/digital-rent-collection-guide",
      type: "guide",
    },
    {
      id: 2,
      title: "Rental Payment Automation for Qatar's Property Market",
      description:
        "Join our experts as they discuss how automation can save time and reduce errors in your rent collection process in Qatar.",
      link: "/resources/payment-automation-webinar",
      type: "webinar",
    },
    {
      id: 3,
      title: "Qatar's Rental Market: 2023 Industry Report",
      description:
        "Comprehensive analysis of current trends and future projections in Qatar's rental payment landscape.",
      link: "/resources/qatar-rental-market-report-2023",
      type: "whitepaper",
    },
    {
      id: 4,
      title: "Legal Compliance in Qatar's Rental Market",
      description:
        "Ensure your rent collection practices comply with Qatar's regulations with this essential guide for property managers.",
      link: "/resources/qatar-legal-compliance-guide",
      type: "guide",
    },
  ];

  // Categories for filter
  const categories = [
    "All",
    "Qatar Market",
    "Property Management",
    "Technology",
    "Tenant Tips",
    "Legal",
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#025356] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay up to date with the latest trends, tips, and best practices
              in Qatar's rental payment industry
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#025356] mb-8">
              Featured Article
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/2">
                  <div className="h-64 md:h-full bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Featured Image</span>
                  </div>
                </div>
                <div className="p-8 md:w-1/2">
                  <div className="uppercase tracking-wide text-sm text-[#025356] font-semibold mb-1">
                    {featuredPost.category}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    <Link
                      href={`/insights/${featuredPost.id}`}
                      className="hover:underline"
                    >
                      {featuredPost.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">{featuredPost.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-6">
                    <FaCalendar className="mr-2" />
                    <span className="mr-4">{featuredPost.date}</span>
                    <FaUser className="mr-2" />
                    <span className="mr-4">{featuredPost.author}</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <Link
                    href={`/insights/${featuredPost.id}`}
                    className="inline-flex items-center text-[#025356] font-medium hover:underline"
                  >
                    Read full article{" "}
                    <FaChevronRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-[#025356]">
                Latest Articles
              </h2>

              {/* Search and filter */}
              <div className="w-full lg:w-auto mt-6 lg:mt-0 flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>

                <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent">
                  {categories.map((category, index) => (
                    <option
                      key={index}
                      value={category === "All" ? "" : category}
                    >
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gray-300 flex items-center justify-center">
                    <span className="text-gray-500">Post Image</span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <FaTag className="mr-1" />
                      <span>{post.category}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <Link
                        href={`/insights/${post.id}`}
                        className="hover:underline"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 mb-4">
                      <FaCalendar className="mr-1" />
                      <span className="mr-3">{post.date}</span>
                      <FaUser className="mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <Link
                      href={`/insights/${post.id}`}
                      className="text-sm inline-flex items-center text-[#025356] font-medium hover:underline"
                    >
                      Read more <FaChevronRight className="ml-1 text-xs" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button className="px-8 py-3 bg-white border-2 border-[#025356] text-[#025356] font-medium rounded-md hover:bg-gray-50 transition-colors">
                View All Articles
              </button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#025356] mb-8">
              Resources
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      {resource.type === "guide" && (
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                      )}
                      {resource.type === "webinar" && (
                        <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                      )}
                      {resource.type === "whitepaper" && (
                        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-gray-600 mb-3">
                        {resource.description}
                      </p>
                      <span className="text-xs uppercase font-semibold text-gray-500">
                        {resource.type}
                      </span>
                      <div className="mt-4">
                        <Link
                          href={resource.link}
                          className="inline-flex items-center text-[#025356] font-medium hover:underline"
                        >
                          {resource.type === "guide"
                            ? "Download guide"
                            : resource.type === "webinar"
                              ? "Watch webinar"
                              : "Download whitepaper"}
                          <FaChevronRight className="ml-2 text-sm" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 bg-[#025356]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Up to Date
            </h2>
            <p className="text-lg text-white opacity-90 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest insights about
              Qatar's rental market, industry trends, and tips directly to your
              inbox.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-[#025356] font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-white opacity-75 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

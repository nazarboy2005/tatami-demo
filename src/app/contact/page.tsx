"use client";
import React, { useState } from "react";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import DirectionLayout from "@/components/DirectionLayout";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ContactPage() {
  // Just reference the hook without destructuring to prevent unused var warnings
  useLanguage();

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checkbox.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all required fields");
      return;
    }

    try {
      setIsSubmitting(true);
      setError("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Show success message
      setIsSuccess(true);

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      });
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <DirectionLayout className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#025356] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We&apos;re here to help! Reach out to our team with any questions
              or feedback about digital rent payments in Qatar.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-[#025356] mb-6">
                  Send Us a Message
                </h2>

                {isSuccess ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6">
                    <h3 className="text-lg font-medium mb-2">
                      Message sent successfully!
                    </h3>
                    <p>
                      Thank you for contacting us. We&apos;ll get back to you
                      shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-4 text-[#025356] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-4">
                        {error}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-gray-700 font-medium mb-2"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone Number (Optional)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="features">Feature Request</option>
                        <option value="billing">Billing Questions</option>
                        <option value="partnership">
                          Partnership Opportunities
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        placeholder="Tell us how we can help you"
                        required
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="newsletter"
                          name="newsletter"
                          type="checkbox"
                          checked={formData.newsletter}
                          onChange={handleChange}
                          className="w-4 h-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#025356] focus:border-transparent"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="newsletter" className="text-gray-600">
                          Subscribe to our newsletter for updates and insights
                        </label>
                      </div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 px-8 bg-[#025356] text-white font-medium rounded-md hover:bg-[#013a3c] transition-colors disabled:opacity-70"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-[#025356] mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  If you prefer, you can reach out to us directly using the
                  contact information below. Our team is ready to assist you
                  with any questions about digital rent payments in Qatar.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaMapMarkerAlt className="h-6 w-6 text-[#025356]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Our Office
                      </h3>
                      <p className="mt-1 text-gray-600">
                        5th Floor, Palm Tower B
                        <br />
                        Doha, Qatar
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaPhone className="h-6 w-6 text-[#025356]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Phone
                      </h3>
                      <p className="mt-1 text-gray-600">+974 60044477</p>
                      <p className="mt-1 text-sm text-gray-500">
                        Sunday through Thursday, 8AM to 5PM AST
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <FaEnvelope className="h-6 w-6 text-[#025356]" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Email
                      </h3>
                      <p className="mt-1 text-gray-600">
                        <a
                          href="mailto:hello@tatamihq.com"
                          className="text-[#025356] hover:underline"
                        >
                          hello@tatamihq.com
                        </a>
                      </p>
                      <p className="mt-1 text-sm text-gray-500">
                        We&apos;ll respond as soon as possible
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-10">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    {/* <a href="#" className="text-gray-500 hover:text-[#025356]">
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a> */}
                    <a
                      href="https://www.linkedin.com/company/tatamihq/"
                      className="text-gray-500 hover:text-[#025356]"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    {/* <a href="#" className="text-gray-500 hover:text-[#025356]">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a> */}
                    <a
                      href="https://www.instagram.com/tatamihq/"
                      className="text-gray-500 hover:text-[#025356]"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[#025356] mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  How quickly can I expect a response?
                </h3>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 24-48 business
                  hours. For urgent matters, please call our support line.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Do you offer product demos?
                </h3>
                <p className="text-gray-600">
                  Yes! We&apos;d be happy to schedule a personalized demo of our
                  platform. Please select &quot;Product Demo&quot; in the
                  subject line of your message.
                </p>
              </div>
              {/* <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  I&apos;m having technical issues. How can I get help?
                </h3>
                <p className="text-gray-600">
                  For technical support, please contact us through this form and
                  select "Technical Support" as the subject. Providing
                  screenshots or error messages will help us resolve your issue
                  faster.
                </p>
              </div> */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Are you hiring?
                </h3>
                <p className="text-gray-600">
                  We&apos;re always looking for talented individuals to join our
                  team in Qatar! Check out our careers page for current openings
                  or send your resume to{" "}
                  <a
                    href="mailto:hello@tatamihq.com"
                    className="text-[#025356] hover:underline"
                  >
                    hello@tatamihq.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </DirectionLayout>
  );
}

"use client";

import React from "react";
import Image from "next/image";

export interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    title?: string;
    company?: string;
    image?: string;
  };
  rating?: number;
  variant?: "simple" | "card" | "quote";
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  rating,
  variant = "simple",
  className = "",
}) => {
  const renderStars = () => {
    if (!rating) return null;

    return (
      <div className="flex items-center mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const renderSimple = () => (
    <div className={`testimonial-simple ${className}`}>
      <p className="text-gray-700 italic mb-4">{quote}</p>
      <div className="flex items-center">
        {author.image && (
          <div className="mr-3">
            <Image
              src={author.image}
              alt={author.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900">{author.name}</p>
          {(author.title || author.company) && (
            <p className="text-sm text-gray-600">
              {author.title}
              {author.title && author.company && ", "}
              {author.company}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderCard = () => (
    <div
      className={`testimonial-card bg-white p-6 rounded-lg shadow-md ${className}`}
    >
      {renderStars()}
      <p className="text-gray-700 mb-6">{quote}</p>
      <div className="flex items-center">
        {author.image && (
          <div className="mr-3">
            <Image
              src={author.image}
              alt={author.name}
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900">{author.name}</p>
          {(author.title || author.company) && (
            <p className="text-sm text-gray-600">
              {author.title}
              {author.title && author.company && ", "}
              {author.company}
            </p>
          )}
        </div>
      </div>
    </div>
  );

  const renderQuote = () => (
    <div className={`testimonial-quote relative ${className}`}>
      <svg
        className="absolute left-0 top-0 transform -translate-y-4 text-blue-200 w-16 h-16"
        fill="currentColor"
        viewBox="0 0 32 32"
        aria-hidden="true"
      >
        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
      </svg>
      <div className="relative pl-12 pt-8">
        <p className="text-gray-700 text-xl italic mb-6">{quote}</p>
        <div className="flex items-center">
          {author.image && (
            <div className="mr-3">
              <Image
                src={author.image}
                alt={author.name}
                width={56}
                height={56}
                className="rounded-full"
              />
            </div>
          )}
          <div>
            <p className="font-medium text-lg text-gray-900">{author.name}</p>
            {(author.title || author.company) && (
              <p className="text-gray-600">
                {author.title}
                {author.title && author.company && ", "}
                {author.company}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  switch (variant) {
    case "card":
      return renderCard();
    case "quote":
      return renderQuote();
    case "simple":
    default:
      return renderSimple();
  }
};

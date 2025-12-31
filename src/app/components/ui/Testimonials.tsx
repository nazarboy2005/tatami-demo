import React, { useState, useEffect } from "react";
import { Container } from "./Container";

export interface TestimonialProps {
  quote: string;
  name: string;
  title?: string;
  image?: string;
  rating?: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  name,
  title,
  image,
  rating = 5,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col h-full">
      {/* Stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            style={{ fill: i < rating ? "#025356" : "#e5e7eb" }}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <div className="mb-6 flex-grow">
        <p className="text-[#617268] italic">"{quote}"</p>
      </div>

      {/* Author */}
      <div className="flex items-center">
        {image && (
          <div className="mr-4">
            <div
              className="h-12 w-12 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        )}
        <div>
          <p className="font-bold text-[#025356]">{name}</p>
          {title && <p className="text-sm text-[#617268]">{title}</p>}
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC<{
  testimonials: TestimonialProps[];
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
}> = ({ testimonials, title, subtitle, backgroundColor = "white" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16" style={{ backgroundColor }}>
      <Container>
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#025356] mb-4 font-heading">
            {title}
          </h2>
        )}

        {subtitle && (
          <p className="text-center text-[#617268] max-w-3xl mx-auto mb-12">
            {subtitle}
          </p>
        )}

        {/* Desktop - Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Mobile - Carousel */}
        <div className="md:hidden">
          <div className="relative px-4">
            <TestimonialCard {...testimonials[activeIndex]} />

            {/* Navigation Dots */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-3 w-3 mx-1 rounded-full ${
                    index === activeIndex ? "bg-[#025356]" : "bg-[#d2fce3]"
                  }`}
                  onClick={() => setActiveIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

import React, { useMemo } from 'react';
import TestimonialCard from './TestimonialCard';
import { normalizedReviews } from '../../data/reviews';
import ArrowIcon from '../../assets/arrow-right.png'
import { Route } from 'react-router-dom';

const TestimonialCarousel = () => {
  // Prepare data: shuffle once per mount and duplicate for seamless loop
  const duplicatedTestimonials = useMemo(() => {
    const arr = [...normalizedReviews];
    // Fisher–Yates shuffle for variety
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  const base = arr.map((r, idx) => ({ ...r, id: r.id ?? `rev-${idx}` }));
    return [...base, ...base];
  }, []);

  return (
    <div className="overflow-hidden bg-[#f3ede6] py-12">
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-center mb-4 text-[#232323]">
        Real Stories, Real Success
      </h2>
      <p className="text-[#6d7b92] text-center text-base md:text-lg max-w-2xl mx-auto mb-10">
        Discover how businesses like yours have transformed their operations and achieved their goals with our expert guidance. See what our clients have to say about their journey to success.
      </p>
      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>

  {/* First row - moving left */}
      <div className="mb-2">
        <div className="flex animate-scroll-left w-[200%]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`left-${testimonial.id}-${index}`} className="flex-shrink-0 mx-4">
              <TestimonialCard
                name={testimonial.name}
                title={testimonial.title}
                avatarUrl={testimonial.avatarUrl}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                originalUrl={testimonial.originalUrl}
                source={testimonial.source}
              />
            </div>
          ))}
        </div>
      </div>

  {/* Second row - moving right */}
      <div>
        <div className="flex animate-scroll-right w-[200%]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`right-${testimonial.id}-${index}`} className="flex-shrink-0 mx-4">
              <TestimonialCard
                name={testimonial.name}
                title={testimonial.title}
                avatarUrl={testimonial.avatarUrl}
                rating={testimonial.rating}
                testimonial={testimonial.testimonial}
                originalUrl={testimonial.originalUrl}
                source={testimonial.source}
              />
            </div>
          ))}
        </div>
      </div>
      <div className='mt-10 flex justify-center'>
         <button className="mt-auto bg-[#1976e7] hover:bg-[#125bb5] transition-colors text-white  px-6 py-2 rounded-full flex items-center gap-2 font-poppins">
            View More
            <img src={ArrowIcon} alt="Arrow icon" className="w-4 h-4" />
          </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
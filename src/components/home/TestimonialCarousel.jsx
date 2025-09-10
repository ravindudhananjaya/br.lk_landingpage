import React, { useMemo } from 'react';
import TestimonialCard from './TestimonialCard';
import { normalizedReviews } from '../../data/reviews';
import ArrowIcon from '../../assets/arrow-right.png'
import { Link } from 'react-router-dom';

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
    <div className="overflow-hidden bg-[#f3ede6] py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif md:text-[48px] lg:text-[48px] font-medium text-[40px] leading-tight text-center mb-4 text-[#232323]">
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
          animation: scroll-left 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-scroll-left { animation-duration: 35s; }
          .animate-scroll-right { animation-duration: 35s; }
        }
        @media (min-width: 1024px) {
          .animate-scroll-left { animation-duration: 30s; }
          .animate-scroll-right { animation-duration: 30s; }
        }
        .pause-on-hover:hover .animate-scroll-left,
        .pause-on-hover:hover .animate-scroll-right { animation-play-state: paused; }
      `}</style>

  {/* First row - moving left */}
      <div className="mb-4 sm:mb-6 pause-on-hover">
        <div className="flex animate-scroll-left w-[200%] gap-4 sm:gap-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`left-${testimonial.id}-${index}`} className="flex-shrink-0">
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
      <div className="pause-on-hover">
        <div className="flex animate-scroll-right w-[200%] gap-4 sm:gap-6">
          {duplicatedTestimonials.map((testimonial, index) => (
            <div key={`right-${testimonial.id}-${index}`} className="flex-shrink-0">
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
        <Link to="/testimonials" className="mt-auto bg-[#1976e7] hover:bg-[#125bb5] transition-colors text-white px-6 py-2 rounded-full flex items-center gap-2 font-poppins focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1976e7]">
          View More
          <img src={ArrowIcon} alt="Arrow icon" className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
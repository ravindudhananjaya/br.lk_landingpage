import React, { useMemo } from "react";
import TestimonialCard from "../Testimonials/TestimonialCard";
import Video1 from '../../assets/testimonials/video1.png'
import Video2 from '../../assets/testimonials/video2.png'
import ReviewIcon from '../../assets/testimonials/review.png'
import PlayButton from '../../assets/testimonials/playbutton.png'
import { normalizedReviews } from "../../data/reviews";


// Large video-style testimonial card
const VideoCard = ({ image, quote, author }) => (
  <div className="relative w-full h-full  md:h-170 rounded-2xl overflow-hidden shadow-md">
    <img src={image} alt={author} className="w-full h-full object-fit" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
    <div className="absolute left-4 right-4 bottom-4">
      <p className="text-white font-serif text-lg md:text-xl lg:text-2xl leading-snug">
        “{quote}”
      </p>
      <div className="mt-2 text-white/80 text-sm">{author}</div>
    </div>
    {/* Play button */}
    <button type="button" className="absolute right-4 bottom-4 w-10 h-10 rounded-full  grid place-items-center shadow">
      <img src={PlayButton} alt="Play" className="w-10 h-10" />
      <span className="sr-only">Play</span>
    </button>
  </div>
);

// Placeholder images (solid color blocks) so layout works without assets
const phImg =
  "data:image/svg+xml;utf8,\
  <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600'>\
    <rect width='100%' height='100%' fill='%23d1d5db'/>\
  </svg>";
const phAvatar =
  "data:image/svg+xml;utf8,\
  <svg xmlns='http://www.w3.org/2000/svg' width='64' height='64'>\
    <circle cx='32' cy='32' r='32' fill='%23e5e7eb'/>\
  </svg>";

const TestimonialContent = () => {
  // Prepare a stable list and slice into needed groups for layout
  const data = useMemo(() => normalizedReviews, []);
  const rightThree = data.slice(0, 3);
  const bottomTwo = data.slice(3, 5);
  const row2LeftThree = data.slice(5, 8);

  return (
    <section className="w-full bg-[#f3ede6] py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-0">
        {/* Row 1: 2-column, 3-row grid. Video spans all rows on left; three stacked cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 gap-6 lg:gap-8">
          {/* Video spanning full height of the right-side cards */}
          <div className="lg:row-span-3">
            <VideoCard
              image={Video1}
              quote="I love how simple the financial reports are!"
              author="Crystal Holden"
            />
          </div>

          {/* Right-side cards: three stacked, one per row */}
          <div className="grid grid-cols-1 lg:col-start-2 lg:row-start-1 lg:row-span-3 gap-4">
            {rightThree.map((r, i) => (
              <TestimonialCard
                key={i}
                name={r.name}
                title={r.title}
                avatarUrl={r.avatarUrl || ReviewIcon}
                rating={r.rating}
                testimonial={r.testimonial}
                showOriginalReview={true}
                originalUrl={r.originalUrl}
                source={r.source}
              />
            ))}
          </div>
        </div>

  {/* Bottom two cards, full-length (stacked full width) */}
  <div className="mt-4 grid lg:grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-1">
          {bottomTwo.map((r, i) => (
            <TestimonialCard
              key={`bottom-${i}`}
              name={r.name}
              title={r.title}
              avatarUrl={r.avatarUrl || ReviewIcon}
              rating={r.rating}
              testimonial={r.testimonial}
              showOriginalReview={true}
              originalUrl={r.originalUrl}
              source={r.source}
              
            />
          ))}
        </div>

        

        {/* Row 2: Left column (3 stacked cards), Right column (video) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-4">
          <div className="grid grid-cols-1 gap-4 order-2 lg:order-1">
            {row2LeftThree.map((r, i) => (
              <TestimonialCard
                key={i}
                name={r.name}
                title={r.title}
                avatarUrl={r.avatarUrl || ReviewIcon}
                rating={r.rating}
                testimonial={r.testimonial}
                showOriginalReview={true}
                originalUrl={r.originalUrl}
                source={r.source}
              />
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <VideoCard
              image={Video2}
              quote="Financial reporting is so much clearer now."
              author="James Phillips"
            />
          </div>
        </div>

        {/* Load more */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <button
            type="button"
            className="font-serif text-[#232323] text-sm md:text-base border border-[#232323]/40 rounded-md px-4 py-2 shadow-sm hover:bg-white/60 transition"
          >
            Load More …
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialContent;
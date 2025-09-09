import React from 'react';
import Video1 from '../../assets/testimonials/video1.png'
import Video2 from '../../assets/testimonials/video2.png'

const TestimonialCard = ({
  name,
  title,
  avatarUrl,
  rating,
  testimonial,
  showOriginalReview = true,
  className = "font-poppins",
  originalUrl,
  source,
}) => {
  // Generate star rating
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-xl ${
          index < rating ? 'text-orange-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className={`bg-white rounded-2xl py-5 px-5 shadow-sm border border-gray-100 flex flex-col overflow-hidden w-120 h-64 ${className}`}>
      {/* Header with avatar, name, title and rating */}
      <div className="flex  items-start justify-between mb-4 flex-shrink-0 ">
        <div className="flex items-center gap-3">
          <img
            src={avatarUrl}
            alt={`${name}'s avatar`}
            className="w-12 h-12 rounded-full object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <h3 className="font-semibold text-gray-900 text-base truncate">
              {name}
            </h3>
            <p className="text-gray-500 text-sm truncate">
              {title}
            </p>
          </div>
        </div>
  <div className="flex gap-0.5 flex-shrink-0 flex-nowrap">
          {renderStars()}
        </div>
      </div>

      {/* Testimonial text - with fixed height and overflow handling */}
      <blockquote className="text-gray-700 text-sm leading-relaxed mb-4 flex-grow overflow-hidden">
        <span className="line-clamp-4 whitespace-pre-line break-words">
          "{testimonial}"
        </span>
      </blockquote>

      {/* Footer with "See original review" link and source logo */}
      {showOriginalReview && (
        <div className="flex items-center justify-end gap-2 flex-shrink-0">
          <a
            href={originalUrl || '#'}
            target={originalUrl ? '_blank' : undefined}
            rel={originalUrl ? 'noopener noreferrer' : undefined}
            className="text-blue-500 text-sm hover:underline"
          >
            See original review
          </a>
          {source === 'facebook' ? (
            <svg
              className="w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12" fill="#1877F2" />
              <path d="M13.5 8.5h1.75V6H13.5c-1.93 0-3.25 1.32-3.25 3.25V11H8v2.5h2.25V21h2.5v-7.5h2.06l.44-2.5h-2.5V9.25c0-.47.28-.75.75-.75z" fill="#fff"/>
            </svg>
          ) : source === 'trustpilot' ? (
            <span className="inline-flex items-center gap-1 text-[11px] text-[#00B67A] font-medium">
              <svg
                className="w-4 h-4 flex-shrink-0"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 2l2.69 5.46 6.03.88-4.36 4.25 1.03 6.01L12 16.9 6.61 18.6l1.03-6.01L3.28 8.34l6.03-.88L12 2z"
                  fill="#00B67A"
                />
              </svg>
              Trustpilot
            </span>
          ) : (
            <svg
              className="w-4 h-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
          )}
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
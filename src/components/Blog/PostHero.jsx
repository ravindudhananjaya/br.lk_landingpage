import React from 'react'

const PostHero = ({ title, img }) => {
  return (
    <div className="relative">
      <div className="h-[38vh] sm:h-[45vh] md:h-[55vh] w-full overflow-hidden ">
        <img src={img} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 rounded-b-3xl bg-black/40" />
      <div className="absolute inset-0 rounded-b-3xl flex items-center justify-center px-4">
        <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl font-bold text-center max-w-4xl">
          {title}
        </h1>
      </div>
    </div>
  )
}

export default PostHero

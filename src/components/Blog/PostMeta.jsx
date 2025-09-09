import React from 'react'

const PostMeta = ({ date, author }) => (
  <div className="flex items-center justify-between text-sm text-[#6b7280] mb-8">
    <div className="flex items-center gap-2">
      <span className="inline-block bg-[#f3ede6] text-[#232323] px-2.5 py-1 rounded-md">{date}</span>
    </div>
    <div>Author <span className="text-[#232323]">{author}</span></div>
  </div>
)

export default PostMeta

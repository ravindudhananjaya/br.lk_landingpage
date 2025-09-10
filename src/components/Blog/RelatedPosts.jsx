import React from 'react'
import { Link } from 'react-router-dom'
import { blogPosts } from '../../data/blogPosts'

const RelatedPosts = ({ currentSlug }) => {
  const related = blogPosts.filter(p => p.slug !== currentSlug).slice(0, 3)
  return (
    <section className="bg-[#f3ede6] py-12">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif text-3xl font-bold">Further Reading</h2>
          <Link to="/blog" className="inline-flex items-center gap-2 text-[#232323] border rounded-full px-4 py-2">
            <span>All blogs</span>
            <span>→</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => (
            <Link key={p.slug} to={`/blog/${p.slug}`} className="group block rounded-2xl border border-[#e5e7eb] bg-[#f3ede6] shadow-sm overflow-hidden">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-semibold">{p.title}</h3>
              </div>
              <div className="mx-4 mb-4 rounded-xl bg-white text-[#111827] flex items-center justify-between px-4 py-3">
                <div className="text-sm">
                  <div className="text-[#6b7280]">{p.date}</div>
                  <div className="text-[#374151]">by {p.author}</div>
                </div>
                <div className="h-8 w-8 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#111827] group-hover:bg-[#111827] group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedPosts

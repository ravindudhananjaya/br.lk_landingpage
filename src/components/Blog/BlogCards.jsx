import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { blogPosts as defaultPosts } from '../../data/blogPosts'


// You can pass a `posts` prop to this component with your imported images.
// Example usage in a page:
// const posts = [
//   { img: myImgImport, title: 'Preparing for the Fiscal Year-End', date: 'Nov 10, 2024', author: 'Emily Brown', href: '/blog/fiscal-year-end' },
//   // ...more
// ]
// <BlogCards posts={posts} />

const samplePosts = defaultPosts

const Card = ({ post, idx }) => {
  const { img, title, date, author, href } = post
  const fallback = 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1200&auto=format&fit=crop'
  const classes =
    "group block rounded-2xl border border-[#e5e7eb] bg-[#f3ede6] shadow-sm overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#222c36]"
  const isExternal = typeof href === 'string' && /^https?:\/\//i.test(href)

  const Inner = () => (
    <>
      <div className="aspect-[4/3] w-full overflow-hidden">
        <img
          src={img || fallback}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-[1.05rem] md:text-lg font-semibold text-[#232323]">
          {title}
        </h3>
      </div>
      <div className="mx-4 mb-4 rounded-xl bg-white text-[#111827] flex items-center justify-between px-4 py-3 position-relative">
        <div className="text-[0.75rem] md:text-sm">
          <div className="text-[#6b7280]">{date}</div>
          <div className="text-[#374151]">by {author}</div>
        </div>
        <div className="h-8 w-8 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center text-[#111827] group-hover:bg-[#111827] group-hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </>
  )

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        <Inner />
      </a>
    )
  }

  return (
    <Link to={post.slug ? `/blog/${post.slug}` : (href || '#')} className={classes}>
      <Inner />
    </Link>
  )
}

const BlogCards = ({ posts = samplePosts }) => {
  // Local state initialized with provided posts; will be replaced by feed when available
  const [items, setItems] = useState(posts)

  useEffect(() => {
    // Only auto-fetch if caller did not explicitly pass a different posts array
    // (heuristic: if reference equals our default samplePosts)
    const shouldFetch = posts === samplePosts
    if (!shouldFetch) return

    const controller = new AbortController()
    const url =
      'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.forbes.com%2Fbusiness%2Ffeed%2F'

    fetch(url, { signal: controller.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('Failed to load feed'))))
      .then((data) => {
        if (!data || !Array.isArray(data.items)) return
        const mapped = data.items.map((it) => ({
          img: it.thumbnail || (it.enclosure && it.enclosure.link) || undefined,
          title: it.title,
          date: it.pubDate ? new Date(it.pubDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '',
          author: it.author || (data.feed && data.feed.title) || 'News',
          href: it.link,
          html: it.content || it.content_encoded || '',
        }))
        setItems(mapped)
        try { sessionStorage.setItem('externalFeedItems', JSON.stringify(mapped)) } catch {}
      })
      .catch(() => {
        // Keep existing posts on error
      })

    return () => controller.abort()
  }, [posts])

  return (
    <section className="bg-white py-10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((p, i) => (
            <Card key={i} post={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogCards
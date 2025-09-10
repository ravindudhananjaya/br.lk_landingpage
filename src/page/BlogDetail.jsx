import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import PostHero from '../components/Blog/PostHero'
import PostMeta from '../components/Blog/PostMeta'
import PostBody from '../components/Blog/PostBody'
import RelatedPosts from '../components/Blog/RelatedPosts'
import Footer from '../components/home/Footer'
import Seo from '../components/Seo'
import Reveal from "../components/common/Reveal";


const BlogDetail = () => {
  const { slug } = useParams()
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold">Post not found</h1>
        <Link to="/blog" className="text-blue-600 underline">Back to blog</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
        <Seo
                       title={`${post.slug} | BR.LK`}
                       description="Dive deep into our blog posts and explore insights on business management, productivity, and more."
                       url={`https://br.lk/blog/${post.slug}`}
                       image={post.img}
                     />
      {/* Hero with background image */}
      <PostHero title={post.title} img={post.img} />

      {/* Meta and body */}
      <Reveal as="div" className="max-w-[900px] mx-auto px-4 md:px-6 py-10 md:py-14" variant="fade-up" threshold={0.1}>
        <PostMeta date={post.date} author={post.author} />
        <PostBody />
      </Reveal>

      {/* Related */}
  <Reveal variant="fade-up" threshold={0.15}><RelatedPosts currentSlug={post.slug} /></Reveal>
      <Footer />
    </div>
  )
}

export default BlogDetail

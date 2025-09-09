import { useEffect } from 'react'

function ensureMeta(selector, attrs) {
  let el = document.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    Object.entries(attrs).forEach(([k, v]) => {
      if (k !== 'content') el.setAttribute(k, v)
    })
    document.head.appendChild(el)
  }
  return el
}

export default function Seo({ title, description, url, image, type = 'website' }) {
  useEffect(() => {
    if (title) document.title = title
    if (description) {
      let d = document.querySelector('meta[name="description"]')
      if (!d) {
        d = document.createElement('meta')
        d.setAttribute('name', 'description')
        document.head.appendChild(d)
      }
      d.setAttribute('content', description)
    }

    if (type) ensureMeta('meta[property="og:type"]', { property: 'og:type' }).setAttribute('content', type)
    if (title) ensureMeta('meta[property="og:title"]', { property: 'og:title' }).setAttribute('content', title)
    if (description) ensureMeta('meta[property="og:description"]', { property: 'og:description' }).setAttribute('content', description)
    if (url) ensureMeta('meta[property="og:url"]', { property: 'og:url' }).setAttribute('content', url)
    if (image) ensureMeta('meta[property="og:image"]', { property: 'og:image' }).setAttribute('content', image)

    // Twitter
    ensureMeta('meta[name="twitter:card"]', { name: 'twitter:card' }).setAttribute('content', 'summary_large_image')
    if (title) ensureMeta('meta[name="twitter:title"]', { name: 'twitter:title' }).setAttribute('content', title)
    if (description) ensureMeta('meta[name="twitter:description"]', { name: 'twitter:description' }).setAttribute('content', description)
    if (image) ensureMeta('meta[name="twitter:image"]', { name: 'twitter:image' }).setAttribute('content', image)
  }, [title, description, url, image, type])

  return null
}

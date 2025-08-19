import { Metadata } from "next";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import { blogPosts, getPostBySlug } from "@/util/blogPosts";
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";

interface Params { slug: string }

export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata(props: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  if(!post) return { title: "Post Not Found - Qollix" };
  return {
    title: `${post.title} | Qollix Blog`,
    description: post.excerpt,
    keywords: [...post.tags, "African tech talent", "remote hiring", "EOR compliance"],
    authors: [{ name: post.author }],
    alternates: { canonical: `https://www.qollix.com/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://www.qollix.com/blog/${post.slug}`,
      images: [{ url: post.heroImage, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.heroImage]
    }
  };
}

export default async function BlogPostPage(props: { params: Promise<Params> }) {
  const { slug } = await props.params;
  const post = getPostBySlug(slug);
  
  if(!post) {
    return (
      <Layout>
        <div className="container py-5 text-center">
          <h1 className="h3 mb-3">Post not found</h1>
          <p className="mb-4 text-muted">The article you are looking for doesn't exist.</p>
          <Link href="/blog" className="theme-btn1">Back to Blog</Link>
        </div>
      </Layout>
    );
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug && p.category === post.category).slice(0, 3);
  
  return (
    <Layout>
      <SectionHeader 
        title={post.title} 
        subtitle={post.excerpt}
        breadcrumb={[
          {label: 'Home', href: '/'}, 
          {label: 'Blog', href: '/blog'}, 
          {label: post.title}
        ]} 
      />
      
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <article className="blog-post">
              {/* Article Header */}
              <div className="article-header mb-5">
                <div className="article-meta d-flex flex-wrap gap-3 mb-4 small text-muted">
                  <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-calendar"></i>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-user"></i>
                    {post.author}
                  </span>
                  <span className="d-flex align-items-center gap-2">
                    <i className="fa-regular fa-clock"></i>
                    {post.readingMinutes} min read
                  </span>
                  <span className="badge bg-primary">{post.category}</span>
                </div>
                
                <div className="hero-image mb-4 position-relative rounded-3 overflow-hidden">
                  <Image 
                    src={post.heroImage} 
                    alt={post.title} 
                    width={900} 
                    height={500} 
                    className="w-100 object-fit-cover" 
                    priority 
                    style={{ height: '400px' }}
                  />
                </div>
              </div>

              {/* Article Content */}
              <div className="article-content">
                {post.blocks.map((block, i) => {
                  switch(block.type){
                    case 'heading':
                      return <h2 key={i} className="h4 mt-5 mb-3 text-primary">{block.value}</h2>;
                    case 'paragraph':
                      return <p key={i} className="mb-3 lh-lg">{block.value}</p>;
                    case 'list':
                      return (
                        <ul key={i} className="mb-4 ps-4">
                          {block.items?.map((item, idx) => (
                            <li key={idx} className="mb-2">{item}</li>
                          ))}
                        </ul>
                      );
                    case 'image':
                      return (
                        <div key={i} className="my-5 text-center">
                          <div className="rounded-3 overflow-hidden shadow-sm">
                            <Image 
                              src={block.src!} 
                              alt={block.alt || ''} 
                              width={800} 
                              height={450} 
                              className="img-fluid" 
                            />
                          </div>
                          {block.alt && <small className="text-muted d-block mt-2">{block.alt}</small>}
                        </div>
                      );
                    case 'quote':
                      return (
                        <blockquote key={i} className="blockquote border-start border-primary border-4 ps-4 py-3 my-5 bg-light rounded-end">
                          <p className="mb-0 fst-italic">{block.value}</p>
                        </blockquote>
                      );
                    default:
                      return null;
                  }
                })}
              </div>

              {/* Article Footer */}
              <div className="article-footer mt-5 pt-4 border-top">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <h6 className="mb-2">Tags:</h6>
                    <div className="d-flex flex-wrap gap-2">
                      {post.tags.map(tag => (
                        <span key={tag} className="badge bg-light text-dark border">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6 text-md-end mt-3 mt-md-0">
                    <h6 className="mb-2">Share this article:</h6>
                    <div className="d-flex gap-2 justify-content-md-end">
                      <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://www.qollix.com/blog/${post.slug}`)}`} 
                         className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener">
                        <i className="fa-brands fa-twitter"></i>
                      </a>
                      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.qollix.com/blog/${post.slug}`)}`} 
                         className="btn btn-outline-primary btn-sm" target="_blank" rel="noopener">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          
          {/* Sidebar */}
          <div className="col-lg-4 mt-5 mt-lg-0">
            <aside className="blog-sidebar">
              {/* Recent Posts */}
              <div className="sidebar-widget bg-light p-4 rounded-3 mb-4">
                <h5 className="widget-title mb-4">Recent Articles</h5>
                <div className="recent-posts">
                  {blogPosts.filter(p => p.slug !== post.slug).slice(0, 5).map(p => (
                    <div key={p.slug} className="recent-post mb-3 pb-3 border-bottom">
                      <h6 className="mb-2">
                        <Link href={`/blog/${p.slug}`} className="text-decoration-none text-dark">
                          {p.title}
                        </Link>
                      </h6>
                      <small className="text-muted">
                        {new Date(p.date).toLocaleDateString()} • {p.readingMinutes} min read
                      </small>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div className="sidebar-widget bg-light p-4 rounded-3 mb-4">
                <h5 className="widget-title mb-4">Categories</h5>
                <div className="categories">
                  {Array.from(new Set(blogPosts.map(p => p.category))).map(category => (
                    <div key={category} className="d-flex justify-content-between align-items-center mb-2">
                      <span>{category}</span>
                      <span className="badge bg-primary">
                        {blogPosts.filter(p => p.category === category).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="sidebar-widget bg-primary text-white p-4 rounded-3">
                <h5 className="widget-title mb-3">Ready to Hire African Talent?</h5>
                <p className="mb-3 small">Get started with our 10-14 day placement service.</p>
                <Link href="/contact" className="btn btn-light btn-sm">
                  Get Started <i className="fa-solid fa-arrow-right ms-1"></i>
                </Link>
              </div>
            </aside>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="row mt-5 pt-5 border-top">
            <div className="col-12">
              <h3 className="mb-4">Related Articles</h3>
              <div className="row">
                {relatedPosts.map(relatedPost => (
                  <div key={relatedPost.slug} className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-img-top">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Image 
                            src={relatedPost.heroImage} 
                            alt={relatedPost.title} 
                            width={300} 
                            height={200} 
                            className="w-100 object-fit-cover" 
                            style={{ height: '200px' }}
                          />
                        </Link>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">
                          <Link href={`/blog/${relatedPost.slug}`} className="text-decoration-none text-dark">
                            {relatedPost.title}
                          </Link>
                        </h6>
                        <p className="card-text small text-muted">{relatedPost.excerpt}</p>
                        <small className="text-muted">
                          {new Date(relatedPost.date).toLocaleDateString()} • {relatedPost.readingMinutes} min read
                        </small>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced JSON-LD */}
      <Script id="ld-json-blogpost" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
        '@context':'https://schema.org',
        '@type':'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        image: {
          '@type': 'ImageObject',
          url: post.heroImage,
          width: 1200,
          height: 630
        },
        author: {
          '@type': 'Person', 
          name: post.author,
          url: 'https://www.qollix.com/about'
        },
        publisher: {
          '@type': 'Organization', 
          name: 'Qollix',
          logo: {
            '@type': 'ImageObject',
            url: 'https://www.qollix.com/assets/img/logo/logo-dark.svg'
          }
        },
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `https://www.qollix.com/blog/${post.slug}`
        },
        keywords: post.tags.join(', '),
        articleSection: post.category,
        wordCount: post.blocks.reduce((acc, block) => acc + (block.value?.length || 0), 0)
      })}} />
    </Layout>
  );
}

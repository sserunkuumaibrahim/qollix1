import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/util/blogPosts";

export default function BlogGrid() {
    return (
        <div className="blog-page sp">
            <div className="container">
                {/* Featured Blog Post */}
                {blogPosts.length > 0 && (
                    <div className="row mb-60">
                        <div className="col-12">
                            <div className="featured-post bg-light rounded-3 overflow-hidden">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="featured-image h-100">
                                            <Link href={`/blog/${blogPosts[0].slug}`}>
                                                <Image 
                                                    src={blogPosts[0].heroImage} 
                                                    alt={blogPosts[0].title} 
                                                    width={600} 
                                                    height={400} 
                                                    className="w-100 h-100 object-fit-cover" 
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="featured-content p-4 p-lg-5 h-100 d-flex flex-column justify-content-center">
                                            <div className="mb-3">
                                                <span className="badge bg-primary mb-2">Featured</span>
                                                <div className="meta-info small text-muted d-flex gap-3 mb-3">
                                                    <span className="d-inline-flex align-items-center gap-1">
                                                        <i className="fa-regular fa-calendar"></i>
                                                        {new Date(blogPosts[0].date).toLocaleDateString()}
                                                    </span>
                                                    <span className="d-inline-flex align-items-center gap-1">
                                                        <i className="fa-regular fa-user"></i>
                                                        {blogPosts[0].author}
                                                    </span>
                                                </div>
                                            </div>
                                            <h2 className="h3 mb-3">
                                                <Link href={`/blog/${blogPosts[0].slug}`} className="text-decoration-none text-dark">
                                                    {blogPosts[0].title}
                                                </Link>
                                            </h2>
                                            <p className="mb-4 text-muted">{blogPosts[0].excerpt}</p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <Link href={`/blog/${blogPosts[0].slug}`} className="theme-btn1">
                                                    Read Article <span><i className="fa-solid fa-arrow-right" /></span>
                                                </Link>
                                                <span className="badge bg-outline-primary border">{blogPosts[0].category}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Blog Categories Filter */}
                <div className="row mb-5">
                    <div className="col-12">
                        <div className="blog-filters text-center">
                            <h3 className="mb-4">Browse by Category</h3>
                            <div className="filter-buttons d-flex flex-wrap justify-content-center gap-3">
                                {Array.from(new Set(blogPosts.map(post => post.category))).map(category => (
                                    <button key={category} className="btn btn-outline-primary rounded-pill">
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="row">
                    {blogPosts.slice(1).map(post => (
                        <div key={post.slug} className="col-lg-4 col-md-6 mb-4">
                            <article className="blog-card h-100 border rounded-3 overflow-hidden shadow-sm">
                                <div className="blog-image">
                                    <Link href={`/blog/${post.slug}`}>
                                        <Image 
                                            src={post.heroImage} 
                                            alt={post.title} 
                                            width={400} 
                                            height={250} 
                                            className="w-100 object-fit-cover" 
                                            style={{ height: '200px' }}
                                        />
                                    </Link>
                                </div>
                                <div className="blog-content p-4 d-flex flex-column h-100">
                                    <div className="blog-meta mb-3">
                                        <div className="meta-info small text-muted d-flex gap-3 mb-2">
                                            <span className="d-inline-flex align-items-center gap-1">
                                                <i className="fa-regular fa-calendar"></i>
                                                {new Date(post.date).toLocaleDateString()}
                                            </span>
                                            <span className="d-inline-flex align-items-center gap-1">
                                                <i className="fa-regular fa-user"></i>
                                                {post.author}
                                            </span>
                                        </div>
                                        <span className="badge bg-light text-dark border mb-2">{post.category}</span>
                                    </div>
                                    <h3 className="h5 mb-3">
                                        <Link href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                                            {post.title}
                                        </Link>
                                    </h3>
                                    <p className="text-muted mb-4 flex-grow-1">{post.excerpt}</p>
                                    <div className="blog-footer">
                                        <Link href={`/blog/${post.slug}`} className="btn btn-link p-0 text-primary">
                                            Read More <i className="fa-solid fa-arrow-right ms-1"></i>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                </div>

                {/* Newsletter Signup */}
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="newsletter-section bg-primary text-white rounded-3 p-5 text-center">
                            <h3 className="h4 mb-3">Stay Updated with African Tech Insights</h3>
                            <p className="mb-4">Get the latest insights on hiring African talent, compliance updates, and industry trends delivered to your inbox.</p>
                            <div className="newsletter-form d-flex justify-content-center">
                                <div className="input-group" style={{ maxWidth: '400px' }}>
                                    <input type="email" className="form-control" placeholder="Enter your email" />
                                    <button className="btn btn-light text-primary" type="button">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

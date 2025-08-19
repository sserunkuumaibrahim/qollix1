import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/util/blogPosts";

export default function Section1() {
    return (
        <>
            <div className="blog-page sp">
                <div className="container">
                    <div className="row">
                        {blogPosts.map(post => (
                            <div key={post.slug} className="col-lg-4 col-md-6">
                                <div className="blog2-box h-100 d-flex flex-column">
                                    <div className="image position-relative overflow-hidden rounded">
                                        <Link href={`/blog/${post.slug}`}>
                                            <Image src={post.heroImage} alt={post.title} width={480} height={300} className="w-100 object-fit-cover" />
                                        </Link>
                                    </div>
                                    <div className="heading5 d-flex flex-column flex-grow-1">
                                        <div className="tags small text-muted d-flex gap-3 flex-wrap mb-2">
                                            <span className="d-inline-flex align-items-center gap-1"><img src="assets/img/icons/date2.png" alt="date" /> {new Date(post.date).toLocaleDateString()}</span>
                                            <span className="d-inline-flex align-items-center gap-1"><img src="assets/img/icons/user2.png" alt="author" /> {post.author}</span>
                                        </div>
                                        <h4 className="mb-2 fs-5">
                                            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h4>
                                        <p className="mb-3 small flex-grow-1">{post.excerpt}</p>
                                        <div className="d-flex justify-content-between align-items-center mt-auto pt-2">
                                            <Link href={`/blog/${post.slug}`} className="learn">
                                                Read More <span><i className="fa-solid fa-arrow-right" /></span>
                                            </Link>
                                            <span className="badge bg-light text-dark border">{post.category}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

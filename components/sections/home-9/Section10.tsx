import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/util/blogPosts";

export default function Section10() {
    return (
        <>
            {/*=====BLOG AREA START=======*/}
            <div className="blog9 sp overflow-hidden" id="blog" style={{ backgroundColor: "#F3F5F2" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> Our Blog
                                </span>
                                <h2 className="text-anime-style-3">Latest News &amp; Articles</h2>
                            </div>
                        </div>
                    </div>
                                        <div className="row">
                                            { [...blogPosts].sort((a,b)=> new Date(b.date).getTime()-new Date(a.date).getTime()).slice(0,3).map((post,i)=>(
                                                <div key={post.slug} className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={700 + i*150}>
                                                    <div className="blog-box h-100 d-flex flex-column">
                                                        <div className="image overlay-anim position-relative rounded overflow-hidden">
                                                            <Link href={`/blog/${post.slug}`}>
                                                                <Image src={post.heroImage} alt={post.title} width={480} height={300} className="w-100 object-fit-cover" />
                                                            </Link>
                                                        </div>
                                                        <div className="heading d-flex flex-column flex-grow-1">
                                                            <span className="date small mb-2 d-inline-flex align-items-center gap-2">
                                                                <img src="assets/img/icons/date7.svg" alt="date" /> {new Date(post.date).toLocaleDateString()}
                                                            </span>
                                                            <h4 className="mb-2 fs-5"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h4>
                                                            <p className="small flex-grow-1 mb-3">{post.excerpt}</p>
                                                            <Link href={`/blog/${post.slug}`} className="learn mt-auto">
                                                                Read More
                                                                <span><i className="fa-solid fa-arrow-right" /></span>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                </div>
            </div>
            {/*=====BLOG AREA END=======*/}
        </>
    );
}

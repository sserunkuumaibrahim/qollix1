import Link from 'next/link';
import Image from 'next/image';
import { blogPosts } from '@/util/blogPosts';

export default function Section13LatestBlog(){
  const latest = [...blogPosts]
    .sort((a,b)=> new Date(b.date).getTime()-new Date(a.date).getTime())
    .slice(0,3);
  return (
    <div className="latest-blog9 sp pt-0" id="insights">
      <div className="container">
        <div className="row mb-4 align-items-end">
          <div className="col-lg-7">
            <div className="heading9">
              <span className="span"><img src="/assets/img/icons/span9.png" alt="" /> Insights</span>
              <h2 className="text-anime-style-3">Latest Talent & Compliance Guides</h2>
            </div>
          </div>
          <div className="col-lg-5 text-lg-end">
            <Link href="/blog" className="theme-btn15 small">View All <span><i className="fa-solid fa-arrow-right" /></span></Link>
          </div>
        </div>
        <div className="row">
          {latest.map(post => (
            <div key={post.slug} className="col-md-4">
              <div className="blog2-box h-100 d-flex flex-column">
                <div className="image overflow-hidden rounded position-relative">
                  <Link href={`/blog/${post.slug}`}>
                    <Image src={post.heroImage} alt={post.title} width={480} height={300} className="w-100 object-fit-cover" />
                  </Link>
                </div>
                <div className="heading5 d-flex flex-column flex-grow-1">
                  <div className="tags small text-muted d-flex gap-2 flex-wrap mb-2">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>• {post.readingMinutes} min read</span>
                  </div>
                  <h5 className="mb-2"><Link href={`/blog/${post.slug}`}>{post.title}</Link></h5>
                  <p className="small flex-grow-1 mb-3">{post.excerpt}</p>
                  <div className="mt-auto"><Link href={`/blog/${post.slug}`} className="learn small">Read More <span><i className="fa-solid fa-arrow-right" /></span></Link></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

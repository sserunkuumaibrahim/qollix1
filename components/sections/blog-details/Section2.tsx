import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*===== BLOG AREA START =======*/}
            <div className="blog-page pb120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1">
                                <h2>View More Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img1.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Cost-Effective Scaling: Why African Talent Wins</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Explore how partnering with African developers can reduce costs by 60-80% while maintaining high-quality deliverables.</p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img2.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Time Zone Advantages: 24/7 Development Cycles</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Maximize productivity with strategic time zone management, enabling round-the-clock development cycles.</p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog2-box">
                                <div className="image">
                                    <img src="assets/img/blog/blog2-img3.png" alt="" />
                                </div>
                                <div className="heading5">
                                    <div className="tags">
                                        <Link href="#">
                                            <img src="assets/img/icons/date2.png" alt="" /> 16 August 2023
                                        </Link>
                                        <Link href="#">
                                            <img src="assets/img/icons/user2.png" alt="" /> Ben Stokes
                                        </Link>
                                    </div>
                                    <h4>
                                        <Link href="/blog-details">Quality Assurance: Our 3-Step Vetting Process</Link>
                                    </h4>
                                    <div className="space16" />
                                    <p>Learn about our rigorous technical assessment and cultural fit evaluation process.</p>
                                    <div className="space16" />
                                    <Link href="/blog-details" className="learn">
                                        Read More
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== BLOG AREA END =======*/}
        </>
    );
}

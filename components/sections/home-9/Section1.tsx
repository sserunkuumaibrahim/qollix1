import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====HERO AREA START =======*/}
            <div className="hero9" style={{ backgroundImage: "url(assets/img/bg/hero9-bg.jpg)" }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="main-heading">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> Premium African Tech Talent
                                </span>
                                <h1 className="text-anime-style-3">Hire Elite African Engineers In 10–14 Days</h1>
                                <div className="space16" />
                                <p>
                                    Source, hire and manage senior remote developers (4+ yrs exp) across 7 key African markets with full compliance & EOR support. Cut engineering talent spend by 60–80% while accelerating delivery velocity.
                                </p>
                                <div className="space30" />
                                <div className="d-flex flex-wrap gap-3">
                                    <Link className="theme-btn15" href="/contact">
                                        Start Hiring Today
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                    <Link className="theme-btn15 btn-outline" href="/pricing">
                                        View Pricing
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="main-images">
                                <div className="image1" data-aos="zoom-out" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero9-image1.png" alt="Team collaboration and celebration" />
                                </div>
                                <div className="image2" data-aos="flip-right" data-aos-duration={800}>
                                    <img src="assets/img/hero/hero9-image2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====HERO AREA END=======*/}
        </>
    );
}

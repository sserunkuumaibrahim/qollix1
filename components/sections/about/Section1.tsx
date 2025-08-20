import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====ABOUT AREA START=======*/}
            <div className="about-page-sec1 sp">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about3-images">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img1.png" alt="" />
                                        </div>
                                        <div className="conter-box conter-box1">
                            <h3>
                                <span className="counter">500</span>+
                            </h3>
                            <p>Vetted Professionals</p>
                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="conter-box conter-box2">
                            <h3>
                                <span className="counter">7</span>+
                            </h3>
                            <p>African Countries</p>
                        </div>
                                        <div className="image overlay-anim">
                                            <img src="assets/img/about/about3-img2.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="heading1 about3-heading">
                                <span className="span">About Qollix</span>
                <h2>Bridging Global Companies with Africa's Top Tech Talent</h2>
                <div className="space16" />
                <p>Qollix, operated by Zentrix Innovative Labs Limited, is a specialized talent platform that connects global companies with Africa's rapidly growing pool of experienced tech professionals. We deliver cost-effective, high-quality talent solutions with industry-leading speed and comprehensive support.</p>
                                <div className="about3-icon-box">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about3-icon1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading1">
                                        <h5>
                            <Link href="#">10-14 Day Placement Guarantee</Link>
                        </h5>
                        <p>Our streamlined vetting process ensures we present pre-screened, experienced talent within 10-14 working days, significantly faster than traditional recruitment.</p>
                                    </div>
                                </div>
                                <div className="about3-icon-box">
                                    <div className="">
                                        <div className="icon">
                                            <img src="assets/img/icons/about3-icon2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading1">
                                        <h5>
                            <Link href="#">60-80% Cost Savings</Link>
                        </h5>
                        <p>Access top-tier African tech talent at 60-80% savings compared to Western markets, without compromising on quality or experience.</p>
                                    </div>
                                </div>
                                <div className="space30" />
                                <div className="">
                                    <Link className="theme-btn1" href="/contact">
                        Get Started Today
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
            {/*=====ABOUT AREA END=======*/}
        </>
    );
}

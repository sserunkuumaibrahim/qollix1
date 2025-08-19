import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====WORK AREA START=======*/}
            <div className="work6 sp overflow-hidden" id="work">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading6">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span6.svg" alt="" /> how it works
                                </span>
                                <h2 className="text-anime-style-3">Simple Staffing Procedures</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="col-lg-10 m-auto">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="work-box" data-aos="zoom-in-up" data-aos-duration={1200}>
                                    <div className="image-area">
                                        <div className="image1">
                                            <img src="assets/img/work/work6-bg1.png" alt="" />
                                        </div>
                                        <div className="image2 overlay-anim">
                                            <img src="assets/img/work/work6-img1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading-area">
                                        <h3>
                                            <Link href="/project-details">Job Analysis</Link>
                                        </h3>
                                        <p>Job analysis is a critical process understanding defining specific.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-box" data-aos="zoom-in-up" data-aos-duration={1000}>
                                    <div className="image-area">
                                        <div className="image1">
                                            <img src="assets/img/work/work6-bg2.png" alt="" />
                                        </div>
                                        <div className="image2 overlay-anim">
                                            <img src="assets/img/work/work6-img2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading-area">
                                        <h3>
                                            <Link href="/project-details">Job Analysis</Link>
                                        </h3>
                                        <p>Job analysis is a critical process understanding defining specific.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="work-box" data-aos="zoom-in-up" data-aos-duration={800}>
                                    <div className="image-area">
                                        <div className="image1">
                                            <img src="assets/img/work/work6-bg3.png" alt="" />
                                        </div>
                                        <div className="image2 overlay-anim">
                                            <img src="assets/img/work/work6-img3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="heading-area">
                                        <h3>
                                            <Link href="/project-details">Job Analysis</Link>
                                        </h3>
                                        <p>Job analysis is a critical process understanding defining specific.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="assets/img/shapes/team6-shape.png" alt="" className="sec-shape" />
            </div>
            {/*=====WORK AREA END=======*/}
        </>
    );
}

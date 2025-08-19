import Link from "next/link";

export default function Section4() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service9 sp overflow-hidden" id="service">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> Our Service Areas
                                </span>
                                <h2 className="text-anime-style-3">Core Talent & Compliance Services</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image1.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 01</span>
                                    <h4>
                                        <Link href="/services/talent-sourcing">Tech Talent Sourcing</Link>
                                    </h4>
                                    <p>Calibrated role scoping, curated pipeline & pre-vetted senior engineers in 10–14 days.</p>
                                    <Link href="/services/talent-sourcing" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image2.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 02</span>
                                    <h4>
                                        <Link href="/services/talent-management">Talent Management</Link>
                                    </h4>
                                    <p>Engagement, performance, retention & reporting for sustained productivity.</p>
                                    <Link href="/services/talent-management" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in-up" data-aos-duration={1200}>
                            <div className="service-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service9-image3.png" alt="" />
                                </div>
                                <div className="heading">
                                    <span className="text">Service 03</span>
                                    <h4>
                                        <Link href="/services/compliance-legal">Compliance & Legal Services</Link>
                                    </h4>
                                    <p>EOR, payroll, tax & statutory compliance via trusted infrastructure.</p>
                                    <Link href="/services/compliance-legal" className="learn">
                                        learn more
                                        <span>
                                            <i className="fa-solid fa-arrow-right" />
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="space40" />
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="text-center">
                                <Link className="theme-btn15" href="/services">
                                    explore services
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}
import Link from "next/link";

export default function Section6() {
    return (
        <>
            {/*=====SHOLUTIONS AREA START=======*/}
            <div className="solutions9 sp overflow-hidden" style={{ background: "#F3F5F2" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> Why Choose Qollix
                                </span>
                                <h2 className="text-anime-style-3">Premium African Tech Talent Solutions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={800}>
                            <div className="solutions-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solutions9-image1.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/solutions9-icon1.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            <Link href="/services/talent-sourcing">Talent Sourcing & Management</Link>
                                        </h4>
                                        <p>Senior engineers sourced, placed & managed in 10–14 days via calibrated matching across 7 African markets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={1000}>
                            <div className="solutions-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solutions9-image2.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/solutions9-icon2.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            <Link href="/pricing">Massive Cost Savings</Link>
                                        </h4>
                                        <p>Reduce total talent spend 60–80% while sustaining output & quality benchmarks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="zoom-in-up" data-aos-duration={1100}>
                            <div className="solutions-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/others/solutions9-image3.png" alt="" />
                                </div>
                                <div className="heading-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/solutions9-icon3.svg" alt="" />
                                    </div>
                                    <div className="heading">
                                        <h4>
                                            <Link href="/services/compliance-legal">Full Compliance Support</Link>
                                        </h4>
                                        <p>EOR, payroll, tax & statutory coverage across 7 key African markets.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SHOLUTIONS AREA END=======*/}
        </>
    );
}

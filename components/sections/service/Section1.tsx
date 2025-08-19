import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE AREA START=======*/}
            <div className="service1 service-page-service sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img1.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon1.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/services/talent-sourcing">Talent Sourcing</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Access 500+ vetted African developers and professionals with 10-14 day delivery and 60-80% cost savings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box active">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img2.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon2.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/services/talent-management">Talent Management</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Comprehensive talent management with 7-day onboarding, 24/7 support, and performance analytics.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="service1-box">
                                <div className="image overlay-anim">
                                    <img src="assets/img/service/service1-img3.png" alt="" />
                                </div>
                                <div className="hover-area">
                                    <div className="icon">
                                        <img src="assets/img/icons/service1-icon3.png" alt="" />
                                    </div>
                                    <div className="space16" />
                                    <div className="heading1-w">
                                        <h4>
                                            <Link href="/services/compliance-legal">Compliance & Legal</Link>
                                        </h4>
                                        <div className="space16" />
                                        <p>Full legal compliance and EOR services covering multiple countries with ongoing support.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-12 m-auto">
                            <div className="theme-pagination text-center">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-angle-left" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="active" href="#">
                                            01
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">02</Link>
                                    </li>
                                    <li>...</li>
                                    <li>
                                        <Link href="#">12</Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-solid fa-angle-right" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE AREA END=======*/}
        </>
    );
}

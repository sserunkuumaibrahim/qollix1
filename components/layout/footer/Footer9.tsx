import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*===== FOOTER AREA START =======*/}
            <div className="footer9 _relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer-items footer-logo-area">
                                <div className="footer-logo">
                                    <Link href="">
                                        <img src="/assets/img/logo/qollix-logo.svg" alt="Qollix - African Tech Talent Solutions" style={{ height: "35px", width: "auto" }} />
                                    </Link>
                                </div>
                                <div className="space20" />
                                <div className="heading1-w">
                                    <p>Connecting global companies with Africa's premier tech talent. Fast placement, cost-effective solutions, full compliance support.</p>
                                </div>
                                <ul className="social-icon">
                                    <li>
                                        <Link href="#">
                                            <i className="fa-brands fa-linkedin-in" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-brands fa-x-twitter" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-brands fa-youtube" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <i className="fa-brands fa-instagram" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-12">
                            <div className="single-footer-items">
                                <h3>Our Services</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="/services/talent-sourcing">Tech Talent Sourcing</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/talent-management">Talent Management</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/compliance-legal">Compliance & Legal</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/compliance-legal">EOR Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/talent-sourcing">African Developers</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg col-md-6 col-12">
                            <div className="single-footer-items pl-5">
                                <h3>Explore</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="/">Home </Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About Us</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Contact US</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12">
                            <div className="single-footer-items">
                                <h3>Contact Us</h3>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="/assets/img/icons/footer6-icon1.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="tel:+256414673086">+256 414 673 086</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="/assets/img/icons/footer6-icon2.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="#">Plot 19-21 PortBell Road, Nakawa, Kampala, Uganda</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="/assets/img/icons/footer6-icon3.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="mailto:hello@qollix.com">hello@qollix.com</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="/assets/img/icons/footer6-icon4.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="#">qollix.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="space70" />
                </div>
                <div className="copyright-area _relative">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-12">
                                <div className="coppyright">
                                    <p>© Copyright 2025 -Qollix. All Right Reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== FOOTER AREA END =======*/}
        </>
    );
}
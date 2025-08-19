import Link from "next/link";

export default function Footer() {
    return (
        <>
            {/*===== FOOTER AREA START =======*/}
            <div className="footer10 _relative">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12">
                            <div className="single-footer-items footer-logo-area">
                                <div className="footer-logo">
                                    <Link href="">
                                        <img src="assets/img/logo/header-logo10.png" alt="" />
                                    </Link>
                                </div>
                                <div className="space20" />
                                <div className="heading1-w">
                                    <p>Our goal is to demystify the process, address your concerns, and empower you with the knowledge to embark.</p>
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
                                <h3>Quick Links</h3>
                                <ul className="menu-list">
                                    <li>
                                        <Link href="#">Staff Management</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Leadership Training</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Corporate Program&nbsp;</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Staffing Solutions</Link>
                                    </li>
                                    <li>
                                        <Link href="#">Blog Standard</Link>
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
                                        <img src="assets/img/icons/footer6-icon1.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="tel:+880123456789">+880 123 456 789</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/footer6-icon2.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="#">421 Allen, Mexico 4233</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/footer6-icon3.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="mailto:staffingagency@com">staffingagency@com</Link>
                                    </div>
                                </div>
                                <div className="contact-box">
                                    <div className="icon">
                                        <img src="assets/img/icons/footer6-icon4.svg" alt="" />
                                    </div>
                                    <div className="pera">
                                        <Link href="#">staffingagency.com</Link>
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
                                    <p>© Copyright 2025 -Recrute. All Right Reserved</p>
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

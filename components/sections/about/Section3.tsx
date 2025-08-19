import Link from "next/link";

export default function Section3() {
    return (
        <>
            {/*===== CTA AREA START =======*/}
            <div className="cta">
                <div className="container">
                    <div className="row cta-border align-items-center">
                        <div className="col-lg-6">
                            <div className="heading1-w">
                                <h2>Ready to Scale Your Team with African Tech Talent?</h2>
                                <div className="space16" />
                                <p>
                                    Connect with experienced professionals who can drive your projects forward. <br /> Let us help you build high-performing teams at a fraction of the cost.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-center text-lg-end">
                                <Link href="/contact" className="theme-btn1 me-3">
                                    Get Started Today
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                                <Link href="/services" className="theme-btn1 btn-outline">
                                    View Services
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*===== CTA AREA START =======*/}
        </>
    );
}

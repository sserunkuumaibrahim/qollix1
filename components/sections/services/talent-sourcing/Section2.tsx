import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====CTA SECTION START=======*/}
            <div className="cta-section-all sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-header-area heading-space">
                                <div className="row align-items-center">
                                    <div className="col-lg-8">
                                        <div className="cta-header">
                                            <h2>Ready to Scale Your Tech Team?</h2>
                                            <p>
                                                Join 50+ companies who trust Qollix to deliver exceptional African tech talent. 
                                                Start building your dream team today with our proven sourcing process.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cta-btn">
                                            <Link href="/contact" className="theme-btn1">
                                                Get Started Now
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
                    
                    <div className="space50" />
                    
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="cta-box">
                                <div className="icon">
                                    <i className="fa-solid fa-users" />
                                </div>
                                <div className="content">
                                    <h4>500+ Vetted Professionals</h4>
                                    <p>Access our extensive network of pre-screened African tech talent</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cta-box">
                                <div className="icon">
                                    <i className="fa-solid fa-clock" />
                                </div>
                                <div className="content">
                                    <h4>10-14 Day Delivery</h4>
                                    <p>Industry-leading speed from requirement to candidate presentation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cta-box">
                                <div className="icon">
                                    <i className="fa-solid fa-dollar-sign" />
                                </div>
                                <div className="content">
                                    <h4>60-80% Cost Savings</h4>
                                    <p>Significant savings compared to Western markets without compromising quality</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CTA SECTION END=======*/}
        </>
    );
}
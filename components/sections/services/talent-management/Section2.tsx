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
                                            <h2>Focus on Growth, We'll Handle the Rest</h2>
                                            <p>
                                                Let Qollix manage your African tech talent lifecycle while you concentrate on 
                                                scaling your business. Our comprehensive management ensures maximum productivity 
                                                and long-term success.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cta-btn">
                                            <Link href="/contact" className="theme-btn1">
                                                Start Managing
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
                                    <i className="fa-solid fa-rocket" />
                                </div>
                                <div className="content">
                                    <h4>7-Day Onboarding</h4>
                                    <p>Structured integration program for immediate productivity</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cta-box">
                                <div className="icon">
                                    <i className="fa-solid fa-headset" />
                                </div>
                                <div className="content">
                                    <h4>24/7 Support</h4>
                                    <p>Round-the-clock assistance for any challenges or questions</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="cta-box">
                                <div className="icon">
                                    <i className="fa-solid fa-chart-bar" />
                                </div>
                                <div className="content">
                                    <h4>Performance Analytics</h4>
                                    <p>Detailed reporting and insights for data-driven decisions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="space50" />
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="management-process">
                                <div className="section-header text-center">
                                    <h3>Our Management Process</h3>
                                    <p>A proven methodology for maximizing talent potential and business outcomes</p>
                                </div>
                                <div className="space30" />
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="process-step">
                                            <div className="step-number">01</div>
                                            <div className="step-content">
                                                <h4>Onboard</h4>
                                                <p>Comprehensive 7-day integration program</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="process-step">
                                            <div className="step-number">02</div>
                                            <div className="step-content">
                                                <h4>Monitor</h4>
                                                <p>Regular performance tracking and feedback</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="process-step">
                                            <div className="step-number">03</div>
                                            <div className="step-content">
                                                <h4>Support</h4>
                                                <p>Ongoing assistance and issue resolution</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="process-step">
                                            <div className="step-number">04</div>
                                            <div className="step-content">
                                                <h4>Optimize</h4>
                                                <p>Continuous improvement and development</p>
                                            </div>
                                        </div>
                                    </div>
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
import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====CTA SECTION START=======*/}
            <div className="cta-section-all sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading1-w">
                                <h2>Ready to Ensure Full Compliance?</h2>
                                <div className="space16" />
                                <p>
                                    Protect your business with our comprehensive compliance and legal services. 
                                    Get expert guidance and full legal protection for your African talent engagements.
                                </p>
                                <div className="space30" />
                                <Link href="/contact" className="theme-btn1">
                                    Start Protected Hiring
                                    <span>
                                        <i className="fa-solid fa-arrow-right" />
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CTA SECTION END=======*/}
            
            {/*=====STATS SECTION START=======*/}
            <div className="about-counter sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="about-counter-box">
                                <div className="counter-box">
                                    <h2>
                                        <span className="counter">15</span>+
                                    </h2>
                                </div>
                                <p>Countries Covered</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-counter-box">
                                <div className="counter-box">
                                    <h2>
                                        <span className="counter">100</span>%
                                    </h2>
                                </div>
                                <p>Legal Compliance</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-counter-box">
                                <div className="counter-box">
                                    <h2>
                                        <span className="counter">24</span>/7
                                    </h2>
                                </div>
                                <p>Legal Support</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="about-counter-box">
                                <div className="counter-box">
                                    <h2>
                                        <span className="counter">0</span>
                                    </h2>
                                </div>
                                <p>Compliance Issues</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====STATS SECTION END=======*/}
            
            {/*=====PROCESS SECTION START=======*/}
            <div className="process-section sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto text-center">
                            <div className="heading1">
                                <span className="span">Our Process</span>
                                <h2>Compliance Made Simple</h2>
                                <div className="space16" />
                                <p>
                                    Our streamlined compliance process ensures your business is protected 
                                    from day one with minimal complexity.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box">
                                <div className="step-number">01</div>
                                <div className="icon">
                                    <i className="fa-solid fa-file-contract" />
                                </div>
                                <h4>Legal Setup</h4>
                                <p>Establish legal framework and employment contracts</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box">
                                <div className="step-number">02</div>
                                <div className="icon">
                                    <i className="fa-solid fa-shield-check" />
                                </div>
                                <h4>Compliance Audit</h4>
                                <p>Comprehensive review of all regulatory requirements</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box">
                                <div className="step-number">03</div>
                                <div className="icon">
                                    <i className="fa-solid fa-cogs" />
                                </div>
                                <h4>System Integration</h4>
                                <p>Implement payroll, benefits, and compliance systems</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="process-box">
                                <div className="step-number">04</div>
                                <div className="icon">
                                    <i className="fa-solid fa-headset" />
                                </div>
                                <h4>Ongoing Support</h4>
                                <p>Continuous monitoring and 24/7 legal assistance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====PROCESS SECTION END=======*/}
        </>
    );
}
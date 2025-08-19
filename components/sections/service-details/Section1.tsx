import Link from "next/link";

export default function Section1() {
    return (
        <>
            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto">
                            <div className="service-details-area">
                                <article>
                                    <div className="heading1">
                                        <div className="image">
                                            <img src="assets/img/service/service-details-img1.png" alt="" />
                                        </div>
                                        <div className="space30" />
                                        <h2>Tech Talent Sourcing &amp; Placement</h2>
                                        <div className="space16" />
                                        <p>Our tech talent sourcing services connect global companies with Africa's premier developers and engineers. We provide end-to-end recruitment solutions with full compliance support, helping you scale your tech teams efficiently and cost-effectively.</p>
                                        <div className="space30" />
                                        <h3>Vetted African Tech Talent Pool</h3>
                                        <div className="space16" />
                                        <p>Our rigorous vetting process ensures access to top-tier African developers with 4+ years of experience. We screen for technical skills, English proficiency, and cultural fit to guarantee quality placements.</p>
                                        <div className="space30" />
                                        <h3>Lightning-Fast Placement Process</h3>
                                        <div className="space16" />
                                        <p>Get your tech talent placed in just 10-14 days through our streamlined process. We handle everything from initial screening to final placement and ongoing support.</p>
                                        <div className="space16" />
                                        <p>Our EOR partnership with Brightermonday ensures full legal compliance across African markets, removing administrative burdens from your hiring process.</p>
                                    </div>
                                </article>
                                <div className="space30" />
                                <article>
                                    <div className="heading1">
                                        <h3>Cost-Effective Global Expansion</h3>
                                        <div className="space16" />
                                        <p>Save 60-80% on development costs while accessing world-class African tech talent. Our competitive pricing model helps you scale your team without breaking the budget.</p>
                                        <div className="space16" />
                                        <p>Our comprehensive EOR services handle payroll, benefits, taxes, and legal compliance, allowing you to focus on what matters most - building great products.</p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img2.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Full-stack developers, mobile engineers, DevOps specialists, and more - all vetted and ready to contribute from day one.</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="space30" />
                                                <div className="image">
                                                    <img src="assets/img/service/service-details-img3.png" alt="" />
                                                </div>
                                                <div className="space16" />
                                                <div className="heading1">
                                                    <p>Flexible engagement models including full-time, contract, and project-based arrangements to match your specific needs.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                                <div className="space20" />
                                <div className="faq-all-area">
                                    <div className="accordion accordion1 accordion-flush" id="accordionFlushExample">
                                        <div className="accordion-item active">
                                            <h2 className="accordion-header" id="flush-headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                    How quickly can you place African developers?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">We can place vetted African developers in just 10-14 days through our streamlined process. Our pre-screened talent pool allows for rapid matching and placement.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                                    What about legal compliance and payroll?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Our EOR partnership with Brightermonday handles all legal compliance, payroll, benefits, and taxes across African markets, ensuring full regulatory compliance.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                                    How much can we save on development costs?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Companies typically save 60-80% on development costs while accessing world-class African tech talent with equivalent skills and experience.</div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="flush-headingFour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                                    What technical skills do your developers have?
                                                </button>
                                            </h2>
                                            <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                                <div className="accordion-body">Our developers specialize in React, Node.js, Python, Java, mobile development, DevOps, and more. All have 4+ years of experience and strong English proficiency.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}

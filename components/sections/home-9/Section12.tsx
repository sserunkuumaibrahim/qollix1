import Link from "next/link";

export default function Section12() {
    return (
        <>
            {/*=====CTA AREA START=======*/}
            <div className="cta9">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="heading6-w">
                                <h2>Ready To Scale Your Tech Team in Africa?</h2>
                                <div className="space16" />
                                <p>Connect with top African tech talent. From talent sourcing to compliance management, we handle the complexities so you can focus on growth.</p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Link href="/contact" className="theme-btn15">Request Talent <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                    <Link href="/services" className="theme-btn15 btn-outline">Our Services <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div className="images">
                                <div className="img1">
                                    <img src="/assets/img/others/cta6-bg.png" alt="" />
                                </div>
                                <div className="img2">
                                    <img src="/assets/img/others/cta6-image.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====CTA AREA END=======*/}
        </>
    );
}

import Link from "next/link";

export default function Section2() {
    return (
        <>
            {/*=====OUR MISSION AREA START=======*/}
            <div className="mission sp">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto text-center">
                            <div className="heading1">
                                <span className="span">Our Mission</span>
                <h2>Empowering Global Growth Through African Excellence</h2>
                <div className="space16" />
                <p>We bridge the gap between global companies seeking high-quality, cost-effective tech talent and Africa's rapidly growing pool of experienced professionals, creating opportunities for mutual growth and innovation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="space30" />
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                        <Link href="#">Quality & Experience First</Link>
                    </h5>
                    <div className="space16" />
                    <p>Every professional in our network has 4+ years of experience, ensuring immediate productivity and exceptional results for your projects.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon2.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                        <Link href="#">Speed & Reliability</Link>
                    </h5>
                    <div className="space16" />
                    <p>Our industry-leading 10-14 day placement guarantee and comprehensive support ensure seamless integration and ongoing success.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="mission-box">
                                <div className="icon">
                                    <img src="assets/img/icons/mission-icon1.png" alt="" />
                                </div>
                                <div className="heading1">
                                    <h5>
                        <Link href="#">Compliance & Trust</Link>
                    </h5>
                    <div className="space16" />
                    <p>Full legal and regulatory compliance across 7 key African markets through our trusted EOR partnership, ensuring peace of mind for all stakeholders.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*=====OUR MISSION AREA END=======*/}
        </>
    );
}

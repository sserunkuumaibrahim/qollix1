import Link from "next/link";

export default function Section9() {
    return (
        <>
            {/*=====TEAM AREA START=======*/}
            <div className="team9" id="team" style={{ backgroundImage: "url(assets/img/bg/team7-bg.png)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 m-auto text-center">
                            <div className="heading9">
                                <span className="span" data-aos="zoom-in-left" data-aos-duration={700}>
                                    <img src="assets/img/icons/span9.png" alt="" /> our team
                                </span>
                                <h2 className="text-anime-style-3">Meet the Qollix Leadership Team</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row _relative">
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box top">
                                <h5>
                                    <Link href="#">David Kimani</Link>
                                </h5>
                                <p>CEO & Founder</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box">
                                <h5>
                                    <Link href="#">Grace Ochieng</Link>
                                </h5>
                                <p>Head of Talent</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box top">
                                <h5>
                                    <Link href="#">Samuel Mwangi</Link>
                                </h5>
                                <p>VP of Operations</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box">
                                <h5>
                                    <Link href="#">Amina Hassan</Link>
                                </h5>
                                <p>Compliance Director</p>
                            </div>
                        </div>
                        <div className="col-lg col-md-4 col-6">
                            <div className="team-box top">
                                <h5>
                                    <Link href="#">Peter Njoroge</Link>
                                </h5>
                                <p>Tech Lead</p>
                            </div>
                        </div>
                        <div className="main-image">
                            <img src="assets/img/team/team7-image.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/*=====TEAM AREA END=======*/}
        </>
    );
}

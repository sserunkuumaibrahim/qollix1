import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/service/Section1";

export default function Home() {
    return (
        <>
            <Layout>
                <SectionHeader title="Our Services" group_page="" current_page="Our Services" display="d-none" />
                <Section1 />
                <div className="service-cta">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="heading1 text-center">
                                    <h2>Ready to Scale Your Team with African Talent?</h2>
                                    <div className="space16" />
                                    <p>
                                        Join 500+ companies that have successfully scaled their teams with our vetted African tech professionals. <br />
                                        Get started today and experience the cost savings and quality that sets us apart.
                                    </p>
                                    <div className="space30" />
                                    <div className="buttons">
                                        <a href="/contact" className="theme-btn1">
                                            Get Started Today
                                            <span>
                                                <i className="fa-solid fa-arrow-right" />
                                            </span>
                                        </a>
                                        <div className="space16" />
                                        <a href="/about" className="theme-btn2">
                                            Learn More About Us
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}

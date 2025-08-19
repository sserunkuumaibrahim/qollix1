import Link from "next/link";

export default function MainMenu() {
    return (
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li className="dropdown-menu-parrent">
                <Link href="#" className="main1">
                    Services <i className="fa-solid fa-angle-down" />
                </Link>
                <div className="mega-menu-all">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mega-menu-single">
                                <h3>Core</h3>
                                <ul>
                                    <li>
                                        <Link href="/services">All Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/talent-sourcing">Talent Sourcing</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/talent-management">Talent Management</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/compliance-legal">Compliance & Legal</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mega-menu-single">
                                <h3>Value</h3>
                                <ul>
                                    <li>
                                        <Link href="/pricing">Pricing & ROI</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Request Talent</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Hire Now</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mega-menu-single">
                                <h3>Differentiators</h3>
                                <ul>
                                    <li>
                                        <Link href="/about">Why Qollix</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Insights & Articles</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">Partner With Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <Link href="/pricing">Pricing</Link>
            </li>
            <li>
                <Link href="/blog">Blog</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    );
}

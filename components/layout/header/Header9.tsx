import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";
import MainMenuOnePage8 from "../MainMenuOnePage8";

export default function Header({ scroll, isMobileMenu, handleMobileMenu, mainMenuStyle }: any) {
    return (
        <>
            <header>
                <div className={`header-area header-area9 header-area-all d-none d-lg-block ${scroll ? "sticky" : ""} `} id="header">
                    <div className="container">
                        <div className="row header-bg">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/">
                                            <img src="/assets/img/logo/qollix-logo.svg" alt="Qollix Logo" style={{height: '40px', width: 'auto'}} />
                                        </Link>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex1">
                                        <nav className="main-menu">
                                            <ul>
                                                <li>
                                                    <Link href="/">Home</Link>
                                                </li>
                                                <li className="menu-item-has-children">
                                                    <Link href="#">Services</Link>
                                                    <ul className="sub-menu">
                                                        <li>
                                                            <Link href="/services/talent-sourcing">Tech Talent Sourcing</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/services/talent-management">Talent Management</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/services/compliance-legal">Compliance & Legal</Link>
                                                        </li>
                                                        <li>
                                                            <Link href="/services/compliance-legal">EOR Services</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link href="/about">About</Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog">Blog</Link>
                                                </li>
                                                <li>
                                                    <Link href="/contact">Contact</Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="header2-buttons">
                                        <div className="button">
                                            <Link className="theme-btn15" href="/contact">
                                                Contact Us&nbsp;
                                                <span>
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            </header>
            <div className="mobile-header mobile-header-main d-block d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/">
                                    <img src="/assets/img/logo/qollix-logo.svg" alt="Qollix Logo" style={{height: '35px', width: 'auto'}} />
                                </Link>
                            </div>
                            <div className="mobile-nav-icon" onClick={handleMobileMenu}>
                                <i className="fa-duotone fa-bars-staggered" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
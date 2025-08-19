import Link from "next/link";
import MobileMenu from "../MobileMenu";
import MainMenu from "../MainMenu";
import MainMenuOnePage1 from "../MainMenuOnePage1";

export default function Header({ scroll, isMobileMenu, handleMobileMenu, mainMenuStyle }: any) {
    return (
        <>
            <header>
                <div className={`header-area header-area1 header-area-all d-none d-lg-block ${scroll ? "sticky" : ""} `} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/">
                                            <img src="/assets/img/logo/qollix-logo.svg" alt="Qollix - African Tech Talent Solutions" style={{ height: "40px", width: "auto" }} />
                                        </Link>
                                    </div>
                                    <div className="main-menu-ex main-menu-ex1">
                                        {!mainMenuStyle && <MainMenu />}
                                        {mainMenuStyle == "one-page" ? <MainMenuOnePage1 /> : null}
                                    </div>
                                    <div className="header2-buttons">
                                        <div className="button">
                                            <Link className="theme-btn1" href="/contact">
                                                Get A Quote
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
                </div>
                <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
            </header>
            <div className="mobile-header mobile-header-main d-block d-lg-none">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/index1">
                                    <img src="/assets/img/logo/qollix-logo.svg" alt="Qollix - African Tech Talent Solutions" style={{ height: "35px", width: "auto" }} />
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

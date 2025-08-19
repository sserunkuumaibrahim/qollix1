"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface MobileMenuProps {
    isMobileMenu: boolean;
    handleMobileMenu: () => void;
}

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: MobileMenuProps) {
    const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});
    const pathname = usePathname();

    useEffect(() => {
        if (isMobileMenu) {
            handleMobileMenu();
        }
    }, [pathname, isMobileMenu, handleMobileMenu]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setOpenSubMenus({});
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleToggleSubMenu = (key: string) => {
        setOpenSubMenus((prev) => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    const isHashNav = (href: string) => href === "#";

    return (
        <>
            {isMobileMenu && <div className="mobile-menu-overlay" onClick={handleMobileMenu} />}
            {/*=====Mobile header start=======*/}
            <div className={`mobile-sidebar d-block d-lg-none ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="logo-m">
                    <Link href="/">
                        <img src="/assets/img/logo/qollix-logo.svg" alt="Qollix - African Tech Talent Solutions" style={{ height: "35px", width: "auto" }} />
                    </Link>
                </div>
                <div className="menu-close" onClick={handleMobileMenu}>
                    <i className="fa-solid fa-xmark" />
                </div>
                <div className="mobile-nav">
                    <ul>
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li className="has-dropdown">
                            <div className="menu-item-with-toggle">
                                <Link href="#" onClick={(e) => e.preventDefault()}>
                                    Services
                                </Link>
                                <span className={`submenu-button${openSubMenus["service"] ? " submenu-opened" : ""}`} onClick={() => handleToggleSubMenu("service")}>
                                    <em />
                                </span>
                            </div>
                            <ul className="sub-menu" style={{ display: openSubMenus["service"] ? "block" : "none" }}>
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
                                <li>
                                    <Link href="/contact">Request Talent</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Hire Now</Link>
                                </li>
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
                        </li>
                        <li>
                            <Link href="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="mobile-button">
                        <Link className="theme-btn1" href="/contact">
                            Get A Quote
                            <span>
                                <i className="fa-solid fa-arrow-right" />
                            </span>
                        </Link>
                    </div>
                    <div className="single-footer-items">
                        <h3>Contact Qollix</h3>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="/assets/img/icons/footer-icon1.png" alt="" />
                            </div>
                            <div className="pera">
                                <Link href="tel:+256414673086">+256 414 673 086</Link>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="/assets/img/icons/footer-icon2.png" alt="" />
                            </div>
                            <div className="pera">
                                <Link href="mailto:hello@qollix.com">hello@qollix.com</Link>
                            </div>
                        </div>
                        <div className="contact-box">
                            <div className="icon">
                                <img src="/assets/img/icons/footer-icon3.png" alt="" />
                            </div>
                            <div className="pera">
                                <Link href="tel:+256414673086">
                                    Plot 19-21 PortBell Road <br /> Nakawa, Kampala, Uganda
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="contact-infos">
                        <h3>Connect With Us</h3>
                        <ul className="social-icon">
                            <li>
                                <Link href="https://linkedin.com/company/qollix" target="_blank">
                                    <i className="fa-brands fa-linkedin-in" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/qollix" target="_blank">
                                    <i className="fa-brands fa-x-twitter" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://github.com/qollix" target="_blank">
                                    <i className="fa-brands fa-github" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://instagram.com/qollix" target="_blank">
                                    <i className="fa-brands fa-instagram" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

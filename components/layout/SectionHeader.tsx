import Link from "next/link";
import type { ReactNode } from "react";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    breadcrumb?: BreadcrumbItem[]; // overrides legacy props if provided
    group_page?: string; // legacy
    current_page?: string; // legacy
    display?: string; // legacy control for hiding group_page
    extra?: ReactNode;
}

export default function SectionHeader({ title, subtitle, breadcrumb, group_page, current_page, display, extra }: SectionHeaderProps) {
    // Build breadcrumb trail either from new prop or legacy values
    const trail: BreadcrumbItem[] = breadcrumb
        ? breadcrumb
        : [
              { label: "Home", href: "/" },
              ...(group_page ? [{ label: group_page, href: "/" }] : []),
              ...(current_page ? [{ label: current_page }] : []),
          ];

    return (
        <div className="common-hero">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 m-auto text-center">
                        <div className="main-heading">
                            <h1>{title}</h1>
                            {subtitle && (
                                <>
                                    <div className="space16" />
                                    <p className="lead m-0" style={{ fontSize: "1.05rem" }}>
                                        {subtitle}
                                    </p>
                                </>
                            )}
                            <div className="pages-intro" aria-label="breadcrumb">
                                {trail.map((item, idx) => (
                                    <span key={idx} className="breadcrumb-item">
                                        {item.href && idx !== trail.length - 1 ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
                                        {idx < trail.length - 1 && (
                                            <span className="mx-1">
                                                <i className="fa-regular fa-angle-right" />
                                            </span>
                                        )}
                                    </span>
                                ))}
                            </div>
                            {extra && <div className="mt-3">{extra}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

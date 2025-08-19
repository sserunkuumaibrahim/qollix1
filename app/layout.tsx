import "/public/assets/css/bootstrap.min.css";
import "/public/assets/css/fontawesome.css";
import "/public/assets/css/magnific-popup.css";
import "/public/assets/css/nice-select.css";
import "/public/assets/css/slick-slider.css";
import "/public/assets/css/aos.css";
import "/public/assets/css/mobile-menu.css";
import "/public/assets/css/main.css";

import type { Metadata } from "next";

const siteUrl = "https://www.qollix.com"; // adjust when deploying

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: "Qollix – Premium African Tech Talent | 10–14 Day Placement",
        template: "%s | Qollix African Tech Talent"
    },
    description: "Hire pre-vetted senior African software engineers in 10–14 days. 60–80% talent cost savings, full EOR & compliance coverage, performance & retention management.",
    keywords: [
        "African developers",
        "hire African engineers",
        "remote software engineers Africa",
        "EOR Africa tech talent",
        "African outsourcing developers",
        "tech talent sourcing Africa",
        "Qollix"
    ],
    authors: [{ name: "Qollix" }],
    creator: "Qollix",
    publisher: "Qollix",
    openGraph: {
        type: "website",
        url: siteUrl,
        title: "Qollix – Hire Elite African Engineers (10–14 Day Placement)",
        description: "Scale product delivery with pre-vetted senior African engineers. Compliance, payroll & retention handled.",
        siteName: "Qollix",
        images: [
            { url: "/assets/img/og/og-cover.jpg", width: 1200, height: 630, alt: "Qollix African Tech Talent" }
        ],
        locale: "en_US"
    },
    twitter: {
        card: "summary_large_image",
        site: "@qollix",
        creator: "@qollix",
        title: "Qollix – Hire Elite African Engineers",
        description: "10–14 day placement • 4+ yrs experience • 60–80% cost savings • Full compliance",
        images: ["/assets/img/og/og-cover.jpg"]
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    manifest: "/site.webmanifest",
    icons: {
        icon: "/qollix-favicon.svg",
        shortcut: "/qollix-favicon.svg",
        apple: "/qollix-favicon.svg",
    },
};

import Script from "next/script";
import BackToTop from "@/components/elements/BackToTop";
import ClientBootstrap from "@/components/layout/ClientBootstrap";
import Analytics from "@/components/Analytics";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                {/* Favicons for all browsers and devices */}
                <link rel="icon" type="image/svg+xml" href="/qollix-favicon.svg" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/qollix-favicon.svg" />
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#18cb96" />
                <meta name="msapplication-TileColor" content="#18cb96" />
                <meta name="msapplication-TileImage" content="/qollix-favicon.svg" />
                <Analytics />
                <Script id="json-ld-organization" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    'name': 'Qollix',
                    'url': 'https://www.qollix.com',
                    'logo': 'https://www.qollix.com/assets/img/logo/logo-dark.svg',
                    'description': 'Hire pre-vetted senior African software engineers in 10–14 days. Full compliance & retention support.',
                    'sameAs': [
                        'https://twitter.com/qollix',
                        'https://www.linkedin.com/company/qollix'
                    ],
                    'foundingDate': '2024',
                    'areaServed': 'Global',
                    'makesOffer': [{
                        '@type': 'Offer',
                        'name': 'Tech Talent Sourcing & Placement',
                        'url': 'https://www.qollix.com/services/talent-sourcing'
                    },{
                        '@type': 'Offer',
                        'name': 'Comprehensive Talent Management',
                        'url': 'https://www.qollix.com/services/talent-management'
                    },{
                        '@type': 'Offer',
                        'name': 'Compliance & Legal (EOR)',
                        'url': 'https://www.qollix.com/services/compliance-legal'
                    }]
                })}} />
                <Script id="json-ld-website" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    'name': 'Qollix',
                    'url': 'https://www.qollix.com',
                    'potentialAction': {
                        '@type': 'SearchAction',
                        'target': 'https://www.qollix.com/search?q={search_term_string}',
                        'query-input': 'required name=search_term_string'
                    }
                })}} />
            </head>
            <body>
                <div id="page" className="page_wapper">
                    <ClientBootstrap />
                    {children}
                    <BackToTop />
                </div>
            </body>
        </html>
    );
}

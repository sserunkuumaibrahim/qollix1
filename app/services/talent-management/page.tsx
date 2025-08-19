import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/services/talent-management/Section1";
import Section2 from "@/components/sections/services/talent-management/Section2";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Comprehensive Talent Management | Qollix",
    description: "Performance monitoring, retention, onboarding, HR administration & career development for remote African engineering teams.",
    alternates: { canonical: "https://www.qollix.com/services/talent-management" },
    openGraph: { title: "Comprehensive Talent Management | Qollix", description: "End-to-end talent lifecycle support for remote African engineers.", url: "https://www.qollix.com/services/talent-management", type: "article" }
};

export default function TalentManagement() {
    return (
                <>
                    <Layout>
                        <SectionHeader 
                            title="Comprehensive Talent Management" 
                            subtitle="End-to-end talent lifecycle management from onboarding to ongoing support"
                            breadcrumb={[
                                { label: 'Home', href: '/' },
                                { label: 'Services', href: '/services' },
                                { label: 'Talent Management' }
                            ]}
                        />
                        <Section1 />
                        <Section2 />
                        <Script id="ld-json-talent-management" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
                            '@context':'https://schema.org',
                            '@type':'Service',
                            name:'Comprehensive Talent Management',
                            description:'Onboarding, performance analytics, retention and HR administration for remote African engineering teams.',
                            provider:{'@type':'Organization', name:'Qollix', url:'https://www.qollix.com'},
                            areaServed:'Worldwide',
                            offers:{'@type':'Offer', priceSpecification:{'@type':'UnitPriceSpecification', priceCurrency:'USD', price:0, description:'Fee represented as 13% of talent salary deducted monthly'}, name:'Management Fee', url:'https://www.qollix.com/pricing'}
                        })}} />
                    </Layout>
                </>
    );
}
import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/services/talent-sourcing/Section1";
import Section2 from "@/components/sections/services/talent-sourcing/Section2";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Tech Talent Sourcing & Placement | Qollix",
    description: "Access pre-vetted senior African software engineers in 10–14 days. 4+ years experience minimum, 90-day replacement guarantee.",
    alternates: { canonical: "https://www.qollix.com/services/talent-sourcing" },
    openGraph: {
        title: "Tech Talent Sourcing & Placement | Qollix",
        description: "10–14 day access to senior African engineers. Structured multi-step vetting with quality guarantee.",
        url: "https://www.qollix.com/services/talent-sourcing",
        type: "article"
    }
};

export default function TalentSourcing() {
    return (
                <>
                    <Layout>
                        <SectionHeader title="Tech Talent Sourcing & Placement" breadcrumb={[{label:'Home',href:'/'},{label:'Services',href:'/services'},{label:'Talent Sourcing'}]} />
                        <Section1 />
                        <Section2 />
                        <Script id="ld-json-talent-sourcing" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
                            '@context':'https://schema.org',
                            '@type':'Service',
                            name:'Tech Talent Sourcing & Placement',
                            description:'Pre-vetted senior African software engineers delivered in 10–14 days. 4+ years experience minimum.',
                            provider:{'@type':'Organization', name:'Qollix', url:'https://www.qollix.com'},
                            areaServed:'Worldwide',
                            offers:{'@type':'Offer', name:'Tech Talent Sourcing', url:'https://www.qollix.com/services'},
                            termsOfService:'https://www.qollix.com/services'
                        })}} />
                    </Layout>
                </>
    );
}
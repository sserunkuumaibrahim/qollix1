import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import ComplianceContent from "@/components/sections/services/compliance-legal/ComplianceContent";
import { faqJsonLd } from "@/util/complianceData";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Compliance & Legal (EOR) Services | Qollix",
    description: "Pan-African Employer of Record: payroll, tax remittance, contracts & statutory compliance across 7 key African markets.",
    alternates: { canonical: "https://www.qollix.com/services/compliance-legal" },
    openGraph: { title: "Compliance & Legal (EOR) Services | Qollix", description: "Seamless multi-country compliant hiring via integrated EOR platform.", url: "https://www.qollix.com/services/compliance-legal", type: "article" }
};

export default function ComplianceLegal() {
    return (
                <>
                    <Layout>
                        <SectionHeader 
                            title="Compliance & Legal Services" 
                            subtitle="Navigate complex employment laws and regulations with confidence"
                            breadcrumb={[
                                { label: 'Home', href: '/' },
                                { label: 'Services', href: '/services' },
                                { label: 'Compliance & Legal' }
                            ]}
                        />
                        <ComplianceContent />
                        <Script id="ld-json-compliance-service" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
                            '@context':'https://schema.org', '@type':'Service', name:'Compliance & Legal (EOR) Services',
                            description:'Employer of Record (EOR) for African markets handling payroll, contracts, tax and statutory obligations across 7 key African markets.',
                            provider:{'@type':'Organization', name:'Qollix', url:'https://www.qollix.com'},
                            areaServed:'Africa', serviceArea:{'@type':'Place', name:'Africa'},
                            offers:{'@type':'Offer', priceCurrency:'USD', price:0, description:'12% EOR service fee applied to salary', url:'https://www.qollix.com/pricing'}
                        })}} />
                        <Script id="ld-json-compliance-faq" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(faqJsonLd('https://www.qollix.com/services/compliance-legal'))}} />
                        <Script id="ld-json-breadcrumb" type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
                            '@context':'https://schema.org','@type':'BreadcrumbList',
                            itemListElement:[
                                { '@type':'ListItem', position:1, name:'Home', item:'https://www.qollix.com/' },
                                { '@type':'ListItem', position:2, name:'Services', item:'https://www.qollix.com/services' },
                                { '@type':'ListItem', position:3, name:'Compliance & Legal' }
                            ]
                        })}} />
                    </Layout>
                </>
    );
}
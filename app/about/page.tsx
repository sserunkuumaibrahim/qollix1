import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Section1 from "@/components/sections/about/Section1";
import Section2 from "@/components/sections/about/Section2";
import Section3 from "@/components/sections/about/Section3";

export default function AboutPage() {
    return (
        <>
            <Layout>
                <SectionHeader title="About Us" breadcrumb={[{label:'Home',href:'/'},{label:'About Us'}]} />
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}

import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import BlogGrid from "@/components/sections/blog/BlogGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Insights & Guides",
    description: "Expert insights on hiring African tech talent, compliance best practices, and remote team management strategies.",
    keywords: [
        "African tech talent insights",
        "remote hiring guides",
        "EOR compliance blog",
        "tech recruitment tips",
        "African developer hiring",
        "remote team management"
    ],
    openGraph: {
        title: "Blog - Expert Insights on African Tech Talent | Qollix",
        description: "Expert insights on hiring African tech talent, compliance best practices, and remote team management strategies.",
        type: "website",
        url: "https://www.qollix.com/blog"
    },
    twitter: {
        title: "Blog - Expert Insights on African Tech Talent | Qollix",
        description: "Expert insights on hiring African tech talent, compliance best practices, and remote team management strategies.",
    },
    alternates: {
        canonical: "https://www.qollix.com/blog"
    }
};

export default function BlogIndexPage() {
    return (
        <Layout>
            <SectionHeader 
                title="Insights & Guides" 
                subtitle="Expert perspectives on African tech talent, compliance, and team performance" 
                breadcrumb={[
                    {label:'Home', href:'/'},
                    {label:'Blog'}
                ]} 
            />
            <BlogGrid />
        </Layout>
    );
}

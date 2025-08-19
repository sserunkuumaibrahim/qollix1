import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";
import Link from "next/link";

export const metadata = {
  title: "Qollix Services - End-to-End African Tech Talent Solutions",
  description: "Explore Qollix core services: Tech Talent Sourcing & Placement, Comprehensive Talent Management, and Compliance & Legal (EOR) Services.",
};

export default function ServicesIndex() {
  return (
    <Layout>
      <SectionHeader
        title="Our Core Services"
        subtitle="End-to-end platform powering fast, compliant and scalable African tech talent hiring"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Services" }]}
      />
      <div className="service-overview sp">
        <div className="container">
          <div className="row g-4">
            {services.map((s) => (
              <div className="col-lg-4 col-md-6" key={s.slug}>
                <div className="service-card h-100">
                  <div className="icon mb-3">
                    <i className={s.icon} />
                  </div>
                  <h3 className="h5">{s.title}</h3>
                  <p className="mb-3">{s.excerpt}</p>
                  <ul className="list-unstyled small mb-3">
                    {s.points.map((p) => (
                      <li key={p} className="d-flex align-items-start mb-1">
                        <span className="me-2 text-primary">
                          <i className="fa-solid fa-check" />
                        </span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${s.slug}`} className="theme-btn1 d-inline-flex align-items-center">
                    Learn More
                    <span className="ms-2">
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="space60" />
          <div className="row">
            <div className="col-lg-10 m-auto text-center">
              <div className="value-prop-box p-4 p-lg-5">
                <h2 className="h3 mb-3">Why Qollix?</h2>
                <div className="row g-4 text-start mt-2">
                  {valueProps.map((v) => (
                    <div className="col-md-4" key={v.title}>
                      <div className="vp-item">
                        <div className="vp-icon mb-2 text-primary">
                          <i className={v.icon} />
                        </div>
                        <h4 className="h6 mb-2">{v.title}</h4>
                        <p className="small m-0">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const services = [
  {
    slug: "talent-sourcing",
    title: "Tech Talent Sourcing & Placement",
    icon: "fa-solid fa-user-magnifying-glass",
    excerpt: "10-14 day access to pre-vetted African senior developers & tech specialists.",
    points: ["500+ vetted professionals", "4+ years experience", "90-day replacement", "Quality guaranteed"],
  },
  {
    slug: "talent-management",
    title: "Comprehensive Talent Management",
    icon: "fa-solid fa-people-arrows",
    excerpt: "Onboarding, performance, retention & HR support for sustained productivity.",
    points: ["7-day structured onboarding", "Performance analytics", "24/7 support", "Career growth & retention"],
  },
  {
    slug: "compliance-legal",
    title: "Compliance & Legal (EOR)",
    icon: "fa-solid fa-shield-check",
    excerpt: "Pan-African Employer of Record ensuring payroll, tax & legal compliance.",
    points: ["7 key African markets", "Multi-currency payroll", "Risk mitigation", "Full statutory coverage"],
  },
];

const valueProps = [
  { title: "Speed", icon: "fa-solid fa-bolt", desc: "10–14 day placement cycle accelerates delivery and roadmap execution." },
  { title: "Quality", icon: "fa-solid fa-award", desc: "Minimum 4+ years experience & multi-stage vetting ensure productivity." },
  { title: "Cost Efficiency", icon: "fa-solid fa-dollar-sign", desc: "Significant savings vs. Western markets with transparent service delivery." },
  { title: "Compliance", icon: "fa-solid fa-scale-balanced", desc: "EOR partner ecosystem de-risks international hiring." },
  { title: "Scalability", icon: "fa-solid fa-layer-group", desc: "Grow from single roles to multi-function teams seamlessly." },
  { title: "Reliability", icon: "fa-solid fa-shield-halved", desc: "90-day replacement guarantee & ongoing performance oversight." },
];

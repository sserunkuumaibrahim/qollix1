import Layout from "@/components/layout/Layout";
import SectionHeader from "@/components/layout/SectionHeader";

export const metadata = {
  title: "Qollix Pricing & ROI Calculator",
  description: "Transparent pricing: $300 sourcing fee + 25% total service fee (13% management + 12% EOR). Volume discounts & ROI examples.",
};

export default function PricingPage() {
  return (
    <Layout>
      <SectionHeader
        title="Pricing & Value"
        subtitle="Simple, transparent, and ROI-focused pricing that scales with your growth"
        breadcrumb={[{ label: "Home", href: "/" }, { label: "Pricing" }]}
      />
      <div className="pricing-page sp">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="price-card h-100">
                <h3 className="h5 mb-2">Sourcing Fee</h3>
                <p className="text-muted small mb-3">Per successful placement</p>
                <div className="display-6 fw-bold mb-3">$300<span className="fs-6 fw-normal"> / one-time</span></div>
                <ul className="list-unstyled small mb-4">
                  {sourcingPoints.map(p => (
                    <li key={p} className="mb-2 d-flex"><i className="fa-solid fa-check text-primary me-2 mt-1" /> <span>{p}</span></li>
                  ))}
                </ul>
                <div className="badge bg-primary-subtle text-primary">90-day replacement guarantee</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-card h-100 popular">
                <div className="badge bg-primary position-absolute" style={{ top: 16, right: 16 }}>Most Popular</div>
                <h3 className="h5 mb-2">Management Fee</h3>
                <p className="text-muted small mb-3">Deducted from talent salary</p>
                <div className="display-6 fw-bold mb-3">13%<span className="fs-6 fw-normal"> / monthly</span></div>
                <ul className="list-unstyled small mb-4">
                  {managementPoints.map(p => (
                    <li key={p} className="mb-2 d-flex"><i className="fa-solid fa-check text-primary me-2 mt-1" /> <span>{p}</span></li>
                  ))}
                </ul>
                <p className="small m-0 text-muted">Covers onboarding, performance oversight, HR & retention.</p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-card h-100">
                <h3 className="h5 mb-2">EOR / Compliance Fee</h3>
                <p className="text-muted small mb-3">Added to client invoice</p>
                <div className="display-6 fw-bold mb-3">12%<span className="fs-6 fw-normal"> / monthly</span></div>
                <ul className="list-unstyled small mb-4">
                  {eorPoints.map(p => (
                    <li key={p} className="mb-2 d-flex"><i className="fa-solid fa-check text-primary me-2 mt-1" /> <span>{p}</span></li>
                  ))}
                </ul>
                <p className="small m-0 text-muted">Delivered via Brightermonday EOR partnership.</p>
              </div>
            </div>
          </div>
          <div className="space60" />
          <div className="row">
            <div className="col-lg-10 m-auto">
              <h2 className="h4 mb-4 text-center">Volume Discounts (Sourcing Fee)</h2>
              <div className="table-responsive">
                <table className="table table-borderless align-middle pricing-table text-nowrap">
                  <thead>
                    <tr>
                      <th>Annual Placements</th>
                      <th>Discount</th>
                      <th>Effective Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {volumeDiscounts.map(r => (
                      <tr key={r.range}>
                        <td>{r.range}</td>
                        <td>{r.discount}</td>
                        <td>${r.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="space60" />
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="h4 mb-3">ROI Example</h2>
              <p className="small">Based on a traditional hire at $8,000/mo vs. a Qollix placement at $2,240/mo (including all fees) + one-time $300 sourcing fee.</p>
              <ul className="list-unstyled small mb-4">
                <li className="mb-2"><i className="fa-solid fa-arrow-trend-down text-success me-2" /> Monthly savings: <strong>$5,760</strong></li>
                <li className="mb-2"><i className="fa-solid fa-calendar-check text-primary me-2" /> Annual savings: <strong>$69,120</strong></li>
                <li className="mb-2"><i className="fa-solid fa-percent text-warning me-2" /> ROI (12 mo): <strong>1200%+</strong></li>
                <li className="mb-2"><i className="fa-solid fa-clock text-info me-2" /> Time-to-hire improvement: <strong>30-45 days ➜ 10-14 days</strong></li>
              </ul>
              <p className="small text-muted">Sourcing fee amortized over 12 months: $25/mo equivalent cost impact.</p>
            </div>
            <div className="col-lg-6">
              <div className="roi-calc-box p-4 p-lg-5">
                <h3 className="h5 mb-3">Quick Cost Projection</h3>
                <p className="small mb-4">Select a base salary to view total monthly client cost (salary + 12% EOR) & talent net (after 13% management fee).</p>
                <div className="row g-3 align-items-end">
                  {salaryExamples.map(s => (
                    <div className="col-6" key={s.salary}>
                      <div className="example-tile p-3 h-100 border rounded">
                        <div className="small text-muted">Base Salary</div>
                        <div className="h6 mb-2">${s.salary.toLocaleString()}</div>
                        <div className="small">Client Pays: <strong>${(s.salary * 1.12).toLocaleString()}</strong></div>
                        <div className="small">Talent Receives: <strong>${(s.salary * 0.87).toLocaleString()}</strong></div>
                        <div className="small text-muted">Total Service Fee: ${(s.salary * 0.25).toLocaleString()}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="small mt-3 mb-0 text-muted">All figures USD. Does not include optional benefits add-ons.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const sourcingPoints = ["Flat $300 only when you approve a match", "Bulk discounts from 5+ placements", "Structured 5-step vetting", "10–14 day delivery speed"];
const managementPoints = ["Performance monitoring & reporting", "HR administration & retention", "Career development oversight", "Weekly & monthly check-ins"];
const eorPoints = ["Local contracts & compliance", "Multi-currency payroll & tax remittance", "Benefits & statutory filings", "Audit-ready documentation"];

const volumeDiscounts = [
  { range: "5 - 9", discount: "5%", rate: 285 },
  { range: "10 - 19", discount: "10%", rate: 270 },
  { range: "20 - 29", discount: "15%", rate: 255 },
  { range: "30+", discount: "20%", rate: 240 },
];

const salaryExamples = [
  { salary: 1000 },
  { salary: 2000 },
  { salary: 3000 },
  { salary: 5000 },
];

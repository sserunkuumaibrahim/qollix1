import Link from 'next/link';
import {
  eorFeatures, payrollItems, legalFramework, coverageRows,
  lifecycleEvents, ipDataPoints, riskItems, faqs
} from '@/util/complianceData';

const toc = [
  { id: 'overview', label: 'Overview' },
  { id: 'eor', label: 'EOR' },
  { id: 'payroll', label: 'Payroll' },
  { id: 'legal', label: 'Legal Framework' },
  { id: 'coverage', label: 'Coverage' },
  { id: 'lifecycle', label: 'Lifecycle' },
  { id: 'ip-data', label: 'IP & Data' },
  { id: 'faq', label: 'FAQ' },
  { id: 'risk', label: 'Risk' }
];

export default function ComplianceContent() {
  return (
    <div className="service-details-all sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1">
            <div className="service-details-post">
              <div className="details-post-area">
                <section id="overview" className="mb-60">
                  <div className="row g-3">
                    <div className="col-md-7">
                      <div className="image rounded overflow-hidden">
                        <img src="/assets/img/service/service3-img1.png" alt="EOR operations illustration" className="img-fluid" />
                      </div>
                    </div>
                    <div className="col-md-5 d-flex flex-column gap-3">
                      <div className="image rounded overflow-hidden flex-grow-1">
                        <img src="/assets/img/others/solutions9-image3.png" alt="Payroll visualization" className="img-fluid h-100 w-100 object-fit-cover" />
                      </div>
                      <div className="image rounded overflow-hidden flex-grow-1">
                        <img src="/assets/img/blog/blog2-img3.png" alt="Regulatory framework graphic" className="img-fluid h-100 w-100 object-fit-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="space30" />
                  <div className="heading1">
                    <h2>Compliance & Legal (EOR) Services</h2>
                    <div className="space16" />
                    <p>Unified multi‑country Employer of Record: contracts, payroll & tax remittance, statutory benefits, IP & data protection plus structured lifecycle orchestration across 7 key African markets.</p>
                  </div>
                </section>

                <section id="eor" className="mb-60">
                  <div className="heading1"><h3>Employer of Record (EOR)</h3><div className="space16" />
                    <p>Engage talent rapidly without forming entities. We act as legal employer while you retain operational control.</p></div>
                  <div className="row">
                    {[
                      eorFeatures.slice(0,4),
                      eorFeatures.slice(4,8)
                    ].map((col, i) => (
                      <div className="col-md-6" key={i}>
                        <ul className="icon-list">
                          {col.map(item => <li key={item}><span><i className="fa-solid fa-check" /></span>{item}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="payroll" className="mb-60">
                  <div className="heading1"><h3>Payroll & Finance</h3><div className="space16" /><p>Automated payroll & statutory compliance with transparent cost reporting.</p></div>
                  <div className="service-details-box">
                    <div className="row">
                      {payrollItems.map(p => (
                        <div className="col-sm-6" key={p.no}>
                          <div className="service-details-box-item">
                            <div className="number">{p.no}</div>
                            <div className="content"><h4>{p.title}</h4><p>{p.text}</p></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                <section id="legal" className="mb-60">
                  <div className="heading1"><h3>Legal Framework</h3><div className="space16" /><p>Structured layers cover contractual, statutory, fiscal & data domains.</p></div>
                  <div className="compliance-grid"><div className="row">
                    {legalFramework.map(item => (
                      <div className="col-lg-4 col-sm-6" key={item.title}>
                        <div className="compliance-item">
                          <div className="icon"><i className={`fa-solid ${item.icon}`} /></div>
                          <h4>{item.title}</h4>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div></div>
                </section>

                <section id="coverage" className="mb-60">
                  <div className="heading1"><h3>Coverage & Nuances</h3><div className="space16" /><p className="mb-3">Illustrative jurisdictional differences (role specifics may vary).</p></div>
                  <div className="table-responsive mb-2">
                    <table className="table table-sm table-bordered align-middle small">
                      <thead className="table-light"><tr><th>Country</th><th>Probation</th><th>Notice</th><th>Annual Leave</th><th>Employer Focus</th></tr></thead>
                      <tbody>
                        {coverageRows.map(r => <tr key={r[0]}>{r.map((c,i)=><td key={i}>{c}</td>)}</tr>)}
                      </tbody>
                    </table>
                  </div>
                  <p className="small text-muted">Statutory matrices updated continuously; material changes surfaced to clients.</p>
                </section>

                <section id="lifecycle" className="mb-60">
                  <div className="heading1"><h3>Lifecycle Events</h3><div className="space16" /></div>
                  <ul className="icon-list two-columns">
                    {lifecycleEvents.map(ev => <li key={ev}><span><i className="fa-solid fa-check" /></span>{ev}</li>)}
                  </ul>
                </section>

                <section id="ip-data" className="mb-60">
                  <div className="heading1"><h3>IP & Data Protection</h3><div className="space16" /><p>Preserving chain-of-title & safeguarding sensitive information.</p></div>
                  <ul className="icon-list">{ipDataPoints.map(p => <li key={p}><span><i className="fa-solid fa-lock" /></span>{p}</li>)}</ul>
                </section>

                <section id="faq" className="mb-60">
                  <div className="heading1"><h3>FAQ</h3><div className="space16" /></div>
                  <div className="faq-list small">
                    {faqs.map(f => (
                      <div className="mb-3" key={f.q}>
                        <strong>{f.q}</strong>
                        <p className="mb-0">{f.a}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="risk" className="mb-0">
                  <div className="heading1"><h3>Risk Mitigation</h3><div className="space16" /><p>Layered controls reduce contractual, regulatory, financial & operational exposure.</p></div>
                  <ul className="icon-list">{riskItems.map(r => <li key={r}><span><i className="fa-solid fa-star" /></span>{r}</li>)}</ul>
                </section>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2 mb-40 mb-lg-0">
            <aside className="details-sidebar position-lg-sticky" style={{ top: '100px' }}>
              <div className="details-box3 mb-30">
                <h3>On This Page</h3>
                <div className="space10" />
                <ul className="service-list small">
                  {toc.map(t => <li key={t.id}><a href={`#${t.id}`}>{t.label}<span><i className="fa-regular fa-arrow-right" /></span></a></li>)}
                </ul>
              </div>
              <div className="details-box4 mb-30">
                <h3>Coverage Snapshot</h3>
                <div className="space10" />
                <ul className="quick-facts">
                  <li><strong>Countries:</strong> 7</li>
                  <li><strong>Payroll:</strong> Multi-currency + USD invoice</li>
                  <li><strong>Security:</strong> RBAC + encryption</li>
                  <li><strong>Contracts:</strong> Local + IP annexes</li>
                  <li><strong>Support:</strong> 24/7 escalation</li>
                </ul>
              </div>
              <div className="details-box3 mb-30">
                <h3>Other Services</h3>
                <div className="space10" />
                <ul className="service-list">
                  <li><Link href="/services/talent-sourcing">Tech Talent Sourcing<span><i className="fa-regular fa-arrow-right" /></span></Link></li>
                  <li><Link href="/services/talent-management">Talent Management<span><i className="fa-regular fa-arrow-right" /></span></Link></li>
                  <li><Link href="/services/compliance-legal">Compliance & Legal<span><i className="fa-regular fa-arrow-right" /></span></Link></li>
                </ul>
              </div>
              <div className="details-box5">
                <h3>Need Compliance?</h3>
                <div className="space10" />
                <p>Secure multi-country hiring with one partner.</p>
                <div className="space20" />
                <Link href="/contact" className="theme-btn1">Get Protected<span><i className="fa-solid fa-arrow-right" /></span></Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}

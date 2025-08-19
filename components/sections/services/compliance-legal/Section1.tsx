import Link from "next/link";

// Local table of contents configuration (id must match section ids below)
const tocItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'eor', label: 'Employer of Record' },
    { id: 'payroll', label: 'Payroll & Finance' },
    { id: 'legal-framework', label: 'Legal Framework' },
    { id: 'coverage', label: 'Coverage & Nuances' },
    { id: 'lifecycle', label: 'Lifecycle Events' },
    { id: 'ip-data', label: 'IP & Data Protection' },
    { id: 'faq', label: 'FAQ' },
    { id: 'risk', label: 'Risk & Protection' }
];

export default function Section1() {
    return (
        <>
            {/*=====SERVICE DETAILS START=======*/}
            <div className="service-details-all sp">
                <div className="container">
                    <div className="row">
                        {/* Main Content */}
                        <div className="col-lg-8 order-2 order-lg-1">
                            <div className="service-details-post">
                                <div className="details-post-area">
                                    {/* Overview */}
                                    <section id="overview" className="mb-60">
                                        <div className="row g-3">
                                            <div className="col-md-7">
                                                <div className="image rounded overflow-hidden">
                                                    <img src="/assets/img/service/service3-img1.png" alt="Qollix compliance & EOR operations" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-md-5 d-flex flex-column gap-3">
                                                <div className="image rounded overflow-hidden flex-grow-1">
                                                    <img src="/assets/img/others/solutions9-image3.png" alt="Payroll & statutory coverage visualization" className="img-fluid h-100 w-100 object-fit-cover" />
                                                </div>
                                                <div className="image rounded overflow-hidden flex-grow-1">
                                                    <img src="/assets/img/blog/blog2-img3.png" alt="Regulatory framework illustration" className="img-fluid h-100 w-100 object-fit-cover" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space30" />
                                        <div className="heading1">
                                            <h2>Compliance & Legal (EOR) Services</h2>
                                            <div className="space16" />
                                            <p>
                                                Navigate multi‑jurisdiction African employment with certainty. Qollix delivers a unified Employer of Record (EOR) + compliance layer: localized contracts, payroll & tax remittance, statutory benefits, IP & data protection and structured lifecycle event handling across 7 key African markets.
                                            </p>
                                        </div>
                                    </section>

                                    {/* EOR */}
                                    <section id="eor" className="mb-60">
                                        <div className="heading1">
                                            <h3>Employer of Record (EOR)</h3>
                                            <div className="space16" />
                                            <p>Engage talent rapidly without creating local entities. We act as legal employer; you keep full operational control.</p>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <ul className="icon-list">
                                                    <li><span><i className="fa-solid fa-check" /></span> Local compliant contracts</li>
                                                    <li><span><i className="fa-solid fa-check" /></span> Payroll & statutory filings</li>
                                                    <li><span><i className="fa-solid fa-check" /></span> Benefits administration</li>
                                                    <li><span><i className="fa-solid fa-check" /></span> Compliance monitoring</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <ul className="icon-list">
                                                    <li><span><i className="fa-solid fa-check" /></span> IP & confidentiality annexes</li>
                                                    <li><span><i className="fa-solid fa-check" /></span> Termination & severance handling</li>
                                                    <li><span><i className="fa-solid fa-check" /></span> Risk & liability shielding</li>
                                                    <li><span><i className="fa-solid fa-check" /></span> Local regulatory coverage</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Payroll */}
                                    <section id="payroll" className="mb-60">
                                        <div className="heading1">
                                            <h3>Payroll & Financial Operations</h3>
                                            <div className="space16" />
                                            <p>Automated multi-country payroll with transparent cost breakdowns and audit-ready reporting.</p>
                                        </div>
                                        <div className="service-details-box">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="service-details-box-item">
                                                        <div className="number">01</div>
                                                        <div className="content">
                                                            <h4>Multi-Currency Payroll</h4>
                                                            <p>Local payouts (NGN, KES, UGX, GHS, ZAR, EGP, RWF, TZS) & consolidated invoicing.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="service-details-box-item">
                                                        <div className="number">02</div>
                                                        <div className="content">
                                                            <h4>Tax Remittance</h4>
                                                            <p>Automated PAYE, social security & pension filings with proof of remittance.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="service-details-box-item">
                                                        <div className="number">03</div>
                                                        <div className="content">
                                                            <h4>Benefits Management</h4>
                                                            <p>Health plans, pensions, leave accrual & holiday calendars.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="service-details-box-item">
                                                        <div className="number">04</div>
                                                        <div className="content">
                                                            <h4>Financial Reporting</h4>
                                                            <p>Cost breakdown (gross, taxes, benefits, fee) & annual statements.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Legal Framework */}
                                    <section id="legal-framework" className="mb-60">
                                        <div className="heading1">
                                            <h3>Legal Compliance Framework</h3>
                                            <div className="space16" />
                                            <p>A layered framework covers contractual, statutory, fiscal & data domains for every supported jurisdiction.</p>
                                        </div>
                                        <div className="compliance-grid">
                                            <div className="row">
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="compliance-item">
                                                        <div className="icon"><i className="fa-solid fa-gavel" /></div>
                                                        <h4>Employment Law</h4>
                                                        <p>Local labor regulation adherence.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="compliance-item">
                                                        <div className="icon"><i className="fa-solid fa-shield-alt" /></div>
                                                        <h4>Data Protection</h4>
                                                        <p>GDPR & local privacy controls.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="compliance-item">
                                                        <div className="icon"><i className="fa-solid fa-file-invoice-dollar" /></div>
                                                        <h4>Tax Compliance</h4>
                                                        <p>Accurate withholdings & filings.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="compliance-item">
                                                        <div className="icon"><i className="fa-solid fa-handshake" /></div>
                                                        <h4>Contract Law</h4>
                                                        <p>Protective bilateral agreements.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="compliance-item">
                                                        <div className="icon"><i className="fa-solid fa-balance-scale" /></div>
                                                        <h4>Dispute Resolution</h4>
                                                        <p>Mediation & legal escalation.</p>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4 col-sm-6">
                                                    <div className="compliance-item">
                                                        <div className="icon"><i className="fa-solid fa-clipboard-check" /></div>
                                                        <h4>Audit Support</h4>
                                                        <p>Documentation & evidence packs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Coverage */}
                                    <section id="coverage" className="mb-60">
                                        <div className="heading1">
                                            <h3>Coverage & Key Jurisdiction Nuances</h3>
                                            <div className="space16" />
                                            <p className="mb-3">Illustrative differences across core markets (patterns vary by role/tenure):</p>
                                        </div>
                                        <div className="table-responsive mb-2">
                                            <table className="table table-sm table-bordered align-middle small">
                                                <thead className="table-light">
                                                    <tr>
                                                        <th>Country</th>
                                                        <th>Probation</th>
                                                        <th>Notice</th>
                                                        <th>Annual Leave</th>
                                                        <th>Employer Focus</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr><td>Kenya</td><td>3–6 mo</td><td>1 mo</td><td>21 days</td><td>NSSF, NHIF, PAYE</td></tr>
                                                    <tr><td>Nigeria</td><td>3 mo</td><td>1 mo</td><td>6–15+ tiered</td><td>Pension, ITF, PAYE</td></tr>
                                                    <tr><td>Uganda</td><td>6 mo</td><td>1 mo</td><td>21 days</td><td>NSSF, PAYE</td></tr>
                                                    <tr><td>Ghana</td><td>6 mo</td><td>1 mo</td><td>15–20 days</td><td>SSNIT, PAYE</td></tr>
                                                    <tr><td>Rwanda</td><td>3–6 mo</td><td>1 mo</td><td>18 days</td><td>RSSB, PAYE</td></tr>
                                                    <tr><td>Egypt</td><td>3 mo</td><td>2 mo</td><td>21–30 days</td><td>Social Ins., Tax</td></tr>
                                                    <tr><td>South Africa</td><td>3 mo</td><td>4 wks</td><td>21 days</td><td>UIF, PAYE</td></tr>
                                                    <tr><td>Tanzania</td><td>6 mo</td><td>28 days</td><td>28 days</td><td>NSSF, PAYE</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="small text-muted">Statutory matrices updated continuously; material changes surfaced to clients.</p>
                                    </section>

                                    {/* Lifecycle */}
                                    <section id="lifecycle" className="mb-60">
                                        <div className="heading1">
                                            <h3>Lifecycle Events We Orchestrate</h3>
                                            <div className="space16" />
                                        </div>
                                        <ul className="icon-list two-columns">
                                            <li><span><i className="fa-solid fa-check" /></span> Onboarding & contract execution</li>
                                            <li><span><i className="fa-solid fa-check" /></span> Compensation adjustments</li>
                                            <li><span><i className="fa-solid fa-check" /></span> Leave & holiday tracking</li>
                                            <li><span><i className="fa-solid fa-check" /></span> Benefits enrollment</li>
                                            <li><span><i className="fa-solid fa-check" /></span> Performance documentation</li>
                                            <li><span><i className="fa-solid fa-check" /></span> Termination & severance</li>
                                            <li><span><i className="fa-solid fa-check" /></span> IP reaffirmations</li>
                                            <li><span><i className="fa-solid fa-check" /></span> Exit clearance</li>
                                        </ul>
                                    </section>

                                    {/* IP & Data */}
                                    <section id="ip-data" className="mb-60">
                                        <div className="heading1">
                                            <h3>Intellectual Property & Data Protection</h3>
                                            <div className="space16" />
                                            <p>Clean IP chain-of-title & secure data handling across distributed environments.</p>
                                        </div>
                                        <ul className="icon-list">
                                            <li><span><i className="fa-solid fa-lock" /></span> Invention assignment & moral rights waivers</li>
                                            <li><span><i className="fa-solid fa-user-shield" /></span> Role-based access & offboarding revocation</li>
                                            <li><span><i className="fa-solid fa-database" /></span> Data minimization guidance</li>
                                            <li><span><i className="fa-solid fa-file-signature" /></span> Dual language annexes when required</li>
                                        </ul>
                                    </section>

                                    {/* FAQ */}
                                    <section id="faq" className="mb-60">
                                        <div className="heading1">
                                            <h3>Frequently Asked Questions</h3>
                                            <div className="space16" />
                                        </div>
                                        <div className="faq-list small">
                                            <div className="mb-3">
                                                <strong>How long does compliant onboarding take?</strong>
                                                <p className="mb-0">Contract issuance & KYC in 24–48h; payroll enrollment before first cut.</p>
                                            </div>
                                            <div className="mb-3">
                                                <strong>Who signs the employment contract?</strong>
                                                <p className="mb-0">Qollix (as EOR) & the talent; you receive mirrored service documentation.</p>
                                            </div>
                                            <div className="mb-3">
                                                <strong>How are terminations handled?</strong>
                                                <p className="mb-0">Cause analysis, notice/severance computation, compliant documentation & offboarding checklist.</p>
                                            </div>
                                            <div className="mb-3">
                                                <strong>Can we convert to direct employment later?</strong>
                                                <p className="mb-0">Yes – we support contract migration & continuity assessment.</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Risk */}
                                    <section id="risk" className="mb-0">
                                        <div className="heading1">
                                            <h3>Risk Mitigation & Protection</h3>
                                            <div className="space16" />
                                            <p>Layered controls reduce contractual, regulatory, financial & operational exposure.</p>
                                        </div>
                                        <ul className="icon-list">
                                            <li><span><i className="fa-solid fa-star" /></span> Liability insurance (professional & EPL)</li>
                                            <li><span><i className="fa-solid fa-star" /></span> IP assignment & confidentiality enforcement</li>
                                            <li><span><i className="fa-solid fa-star" /></span> Data privacy & security policy adherence</li>
                                            <li><span><i className="fa-solid fa-star" /></span> Employment practices liability protection</li>
                                            <li><span><i className="fa-solid fa-star" /></span> Regular compliance audits</li>
                                            <li><span><i className="fa-solid fa-star" /></span> 24/7 escalation & quarterly reviews</li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                        {/* Sidebar */}
                        <div className="col-lg-4 order-1 order-lg-2 mb-40 mb-lg-0">
                            <aside className="details-sidebar position-lg-sticky" style={{ top: '100px' }}>
                                <div className="details-box3 mb-30">
                                    <h3>On This Page</h3>
                                    <div className="space10" />
                                    <ul className="service-list small">
                                        {tocItems.map(item => (
                                            <li key={item.id}>
                                                <a href={`#${item.id}`}>{item.label}<span><i className="fa-regular fa-arrow-right" /></span></a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="details-box4 mb-30">
                                    <h3>Compliance Coverage</h3>
                                    <div className="space10" />
                                    <ul className="quick-facts">
                                        <li><strong>Countries:</strong> 7 (Kenya, Nigeria, Uganda, Ghana, Rwanda, Tanzania, South Africa)</li>
                                        <li><strong>Payroll:</strong> Multi-currency + USD invoicing</li>
                                        <li><strong>Security:</strong> RBAC + encrypted storage</li>
                                        <li><strong>Contracts:</strong> Local + IP annexes</li>
                                        <li><strong>Support:</strong> 24/7 escalation</li>
                                    </ul>
                                </div>
                                <div className="details-box3 mb-30">
                                    <h3>Other Services</h3>
                                    <div className="space10" />
                                    <ul className="service-list">
                                        <li>
                                            <Link href="/services/talent-sourcing">Tech Talent Sourcing<span><i className="fa-regular fa-arrow-right" /></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/services/talent-management">Talent Management<span><i className="fa-regular fa-arrow-right" /></span></Link>
                                        </li>
                                        <li>
                                            <Link href="/services/compliance-legal">Compliance & Legal<span><i className="fa-regular fa-arrow-right" /></span></Link>
                                        </li>
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
            {/*=====SERVICE DETAILS END=======*/}
        </>
    );
}
// Centralized structured data for Compliance & Legal (EOR) page
export const eorFeatures = [
  'Local compliant contracts',
  'Payroll & statutory filings',
  'Benefits administration',
  'Compliance monitoring',
  'IP & confidentiality annexes',
  'Termination & severance handling',
  'Risk & liability shielding',
  'Regulatory coverage'
];

export const payrollItems = [
  { no: '01', title: 'Multi-Currency Payroll', text: 'Local payouts (NGN, KES, UGX, GHS, ZAR, EGP, RWF, TZS) & consolidated invoicing.' },
  { no: '02', title: 'Tax Remittance', text: 'Automated PAYE, social security & pension filings with proof of remittance.' },
  { no: '03', title: 'Benefits Management', text: 'Health plans, pensions, leave accrual & holiday calendars.' },
  { no: '04', title: 'Financial Reporting', text: 'Granular cost breakdown & annual consolidated statements.' }
];

export const legalFramework = [
  { icon: 'fa-gavel', title: 'Employment Law', text: 'Local labor regulation adherence.' },
  { icon: 'fa-shield-alt', title: 'Data Protection', text: 'GDPR alignment + local privacy controls.' },
  { icon: 'fa-file-invoice-dollar', title: 'Tax Compliance', text: 'Accurate withholdings & filings.' },
  { icon: 'fa-handshake', title: 'Contract Law', text: 'Protective bilateral agreements.' },
  { icon: 'fa-balance-scale', title: 'Dispute Resolution', text: 'Mediation & legal escalation.' },
  { icon: 'fa-clipboard-check', title: 'Audit Support', text: 'Evidence packs & documentation.' }
];

export const coverageRows = [
  ['Kenya','3–6 mo','1 mo','21 days','NSSF, NHIF, PAYE'],
  ['Nigeria','3 mo','1 mo','6–15+ tiered','Pension, ITF, PAYE'],
  ['Uganda','6 mo','1 mo','21 days','NSSF, PAYE'],
  ['Ghana','6 mo','1 mo','15–20 days','SSNIT, PAYE'],
  ['Rwanda','3–6 mo','1 mo','18 days','RSSB, PAYE'],
  ['Egypt','3 mo','2 mo','21–30 days','Social Ins., Tax'],
  ['South Africa','3 mo','4 wks','21 days','UIF, PAYE'],
  ['Tanzania','6 mo','28 days','28 days','NSSF, PAYE']
];

export const lifecycleEvents = [
  'Onboarding & contract execution','Compensation adjustments','Leave & holiday tracking','Benefits enrollment',
  'Performance documentation','Termination & severance','IP reaffirmations','Exit clearance'
];

export const ipDataPoints = [
  'Invention assignment & moral rights waivers','Role-based access & offboarding revocation','Data minimization guidance','Dual language annexes when required'
];

export const riskItems = [
  'Liability insurance (professional & EPL)','IP assignment & confidentiality enforcement','Data privacy & security adherence',
  'Employment practices liability protection','Regular compliance audits','24/7 escalation & quarterly reviews'
];

export const faqs = [
  { q: 'How long does compliant onboarding take?', a: 'Contract issuance & KYC in 24–48h; payroll enrollment before first cut.' },
  { q: 'Who signs the employment contract?', a: 'Qollix (as EOR) & the talent; you receive mirrored service documentation.' },
  { q: 'How are terminations handled?', a: 'Cause analysis, notice & severance computation, compliant documentation & offboarding checklist.' },
  { q: 'Can we convert to direct employment later?', a: 'Yes – we support contract migration & continuity assessment.' }
];

export const faqJsonLd = (baseUrl: string) => ({
  '@context':'https://schema.org',
  '@type':'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type':'Question',
    name: f.q,
    acceptedAnswer: { '@type':'Answer', text: f.a }
  }))
});

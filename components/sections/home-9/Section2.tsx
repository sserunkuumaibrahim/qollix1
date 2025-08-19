import Link from "next/link";

interface CountryInfo { 
    code: string; 
    name: string; 
    flag: string; 
    focus: string; 
    capital: string; 
    talentPool: string;
    timeZone: string;
    languages: string;
}

const countries: CountryInfo[] = [
    { 
        code: 'UG', 
        name: 'Uganda', 
        flag: '🇺🇬', 
        capital: 'Kampala', 
        focus: 'Fintech · Healthtech · Data Science',
        talentPool: '45K+ developers',
        timeZone: 'GMT+3',
        languages: 'English'
    },
    { 
        code: 'KE', 
        name: 'Kenya', 
        flag: '🇰🇪', 
        capital: 'Nairobi', 
        focus: 'Fintech · SaaS · Cloud Solutions',
        talentPool: '120K+ developers',
        timeZone: 'GMT+3',
        languages: 'English, Swahili'
    },
    { 
        code: 'TZ', 
        name: 'Tanzania', 
        flag: '🇹🇿', 
        capital: 'Dar es Salaam', 
        focus: 'Telecom · Mobile Apps · Logistics',
        talentPool: '35K+ developers',
        timeZone: 'GMT+3',
        languages: 'English, Swahili'
    },
    { 
        code: 'RW', 
        name: 'Rwanda', 
        flag: '🇷🇼', 
        capital: 'Kigali', 
        focus: 'GovTech · Data Analytics · AI',
        talentPool: '25K+ developers',
        timeZone: 'GMT+2',
        languages: 'English, French'
    },
    { 
        code: 'NG', 
        name: 'Nigeria', 
        flag: '🇳🇬', 
        capital: 'Lagos/Abuja', 
        focus: 'Fintech · Web3 · Product Design',
        talentPool: '500K+ developers',
        timeZone: 'GMT+1',
        languages: 'English'
    },
    { 
        code: 'GH', 
        name: 'Ghana', 
        flag: '🇬🇭', 
        capital: 'Accra', 
        focus: 'Digital Payments · Mobile · E-commerce',
        talentPool: '80K+ developers',
        timeZone: 'GMT',
        languages: 'English'
    },
    { 
        code: 'ZA', 
        name: 'South Africa', 
        flag: '🇿🇦', 
        capital: 'Cape Town/Johannesburg', 
        focus: 'Enterprise · Cloud · DevOps',
        talentPool: '200K+ developers',
        timeZone: 'GMT+2',
        languages: 'English, Afrikaans'
    }
];

export default function Section2(){
    return (
        <div className="supported-countries9 py-5 bg-light" id="coverage">
            <div className="container">
                <div className="row align-items-end mb-4">
                    <div className="col-lg-8">
                        <div className="heading9">
                            <span className="span"><img src="/assets/img/icons/span9.png" alt="" /> Coverage</span>
                            <h2 className="text-anime-style-3">African Talent Markets We Cover</h2>
                            <p className="mb-0 text-muted">Access top developers across 7 African countries with comprehensive EOR and compliance support</p>
                        </div>
                    </div>
                    <div className="col-lg-4 text-lg-end">
                        <Link href="/services/compliance-legal" className="theme-btn15 small mb-2 d-block d-lg-inline-block">
                            <i className="fa-solid fa-shield-alt me-1"></i>
                            EOR & Compliance 
                            <span><i className="fa-solid fa-arrow-right" /></span>
                        </Link>
                        <Link href="/contact" className="theme-btn15 outline small d-block d-lg-inline-block">
                            <i className="fa-solid fa-envelope me-1"></i>
                            Get Started
                            <span><i className="fa-solid fa-arrow-right" /></span>
                        </Link>
                    </div>
                </div>
                <div className="row g-3 g-md-4">
                    {countries.map(c => (
                        <div key={c.code} className="col-6 col-lg-4 col-xl-3">
                            <div className="country-tile h-100 p-3 rounded border bg-white d-flex flex-column shadow-sm hover-shadow-lg transition-all">
                                <div className="d-flex align-items-center justify-content-between mb-3">
                                    <span className="fs-3" aria-hidden="true">{c.flag}</span>
                                    <div className="text-end">
                                        <span className="badge bg-primary-subtle text-primary-emphasis small d-block mb-1">{c.code}</span>
                                        <span className="badge bg-success-subtle text-success small">{c.timeZone}</span>
                                    </div>
                                </div>
                                <h3 className="h6 mb-2 fw-bold">{c.name}</h3>
                                <div className="mb-2">
                                    <p className="small text-muted mb-1">
                                        <i className="fa-solid fa-map-marker-alt me-1"></i>
                                        {c.capital}
                                    </p>
                                    <p className="small text-muted mb-1">
                                        <i className="fa-solid fa-users me-1"></i>
                                        {c.talentPool}
                                    </p>
                                    <p className="small text-muted mb-2">
                                        <i className="fa-solid fa-language me-1"></i>
                                        {c.languages}
                                    </p>
                                </div>
                                <p className="small mb-3 flex-grow-1 text-primary fw-medium">{c.focus}</p>
                                <div className="mt-auto pt-2">
                                    <Link href="/contact" className="btn btn-outline-primary btn-sm w-100">
                                        <i className="fa-solid fa-envelope me-1"></i>
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="bg-primary-subtle rounded p-4 text-center">
                            <h4 className="h6 mb-2">Ready to Hire African Talent?</h4>
                            <p className="small text-muted mb-3">
                                Our talent network spans 7 key African markets. We handle everything from sourcing to compliance, 
                                so you can focus on building great products with world-class developers.
                            </p>
                            <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                                <span className="badge bg-secondary">Remote-First</span>
                                <span className="badge bg-secondary">EOR Services</span>
                                <span className="badge bg-secondary">Compliance Support</span>
                                <span className="badge bg-secondary">Multi-Currency</span>
                            </div>
                            <Link href="/contact" className="btn btn-primary">
                                <i className="fa-solid fa-envelope me-1"></i>
                                Contact Us Today
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

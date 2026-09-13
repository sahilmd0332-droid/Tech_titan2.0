/**
 * Setu 2.0 - Verified Government Scheme Database (~100 Schemes)
 * SIH 2026 Problem Statement 92 (Ministry of Social Justice & Empowerment)
 * 
 * All schemes capped at a maximum project cost of ₹1,00,00,000 (₹1 Crore).
 * Covers MoSJE, MSME, Agriculture, Rural/Urban Livelihoods, Women & Youth initiatives.
 * Strictly in-app: includes statutory documents, 4-step application processes, and Government interest subsidies.
 */

const SCHEMES_DATA = [
  // ==========================================================================
  // 1. MINISTRY OF SOCIAL JUSTICE & EMPOWERMENT (MoSJE) & AFFILIATED CORPS
  // ==========================================================================
  {
    id: "term",
    nameEn: "NSFDC Term Loan Scheme",
    nameHi: "एनएसएफडीसी सावधि ऋण योजना (Term Loan)",
    nodalAgency: "National SC Finance & Development Corporation (MoSJE)",
    minCost: 100000,
    maxCost: 5000000, // ₹50 Lakh
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 10,
    moratoriumMonths: 9,
    purpose: ["business"],
    allowedCategories: ["SC"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "Direct Concessional Subvention: The Government of India absorbs commercial interest costs, capping your effective interest rate at just 6% p.a. (compared to 12-16% in commercial banks). Women get an additional 0.5% rebate.",
    keyBenefits: [
      "Low-interest loan up to ₹50 Lakh at government-subsidized rates from 6% p.a.",
      "Up to 90% of project cost funded by NSFDC through State Channelising Agencies",
      "Only 10% promoter margin money required",
      "Long repayment period up to 10 years with 9 months principal repayment holiday"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at District SCA Office", desc: "Submit project proposal to your State SC Development Corporation (e.g. Mahapreit, TAHDCO, DSCFDC) or District Welfare Office." },
      { step: "Step 2", title: "Caste & Income Scrutiny", desc: "District Welfare Officer verifies SC certificate and family income (within ₹5 Lakh)." },
      { step: "Step 3", title: "Project Appraisal", desc: "Technical evaluation of machinery quotes and business feasibility by SCA committee." },
      { step: "Step 4", title: "Disbursement", desc: "NSFDC releases funds directly to your business account or equipment supplier." }
    ],
    descriptionEn: "Concessional credit up to ₹50 Lakh for viable income-generating business ventures for SC entrepreneurs.",
    descriptionHi: "आय-सृजक उद्यमों हेतु ₹50 लाख तक का रियायती ऋण। 90% तक सरकारी वित्तपोषण मात्र 6% की रियायती ब्याज दर पर।",
    documentsRequired: [
      "Aadhaar Card & PAN Card",
      "SC Caste Certificate issued by Sub-Divisional Officer (SDO) or Tehsildar",
      "Annual Family Income Certificate (proving annual income ≤ ₹5.00 Lakh)",
      "Quotation / Proforma Invoice of machinery, tools, or vehicles to be purchased",
      "Brief Project Profile / Detailed Project Report (DPR)",
      "Affidavit of non-availment of duplicate subsidy under other MoSJE schemes"
    ],
    whereToSubmit: "District SC Development Corporation (SCA) or District Social Welfare Officer (DSWO)"
  },
  {
    id: "micro",
    nameEn: "NSFDC Micro Credit Finance (MCF)",
    nameHi: "एनएसएफडीसी माइक्रो क्रेडिट फाइनेंस (MCF)",
    nodalAgency: "NSFDC / State Channelising Agencies",
    minCost: 10000,
    maxCost: 140000, // ₹1.40 Lakh
    coverPct: 0.90,
    rate: 6.5,
    tenureYears: 3,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SC"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services", "Agri-Allied", "Handicrafts"],
    govtInterestSubsidy: "Affordable Micro-Financing: Government caps interest at 6.5% p.a. to protect tiny vendors and artisans from unorganized moneylenders.",
    keyBenefits: [
      "Fast microcredit up to ₹1.40 Lakh for small shops, artisan kiosks, and rural services",
      "Minimal documentation — processed within 15 working days",
      "Subsidized rate of 6.5% p.a. with no hidden bank charges",
      "Promoter self-contribution capped at only 10%"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Micro Application", desc: "Submit simple 1-page form to District Welfare Office or Regional Rural Bank." },
      { step: "Step 2", title: "Document Verification", desc: "Field officer verifies Aadhaar and community certificate." },
      { step: "Step 3", title: "Instant Sanction", desc: "Sanction letter issued and funds disbursed for inventory or tools." }
    ],
    descriptionEn: "Small-scale microcredit up to ₹1.40 Lakh for rapid livelihood generation, tiny shops, and artisans.",
    descriptionHi: "छोटे व्यापार, ग्रामीण कारीगरों और सूक्ष्म आजीविका हेतु त्वरित ₹1.40 लाख तक का माइक्रो-लोन मात्र 6.5% ब्याज पर।",
    documentsRequired: [
      "Aadhaar Card / Ration Card",
      "SC Community Certificate",
      "Self-declaration / Income Certificate (≤ ₹5 Lakh per year)",
      "Bank Passbook copy with active IFSC code"
    ],
    whereToSubmit: "Local District Welfare Office or Regional Rural Bank Branch"
  },
  {
    id: "msy",
    nameEn: "NSFDC Mahila Samriddhi Yojana (MSY)",
    nameHi: "एनएसएफडीसी महिला समृद्धि योजना (MSY)",
    nodalAgency: "NSFDC / State Women Development Corporations",
    minCost: 10000,
    maxCost: 140000,
    coverPct: 0.95,
    rate: 4.0,
    tenureYears: 3.5,
    moratoriumMonths: 4,
    purpose: ["business"],
    allowedCategories: ["SC"],
    allowedGenders: ["female"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services", "Trading", "Handicrafts", "Dairy / Poultry"],
    govtInterestSubsidy: "Women's Super-Subvention: The Ministry subsidizes nearly the entire interest load, delivering funds at an ultra-low 4.0% p.a. Beneficiary puts only 5% margin.",
    keyBenefits: [
      "Exclusive women-empowerment scheme offering loans up to ₹1.40 Lakh",
      "Rock-bottom interest rate of just 4.0% per annum",
      "Government covers 95% of total project cost",
      "Available for individual SC women or women Self-Help Groups (SHGs)"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Contact District Women's Cell", desc: "Visit your district Mahila Arthik Vikas Mahamandal or State SC Corporation." },
      { step: "Step 2", title: "SHG / Beneficiary Enrollment", desc: "Submit KYC and trade choice (tailoring, dairy, grocery, handicrafts)." },
      { step: "Step 3", title: "Disbursement", desc: "Funds credited with a 4-month principal repayment pause." }
    ],
    descriptionEn: "Exclusive women-empowerment micro-credit offering loans up to ₹1.40 Lakh at 4% interest for SC women entrepreneurs and Self-Help Groups.",
    descriptionHi: "अनुसूचित जाति की महिलाओं एवं स्वयं सहायता समूहों के लिए मात्र 4% वार्षिक ब्याज पर ₹1.40 लाख तक का विशेष रियायती ऋण।",
    documentsRequired: [
      "Aadhaar Card of the Woman Beneficiary",
      "SC Caste Certificate",
      "Family Income Certificate (proving annual income ≤ ₹5.00 Lakh)",
      "Bank Account details in beneficiary's own name or SHG joint account",
      "Brief quote / plan for small enterprise"
    ],
    whereToSubmit: "District Mahila Arthik Vikas Mahamandal or State SC Development Corporation"
  },
  {
    id: "may",
    nameEn: "NSFDC Mahila Adhikarita Yojana (MAY)",
    nameHi: "एनएसएफडीसी महिला अधिकारिता योजना (MAY)",
    nodalAgency: "NSFDC / State Channelising Agencies",
    minCost: 100000,
    maxCost: 2000000, // ₹20 Lakh
    coverPct: 0.90,
    rate: 4.0,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC"],
    allowedGenders: ["female"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "Targeted Women Entrepreneur Subvention: Highly subsidized 4% p.a. interest rate for SC women establishing small to medium enterprises.",
    keyBenefits: [
      "Up to ₹20 Lakh credit for women-owned enterprises",
      "Subsidized rate of 4.0% p.a. with long 8-year repayment tenure",
      "Promoter margin only 10%",
      "Priority assistance under state affirmative action mandates"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Prepare Project Profile", desc: "Formulate business plan for service center, boutique, food unit, or transport." },
      { step: "Step 2", title: "Submit to SCA Women's Cell", desc: "Submit application with revenue certificates." },
      { step: "Step 3", title: "Sanction & Asset Financing", desc: "Funds sanctioned and machinery purchased via vendor direct payment." }
    ],
    descriptionEn: "Term loan up to ₹20 Lakh for SC women entrepreneurs at a subsidized interest rate of 4% per annum.",
    descriptionHi: "अनुसूचित जाति की महिला उद्यमियों के लिए मात्र 4% ब्याज दर पर ₹20 लाख तक का सावधि ऋण।",
    documentsRequired: [
      "Aadhaar Card and PAN Card of Woman Entrepreneur",
      "Caste Certificate & Income Certificate (≤ ₹5 Lakh)",
      "Detailed Project Profile with machinery quotes",
      "Bank Passbook copy"
    ],
    whereToSubmit: "State Channelising Agency (SCA) District Office"
  },
  {
    id: "edu",
    nameEn: "NSFDC Educational Loan Scheme (ELS)",
    nameHi: "एनएसएफडीसी शिक्षा ऋण योजना (ELS)",
    nodalAgency: "NSFDC / Commercial Banks / MoSJE",
    minCost: 100000,
    maxCost: 4000000, // ₹20 Lakh India, ₹40 Lakh abroad
    coverPct: 0.90,
    rate: 4.0,
    tenureYears: 11,
    moratoriumMonths: 12,
    purpose: ["education"],
    allowedCategories: ["SC"],
    incomeCeiling: 500000,
    ventureType: ["education"],
    sectors: ["Higher Education", "Engineering", "Medicine", "Management", "Study Abroad"],
    govtInterestSubsidy: "100% Interest Paid by Government During Studies: Under CSIS / MoSJE guidelines, full interest during the entire course plus 1-year moratorium is paid by the Government of India. Repayment starts only after landing employment at a nominal 4% rate.",
    keyBenefits: [
      "Up to ₹20 Lakh for studies in India, up to ₹40 Lakh for professional degrees abroad",
      "Zero interest during course duration — 100% interest borne by Central Government",
      "Ultra-low 4.0% p.a. interest for female students (4.5% for male) once employed",
      "Long 11-year repayment period with post-graduation moratorium"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Secure Admission", desc: "Obtain confirmed admission letter and institutional fee breakdown." },
      { step: "Step 2", title: "Submit on Vidya Lakshmi Portal / SCA", desc: "Apply online or visit your State SC Development Corporation." },
      { step: "Step 3", title: "Direct Fee Remittance", desc: "Tuition and hostel fees remitted directly to the college/university account." }
    ],
    descriptionEn: "Concessional education loan up to ₹20 Lakh in India and ₹40 Lakh abroad with government-paid interest during the study duration.",
    descriptionHi: "भारत में ₹20 लाख तथा विदेश में अध्ययन हेतु ₹40 लाख तक का रियायती शिक्षा ऋण। पढ़ाई के दौरान 100% ब्याज सरकार द्वारा देय।",
    documentsRequired: [
      "Official Admission Letter / Offer Letter from recognized College or University",
      "Official Fee Structure Breakup (Tuition, Hostel, Equipment)",
      "10th, 12th, and Degree Marksheets and Transcripts",
      "SC Caste Certificate issued by competent Revenue Authority",
      "Parental Income Certificate (≤ ₹5 Lakh per year)",
      "Valid Passport & Student Visa (for foreign courses)",
      "Aadhaar Card of student and parent / guardian"
    ],
    whereToSubmit: "State SC Development Corporation or Vidya Lakshmi Portal / Lead Bank"
  },
  {
    id: "green",
    nameEn: "NSFDC Green Business Scheme (GBS)",
    nameHi: "एनएसएफडीसी हरित व्यवसाय योजना (GBS)",
    nodalAgency: "NSFDC / State SC Development Corporations",
    minCost: 200000,
    maxCost: 3000000, // ₹30 Lakh
    coverPct: 0.90,
    rate: 6.5,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC"],
    incomeCeiling: 500000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Clean Energy", "Manufacturing", "Services", "Transport"],
    govtInterestSubsidy: "Climate Action Interest Subvention: Concessional 6.5% interest rate to support solar equipment, e-rickshaws, and clean energy commercial activities.",
    keyBenefits: [
      "Financial assistance up to ₹30 Lakh for climate-friendly and clean tech businesses",
      "Covers 90% of equipment cost for solar units, battery EV transport, and recycling",
      "Subsidized rate of 6.5% p.a. with 6-month moratorium",
      "Can be combined with Central and State solar capital subsidies"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Obtain Green Tech Quotation", desc: "Get authorized quotation for solar installation, e-rickshaws, or waste plant." },
      { step: "Step 2", title: "Submit to SCA Office", desc: "Provide quotation along with caste and income certificate." },
      { step: "Step 3", title: "Sanction & Asset Delivery", desc: "Payment released directly to authorized equipment vendor upon delivery." }
    ],
    descriptionEn: "Financial support up to ₹30 Lakh for climate-friendly income-generating activities such as solar power, battery electric transport, and composting.",
    descriptionHi: "सौर ऊर्जा, ई-रिक्शा, अपशिष्ट प्रबंधन जैसी हरित गतिविधियों हेतु ₹30 लाख तक का रियायती ऋण।",
    documentsRequired: [
      "Authorized Quotation for green energy machinery / commercial electric vehicle",
      "Caste Certificate & Family Income Certificate (≤ ₹5 Lakh)",
      "Aadhaar Card & PAN Card",
      "Site feasibility report or license for green installation"
    ],
    whereToSubmit: "State SC Development Corporation (SCA)"
  },
  {
    id: "asiim",
    nameEn: "Ambedkar Social Innovation and Incubation Mission (ASIIM)",
    nameHi: "अम्बेडकर सामाजिक नवाचार और ऊष्मायन मिशन (ASIIM)",
    nodalAgency: "MoSJE / IFCI Venture / DST Technology Business Incubators",
    minCost: 500000,
    maxCost: 3000000, // Up to ₹30 Lakh equity grant over 3 years
    coverPct: 1.0,
    rate: 0.0,
    tenureYears: 5,
    moratoriumMonths: 36,
    purpose: ["business"],
    allowedCategories: ["SC"],
    noIncomeCeiling: true,
    isEquity: true,
    ventureType: ["greenfield"],
    sectors: ["Tech / Innovation", "Manufacturing", "Healthcare"],
    govtInterestSubsidy: "100% Interest-Free Grant / Equity: Beneficiaries pay ZERO interest (0% rate). The Government provides up to ₹30 Lakh in milestone-based equity grant assistance over 3 years.",
    keyBenefits: [
      "Up to ₹30 Lakh equity grant assistance over 3 years",
      "Zero interest (0%) and zero collateral burden",
      "Incubation and laboratory access at premier DST/AICTE incubators (IITs, NITs, IIMs)",
      "Mentorship from institutional venture capital leaders"
    ],
    applicationSteps: [
      { step: "Step 1", title: "TBI Incubation Endorsement", desc: "Connect with any DST-recognized Technology Business Incubator to host your startup." },
      { step: "Step 2", title: "Pitch to MoSJE Selection Panel", desc: "Present your prototype, technology deck, and patent status." },
      { step: "Step 3", title: "Tranche Grant Release", desc: "Disbursed in ₹10 Lakh annual milestones directly to the incubated entity." }
    ],
    descriptionEn: "Supports SC youth with innovative tech concepts through TBIs, granting up to ₹30 Lakh over 3 years with zero interest.",
    descriptionHi: "प्रौद्योगिकी इनक्यूबेटरों के माध्यम से अनुसूचित जाति के युवाओं को नवाचार हेतु 3 वर्षों में ₹30 लाख तक की 100% ब्याज-मुक्त सहायता।",
    documentsRequired: [
      "Endorsement letter from DST/AICTE recognized Technology Business Incubator (TBI)",
      "Pitch Deck & Executive Summary of technology innovation / prototype",
      "SC Certificate of Student / Youth Founder (Age 18-35)",
      "Patent / Prototype / Proof-of-Concept documentation",
      "DPIIT Startup Recognition Certificate / Company Incorporation Certificate"
    ],
    whereToSubmit: "DST Recognized Technology Business Incubator (TBI) / IFCI Venture"
  },
  {
    id: "vcfsc-cap",
    nameEn: "Venture Capital Fund for Scheduled Castes (VCF-SC - Tier 1)",
    nameHi: "अनुसूचित जाति उद्यम पूंजी कोष (VCF-SC)",
    nodalAgency: "IFCI Venture Capital Funds Ltd. (MoSJE)",
    minCost: 1000000,
    maxCost: 10000000, // Capped at ₹1 Crore as requested
    coverPct: 0.75,
    rate: 4.0,
    tenureYears: 8,
    moratoriumMonths: 36,
    purpose: ["business"],
    allowedCategories: ["SC"],
    noIncomeCeiling: true,
    isEquity: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Tech / Innovation", "Healthcare", "Clean Energy"],
    govtInterestSubsidy: "Government Equity Risk Capital: Government provides risk equity rather than debt. Beneficiary pays no monthly interest during the initial 3-year incubation phase; nominal coupon rate of 4% p.a. for women/PwD and 8% for general SC.",
    keyBenefits: [
      "Growth funding up to ₹1 Crore in equity and quasi-equity assistance",
      "Govt-borne risk capital with up to 36 months principal repayment holiday",
      "No mortgage or hard collateral required for government equity participation",
      "Professional governance and financial management support from IFCI Venture"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Formulate Detailed Project Report (DPR)", desc: "Prepare DPR demonstrating >51% SC shareholding and viable business model." },
      { step: "Step 2", title: "Submit to IFCI Venture Cell", desc: "Submit through state channel partner or directly to IFCI Venture investment committee." },
      { step: "Step 3", title: "Due Diligence & Sanction", desc: "Technical evaluation committee vets the company's valuation and disburses equity." }
    ],
    descriptionEn: "Equity and quasi-equity growth capital up to ₹1 Crore for enterprises owned and controlled by SC entrepreneurs (>51% SC shareholding).",
    descriptionHi: "51% या अधिक अनुसूचित जाति शेयरधारिता वाले उद्यमों हेतु ₹1 करोड़ तक की विकास पूंजी एवं सह-निवेश सहायता।",
    documentsRequired: [
      "Company Incorporation Certificate (ROC) / Registered Partnership Deed",
      "Proof of at least 51% Scheduled Caste shareholding for past 12 months",
      "Caste Certificates of all SC Promoters/Directors issued by competent Revenue Authority",
      "Detailed Project Report (DPR) with 3-year financial projections",
      "Udyam Registration Certificate & GST Registration",
      "Bank Account Statements of the Enterprise for the past 6 months"
    ],
    whereToSubmit: "IFCI Venture Capital Funds Ltd. / State Nodal Cell"
  },
  {
    id: "cegssc-cap",
    nameEn: "Credit Enhancement Guarantee Scheme for SCs (CEGSSC - Tier 1)",
    nameHi: "अनुसूचित जाति ऋण संवर्धन गारंटी योजना (CEGSSC)",
    nodalAgency: "IFCI Ltd. / Ministry of Social Justice & Empowerment",
    minCost: 1500000,
    maxCost: 10000000, // Capped at ₹1 Crore as requested
    coverPct: 1.0,
    rate: 8.5,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC"],
    noIncomeCeiling: true,
    isGuarantee: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Tech / Innovation"],
    govtInterestSubsidy: "100% Sovereign Guarantee Cover: The Government of India provides a 100% guarantee cover for loans up to ₹1 Crore. Banks cannot ask for residential property or third-party collateral.",
    keyBenefits: [
      "Collateral-free bank financing up to ₹1 Crore",
      "100% sovereign guarantee cover provided by MoSJE through IFCI Ltd.",
      "Accepted by all Public Sector Banks (SBI, PNB, Bank of Baroda, etc.)",
      "12-month principal moratorium during initial factory/business set-up"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Prepare Bank Proposal", desc: "Draft capital expenditure and working capital requirements for your enterprise." },
      { step: "Step 2", title: "Submit to Member Lending Institution", desc: "Approach any Public Sector Bank branch applying under the CEGSSC scheme code." },
      { step: "Step 3", title: "Guarantee Issuance & Disbursement", desc: "IFCI issues 100% guarantee certificate and the bank disburses funds without collateral." }
    ],
    descriptionEn: "100% sovereign guarantee cover for collateral-free bank loans up to ₹1 Crore sanctioned to SC-promoted enterprises.",
    descriptionHi: "बिना किसी अतिरिक्त संपत्ति बंधक के ₹1 करोड़ तक के बैंक ऋण हेतु 100% सरकारी गारंटी कवर।",
    documentsRequired: [
      "Bank Loan Sanction Application Form with project details",
      "SC Caste Certificate of promoter(s) holding >51% equity",
      "Detailed Project Report (DPR) detailing plant, machinery, and working capital needs",
      "Udyam Registration & PAN Card of Enterprise",
      "Proof of business premise ownership or registered lease deed"
    ],
    whereToSubmit: "Any Public Sector Bank branch (SBI, PNB, Canara Bank, BoB, etc.)"
  },
  {
    id: "pm-daksh",
    nameEn: "PM-DAKSH (Pradhan Mantri Dakshta Aur Kushalta Sampann Hitgrahi)",
    nameHi: "पीएम-दक्ष योजना",
    nodalAgency: "MoSJE / NSFDC / NBCFDC / NSKFDC",
    minCost: 10000,
    maxCost: 200000,
    coverPct: 1.0,
    rate: 0.0,
    tenureYears: 1,
    moratoriumMonths: 6,
    purpose: ["business", "education"],
    allowedCategories: ["SC", "OBC", "SafaiKaramchari", "EWS"],
    incomeCeiling: 300000,
    ventureType: ["greenfield"],
    sectors: ["Services", "Manufacturing", "Handicrafts", "Tech / Innovation"],
    govtInterestSubsidy: "100% Free Skill Training & Wage Stipend: Free government skill training with ₹1,000 to ₹1,500/month stipend, followed by subsidized post-training business loan linkage at 4-6% interest.",
    keyBenefits: [
      "Free certified upskilling and entrepreneurial development courses",
      "Direct monthly wage compensation stipend deposited into Aadhaar-linked account",
      "Guaranteed institutional credit linkage for setting up trade ventures upon course completion",
      "Toolkits and starter equipment assistance"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Enroll on PM-DAKSH Portal", desc: "Select preferred skill course (electrical, apparel, automotive, digital services)." },
      { step: "Step 2", title: "Training Completion", desc: "Undergo certified training and receive toolkits and completion certificate." },
      { step: "Step 3", title: "Microcredit Sanction", desc: "District SCA sanctions microcredit to establish independent trade unit." }
    ],
    descriptionEn: "Comprehensive skill development and subsidized self-employment credit linkage for SC, OBC, and sanitation workers.",
    descriptionHi: "कौशल उन्नयन एवं स्वरोजगार हेतु पूर्णतः निःशुल्क प्रशिक्षण, छात्रवृत्ति एवं रियायती ऋण सहायता।",
    documentsRequired: [
      "Aadhaar Card",
      "Caste Certificate (SC/OBC/EWS) or Sanitation Worker certificate",
      "Annual Family Income Certificate (≤ ₹3.00 Lakh)",
      "Bank Account details (Aadhaar seeded)"
    ],
    whereToSubmit: "District Skill Development Office or State SC/BC Development Corporation"
  },
  {
    id: "dr-ambedkar-interest-subsidy",
    nameEn: "Dr. Ambedkar Central Sector Scheme of Interest Subsidy for Overseas Studies",
    nameHi: "डॉ. अम्बेडकर केंद्रीय क्षेत्र विदेश अध्ययन ब्याज सब्सिडी योजना",
    nodalAgency: "Ministry of Social Justice & Empowerment",
    minCost: 500000,
    maxCost: 2000000, // ₹20 Lakh
    coverPct: 1.0,
    rate: 0.0,
    tenureYears: 10,
    moratoriumMonths: 24,
    purpose: ["education"],
    allowedCategories: ["OBC", "EWS"],
    incomeCeiling: 800000,
    ventureType: ["education"],
    sectors: ["Higher Education", "Engineering", "Medicine", "Management", "Study Abroad"],
    govtInterestSubsidy: "100% Interest Borne by Central Government: Government of India pays 100% of the loan interest during the entire study period and moratorium. The student pays zero interest during course tenure.",
    keyBenefits: [
      "100% interest subsidy paid directly to the bank by Ministry of Social Justice",
      "Applicable for Masters, M.Phil, and Ph.D. degrees abroad",
      "Family income ceiling up to ₹8 Lakh per annum for OBC/EWS students",
      "Available across all Scheduled Commercial Banks"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Avail Education Loan", desc: "Obtain sanctioned education loan from any scheduled commercial bank for overseas university." },
      { step: "Step 2", title: "Bank Submits Subsidy Claim", desc: "Bank branch uploads details on MoSJE interest subsidy portal." },
      { step: "Step 3", title: "Government Credits Interest", desc: "MoSJE deposits interest directly into your loan account every quarter." }
    ],
    descriptionEn: "100% government-paid interest subsidy on overseas education loans for OBC and EWS students during the course duration.",
    descriptionHi: "ओबीसी एवं ईडब्ल्यूएस छात्रों के लिए विदेश में उच्च शिक्षा हेतु लिए गए ऋण पर पढ़ाई के दौरान 100% ब्याज सब्सिडी।",
    documentsRequired: [
      "Confirmed Overseas University Admission Letter & I-20 / CAS statement",
      "Bank Education Loan Sanction Letter",
      "OBC (Non-Creamy Layer) or EWS Certificate",
      "Family Income Certificate (proving annual income ≤ ₹8 Lakh)",
      "Valid Passport & Student Visa"
    ],
    whereToSubmit: "Branch Manager of the Commercial Bank financing your education loan"
  },
  {
    id: "top-class-education-sc",
    nameEn: "Top Class Education Scheme for SC Students",
    nameHi: "अनुसूचित जाति के छात्रों के लिए शीर्ष श्रेणी शिक्षा योजना",
    nodalAgency: "Ministry of Social Justice & Empowerment",
    minCost: 100000,
    maxCost: 800000,
    coverPct: 1.0,
    rate: 0.0,
    tenureYears: 5,
    moratoriumMonths: 12,
    purpose: ["education"],
    allowedCategories: ["SC"],
    incomeCeiling: 800000,
    ventureType: ["education"],
    sectors: ["Higher Education", "Engineering", "Medicine", "Management"],
    govtInterestSubsidy: "100% Non-Refundable Government Scholarship: Full tuition fee, living expenses (₹3,000/month), books allowance (₹5,000/year), and a latest computer/laptop grant (₹45,000 one-time) paid by MoSJE.",
    keyBenefits: [
      "Covers 100% tuition fee in premier institutes (IITs, NITs, IIMs, AIIMS, National Law Universities)",
      "Zero repayment required — 100% grant assistance",
      "Includes non-refundable living expenses and computer purchase allowance",
      "Annual family income eligibility up to ₹8.00 Lakh"
    ],
    applicationSteps: [
      { step: "Step 1", title: "National Scholarship Portal (NSP)", desc: "Register online on NSP selecting Top Class SC scheme." },
      { step: "Step 2", title: "Institute Verification", desc: "Nodal officer of the notified institute verifies enrollment." },
      { step: "Step 3", title: "Direct Benefit Transfer (DBT)", desc: "Fees credited directly to institute and allowances to student account." }
    ],
    descriptionEn: "Full scholarship covering 100% tuition fees, living expenses, and computer grant for SC students in premier Indian institutes.",
    descriptionHi: "आईआईटी, आईआईएम, एम्स जैसे शीर्ष संस्थानों में एससी छात्रों के लिए 100% ट्यूशन फीस एवं भत्ते की सरकारी छात्रवृत्ति।",
    documentsRequired: [
      "Admission Letter from notified premier institution",
      "SC Caste Certificate issued by competent Revenue Authority",
      "Annual Family Income Certificate (≤ ₹8.00 Lakh)",
      "Fee receipt of the institution & Bank Account details"
    ],
    whereToSubmit: "National Scholarship Portal (scholarships.gov.in) & Institute Nodal Cell"
  },

  // ==========================================================================
  // 2. MINISTRY OF MICRO, SMALL & MEDIUM ENTERPRISES (MSME) & COMMERCE
  // ==========================================================================
  {
    id: "pmegp-mfg",
    nameEn: "PMEGP Manufacturing Sector Scheme",
    nameHi: "पीएमईजीपी विनिर्माण क्षेत्र योजना",
    nodalAgency: "KVIC / KVIB / District Industries Centre (DIC) / MoMSME",
    minCost: 500000,
    maxCost: 5000000, // Up to ₹50 Lakh for manufacturing
    coverPct: 0.95,
    subsidyPctRural: 0.35,
    subsidyPctUrban: 0.25,
    rate: 8.0,
    tenureYears: 7,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Manufacturing"],
    govtInterestSubsidy: "Up to 35% Non-Refundable Government Capital Subsidy: Government deposits up to ₹17.5 Lakh directly into a subsidy reserve fund. Beneficiary self-contribution is only 5% for SC/ST/Women/Rural entrepreneurs.",
    keyBenefits: [
      "Up to ₹50 Lakh funding for setting up new manufacturing plants and factories",
      "35% non-refundable government subsidy in rural areas (25% in urban areas)",
      "Beneficiary own margin contribution is just 5% of total project cost",
      "Collateral-free credit covered under CGTMSE trust"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply Online via KVIC e-Portal", desc: "Select sponsoring agency (DIC, KVIC, or KVIB) and enter DPR data." },
      { step: "Step 2", title: "District Task Force Committee (DTFC)", desc: "DTFC interviews applicant and recommends proposal to chosen bank branch." },
      { step: "Step 3", title: "EDP Training & Sanction", desc: "Undergo mandatory 10-day Entrepreneurship Development Programme (EDP)." },
      { step: "Step 4", title: "Direct Subsidy Credit", desc: "Government deposits 35% subsidy into Term Deposit Receipt (TDR) account." }
    ],
    descriptionEn: "Credit-linked capital subsidy programme offering up to ₹50 Lakh with a 35% direct non-refundable government grant in rural areas.",
    descriptionHi: "विनिर्माण इकाइयों हेतु ₹50 लाख तक का ऋण, जिसमें 35% तक की सीधी गैर-वापसी योग्य सरकारी सब्सिडी।",
    documentsRequired: [
      "Detailed Project Report (DPR) aligned with KVIC manufacturing guidelines",
      "Educational Qualification Certificate (minimum 8th standard pass for projects > ₹10 Lakh)",
      "Special Category Certificate (SC/ST/OBC/PwD)",
      "Gram Panchayat Certificate (for rural area 35% subsidy)",
      "EDP Training Completion Certificate"
    ],
    whereToSubmit: "District Industries Centre (DIC) or KVIC / KVIB District Office"
  },
  {
    id: "pmegp-serv",
    nameEn: "PMEGP Service & Business Sector Scheme",
    nameHi: "पीएमईजीपी सेवा एवं व्यापार क्षेत्र योजना",
    nodalAgency: "KVIC / DIC / MoMSME",
    minCost: 200000,
    maxCost: 2000000, // Up to ₹20 Lakh for services
    coverPct: 0.95,
    subsidyPctRural: 0.35,
    subsidyPctUrban: 0.25,
    rate: 8.0,
    tenureYears: 7,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Services", "Trading"],
    govtInterestSubsidy: "Up to 35% Non-Refundable Government Capital Subsidy: Government deposits up to ₹7 Lakh directly into subsidy reserve. Beneficiary margin contribution is just 5% for SC/ST/Women.",
    keyBenefits: [
      "Up to ₹20 Lakh for service enterprises (clinics, testing labs, IT services, repair hubs, logistics)",
      "35% direct capital subsidy for rural SC/ST/Women applicants",
      "Beneficiary own contribution is only 5%",
      "No third-party guarantee needed"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Service DPR", desc: "Submit project report for service venture on KVIC e-portal." },
      { step: "Step 2", title: "Task Force Approval", desc: "District Task Force approves and forwards to your bank branch." },
      { step: "Step 3", title: "Loan Disbursement", desc: "Composite loan disbursed and subsidy locked for 3 years without interest." }
    ],
    descriptionEn: "Up to ₹20 Lakh financing for service and business units with up to 35% direct non-refundable government capital subsidy.",
    descriptionHi: "सेवा एवं व्यवसाय उद्यमों हेतु ₹20 लाख तक का ऋण, जिसमें 35% तक की गैर-वापसी योग्य सरकारी सब्सिडी।",
    documentsRequired: [
      "Service Project Profile / DPR",
      "Education Certificate (min 8th pass for projects > ₹5 Lakh)",
      "Caste / Special Category Certificate",
      "Rural Certificate from Sarpanch / Gram Panchayat (if rural)",
      "Aadhaar and PAN Card"
    ],
    whereToSubmit: "General Manager, District Industries Centre (DIC)"
  },
  {
    id: "standup",
    nameEn: "Stand-Up India Scheme",
    nameHi: "स्टैंड-अप इंडिया योजना",
    nodalAgency: "Department of Financial Services / SIDBI",
    minCost: 1000000,
    maxCost: 10000000, // ₹1 Crore
    coverPct: 0.85,
    rate: 8.0,
    tenureYears: 7,
    moratoriumMonths: 18,
    purpose: ["business"],
    allowedCategories: ["SC", "ST"],
    genderPriority: ["female", "male", "transgender"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "Guaranteed Lowest Interest & NCGTC Cover: Government mandates commercial banks to offer their lowest interest rate (MCLR + 3% tenor premium). Backed by Credit Guarantee Fund (CGFSI) ensuring zero third-party guarantee.",
    keyBenefits: [
      "Bank credit from ₹10 Lakh up to ₹1 Crore for greenfield (new) enterprises",
      "Mandatory quota: Every bank branch must finance at least one SC/ST borrower",
      "Promoter margin money can be converged with state subsidy schemes down to 15%",
      "Long 18-month principal moratorium during initial startup phase"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register on Stand-Up Mitra", desc: "Select 'Ready Borrower' and enter proposed greenfield enterprise details." },
      { step: "Step 2", title: "Branch Allotment", desc: "Application is routed directly to the designated Public Sector Bank branch in your district." },
      { step: "Step 3", title: "Appraisal & Sanction", desc: "Bank sanctions composite loan (term loan + cash credit) backed by government guarantee." }
    ],
    descriptionEn: "Mandatory bank loans between ₹10 Lakh and ₹1 Crore for SC/ST and women entrepreneurs for greenfield ventures.",
    descriptionHi: "प्रत्येक बैंक शाखा द्वारा कम से कम एक एससी/एसटी उद्यमी को नया उद्यम शुरू करने हेतु ₹10 लाख से ₹1 करोड़ तक का बैंक ऋण।",
    documentsRequired: [
      "Proof of Identity (Aadhaar Card, PAN Card)",
      "Valid Caste Certificate (SC/ST) issued by Revenue Department",
      "Greenfield Self-Declaration (First-time commercial enterprise of applicant)",
      "Detailed Project Report (DPR) with capital expenditure and working capital estimates",
      "Trade License / NOC from local authority",
      "Rent Agreement / Registered Lease Deed for business location"
    ],
    whereToSubmit: "Nearest Public Sector Bank Branch or Lead District Manager (LDM)"
  },
  {
    id: "mudra-shishu",
    nameEn: "Pradhan Mantri MUDRA Yojana (Shishu Tier)",
    nameHi: "प्रधानमंत्री मुद्रा योजना (शिशु श्रेणी)",
    nodalAgency: "MUDRA Ltd. / Scheduled Commercial Banks",
    minCost: 10000,
    maxCost: 50000, // Up to ₹50,000
    coverPct: 1.0,
    rate: 7.5,
    tenureYears: 5,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services", "Manufacturing", "Agri-Allied"],
    govtInterestSubsidy: "Zero Processing Fees & 2% Interest Subvention (PMMY): Beneficiaries pay zero processing fee and zero collateral. Prompt repayment unlocks a 2% interest subvention paid by Government.",
    keyBenefits: [
      "Instant business loan up to ₹50,000 for tiny vendors and home businesses",
      "Zero collateral, zero margin money requirement (100% financed)",
      "Zero bank processing charges",
      "Available across all commercial banks, cooperative banks, and microfinance institutions"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Fill 1-Page MUDRA Form", desc: "Submit simple form to any commercial bank branch." },
      { step: "Step 2", title: "Instant KYC Check", desc: "Bank verifies Aadhaar and business premise/vending location." },
      { step: "Step 3", title: "Disbursement", desc: "Amount credited directly to savings/current account." }
    ],
    descriptionEn: "Collateral-free micro loans up to ₹50,000 for small shops, fruit vendors, artisans, and home enterprise.",
    descriptionHi: "छोटे दुकानदारों, फेरीवालों और गृह उद्योगों हेतु बिना गारंटी ₹50,000 तक का त्वरित मुद्रा ऋण।",
    documentsRequired: [
      "Aadhaar Card and Voter ID Card",
      "Proof of business address / Vending certificate / Trade license",
      "Passport size photographs (2 copies)"
    ],
    whereToSubmit: "Any Commercial Bank, Regional Rural Bank (RRB), or Micro Finance Institution"
  },
  {
    id: "mudra-kishore",
    nameEn: "Pradhan Mantri MUDRA Yojana (Kishore Tier)",
    nameHi: "प्रधानमंत्री मुद्रा योजना (किशोर श्रेणी)",
    nodalAgency: "MUDRA Ltd. / Commercial Banks",
    minCost: 50001,
    maxCost: 500000, // ₹50,001 to ₹5 Lakh
    coverPct: 0.90,
    rate: 8.5,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "CGFMU Collateral Guarantee: 100% guarantee cover provided under Credit Guarantee Fund for Micro Units. Government refinance keeps interest rates concessional.",
    keyBenefits: [
      "Collateral-free business credit between ₹50,000 and ₹5 Lakh",
      "No mortgage required — credit guarantee provided by Central Government",
      "Combination of Term Loan (for machinery) and Working Capital MUDRA Card",
      "Available across all commercial and rural banks"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Quotations & Form", desc: "Submit application with machinery/equipment proforma invoices." },
      { step: "Step 2", title: "Bank Verification", desc: "Branch assesses business cash flows and validates Udyam Registration." },
      { step: "Step 3", title: "Disbursement", desc: "Term loan paid to vendor and overdraft limit set on MUDRA card." }
    ],
    descriptionEn: "Collateral-free credit from ₹50,000 to ₹5 Lakh for expanding small retail, services, and manufacturing units.",
    descriptionHi: "छोटे व्यापार, सेवा और उत्पादन इकाइयों के विस्तार हेतु ₹50,000 से ₹5 लाख तक का बिना गारंटी ऋण।",
    documentsRequired: [
      "Udyam Registration Certificate",
      "Identity Proof & Address Proof (Aadhaar, PAN)",
      "Bank Account statement of the last 6 months",
      "Quotations for machinery or stock to be purchased"
    ],
    whereToSubmit: "Any Public or Private Sector Bank Branch"
  },
  {
    id: "mudra-tarun",
    nameEn: "Pradhan Mantri MUDRA Yojana (Tarun Tier)",
    nameHi: "प्रधानमंत्री मुद्रा योजना (तरुण श्रेणी)",
    nodalAgency: "MUDRA Ltd. / Scheduled Commercial Banks",
    minCost: 500001,
    maxCost: 2000000, // Enhanced to ₹20 Lakh (Tarun Plus)
    coverPct: 0.85,
    rate: 9.0,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading"],
    govtInterestSubsidy: "Government Refinanced Credit Line: Refinanced by SIDBI with CGFMU credit guarantee cover, eliminating any need for residential or commercial property mortgage.",
    keyBenefits: [
      "Enhanced funding up to ₹20 Lakh (Tarun Plus) for established micro enterprises",
      "Collateral-free financing backed by national guarantee trust",
      "Term loan for plant & machinery plus working capital limits",
      "Concessional interest rate structure"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Business Financials", desc: "Submit 1-year sales records, ITR (if available), and asset quotations." },
      { step: "Step 2", title: "Bank Credit Assessment", desc: "Bank examines repayment capability and issues in-principle sanction." },
      { step: "Step 3", title: "Loan Execution", desc: "Loan disbursed and MUDRA debit card issued for day-to-day operations." }
    ],
    descriptionEn: "Collateral-free business credit up to ₹20 Lakh for growing micro and small commercial enterprises.",
    descriptionHi: "स्थापित सूक्ष्म एवं लघु उद्यमों के आधुनिकीकरण हेतु ₹20 लाख तक का संपार्श्विक-मुक्त ऋण।",
    documentsRequired: [
      "Udyam Registration Certificate & GST Registration (if applicable)",
      "Identity and Address Proof of all partners/proprietor",
      "Bank statements of the past 12 months",
      "Projected balance sheet / sales estimate for loan tenure"
    ],
    whereToSubmit: "Commercial Bank Branch (MSME Division)"
  },
  {
    id: "pm-vishwakarma",
    nameEn: "PM Vishwakarma Scheme (18 Traditional Trades)",
    nameHi: "पीएम विश्वकर्मा योजना",
    nodalAgency: "Ministry of MSME / MoSJE / Skill Development",
    minCost: 10000,
    maxCost: 300000, // Up to ₹3 Lakh (₹1L Tier-1 + ₹2L Tier-2)
    coverPct: 1.0,
    rate: 5.0, // Fixed 5% rate; Govt pays remaining subvention (up to 8%)
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Handicrafts"],
    govtInterestSubsidy: "Massive 8% Government Interest Subvention: Beneficiary pays an ultra-low fixed interest rate of just 5.0% p.a. The Government of India pays up to 8% interest subvention directly to the bank. Also includes a ₹15,000 free toolkit e-voucher.",
    keyBenefits: [
      "Collateral-free loan up to ₹3 Lakh at an extraordinary 5.0% fixed interest rate",
      "₹15,000 free advanced modern toolkit e-voucher / grant",
      "Free basic & advanced training with ₹500/day daily stipend",
      "Covers 18 traditional crafts: Carpenters, Blacksmiths, Potters, Cobblers, Masons, Tailors, Barbers, Washermen, etc."
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register at Common Service Centre (CSC)", desc: "Biometric Aadhaar authentication and trade verification at any local CSC." },
      { step: "Step 2", title: "Gram Panchayat / ULB Verification", desc: "Sarpanch or Urban Local Body Chairman verifies traditional artisan trade." },
      { step: "Step 3", title: "Skill Training & Toolkit", desc: "Undergo 5 to 7-day training, receive ₹15,000 toolkit voucher and certificate." },
      { step: "Step 4", title: "Credit Disbursement", desc: "Tier 1 loan of ₹1 Lakh disbursed immediately at 5% rate; ₹2 Lakh upon repayment." }
    ],
    descriptionEn: "Comprehensive support for 18 traditional artisan trades offering ₹15,000 toolkit grant, training stipend, and loans up to ₹3 Lakh at 5% interest.",
    descriptionHi: "18 पारंपरिक दस्तकारों व कारीगरों हेतु ₹15,000 टूलकिट अनुदान तथा 5% रियायती ब्याज दर पर ₹3 लाख तक का ऋण।",
    documentsRequired: [
      "Aadhaar Card with active mobile linkage",
      "Bank Account Passbook (Aadhaar seeded)",
      "Ration Card / Family Declaration",
      "Traditional trade verification from Gram Panchayat / Nagar Palika"
    ],
    whereToSubmit: "Local Common Service Centre (CSC) or District Industries Centre (DIC)"
  },
  {
    id: "cgtmse",
    nameEn: "CGTMSE Collateral-Free Credit Guarantee Scheme",
    nameHi: "सूक्ष्म एवं लघु उद्यम क्रेडिट गारंटी योजना (CGTMSE)",
    nodalAgency: "Ministry of MSME / SIDBI",
    minCost: 1000000,
    maxCost: 10000000, // Capped at ₹1 Crore
    coverPct: 0.85,
    rate: 8.5,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    isGuarantee: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Tech / Innovation"],
    govtInterestSubsidy: "85% Sovereign Credit Guarantee: The trust provides up to 85% credit guarantee cover for women/SC/ST enterprises, allowing banks to lend without demanding land, building, or gold collateral.",
    keyBenefits: [
      "Collateral-free bank loan up to ₹1 Crore for manufacturing and services",
      "85% guarantee cover for women, SC/ST, and aspirational district borrowers",
      "Concessional guarantee fee reduction for micro enterprises",
      "Available through all commercial banks, NBFCs, and Small Finance Banks"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Prepare Bank DPR", desc: "Prepare detailed project report showing viable debt-service coverage ratio (DSCR)." },
      { step: "Step 2", title: "Apply under CGTMSE at Bank", desc: "Request the bank manager to route the loan under the CGTMSE guarantee window." },
      { step: "Step 3", title: "Guarantee Approval", desc: "Bank locks guarantee online with SIDBI CGTMSE portal and disburses funds." }
    ],
    descriptionEn: "Collateral-free bank loans up to ₹1 Crore backed by up to 85% sovereign guarantee cover from Central Government trust.",
    descriptionHi: "बिना किसी संपत्ति गारंटी के ₹1 करोड़ तक का बैंक ऋण, जिसमें 85% तक की सरकारी गारंटी सुरक्षा।",
    documentsRequired: [
      "Detailed Project Report (DPR) with 3-year projected cash flows",
      "Udyam Registration Certificate & PAN Card",
      "Bank Account statements for past 12 months",
      "Proof of business premise lease or title deed"
    ],
    whereToSubmit: "Any Member Lending Bank Branch (SBI, PNB, HDFC, ICICI, etc.)"
  },
  {
    id: "sfurti",
    nameEn: "SFURTI (Scheme of Fund for Regeneration of Traditional Industries)",
    nameHi: "पारंपरिक उद्योगों के पुनरुद्धार हेतु योजना (स्फूर्ति)",
    nodalAgency: "Ministry of MSME / KVIC / Coir Board",
    minCost: 1000000,
    maxCost: 10000000, // Up to ₹1 Crore for mini clusters
    coverPct: 0.90,
    rate: 0.0, // 100% Grant-in-aid for Common Facility Centers
    tenureYears: 5,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Handicrafts", "Agri-Allied"],
    govtInterestSubsidy: "100% Government Grant for Common Infrastructure: Government provides up to 90-100% non-refundable grant to set up Common Facility Centers (CFCs), modern machinery hubs, and packaging centers for artisan clusters.",
    keyBenefits: [
      "Non-refundable government grant up to ₹1 Crore for artisan cluster infrastructure",
      "Establishment of shared advanced machinery, testing labs, and raw material banks",
      "Product design, packaging, and international export marketing support",
      "Empowers 500+ local rural artisans and craftspeople per cluster"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Cluster Diagnostic Study", desc: "Form artisan Special Purpose Vehicle (SPV) with local NGO or producer company." },
      { step: "Step 2", title: "Submit Proposal to Nodal Agency", desc: "Submit DPR to KVIC, Coir Board, or State MSME Commissioner." },
      { step: "Step 3", title: "Scheme Steering Committee (SSC)", desc: "Ministry approves 100% grant for building CFC and equipment procurement." }
    ],
    descriptionEn: "Government grant up to ₹1 Crore to set up shared modern machinery hubs and packaging centers for traditional artisan clusters.",
    descriptionHi: "पारंपरिक कारीगर समूहों हेतु आधुनिक साझा मशीनरी एवं पैकेजिंग केंद्र स्थापित करने हेतु ₹1 करोड़ तक का 100% सरकारी अनुदान।",
    documentsRequired: [
      "SPV / Producer Company / Cooperative Registration Certificate",
      "Detailed Project Report (DPR) with cluster diagnostic study",
      "Artisan list with Aadhaar and caste verification",
      "Land lease/ownership deed for Common Facility Center (CFC)"
    ],
    whereToSubmit: "KVIC State Office or State MSME Department / SFURTI Cell"
  },
  {
    id: "nssh-subsidy",
    nameEn: "National SC-ST Hub (NSSH) Special Credit Linked Capital Subsidy",
    nameHi: "राष्ट्रीय अनुसूचित जाति/जनजाति हब (NSSH) पूंजी सब्सिडी योजना",
    nodalAgency: "National Small Industries Corporation (NSIC) / MoMSME",
    minCost: 500000,
    maxCost: 10000000, // Up to ₹1 Crore
    coverPct: 0.25, // 25% direct capital subsidy
    rate: 7.5,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services"],
    govtInterestSubsidy: "25% Direct Non-Refundable Capital Subsidy: The Ministry of MSME provides 25% direct upfront capital subsidy on institutional credit for procurement of modern plant and machinery by SC/ST entrepreneurs.",
    keyBenefits: [
      "25% direct capital subsidy deposited into your loan account",
      "Procurement of modern technology, testing tools, and plant equipment",
      "Special tender exemption and 4% mandatory procurement quota in Public Sector Undertakings (PSUs)",
      "Free exhibition stalls and marketing assistance across India"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Procure Bank Loan for Machinery", desc: "Obtain term loan for machinery from any commercial bank." },
      { step: "Step 2", title: "Submit NSSH Subsidy Claim", desc: "Bank submits online subsidy claim through NSIC NSSH portal." },
      { step: "Step 3", title: "Subsidy Release", desc: "Ministry releases 25% capital subsidy into borrower's loan account." }
    ],
    descriptionEn: "25% direct capital subsidy on institutional credit for plant and machinery procurement by SC/ST entrepreneurs.",
    descriptionHi: "अनुसूचित जाति/जनजाति के उद्यमियों हेतु मशीनरी एवं संयंत्र खरीद पर 25% सीधी गैर-वापसी योग्य सरकारी पूंजी सब्सिडी।",
    documentsRequired: [
      "SC/ST Caste Certificate of the entrepreneur / majority partners",
      "Bank Term Loan Sanction Letter for machinery purchase",
      "Original machinery purchase invoices and payment proof",
      "Udyam Registration Certificate"
    ],
    whereToSubmit: "Nearest NSIC National SC-ST Hub (NSSH) Office or Financing Bank"
  },
  {
    id: "aspire",
    nameEn: "ASPIRE Scheme for Rural Livelihood & Agro-Industry Incubation",
    nameHi: "ग्रामीण आजीविका संवर्धन योजना (एस्पायर)",
    nodalAgency: "Ministry of MSME / SIDBI / NABARD",
    minCost: 1000000,
    maxCost: 10000000, // Up to ₹1 Crore
    coverPct: 1.0,
    rate: 0.0,
    tenureYears: 5,
    moratoriumMonths: 24,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Agri-Allied", "Manufacturing", "Tech / Innovation"],
    govtInterestSubsidy: "100% Non-Refundable Government Grant: Up to ₹1 Crore grant provided to establish Livelihood Business Incubators (LBIs) and rural technology enterprises with zero repayment obligation.",
    keyBenefits: [
      "Up to ₹1 Crore non-refundable capital grant for setting up business incubators",
      "Accelerates rural entrepreneurship in agro-processing and herbal packaging",
      "Free hands-on prototype building and machinery usage for rural youth",
      "Fund of Funds support through SIDBI for scaling rural tech ventures"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Incubator Proposal", desc: "Submit proposal for setting up Livelihood Business Incubator (LBI)." },
      { step: "Step 2", title: "Panel Review", desc: "MSME Screening Committee evaluates rural impact and job creation potential." },
      { step: "Step 3", title: "Grant Sanction", desc: "100% grant disbursed in milestones for building and machinery installation." }
    ],
    descriptionEn: "Government grant up to ₹1 Crore for establishing rural livelihood incubators and agro-industrial training units.",
    descriptionHi: "ग्रामीण आजीविका इनक्यूबेटर एवं कृषि-उद्योग प्रशिक्षण केंद्र स्थापित करने हेतु ₹1 करोड़ तक का 100% सरकारी अनुदान।",
    documentsRequired: [
      "Entity Incorporation / Trust / Society Registration Certificate",
      "Detailed Project Report on proposed agro/rural incubation activities",
      "Proof of premise ownership or long-term lease for incubator",
      "Audited financial statements for last 2 years"
    ],
    whereToSubmit: "Ministry of MSME (ASPIRE Division), New Delhi"
  },

  // ==========================================================================
  // 3. AGRICULTURE, FOOD PROCESSING & ALLIED INFRASTRUCTURE
  // ==========================================================================
  {
    id: "pmfme",
    nameEn: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    nameHi: "प्रधानमंत्री सूक्ष्म खाद्य उद्योग उन्नयन योजना (PMFME)",
    nodalAgency: "Ministry of Food Processing Industries (MoFPI) / State Food Missions",
    minCost: 100000,
    maxCost: 3000000, // Up to ₹30 Lakh
    coverPct: 0.90,
    rate: 8.0,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Agri-Allied", "Manufacturing"],
    govtInterestSubsidy: "35% Credit-Linked Capital Subsidy: The Central Government gives a direct 35% non-refundable subsidy (up to ₹10 Lakh per unit) on the project cost. Beneficiary margin money is only 10%.",
    keyBenefits: [
      "35% direct non-refundable capital subsidy (up to ₹10,00,000)",
      "Covers bakery, spices, flour mill, pickles, fruit juices, dairy, and cold-pressed oils",
      "FSSAI food license, packaging design, and branding support provided free",
      "Credit guarantee available through CGTMSE"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply on MoFPI PMFME Portal", desc: "Fill online application and select your One District One Product (ODOP) food category." },
      { step: "Step 2", title: "District Resource Person (DRP) Handholding", desc: "Government District Resource Person assists you in drafting your DPR and bank submission." },
      { step: "Step 3", title: "Bank Sanction & Subsidy Credit", desc: "Bank sanctions loan and the 35% subsidy is credited into your subsidy account." }
    ],
    descriptionEn: "35% credit-linked capital subsidy up to ₹10 Lakh for setting up or modernizing micro food processing units (flour mills, spice units, bakeries, juice plants).",
    descriptionHi: "खाद्य प्रसंस्करण इकाइयों (मसाले, आटा चक्की, बेकरी, अचार, तेल) हेतु ₹10 लाख तक की 35% सीधी सरकारी पूंजी सब्सिडी।",
    documentsRequired: [
      "Detailed Project Report (DPR) for food processing machinery and working capital",
      "FSSAI Registration or undertaking to obtain license",
      "Aadhaar Card, PAN Card, and Bank statements of past 6 months",
      "Quotations for food grade stainless steel machinery",
      "Proof of premise ownership or lease agreement"
    ],
    whereToSubmit: "District Resource Person (DRP) / State Food Processing Mission or Lead Bank"
  },
  {
    id: "aif",
    nameEn: "Agriculture Infrastructure Fund (AIF)",
    nameHi: "कृषि अवसंरचना कोष (AIF)",
    nodalAgency: "Department of Agriculture & Farmers Welfare / NABARD",
    minCost: 1000000,
    maxCost: 10000000, // Capped at ₹1 Crore
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 7,
    moratoriumMonths: 24,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Agri-Allied", "Services", "Manufacturing"],
    govtInterestSubsidy: "3% Government Interest Subvention for 7 Years: The Central Government pays a direct 3.0% interest subvention into your loan account for up to 7 years. Credit guarantee fee under CGTMSE is also paid 100% by the Government.",
    keyBenefits: [
      "Long-term debt up to ₹1 Crore for post-harvest agri-infrastructure",
      "Direct 3.0% interest subvention for 7 years reducing borrowing rate down to 5-6% p.a.",
      "100% credit guarantee fee borne by the Government of India",
      "Covers warehouses, cold storage, sorting/grading units, solar dryers, and custom hiring centers"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register on Agri Infra Portal", desc: "Submit project proposal on agriinfra.dac.gov.in." },
      { step: "Step 2", title: "Ministry Verification", desc: "Project is verified online within 10 working days and sent to chosen bank." },
      { step: "Step 3", title: "Sanction & Subvention Activation", desc: "Bank sanctions loan with automatic 3% interest subvention adjustment." }
    ],
    descriptionEn: "Subsidized farm credit up to ₹1 Crore with 3% annual interest subvention for warehouses, cold stores, and primary processing centers.",
    descriptionHi: "गोदाम, कोल्ड स्टोरेज एवं ग्रेडिंग इकाइयों हेतु 3% ब्याज सब्सिडी के साथ ₹1 करोड़ तक का कृषि अवसंरचना ऋण।",
    documentsRequired: [
      "Detailed Project Report (DPR) of post-harvest agri project",
      "Land Ownership Record (7/12 extract / Khatauni / Jamabandi) or registered lease for min 10 years",
      "Statutory building and environmental approvals",
      "PAN Card and KYC documents of borrower"
    ],
    whereToSubmit: "Agriculture Infrastructure Portal (agriinfra.dac.gov.in) & Participating Banks"
  },
  {
    id: "acabc",
    nameEn: "Agri-Clinics and Agri-Business Centres (ACABC) Scheme",
    nameHi: "कृषि क्लिनिक एवं कृषि व्यवसाय केंद्र योजना (ACABC)",
    nodalAgency: "MANAGE / NABARD / Ministry of Agriculture",
    minCost: 500000,
    maxCost: 2000000, // ₹20 Lakh individual (₹1 Cr group)
    coverPct: 0.90,
    rate: 7.0,
    tenureYears: 8,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Agri-Allied", "Services"],
    govtInterestSubsidy: "44% Capital Subsidy for SC/ST and Women: The Government provides a 44% direct capital subsidy for SC, ST, and women entrepreneurs (36% for other categories) deposited upfront into a subsidy reserve account.",
    keyBenefits: [
      "44% direct non-refundable government capital subsidy for SC, ST, and women graduates",
      "Free 45-day residential training with free lodging and boarding provided by MANAGE",
      "Funding up to ₹20 Lakh for individual agri-ventures (soil testing, seed centers, vet clinics, custom hiring)",
      "Zero repayment on the 44% subsidy portion"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Free Residential Training at MANAGE Centre", desc: "Apply online at manage.gov.in for 45-day residential agri-entrepreneurship course." },
      { step: "Step 2", title: "Prepare Bank Proposal", desc: "Draft business plan with expert mentors during training." },
      { step: "Step 3", title: "NABARD Subsidy Credit", desc: "Bank sanctions loan and NABARD deposits 44% subsidy directly into account." }
    ],
    descriptionEn: "44% capital subsidy for agriculture/science graduates and diploma holders to establish agri-clinics, soil testing labs, and farm equipment centers.",
    descriptionHi: "कृषि स्नातकों एवं डिप्लोमा धारकों हेतु कृषि क्लिनिक एवं बीज-खाद केंद्र स्थापित करने पर 44% तक की सीधी सरकारी सब्सिडी।",
    documentsRequired: [
      "Degree / Diploma Certificate in Agriculture, Horticulture, Dairy, Vet Science, or Botany",
      "MANAGE Training Completion Certificate",
      "Detailed Project Report (DPR)",
      "Caste Certificate (for 44% special category subsidy claim)",
      "Aadhaar Card and PAN Card"
    ],
    whereToSubmit: "MANAGE Nodal Training Institute or Nearest Commercial Bank / NABARD Office"
  },
  {
    id: "pm-kusum",
    nameEn: "PM-KUSUM (Component B - Standalone Solar Agriculture Pumps)",
    nameHi: "प्रधानमंत्री कुसुम योजना (घटक-बी: सौर कृषि पंप)",
    nodalAgency: "Ministry of New and Renewable Energy (MNRE) / State Discoms",
    minCost: 150000,
    maxCost: 750000,
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 5,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Clean Energy", "Agri-Allied"],
    govtInterestSubsidy: "60% Direct Non-Refundable Government Subsidy: Central Government provides 30% subsidy and State Government provides 30% subsidy (total 60% free grant). Farmer contributes only 10% cash, remaining 30% by bank loan.",
    keyBenefits: [
      "60% direct government grant for solar water pumps (up to 7.5 HP)",
      "Farmer pays only 10% own contribution",
      "Zero monthly electricity bills — operates 100% on solar power",
      "5-year comprehensive warranty and remote solar maintenance included"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register on State Renewable Energy Portal", desc: "Apply on state renewable agency (e.g. MEDA, HAREDA, UPNEDA) portal." },
      { step: "Step 2", title: "Site Verification", desc: "Discom officer checks borewell depth and water source availability." },
      { step: "Step 3", title: "Installation", desc: "Authorized solar vendor installs solar panel array and submersible pump." }
    ],
    descriptionEn: "60% non-refundable government subsidy for installing standalone off-grid solar agriculture pumps up to 7.5 HP.",
    descriptionHi: "सौर कृषि पंप लगाने हेतु केंद्र एवं राज्य सरकार द्वारा 60% सीधी मुफ्त सब्सिडी, किसान को मात्र 10% अंशदान देना होगा।",
    documentsRequired: [
      "Land Ownership Documents (7/12 extract / Khasra / Khatoni)",
      "Proof of active borewell / water source on farm",
      "Aadhaar Card and Bank Passbook",
      "Caste Certificate (for special category priority allocation)"
    ],
    whereToSubmit: "State Renewable Energy Development Agency (NEDA / MEDA / HAREDA) Office"
  },
  {
    id: "pmmsy",
    nameEn: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    nameHi: "प्रधानमंत्री मत्स्य संपदा योजना (PMMSY)",
    nodalAgency: "Department of Fisheries / National Fisheries Development Board (NFDB)",
    minCost: 300000,
    maxCost: 5000000, // ₹50 Lakh
    coverPct: 0.90,
    rate: 7.0,
    tenureYears: 7,
    moratoriumMonths: 12,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Agri-Allied", "Manufacturing"],
    govtInterestSubsidy: "60% Direct Capital Subsidy for SC/ST and Women: Central and State Governments provide a direct 60% non-refundable grant for SC, ST, and women fish farmers (40% for general category).",
    keyBenefits: [
      "60% non-refundable government subsidy for SC, ST, and women beneficiaries",
      "Covers freshwater fish ponds, Biofloc units, RAS (Recirculatory Aquaculture), and fish feed mills",
      "Comprehensive insurance cover for aquaculture crops and fish ponds",
      "Technological guidance from state fisheries extension officers"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit Application to District Fisheries Officer (DFO)", desc: "Submit project proposal detailing pond area, biofloc tanks, or hatchery." },
      { step: "Step 2", title: "District Level Committee Approval", desc: "District committee approves project and sanctions state subsidy quota." },
      { step: "Step 3", title: "Direct Benefit Release", desc: "Subsidy released in stages matching pond construction and fingerling stocking." }
    ],
    descriptionEn: "60% non-refundable government subsidy for SC/ST and women to establish fish ponds, Biofloc aquaculture, and fish feed processing plants.",
    descriptionHi: "मछली पालन, बायोफ्लॉक एवं हैचरी इकाइयों हेतु अनुसूचित जाति/जनजाति एवं महिलाओं के लिए 60% सीधी गैर-वापसी योग्य सब्सिडी।",
    documentsRequired: [
      "Land Ownership Documents or Registered Lease Deed for minimum 7-10 years",
      "Detailed Project Report (DPR) for aquaculture unit",
      "Caste Certificate (for claiming 60% special category subsidy)",
      "Bank Account details and Aadhaar Card"
    ],
    whereToSubmit: "Office of the District Fisheries Officer (DFO)"
  },
  {
    id: "ahidf",
    nameEn: "Animal Husbandry Infrastructure Development Fund (AHIDF)",
    nameHi: "पशुपालन अवसंरचना विकास कोष (AHIDF)",
    nodalAgency: "Department of Animal Husbandry & Dairying / SIDBI",
    minCost: 1500000,
    maxCost: 10000000, // Capped at ₹1 Crore
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 8,
    moratoriumMonths: 24,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Agri-Allied", "Manufacturing"],
    govtInterestSubsidy: "3% Government Interest Subvention & Credit Guarantee: Central Government pays 3.0% interest subvention for 8 years and provides credit guarantee cover up to 25% of the total loan.",
    keyBenefits: [
      "Funding up to ₹1 Crore for dairy processing plants, meat processing, and animal feed units",
      "3.0% annual interest subvention directly paid by the Government for up to 8 years",
      "2-year repayment moratorium on principal",
      "Up to 90% project cost financed by scheduled commercial banks"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply on AHIDF Portal", desc: "Submit project application online at ahidf.udyamimitra.in." },
      { step: "Step 2", title: "Technical Appraisal by Ministry", desc: "Project examined by Project Appraisal Committee within 14 days." },
      { step: "Step 3", title: "Bank Sanction", desc: "Financing bank sanctions loan with automatic 3% interest subvention." }
    ],
    descriptionEn: "Up to ₹1 Crore for dairy processing, animal feed plants, and cold chains with 3% annual government interest subvention.",
    descriptionHi: "डेयरी प्रसंस्करण, पशु आहार एवं शीत गृह इकाइयों हेतु 3% ब्याज सब्सिडी के साथ ₹1 करोड़ तक का रियायती ऋण।",
    documentsRequired: [
      "Detailed Project Report (DPR) for dairy or feed processing unit",
      "FSSAI / Pollution Control Board consent to establish",
      "Proof of land ownership or registered long lease",
      "KYC documents and audited financials"
    ],
    whereToSubmit: "Online via AHIDF Portal (ahidf.udyamimitra.in) or Commercial Bank"
  },

  // ==========================================================================
  // 4. URBAN & RURAL LIVELIHOODS, STREET VENDORS & ARTISANS
  // ==========================================================================
  {
    id: "pmsvanidhi-1",
    nameEn: "PM SVANidhi (Street Vendor Micro Credit - 1st Tranche)",
    nameHi: "पीएम स्वनिधि योजना (प्रथम किश्त)",
    nodalAgency: "Ministry of Housing and Urban Affairs (MoHUA) / SIDBI",
    minCost: 5000,
    maxCost: 10000, // ₹10,000
    coverPct: 1.0,
    rate: 7.0,
    tenureYears: 1,
    moratoriumMonths: 1,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services"],
    govtInterestSubsidy: "7% Government Interest Subvention: Government pays a 7.0% interest subvention directly into the vendor's bank account on prompt repayment. Also includes up to ₹1,200 annual cash-back on digital payments.",
    keyBenefits: [
      "Instant working capital loan of ₹10,000 without any collateral or guarantee",
      "7% annual interest subvention credited directly into savings account",
      "Monthly cash-back rewards up to ₹100 for receiving customer UPI payments",
      "Timely repayment automatically qualifies you for a ₹20,000 second tranche loan"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Check Vending ID / LOR", desc: "Obtain Vending ID or Letter of Recommendation (LOR) from Urban Local Body (ULB)." },
      { step: "Step 2", title: "Apply at Bank or CSC", desc: "Submit 1-page form via pmsvanidhi.mohua.gov.in." },
      { step: "Step 3", title: "Direct Credit", desc: "₹10,000 credited within 7 working days." }
    ],
    descriptionEn: "Collateral-free working capital loan of ₹10,000 for urban street vendors with 7% interest subvention and digital cashback.",
    descriptionHi: "शहरी रेहड़ी-पटरी विक्रेताओं हेतु बिना गारंटी ₹10,000 का कार्यशील पूंजी ऋण, 7% ब्याज सब्सिडी के साथ।",
    documentsRequired: [
      "Urban Local Body (ULB) Vending Certificate or Letter of Recommendation (LOR)",
      "Aadhaar Card linked with active mobile number",
      "Bank Account details (Aadhaar seeded)"
    ],
    whereToSubmit: "Local Municipal Corporation / Municipality Office or Common Service Centre (CSC)"
  },
  {
    id: "pmsvanidhi-2",
    nameEn: "PM SVANidhi (Street Vendor Loan - 2nd Tranche)",
    nameHi: "पीएम स्वनिधि योजना (द्वितीय किश्त)",
    nodalAgency: "MoHUA / Commercial Banks",
    minCost: 10000,
    maxCost: 20000, // ₹20,000
    coverPct: 1.0,
    rate: 7.0,
    tenureYears: 1.5,
    moratoriumMonths: 1,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["brownfield"],
    sectors: ["Trading", "Services"],
    govtInterestSubsidy: "7% Interest Subvention & Higher Limit: Government continues 7% interest subvention for vendors who repaid their 1st tranche on time.",
    keyBenefits: [
      "Enhanced ₹20,000 working capital loan with no collateral",
      "7% interest subvention paid quarterly by Ministry directly to your bank",
      "Pre-approved based on prompt repayment of 1st loan",
      "Enables expansion of vending stock, fruit carts, or tea kiosks"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Complete 1st Loan Repayment", desc: "Ensure all monthly EMIs of ₹10,000 loan are cleared." },
      { step: "Step 2", title: "Instant Portal Renewal", desc: "Apply for 2nd tranche on pmsvanidhi.mohua.gov.in." },
      { step: "Step 3", title: "Direct Credit", desc: "₹20,000 credited directly by the financing bank." }
    ],
    descriptionEn: "Enhanced ₹20,000 loan for urban street vendors who successfully repaid their first tranche with 7% interest subvention.",
    descriptionHi: "प्रथम ऋण के सफल पुनर्भुगतान पर रेहड़ी-पटरी विक्रेताओं हेतु ₹20,000 का संवर्धित ऋण।",
    documentsRequired: [
      "Aadhaar Card",
      "No-dues certificate or passbook showing clearance of 1st PM SVANidhi loan",
      "Vending ID / Certificate"
    ],
    whereToSubmit: "Financing Bank Branch or Municipal ULB Nodal Officer"
  },
  {
    id: "pmsvanidhi-3",
    nameEn: "PM SVANidhi (Street Vendor Loan - 3rd Tranche)",
    nameHi: "पीएम स्वनिधि योजना (तृतीय किश्त)",
    nodalAgency: "MoHUA / Commercial Banks",
    minCost: 20000,
    maxCost: 50000, // ₹50,000
    coverPct: 1.0,
    rate: 7.0,
    tenureYears: 3,
    moratoriumMonths: 1,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["brownfield"],
    sectors: ["Trading", "Services"],
    govtInterestSubsidy: "7% Interest Subvention for Micro Vendors: Government provides 7% interest subvention on the full ₹50,000 loan amount.",
    keyBenefits: [
      "Maximum ₹50,000 business loan for graduating street vendors",
      "Flexible 36-month repayment period",
      "7% government-paid interest subvention",
      "Assists vendors in setting up permanent semi-pucca kiosks and shops"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Clear 2nd Tranche", desc: "Repay ₹20,000 second tranche on schedule." },
      { step: "Step 2", title: "Apply for 3rd Tranche", desc: "Portal automatically unlocks ₹50,000 loan request." },
      { step: "Step 3", title: "Disbursement", desc: "₹50,000 disbursed to bank account." }
    ],
    descriptionEn: "Maximum ₹50,000 collateral-free credit for urban micro vendors with 7% government interest subvention.",
    descriptionHi: "रेहड़ी-पटरी विक्रेताओं को स्थायी दुकान व व्यवसाय विस्तार हेतु ₹50,000 तक का अंतिम किश्त ऋण।",
    documentsRequired: [
      "Aadhaar Card and Bank Passbook",
      "Record of timely repayment of 2nd tranche loan",
      "Vending ID / ULB Certificate"
    ],
    whereToSubmit: "Bank Branch or Municipal Urban Local Body (ULB) Office"
  },
  {
    id: "day-nrlm",
    nameEn: "Deendayal Antyodaya Yojana - NRLM (Women SHG Bank Linkage)",
    nameHi: "दीनदयाल अंत्योदय योजना - राष्ट्रीय ग्रामीण आजीविका मिशन (DAY-NRLM)",
    nodalAgency: "Ministry of Rural Development (MoRD) / State Rural Livelihood Missions",
    minCost: 100000,
    maxCost: 2000000, // Up to ₹20 Lakh collateral free
    coverPct: 1.0,
    rate: 7.0,
    tenureYears: 5,
    moratoriumMonths: 3,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    allowedGenders: ["female"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Trading", "Services", "Manufacturing", "Agri-Allied"],
    govtInterestSubsidy: "Interest Subvention to 7% (Further 3% Subvention for Prompt Repayment): Government subsidizes bank interest rate down to 7.0% p.a. on loans up to ₹3 Lakh. Prompt repayment earns an extra 3% subvention, slashing the effective interest rate to just 4.0% p.a.!",
    keyBenefits: [
      "Collateral-free credit up to ₹20 Lakh for women Self-Help Groups (SHGs)",
      "Effective interest rate slashed to just 4.0% p.a. upon prompt repayment",
      "Community Investment Support Fund (CIF) grant provided to every SHG",
      "Training in accounts, enterprise management, and government e-Marketplace (GeM) sales"
    ],
    applicationSteps: [
      { step: "Step 1", title: "SHG Formation & Panchasutra Compliance", desc: "Women group complies with 5 principles (regular meetings, savings, inter-loaning, repayment, record keeping)." },
      { step: "Step 2", title: "Micro Credit Plan (MCP) Preparation", desc: "Prepare enterprise investment plan with Village Organization (VO) animator." },
      { step: "Step 3", title: "Bank Credit Linkage", desc: "Bank sanctions collateral-free credit line directly to the SHG account." }
    ],
    descriptionEn: "Collateral-free credit up to ₹20 Lakh for rural women Self-Help Groups with interest rate slashed down to 4% p.a. on prompt repayment.",
    descriptionHi: "ग्रामीण महिला स्वयं सहायता समूहों हेतु ₹20 लाख तक का बिना गारंटी ऋण, समय पर भुगतान करने पर मात्र 4% प्रभावी ब्याज दर।",
    documentsRequired: [
      "SHG Resolution Letter signed by all members",
      "SHG Savings Account Passbook with 6-month operation record",
      "Micro Credit Plan (MCP) certified by Village Organization (VO)",
      "KYC documents of SHG office bearers (President, Secretary, Treasurer)"
    ],
    whereToSubmit: "Block Mission Management Unit (BMMU) / State Rural Livelihood Mission or Lead Bank"
  },
  {
    id: "day-nulm-sep-i",
    nameEn: "DAY-NULM Self Employment Programme (SEP-I - Individual)",
    nameHi: "दीनदयाल अंत्योदय योजना - एनयूएलएम व्यक्तिगत स्वरोजगार (SEP-I)",
    nodalAgency: "Ministry of Housing and Urban Affairs (MoHUA)",
    minCost: 50000,
    maxCost: 200000, // ₹2 Lakh individual
    coverPct: 0.95,
    rate: 7.0, // Subsidized over 7%
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    incomeCeiling: 300000,
    ventureType: ["greenfield"],
    sectors: ["Services", "Trading", "Manufacturing"],
    govtInterestSubsidy: "Interest Subvention Above 7%: The Central Government pays all interest charged by the financing bank over and above 7% p.a. directly to the bank as an interest subsidy.",
    keyBenefits: [
      "Bank credit up to ₹2 Lakh for urban poor individuals to establish micro enterprises",
      "Government absorbs all interest above 7% p.a.",
      "Beneficiary margin contribution only 5%",
      "No collateral or third-party guarantee required for loans up to ₹2 Lakh"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at Urban Local Body (ULB)", desc: "Submit application to City Mission Management Unit (CMMU) at your Municipality." },
      { step: "Step 2", title: "Task Force Committee Approval", desc: "ULB Task Force interviews candidate and forwards proposal to chosen bank branch." },
      { step: "Step 3", title: "Loan Disbursement", desc: "Bank releases funds and government credits interest subvention quarterly." }
    ],
    descriptionEn: "Subsidized bank loan up to ₹2 Lakh for urban poor individuals with government paying all interest over 7% p.a.",
    descriptionHi: "शहरी गरीबों हेतु ₹2 लाख तक का स्वरोजगार ऋण, जिसमें 7% से अधिक का समस्त ब्याज सरकार द्वारा देय।",
    documentsRequired: [
      "Aadhaar Card and Urban Residence Proof",
      "Income Certificate (confirming family income ≤ ₹3 Lakh / BPL status)",
      "Brief Project Report for micro venture",
      "Bank Account details"
    ],
    whereToSubmit: "City Mission Management Unit (CMMU) at Municipal Corporation / Council Office"
  },
  {
    id: "coir-udyami",
    nameEn: "Coir Udyami Yojana",
    nameHi: "कयर उद्यमी योजना",
    nodalAgency: "Coir Board / Ministry of MSME",
    minCost: 100000,
    maxCost: 1000000, // ₹10 Lakh
    coverPct: 0.95,
    rate: 7.5,
    tenureYears: 7,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    noIncomeCeiling: true,
    ventureType: ["greenfield"],
    sectors: ["Manufacturing", "Agri-Allied"],
    govtInterestSubsidy: "25% Direct Government Capital Subsidy: The Coir Board provides 25% direct non-refundable capital subsidy (up to ₹2.5 Lakh). Beneficiary contribution is only 5% of project cost.",
    keyBenefits: [
      "Up to ₹10 Lakh funding for setting up coir fibre, coir yarn, geo-textiles, and coir pith units",
      "25% direct government grant/subsidy on project cost",
      "Beneficiary own margin is only 5%",
      "Free technical training and quality certification provided by the Coir Board"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply to Coir Board Field Office", desc: "Submit project proposal on coir processing machinery." },
      { step: "Step 2", title: "Scrutiny & Bank Sanction", desc: "Coir Board sponsors proposal to bank branch and releases 25% subsidy." },
      { step: "Step 3", title: "Unit Installation", desc: "Machinery installed and inspected by Coir Board inspector." }
    ],
    descriptionEn: "25% direct capital subsidy for setting up coir fiber extraction, rope making, and eco-friendly coir pith units.",
    descriptionHi: "नारियल जटा (कयर) उद्योग, रस्सी निर्माण एवं जैव-खाद इकाइयां स्थापित करने हेतु 25% सरकारी पूंजी सब्सिडी।",
    documentsRequired: [
      "Detailed Project Report for coir processing",
      "Quotation of authorized coir machinery",
      "Aadhaar Card and PAN Card",
      "Proof of premise ownership or lease"
    ],
    whereToSubmit: "Coir Board Regional Office or District Industries Centre (DIC)"
  },

  // ==========================================================================
  // 5. BACKWARD CLASSES & MINORITIES FINANCIAL CORPORATIONS
  // ==========================================================================
  {
    id: "nbcfdc-swarnima",
    nameEn: "NBCFDC New Swarnima Scheme for Backward Class Women",
    nameHi: "एनबीसीएफडीसी नई स्वर्णिमा योजना (पिछड़ा वर्ग महिलाएं)",
    nodalAgency: "National Backward Classes Finance & Development Corporation (MoSJE)",
    minCost: 50000,
    maxCost: 200000, // ₹2 Lakh
    coverPct: 0.95,
    rate: 5.0,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["OBC"],
    allowedGenders: ["female"],
    incomeCeiling: 300000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Services", "Trading", "Handicrafts", "Agri-Allied"],
    govtInterestSubsidy: "Super-Concessional 5% Interest Rate: The Ministry subsidizes the entire commercial interest burden, delivering credit at a fixed 5.0% per annum for OBC women. Beneficiary contributes only 5% margin.",
    keyBenefits: [
      "Concessional loan up to ₹2 Lakh exclusively for women belonging to Backward Classes",
      "Fixed 5.0% p.a. subsidized interest rate",
      "95% project cost funded by NBCFDC through State Channelising Agencies",
      "No third-party mortgage required"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at State OBC Corporation", desc: "Submit simple form to your State Backward Classes Development Corporation." },
      { step: "Step 2", title: "Income & Caste Check", desc: "District officer verifies OBC (Non-Creamy Layer) certificate and income (within ₹3 Lakh)." },
      { step: "Step 3", title: "Fund Release", desc: "Funds credited directly to woman entrepreneur's account." }
    ],
    descriptionEn: "Concessional credit up to ₹2 Lakh at 5% interest for women belonging to Backward Classes to establish self-employment ventures.",
    descriptionHi: "अन्य पिछड़ा वर्ग (ओबीसी) की महिलाओं हेतु 5% की रियायती ब्याज दर पर ₹2 लाख तक का स्वरोजगार ऋण।",
    documentsRequired: [
      "OBC (Non-Creamy Layer) Caste Certificate",
      "Annual Family Income Certificate (proving annual income ≤ ₹3.00 Lakh)",
      "Aadhaar Card and Bank Passbook copy",
      "Brief quote / plan for small enterprise"
    ],
    whereToSubmit: "State Backward Classes Development Corporation (SCA) District Office"
  },
  {
    id: "nbcfdc-general",
    nameEn: "NBCFDC General Term Loan Scheme",
    nameHi: "एनबीसीएफडीसी सामान्य सावधि ऋण योजना",
    nodalAgency: "National Backward Classes Finance & Development Corporation (MoSJE)",
    minCost: 100000,
    maxCost: 1500000, // ₹15 Lakh
    coverPct: 0.85,
    rate: 6.0,
    tenureYears: 8,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["OBC"],
    incomeCeiling: 300000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "Concessional Lending Subvention: Government caps interest rate at 6.0% p.a. for loans up to ₹5 Lakh, and 7.0% for loans up to ₹15 Lakh for OBC beneficiaries.",
    keyBenefits: [
      "Up to ₹15 Lakh term loan for viable business, manufacturing, or service ventures",
      "Deeply subsidized interest rate starting from 6.0% p.a.",
      "Up to 85% project cost funded by NBCFDC through State SCAs and Regional Rural Banks",
      "Long repayment tenure up to 8 years"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Submit to District SCA Office", desc: "Apply at your state Backward Classes Development Corporation." },
      { step: "Step 2", title: "Appraisal & Verification", desc: "Verification of OBC certificate, family income, and machinery quotations." },
      { step: "Step 3", title: "Disbursement", desc: "Payment released directly to machinery vendors or business account." }
    ],
    descriptionEn: "Term loan up to ₹15 Lakh for OBC entrepreneurs at subsidized interest rates starting from 6% per annum.",
    descriptionHi: "ओबीसी उद्यमियों हेतु मात्र 6% से 7% ब्याज दर पर ₹15 लाख तक का रियायती सावधि ऋण।",
    documentsRequired: [
      "OBC Certificate (Non-Creamy Layer)",
      "Annual Family Income Certificate (≤ ₹3.00 Lakh per annum)",
      "Detailed Project Profile with machinery quotes",
      "Aadhaar Card and PAN Card"
    ],
    whereToSubmit: "State Backward Classes Development Corporation (SCA) or Regional Rural Bank"
  },
  {
    id: "nmdfdc-term",
    nameEn: "NMDFDC Term Loan Scheme for Minorities",
    nameHi: "एनएमडीएफसी अल्पसंख्यक सावधि ऋण योजना",
    nodalAgency: "National Minorities Development & Finance Corporation (MoMA)",
    minCost: 100000,
    maxCost: 2000000, // Up to ₹20 Lakh
    coverPct: 0.90,
    rate: 6.0,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["General", "OBC", "EWS"], // Covers recognized religious minorities (Muslims, Christians, Sikhs, Buddhists, Jains, Parsis)
    incomeCeiling: 600000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Agri-Allied"],
    govtInterestSubsidy: "Concessional Minority Credit Subvention: Subsidized 6% p.a. interest rate funded by Central Government through State Minority Channelising Agencies.",
    keyBenefits: [
      "Loan up to ₹20 Lakh for individual minority entrepreneurs (Muslims, Christians, Sikhs, Buddhists, Jains, Parsis)",
      "Subsidized rate of 6.0% p.a. with 5-year repayment tenure",
      "90% of project cost funded by NMDFDC",
      "Self-contribution capped at only 10%"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Apply at State Minority Corporation", desc: "Submit project proposal to State Minority Finance Corporation." },
      { step: "Step 2", title: "Scrutiny of Minority & Income Proof", desc: "District officer verifies minority self-declaration and income (within ₹6 Lakh in urban, ₹4L in rural)." },
      { step: "Step 3", title: "Loan Disbursement", desc: "Amount disbursed for asset acquisition." }
    ],
    descriptionEn: "Subsidized term loan up to ₹20 Lakh at 6% interest for setting up commercially viable enterprises for notified minorities.",
    descriptionHi: "अधिसूचित अल्पसंख्यकों हेतु मात्र 6% की रियायती ब्याज दर पर ₹20 लाख तक का सावधि ऋण।",
    documentsRequired: [
      "Self-Declaration of belonging to notified Minority Community (Muslim, Christian, Sikh, Buddhist, Jain, Parsi)",
      "Annual Family Income Certificate (within prescribed ceiling)",
      "Detailed Project Profile / Machinery Quotations",
      "Aadhaar Card and Bank Passbook"
    ],
    whereToSubmit: "State Minorities Financial Development Corporation (State SCA) Office"
  },
  {
    id: "nmdfdc-virasat",
    nameEn: "NMDFDC Virasat Scheme for Craftspersons & Artisans",
    nameHi: "एनएमडीएफसी विरासत योजना (शिल्पकार एवं दस्तकार)",
    nodalAgency: "National Minorities Development & Finance Corporation",
    minCost: 20000,
    maxCost: 1000000, // ₹10 Lakh
    coverPct: 0.95,
    rate: 5.0, // 5% for men, 4% for women
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["General", "OBC", "EWS"],
    incomeCeiling: 600000,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Handicrafts", "Manufacturing"],
    govtInterestSubsidy: "Heritage Artisan Subvention: Concessional 5% interest for male artisans and ultra-low 4% for female artisans to preserve indigenous crafts and handlooms.",
    keyBenefits: [
      "Credit assistance up to ₹10 Lakh for hereditary craftspeople and handloom weavers",
      "Ultra-low 4.0% p.a. interest rate for female craftspersons (5.0% for male)",
      "95% project cost funded by Government (only 5% artisan contribution)",
      "Exhibition support at Hunar Haats and national craft fairs"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Artisan Verification", desc: "Present Pehchan Artisan Card or certificate from Development Commissioner (Handicrafts)." },
      { step: "Step 2", title: "Submit to SCA Office", desc: "Apply with raw material and equipment requirement." },
      { step: "Step 3", title: "Fund Disbursement", desc: "Credit sanctioned at 4% - 5% concessional interest." }
    ],
    descriptionEn: "Credit support up to ₹10 Lakh at 4-5% interest for hereditary minority craftspersons and handloom weavers.",
    descriptionHi: "पारंपरिक अल्पसंख्यक दस्तकारों एवं बुनकरों हेतु मात्र 4% से 5% ब्याज पर ₹10 लाख तक का रियायती ऋण।",
    documentsRequired: [
      "Pehchan Artisan Card / Weaver Card issued by Ministry of Textiles",
      "Minority Community Self-Declaration",
      "Annual Family Income Certificate",
      "Aadhaar Card and Bank Account details"
    ],
    whereToSubmit: "State Minority Finance Corporation or Office of DC (Handicrafts/Handlooms)"
  },
  {
    id: "tread",
    nameEn: "TREAD Scheme for Women (Trade Related Entrepreneurship Assistance)",
    nameHi: "ट्रीड योजना (महिला उद्यमिता सहायता)",
    nodalAgency: "Ministry of MSME / Lending Institutions",
    minCost: 100000,
    maxCost: 3000000, // Up to ₹30 Lakh
    coverPct: 0.95,
    rate: 7.0,
    tenureYears: 5,
    moratoriumMonths: 6,
    purpose: ["business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    allowedGenders: ["female"],
    noIncomeCeiling: true,
    ventureType: ["greenfield", "brownfield"],
    sectors: ["Manufacturing", "Services", "Trading", "Handicrafts"],
    govtInterestSubsidy: "30% Direct Non-Refundable Government Grant: Government of India provides a 30% direct grant (up to ₹9 Lakh) through promoting NGOs, while banks finance the remaining 70% as loan.",
    keyBenefits: [
      "30% non-refundable government grant provided directly for women entrepreneur groups",
      "Financial assistance up to ₹30 Lakh per enterprise project",
      "Free counseling, market survey, and product development training",
      "No mortgage required from poor women entrepreneurs"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Connect with Sponsoring NGO / Institution", desc: "Register through an experienced registered NGO / Self-Help Group federation." },
      { step: "Step 2", title: "Submit Joint Proposal to MSME-DI", desc: "Submit DPR to local MSME Development & Facilitation Office." },
      { step: "Step 3", title: "Grant & Loan Release", desc: "30% grant credited by Ministry and bank disburses remaining 70%." }
    ],
    descriptionEn: "30% direct government grant on project costs for poor women entrepreneurs establishing micro enterprises in trading, manufacturing, and crafts.",
    descriptionHi: "निर्धन महिला उद्यमियों के व्यावसायिक प्रोजेक्ट हेतु 30% सीधी गैर-वापसी योग्य सरकारी अनुदान सहायता।",
    documentsRequired: [
      "Detailed Project Report for women's enterprise",
      "Sponsoring NGO / Agency Registration and track record",
      "KYC documents and bank accounts of women beneficiaries",
      "Group resolution and trade plan"
    ],
    whereToSubmit: "Local MSME Development & Facilitation Office (MSME-DFO) / Sponsoring Agency"
  },
  {
    id: "ddu-gky",
    nameEn: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    nameHi: "दीन दयाल उपाध्याय ग्रामीण कौशल्य योजना",
    nodalAgency: "Ministry of Rural Development (MoRD) / State SRLMs",
    minCost: 10000,
    maxCost: 100000,
    coverPct: 1.0,
    rate: 0.0,
    tenureYears: 1,
    moratoriumMonths: 6,
    purpose: ["education", "business"],
    allowedCategories: ["SC", "ST", "OBC", "General", "EWS"],
    incomeCeiling: 300000,
    ventureType: ["greenfield"],
    sectors: ["Services", "Manufacturing", "Tech / Innovation"],
    govtInterestSubsidy: "100% Free Placement-Linked Training & Boarding: Entire residential training, food, uniform, and post-placement support funded 100% by the Government of India with guaranteed minimum 70% job placement.",
    keyBenefits: [
      "100% free certified industry training in logistics, healthcare, retail, hospitality, or IT",
      "Free residential lodging, boarding, study material, and uniform provided",
      "Guaranteed minimum 70% placement in organized private sector with regular monthly salary",
      "Post-placement monthly stipend of ₹1,000 to ₹3,000 to ease relocation"
    ],
    applicationSteps: [
      { step: "Step 1", title: "Register on Kaushal Panjee Portal", desc: "Create profile on kaushalpanjee.nic.in using your Aadhaar." },
      { step: "Step 2", title: "Attend Mobilization Camp", desc: "Visit Block Office or Project Implementing Agency (PIA) training centre." },
      { step: "Step 3", title: "Training & Placement", desc: "Undergo 3 to 12-month course and secure placement with formal appointment letter." }
    ],
    descriptionEn: "100% government-funded residential skill development with guaranteed minimum 70% placement for rural youth aged 15-35.",
    descriptionHi: "ग्रामीण युवाओं हेतु निःशुल्क आवासीय कौशल प्रशिक्षण एवं निजी क्षेत्र में न्यूनतम 70% सुनिश्चित रोजगार।",
    documentsRequired: [
      "Aadhaar Card and Proof of Rural Residence",
      "10th / 12th Pass Marksheet (or minimum 5th/8th as required by trade)",
      "BPL Card / MGNREGA Job Card of family / Income Certificate (≤ ₹3 Lakh)",
      "Caste Certificate (for SC/ST priority batch allocation)"
    ],
    whereToSubmit: "Block Development Office (BDO) or Kaushal Panjee Training Centre"
  }
];

if (typeof window !== "undefined") {
  window.SCHEMES_DATA = SCHEMES_DATA;
}

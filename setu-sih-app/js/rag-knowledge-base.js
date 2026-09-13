/**
 * Setu 2.0 - RAG Knowledge Base & Retrieval Engine
 * Contains official guidelines, circulars, and policy excerpts from:
 * - Ministry of Social Justice & Empowerment (MoSJE)
 * - National Scheduled Castes Finance & Development Corporation (NSFDC)
 * - Stand-Up India Operational Guidelines (SIDBI)
 * - Venture Capital Fund for Scheduled Castes Policy (IFCI Venture)
 * - Credit Enhancement Guarantee Scheme for SCs (CEGSSC)
 * 
 * SIH 2026 Problem Statement 92
 */

const SCHEME_KNOWLEDGE_CHUNKS = [
  {
    id: "chunk-vcfsc-eligibility",
    schemeId: "vcfsc",
    title: "VCF-SC Eligibility & Shareholding Requirements",
    source: "IFCI Venture / MoSJE VCF-SC Operational Guidelines Section 4",
    sourceUrl: "https://vcfsc.in/guidelines",
    content: "Under the Venture Capital Fund for Scheduled Castes (VCF-SC), eligibility requires that the business entity be a Company registered under the Companies Act or an LLP. Scheduled Caste promoter(s) must hold at least 51% shareholding/stake with management control for at least 12 months prior to application. The company must be managed and controlled by SC entrepreneurs. Financial assistance ranges from ₹10 Lakh up to ₹15 Crore in the form of equity or convertible debentures with an indicative coupon of 4% p.a. for women/differently abled SC entrepreneurs and 8% p.a. for other SC entrepreneurs."
  },
  {
    id: "chunk-vcfsc-moratorium",
    schemeId: "vcfsc",
    title: "VCF-SC Tenor, Moratorium & Exit Mechanism",
    source: "IFCI Venture Investment Policy Manual Section 6.2",
    sourceUrl: "https://vcfsc.in/guidelines",
    content: "The investment period under VCF-SC is up to 10 years. The scheme features a principal repayment moratorium of up to 36 months (3 years) to allow greenfield ventures and expansions to achieve positive operational cash flow. Exit options include promoter buyback, secondary sale, or IPO listing on the SME Exchange. No family income ceiling applies."
  },
  {
    id: "chunk-cegssc-guarantee",
    schemeId: "cegssc",
    title: "CEGSSC Sovereign Guarantee Structure & Bank Coverage",
    source: "MoSJE CEGSSC Scheme Guidelines Notification No. 11014/01/2014-SCD-V",
    sourceUrl: "https://cegssc.in/about",
    content: "The Credit Enhancement Guarantee Scheme for SCs (CEGSSC) provides government credit guarantees to Member Lending Institutions (MLIs) for term loans and composite loans from ₹15.00 Lakh up to ₹10.00 Crore without requiring collateral security from the SC entrepreneur. The guarantee coverage is 100% of the sanctioned loan for amounts between ₹15 Lakh and ₹1.00 Crore, 80% for amounts between ₹1.00 Crore and ₹5.00 Crore, and 75% for amounts between ₹5.00 Crore and ₹10.00 Crore. Promoters must hold at least 51% stake and possess valid SC caste certificates."
  },
  {
    id: "chunk-standup-mandate",
    schemeId: "standup",
    title: "Stand-Up India Scheme Mandate & Loan Quantum",
    source: "Department of Financial Services / SIDBI Stand-Up India Operational Manual",
    sourceUrl: "https://standupmitra.in/Home/SUISchemes",
    content: "Stand-Up India facilitates bank loans between ₹10 Lakh and ₹100 Lakh (₹1 Crore) to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch of all Scheduled Commercial Banks. The loan is composite (term loan plus working capital) to set up a new enterprise (Greenfield only) in manufacturing, services, agri-allied activities, or the trading sector. Non-individual enterprises must have at least 51% of shareholding and controlling stake held by an SC/ST or woman entrepreneur."
  },
  {
    id: "chunk-standup-margin",
    schemeId: "standup",
    title: "Stand-Up India Margin Money & Subsidy Convergence",
    source: "SIDBI Circular SUI/2021-22/04",
    sourceUrl: "https://standupmitra.in",
    content: "Under Stand-Up India, the margin money required from the borrower is typically up to 15% of the project cost. However, the borrower can converge central or state capital subsidies (such as PMEGP or State SC Corporation margin money) to satisfy this requirement, provided the borrower's actual out-of-pocket contribution remains at least 10% of the total project cost."
  },
  {
    id: "chunk-nsfdc-term-eligibility",
    schemeId: "term",
    title: "NSFDC Term Loan Eligibility, Slabs & Channel Finance Structure",
    source: "NSFDC Lending Policy Compendium Chapter 3",
    sourceUrl: "https://nsfdc.nic.in/en/term-loan",
    content: "Under the NSFDC Term Loan Scheme, financial assistance up to ₹50.00 Lakh is provided for any commercially viable income-generating project. The annual family income of the beneficiary must not exceed ₹5.00 Lakh. NSFDC provides up to 90% of the project cost through State Channelising Agencies (SCAs), Public Sector Banks, or Regional Rural Banks. Interest rates to the beneficiary are tiered: 6% p.a. for loans up to ₹5 Lakh, 8% p.a. for loans up to ₹10 Lakh, and 9% p.a. for loans up to ₹50 Lakh. SC women receive a 0.5% interest rebate."
  },
  {
    id: "chunk-nsfdc-mcf",
    schemeId: "micro",
    title: "Micro Credit Finance (MCF) & Mahila Samriddhi Yojana (MSY)",
    source: "NSFDC Micro-Finance Division Circular 2023",
    sourceUrl: "https://nsfdc.nic.in/en/micro-credit-finance",
    content: "NSFDC Micro Credit Finance (MCF) caters to tiny, small trades and artisans up to ₹1,40,000 with a repayment tenure of 3 years and interest at 6.5% p.a. Mahila Samriddhi Yojana (MSY) is tailored exclusively for SC women entrepreneurs up to ₹1,40,000 at a concessional interest rate of only 4% per annum. Family income must be ≤ ₹5.00 Lakh. Implementation is routed through SCAs and recognized Self Help Groups (SHGs)."
  },
  {
    id: "chunk-nsfdc-els",
    schemeId: "edu",
    title: "NSFDC Educational Loan Scheme (Inland & Foreign)",
    source: "NSFDC Education Finance Operational Manual 2024",
    sourceUrl: "https://nsfdc.nic.in/en/educational-loan-scheme",
    content: "NSFDC's Educational Loan Scheme provides loans up to ₹20 Lakh for full-time professional or technical courses in India and up to ₹40 Lakh for approved courses abroad. Beneficiary family income must be within ₹5.00 Lakh per annum. Interest rate is 4% p.a. for female students and 4.5% to 6% p.a. for male students. Repayment begins after a moratorium period equal to the course duration plus 1 year, or 6 months after securing employment, whichever is earlier."
  },
  {
    id: "chunk-dpr-requirements",
    schemeId: "general",
    title: "Detailed Project Report (DPR) Guidelines for Loans Above ₹10 Lakh",
    source: "MoSJE & SIDBI Technical Appraisal Norms",
    sourceUrl: "https://standupmitra.in/Home/DPRNorms",
    content: "For credit facilities exceeding ₹10 Lakh (including Stand-Up India, CEGSSC, and VCF-SC), a Detailed Project Report (DPR) is mandatory. The DPR must include: 1. Executive Summary & Promoter Background; 2. Market Potential & Competitive Analysis; 3. Technical Feasibility & Plant/Machinery quotations with supplier names; 4. Land/Building cost or lease agreement; 5. Working capital cycle calculation; 6. Projected Balance Sheet, Profit & Loss Statement, and Debt Service Coverage Ratio (DSCR > 1.5) over the loan tenor."
  },
  {
    id: "chunk-caste-certificate-validity",
    schemeId: "general",
    title: "Caste Certificate Statutory Verification Norms for SC Schemes",
    source: "Ministry of Home Affairs / MoSJE Circular No. 35/1/72-RU (SCT.V)",
    sourceUrl: "https://socialjustice.gov.in",
    content: "To qualify for Scheduled Caste (SC) financial assistance schemes under MoSJE, the caste certificate must be issued by a competent revenue authority: District Magistrate / Additional District Magistrate / Collector / Sub-Divisional Officer (SDO) / Tehsildar of the applicant's permanent residence state. Online digitally signed certificates issued through State e-District / DigiLocker portals with a verifiable QR code or barcode are accepted across all SCAs and banks."
  }
];

class RagKnowledgeEngine {
  constructor(chunks) {
    this.chunks = chunks || SCHEME_KNOWLEDGE_CHUNKS;
  }

  /**
   * Simple TF-IDF / keyword overlap retrieval
   * @param {string} query - User doubt or question
   * @param {string} schemeFilter - Optional scheme ID to restrict search
   * @param {number} topK - Number of chunks to retrieve
   * @returns {Array} Top relevant chunks with relevance scores
   */
  retrieve(query, schemeFilter = null, topK = 3) {
    if (!query || typeof query !== "string") return [];
    
    // Normalize and tokenize query
    const terms = query
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter(w => w.length > 2 && !["the", "and", "for", "with", "what", "how", "can", "are", "you"].includes(w));

    if (terms.length === 0) return this.chunks.slice(0, topK);

    const scored = this.chunks.map(chunk => {
      // Scheme filter bias
      let schemeBonus = 0;
      if (schemeFilter && (chunk.schemeId === schemeFilter || chunk.schemeId === "general")) {
        schemeBonus = 2.0;
      }

      const text = (chunk.title + " " + chunk.content + " " + chunk.source).toLowerCase();
      let termMatches = 0;

      terms.forEach(term => {
        const regex = new RegExp(`\\b${term}`, "g");
        const matches = text.match(regex);
        if (matches) {
          termMatches += matches.length;
        }
      });

      const score = (termMatches / (terms.length + 1)) + schemeBonus;
      return { chunk, score };
    });

    // Sort by score descending and return top K
    return scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, topK)
      .map(item => item.chunk);
  }

  /**
   * Generates a grounded context block for Gemini API prompt
   */
  buildContextPrompt(query, schemeFilter = null) {
    const retrieved = this.retrieve(query, schemeFilter, 3);
    if (retrieved.length === 0) return "";

    let context = "--- OFFICIAL GOVERNMENT SCHEME CIRCULARS & GUIDELINES (GROUND TRUTH) ---\n";
    retrieved.forEach((c, i) => {
      context += `[Source ${i + 1}: ${c.title} | ${c.source} | URL: ${c.sourceUrl}]\n`;
      context += `${c.content}\n\n`;
    });
    context += "--- END OFFICIAL GUIDELINES ---\n";
    return context;
  }
}

if (typeof window !== "undefined") {
  window.RAG_ENGINE = new RagKnowledgeEngine(SCHEME_KNOWLEDGE_CHUNKS);
  window.SCHEME_KNOWLEDGE_CHUNKS = SCHEME_KNOWLEDGE_CHUNKS;
}

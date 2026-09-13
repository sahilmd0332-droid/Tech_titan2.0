/**
 * Setu 2.0 - Statutory Scheme Eligibility Engine
 * SIH 2026 Problem Statement 92 (Ministry of Social Justice & Empowerment)
 * 
 * Determines real statutory eligibility for Government of India schemes.
 * Evaluates category, purpose, venture type, gender priority, income limits, and funding quantum (capped at ₹1 Crore).
 * No percentage match scores — outputs whether a scheme is Available for the user.
 */

class SchemeMatchingEngine {
  constructor(schemes) {
    this.schemes = schemes || [];
  }

  /**
   * Evaluates all schemes against a user profile and returns all available schemes
   * @param {Object} profile - User input attributes
   * @returns {Array} Array of evaluated schemes marked as isAvailable
   */
  evaluateAll(profile) {
    const evaluated = this.schemes.map(scheme => this.evaluateScheme(scheme, profile));
    
    // Sort available schemes: first by lower interest rate, then by higher funding
    return evaluated.sort((a, b) => {
      if (a.isAvailable !== b.isAvailable) {
        return a.isAvailable ? -1 : 1;
      }
      return a.scheme.rate - b.scheme.rate;
    });
  }

  /**
   * Evaluates a single scheme against user profile
   */
  evaluateScheme(scheme, profile) {
    // Project cost capped at ₹1,00,00,000 (₹1 Crore)
    const rawCost = parseFloat(profile.cost) || 0;
    const cost = Math.min(10000000, rawCost); 
    const income = parseFloat(profile.income) || 0;
    const userCategory = (profile.category || "SC").toUpperCase();
    const userGender = (profile.gender || "male").toLowerCase();
    const userPurpose = profile.purpose || "business";
    const userVenture = profile.ventureType || "greenfield";
    const userMarginPct = parseFloat(profile.marginPct) || 10;
    const isPwD = !!profile.isPwD;

    const reasons = [];
    const deficiencies = [];
    let isEligible = true;

    // 1. Category Check
    if (scheme.allowedCategories && !scheme.allowedCategories.includes(userCategory)) {
      isEligible = false;
      deficiencies.push(`Reserved for ${scheme.allowedCategories.join(", ")} category (your profile: ${userCategory}).`);
    } else {
      reasons.push(`Statutory match for ${userCategory} category under Ministry guidelines.`);
    }

    // 2. Gender Priority / Gate
    if (scheme.allowedGenders && !scheme.allowedGenders.includes(userGender)) {
      isEligible = false;
      deficiencies.push(`Reserved exclusively for ${scheme.allowedGenders.join(", ")} beneficiaries.`);
    } else if (userGender === "female" && (scheme.id === "msy" || scheme.id === "nbcfdc-swarnima" || scheme.id === "tread")) {
      reasons.push("Concessional interest subvention applicable for women entrepreneurs.");
    }

    // 3. Purpose Check (Business vs Education)
    if (scheme.purpose && !scheme.purpose.includes(userPurpose)) {
      isEligible = false;
      deficiencies.push(`Designed for ${scheme.purpose.join("/")} (your request: ${userPurpose}).`);
    } else {
      reasons.push(`Matches your funding purpose of ${userPurpose}.`);
    }

    // 4. Venture Type Check (Greenfield vs Brownfield)
    if (scheme.ventureType && !scheme.ventureType.includes(userVenture) && userPurpose === "business") {
      isEligible = false;
      deficiencies.push(`Requires a ${scheme.ventureType.join(" or ")} enterprise.`);
    }

    // 5. Income Ceiling Check
    if (scheme.incomeCeiling && income > scheme.incomeCeiling) {
      isEligible = false;
      deficiencies.push(`Annual family income (₹${income.toLocaleString('en-IN')}) exceeds statutory ceiling of ₹${scheme.incomeCeiling.toLocaleString('en-IN')}.`);
    } else if (scheme.incomeCeiling) {
      reasons.push(`Annual family income complies with the ceiling of ₹${scheme.incomeCeiling.toLocaleString('en-IN')}.`);
    } else if (scheme.noIncomeCeiling) {
      reasons.push("No family income ceiling applies to this scheme.");
    }

    // 6. Cost Alignment
    if (cost < scheme.minCost) {
      // Cost is lower than minimum floor
      if (cost < scheme.minCost * 0.5) {
        isEligible = false;
        deficiencies.push(`Project cost is below minimum scheme threshold of ₹${scheme.minCost.toLocaleString('en-IN')}.`);
      } else {
        reasons.push(`Minimum project cost threshold is ₹${scheme.minCost.toLocaleString('en-IN')}.`);
      }
    } else {
      const financedCap = Math.min(cost, scheme.maxCost);
      reasons.push(`Eligible for funding up to ₹${financedCap.toLocaleString('en-IN')}.`);
    }

    // Calculate Loan and Government Subsidy Amounts
    let calculatedLoan = 0;
    let govtSubsidyAmount = 0;

    if (scheme.id.startsWith("pmegp")) {
      const subsidyPct = (profile.areaType === "rural") ? (scheme.subsidyPctRural || 0.35) : (scheme.subsidyPctUrban || 0.25);
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.round(effectiveCost * subsidyPct);
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.id === "pmfme") {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.min(1000000, Math.round(effectiveCost * 0.35));
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.id === "pm-kusum") {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.round(effectiveCost * 0.60); // 60% Govt Subsidy
      calculatedLoan = Math.round(effectiveCost * 0.30); // 30% Bank Loan
    } else if (scheme.id === "acabc" && (userCategory === "SC" || userCategory === "ST" || userGender === "female")) {
      const effectiveCost = Math.min(cost, scheme.maxCost);
      govtSubsidyAmount = Math.round(effectiveCost * 0.44); // 44% Subsidy
      calculatedLoan = Math.round(effectiveCost - govtSubsidyAmount);
    } else if (scheme.isEquity || scheme.rate === 0) {
      calculatedLoan = Math.min(cost, scheme.maxCost);
    } else {
      calculatedLoan = Math.min(cost * (scheme.coverPct || 0.90), (scheme.maxCost || cost));
    }

    // Calculate Monthly EMI
    const rate = scheme.rate || 0;
    const tenureYears = scheme.tenureYears || 5;
    const moratorium = scheme.moratoriumMonths || 0;
    const months = Math.max(1, (tenureYears * 12) - moratorium);
    let emi = 0;

    if (rate === 0 || scheme.isEquity) {
      emi = 0; // 0% interest or grant
    } else {
      const r = (rate / 12) / 100;
      const factor = Math.pow(1 + r, months);
      emi = (r > 0 && factor > 1) 
        ? Math.round((calculatedLoan * r * factor) / (factor - 1)) 
        : Math.round(calculatedLoan / months);
    }

    return {
      scheme,
      isAvailable: isEligible,
      reasons,
      deficiencies,
      calculatedLoan,
      govtSubsidyAmount,
      indicativeEmi: emi
    };
  }
}

if (typeof window !== "undefined") {
  window.SchemeMatchingEngine = SchemeMatchingEngine;
}

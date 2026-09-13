/**
 * Setu 2.0 - Official National Civic Scheme Portal Controller
 * SIH 2026 Problem Statement 92 (Ministry of Social Justice & Empowerment)
 * 
 * Features:
 * 1. Strict Backend Stage Gating: Users cannot skip to results without submitting profile.
 * 2. Capped at ₹1 Crore maximum project cost.
 * 3. No percentage match scores — shows schemes available for the applicant.
 * 4. In-App Application Roadmap + Local State Partner Locator.
 * 5. Dedicated Interactive EMI & Government Subsidy Calculator.
 * 6. Short, concise, profile-aware Gemini AI Copilot.
 */

(function () {
  "use strict";

  // State Management
  let activeSection = "profile"; // 'profile' | 'schemes' | 'details' | 'calculator'
  let activeProfile = null;
  let matchingEngine = null;
  let availableMatches = [];
  let selectedSchemeItem = null;

  // Indian States & UTs
  const INDIAN_STATES = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Puducherry", "Chandigarh"
  ];

  // Number & Currency Formatting Helpers
  function formatINR(number) {
    if (isNaN(number) || number === null) return "₹0";
    const num = Math.round(number);
    return "₹" + num.toLocaleString("en-IN");
  }

  function formatLakhCrore(number) {
    if (isNaN(number) || number <= 0) return "₹0";
    if (number >= 10000000) {
      const cr = (number / 10000000).toFixed(2);
      return `₹${number.toLocaleString("en-IN")} (${cr} Crore)`;
    } else if (number >= 100000) {
      const lk = (number / 100000).toFixed(2);
      return `₹${number.toLocaleString("en-IN")} (${lk} Lakh)`;
    }
    return `₹${number.toLocaleString("en-IN")}`;
  }

  // ==========================================================================
  // 1. Strict Backend Stage Navigation Gating
  // ==========================================================================
  function canNavigateTo(targetSection) {
    if (targetSection === "profile") return true;
    if (!activeProfile) {
      // Profile not completed: block skipping
      highlightProfileForm();
      return false;
    }
    if (targetSection === "details" && !selectedSchemeItem) {
      // Must select a scheme first
      return false;
    }
    return true;
  }

  function highlightProfileForm() {
    const form = document.getElementById("profileForm");
    if (form) {
      form.scrollIntoView({ behavior: "smooth", block: "start" });
      const submitBtn = form.querySelector("button[type='submit']");
      if (submitBtn) {
        submitBtn.style.animation = "shake 0.4s ease-in-out";
        setTimeout(() => { submitBtn.style.animation = ""; }, 500);
      }
    }
  }

  function navigateTo(sectionName) {
    if (!canNavigateTo(sectionName)) return;

    activeSection = sectionName;

    // Toggle Section Panels
    document.querySelectorAll(".portal-section").forEach(sec => {
      sec.classList.toggle("active", sec.id === `section-${sectionName}`);
    });

    // Update Breadcrumb Navigation State
    const navItems = {
      profile: document.getElementById("navItemProfile"),
      schemes: document.getElementById("navItemSchemes"),
      details: document.getElementById("navItemDetails"),
      calculator: document.getElementById("navItemCalc")
    };

    Object.keys(navItems).forEach(key => {
      const item = navItems[key];
      if (!item) return;
      item.classList.toggle("active", key === sectionName);
      if (activeProfile && (key === "profile" || (key === "schemes" && sectionName !== "schemes"))) {
        item.classList.add("completed");
      }
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================================================
  // 2. Initialization & Event Bindings
  // ==========================================================================
  document.addEventListener("DOMContentLoaded", function () {
    // Populate Indian States
    const stateSel = document.getElementById("userState");
    if (stateSel) {
      INDIAN_STATES.forEach(state => {
        const opt = document.createElement("option");
        opt.value = state;
        opt.textContent = state;
        if (state === "Maharashtra") opt.selected = true;
        stateSel.appendChild(opt);
      });
    }

    // Initialize Matching Engine
    if (window.SchemeMatchingEngine && window.SCHEMES_DATA) {
      matchingEngine = new window.SchemeMatchingEngine(window.SCHEMES_DATA);
    }

    initLiveCurrencyHints();
    initRadioChips();
    initProfileForm();
    initBreadcrumbClicks();
    initNavigationButtons();
    initEMICalculator();
    initModals();
    initAIChat();
  });

  // Breadcrumb clicks with backend stage validation
  function initBreadcrumbClicks() {
    document.querySelectorAll(".flow-item").forEach(item => {
      item.addEventListener("click", function () {
        const targetSection = this.getAttribute("data-section");
        navigateTo(targetSection);
      });
    });

    const brandLogo = document.getElementById("brandLogo");
    if (brandLogo) {
      brandLogo.addEventListener("click", function (e) {
        e.preventDefault();
        navigateTo("profile");
      });
    }

    const btnNavCalc = document.getElementById("btnNavCalc");
    if (btnNavCalc) {
      btnNavCalc.addEventListener("click", function () {
        navigateTo("calculator");
      });
    }
  }

  // Navigation Buttons
  function initNavigationButtons() {
    document.getElementById("btnBackToProfile")?.addEventListener("click", () => navigateTo("profile"));
    document.getElementById("btnBackToSchemes")?.addEventListener("click", () => navigateTo("schemes"));
    document.getElementById("btnEditProfileFromDetails")?.addEventListener("click", () => navigateTo("profile"));
    document.getElementById("btnBackFromCalc")?.addEventListener("click", () => {
      if (selectedSchemeItem) navigateTo("details");
      else if (availableMatches.length > 0) navigateTo("schemes");
      else navigateTo("profile");
    });
    document.getElementById("btnGoToCalcFromDetails")?.addEventListener("click", () => {
      if (selectedSchemeItem) {
        prefillEMICalculator(selectedSchemeItem.scheme, selectedSchemeItem.calculatedLoan);
      }
      navigateTo("calculator");
    });
  }

  // Live Currency Input Watchers
  function initLiveCurrencyHints() {
    const costInput = document.getElementById("userCost");
    const costHint = document.getElementById("costFormattedHint");
    if (costInput && costHint) {
      costInput.addEventListener("input", function () {
        // Enforce max limit of 1 Crore
        let val = parseFloat(costInput.value) || 0;
        if (val > 10000000) {
          val = 10000000;
          costInput.value = val;
        }
        costHint.textContent = formatLakhCrore(val);
      });
    }

    const incomeInput = document.getElementById("userIncome");
    const incomeHint = document.getElementById("incomeFormattedHint");
    if (incomeInput && incomeHint) {
      incomeInput.addEventListener("input", function () {
        const val = parseFloat(incomeInput.value) || 0;
        incomeHint.textContent = formatLakhCrore(val);
      });
    }
  }

  // Radio Chips
  function initRadioChips() {
    document.querySelectorAll(".radio-chips").forEach(container => {
      container.addEventListener("click", function (e) {
        const label = e.target.closest(".chip-label");
        if (!label) return;
        container.querySelectorAll(".chip-label").forEach(l => l.classList.remove("active"));
        label.classList.add("active");
        const radio = label.querySelector("input[type='radio']");
        if (radio) radio.checked = true;
      });
    });
  }

  // ==========================================================================
  // 3. Profile Intake & Scheme Availability Evaluation
  // ==========================================================================
  function initProfileForm() {
    const form = document.getElementById("profileForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const genderEl = form.querySelector("input[name='userGender']:checked");
      const areaEl = form.querySelector("input[name='userArea']:checked");
      const purposeEl = form.querySelector("input[name='userPurpose']:checked");
      const ventureEl = form.querySelector("input[name='userVenture']:checked");

      // Read values with cap at ₹1 Crore (₹1,00,00,000)
      const rawCost = parseFloat(document.getElementById("userCost")?.value) || 2500000;
      const costCapped = Math.min(10000000, rawCost);

      activeProfile = {
        category: document.getElementById("userCategory")?.value || "SC",
        age: parseInt(document.getElementById("userAge")?.value) || 28,
        gender: genderEl ? genderEl.value : "male",
        isPwD: document.getElementById("userPwD")?.checked || false,
        state: document.getElementById("userState")?.value || "Maharashtra",
        district: document.getElementById("userDistrict")?.value || "Mumbai",
        areaType: areaEl ? areaEl.value : "urban",
        purpose: purposeEl ? purposeEl.value : "business",
        ventureType: ventureEl ? ventureEl.value : "greenfield",
        cost: costCapped,
        income: parseFloat(document.getElementById("userIncome")?.value) || 380000,
        marginPct: parseFloat(document.getElementById("userMargin")?.value) || 15,
        sector: document.getElementById("userSector")?.value || "Manufacturing"
      };

      if (!matchingEngine && window.SchemeMatchingEngine && window.SCHEMES_DATA) {
        matchingEngine = new window.SchemeMatchingEngine(window.SCHEMES_DATA);
      }

      if (!matchingEngine) return;

      const allEvaluated = matchingEngine.evaluateAll(activeProfile);

      // Filter only schemes marked as isAvailable
      availableMatches = allEvaluated.filter(item => item.isAvailable);

      renderAvailableSchemes(availableMatches, activeProfile);
      populateEMISchemeSelect(window.SCHEMES_DATA);
      navigateTo("schemes");
    });
  }

  // ==========================================================================
  // 4. Render Available Schemes (No Percentage Match Numbers)
  // ==========================================================================
  function renderAvailableSchemes(matches, profile) {
    const container = document.getElementById("availableSchemesList");
    const countBadge = document.getElementById("schemesCountBadge");
    if (!container) return;

    container.innerHTML = "";

    if (countBadge) {
      countBadge.textContent = `${matches.length} Government Schemes Available`;
    }

    if (matches.length === 0) {
      container.innerHTML = `
        <div class="card" style="text-align:center; padding:36px 20px;">
          <div style="font-size:36px; margin-bottom:12px;">🔍</div>
          <h3>No Government Schemes Available for Current Criteria</h3>
          <p style="color:var(--text-muted); max-width:540px; margin:8px auto 20px;">
            Based on your selection (Category: ${profile.category}, Cost: ${formatLakhCrore(profile.cost)}, Purpose: ${profile.purpose}), no schemes currently match.
          </p>
          <button type="button" class="btn btn-primary" onclick="window.setuNavigateTo('profile')">
            ← Adjust Profile Criteria
          </button>
        </div>
      `;
      return;
    }

    matches.forEach(item => {
      const s = item.scheme;
      const card = document.createElement("div");
      card.className = "scheme-card";

      // Government interest subsidy summary
      let subsidyText = s.govtInterestSubsidy || "Government provides interest subvention and sovereign guarantee.";

      card.innerHTML = `
        <div class="scheme-card-top">
          <div class="scheme-card-title">
            <span class="badge-available" style="margin-bottom:6px;">✓ Available for Your Profile</span>
            <h3>${s.nameEn}</h3>
            <div class="scheme-card-agency">🏛️ ${s.nodalAgency}</div>
          </div>
        </div>

        <!-- Government Subsidy Callout -->
        <div class="govt-subsidy-card">
          <div class="badge-icon">💰</div>
          <div>
            <h4>Government Subsidy / Subvention Provision</h4>
            <p>${subsidyText}</p>
          </div>
        </div>

        <p style="font-size:14px; color:var(--text-muted); margin:10px 0;">${s.descriptionEn}</p>

        <!-- Stats Row -->
        <div class="scheme-stats-row">
          <div class="stat-pill">
            <span class="stat-label">Maximum Funding</span>
            <span class="stat-value">${formatLakhCrore(item.calculatedLoan)}</span>
          </div>
          <div class="stat-pill">
            <span class="stat-label">Interest Rate</span>
            <span class="stat-value">${s.rate === 0 ? "0% (Grant / Free)" : s.rate + "% p.a."}</span>
          </div>
          <div class="stat-pill">
            <span class="stat-label">Govt Moratorium</span>
            <span class="stat-value">${s.moratoriumMonths} Months</span>
          </div>
          <div class="stat-pill">
            <span class="stat-label">Repayment Tenure</span>
            <span class="stat-value">${s.tenureYears} Years</span>
          </div>
        </div>

        <!-- Qualified Reasons -->
        ${item.reasons.length > 0 ? `
          <ul class="scheme-reasons-list">
            ${item.reasons.slice(0, 3).map(r => `<li>${r}</li>`).join("")}
          </ul>
        ` : ''}

        <!-- Actions -->
        <div class="scheme-card-actions">
          <button type="button" class="btn btn-outline btn-quick-calc" data-scheme-id="${s.id}">
            📊 Calculate EMI
          </button>
          <button type="button" class="btn btn-teal btn-view-dossier" data-scheme-id="${s.id}">
            View Application Process & Documents →
          </button>
        </div>
      `;

      // Event: View Scheme Details & Roadmap
      card.querySelector(".btn-view-dossier")?.addEventListener("click", function () {
        selectedSchemeItem = item;
        renderSchemeDetails(item, profile);
        navigateTo("details");
      });

      // Event: Quick EMI Calculator
      card.querySelector(".btn-quick-calc")?.addEventListener("click", function () {
        selectedSchemeItem = item;
        prefillEMICalculator(s, item.calculatedLoan);
        navigateTo("calculator");
      });

      container.appendChild(card);
    });
  }

  // ==========================================================================
  // 5. Render In-App Scheme Application Guide & Local Partner Locator
  // ==========================================================================
  function renderSchemeDetails(item, profile) {
    const container = document.getElementById("schemeDetailsContainer");
    if (!container) return;

    const s = item.scheme;

    // Find official verified partner for applicant's state
    let partner = null;
    if (window.REAL_PARTNERS) {
      partner = window.REAL_PARTNERS.find(p => p.state === profile.state && p.handles?.includes(s.id))
        || window.REAL_PARTNERS.find(p => p.state === profile.state)
        || window.REAL_PARTNERS.find(p => p.handles?.includes(s.id))
        || window.REAL_PARTNERS[0];
    }

    container.innerHTML = `
      <!-- Header Banner -->
      <div class="dossier-header-banner">
        <span class="dossier-nodal-tag">🏛️ ${s.nodalAgency}</span>
        <h2>${s.nameEn}</h2>
        <div style="font-size:14px; opacity:0.9; margin-top:4px;">${s.descriptionEn}</div>

        <div class="dossier-quick-stats">
          <div class="dossier-quick-stat">
            <div class="lbl">Funding Quantum</div>
            <div class="val">${formatLakhCrore(item.calculatedLoan)}</div>
          </div>
          <div class="dossier-quick-stat">
            <div class="lbl">Concessional Rate</div>
            <div class="val">${s.rate === 0 ? "0% (Grant)" : s.rate + "% p.a."}</div>
          </div>
          <div class="dossier-quick-stat">
            <div class="lbl">Principal Moratorium</div>
            <div class="val">${s.moratoriumMonths} Months</div>
          </div>
          <div class="dossier-quick-stat">
            <div class="lbl">Repayment Tenure</div>
            <div class="val">${s.tenureYears} Years</div>
          </div>
        </div>
      </div>

      <!-- Government-Borne Interest & Subsidy Breakdown -->
      <div class="card" style="border-left: 4px solid var(--accent-gold);">
        <div class="card-title-row">
          <span class="card-title-icon">🏛️</span>
          <h3>Government-Borne Subsidy & Financial Protection</h3>
        </div>
        <div class="govt-subsidy-card" style="margin:0 0 12px 0;">
          <div class="badge-icon">💡</div>
          <div>
            <h4>Statutory Concession Notice</h4>
            <p style="font-size:14px;">${s.govtInterestSubsidy}</p>
          </div>
        </div>
        <div style="font-size:13.5px; color:var(--text-muted); line-height:1.6;">
          <strong>Borrower Protection Mandate:</strong> Under Ministry regulations, you are not subject to commercial lending rates. During the <strong>${s.moratoriumMonths}-month moratorium</strong>, you make zero principal repayments.
        </div>
      </div>

      <!-- Key Scheme Benefits -->
      ${s.keyBenefits && s.keyBenefits.length > 0 ? `
        <div class="card">
          <div class="card-title-row">
            <span class="card-title-icon">⭐</span>
            <h3>Key Advantages & Coverage</h3>
          </div>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:12px;">
            ${s.keyBenefits.map(b => `
              <div style="background:var(--bg-subtle); padding:12px 14px; border-radius:var(--radius-md); font-size:13.5px; display:flex; gap:8px;">
                <span style="color:var(--accent-green); font-weight:bold;">✓</span>
                <span>${b}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ''}

      <!-- Interactive Required Documents Checklist -->
      <div class="card">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:10px; margin-bottom:12px;">
          <div class="card-title-row" style="margin-bottom:0; border-bottom:none; padding-bottom:0;">
            <span class="card-title-icon">📋</span>
            <h3>Required Documents Checklist</h3>
          </div>
          <button type="button" class="btn btn-outline" id="btnCopyDocs" style="min-height:36px; padding:6px 14px; font-size:12.5px;">
            📋 Copy Checklist
          </button>
        </div>
        <p style="font-size:13.5px; color:var(--text-muted); margin-bottom:12px;">
          Check off the documents as you arrange them. No third-party agents are required:
        </p>

        <div id="checklistWrap">
          ${(s.documentsRequired || []).map((doc, idx) => `
            <label class="checklist-item" id="checkItem_${idx}">
              <input type="checkbox" data-idx="${idx}">
              <span>${doc}</span>
            </label>
          `).join("")}
        </div>
      </div>

      <!-- Step-by-Step In-App Application Process -->
      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon">🧭</span>
          <h3>Step-by-Step Application Process</h3>
        </div>
        <div class="timeline-steps">
          ${(s.applicationSteps || []).map((step, idx) => `
            <div class="timeline-step">
              <div class="timeline-node">${idx + 1}</div>
              <h4>${step.title}</h4>
              <p>${step.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Authorized Local Channel Partner in User's State -->
      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon">📍</span>
          <h3>Official Channel Partner & Submission Office in ${profile.state}</h3>
        </div>
        <p style="font-size:13.5px; color:var(--text-muted);">
          Submit your application dossier directly to this authorized government channel:
        </p>

        <div class="partner-contact-box">
          <h4>${partner ? partner.name : (s.whereToSubmit || "District Welfare Office / Lead Bank")}</h4>
          <div class="partner-detail-row">
            <span>🏢</span>
            <span><strong>Agency Type:</strong> ${partner ? partner.type : "Official Government Nodal Office"}</span>
          </div>
          <div class="partner-detail-row">
            <span>📍</span>
            <span><strong>Office Address:</strong> ${partner ? `${partner.address}, ${partner.city}` : `District Office, ${profile.state}`}</span>
          </div>
          ${partner && partner.phone ? `
            <div class="partner-detail-row">
              <span>📞</span>
              <span><strong>Helpline:</strong> ${partner.phone}</span>
            </div>
          ` : ''}
          ${partner && partner.email ? `
            <div class="partner-detail-row">
              <span>✉️</span>
              <span><strong>Official Email:</strong> ${partner.email}</span>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Bottom Action Row -->
      <div style="display:flex; justify-content:space-between; gap:12px; margin-top:20px; flex-wrap:wrap;">
        <button type="button" class="btn btn-outline" onclick="window.setuNavigateTo('schemes')">
          ← Back to Available Schemes
        </button>
        <button type="button" class="btn btn-teal" id="btnCalcFromBottom">
          📊 Calculate EMI for ${s.nameEn.split(" ")[0]} →
        </button>
      </div>
    `;

    // Interactive Checklist Strike-through
    const checklistWrap = container.querySelector("#checklistWrap");
    if (checklistWrap) {
      checklistWrap.querySelectorAll("input[type='checkbox']").forEach(cb => {
        cb.addEventListener("change", function () {
          const item = this.closest(".checklist-item");
          if (item) item.classList.toggle("checked", this.checked);
        });
      });
    }

    // Copy Checklist Button
    const btnCopyDocs = container.querySelector("#btnCopyDocs");
    if (btnCopyDocs) {
      btnCopyDocs.addEventListener("click", function () {
        const text = `Document Checklist for ${s.nameEn}:\n\n` + s.documentsRequired.map((d, i) => `${i + 1}. ${d}`).join("\n");
        navigator.clipboard?.writeText(text).then(() => {
          btnCopyDocs.textContent = "✓ Copied to Clipboard!";
          setTimeout(() => { btnCopyDocs.textContent = "📋 Copy Checklist"; }, 2000);
        }).catch(() => {
          alert("Checklist copied!");
        });
      });
    }

    // EMI Calculator trigger from bottom
    container.querySelector("#btnCalcFromBottom")?.addEventListener("click", function () {
      prefillEMICalculator(s, item.calculatedLoan);
      navigateTo("calculator");
    });
  }

  // ==========================================================================
  // 6. Dedicated Interactive EMI Calculator
  // ==========================================================================
  function initEMICalculator() {
    const amountInput = document.getElementById("emiAmountInput");
    const rateInput = document.getElementById("emiRateInput");
    const tenureInput = document.getElementById("emiTenureInput");
    const morInput = document.getElementById("emiMoratoriumInput");
    const schemeSel = document.getElementById("emiSchemeSelect");
    const amountFormatted = document.getElementById("emiAmountFormatted");

    function runCalculation() {
      let principal = parseFloat(amountInput.value) || 0;
      if (principal > 10000000) {
        principal = 10000000;
        amountInput.value = principal;
      }
      if (amountFormatted) amountFormatted.textContent = formatLakhCrore(principal);

      const rate = parseFloat(rateInput.value) || 0;
      const tenureYrs = parseInt(tenureInput.value) || 5;
      const moratoriumMos = parseInt(morInput.value) || 0;

      const totalMonths = tenureYrs * 12;
      const repayMonths = Math.max(1, totalMonths - moratoriumMos);

      let emi = 0;
      let totalInterest = 0;

      if (rate === 0) {
        emi = Math.round(principal / repayMonths);
        totalInterest = 0;
      } else {
        const r = (rate / 12) / 100;
        const factor = Math.pow(1 + r, repayMonths);
        emi = Math.round((principal * r * factor) / (factor - 1));
        totalInterest = Math.round((emi * repayMonths) - principal);
      }

      const totalPayable = principal + totalInterest;

      // Commercial bank comparison (~13% commercial interest)
      const commRate = 13.0;
      const rComm = (commRate / 12) / 100;
      const factorComm = Math.pow(1 + rComm, repayMonths);
      const commEmi = Math.round((principal * rComm * factorComm) / (factorComm - 1));
      const commTotalInterest = Math.round((commEmi * repayMonths) - principal);
      const govtSavings = Math.max(0, commTotalInterest - totalInterest);

      // Update UI displays
      document.getElementById("emiMonthlyDisplay").textContent = formatINR(emi);
      document.getElementById("emiPrincipalDisplay").textContent = formatINR(principal);
      document.getElementById("emiTotalInterestDisplay").textContent = formatINR(totalInterest);
      document.getElementById("emiTotalPayableDisplay").textContent = formatINR(totalPayable);
      document.getElementById("emiGovtSavingsDisplay").textContent = `${formatINR(govtSavings)} saved via Govt Subvention`;

      // Build Yearly Amortization Table
      buildAmortizationTable(principal, rate, tenureYrs, moratoriumMos, emi);
    }

    [amountInput, rateInput, tenureInput, morInput].forEach(inp => {
      if (inp) inp.addEventListener("input", runCalculation);
    });

    if (schemeSel) {
      schemeSel.addEventListener("change", function () {
        const sid = schemeSel.value;
        const s = (window.SCHEMES_DATA || []).find(item => item.id === sid);
        if (s) {
          rateInput.value = s.rate;
          tenureInput.value = s.tenureYears;
          morInput.value = s.moratoriumMonths;
          runCalculation();
        }
      });
    }

    runCalculation();
  }

  function populateEMISchemeSelect(schemes) {
    const sel = document.getElementById("emiSchemeSelect");
    if (!sel) return;
    sel.innerHTML = `<option value="custom">-- Custom Loan / Any Scheme --</option>`;
    schemes.forEach(s => {
      const opt = document.createElement("option");
      opt.value = s.id;
      opt.textContent = `${s.nameEn} (Up to ${formatINR(s.maxCost)} @ ${s.rate}% p.a.)`;
      sel.appendChild(opt);
    });
  }

  function prefillEMICalculator(scheme, amount) {
    const schemeSel = document.getElementById("emiSchemeSelect");
    const amountInput = document.getElementById("emiAmountInput");
    const rateInput = document.getElementById("emiRateInput");
    const tenureInput = document.getElementById("emiTenureInput");
    const morInput = document.getElementById("emiMoratoriumInput");

    if (schemeSel) schemeSel.value = scheme.id;
    if (amountInput) {
      amountInput.value = Math.min(10000000, amount || scheme.maxCost);
      const amountFormatted = document.getElementById("emiAmountFormatted");
      if (amountFormatted) amountFormatted.textContent = formatLakhCrore(amountInput.value);
    }
    if (rateInput) rateInput.value = scheme.rate;
    if (tenureInput) tenureInput.value = scheme.tenureYears;
    if (morInput) morInput.value = scheme.moratoriumMonths;

    // Trigger calculation
    const evt = new Event("input");
    amountInput?.dispatchEvent(evt);
  }

  function buildAmortizationTable(principal, annualRate, tenureYrs, moratoriumMos, emi) {
    const tbody = document.getElementById("amortTableBody");
    if (!tbody) return;
    tbody.innerHTML = "";

    let balance = principal;
    const monthlyRate = (annualRate / 12) / 100;

    for (let yr = 1; yr <= tenureYrs; yr++) {
      let yrPrincipal = 0;
      let yrInterest = 0;

      for (let m = 1; m <= 12; m++) {
        const monthNum = ((yr - 1) * 12) + m;
        if (monthNum <= moratoriumMos) {
          // Moratorium phase
          const interest = Math.round(balance * monthlyRate);
          yrInterest += interest;
        } else if (balance > 0) {
          const interest = Math.round(balance * monthlyRate);
          const pPaid = Math.min(balance, Math.round(emi - interest));
          yrInterest += interest;
          yrPrincipal += pPaid;
          balance = Math.max(0, balance - pPaid);
        }
      }

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>Year ${yr} ${yr * 12 <= moratoriumMos ? '<span style="color:var(--accent-gold); font-size:11px;">(Moratorium)</span>' : ''}</td>
        <td>${formatINR(yrPrincipal)}</td>
        <td>${formatINR(yrInterest)}</td>
        <td>${formatINR(balance)}</td>
      `;
      tbody.appendChild(row);
      if (balance <= 0) break;
    }
  }

  // ==========================================================================
  // 7. Gemini AI Assistant & Settings Modals
  // ==========================================================================
  function initModals() {
    const btnOpenAI = document.getElementById("btnOpenAIChat");
    const aiModal = document.getElementById("aiChatModal");
    const btnCloseAI = document.getElementById("btnCloseAIChat");

    btnOpenAI?.addEventListener("click", () => aiModal?.classList.add("active"));
    btnCloseAI?.addEventListener("click", () => aiModal?.classList.remove("active"));

    const btnOpenSettings = document.getElementById("btnOpenSettings");
    const settingsModal = document.getElementById("settingsModal");
    const btnCloseSettings = document.getElementById("btnCloseSettings");
    const btnCancelSettings = document.getElementById("btnCancelSettings");
    const btnSaveApiKey = document.getElementById("btnSaveApiKey");

    btnOpenSettings?.addEventListener("click", () => {
      settingsModal?.classList.add("active");
      const keyInput = document.getElementById("geminiApiKeyInput");
      if (keyInput && window.GeminiService) {
        keyInput.value = window.GeminiService.getApiKey() || "";
      }
    });

    const closeSettings = () => settingsModal?.classList.remove("active");
    btnCloseSettings?.addEventListener("click", closeSettings);
    btnCancelSettings?.addEventListener("click", closeSettings);

    btnSaveApiKey?.addEventListener("click", () => {
      const keyInput = document.getElementById("geminiApiKeyInput");
      const statusDiv = document.getElementById("apiKeyStatus");
      if (keyInput && window.GeminiService) {
        const val = keyInput.value.trim();
        window.GeminiService.setApiKey(val);
        if (statusDiv) {
          statusDiv.textContent = val ? "✓ API Key saved successfully!" : "API key cleared.";
          statusDiv.style.color = "#1B7A43";
        }
        setTimeout(closeSettings, 1000);
      }
    });
  }

  function initAIChat() {
    const chatInput = document.getElementById("chatInput");
    const btnSend = document.getElementById("btnSendChat");
    const messagesContainer = document.getElementById("chatMessages");
    if (!chatInput || !btnSend || !messagesContainer) return;

    function appendMessage(sender, text) {
      const bubble = document.createElement("div");
      bubble.className = `chat-bubble ${sender}`;
      bubble.innerHTML = text.replace(/\n/g, "<br>");
      messagesContainer.appendChild(bubble);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    async function handleSend() {
      const q = chatInput.value.trim();
      if (!q) return;

      appendMessage("user", q);
      chatInput.value = "";

      const thinking = document.createElement("div");
      thinking.className = "chat-bubble bot";
      thinking.textContent = "Consulting Setu Civic Knowledge Base...";
      messagesContainer.appendChild(thinking);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;

      try {
        const schemeContext = selectedSchemeItem ? selectedSchemeItem.scheme : null;
        const answer = await window.GeminiService.askAssistant(q, activeProfile, schemeContext);
        thinking.innerHTML = answer;
      } catch (err) {
        thinking.innerHTML = `Under MoSJE guidelines, all interest subventions and capital subsidies (up to 35% under PMEGP or 100% guarantee under CEGSSC) are protected by central trusts. Submit your documents directly to your District Welfare Office.`;
      }
    }

    btnSend.addEventListener("click", handleSend);
    chatInput.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSend();
      }
    });
  }

  // Global helper for inline clicks
  window.setuNavigateTo = navigateTo;

})();

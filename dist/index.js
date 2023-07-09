"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/utils/multistep.ts
  function setupMultistepForm() {
    const steps = Array.from(document.querySelectorAll('[mt-data-form="step"]'));
    const nextButtons = Array.from(document.querySelectorAll('[mt-data-form="next-btn"]'));
    const backButtons = Array.from(document.querySelectorAll('[mt-data-form="back-btn"]'));
    const editStep = document.querySelector('[mt-data-edit-step="1"]');
    let currentStepIndex = 0;
    function showStep(index) {
      steps.forEach((step, i) => {
        if (i === index) {
          step.style.display = "block";
        } else {
          step.style.display = "none";
        }
      });
    }
    function handleNextButtonClick() {
      if (currentStepIndex < steps.length - 1) {
        currentStepIndex++;
        showStep(currentStepIndex);
      }
    }
    function handleBackButtonClick() {
      if (currentStepIndex > 0) {
        currentStepIndex--;
        showStep(currentStepIndex);
      }
    }
    function handleEditStepClick() {
      currentStepIndex = 0;
      showStep(currentStepIndex);
    }
    nextButtons.forEach((button) => {
      button.addEventListener("click", handleNextButtonClick);
    });
    backButtons.forEach((button) => {
      button.addEventListener("click", handleBackButtonClick);
    });
    showStep(currentStepIndex);
    if (editStep) {
      editStep.addEventListener("click", handleEditStepClick);
    }
  }

  // src/index.ts
  setupMultistepForm();
  window.Webflow ||= [];
  window.Webflow.push(() => {
    const marketingBudget = document.querySelector(
      "input#Total-Marketing-Budget"
    );
    const marketingTeamSize = document.querySelector(
      "input#Marketing-Team-Size"
    );
    const paidSearchInput = document.querySelector("input#paid-search");
    const paidSocialInput = document.querySelector("input#paid-social");
    const affiliatesInput = document.querySelector("input#affiliates");
    const organicInput = document.querySelector("input#organic");
    const otherInput = document.querySelector("input#other");
    let lastCheckedInput = null;
    [paidSearchInput, paidSocialInput, affiliatesInput, organicInput].forEach((input) => {
      if (input !== null) {
        input.addEventListener("input", () => {
          let paidSearch = paidSearchInput !== null ? parseFloat(paidSearchInput.value) || 0 : 0;
          let paidSocial = paidSocialInput !== null ? parseFloat(paidSocialInput.value) || 0 : 0;
          let affiliates = affiliatesInput !== null ? parseFloat(affiliatesInput.value) || 0 : 0;
          let organic = organicInput !== null ? parseFloat(organicInput.value) || 0 : 0;
          paidSearch = Math.min(Math.max(paidSearch, 0), 100);
          paidSocial = Math.min(Math.max(paidSocial, 0), 100);
          affiliates = Math.min(Math.max(affiliates, 0), 100);
          organic = Math.min(Math.max(organic, 0), 100);
          const totalValue = paidSearch + paidSocial + affiliates + organic;
          if (totalValue > 100) {
            if (lastCheckedInput) {
              lastCheckedInput.value = "0";
              lastCheckedInput = null;
            }
            paidSearch = paidSearchInput !== null ? parseFloat(paidSearchInput.value) || 0 : 0;
            paidSocial = paidSocialInput !== null ? parseFloat(paidSocialInput.value) || 0 : 0;
            affiliates = affiliatesInput !== null ? parseFloat(affiliatesInput.value) || 0 : 0;
            organic = organicInput !== null ? parseFloat(organicInput.value) || 0 : 0;
            const remainingValue = 100 - (paidSearch + paidSocial + affiliates + organic);
            if (otherInput !== null) {
              otherInput.value = remainingValue.toString();
            }
          } else {
            const remainingValue = 100 - totalValue;
            if (otherInput !== null) {
              otherInput.value = remainingValue.toString();
            }
            lastCheckedInput = input;
          }
          if (paidSearchInput !== null) {
            paidSearchInput.value = paidSearch.toString();
          }
          if (paidSocialInput !== null) {
            paidSocialInput.value = paidSocial.toString();
          }
          if (affiliatesInput !== null) {
            affiliatesInput.value = affiliates.toString();
          }
          if (organicInput !== null) {
            organicInput.value = organic.toString();
          }
          const parentWrap = input.parentElement?.parentElement;
          const label = parentWrap?.querySelector(".is--calc-label");
          if (parseFloat(input.value) > 0) {
            label.style.color = "#DC56F2";
          } else {
            label.style.color = "#FFFFFF";
          }
        });
      }
    });
    window.addEventListener("load", () => {
      if (paidSearchInput !== null) {
        paidSearchInput.value = "0";
      }
      if (paidSocialInput !== null) {
        paidSocialInput.value = "0";
      }
      if (affiliatesInput !== null) {
        affiliatesInput.value = "0";
      }
      if (organicInput !== null) {
        organicInput.value = "0";
      }
      if (otherInput !== null) {
        otherInput.value = "0";
      }
      const labels = document.querySelectorAll(".is--calc-label");
      labels.forEach((label) => {
        label.style.color = "#FFFFFF";
      });
    });
    const paidSearchSaving = 0.12;
    const paidSocialSaving = 0.09;
    const organicSaving = 0.05;
    const affiliatesSaving = 0.08;
    const managementConsultingSaving = 0.025;
    const marketingAgencySaving = 0.012;
    const costOfUsMarketingEmployee = 142700;
    const hoursSaved = 0.28;
    const resultElement = document.querySelector(".final-value-text");
    const surveyToolsCheckbox = document.querySelector(
      'input[name="Survey-Tools"]'
    );
    const socialMonitoringCheckbox = document.querySelector(
      'input[name="Social-Monitoring-Tools"]'
    );
    const crossChannelAttributionCheckbox = document.querySelector(
      'input[name="Cross-Channel-Attribution-Tools"]'
    );
    const competitiveIntelligenceCheckbox = document.querySelector(
      'input[name="Competitive-Intelligence-Tools"]'
    );
    const marketingAgenciesCheckbox = document.querySelector(
      'input[name="Marketing-Agencies"]'
    );
    const managementConsultingCheckbox = document.querySelector(
      'input[name="Management-Consulting"]'
    );
    surveyToolsCheckbox?.addEventListener("change", function() {
      if (this) {
        this.checked ? "1" : "0";
      }
    });
    socialMonitoringCheckbox?.addEventListener("change", function() {
      this.checked ? "1" : "0";
    });
    crossChannelAttributionCheckbox?.addEventListener("change", function() {
      this.checked ? "1" : "0";
    });
    competitiveIntelligenceCheckbox?.addEventListener("change", function() {
      this.checked ? "1" : "0";
    });
    marketingAgenciesCheckbox?.addEventListener("change", function() {
      this.checked ? "1" : "0";
    });
    managementConsultingCheckbox?.addEventListener("change", function() {
      this.checked ? "1" : "0";
    });
    const inputs = document.querySelectorAll("input");
    function calculateValues() {
      const marketingBudgetValue = marketingBudget !== null ? parseFloat(marketingBudget.value) : 0;
      const marketingTeamSizeValue = marketingTeamSize !== null ? parseFloat(marketingTeamSize.value) : 0;
      const paidSearch = paidSearchInput !== null ? parseFloat(paidSearchInput.value) : 0;
      const paidSocial = paidSocialInput !== null ? parseFloat(paidSocialInput.value) : 0;
      const affiliates = affiliatesInput !== null ? parseFloat(affiliatesInput.value) : 0;
      const organic = organicInput !== null ? parseFloat(organicInput.value) : 0;
      const paidSearchPercentage = paidSearch / 100;
      const paidSocialPercentage = paidSocial / 100;
      const affiliatesPercentage = affiliates / 100;
      const organicPercentage = organic / 100;
      const surveyToolsCheckboxValue = surveyToolsCheckbox?.checked ? 1 : 0;
      const socialMonitoringCheckboxValue = socialMonitoringCheckbox?.checked ? 1 : 0;
      const crossChannelAttributionCheckboxValue = crossChannelAttributionCheckbox?.checked ? 1 : 0;
      const competitiveIntelligenceCheckboxValue = competitiveIntelligenceCheckbox?.checked ? 1 : 0;
      const marketingAgenciesCheckboxValue = marketingAgenciesCheckbox?.checked ? 1 : 0;
      const managementConsultingCheckboxValue = managementConsultingCheckbox?.checked ? 1 : 0;
      if (resultElement) {
        const result = marketingBudgetValue * paidSearchPercentage * paidSearchSaving + marketingBudgetValue * paidSocialPercentage * paidSocialSaving + marketingBudgetValue * affiliatesPercentage * affiliatesSaving + marketingBudgetValue * organicPercentage * organicSaving + competitiveIntelligenceCheckboxValue * 3e4 + surveyToolsCheckboxValue * 3e4 + socialMonitoringCheckboxValue * 3e4 + crossChannelAttributionCheckboxValue * 3e4 + managementConsultingCheckboxValue * managementConsultingSaving * marketingBudgetValue + marketingAgenciesCheckboxValue * marketingAgencySaving * marketingBudgetValue + marketingTeamSizeValue * hoursSaved * costOfUsMarketingEmployee;
        resultElement.textContent = result.toLocaleString();
      }
    }
    window.addEventListener("load", calculateValues);
    inputs.forEach(function(input) {
      input.addEventListener("input", calculateValues);
    });
  });
})();
//# sourceMappingURL=index.js.map

window.Webflow ||= [];
window.Webflow.push(() => {
  window.Webflow ||= [];
  window.Webflow.push(() => {
    // save all the inputs as variables
    const marketingBudget: HTMLInputElement | null = document.querySelector<HTMLInputElement>(
      'input#Total-Marketing-Budget'
    );

    const marketingTeamSize: HTMLInputElement | null = document.querySelector<HTMLInputElement>(
      'input#Marketing-Team-Size'
    );

    // Save all the inputs as variables
    const paidSearchInput: HTMLInputElement | null =
      document.querySelector<HTMLInputElement>('input#paid-search');

    const paidSocialInput: HTMLInputElement | null =
      document.querySelector<HTMLInputElement>('input#paid-social');
    const affiliatesInput: HTMLInputElement | null =
      document.querySelector<HTMLInputElement>('input#affiliates');
    const organicInput: HTMLInputElement | null =
      document.querySelector<HTMLInputElement>('input#organic');
    const otherInput: HTMLInputElement | null =
      document.querySelector<HTMLInputElement>('input#other');

    // Keep track of last checked input
    let lastCheckedInput: HTMLInputElement | null = null;

    // Add event listener to update otherInput value, check validity, and restrict input values
    [paidSearchInput, paidSocialInput, affiliatesInput, organicInput].forEach((input) => {
      if (input !== null) {
        input.addEventListener('input', () => {
          let paidSearch: number =
            paidSearchInput !== null ? parseFloat(paidSearchInput.value) || 0 : 0;
          let paidSocial: number =
            paidSocialInput !== null ? parseFloat(paidSocialInput.value) || 0 : 0;
          let affiliates: number =
            affiliatesInput !== null ? parseFloat(affiliatesInput.value) || 0 : 0;
          let organic: number = organicInput !== null ? parseFloat(organicInput.value) || 0 : 0;

          // Restrict input values to be within 0 and 100
          paidSearch = Math.min(Math.max(paidSearch, 0), 100);
          paidSocial = Math.min(Math.max(paidSocial, 0), 100);
          affiliates = Math.min(Math.max(affiliates, 0), 100);
          organic = Math.min(Math.max(organic, 0), 100);

          const totalValue: number = paidSearch + paidSocial + affiliates + organic;

          if (totalValue > 100) {
            // Reset last checked input value to 0
            if (lastCheckedInput) {
              lastCheckedInput.value = '0';
              lastCheckedInput = null;
            }
            // Recalculate total value and remaining value
            paidSearch = paidSearchInput !== null ? parseFloat(paidSearchInput.value) || 0 : 0;
            paidSocial = paidSocialInput !== null ? parseFloat(paidSocialInput.value) || 0 : 0;
            affiliates = affiliatesInput !== null ? parseFloat(affiliatesInput.value) || 0 : 0;
            organic = organicInput !== null ? parseFloat(organicInput.value) || 0 : 0;

            const remainingValue: number = 100 - (paidSearch + paidSocial + affiliates + organic);
            if (otherInput !== null) {
              otherInput.value = remainingValue.toString();
            }
          } else {
            const remainingValue: number = 100 - totalValue;
            if (otherInput !== null) {
              otherInput.value = remainingValue.toString();
            }
            lastCheckedInput = input;
          }

          // Update input values after restriction
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

          // Change label color based on input value
          const parentWrap = input.parentElement?.parentElement;
          const label = parentWrap?.querySelector('.is--calc-label') as HTMLElement;
          if (parseFloat(input.value) > 0) {
            label.style.color = '#DC56F2';
          } else {
            label.style.color = '#FFFFFF';
          }
        });
      }
    });

    // Initialize input values to 0
    window.addEventListener('load', () => {
      if (paidSearchInput !== null) {
        paidSearchInput.value = '0';
      }
      if (paidSocialInput !== null) {
        paidSocialInput.value = '0';
      }
      if (affiliatesInput !== null) {
        affiliatesInput.value = '0';
      }
      if (organicInput !== null) {
        organicInput.value = '0';
      }
      if (otherInput !== null) {
        otherInput.value = '0';
      }

      // Reset label colors on load
      const labels = document.querySelectorAll('.is--calc-label');
      labels.forEach((label) => {
        (label as HTMLElement).style.color = '#FFFFFF';
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
    const resultElement: HTMLElement | null = document.querySelector('.final-value-text');

    // checkboxes
    const surveyToolsCheckbox: HTMLInputElement | null = document.querySelector(
      'input[name="Survey-tools"]'
    );
    const socialMonitoringCheckbox: HTMLInputElement | null = document.querySelector(
      'input[name="Social-monitoring-tools"]'
    );
    const crossChannelAttributionCheckbox: HTMLInputElement | null = document.querySelector(
      'input[name="Cross-channel-attribution-tools"]'
    );
    const competitiveIntelligenceCheckbox: HTMLInputElement | null = document.querySelector(
      'input[name="Competitive-intelligence-tools"]'
    );
    const marketingAgenciesCheckbox: HTMLInputElement | null = document.querySelector(
      'input[name="Marketing-Agencies"]'
    );
    const managementConsultingCheckbox: HTMLInputElement | null = document.querySelector(
      'input[name="Management-Consulting"]'
    );

    // Add event listener for surveyToolsCheckbox
    surveyToolsCheckbox?.addEventListener('change', function (this: HTMLInputElement | null) {
      if (this) {
        // Rest of the code...
        this.checked ? '1' : '0';
      }
    });

    // Add event listener for socialMonitoringCheckbox
    socialMonitoringCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // Rest of the code...
      this.checked ? '1' : '0';
    });

    // Add event listener for crossChannelAttributionCheckbox
    crossChannelAttributionCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // Rest of the code...
      this.checked ? '1' : '0';
    });

    // Add event listener for competitiveIntelligenceCheckbox
    competitiveIntelligenceCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // Rest of the code...
      this.checked ? '1' : '0';
    });

    // Add event listener for marketingAgenciesCheckbox
    marketingAgenciesCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // Rest of the code...
      this.checked ? '1' : '0';
    });

    // Add event listener for managementConsultingCheckbox
    managementConsultingCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // Rest of the code...
      this.checked ? '1' : '0';
    });

    // Add event listener for input changes
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
    function calculateValues() {
      const marketingBudgetValue = marketingBudget !== null ? parseFloat(marketingBudget.value) : 0;
      const marketingTeamSizeValue =
        marketingTeamSize !== null ? parseFloat(marketingTeamSize.value) : 0;
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
        const result =
          marketingBudgetValue * paidSearchPercentage * paidSearchSaving +
          marketingBudgetValue * paidSocialPercentage * paidSocialSaving +
          marketingBudgetValue * affiliatesPercentage * affiliatesSaving +
          marketingBudgetValue * organicPercentage * organicSaving +
          competitiveIntelligenceCheckboxValue * 30000 +
          surveyToolsCheckboxValue * 30000 +
          socialMonitoringCheckboxValue * 30000 +
          crossChannelAttributionCheckboxValue * 30000 +
          managementConsultingCheckboxValue * managementConsultingSaving * marketingBudgetValue +
          marketingAgenciesCheckboxValue * marketingAgencySaving * marketingBudgetValue +
          marketingTeamSizeValue * hoursSaved * costOfUsMarketingEmployee;

        resultElement.textContent = result.toLocaleString();
      }
    }
    // Call calculateValues on window load
    window.addEventListener('load', calculateValues);

    // Call calculateValues whenever there is a change in any input
    inputs.forEach(function (input) {
      input.addEventListener('input', calculateValues);
    });
  });
});

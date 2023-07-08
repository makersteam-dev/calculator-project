window.Webflow ||= [];
window.Webflow.push(() => {
  window.Webflow ||= [];
  window.Webflow.push(() => {
    // save all the inputs as variables
    const marketingBudget: HTMLInputElement = document.querySelector(
      'input#Total-Marketing-Budget'
    )!;
    console.log(marketingBudget);
    const marketingTeamSize: HTMLInputElement = document.querySelector(
      'input#Marketing-Team-Size'
    )!;

    // Save all the inputs as variables
    const paidSearchInput: HTMLInputElement = document.querySelector('input#paid-search')!;
    const paidSocialInput: HTMLInputElement = document.querySelector('input#paid-social')!;
    const affiliatesInput: HTMLInputElement = document.querySelector('input#affiliates')!;
    const organicInput: HTMLInputElement = document.querySelector('input#organic')!;
    const otherInput: HTMLInputElement = document.querySelector('input#other')!;

    // Keep track of last checked input
    let lastCheckedInput: HTMLInputElement | null = null;

    // Add event listener to update otherInput value, check validity, and restrict input values
    [paidSearchInput, paidSocialInput, affiliatesInput, organicInput].forEach((input) => {
      input.addEventListener('input', () => {
        let paidSearch: number = parseFloat(paidSearchInput.value) || 0;
        let paidSocial: number = parseFloat(paidSocialInput.value) || 0;
        let affiliates: number = parseFloat(affiliatesInput.value) || 0;
        let organic: number = parseFloat(organicInput.value) || 0;

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
          paidSearch = parseFloat(paidSearchInput.value) || 0;
          paidSocial = parseFloat(paidSocialInput.value) || 0;
          affiliates = parseFloat(affiliatesInput.value) || 0;
          organic = parseFloat(organicInput.value) || 0;
          const remainingValue: number = 100 - (paidSearch + paidSocial + affiliates + organic);
          otherInput.value = remainingValue.toString();
        } else {
          const remainingValue: number = 100 - totalValue;
          otherInput.value = remainingValue.toString();
          lastCheckedInput = input;
        }

        // Update input values after restriction
        paidSearchInput.value = paidSearch.toString();
        paidSocialInput.value = paidSocial.toString();
        affiliatesInput.value = affiliates.toString();
        organicInput.value = organic.toString();

        // Change label color based on input value
        const parentWrap = input.parentElement!.parentElement!;
        const label = parentWrap.querySelector('.is--calc-label') as HTMLElement;
        if (parseFloat(input.value) > 0) {
          label.style.color = '#DC56F2';
        } else {
          label.style.color = '#FFFFFF';
        }
      });
    });

    // Initialize input values to 0
    window.addEventListener('load', () => {
      paidSearchInput.value = '0';
      paidSocialInput.value = '0';
      affiliatesInput.value = '0';
      organicInput.value = '0';
      otherInput.value = '0';

      // Reset label colors on load
      const labels = document.querySelectorAll('.is--calc-label');
      labels.forEach((label) => {
        (label as HTMLElement).style.color = '#FFFFFF';
      });
    });

    const paidSearchSaving: number = 0.12;
    const paidSocialSaving: number = 0.09;
    const organicSaving: number = 0.05;
    const affiliatesSaving: number = 0.08;
    const managementConsultingSaving: number = 0.025;
    const marketingAgencySaving: number = 0.012;
    const costOfUsMarketingEmployee: number = 142700;
    const hoursSaved: number = 0.28;
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
        // Add null check
        // @ts-ignore
        const surveyToolsCheckboxValue: string = this.checked ? '1' : '0';
        // Rest of the code...
      }
    });

    // Add event listener for socialMonitoringCheckbox
    socialMonitoringCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // @ts-ignore
      const socialMonitoringCheckboxValue: string = this.checked ? '1' : '0';
    });

    // Add event listener for crossChannelAttributionCheckbox
    crossChannelAttributionCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // @ts-ignore
      const crossChannelAttributionCheckboxValue: string = this.checked ? '1' : '0';
    });

    // Add event listener for competitiveIntelligenceCheckbox
    competitiveIntelligenceCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // @ts-ignore
      const competitiveIntelligenceCheckboxValue: string = this.checked ? '1' : '0';
    });

    // Add event listener for marketingAgenciesCheckbox
    marketingAgenciesCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // @ts-ignore
      const marketingAgenciesCheckboxValue: string = this.checked ? '1' : '0';
    });

    // Add event listener for managementConsultingCheckbox
    managementConsultingCheckbox?.addEventListener('change', function (this: HTMLInputElement) {
      // @ts-ignore
      const managementConsultingCheckboxValue: string = this.checked ? '1' : '0';
    });

    // Add event listener for input changes
    const inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll('input');
    function calculateValues() {
      const marketingBudgetValue = parseFloat(marketingBudget.value);
      const marketingTeamSizeValue = parseFloat(marketingTeamSize.value);
      const paidSearch = parseFloat(paidSearchInput.value);
      const paidSocial = parseFloat(paidSocialInput.value);
      const affiliates = parseFloat(affiliatesInput.value);
      const organic = parseFloat(organicInput.value);

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

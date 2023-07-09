/* eslint-disable no-console */
// Copyright 2023 MakersTeam. All rights reserved.
/**
 * Multistep form for the homepage calculator.
 *
 */
export function setupMultistepForm() {
  // Get all the steps and buttons
  const steps = Array.from(document.querySelectorAll('[mt-data-form="step"]')) as HTMLElement[];
  const nextButtons = Array.from(document.querySelectorAll('[mt-data-form="next-btn"]'));
  const backButtons = Array.from(document.querySelectorAll('[mt-data-form="back-btn"]'));
  const editStep = document.querySelector('[mt-data-edit-step="1"]');

  // Create an index to keep track of the current step
  let currentStepIndex = 0;

  // Function to show a specific step and hide the rest
  function showStep(index: number) {
    steps.forEach((step, i) => {
      if (i === index) {
        step.style.display = 'block';
      } else {
        step.style.display = 'none';
      }
    });
  }

  // Function to handle the "next" button click
  function handleNextButtonClick() {
    if (currentStepIndex < steps.length - 1) {
      // eslint-disable-next-line no-plusplus
      currentStepIndex++;
      showStep(currentStepIndex);
    }
  }

  // Function to handle the "back" button click
  function handleBackButtonClick() {
    if (currentStepIndex > 0) {
      // eslint-disable-next-line no-plusplus
      currentStepIndex--;
      showStep(currentStepIndex);
    }
  }

  // Function to handle the edit step click
  function handleEditStepClick() {
    currentStepIndex = 0; // Set current step index to 0 (show the first step)
    showStep(currentStepIndex);
  }

  // Add event listeners to the buttons
  nextButtons.forEach((button) => {
    button.addEventListener('click', handleNextButtonClick);
  });

  backButtons.forEach((button) => {
    button.addEventListener('click', handleBackButtonClick);
  });

  // Show the initial step
  showStep(currentStepIndex);

  // Handle the initial edit step if present
  if (editStep) {
    editStep.addEventListener('click', handleEditStepClick);
  }
}

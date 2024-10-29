import React, { useState, useEffect } from "react";
import { StepFormIndicator, StepProgressBar } from "./StepFormUI";
import { mockAsyncValidation } from "./validation";
import "./_step-form.css";
import { FormConfig, FormWidget } from "@widgets/form/FormWidget";

// Step status type definition
type StepStatus = "incomplete" | "complete" | "skipped" | "active";

export function StepForm<FormData = any>({
  formSequence,
  onFinalSubmit,
  submitButtonText = "Finish",
  nextButtonText = "Next",
  backButtonText = "Back",
  autoSaveKey = "stepFormData",
  validateStep = (data: Record<string, any>) => true,
}: {
  formSequence: [FormData, FormConfig, boolean?][]; // Array of form data, form configuration, and optional skip condition
  onFinalSubmit: (accumulatedData: Record<string, any>) => void; // Callback for final form submission
  submitButtonText?: string;
  nextButtonText?: string;
  backButtonText?: string;
  autoSaveKey?: string; // Auto-save the form data under this key in localStorage
  validateStep?: (data: Record<string, any>) => boolean; // Custom validation function for each step
}) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem(autoSaveKey || "");
      return savedData ? JSON.parse(savedData) : {};
    }
    return {};
  });
  const [stepStatus, setStepStatus] = useState<StepStatus[]>(
    Array(formSequence.length).fill("incomplete"),
  );
  const [currentStepValid, setCurrentStepValid] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-save form data to localStorage (only run in the browser)
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(autoSaveKey || "", JSON.stringify(formData));
    }
  }, [formData, autoSaveKey]);

  // Handle form submission for each step
  const handleStepSubmit = async (currentStepData: Record<string, any>) => {
    const updatedData = { ...formData, ...currentStepData };
    setFormData(updatedData);

    // Simulate async validation
    await mockAsyncValidation(updatedData);

    // Update the current step status to complete
    updateStepStatus(step, "complete");
    navigateToNextStep();
  };

  const handleBackClick = () => {
    navigateToPreviousStep();
  };

  // Update form data on change and validate the step
  const handleFormChange = (
    currentStepData: Record<string, any>,
    isValid: boolean,
  ) => {
    setCurrentStepValid(isValid);
    setFormData((prevData) => ({ ...prevData, ...currentStepData }));
  };

  // Update the status of the current step
  const updateStepStatus = (stepIndex: number, status: StepStatus) => {
    const updatedStatus = [...stepStatus];
    updatedStatus[stepIndex] = status;
    setStepStatus(updatedStatus);
  };

  // Navigate to the next step, skipping any that should be skipped
  const navigateToNextStep = () => {
    let nextStep = step + 1;
    while (nextStep < formSequence.length && formSequence[nextStep][2]) {
      updateStepStatus(nextStep, "skipped");
      nextStep++;
    }
    if (nextStep < formSequence.length) {
      animateToStep(nextStep);
    } else {
      onFinalSubmit(formData); // Final submission
    }
  };

  // Navigate to the previous step, skipping any that were skipped
  const navigateToPreviousStep = () => {
    let prevStep = step - 1;
    while (prevStep >= 0 && formSequence[prevStep][2]) {
      prevStep--;
    }
    if (prevStep >= 0) {
      animateToStep(prevStep);
    }
  };

  // Add transition animation when moving between steps
  const animateToStep = (nextStep: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setStep(nextStep);
      setIsAnimating(false);
    }, 300); // Animation duration
  };

  // Calculate the progress percentage for the progress bar
  const getProgressPercentage = () => {
    const completedSteps = stepStatus.filter(
      (status) => status === "complete",
    ).length;
    return Math.round((completedSteps / formSequence.length) * 100);
  };

  return (
    <div className="step-form">
      <StepProgressBar percentage={getProgressPercentage()} />

      <StepFormIndicator stepStatus={stepStatus} currentStep={step} />

      <h3>
        Step {step + 1} of {formSequence.length}
      </h3>

      {/* Form with animation */}
      <div className={`form-container ${isAnimating ? "fade-out" : "fade-in"}`}>
        {formSequence[step] && (
          <FormWidget
            config={formSequence[step][1]} // Form configuration for the current step
            onSubmit={handleStepSubmit} // Handle form submission for the current step
            onChange={handleFormChange} // Update form data on change
          />
        )}
      </div>

      {/* Navigation buttons */}
      <div className="button-container">
        {step > 0 && (
          <button type="button" onClick={handleBackClick}>
            {backButtonText}
          </button>
        )}

        {step < formSequence.length - 1 ? (
          <button
            type="button"
            onClick={() => handleStepSubmit(formData)}
            disabled={!currentStepValid}
          >
            {nextButtonText}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => handleStepSubmit(formData)}
            disabled={!currentStepValid}
          >
            {submitButtonText}
          </button>
        )}
      </div>
    </div>
  );
}

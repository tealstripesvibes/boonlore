import React from "react";

// Progress bar component
export function StepProgressBar({ percentage }: { percentage: number }) {
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percentage}%` }}></div>
    </div>
  );
}

// Step indicator component
export function StepFormIndicator({
  stepStatus,
  currentStep,
}: {
  stepStatus: string[];
  currentStep: number;
}) {
  return (
    <div className="step-indicators">
      {stepStatus.map((status, index) => (
        <span
          key={index}
          className={`step-indicator ${status} ${index === currentStep ? "active" : ""}`}
        >
          {index + 1}
        </span>
      ))}
    </div>
  );
}

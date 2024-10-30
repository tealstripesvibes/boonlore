// pages/recipes/components/pie/PreparationSteps.tsx

import React, { useState } from "react";
import classNames from "classnames";

// Define the HowToStep interface matching Schema.org
interface HowToStep {
  "@type": "HowToStep";
  text: string;
}

export function PreparationSteps({ steps }: { steps: HowToStep[] }) {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false),
  );
  const [primedSteps, setPrimedSteps] = useState<boolean[]>(
    new Array(steps.length).fill(false),
  );

  const toggleHighlight = (index: number) => () => {
    setActiveStep(index);
    // Toggle priming for the step (highlight without completing)
    const updatedPrimedSteps = [...primedSteps];
    updatedPrimedSteps[index] = !updatedPrimedSteps[index];
    setPrimedSteps(updatedPrimedSteps);
  };

  const completeStep = (index: number) => () => {
    const updatedCompletedSteps = [...completedSteps];
    updatedCompletedSteps[index] = true;
    setCompletedSteps(updatedCompletedSteps);
    // Once the step is completed, remove the priming
    const updatedPrimedSteps = [...primedSteps];
    updatedPrimedSteps[index] = false;
    setPrimedSteps(updatedPrimedSteps);
  };

  return (
    <section className="preparation-steps">
      <h3>Preparation Steps</h3>
      <ol aria-activedescendant={`step-${activeStep}`}>
        {steps.map((step, index) => (
          <li
            id={`step-${index}`}
            aria-checked={completedSteps[index]}
            key={index}
            className={classNames({ primed: primedSteps[index] })}
          >
            <pre>
              <span>{step.text}</span>
            </pre>
            {!completedSteps[index] && (
              <>
                {primedSteps[index] ? (
                  <button onClick={completeStep(index)}>done</button>
                ) : (
                  <button onClick={toggleHighlight(index)}>ready</button>
                )}
              </>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

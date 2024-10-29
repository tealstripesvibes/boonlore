import { IFeatureRegistrationContextState } from "@core/feature/context/group/types";

export function getFrbContextStartState(
  { featuresDisabled }: { featuresDisabled?: boolean } = {
    featuresDisabled: false,
  },
): IFeatureRegistrationContextState {
  return {
    featuresDisabled: !!featuresDisabled,
    stateKey: 0,
    lastAction: null,
    features: { available: {} },
  };
}

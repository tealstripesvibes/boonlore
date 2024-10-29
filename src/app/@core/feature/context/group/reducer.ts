import {
  IFeatureRegistrationContextAction,
  IFeatureRegistrationContextState,
} from "./types";

export const featuresReducer = (
  state: IFeatureRegistrationContextState,
  action: IFeatureRegistrationContextAction
): IFeatureRegistrationContextState => {
  switch (action.type) {
    case "UNREGISTER":
    case "REGISTER":
      return {
        ...state,
        stateKey: (state.stateKey || 0) + 1,
        lastAction: action,
        features: {
          ...state.features,
          available: {
            ...state.features.available,
            [action.payload.featureName]: action.type === "REGISTER",
          },
        },
      };
    default:
      return state;
  }
};

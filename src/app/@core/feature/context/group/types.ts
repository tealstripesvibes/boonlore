import React from "react";

export type IFeatureRegistrationContextState = {
  stateKey: number;
  featuresDisabled: boolean;
  lastAction: IFeatureRegistrationContextAction | null;
  features: {
    available: {
      [name: string]: boolean;
    };
  };
};
export type IFeatureRegistrationContextAction = {
  type: "REGISTER" | "UNREGISTER";
  payload: { featureName: string };
};
export type IFeatureRegistrationContextDispatch =
  React.Dispatch<IFeatureRegistrationContextAction>;
export type IFeatureRegistrationContext = {
  state: IFeatureRegistrationContextState | null;
  dispatch: IFeatureRegistrationContextDispatch;
};

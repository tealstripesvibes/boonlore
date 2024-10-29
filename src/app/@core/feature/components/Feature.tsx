import React, { useContext, useEffect, useMemo, useReducer } from "react";
import { FeatureContextExternal } from "@core/feature/context/group/context";
import { appClassnames } from "@core/styles/classNames";
import { FeatureContextInternal } from "../context/internal/context";
import { IFeature } from "../types";

export type IFeatureProps = {
  name: IFeature["featureId"];
  items?: any;
  children?: any | undefined;
  enabled?: boolean;
};

/**
 * Registers or unregisters the feature from a FeaturesRegistrationContext
 */
function useFeatureRegistrationEffect(
  name: IFeature["featureId"],
  enabled: undefined | boolean,
) {
  const features = useContext(FeatureContextExternal);
  useEffect(() => {
    features.dispatch({
      type: enabled ? "REGISTER" : "UNREGISTER",
      payload: { featureName: name },
    });
    return () => {
      features.dispatch({
        type: "UNREGISTER",
        payload: { featureName: name },
      });
    };
  }, [enabled]);
}

/**
 * Registers a Feature with a given name on the nearest FeatureBoundary
 */
export function Feature({ name, children, enabled = true }: IFeatureProps) {
  useFeatureRegistrationEffect(name, enabled);

  const [state, dispatch] = useReducer((state: IFeature | null) => state, {
    featureId: name,
  });
  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  const features = useContext(FeatureContextExternal);

  if (!enabled) return null;
  if (features.state?.featuresDisabled) return null;
  return (
    <FeatureContextInternal.Provider value={value}>
      {children && (
        <section
          className={appClassnames.services.features.component}
          data-feature-name={name}
        >
          {children}
        </section>
      )}
    </FeatureContextInternal.Provider>
  );
}

export function CurrentFeatureName() {
  const featureContext = useContext(FeatureContextInternal);
  if (!featureContext) return null;
  return (
    <strong>
      <span>{featureContext.state?.featureId}</span>
    </strong>
  );
}

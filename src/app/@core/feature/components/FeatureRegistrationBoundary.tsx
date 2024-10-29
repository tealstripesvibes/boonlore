import React, { ReactNode, useEffect, useMemo, useReducer } from "react";
import { getFrbContextStartState } from "@core/feature/context/group/helpers/getInitialState";
import { Log } from "@core/dev/components/Log";
import { IFeatureRegistrationContextState } from "@core/feature/context/group/types";
import { FeatureContextExternal } from "../context/group/context";
import { featuresReducer } from "../context/group/reducer";
import { Feature } from "@core/feature";
import { featureIds } from "@identities/features/ids";

type IFRB_Props = {
  children: ReactNode;
  featuresDisabled?: boolean;
  onAttemptRegister?: (state: IFeatureRegistrationContextState) => void;
};
/**
 * Keeps track of feature registration status
 */
export function FeatureRegistrationBoundary({
  children,
  featuresDisabled,
  onAttemptRegister,
}: IFRB_Props) {
  const [state, dispatch] = useReducer(
    featuresReducer,
    getFrbContextStartState({ featuresDisabled: featuresDisabled }),
  );
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  useEffect(() => {
    onAttemptRegister?.(contextValue.state);
  }, [contextValue.state.stateKey]);

  return (
    <FeatureContextExternal.Provider value={contextValue}>
      <Feature name={featureIds.app.list_all_features}>
        <Log title="Feature List">{contextValue}</Log>
      </Feature>
      {children}
    </FeatureContextExternal.Provider>
  );
}

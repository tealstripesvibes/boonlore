import { createContext } from "react";
import { getFrbContextStartState } from "@core/feature/context/group/helpers/getInitialState";
import { IFeatureRegistrationContext } from "./types";

/**
 * Describes a collection of states about features
 */
export const FeatureContextExternal = createContext({
  state: getFrbContextStartState(),
  dispatch: () => {},
} as IFeatureRegistrationContext);

import { createContext } from "react";
import { IFeature } from "../../types";

/**
 * Describes the internal state of a feature
 */
export const FeatureContextInternal = createContext<{
  state: IFeature | null;
  dispatch: (action: { type: string }) => void;
} | null>(null);

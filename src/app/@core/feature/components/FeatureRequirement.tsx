import React, { useContext } from "react";
import { Dev } from "@core/dev/components/Dev";
import { FeatureContextExternal } from "../context/group/context";
import { IFeature } from "../types";

type IFeatureRequirementProps = {
  name: IFeature["featureId"];
  children: any;
};

/**
 * Renders children only if the feature required is available
 */
export function FeatureRequirement({
  name,
  children,
}: IFeatureRequirementProps) {
  const features = useContext(FeatureContextExternal);
  if (features.state?.features?.available[name]) return children;
  return <Dev>[this feature is not enabled: {name}]</Dev>;
}

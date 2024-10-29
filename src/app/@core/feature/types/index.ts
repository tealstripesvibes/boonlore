import { IConventionalFeatureID } from "@core/feature/types/id";
import { IExtantFeatureID } from "@identities/features/types";

// todo
type IRealFeatureID = IConventionalFeatureID & IExtantFeatureID;
export type IFeature = { featureId: IRealFeatureID };

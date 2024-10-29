import React, { Suspense } from "react";
import { Feature } from "@core/feature";
import { featureIds } from "@identities/features/ids";
import { IDispositionName } from "@identities/dispositions/types";

const MultiDimensionalButton = React.lazy(() =>
  import("@identities/dispositions/MultiDimensionalButton").then((module) => ({
    default: module.MultiDimensionalButton,
  })),
);

interface LogoButtonParams {
  site: IDispositionName;
  onClick: () => void;
}

export const LogoButton = ({ site, onClick }: LogoButtonParams) => {
  return (
    <Feature name={featureIds.app.site_button}>
      <Suspense>
        <MultiDimensionalButton site={site} onClick={onClick} />
      </Suspense>
    </Feature>
  );
};

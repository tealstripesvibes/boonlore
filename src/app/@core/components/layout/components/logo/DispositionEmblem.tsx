import React, { useEffect, useState } from "react";
import { LogoButton } from "@identities/dispositions/LogoButton";
import { trackEvent } from "@features/analytics/initAnalytics";
import { IDispositionName, siteNames } from "@identities/dispositions/types";
import { Feature } from "@core/feature";
import { featureIds } from "@identities/features/ids";
import { useDisposition } from "@widgets/disposition/Disposition";
import classNames from "classnames";
import "./stylesheets/_logo.scss";

interface DispositionEmblemProps {
  onDispositionChange?: (disposition: IDispositionName) => void;
  primedDisposition?: IDispositionName; // New optional parameter
}

export function DispositionEmblem({
  onDispositionChange,
  primedDisposition,
}: DispositionEmblemProps) {
  const [disposition, setDisposition] = useDisposition(primedDisposition);
  const [engaged, setEngaged] = useState(false);

  useEffect(() => {
    if (siteNames.includes(disposition)) {
      setEngaged(true);
      onDispositionChange?.(disposition);
    }
  }, [disposition, onDispositionChange]);

  const handleDispositionChange = (newDisposition: IDispositionName) => {
    setDisposition(newDisposition);
    setEngaged(true);
    onDispositionChange?.(newDisposition);
  };

  const className = classNames("main-logo", { engaged });

  return (
    <div className={className}>
      <LogoButton
        site={disposition}
        onClick={() => {
          setEngaged(true);
          trackEvent("Click Main Page Button");
        }}
      />
      <Feature name={featureIds.app.site_switcher}>
        <select
          value={disposition}
          onChange={(e) =>
            handleDispositionChange(e.target.value as IDispositionName)
          }
        >
          {siteNames.map((name) => (
            <option value={name} key={name}>
              {name}
            </option>
          ))}
        </select>
      </Feature>
    </div>
  );
}

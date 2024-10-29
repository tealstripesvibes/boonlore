import React, { useEffect, useState } from "react";
import { LogoButton } from "@identities/dispositions/LogoButton";
import { trackEvent } from "@features/analytics/initAnalytics";
import { IDispositionName, siteNames } from "@identities/dispositions/types";
import { Feature } from "@core/feature";
import { featureIds } from "@identities/features/ids";
import { io, Socket } from "socket.io-client";
import "./stylesheets/_logo.scss";
import { siteDomain } from "../../../../../../layouts/Head";
import classNames from "classnames";

import { useDisposition } from "@widgets/disposition/Disposition";
import { Popup } from "@core/components/popup/UiPopup";

interface SiteSelectParams {
  site: string;
  setSite: (param: IDispositionName) => void;
}

function useLocation() {
  if (typeof window === "undefined") return new URL("/", "http://localhost"); // SSR
  return window.location;
}

function useQueryParams() {
  const { search } = useLocation();

  return React.useMemo(
    () => Object.fromEntries(new URLSearchParams(search)),
    [search],
  );
}

function SiteSelect({ site, setSite }: SiteSelectParams) {
  const params = useQueryParams();
  const siteChoice = params.site || siteDomain.replace(".land", "");

  useEffect(() => {
    if (siteNames.indexOf(siteChoice as IDispositionName) > -1) {
      setSite(siteChoice as IDispositionName);
    }
  }, [siteChoice]);

  if (site && site === siteChoice) return null;
  return (
    <Feature name={featureIds.app.site_switcher}>
      <select
        value={site}
        onChange={(e) => setSite(e.target.value as IDispositionName)}
      >
        {siteNames.map((name) => (
          <option value={name} key={name}>
            {name}
          </option>
        ))}
      </select>
    </Feature>
  );
}

const siteName = import.meta.env.VITE_PROJECT_NAME;
const chatUrl = import.meta.env.VITE_CHAT_URL;

let logged = false;

function useHelloSocket() {
  if (logged) return;
  logged = true;
  console.log("missing socket for " + chatUrl, { siteName });
}

function handleMainLogoClick() {
  trackEvent("Click Main Page Button");
}

export function DispositionEmblem() {
  const [disposition, setDisposition] = useDisposition();
  const [engaged, setEngaged] = useState(false);
  useEffect(() => {
    console.log(disposition);
    if (siteNames.indexOf(disposition as IDispositionName) > -1) {
      setEngaged(true);
    }
    return () => {};
  }, [disposition]);

  const socket = useHelloSocket();

  const className = classNames("main-logo", { engaged });
  return (
    <>
      <div className={className}>
        <LogoButton
          site={disposition}
          onClick={() => {
            setEngaged(true);
            handleMainLogoClick();
          }}
        />
        <SiteSelect
          site={disposition}
          setSite={(site) => {
            setDisposition(site);
            setEngaged(true);
          }}
        />
      </div>
    </>
  );
}

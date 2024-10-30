// src/app/@widgets/disposition/Disposition.tsx

import { IDispositionName } from "@identities/dispositions/types";
import { createContext, useContext, useEffect, useState } from "react";
import { trackEvent } from "@features/analytics/initAnalytics";
const defaultDisposition = import.meta.env.VITE_DISPOSITION;
const DispositionContext = createContext({
  disposition: defaultDisposition as IDispositionName,
  setDisposition: (_: IDispositionName) => {},
});

export function useDisposition(
  primedDisposition?: IDispositionName, // Accepts optional primedDisposition
): [IDispositionName, (disposition: IDispositionName) => void] {
  const { disposition, setDisposition } = useContext(DispositionContext);
  const [previousDisposition, setPreviousDisposition] = useState(
    disposition || primedDisposition || defaultDisposition,
  );

  useEffect(() => {
    console.log({ primedDisposition });
    if (!previousDisposition && primedDisposition) {
      setDisposition(primedDisposition);
    }
    setPreviousDisposition(disposition);
    trackEvent("disposition:change");
  }, [disposition, primedDisposition]);

  return [disposition, setDisposition];
}
export function DispositionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [disposition, setDisposition] = useState(defaultDisposition);

  return (
    <DispositionContext.Provider value={{ disposition, setDisposition }}>
      {children}
    </DispositionContext.Provider>
  );
}

export function DispositionSwitch(items: {
  [key in IDispositionName]?: React.ReactNode;
}) {
  const [disposition] = useDisposition();
  return <>{items[disposition] ? items[disposition] : null}</>;
}

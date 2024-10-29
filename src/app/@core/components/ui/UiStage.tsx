import React, { useReducer, useMemo, useEffect, useState } from "react";
import { UiPopups } from "@core/components/popup/UiPopup";
import {
  UiContext,
  uiContextDefault,
  uiReducer,
} from "@core/context/UiContext";
import { Preloader } from "./preloader/Preloader";

interface UiStageProps {
  children: React.ReactNode;
}

const DEBUG_PRELOADER = false;

export function UiStage({ children }: UiStageProps) {
  const [state, dispatch] = useReducer(uiReducer, uiContextDefault);
  const [preloaderState, setPreloaderState] = useState<
    "preload" | "loading" | "loaded" | "minorError" | "fatalError"
  >("preload");

  const contextValue = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state],
  );

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      dispatch({ type: "clear-ui-popups" });
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    // Simulate hydration process and manage preloader states
    setPreloaderState("loading");
    const timeout = setTimeout(() => {
      if (DEBUG_PRELOADER) {
        if (Math.random() > 0.9) {
          setPreloaderState("fatalError");
        } else if (Math.random() > 0.8) {
          setPreloaderState("minorError");
        }
      } else {
        setPreloaderState("loaded");
      }
    }, 50);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <UiContext.Provider value={contextValue}>
      <div className="stage-open" aria-hidden="true" />
      <Preloader state={preloaderState} />
      <UiPopups popups={state.popups} />
      {children}
      <div className="stage-close" aria-hidden="true" />
    </UiContext.Provider>
  );
}

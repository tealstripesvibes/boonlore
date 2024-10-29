import React from "react";
import "./_preloader.scss";

interface PreloaderProps {
  state: "preload" | "loading" | "loaded" | "minorError" | "fatalError";
}

export const Preloader: React.FC<PreloaderProps> = ({ state }) => {
  const renderMessage = () => {
    switch (state) {
      case "preload":
        return "Initializing...";
      case "loading":
        return "Loading...";
      case "minorError":
        return "Minor error occurred";
      case "fatalError":
        return "Fatal error occurred";
      default:
        return null;
    }
  };

  return state !== "loaded" ? (
    <div className={`preloader-wrapper ${state}`}>{renderMessage()}</div>
  ) : null;
};

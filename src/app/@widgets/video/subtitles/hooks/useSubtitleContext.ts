import { useContext } from "react";
import { SubtitleTimerContext } from "../context/SubtitleTimerContext";

export function useSubtitleContext() {
  const subtitleContext = useContext(SubtitleTimerContext);
  const { activePhrase, started, play, stop } = subtitleContext;
  return { started, activePhrase, stop, play: play };
}

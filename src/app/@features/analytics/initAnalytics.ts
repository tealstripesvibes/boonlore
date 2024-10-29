import { useEffect } from "react";

let localTracker = (...params: any) => {};
export const trackEvent = (eventName: string) => {
  localTracker(eventName);
};
export function initAnalytics() {}
function Analytics() {
  useEffect(() => initAnalytics(), []);
  return null;
}
export { Analytics };

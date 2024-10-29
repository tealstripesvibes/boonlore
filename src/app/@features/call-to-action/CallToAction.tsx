import { trackEvent } from "@features/analytics/initAnalytics";
import "./styles/_learn-more.scss";
import { intrinsicRoutes } from "@identities/routes";

export function CallToAction({
  learnMoreLink = intrinsicRoutes.about.href,
  learnMoreText = "Learn More",
  button = false,
}) {
  return (
    <section id="learn-more">
      {button && (
        <button onClick={() => trackEvent("click")}>{learnMoreText}</button>
      )}
      <a href={learnMoreLink}>{learnMoreText}</a>
    </section>
  );
}

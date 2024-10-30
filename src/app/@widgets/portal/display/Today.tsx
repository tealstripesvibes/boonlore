import React, { useState } from "react";
import { VimeoVideo } from "@widgets/video/vimeo/VimeoVideo";
import "./_today.scss";
import { useLocalStorage } from "@services/storage/localStorage/hooks/useLocalStorage";
import classNames from "classnames";
import { appClassnames } from "@core/styles/classNames";

/**
 * Today Component
 *
 * This component is designed for content creators who want to provide a daily,
 * non-intrusive marketing component for their audience. It displays a Vimeo video
 * that can be dismissed for the day, allowing viewers to enjoy subtle daily treats
 * without being overwhelmed by recurring notifications.
 *
 * - Displays a video that can be set to autoplay or play on demand.
 * - Uses local storage to remember if the viewer has dismissed it for the day.
 * - Customizable dismiss button appears after the viewer engages with the content.
 *
 * Ideal for campaigns that feature daily updates, mini-series, or motivational content,
 * the component ensures a fresh touchpoint without pushing users to revisit the content
 * once dismissed for the day.
 */

const VIMEO_KEY = "1024105771/ad4acd0d16";

type DayComponentName = "day.widget" | "day.axiom";
type DayCacheStyle = "key" | "href";

const parseVideoKey = (vimeoKey: string) => {
  const [videoId, videoHash] = vimeoKey.split("/");
  if (!videoId || !videoHash) {
    throw new Error("Invalid VIMEO_KEY format. Expected 'videoId/videoHash'.");
  }
  return { videoId, videoHash };
};

export const generateCacheKey = (
  component: DayComponentName,
  style: DayCacheStyle = "key",
  options?: { sceneId?: string },
): string => {
  const manualKey = import.meta.env.VITE_CACHE_VERSION_KEY || "5";
  const date = new Date();
  const interval = `[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}]`;

  let key = [component, manualKey, interval].join("--");

  if (options?.sceneId) {
    key += `@${options.sceneId}`;
  }

  key = key.replace(/[^a-zA-Z0-9_\-\[]\.]/g, "_").toLowerCase();

  return key;
};

export function Today() {
  const [canDismiss, setCanDismiss] = useState(false);
  const cacheKey = generateCacheKey("day.widget", "key", { sceneId: "today" });
  const [dismissed, setDismissal] = useLocalStorage(cacheKey, false);

  const handleLoad = () => setCanDismiss(true);
  const handleDismiss = () => setDismissal(true);

  const { videoId, videoHash } = parseVideoKey(VIMEO_KEY);

  if (dismissed) return null;

  return (
    <div
      id="day-container"
      className={classNames(appClassnames.ui.scene.__.day)}
    >
      {canDismiss && (
        <button
          onClick={handleDismiss}
          className="dismiss-button"
          aria-label="Dismiss today's video"
        >
          Close for today
        </button>
      )}
      <VimeoVideo
        doAutoplay={false}
        onLoad={handleLoad}
        videoId={videoId}
        videoHash={videoHash}
      />
    </div>
  );
}

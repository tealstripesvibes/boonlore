import React, { useState } from "react";
import { VimeoVideo } from "@widgets/video/vimeo/VimeoVideo";
import "./_style.scss";
import { useLocalStorage } from "@services/storage/localStorage/hooks/useLocalStorage";

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

function parseVideoKey(vimeoKey: string) {
  const [videoId, videoHash] = vimeoKey.split("/");
  return { videoId, videoHash };
}

function generateCacheKey() {
  const manualKey = 5;
  const intervalKey = new Date().toDateString();
  return `day-container:${manualKey}:${intervalKey}`;
}

export function Today() {
  const [canDismiss, setCanDismiss] = useState(false);
  const [dismissed, setDismissal] = useLocalStorage(generateCacheKey(), false);

  const handlePlay = () => setCanDismiss(true);
  const handleDismiss = () => setDismissal(true);

  const { videoId, videoHash } = parseVideoKey(VIMEO_KEY);

  return (
    !dismissed && (
      <div id="day-container">
        {canDismiss && <button onClick={handleDismiss}>Close for today</button>}
        <VimeoVideo
          doAutoplay={false}
          onPlay={handlePlay}
          videoId={videoId}
          videoHash={videoHash}
        />
      </div>
    )
  );
}

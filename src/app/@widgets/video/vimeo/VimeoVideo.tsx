import React, { useEffect, useRef, useState } from "react";
import Vimeo from "@vimeo/player";
import classNames from "classnames";
import { appClassnames } from "@core/styles/classNames";

interface VimeoVideoParams {
  doAutoplay?: boolean;
  title?: string | string[];
  videoId: string;
  videoHash: string;
  onPlay?: () => void;
  onLoad?: () => void;
}

function useVideoParams(videoHash: string, doAutoplay = true) {
  const autoplay = [
    ["autopause", "0"],
    ["autoplay", "1"],
    ["loop", "1"],
    ["background", "1"],
    ["muted", "1"],
  ];
  const params = [
    ["h", videoHash],
    ["badge", "0"],
    ...(doAutoplay ? autoplay : []),
    ["player_id", "0"],
    ["app_id", "58479"],
  ];
  return new URLSearchParams(params).toString();
}

interface UseVimeoVideoParams {
  doAutoplay: boolean;
  ref: React.MutableRefObject<HTMLIFrameElement | null>;
  videoFileId: string;
  videoHash: string;
  setLoading?: (value: boolean) => void;
  onPlay?: { (): void };
  onLoad?: { (): void };
}

function useVimeoVideo({
  doAutoplay,
  ref,
  videoFileId,
  videoHash,
  setLoading,
  onPlay,
  onLoad,
}: UseVimeoVideoParams) {
  const iframe = ref.current;
  const id = `vimeo-player-${videoFileId}`;
  useEffect(() => {
    const player = new Vimeo(id);
    player.on("loaded", function () {
      onLoad?.();
      setLoading?.(false);
    });
    player.on("play", function () {
      console.log("play");
      onPlay?.();
    });
  }, [iframe, onPlay, id]);
  const videoParams = useVideoParams(videoHash, doAutoplay);
  const vimeoUrl = `https://player.vimeo.com/video/${videoFileId}?${videoParams}`;
  return { id, vimeoUrl };
}
export function VimeoVideo({
  doAutoplay = true,
  title,
  videoId,
  videoHash,
  onPlay,
  onLoad,
}: VimeoVideoParams) {
  const [loading, setLoading] = useState(true);
  const ref = useRef<HTMLIFrameElement>(null);

  const { id, vimeoUrl } = useVimeoVideo({
    doAutoplay: doAutoplay,
    ref: ref,
    videoFileId: videoId,
    videoHash: videoHash,
    setLoading: setLoading,
    onPlay: onPlay,
    onLoad: onLoad,
  });

  return (
    <figure className={appClassnames.ui.video.stage}>
      {loading && <div>Loading...</div>}
      <iframe
        id={id}
        width={"100%"}
        height={"100%"}
        ref={ref}
        className={classNames({ loading })}
        src={vimeoUrl}
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title={Array.isArray(title) ? title[0] : title || "Video"}
      ></iframe>
      <figcaption>
        {Array.isArray(title)
          ? title.map((str) => <div key={str}>{str}</div>)
          : title}
      </figcaption>
    </figure>
  );
}

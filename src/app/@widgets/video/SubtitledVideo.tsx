import React, { useState } from "react";
import { Subtitles } from "@widgets/video/subtitles/Subtitles";
import { LoreLandPortal } from "@widgets/portal/interaction/LoreLandPortal";
import { IDispositionName } from "@identities/dispositions/types";
import {
  ISubtitlesData,
  SubtitleTime,
} from "@widgets/video/subtitles/context/SubtitleTimerContext";
import { useSubtitleContext } from "@widgets/video/subtitles/hooks/useSubtitleContext";
import { VimeoVideo } from "@widgets/video/vimeo/VimeoVideo";

interface RenderedScene {
  videoFileId: string;
  videoAnchorId: string;
  setActiveWord: (value: ((prevState: string) => string) | string) => void;
  videoTitle: string;
}

function RenderedScene({
  videoFileId,
  videoAnchorId,
  setActiveWord,
  videoTitle,
}: RenderedScene) {
  const subtitleContext = useSubtitleContext();
  return (
    <section>
      <figure style={{ marginBottom: "3rem" }}>
        <VimeoVideo
          doAutoplay={false}
          videoId={videoFileId}
          videoHash={videoAnchorId}
          onPlay={() => subtitleContext.play()}
        />
        <figcaption>{videoTitle}</figcaption>
      </figure>
      <Subtitles onWord={setActiveWord} />
    </section>
  );
}

function PlaySubtitlesButton() {
  const subtitleContext = useSubtitleContext();
  return <button onClick={() => subtitleContext.play()}>[play]</button>;
}

export function SubtitledVideo({
  videoTitle,
  videoFileId,
  videoAnchorId,
  disposition,
  subtitles,
}: {
  disposition: IDispositionName;
  subtitles: ISubtitlesData;
} & (
  | {
      videoTitle: string;
      videoAnchorId: string;
      videoFileId: string;
    }
  | {
      videoTitle?: undefined;
      videoAnchorId?: undefined;
      videoFileId?: undefined;
    }
)) {
  const [activeWord, setActiveWord] = useState("");

  return (
    <SubtitleTime data={subtitles}>
      <article>
        <h2>{videoTitle}</h2>
        {videoFileId ? (
          <RenderedScene
            videoFileId={videoFileId}
            videoAnchorId={videoAnchorId}
            setActiveWord={setActiveWord}
            videoTitle={videoTitle}
          />
        ) : (
          <>
            <PlaySubtitlesButton />
            <Subtitles onWord={setActiveWord} />
          </>
        )}
        <section>
          <LoreLandPortal
            disposition={disposition}
            title={activeWord.replaceAll("\n", " ")}
          />
        </section>
      </article>
    </SubtitleTime>
  );
}

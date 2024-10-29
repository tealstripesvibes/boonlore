import { useEffect, useState } from "react";
import "./styles/_subtitles.scss";
import md5 from "md5";
import { useSubtitleContext } from "./hooks/useSubtitleContext";
import { useDisposition } from "@widgets/disposition/Disposition";

function getFactshiftLink(phraseHistory: string) {
  return phraseHistory
    ? `https://factshift.com/identity/${md5(phraseHistory)}/?story=${phraseHistory}`
    : "";
}

function usePhraseHistory() {
  const [phraseHistory, setPhraseHistory] = useState("");
  return {
    link: {
      href: getFactshiftLink(phraseHistory),
      title: phraseHistory,
    },
    setPhraseHistory,
  };
}

export function Subtitles({ onWord }: { onWord: (word: string) => void }) {
  const { stop, play, activePhrase, started } = useSubtitleContext();
  function activatePhrase() {
    activePhrase && onWord(activePhrase);
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === " ") {
        if ((e.target as HTMLElement).nodeName === "BUTTON") return;
        activatePhrase();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activePhrase]);

  return (
    <section id="subtitles">
      {!started ? (
        <button className="playpause" onClick={play}>
          start
        </button>
      ) : (
        <button className="playpause" onClick={stop}>
          stop
        </button>
      )}
    </section>
  );
}

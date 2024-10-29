import {
  createContext,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from "react";

export type ISubtitlesData = { timeMap: [number, [string, string]][] };

type ISubtitleTimeMap = Map<number, [string, string]>;

interface ISubtitleTimerContextState {
  started: boolean;
  startedAt?: number;
  activePhrase?: string;

  play: () => void;
  stop: () => void;
  reset: () => void;
  setPhrase: (phrase: string) => void;
}

const defaultSubtitleTimerContextValue: ISubtitleTimerContextState = {
  started: false,
  play: () => {
    console.log("no subtitle context");
  },
  stop: () => {
    console.log("no subtitle context");
  },
  reset: () => {
    console.log("no subtitle context");
  },
  setPhrase: (phrase: string) => {
    console.log("no subtitle context");
  },
};

const SubtitleTimerContext = createContext(defaultSubtitleTimerContextValue);

function useStartCallback(
  data: ISubtitlesData,

  onStart: (value: boolean) => void,
  onActivatePhrase: (value: string) => void,

  contextStateRef: MutableRefObject<ISubtitleTimerContextState>,
  timeCursorRef: MutableRefObject<number>,
  windowTimeoutsRef: MutableRefObject<any[]>,
) {
  function queueTimeouts(timeMap: ISubtitleTimeMap, current: number) {
    let lastTimeInMap = 0;
    timeMap.forEach(([action, str], ts) => {
      if (ts < current) return;
      lastTimeInMap = ts;

      const timeout = setTimeout(() => {
        timeCursorRef.current = ts;
        action === "add" && onActivatePhrase(str);
        action === "remove" && onActivatePhrase("");
      }, ts - current);
      windowTimeoutsRef.current.push(timeout);
    });

    return lastTimeInMap;
  }
  function stopPlayingSubtitles() {
    contextStateRef.current.stop();
  }
  function resetTimer() {
    timeCursorRef.current = 0;
  }
  function getStartTime() {
    return timeCursorRef.current;
  }

  return useCallback(() => {
    console.log("play");
    const timeMap = new Map<number, [string, string]>(data?.timeMap);

    const startTime = getStartTime();
    const endTime = queueTimeouts(timeMap, startTime);
    const duration = endTime - startTime;

    setTimeout(() => {
      stopPlayingSubtitles();
      resetTimer();
    }, duration);

    onStart(true);
  }, [data]);
}

function useStopCallback(
  data: ISubtitlesData,
  onStop: (value: ((prevState: boolean) => boolean) | boolean) => void,
  windowTimeoutsRef: MutableRefObject<any[]>,
) {
  return useCallback(() => {
    windowTimeoutsRef.current.forEach(clearInterval);
    windowTimeoutsRef.current.length = 0;
    onStop(false);
  }, [data]);
}

export function SubtitleTime({
  data,
  children,
}: {
  data: ISubtitlesData;
  children: any;
}) {
  const [started, setStarted] = useState(false);
  const [activePhrase, setActivePhrase] = useState("");
  const cursorTimeRef = useRef(0);
  const windowTimeoutsRef = useRef([] as any[]);

  const contextStateRef = useRef(defaultSubtitleTimerContextValue);
  const stop = useStopCallback(data, setStarted, windowTimeoutsRef);
  const start = useStartCallback(
    data,
    setStarted,
    setActivePhrase,
    contextStateRef,
    cursorTimeRef,
    windowTimeoutsRef,
  );

  contextStateRef.current = {
    started,
    startedAt: cursorTimeRef.current,
    activePhrase,
    play: start,
    stop,
    reset: () => {
      stop();
      setActivePhrase("");
    },
    setPhrase: setActivePhrase,
  };

  return (
    <SubtitleTimerContext.Provider value={contextStateRef.current}>
      {children}
    </SubtitleTimerContext.Provider>
  );
}

export { SubtitleTimerContext };

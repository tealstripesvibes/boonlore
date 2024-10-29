import React, { useCallback, useState } from "react";
import classNames from "classnames";
import { appClassnames as classes } from "../../styles/classNames";
import { Dev } from "./Dev";
import { CurrentFeatureName } from "@core/feature/components/Feature";

const LOGGER = classes.widgets.dev.logger;

type StyleOptions = "json" | "plain";

function useBinaryState(
  defaultState?: boolean,
): [boolean, (force?: boolean) => void] {
  const [state, setState] = useState(!!defaultState);

  const pushToggle = useCallback((force?: boolean) => {
    if (typeof force != void 0) setState(!!force);
    else setState((state) => !state);
  }, []);

  return [state, pushToggle];
}

interface LogActivatorButtonParams {
  isActive: boolean;
  toggle: (force?: boolean) => void;
}
function LogActivatorButton({ isActive, toggle }: LogActivatorButtonParams) {
  return (
    <div className={classNames([LOGGER.components.controls])}>
      <button
        className={isActive ? "deactivate" : "activate"}
        onClick={() => toggle(!isActive)}
      >
        {isActive ? "close" : "open"} <CurrentFeatureName /> Log
      </button>
    </div>
  );
}

type LogParams = {
  style?: StyleOptions;
  open?: boolean;
  children: any;
  title?: string;
  error?: any;
  logReason?: string | null;
};
export function Log({
  children,
  style = "json",
  open,
  logReason = null,
  error,
  title,
}: LogParams) {
  const [isActive, toggleActive] = useBinaryState(false);
  const containerClassName = classNames([
    LOGGER.components.container,
    isActive ? classes.states.active : classes.states.inactive,
  ]);
  const detailsClassName = LOGGER.devLog + (error ? " error" : "");
  return (
    <Dev>
      <div className={containerClassName}>
        <LogActivatorButton isActive={isActive} toggle={toggleActive} />
        <div className={LOGGER.components.wrapper}>
          <details open={open} className={detailsClassName}>
            {title && (
              <summary>
                <span>{title}</span> <span className="reason">{logReason}</span>
              </summary>
            )}
            {children && <pre>{JSON.stringify(children, null, 3)}</pre>}
          </details>
        </div>
      </div>
    </Dev>
  );
}

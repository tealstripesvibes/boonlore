import {useCallback, useState} from 'react';

/** Toggles between 0 and 1 */
export function useToggle(defaultState = 0) {
  const [state, setState] = useState(defaultState);

  const toggleState =
          useCallback(() => {
            setState(+!state);
          }, [state]);

  return [state, toggleState] as const;
}
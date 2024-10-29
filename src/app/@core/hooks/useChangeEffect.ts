import { useEffect, useRef } from "react";

function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function useChangeEffect(
  effectFunction: (...par: any) => any,
  values: any[]
) {
  const previousValues = usePrevious(values);
  useEffect(() => {
    const changed = values.some(
      (value, index) =>
        previousValues && !Object.is(value, previousValues[index])
    );
    if (changed) {
      return effectFunction();
    }
  }, values);
}

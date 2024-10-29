import { useCallback, useEffect, useState } from "react";

const APP_VERSION = 1;

const getStoredValue = (key: string, initialValue: any) => {
  try {
    if (typeof window === "undefined") return initialValue;
    const storedItem = window.localStorage?.getItem(key);
    return storedItem ? JSON.parse(storedItem) : initialValue;
  } catch (error) {
    console.error("Error getting stored value: ", error);
    return initialValue;
  }
};

const serializeValue = (valueToStore: any) => {
  const cache: any[] = [];
  try {
    return JSON.stringify(valueToStore, (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (cache.includes(value)) return; // Discard circular reference
        cache.push(value);
      }
      return value;
    });
  } catch (error) {
    console.error("Error serializing value: ", error);
    return null;
  }
};

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
  append: number = APP_VERSION,
): [T, (value: T | ((currentValue: T) => T)) => void] {
  const storageKey = `${key}:${append}`;
  const [storedValue, setStoredValue] = useState<T>(() =>
    getStoredValue(storageKey, initialValue),
  );

  useEffect(() => {
    setStoredValue(getStoredValue(storageKey, initialValue));
  }, [storageKey, initialValue]);

  const setValue = useCallback(
    (value: T | ((currentValue: T) => T)) => {
      try {
        const valueToStore =
          typeof value === "function"
            ? (value as (currentValue: T) => T)(storedValue)
            : value;

        setStoredValue(valueToStore);

        if (typeof window !== "undefined") {
          const serializedValue = serializeValue(valueToStore);
          if (serializedValue) {
            window.localStorage?.setItem(storageKey, serializedValue);
          }
        }
      } catch (error) {
        console.error("Error setting value: ", error);
      }
    },
    [storedValue, storageKey],
  );

  return [storedValue, setValue];
}

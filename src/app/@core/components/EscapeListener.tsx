import React, {useEffect} from 'react';
export function EscapeListener({onEscape}: { onEscape?: () => void }) {
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape?.();
      }
    };
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, []);
  return (
    <kbd className="esc" onClick={onEscape} onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        onEscape?.();
      }
    }} tabIndex={0}>[esc]</kbd>
  );

}
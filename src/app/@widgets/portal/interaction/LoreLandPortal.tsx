import React, { useEffect, useRef } from "react";
import md5 from "md5";

interface PortalParams {
  disposition: string;
  title: string;
}

export function LoreLandPortal({ disposition, title }: PortalParams) {
  const ref = useRef<HTMLIFrameElement | null>(null);
  useEffect(() => {
    setTimeout(() => {
      const contentWindow = ref.current?.contentWindow;
      contentWindow?.postMessage("[ play ]", "*");
    }, 300);
  }, [disposition]);
  return (
    <>
      {title && (
        <iframe
          ref={ref}
          width={300}
          height={300}
          src={`https://${disposition || "bane"}.land/identity/${md5(title)}?title=${encodeURIComponent(title)}`}
        />
      )}
    </>
  );
}

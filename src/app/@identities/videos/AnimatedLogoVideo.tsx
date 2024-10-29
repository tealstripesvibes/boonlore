import React, { useEffect, useState } from "react";
import Vimeo from "@vimeo/player";
import classNames from "classnames";

export default function AnimatedLogoVideo() {
  const [loading, setLoading] = useState(true);
  const id = "animated-video-logo";

  useEffect(() => {
    const player = new Vimeo(id);

    const handlePlay = () => setLoading(false);

    player.on("play", handlePlay);

    // Cleanup on unmount
    return () => {
      player.off("play", handlePlay);
    };
  }, [id]);

  return (
    <figure>
      <iframe
        id={id}
        className={classNames({ loading })}
        src="https://player.vimeo.com/video/1005452079?h=d675eb524f&badge=0&autopause=0&autoplay=1&loop=1&background=1&muted=1&player_id=0&app_id=58479"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title="Animated Logo"
      />
    </figure>
  );
}

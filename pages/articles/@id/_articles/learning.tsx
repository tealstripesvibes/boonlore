// pages/articles/@id/_articles/learning.ts

import React from "react";
import { Article } from "../../types";
import literacy_health from "../../images/literacy.health_wellness.webp";

export const learning: Article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Learning",
  image: literacy_health,
  hasPart: [
    {
      "@type": "CreativeWork",
      name: "Boon",
      text: "# Hello\n## How are you?",
    },
    {
      "@type": "CreativeWork",
      name: "Bane",
      text: (
        <>
          <h1>Hello!</h1>
          <p>How are you not?</p>
        </>
      ),
    },
    {
      "@type": "CreativeWork",
      name: "Bone",
      text: (
        <>
          <h1>Hello!</h1>
          <p>How have you been?</p>
        </>
      ),
    },
    {
      "@type": "CreativeWork",
      name: "Bonk",
      text: (
        <>
          <h1>Hello!</h1>
          <p>How must you be?</p>
        </>
      ),
    },
    {
      "@type": "CreativeWork",
      name: "Honk",
      text: (
        <>
          <h1>Hello!</h1>
          <p>How will you go?</p>
        </>
      ),
    },
  ],
};

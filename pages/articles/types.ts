// pages/articles/types.ts
import React from "react";

export interface Person {
  "@type": "Person";
  name: string;
  // Additional properties if needed
}

export interface Organization {
  "@type": "Organization";
  name: string;
  // Additional properties if needed
}

export interface ArticlePart {
  "@type": "CreativeWork";
  name: string;
  text?: string | React.ReactElement;
  // Additional properties if needed
}

export interface Article {
  "@context"?: string; // Usually "https://schema.org"
  "@type": "Article";
  headline: string;
  image?: string | string[];
  author?: Person | Organization | (Person | Organization)[];
  datePublished?: string;
  articleBody?: string | React.ReactElement;
  hasPart?: ArticlePart[];
  // Other properties as needed
}

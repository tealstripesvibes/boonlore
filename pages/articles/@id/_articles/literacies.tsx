// pages/articles/@id/_articles/literacies.tsx

import React from "react";
import { generateCacheKey } from "@widgets/portal/display/Today";

// Import images
import literacy_health from "../../images/literacy.health_wellness.webp";
import literacy_social from "../../images/literacy.social_emotional.webp";
import literacy_workplace from "../../images/literacy.workplace.webp";
import literacy_core from "../../images/literacy.core.webp";
import literacy_specialized from "../../images/literacy.specialized.webp";
import literacy_modern from "../../images/literacy.modern.webp";
import { Article } from "../../types";

// Define Literacy types
type Literacy = string;

interface LiteracyDomain {
  title: string;
  img: string;
  set: Literacy[];
}

// Define literacy domains
const modernLiteracies: LiteracyDomain = {
  title: "Modern Literacies",
  img: literacy_modern,
  set: [
    "Media Literacy",
    "Information Literacy",
    "Data Literacy",
    "Technological Literacy",
    "Financial Literacy",
    "Environmental Literacy",
    "Civic Literacy",
  ],
};

const specializedLiteracies: LiteracyDomain = {
  title: "Specialized and Emerging Literacies",
  img: literacy_specialized,
  set: [
    "AI & Machine Learning Literacy",
    "Coding Literacy",
    "Global Literacy",
    "Spatial Literacy",
    "Metacognitive Literacy",
    "Resilience Literacy",
  ],
};

const coreLiteracies: LiteracyDomain = {
  title: "Core Literacies",
  img: literacy_core,
  set: ["Reading Literacy", "Numeracy", "Writing Literacy", "Digital Literacy"],
};

const workplaceLiteracies: LiteracyDomain = {
  title: "Workplace Literacies",
  img: literacy_workplace,
  set: [
    "Entrepreneurial Literacy",
    "Leadership Literacy",
    "Collaborative Literacy",
    "Adaptability Literacy",
  ],
};

const socialEmotionalLiteracies: LiteracyDomain = {
  title: "Social and Emotional Literacies",
  img: literacy_social,
  set: [
    "Emotional Literacy",
    "Social Literacy",
    "Cultural Literacy",
    "Empathy Literacy",
    "Ethical Literacy",
  ],
};

const wellnessLiteracies: LiteracyDomain = {
  title: "Health and Well-being Literacies",
  img: literacy_health,
  set: [
    "Physical Health Literacy",
    "Mental Health Literacy",
    "Safety Literacy",
  ],
};

const literacyDomains: LiteracyDomain[] = [
  modernLiteracies,
  specializedLiteracies,
  coreLiteracies,
  workplaceLiteracies,
  socialEmotionalLiteracies,
  wellnessLiteracies,
];

// Define the LiteracyDomainArticle component
interface LiteracyDomainArticleProps {
  domain: LiteracyDomain;
}

function LiteracyDomainArticle({ domain }: LiteracyDomainArticleProps) {
  return (
    <article>
      <img width={300} src={domain.img} alt={domain.title} />
      <ul>
        {domain.set.map((literacy) => (
          <li key={literacy}>
            <a
              href={`#${generateCacheKey("day.axiom", "href", {
                sceneId: literacy.toLowerCase().replace(/ /g, "-"),
              })}`}
            >
              {literacy}
            </a>
          </li>
        ))}
      </ul>
      <footer>{domain.title}</footer>
    </article>
  );
}

// Create the literacies article
export const literacies: Article = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Literacies",
  hasPart: literacyDomains.map((domain) => ({
    "@type": "CreativeWork",
    name: domain.title,
    text: <LiteracyDomainArticle domain={domain} />,
  })),
};

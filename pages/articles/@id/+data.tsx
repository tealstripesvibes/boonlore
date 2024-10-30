// pages/articles/@id/+data.tsx

import { Article } from "../types";
import { literacies } from "./_articles/literacies";
import { learning } from "./_articles/learning";

export const articles: { [key: string]: Article } = {
  learning: learning,
  literacies: literacies,
};

import { useConfig } from "vike-react/useConfig";
import { PageContext } from "vike/dist/esm/shared/types";

export async function data(pageContext: PageContext) {
  const config = useConfig();
  const id = pageContext.routeParams.id;
  let article = articles[id];
  if (!article) return;
  const seoData = {
    "@context": article["@context"],
    "@type": article["@type"],
    headline: article.headline,
    author: article.author,
    datePublished: article.datePublished,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageContext.urlParsed,
    },
    hasPart: article.hasPart?.map((part: { [x: string]: any; name: any }) => ({
      "@type": part["@type"],
      name: part.name,
    })),
  };

  config({
    Head: article ? (
      <>
        <title>{article.headline}</title>
        <meta name="description" content={`Read about ${article.headline}`} />
        <script type="application/ld+json">{JSON.stringify(seoData)}</script>
        {article.image ? (
          <meta
            property="og:image"
            content={
              typeof article.image === "string"
                ? article.image
                : article.image[0]
            }
          />
        ) : null}
      </>
    ) : null,
  });
}

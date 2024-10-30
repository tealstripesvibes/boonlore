// pages/articles/[id]/Page.tsx

import "../_styles/_page.scss";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { useDisposition } from "@widgets/disposition/Disposition";
import Markdown from "react-markdown";
import { usePageContext } from "vike-react/usePageContext";
import { ReactNode } from "react";
import { DispositionEmblem } from "@core/components/layout/components/logo/DispositionEmblem";
import { articles } from "./+data";

export { Page };

function Article404() {
  return (
    <main id="page__articles">
      <MainHeader />
      <article>
        <h1>Article Not Found</h1>
      </article>
    </main>
  );
}

function usePageIdentifier() {
  const pageContext = usePageContext();
  return pageContext.routeParams?.id ?? null;
}

function ArticleContent({
  headline,
  content,
  mood,
  image,
}: {
  image?: string | string[];
  headline: string;
  content: ReactNode;
  mood: string;
}) {
  return (
    <main id="page__articles">
      <MainHeader />
      <article>
        {image ? (
          <img
            width={300}
            alt={headline}
            src={typeof image === "string" ? image : image[0]}
          />
        ) : null}

        <h1>{headline}</h1>
        <p>Mood: {mood}</p>
        <DispositionEmblem />
        {typeof content === "string" ? <Markdown>{content}</Markdown> : content}
      </article>
    </main>
  );
}

function Page() {
  const id = usePageIdentifier();
  const [mood] = useDisposition();

  if (!id) return <Article404 />;

  const article = articles[id] || articles.learning;

  // Find the article part corresponding to the current mood
  const part = article.hasPart?.find(
    (part: { name: string }) => part.name.toLowerCase() === mood.toLowerCase(),
  );

  if (!part) return <Article404 />; // Handle missing mood

  const content = part.text || null;
  const url = typeof window !== "undefined" ? window.location.href : "";

  // Generate JSON-LD structured data for SEO

  return (
    <>
      <ArticleContent
        image={article.image}
        headline={article.headline}
        content={content}
        mood={mood}
      />
    </>
  );
}

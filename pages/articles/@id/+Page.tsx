import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "../_styles/_page.scss";
import { usePageContext } from "vike-react/usePageContext";
import { topics } from "./topics";

export { Page };

function Page() {
  const pageContext = usePageContext();
  const id = `${pageContext.routeParams?.id}`;
  console.log({ id });

  if (!id) {
    return (
      <main id="page__articles">
        <MainHeader />
        <article>
          <h1>Article Not Found</h1>
        </article>
      </main>
    );
  }
  const article = topics[id];
  return (
    <main id="page__articles">
      <MainHeader />
      <article>
        <h1>{article?.title}</h1>
      </article>
    </main>
  );
}

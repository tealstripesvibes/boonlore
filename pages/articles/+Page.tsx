import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Helmet } from "react-helmet-async";

export { Page };

function Page() {
  return (
    <main id="page__articles">
      <Helmet>
        <title>Articles</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Articles</h1>
      </article>
    </main>
  );
}

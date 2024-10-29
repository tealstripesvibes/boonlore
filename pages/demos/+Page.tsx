import "./_styles/_page.scss";
import { Helmet } from "react-helmet-async";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";

export { Page };

function Page() {
  return (
    <main id="page__demos">
      <Helmet>
        <title>Demos</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Demos</h1>
      </article>
    </main>
  );
}

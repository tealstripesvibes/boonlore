import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { Helmet } from "react-helmet-async";
export { Page };
import "./_styles/_page.scss";

function Page() {
  return (
    <main id="page__services">
      <Helmet>
        <title>Services</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Services</h1>
        <ol>
          <li>concept</li>
          <li>consultation</li>
          <li>cycle</li>
        </ol>
      </article>
    </main>
  );
}

import "./_styles/_page.scss";
import { Helmet } from "react-helmet-async";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";

export { Page };

function Page() {
  return (
    <main id="page__tips">
      <Helmet>
        <title>Tips</title>
      </Helmet>
      <MainHeader />
      <article>
        <h1>Tips</h1>
        <ul>
          <li>spend one year tuning a style</li>
          <li>practice describing your process</li>
          <li>
            learn about{" "}
            <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles">
              accessibility
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}

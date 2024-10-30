import "./_styles/_page.scss";
import { Head } from "vike-react/Head";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";

export { Page };

function Page() {
  return (
    <main id="page__tips">
      <Head>
        <title>Tips</title>
      </Head>
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

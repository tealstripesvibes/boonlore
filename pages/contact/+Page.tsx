import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Head } from "vike-react/Head";

export { Page };

function Page() {
  return (
    <main id="page__index">
      <Head>
        <title>Contact</title>
      </Head>
      <MainHeader />
      <article>
        <h1>Contact</h1>
        <h2>I build software and make art.</h2>
        <h3>How to reach me</h3>
        <ul>
          <li>
            <a href="mailto:email@example.com">Email</a>
          </li>
        </ul>
      </article>
    </main>
  );
}

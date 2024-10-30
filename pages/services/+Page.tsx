import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { Head } from "vike-react/Head";
export { Page };
import "./_styles/_page.scss";

function Page() {
  return (
    <main id="page__services">
      <Head>
        <title>Services</title>
      </Head>
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

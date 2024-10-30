import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Head } from "vike-react/Head";

export { Page };

function Page() {
  return (
    <main id="page__articles">
      <Head>
        <title>Articles</title>
      </Head>
      <MainHeader />
      <article>
        <h1>Articles</h1>
      </article>
    </main>
  );
}

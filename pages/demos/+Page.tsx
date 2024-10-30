import "./_styles/_page.scss";
import { Head } from "vike-react/Head";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";

export { Page };

function Page() {
  return (
    <main id="page__demos">
      <Head>
        <title>Demos</title>
      </Head>
      <MainHeader />
      <article>
        <h1>Demos</h1>
      </article>
    </main>
  );
}

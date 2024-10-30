import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import "./_styles/_page.scss";
import { Head } from "vike-react/Head";
import { articles } from "./@id/+data";
import { intrinsicRoutes } from "@identities/routes";

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
        {Object.entries(articles).map(([path, route], index) => {
          return (
            <li key={index}>
              <a href={`${intrinsicRoutes.articles.href}/${path}`}>{path}</a>
            </li>
          );
        })}
      </article>
    </main>
  );
}

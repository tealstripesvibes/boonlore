import "./_styles/_page.scss";
import { Head } from "vike-react/Head";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";

export { Page };

function Page() {
  return (
    <main id="page__recipes_by_ingredient">
      <Head>
        <title>Recipes by Ingredient</title>
      </Head>
      <MainHeader />
      <article>
        <h1>Recipes by Ingredient</h1>
        <ul>
          <li>
            <a href="/recipes/by/ingredient/butternut-squash">
              Butternut Squash
            </a>
          </li>
        </ul>
      </article>
    </main>
  );
}

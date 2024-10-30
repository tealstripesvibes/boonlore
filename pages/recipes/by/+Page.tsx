import "./_styles/_page.scss";
import { Head } from "vike-react/Head";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { DispositionSwitch } from "@widgets/disposition/Disposition";
import { DispositionEmblem } from "@core/components/layout/components/logo/DispositionEmblem";

export { Page };

function Page() {
  return (
    <main id="page__recipe_categories">
      <Head>
        <title>Recipe Categories</title>
      </Head>
      <MainHeader />
      <article>
        <h1>Recipe Categories</h1>
        <DispositionEmblem />
        <nav>
          <ul>
            <li>
              <a href="/recipes">Mood Recipes</a>
            </li>
            <li>
              <a href="/recipes/by/ingredient">Ingredient Recipes</a>
            </li>
          </ul>
        </nav>
      </article>
    </main>
  );
}

``;

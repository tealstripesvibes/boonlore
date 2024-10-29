import "./_styles/_page.scss";
import { Helmet } from "react-helmet-async";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { DispositionSwitch } from "@widgets/disposition/Disposition";
import { DispositionEmblem } from "@core/components/layout/components/logo/DispositionEmblem";

export { Page };

function Page() {
  return (
    <main id="page__recipes_by_ingredient">
      <Helmet>
        <title>Recipes by Ingredient</title>
      </Helmet>
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

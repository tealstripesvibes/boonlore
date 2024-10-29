import "./_styles/_page.scss";
import { Helmet } from "react-helmet-async";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { DispositionSwitch } from "@widgets/disposition/Disposition";
import { DispositionEmblem } from "@core/components/layout/components/logo/DispositionEmblem";
import butternut_1 from "./_recipes/images/2024-10-B/butternut-hold.webp";
export { Page };

function Recipe({
  summary: { name, description },
}: {
  summary: { name: string; description: string };
}) {
  return (
    <>
      <h3>{name}</h3>
      <h4>{description}</h4>
    </>
  );
}

function Page() {
  const boonRecipe = {
    name: "Roasted Butternut Squash Salad",
    description:
      "A light and fresh salad with roasted butternut squash, spinach, and feta cheese.",
  };

  const baneRecipe = {
    name: "Butternut Squash Curry",
    description:
      "A bold and spicy curry with butternut squash, coconut milk, and red curry paste.",
  };

  const boneRecipe = {
    name: "Butternut Squash Risotto",
    description:
      "A rich and creamy risotto made with slow-cooked butternut squash.",
  };

  const bonkRecipe = {
    name: "Butternut Squash Tartlets",
    description:
      "Small tartlets filled with savory roasted butternut squash and sharp cheese.",
  };

  const honkRecipe = {
    name: "Butternut Squash Holiday Gratin",
    description:
      "A festive dish combining butternut squash and rich, comforting cheese.",
  };

  return (
    <main id="page__recipes--butternut-squash-recipes">
      <Helmet>
        <title>Butternut Squash Recipes</title>
      </Helmet>
      <MainHeader />
      <nav>
        <ul>
          <li>
            <a href="/recipes">Recipes Home</a>
          </li>
        </ul>
      </nav>
      <article>
        <h1>Butternut Squash</h1>
        <h2>Recipes for Butternut Squash</h2>
        <figure>
          <img src={butternut_1} alt="Butternut Squash" />
        </figure>
        <DispositionEmblem />
        <DispositionSwitch
          boon={<Recipe summary={boonRecipe} />}
          bane={<Recipe summary={baneRecipe} />}
          bone={<Recipe summary={boneRecipe} />}
          bonk={<Recipe summary={bonkRecipe} />}
          honk={<Recipe summary={honkRecipe} />}
        />
      </article>
    </main>
  );
}

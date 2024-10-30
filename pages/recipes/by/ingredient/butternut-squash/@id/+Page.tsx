// pages/recipes/by/ingredient/butternut-squash/@id/+Page.tsx

import "../_styles/_page.scss";
import { useEffect, useState } from "react";
import { Head } from "vike-react/Head";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { DispositionSwitch } from "@widgets/disposition/Disposition";
import { DispositionEmblem } from "@core/components/layout/components/logo/DispositionEmblem";
import butternut_1 from "../_recipes/images/2024-10-B/butternut-hold.webp";
import { usePageContext } from "vike-react/usePageContext";
import { IDispositionName } from "@identities/dispositions/types";
import { useData } from "vike-react/useData";

export { Page };

interface HowToStep {
  "@type": "HowToStep";
  text: string;
}

interface Recipe {
  "@context": string;
  "@type": "Recipe";
  name: string;
  description?: string;
  url?: string;
  image?: string;
  recipeIngredient?: string[];
  recipeInstructions?: HowToStep[];
}

function RecipeComponent({ recipe }: { recipe: Recipe }) {
  if (!recipe) return null;

  return (
    <>
      <h3 id={recipe.url?.split("#")[1]}>
        <a href={recipe.url}>{recipe.name}</a>
      </h3>
      <h4>{recipe.description}</h4>
      <figure>
        <img src={recipe.image} alt={recipe.name} />
      </figure>
      <section className="ingredients">
        <h4>Ingredients</h4>
        <ul>
          {recipe.recipeIngredient?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </section>
      <section className="instructions">
        <h4>Instructions</h4>
        <ol>
          {recipe.recipeInstructions?.map((step, index) => (
            <li key={index}>{step.text}</li>
          ))}
        </ol>
      </section>
    </>
  );
}

function useHash(initialHash: string | undefined) {
  const [hash, setHash] = useState(initialHash);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        setHash(window.location.hash.slice(1)); // Remove the '#' character
      };
      window.addEventListener("hashchange", handleHashChange);
      // Update hash state in case the user navigated directly to a hash
      handleHashChange();
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, []);

  return hash;
}

function useActiveRecipe(
  hash: string | undefined,
  recipes: Record<string, Recipe>,
) {
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const recipeKey = hash;
    setActiveRecipe(recipeKey ? recipes[recipeKey] || null : null);
  }, [hash, recipes]);

  return activeRecipe;
}

function usePrimedDisposition(
  hash: string | undefined,
  dispositionToRecipeMap: Record<string, string>,
) {
  const [primedDisposition, setPrimedDisposition] = useState<
    IDispositionName | undefined
  >(undefined);

  useEffect(() => {
    const recipeKey = hash;
    const matchingDisposition = Object.keys(dispositionToRecipeMap).find(
      (key) => dispositionToRecipeMap[key] === recipeKey,
    ) as IDispositionName | undefined;

    setPrimedDisposition(matchingDisposition);
  }, [hash, dispositionToRecipeMap]);

  return primedDisposition;
}

function Page() {
  const { recipes } = useData<{ recipes: Record<string, Recipe> }>();
  const pageContext = usePageContext();
  const hash = useHash(pageContext.routeParams.id);
  const dispositionToRecipeMap: Record<string, string> = {
    boon: "roasted-on-salad",
    bane: "curry",
    bone: "risotto",
    bonk: "tartlets",
    honk: "holiday-gratin",
  };
  const activeRecipe = useActiveRecipe(hash, recipes);
  const primedDisposition = usePrimedDisposition(hash, dispositionToRecipeMap);
  const handleDispositionChange = (newDisposition: string) => {
    const recipeHash = dispositionToRecipeMap[newDisposition];
  };

  return (
    <main id="page__recipes--butternut-squash-recipes">
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
        <DispositionEmblem
          onDispositionChange={handleDispositionChange}
          primedDisposition={primedDisposition}
        />
        {activeRecipe ? (
          <RecipeComponent recipe={activeRecipe} />
        ) : (
          <DispositionSwitch
            boon={<RecipeComponent recipe={recipes["roasted-on-salad"]} />}
            bane={<RecipeComponent recipe={recipes["tartlets"]} />}
            bone={<RecipeComponent recipe={recipes["risotto"]} />}
            bonk={<RecipeComponent recipe={recipes["curry"]} />}
            honk={<RecipeComponent recipe={recipes["holiday-gratin"]} />}
          />
        )}
      </article>
    </main>
  );
}

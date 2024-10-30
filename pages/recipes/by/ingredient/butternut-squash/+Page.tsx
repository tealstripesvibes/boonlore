// pages/recipes/by/ingredient/butternut-squash/+Page.tsx

import "./_styles/_page.scss";
import { useEffect, useState } from "react";
import { Head } from "vike-react/Head";
import { MainHeader } from "@core/components/layout/components/header/MainHeader";
import { DispositionSwitch } from "@widgets/disposition/Disposition";
import { DispositionEmblem } from "@core/components/layout/components/logo/DispositionEmblem";
import butternut_1 from "./_recipes/images/2024-10-B/butternut-hold.webp";

export { Page };

// Define interfaces matching Schema.org types
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

function Page() {
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    // Function to update the active recipe based on the URL hash
    const updateRecipeBasedOnHash = () => {
      const hash = window.location.hash.substring(1); // Remove the '#' character
      switch (hash) {
        case "roasted-on-salad":
          setActiveRecipe(boonRecipe);
          break;
        case "curry":
          setActiveRecipe(baneRecipe);
          break;
        case "risotto":
          setActiveRecipe(boneRecipe);
          break;
        case "tartlets":
          setActiveRecipe(bonkRecipe);
          break;
        case "holiday-gratin":
          setActiveRecipe(honkRecipe);
          break;
        default:
          setActiveRecipe(null);
          break;
      }
    };

    // Call the function on component mount and when the hash changes
    window.addEventListener("hashchange", updateRecipeBasedOnHash);
    updateRecipeBasedOnHash(); // Initial call

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", updateRecipeBasedOnHash);
    };
  }, []);

  const saladImage = "/images/recipes/roasted-butternut-squash-salad.webp";
  const curryImage = "/images/recipes/butternut-squash-curry.webp";
  const risottoImage = "/images/recipes/butternut-squash-risotto.webp";
  const tartletImage = "/images/recipes/butternut-squash-tartlets.webp";
  const gratinImage = "/images/recipes/butternut-squash-holiday-gratin.webp";

  const boonRecipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Roasted Butternut Squash Salad",
    description:
      "A light and fresh salad with roasted butternut squash, spinach, and feta cheese.",
    url: "/recipes/by/ingredient/butternut-squash#roasted-on-salad",
    image: saladImage,
    recipeIngredient: [
      "1 medium butternut squash, peeled and cubed",
      "2 tablespoons olive oil",
      "Salt and pepper to taste",
      "4 cups baby spinach",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup dried cranberries",
      "1/4 cup chopped walnuts",
      "2 tablespoons balsamic vinaigrette",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: "Preheat the oven to 400°F (200°C).",
      },
      {
        "@type": "HowToStep",
        text: "Toss the butternut squash cubes with olive oil, salt, and pepper.",
      },
      {
        "@type": "HowToStep",
        text: "Spread the squash on a baking sheet and roast for 25-30 minutes until tender.",
      },
      {
        "@type": "HowToStep",
        text: "In a large bowl, combine roasted squash, spinach, feta cheese, cranberries, and walnuts.",
      },
      {
        "@type": "HowToStep",
        text: "Drizzle with balsamic vinaigrette and toss to combine.",
      },
    ],
  };

  const baneRecipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Butternut Squash Curry",
    description:
      "A bold and spicy curry with butternut squash, coconut milk, and red curry paste.",
    url: "/recipes/by/ingredient/butternut-squash#curry",
    image: curryImage,
    recipeIngredient: [
      "1 tablespoon vegetable oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tablespoon fresh ginger, minced",
      "2 tablespoons red curry paste",
      "1 medium butternut squash, peeled and cubed",
      "1 can (14 oz) coconut milk",
      "1 cup vegetable broth",
      "Salt to taste",
      "Fresh cilantro for garnish",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: "Heat oil in a large pot over medium heat. Sauté onion until translucent.",
      },
      {
        "@type": "HowToStep",
        text: "Add garlic and ginger; cook for 1 minute.",
      },
      {
        "@type": "HowToStep",
        text: "Stir in red curry paste and cook for another minute.",
      },
      {
        "@type": "HowToStep",
        text: "Add butternut squash, coconut milk, and vegetable broth.",
      },
      {
        "@type": "HowToStep",
        text: "Bring to a boil, then reduce heat and simmer until squash is tender, about 20 minutes.",
      },
      {
        "@type": "HowToStep",
        text: "Season with salt and garnish with fresh cilantro before serving.",
      },
    ],
  };

  const boneRecipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Butternut Squash Risotto",
    description:
      "A rich and creamy risotto made with slow-cooked butternut squash.",
    url: "/recipes/by/ingredient/butternut-squash#risotto",
    image: risottoImage,
    recipeIngredient: [
      "4 cups vegetable broth",
      "2 tablespoons olive oil",
      "1 onion, finely chopped",
      "1 cup Arborio rice",
      "1 cup roasted butternut squash puree",
      "1/2 cup dry white wine",
      "1/2 cup grated Parmesan cheese",
      "2 tablespoons butter",
      "Salt and pepper to taste",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: "Heat the broth in a saucepan and keep it warm.",
      },
      {
        "@type": "HowToStep",
        text: "In a large pan, heat olive oil and sauté onion until translucent.",
      },
      {
        "@type": "HowToStep",
        text: "Add rice and cook, stirring, for 2 minutes.",
      },
      {
        "@type": "HowToStep",
        text: "Pour in white wine and stir until absorbed.",
      },
      {
        "@type": "HowToStep",
        text: "Add broth one ladle at a time, stirring continuously until absorbed before adding more.",
      },
      {
        "@type": "HowToStep",
        text: "Stir in butternut squash puree halfway through cooking.",
      },
      {
        "@type": "HowToStep",
        text: "Once rice is al dente, stir in Parmesan cheese and butter. Season with salt and pepper.",
      },
    ],
  };

  const bonkRecipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Butternut Squash Tartlets",
    description:
      "Small tartlets filled with savory roasted butternut squash and sharp cheese.",
    url: "/recipes/by/ingredient/butternut-squash#tartlets",
    image: tartletImage,
    recipeIngredient: [
      "1 sheet puff pastry, thawed",
      "1 cup roasted butternut squash cubes",
      "1/2 cup sharp cheddar cheese, shredded",
      "1 tablespoon fresh thyme leaves",
      "Salt and pepper to taste",
      "1 egg, beaten (for egg wash)",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: "Preheat oven to 375°F (190°C).",
      },
      {
        "@type": "HowToStep",
        text: "Cut puff pastry into small squares and place them into tartlet molds or on a baking sheet.",
      },
      {
        "@type": "HowToStep",
        text: "In a bowl, mix roasted squash, cheese, thyme, salt, and pepper.",
      },
      {
        "@type": "HowToStep",
        text: "Spoon the mixture onto the pastry squares.",
      },
      {
        "@type": "HowToStep",
        text: "Brush edges with beaten egg.",
      },
      {
        "@type": "HowToStep",
        text: "Bake for 20-25 minutes or until golden brown.",
      },
    ],
  };

  const honkRecipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Butternut Squash Holiday Gratin",
    description:
      "A festive dish combining butternut squash and rich, comforting cheese.",
    url: "/recipes/by/ingredient/butternut-squash#holiday-gratin",
    image: gratinImage,
    recipeIngredient: [
      "2 tablespoons butter",
      "2 tablespoons flour",
      "1 1/2 cups milk",
      "1 cup Gruyère cheese, shredded",
      "1 large butternut squash, thinly sliced",
      "1/2 cup breadcrumbs",
      "Salt and pepper to taste",
      "Pinch of nutmeg",
    ],
    recipeInstructions: [
      {
        "@type": "HowToStep",
        text: "Preheat oven to 375°F (190°C).",
      },
      {
        "@type": "HowToStep",
        text: "In a saucepan, melt butter and whisk in flour to make a roux.",
      },
      {
        "@type": "HowToStep",
        text: "Gradually add milk, whisking constantly until thickened.",
      },
      {
        "@type": "HowToStep",
        text: "Stir in half of the Gruyère cheese, salt, pepper, and nutmeg.",
      },
      {
        "@type": "HowToStep",
        text: "Layer butternut squash slices in a greased baking dish.",
      },
      {
        "@type": "HowToStep",
        text: "Pour cheese sauce over the squash.",
      },
      {
        "@type": "HowToStep",
        text: "Top with remaining Gruyère cheese and breadcrumbs.",
      },
      {
        "@type": "HowToStep",
        text: "Bake for 45-50 minutes until golden and bubbly.",
      },
    ],
  };

  // Collect all recipes for the JSON-LD data
  const recipes = [boonRecipe, baneRecipe, boneRecipe, bonkRecipe, honkRecipe];

  return (
    <main id="page__recipes--butternut-squash-recipes">
      <Head>
        <title>Butternut Squash Recipes</title>
        {/* Include the JSON-LD script for all recipes */}
        <script type="application/ld+json">{JSON.stringify(recipes)}</script>
      </Head>
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
        {activeRecipe ? (
          <RecipeComponent recipe={activeRecipe} />
        ) : (
          <DispositionSwitch
            boon={<RecipeComponent recipe={boonRecipe} />}
            bane={<RecipeComponent recipe={baneRecipe} />}
            bone={<RecipeComponent recipe={boneRecipe} />}
            bonk={<RecipeComponent recipe={bonkRecipe} />}
            honk={<RecipeComponent recipe={honkRecipe} />}
          />
        )}
      </article>
    </main>
  );
}

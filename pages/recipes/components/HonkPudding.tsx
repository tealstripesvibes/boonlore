// pages/recipes/components/HonkPudding.tsx

import React from "react";
import { Ingredients } from "./pie/Ingredients";
import { PreparationSteps } from "./pie/PreparationSteps";
import { PieInfo } from "./pie/PieInfo";

// Define interfaces matching Schema.org types
interface HowToIngredient {
  "@type": "HowToIngredient";
  name: string;
  requiredQuantity?: string;
}

interface HowToStep {
  "@type": "HowToStep";
  text: string;
}

interface Recipe {
  "@context": string;
  "@type": "Recipe";
  name: string;
  description?: string;
  recipeIngredient: string[];
  recipeInstructions: HowToStep[];
}

export function HonkPudding({
  variation = "bread pudding",
}: {
  variation: "bread pudding" | "savory gratin";
}) {
  // Define ingredients as HowToIngredient objects
  const breadPuddingIngredients: HowToIngredient[] = [
    {
      "@type": "HowToIngredient",
      name: "Challah or brioche",
      requiredQuantity: "6 cups",
    },
    {
      "@type": "HowToIngredient",
      name: "Heavy cream",
      requiredQuantity: "2 cups",
    },
    {
      "@type": "HowToIngredient",
      name: "Eggs",
      requiredQuantity: "4 large",
    },
    {
      "@type": "HowToIngredient",
      name: "Gruyère cheese",
      requiredQuantity: "0.5 cup",
    },
    {
      "@type": "HowToIngredient",
      name: "Parmesan cheese",
      requiredQuantity: "0.5 cup",
    },
    {
      "@type": "HowToIngredient",
      name: "Nutmeg",
      requiredQuantity: "0.25 tsp",
    },
    {
      "@type": "HowToIngredient",
      name: "Thyme",
      requiredQuantity: "1 tsp",
    },
    {
      "@type": "HowToIngredient",
      name: "Salt and pepper",
      requiredQuantity: "to taste",
    },
  ];

  const savoryGratinIngredients: HowToIngredient[] = [
    {
      "@type": "HowToIngredient",
      name: "Potatoes",
      requiredQuantity: "4 large",
    },
    {
      "@type": "HowToIngredient",
      name: "Heavy cream",
      requiredQuantity: "2 cups",
    },
    {
      "@type": "HowToIngredient",
      name: "Gruyère cheese",
      requiredQuantity: "1 cup",
    },
    {
      "@type": "HowToIngredient",
      name: "Garlic",
      requiredQuantity: "2 cloves, minced",
    },
    {
      "@type": "HowToIngredient",
      name: "Nutmeg",
      requiredQuantity: "0.25 tsp",
    },
    {
      "@type": "HowToIngredient",
      name: "Thyme",
      requiredQuantity: "1 tsp",
    },
    {
      "@type": "HowToIngredient",
      name: "Salt and pepper",
      requiredQuantity: "to taste",
    },
  ];

  // Define steps as HowToStep objects
  const breadPuddingSteps: HowToStep[] = [
    {
      "@type": "HowToStep",
      text: "Preheat oven to 350°F (175°C).",
    },
    {
      "@type": "HowToStep",
      text: "In a large bowl, whisk eggs, heavy cream, thyme, nutmeg, salt, and pepper.",
    },
    {
      "@type": "HowToStep",
      text: "Toss the cubed bread into the egg mixture until well coated.",
    },
    {
      "@type": "HowToStep",
      text: "Fold in Gruyère and Parmesan cheeses.",
    },
    {
      "@type": "HowToStep",
      text: "Transfer to a buttered baking dish and bake for 30-40 minutes until the top is golden and the center is set.",
    },
  ];

  const savoryGratinSteps: HowToStep[] = [
    {
      "@type": "HowToStep",
      text: "Preheat oven to 350°F (175°C).",
    },
    {
      "@type": "HowToStep",
      text: "Layer the sliced potatoes in a buttered baking dish.",
    },
    {
      "@type": "HowToStep",
      text: "In a saucepan, heat heavy cream with garlic, thyme, nutmeg, salt, and pepper until warmed.",
    },
    {
      "@type": "HowToStep",
      text: "Pour the cream mixture over the potatoes and top with Gruyère cheese.",
    },
    {
      "@type": "HowToStep",
      text: "Bake for 45 minutes to 1 hour, until the potatoes are tender and the top is golden brown.",
    },
  ];

  const selectedIngredients =
    variation === "bread pudding"
      ? breadPuddingIngredients
      : savoryGratinIngredients;

  const selectedSteps =
    variation === "bread pudding" ? breadPuddingSteps : savoryGratinSteps;

  // Generate ingredient strings for the recipeIngredient property
  const ingredientStrings = selectedIngredients.map(
    (ingredient) => `${ingredient.requiredQuantity} ${ingredient.name}`,
  );

  // Define the recipe object matching the Schema.org Recipe type
  const recipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name:
      variation === "bread pudding"
        ? "Honk Bread Pudding"
        : "Honk Savory Gratin",
    description:
      variation === "bread pudding"
        ? "A grounding and rich bread pudding, perfect for adapting to different holiday moods."
        : "A luxurious savory gratin, grounding the meal with a rich and opulent feel.",
    recipeIngredient: ingredientStrings,
    recipeInstructions: selectedSteps,
  };

  return (
    <article id="honk-pudding">
      {/* Include the JSON-LD script */}
      <script type="application/ld+json">{JSON.stringify(recipe)}</script>
      <PieInfo name={recipe.name} description={recipe.description} />
      <section className="recipe">
        <Ingredients items={selectedIngredients} />
        <PreparationSteps steps={selectedSteps} />
      </section>
    </article>
  );
}

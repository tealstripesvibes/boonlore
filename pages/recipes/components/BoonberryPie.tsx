// pages/recipes/components/BoonberryPie.tsx

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

export function BoonberryPie() {
  // Define ingredients as HowToIngredient objects
  const ingredients: HowToIngredient[] = [
    {
      "@type": "HowToIngredient",
      name: "boonberries",
      requiredQuantity: "2 cups",
    },
    {
      "@type": "HowToIngredient",
      name: "sugar",
      requiredQuantity: "1 cup",
    },
    {
      "@type": "HowToIngredient",
      name: "pie crust",
      requiredQuantity: "1 (pre-made)",
    },
    {
      "@type": "HowToIngredient",
      name: "cornstarch",
      requiredQuantity: "2 tbsp",
    },
    {
      "@type": "HowToIngredient",
      name: "butter",
      requiredQuantity: "1 tbsp",
    },
    {
      "@type": "HowToIngredient",
      name: "lemon juice",
      requiredQuantity: "2 tbsp",
    },
  ];

  // Generate ingredient strings for the recipeIngredient property
  const ingredientStrings = ingredients.map(
    (ingredient) => `${ingredient.requiredQuantity} ${ingredient.name}`,
  );

  // Define steps as HowToStep objects
  const steps: HowToStep[] = [
    {
      "@type": "HowToStep",
      text: "Preheat the oven to 375°F (190°C).",
    },
    {
      "@type": "HowToStep",
      text: "In a saucepan, combine boonberries, sugar, cornstarch, and lemon juice. Cook over medium heat until the mixture thickens.",
    },
    {
      "@type": "HowToStep",
      text: "Place the mixture into the pie crust, dot the filling with butter, then seal the pie with its top crust.",
    },
    {
      "@type": "HowToStep",
      text: "Bake for 45-50 minutes, or until the crust is golden brown.",
    },
    {
      "@type": "HowToStep",
      text: "Let the pie cool before serving.",
    },
  ];

  // Define the recipe object matching the Schema.org Recipe type
  const recipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Boonberry Pie",
    description: "A delicious pie made from the finest boonberries.",
    recipeIngredient: ingredientStrings,
    recipeInstructions: steps,
  };

  return (
    <article id="boonberry-pie">
      {/* Include the JSON-LD script */}
      <script type="application/ld+json">{JSON.stringify(recipe)}</script>
      <PieInfo
        name="Boonberry Pie"
        description="A delicious pie made from the finest boonberries."
      />
      <section className="recipe">
        <Ingredients items={ingredients} />
        <PreparationSteps steps={steps} />
      </section>
    </article>
  );
}

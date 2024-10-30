// pages/recipes/components/BaneberryPie.tsx

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

export function BaneberryPie() {
  // Define ingredients as HowToIngredient objects
  const ingredients: HowToIngredient[] = [
    {
      "@type": "HowToIngredient",
      name: "baneberries",
      requiredQuantity: "3 cups",
    },
    {
      "@type": "HowToIngredient",
      name: "dark brown sugar",
      requiredQuantity: "1 cup",
    },
    {
      "@type": "HowToIngredient",
      name: "pie crust",
      requiredQuantity: "1 (homemade or store-bought)",
    },
    {
      "@type": "HowToIngredient",
      name: "arrowroot powder",
      requiredQuantity: "3 tbsp",
    },
    {
      "@type": "HowToIngredient",
      name: "vanilla extract",
      requiredQuantity: "1 tsp",
    },
    {
      "@type": "HowToIngredient",
      name: "butter",
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
      text: "Preheat the oven to 400°F (200°C).",
    },
    {
      "@type": "HowToStep",
      text: "In a large mixing bowl, combine baneberries, dark brown sugar, arrowroot powder, and vanilla extract.",
    },
    {
      "@type": "HowToStep",
      text: "Pour the mixture into the pie crust, dot with butter, and cover with the top crust.",
    },
    {
      "@type": "HowToStep",
      text: "Bake for 50-55 minutes, until the crust is golden brown and the filling is bubbly.",
    },
    {
      "@type": "HowToStep",
      text: "Let the pie cool completely before serving.",
    },
  ];

  // Define the recipe object matching the Schema.org Recipe type
  const recipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Baneberry Pie",
    description:
      "A bold and mysterious pie made with the powerful flavors of baneberries.",
    recipeIngredient: ingredientStrings,
    recipeInstructions: steps,
  };

  return (
    <article id="baneberry-pie">
      {/* Include the JSON-LD script */}
      <script type="application/ld+json">{JSON.stringify(recipe)}</script>
      <PieInfo
        name="Baneberry Pie"
        description="A bold and mysterious pie made with the powerful flavors of baneberries."
      />
      <section className="recipe">
        <Ingredients items={ingredients} />
        <PreparationSteps steps={steps} />
      </section>
    </article>
  );
}

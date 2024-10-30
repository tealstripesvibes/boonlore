// pages/recipes/components/BonkTartlets.tsx

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

export function BonkTartlets() {
  // Define ingredients as HowToIngredient objects
  const ingredients: HowToIngredient[] = [
    {
      "@type": "HowToIngredient",
      name: "almond flour",
      requiredQuantity: "1 cup",
    },
    {
      "@type": "HowToIngredient",
      name: "butter",
      requiredQuantity: "0.25 cup",
    },
    {
      "@type": "HowToIngredient",
      name: "fresh thyme",
      requiredQuantity: "1 tsp",
    },
    {
      "@type": "HowToIngredient",
      name: "lemon zest",
      requiredQuantity: "1 tbsp",
    },
    {
      "@type": "HowToIngredient",
      name: "goat cheese",
      requiredQuantity: "4 oz",
    },
    {
      "@type": "HowToIngredient",
      name: "honey",
      requiredQuantity: "1 tbsp",
    },
    {
      "@type": "HowToIngredient",
      name: "cracked black pepper",
      requiredQuantity: "0.5 tsp",
    },
    {
      "@type": "HowToIngredient",
      name: "salt",
      requiredQuantity: "to taste",
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
      text: "Preheat oven to 350°F (175°C).",
    },
    {
      "@type": "HowToStep",
      text: "Mix almond flour and butter to form a tartlet dough. Press the dough into small tartlet molds.",
    },
    {
      "@type": "HowToStep",
      text: "Bake for 10-12 minutes or until golden brown.",
    },
    {
      "@type": "HowToStep",
      text: "In a bowl, mix goat cheese, honey, lemon zest, thyme, salt, and black pepper.",
    },
    {
      "@type": "HowToStep",
      text: "Once the tartlet shells are cool, fill with the goat cheese mixture and garnish with a sprig of thyme and a dash of citrus zest.",
    },
    {
      "@type": "HowToStep",
      text: "Serve as a final course, bringing a notable citrusy and earthy finish to the meal.",
    },
  ];

  // Define the recipe object matching the Schema.org Recipe type
  const recipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Citrus and Herb-Infused Earthy Tartlets",
    description:
      "A notable and pungent citrus-earth tartlet, perfect for the end of the meal. Picky eaters may avoid the strong flavors, but foodies will appreciate its boldness.",
    recipeIngredient: ingredientStrings,
    recipeInstructions: steps,
  };

  return (
    <article id="bonk-tartlets">
      {/* Include the JSON-LD script */}
      <script type="application/ld+json">{JSON.stringify(recipe)}</script>
      <PieInfo
        name="Citrus and Herb-Infused Earthy Tartlets"
        description="A notable and pungent citrus-earth tartlet, perfect for the end of the meal. Picky eaters may avoid the strong flavors, but foodies will appreciate its boldness."
      />
      <section className="recipe">
        <Ingredients items={ingredients} />
        <PreparationSteps steps={steps} />
      </section>
    </article>
  );
}

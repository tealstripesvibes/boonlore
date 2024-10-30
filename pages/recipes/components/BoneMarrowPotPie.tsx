// pages/recipes/components/BoneMarrowPotPie.tsx

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

export function BoneMarrowPotPie() {
  // Define ingredients as HowToIngredient objects
  const ingredients: HowToIngredient[] = [
    {
      "@type": "HowToIngredient",
      name: "bone marrow",
      requiredQuantity: "4 large bones",
    },
    {
      "@type": "HowToIngredient",
      name: "beef broth",
      requiredQuantity: "2 cups",
    },
    {
      "@type": "HowToIngredient",
      name: "carrots, diced",
      requiredQuantity: "2",
    },
    {
      "@type": "HowToIngredient",
      name: "celery stalks, diced",
      requiredQuantity: "2",
    },
    {
      "@type": "HowToIngredient",
      name: "onion, diced",
      requiredQuantity: "1",
    },
    {
      "@type": "HowToIngredient",
      name: "garlic cloves, minced",
      requiredQuantity: "2",
    },
    {
      "@type": "HowToIngredient",
      name: "thyme",
      requiredQuantity: "1 tsp",
    },
    {
      "@type": "HowToIngredient",
      name: "flour",
      requiredQuantity: "2 tbsp",
    },
    {
      "@type": "HowToIngredient",
      name: "butter",
      requiredQuantity: "2 tbsp",
    },
    {
      "@type": "HowToIngredient",
      name: "pie crust",
      requiredQuantity: "1 (pre-made or homemade)",
    },
    {
      "@type": "HowToIngredient",
      name: "salt and pepper",
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
      text: "Preheat oven to 375°F (190°C).",
    },
    {
      "@type": "HowToStep",
      text: "In a large pot, melt butter over medium heat and sauté onions, garlic, carrots, and celery until tender.",
    },
    {
      "@type": "HowToStep",
      text: "Add flour to the vegetables and stir to form a roux, cooking for about 2 minutes.",
    },
    {
      "@type": "HowToStep",
      text: "Slowly whisk in the beef broth and bring to a simmer.",
    },
    {
      "@type": "HowToStep",
      text: "Once simmering, add roasted bone marrow from the bones and stir in thyme, salt, and pepper. Cook for 10 minutes to thicken.",
    },
    {
      "@type": "HowToStep",
      text: "Pour the mixture into a pie dish, cover with the pie crust, and bake for 30-35 minutes until the crust is golden.",
    },
    {
      "@type": "HowToStep",
      text: "Let cool slightly before serving.",
    },
  ];

  // Define the recipe object matching the Schema.org Recipe type
  const recipe: Recipe = {
    "@context": "https://schema.org/",
    "@type": "Recipe",
    name: "Bone Marrow Pot Pie",
    description:
      "A rich and savory pot pie filled with roasted bone marrow, vegetables, and herbs for a deeply satisfying dish.",
    recipeIngredient: ingredientStrings,
    recipeInstructions: steps,
  };

  return (
    <article id="bone-marrow-pot-pie">
      {/* Include the JSON-LD script */}
      <script type="application/ld+json">{JSON.stringify(recipe)}</script>
      <PieInfo
        name="Bone Marrow Pot Pie"
        description="A rich and savory pot pie filled with roasted bone marrow, vegetables, and herbs for a deeply satisfying dish."
      />
      <section className="recipe">
        <Ingredients items={ingredients} />
        <PreparationSteps steps={steps} />
      </section>
    </article>
  );
}
